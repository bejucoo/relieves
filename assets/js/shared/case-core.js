const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');



// Obtener ID del caso actual.
function getCurrentCaseId() {
	const pathname = window.location.pathname;

	// Buscar el nombre del caso en la última parte de la ruta
	const segments = pathname.split('/');
	const currentPath = segments[segments.length - 2];

	if (!window.caseNames) {
		const directMapping = {
			'laacuarela': 1,
			'lalechuza': 2,
			'laniebla': 3,
			'cuidandero': 4,
			'amangiri': 5,
			'japon': 6,
			'adobe': 7,
			'pajarera': 8,
			'tejida': 9,
			'muela': 10
		};
		return directMapping[currentPath];
	}

	for (let [id, name] of Object.entries(window.caseNames)) {
		if (name.toLowerCase() === currentPath.toLowerCase()) {
			return parseInt(id);
		}
	}
	return null;
}

// Obtener el caso actual.
function getCurrentCase() {
    const caseId = getCurrentCaseId();
    if (!caseId || !window.caseStudies) return null;

    return window.caseStudies.find(study => study.id === caseId);
}



// function calculateTextColor(backgroundColor) {
// 	// Convertir HEX a RGB
// 	const hex = backgroundColor.replace('#', '');
// 	const r = parseInt(hex.substr(0, 2), 16);
// 	const g = parseInt(hex.substr(2, 2), 16);
// 	const b = parseInt(hex.substr(4, 2), 16);
//
// 	// Calcular luminancia (basado en la percepción humana)
// 	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
//
// 	// Retornar color basado en luminancia
// 	return luminance > 0.5 ? '#1C3B2D' : '#FFFFFF';
// }

// Calcular el color del texto basado en el contraste.
function calculateTextColor(backgroundColor) {
	// Convertir hex a rgb
	const hex = backgroundColor.replace('#', '');
	const r = parseInt(hex.substr(0, 2), 16);
	const g = parseInt(hex.substr(2, 2), 16);
	const b = parseInt(hex.substr(4, 2), 16);

	// Calcular luminancia (basado en la percepción humana)
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	// Retornar color basado en luminancia
	return luminance > 0.5 ? '#1C3B2D' : '#FFFFFF';
}


// Iniciar ticker.
function initializeInfoTicker(currentCase) {
	const tickerContainer = document.getElementById('info-ticker');
	if (!tickerContainer || !currentCase) return;

	// Estructurar el contenido con espaciado consistente
	const infoItems = [
		currentCase.fullName,
		`Arquitectos: ${currentCase.architects}`,
		`Altitud: ${currentCase.altitude} MSNM`,
		currentCase.location,
		`Construcción ${currentCase.year}`
	];

	// Crear múltiples copias para el efecto infinito
	const content = document.createElement('div');
	content.className = 'info-ticker-content';

	// Calcular el color del texto basado en el color del caso
	const textColor = calculateTextColor(currentCase.color);

	// Repetir el contenido 4 veces para asegurar el scroll continuo
	for (let i = 0; i < 4; i++) {
		infoItems.forEach((item, index) => {
			const span = document.createElement('span');
			span.textContent = item;
			span.style.color = textColor;
			content.appendChild(span);

			// Agregar separador después de cada item excepto el último
			if (index < infoItems.length - 1) {
				const separator = document.createElement('span');
				separator.className = 'info-ticker-separator';
				separator.textContent = '+';
				separator.style.color = textColor + ' !important';
				content.appendChild(separator);
			}
		});

		// Agregar separador entre repeticiones excepto en la última
		if (i < 3) {
			const separator = document.createElement('span');
			separator.className = 'info-ticker-separator';
			separator.textContent = '+';
			separator.style.color = textColor + ' !important';
			content.appendChild(separator);
		}
	}

	tickerContainer.appendChild(content);

	// Ajustar el contenedor al color del caso
	const tickerContainerParent = document.querySelector('.info-ticker-container');
	if (tickerContainerParent) {
		// Asegurar que todos los elementos dentro del ticker tengan el color correcto
		tickerContainerParent.style.setProperty('--ticker-text-color', textColor);
		tickerContainerParent.style.backgroundColor = currentCase.color;
	}
}



// Iniciar carga del caso.
function initializeCase() {
	const currentCase = getCurrentCase();
	if (!currentCase) {
		console.warn('No se pudo encontrar la información del caso actual.');
		return;
	}

	// Aplicar el color al nombre del caso
	const nombreCasoElement = document.getElementById('nombre-caso');
	if (nombreCasoElement) {
		nombreCasoElement.textContent = currentCase.fullName;
		nombreCasoElement.style.backgroundColor = currentCase.color;
		nombreCasoElement.style.color = calculateTextColor(currentCase.color);
	}

	// Actualizar el título del documento
	document.title = `${currentCase.fullName} - Relieves ARQDIS`;

	// Inicializar el ticker después de establecer la información básica
	initializeInfoTicker(currentCase);
}



// Intentar iniciar repetidamente hasta que tenga éxito.
function tryInitialize(attempts = 0) {
	const maxAttempts = 50; // 5 segundos máximo (50 * 100ms)

	if (attempts >= maxAttempts) {
		console.error('No se pudo iniciar el caso después de múltiples intentos.');
		return;
	}

	const currentCase = getCurrentCase();
	if (currentCase) {
		console.log(`Caso encontrado: ${currentCase.name}. Iniciando...`);
		initializeCase();
	} else {
		setTimeout(() => tryInitialize(attempts + 1), 100);
	}
}



// Iniciar loader de contenido.
function initializeLoader() {
    const loader = document.getElementById('case-loader');
    const progressElement = loader.querySelector('.loader-progress');
    let totalImages = 0;
    let loadedImages = 0;

    // Función para actualizar el progreso
    function updateProgress() {
        const progress = Math.round((loadedImages / totalImages) * 100);
        progressElement.textContent = `${progress}%`;
        
        if (loadedImages === totalImages) {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 500);
        }
    }

    // Contar todas las imágenes en las galerías
    galleryConfigs.forEach(gallery => {
        totalImages += gallery.items.length;
    });

    // Precargar todas las imágenes
    galleryConfigs.forEach(gallery => {
        gallery.items.forEach(item => {
            if (item.type === 'image' || item.thumbnail) {
                const img = new Image();
                
                img.onload = () => {
                    loadedImages++;
                    updateProgress();
                };

                img.onerror = () => {
                    loadedImages++;
                    updateProgress();
                };

                // Cargar thumbnail
                if (item.thumbnail) {
                    img.src = item.thumbnail;
                }

                // Si es una imagen, precargar también la versión completa
                if (item.type === 'image' && item.fullContent) {
                    const fullImg = new Image();
                    fullImg.src = item.fullContent;
                }
            } else {
                // Para videos y modelos 3D, solo contamos el thumbnail
                loadedImages++;
                updateProgress();
            }
        });
    });
}



// Toggle usando botón hamburguesa.
function toggleMenu(e) {
	e.preventDefault();
	mobileMenu.classList.toggle('active');
}



// Iniciar proceso cuando el DOM esté listo.
document.addEventListener('DOMContentLoaded', () => {
	console.log('Cargando contenido del caso...');
    initializeLoader();

	console.log('Iniciando construcción del caso...');
    tryInitialize();

	if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
			toggleMenu(e);
		});
    }
});