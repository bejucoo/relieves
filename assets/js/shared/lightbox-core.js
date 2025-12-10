class Lightbox {
    constructor() {
        this.currentGallery = null;
        this.currentIndex = 0;
        this.totalItems = 0;
        this.player = null;
        
        this.createLightboxElements();
        this.setupEventListeners();
    }

    createLightboxElements() {
        this.container = document.createElement('div');
        this.container.className = 'lightbox-overlay';
        this.container.style.display = 'none';

        this.mainContent = document.createElement('div');
        this.mainContent.className = 'lightbox-main-content';

        this.content = document.createElement('div');
        this.content.className = 'lightbox-content';

        // Crear el elemento para el título
        this.titleElement = document.createElement('div');
        this.titleElement.className = 'lightbox-title';
        
        this.prevButton = document.createElement('button');
        this.prevButton.className = 'lightbox-nav prev';
        this.prevButton.innerHTML = '←';

        this.nextButton = document.createElement('button');
        this.nextButton.className = 'lightbox-nav next';
        this.nextButton.innerHTML = '→';

        this.counter = document.createElement('div');
        this.counter.className = 'lightbox-counter';

        this.closeButton = document.createElement('button');
        this.closeButton.className = 'lightbox-close';
        this.closeButton.innerHTML = '×';

        this.chaptersContainer = document.createElement('div');
        this.chaptersContainer.className = 'lightbox-chapters';

        this.mainContent.appendChild(this.content);
        this.container.appendChild(this.mainContent);
        this.container.appendChild(this.titleElement);
        this.container.appendChild(this.prevButton);
        this.container.appendChild(this.nextButton);
        this.container.appendChild(this.counter);
        this.container.appendChild(this.closeButton);
        this.container.appendChild(this.chaptersContainer);

        document.body.appendChild(this.container);
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (this.container.style.display !== 'none') {
                switch(e.key) {
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'Escape':
                        this.close();
                        break;
                }
            }
        });

        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
        this.closeButton.addEventListener('click', () => this.close());

        this.container.addEventListener('click', (e) => {
            if (e.target === this.container) {
                this.close();
            }
        });
    }

    loadVideo(videoId, chapters, item) {
        this.titleElement.style.display = 'none';
        this.content.innerHTML = '';
        this.chaptersContainer.innerHTML = '';
    
        const videoWithChapters = document.createElement('div');
        videoWithChapters.className = 'video-with-chapters';
    
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
    
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
        iframe.className = 'lightbox-video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
    
        videoContainer.appendChild(iframe);
        videoWithChapters.appendChild(videoContainer);
    
        if (chapters && chapters.length > 0) {
            const chaptersContainer = document.createElement('div');
            chaptersContainer.className = 'chapters-container';
    
            const chaptersTitle = document.createElement('h3');
            chaptersTitle.className = 'chapters-title';
            const menuTitle = item.menuTitle || 'Índice del video';
            chaptersTitle.textContent = menuTitle;
            chaptersContainer.appendChild(chaptersTitle);
    
            const chaptersList = document.createElement('ul');
            chaptersList.className = 'chapters-list';
    
            chapters.forEach((chapter, index) => {
                const chapterItem = document.createElement('li');
                chapterItem.className = 'chapter-item';
                chapterItem.innerHTML = `
                    <span class="chapter-number">${index + 1}.</span>
                    <span class="chapter-title">${chapter.title}</span>
                    <span class="chapter-time">${this.formatTime(chapter.time)}</span>
                `;
                chapterItem.addEventListener('click', () => {
                    if (this.player) {
                        this.player.seekTo(chapter.time);
                    }
                });
                chaptersList.appendChild(chapterItem);
            });
    
            chaptersContainer.appendChild(chaptersList);
            videoWithChapters.appendChild(chaptersContainer);
        }
    
        this.content.appendChild(videoWithChapters);
    
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    
        const initPlayer = () => {
            this.player = new YT.Player(iframe, {
                events: {
                    'onReady': () => {
                        console.log('YouTube player ready');
                    },
                    'onStateChange': (event) => {
                        console.log('Player state changed:', event.data);
                    }
                }
            });
        };
    
        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }
    }

    loadImage(url, caption) {
        const container = document.createElement('div');
        container.className = 'lightbox-image-container';
        
        const img = document.createElement('img');
        img.src = url;
        img.className = 'lightbox-image';
        
        const captionElement = document.createElement('div');
        captionElement.className = 'lightbox-caption';
        captionElement.textContent = caption || '';
        
        container.appendChild(img);
        container.appendChild(captionElement);
        this.content.appendChild(container);
    }

    load3DModel(url, caption, caseColor) {
        console.log('Iniciando carga de modelo 3D desde:', url);
    
        // Fase 1: Preparación del contenedor y elementos de UI
        const container = document.createElement('div');
        container.className = 'lightbox-model-container';
        container.style.setProperty('--case-color', caseColor);
        
        const modelContainer = document.createElement('div');
        modelContainer.className = 'lightbox-model';
        
        const captionElement = document.createElement('div');
        captionElement.className = 'lightbox-caption';
        captionElement.textContent = caption || '';
        
        container.appendChild(modelContainer);
        container.appendChild(captionElement);
        this.content.appendChild(container);
    
        const loadingElement = document.createElement('div');
        loadingElement.className = 'model-loading';
        loadingElement.textContent = 'Inicializando visor 3D...';
        modelContainer.appendChild(loadingElement);
    
        // Función auxiliar para cargar scripts de forma asíncrona
        // Esta función verifica si un script ya está cargado antes de intentar cargarlo nuevamente
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (src.includes('three.min.js') && typeof THREE !== 'undefined') {
                    console.log('Three.js ya está cargado');
                    resolve();
                    return;
                }
                
                if (src.includes('OBJLoader.js') && THREE.OBJLoader) {
                    console.log('OBJLoader ya está cargado');
                    resolve();
                    return;
                }
                
                if (src.includes('OrbitControls.js') && THREE.OrbitControls) {
                    console.log('OrbitControls ya está cargado');
                    resolve();
                    return;
                }
    
                console.log(`Cargando script: ${src}`);
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => {
                    console.log(`Script cargado exitosamente: ${src}`);
                    resolve();
                };
                script.onerror = (error) => {
                    console.error(`Error cargando script: ${src}`, error);
                    reject(error);
                };
                document.head.appendChild(script);
            });
        };
    
        Promise.all([
            loadScript('https://unpkg.com/three@0.128.0/build/three.min.js'),
            loadScript('https://unpkg.com/three@0.128.0/examples/js/loaders/OBJLoader.js'),
            loadScript('https://unpkg.com/three@0.128.0/examples/js/controls/OrbitControls.js')
        ]).then(() => {
            console.log('Todas las dependencias cargadas, iniciando carga del modelo');
            loadingElement.textContent = 'Cargando modelo 3D...';
            this.initModel(container, loadingElement, url);
        }).catch(error => {
            console.error('Error en la carga de dependencias:', error);
            loadingElement.textContent = 'Error inicializando el visor 3D';
        });
    }

    initModel(container, loadingElement, url) {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
    
        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            5000
        );
    
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);
    
        const keyLight = new THREE.DirectionalLight(0xffffff, 1);
        keyLight.position.set(5, 5, 5);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 1024;
        keyLight.shadow.mapSize.height = 1024;
        scene.add(keyLight);
    
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(-5, 2, -5);
        scene.add(fillLight);
    
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
        rimLight.position.set(0, 10, 0);
        scene.add(rimLight);
    
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
    
        const loader = new THREE.OBJLoader();
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                try {
                    const lines = data.split('\n');
                    const processedLines = lines.filter(line => {
                        line = line.trim();
                        return line.startsWith('v ') || 
                               line.startsWith('vn ') || 
                               line.startsWith('vt ') || 
                               line.startsWith('f ');
                    });
    
                    const processedData = processedLines.join('\n');
                    const model = loader.parse(processedData);
    
                    const materialBase = new THREE.MeshStandardMaterial({
                        color: 0xffffff,
                        roughness: 0.5,
                        metalness: 0.3,
                        side: THREE.DoubleSide
                    });
    
                    model.traverse(child => {
                        if (child instanceof THREE.Mesh) {
                            child.material = materialBase;
    
                            const geoEdges = new THREE.EdgesGeometry(child.geometry, 30);
                            const lineSegments = new THREE.LineSegments(
                                geoEdges,
                                new THREE.LineBasicMaterial({ 
                                    color: 0x000000, 
                                    linewidth: 1 
                                })
                            );
                            child.add(lineSegments);
    
                            const geometry = child.geometry;
                            const positions = geometry.attributes.position;
                            
                            for (let i = 0; i < positions.array.length; i++) {
                                if (isNaN(positions.array[i])) {
                                    positions.array[i] = 0;
                                }
                            }
                            
                            geometry.computeVertexNormals();
                            geometry.computeBoundingBox();
                            geometry.computeBoundingSphere();
                        }
                    });
    
                    scene.add(model);
    
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const distance = maxDim * 1.6;
    
                    camera.position.set(
                        center.x - distance * 0.8,
                        center.y + distance * 0.5,
                        center.z - distance * 0.7
                    );
                    camera.lookAt(center);
                    
                    controls.target.copy(center);
                    controls.update();
    
                    loadingElement.remove();
    
                    function animate() {
                        requestAnimationFrame(animate);
                        controls.update();
                        renderer.render(scene, camera);
                    }
                    animate();
    
                } catch (error) {
                    console.error('Error procesando el modelo:', error);
                    loadingElement.textContent = 'Error al procesar el modelo';
                }
            })
            .catch(error => {
                console.error('Error cargando el archivo:', error);
                loadingElement.textContent = 'Error al cargar el archivo';
            });
    
        const handleResize = () => {
            if (camera) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);
    
        this.modelCleanup = () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            controls.dispose();
        };
    }

    open({ item, index, total, galleryId }) {
        this.currentGallery = galleryId;
        this.currentIndex = index;
        this.totalItems = total;
        
        this.updateCounter();
        
        this.prevButton.style.display = total > 1 ? 'block' : 'none';
        this.nextButton.style.display = total > 1 ? 'block' : 'none';

        this.content.innerHTML = '';
        this.chaptersContainer.innerHTML = '';
        this.chaptersContainer.classList.remove('visible');
        
        // Reset título
        this.titleElement.classList.remove('visible');
        this.titleElement.style.display = 'none';
        
        switch(item.type) {
            case 'image':
                this.loadImage(item.fullContent, item.caption);
                break;
            case 'model':
                this.load3DModel(item.modelUrl, item.caption);
                break;
            case 'video':
                this.loadVideo(item.videoId, item.chapters, item);
                break;
        }

        this.container.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    prev() {
        let newIndex = this.currentIndex > 1 ? this.currentIndex - 1 : this.totalItems;
        const prevItem = this.findItemByIndex(newIndex);
        
        if (prevItem) {
            this.open({
                item: prevItem,
                index: newIndex,
                total: this.totalItems,
                galleryId: this.currentGallery
            });
        }
    }
    
    next() {
        let newIndex = this.currentIndex < this.totalItems ? this.currentIndex + 1 : 1;
        const nextItem = this.findItemByIndex(newIndex);
        
        if (nextItem) {
            this.open({
                item: nextItem,
                index: newIndex,
                total: this.totalItems,
                galleryId: this.currentGallery
            });
        }
    }

    close() {
        if (this.modelCleanup) {
            this.modelCleanup();
            this.modelCleanup = null;
        }
        if (this.updateActiveChapter) {
            clearInterval(this.updateActiveChapter);
        }
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
        this.container.style.display = 'none';
        document.body.style.overflow = '';
        this.content.innerHTML = '';
        this.chaptersContainer.innerHTML = '';
        this.chaptersContainer.classList.remove('visible');
        this.titleElement.classList.remove('visible');
        this.titleElement.style.display = 'none';
    }

    updateCounter() {
        this.counter.textContent = `${this.currentIndex}/${this.totalItems}`;
    }

    findItemByIndex(index) {
        const gallery = galleryConfigs.find(g => g.id === this.currentGallery);
        return gallery ? gallery.items.find(item => item.index === index) : null;
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

window.lightbox = new Lightbox();