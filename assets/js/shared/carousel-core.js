class ContinuousCarousel {
    constructor(container, galleries, options = {}) {
        this.container = container;
        this.galleries = galleries;
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
        this.container.className = 'gallery-row';
        this.container.style.setProperty('--case-color', this.options.color);
		this.container.appendChild(this.createTitleElement());

        this.carouselContainer = document.createElement('div');
        this.carouselContainer.className = 'carousel-container';
        this.container.appendChild(this.carouselContainer);

        this.setupCarousel();
    }

    createTitleElement() {
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
    }

    async loadInitialImages() {
        // Cargar el primer conjunto de imágenes
        const baseItems = await this.createImageSet(this.galleries);
        this.items.push(...baseItems);
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
                    // direction: index % 2 === 0 ? 'left' : 'right',
                    speed: 0.5,
                    title: config.title,
                    // titlePosition: index % 2 === 0 ? 'left' : 'right',
                    color: getCurrentCase()?.color || '#66CC66',
                    id: config.id
                }));
            }
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    if (typeof galleryConfigs !== 'undefined') {
        const manager = new GalleriesManager(galleryConfigs);
        manager.init();
    }
});