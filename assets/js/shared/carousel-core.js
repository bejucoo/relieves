class ContinuousCarousel {
    constructor(container, galleries, options = {}) {
        // Inicialización de propiedades básicas del carrusel
        this.container = container;
        this.galleries = galleries;  // Configuración de las galerías
        this.options = {
            speed: options.speed || 1,
            direction: options.direction || 'left',
            title: options.title || '',
            titlePosition: options.titlePosition || 'left',
            color: options.color || '#66CC66',
            gap: options.gap || 20,
            galleryId: options.id || ''
        };
        
        this.items = [];
        this.isPaused = false;
        this.totalWidth = 0;
        this.init();
    }

    init() {
        // Configuración inicial del contenedor del carrusel
        this.container.className = 'gallery-row';
        this.container.style.setProperty('--case-color', this.options.color);
        
        // Posicionamiento del título según la configuración
        if (this.options.titlePosition === 'left') {
            this.container.appendChild(this.createTitleElement());
        }
        
        // Crear el contenedor principal del carrusel
        this.carouselContainer = document.createElement('div');
        this.carouselContainer.className = 'carousel-container';
        this.container.appendChild(this.carouselContainer);
        
        if (this.options.titlePosition === 'right') {
            this.container.appendChild(this.createTitleElement());
        }

        this.setupCarousel();
    }

    createTitleElement() {
        // Crear y configurar el elemento del título
        const titleContainer = document.createElement('div');
        titleContainer.className = `gallery-title ${this.options.titlePosition}`;
        
        const titleContent = document.createElement('div');
        titleContent.className = 'gallery-title-content';
        titleContent.style.color = this.options.color;
        titleContent.textContent = this.options.title;
        
        titleContainer.appendChild(titleContent);
        return titleContainer;
    }

    async setupCarousel() {
        await this.loadInitialImages();
        this.startAnimation();
        this.setupEventListeners();
    }

    async loadInitialImages() {
        // Cargar el primer conjunto de imágenes
        const baseItems = await this.createImageSet(this.galleries);
        this.items.push(...baseItems);

        // Calcular el ancho total necesario
        const containerWidth = this.carouselContainer.offsetWidth;
        this.totalWidth = this.calculateTotalWidth();

        // Duplicar imágenes hasta llenar el viewport más buffer
        while (this.totalWidth < containerWidth * 2) {
            const newItems = await this.createImageSet(this.galleries);
            this.items.push(...newItems);
            this.totalWidth = this.calculateTotalWidth();
        }
    }

    async createImageSet(galleries) {
        const elements = [];
        const loadPromises = galleries.map((item, arrayIndex) => {
            return new Promise((resolve) => {
                const element = document.createElement('div');
                element.className = 'carousel-item';
                
                const img = document.createElement('img');
                img.src = item.thumbnail || item;
                img.loading = 'lazy';
                
                // Asegurarnos de que tenemos toda la información necesaria
                if (typeof item === 'object') {
                    // Usamos el índice del item si existe, o creamos uno basado en la posición
                    const itemIndex = item.index || arrayIndex + 1;
                    
                    element.dataset.type = item.type;
                    element.dataset.content = item.fullContent || '';
                    element.dataset.index = itemIndex;
                    
                    // Asegurarnos de que pasamos el item completo y el índice correcto
                    element.addEventListener('click', (e) => {
                        e.preventDefault();
                        console.log('Click en item:', item); // Debug
                        if (item.type === 'model') {
                            this.openInLightbox({
                                ...item,
                                index: itemIndex
                            }, itemIndex);
                        } else {
                            this.openInLightbox(item, itemIndex);
                        }
                    });
                }
                
                img.onload = () => {
                    const position = this.totalWidth + (arrayIndex * (img.width + this.options.gap));
                    element.style.transform = `translateX(${position}px)`;
                    resolve(element);
                };
                
                element.appendChild(img);
                this.carouselContainer.appendChild(element);
                elements.push(element);
            });
        });
    
        await Promise.all(loadPromises);
        return elements;
    }

    openInLightbox(item, index) {
        if (window.lightbox) {
            // Encontrar la galería correcta
            const galleryConfig = galleryConfigs.find(g => g.id === this.options.galleryId);
            if (!galleryConfig) {
                console.error('No se encontró la configuración de la galería');
                return;
            }
    
            console.log('Abriendo en lightbox:', {
                item,
                index,
                total: galleryConfig.items.length,
                galleryId: this.options.galleryId
            });
    
            window.lightbox.open({
                item: {
                    ...item,
                    type: item.type || 'image',
                    index: index
                },
                index: index,
                total: galleryConfig.items.length,
                galleryId: this.options.galleryId
            });
        } else {
            console.warn('Lightbox no inicializado');
        }
    }

    calculateTotalWidth() {
        return this.items.reduce((width, item) => {
            const img = item.querySelector('img');
            return width + img.offsetWidth + this.options.gap;
        }, 0);
    }

    getItemPosition(item) {
        const transform = new DOMMatrix(getComputedStyle(item).transform);
        return transform.m41;
    }

    startAnimation() {
        let lastTime = performance.now();
        let pauseStartTime = null;
        let accumulatedPauseTime = 0;
        
        const animate = (currentTime) => {
            if (!this.isPaused) {
                if (pauseStartTime !== null) {
                    accumulatedPauseTime = currentTime - pauseStartTime;
                    lastTime = currentTime - accumulatedPauseTime;
                    pauseStartTime = null;
                }
    
                const deltaTime = (currentTime - lastTime - accumulatedPauseTime);
                lastTime = currentTime - accumulatedPauseTime;
                
                const speed = this.options.direction === 'left' ? -1 : 1;
                const easeFactor = pauseStartTime === null ? 1 : Math.min((currentTime - lastTime) / 500, 1);
                const moveAmount = (speed * this.options.speed * deltaTime * easeFactor) / 16;

                this.items.forEach(item => {
                    const currentX = this.getItemPosition(item);
                    const itemWidth = item.offsetWidth;
                    const containerRect = this.carouselContainer.getBoundingClientRect();
                    
                    let newX = currentX + moveAmount;

                    if (this.options.direction === 'left') {
                        if (currentX + itemWidth < 0) {
                            const lastPosition = Math.max(...this.items.map(i => 
                                this.getItemPosition(i) + i.offsetWidth
                            ));
                            newX = lastPosition + this.options.gap;
                        }
                    } else {
                        if (currentX > containerRect.width) {
                            const firstPosition = Math.min(...this.items.map(i => 
                                this.getItemPosition(i)
                            ));
                            newX = firstPosition - itemWidth - this.options.gap;
                        }
                    }
                    
                    item.style.transform = `translateX(${newX}px)`;
                });
            } else {
                if (pauseStartTime === null) {
                    pauseStartTime = currentTime;
                }
            }
            
            this.animationFrame = requestAnimationFrame(animate);
        };

        this.animationFrame = requestAnimationFrame(animate);
    }

    setupEventListeners() {
        // Configurar eventos de pausa al hover
        this.carouselContainer.addEventListener('mouseenter', () => {
            this.isPaused = true;
        });

        this.carouselContainer.addEventListener('mouseleave', () => {
            this.isPaused = false;
        });

        // Manejar redimensionamiento de ventana
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    handleResize() {
        const containerWidth = this.carouselContainer.offsetWidth;
        this.totalWidth = this.calculateTotalWidth();
        
        if (this.totalWidth < containerWidth * 2) {
            this.loadInitialImages();
        }
    }

    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        this.items = [];
        while (this.carouselContainer.firstChild) {
            this.carouselContainer.firstChild.remove();
        }
    }
}

class GalleriesManager {
    constructor(configs) {
        this.configs = configs;
        this.instances = [];
    }
    
    init() {
        this.configs.forEach((config, index) => {
            const container = document.getElementById(config.id);
            if (container) {
                this.instances.push(new ContinuousCarousel(container, config.items, {
                    direction: index % 2 === 0 ? 'left' : 'right',
                    speed: 0.5,
                    title: config.title,
                    titlePosition: index % 2 === 0 ? 'left' : 'right',
                    color: getCurrentCase()?.color || '#66CC66',
                    id: config.id
                }));
            }
        });
    }
    
    destroy() {
        this.instances.forEach(instance => instance.destroy());
        this.instances = [];
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    if (typeof galleryConfigs !== 'undefined') {
        const manager = new GalleriesManager(galleryConfigs);
        manager.init();
    }
});