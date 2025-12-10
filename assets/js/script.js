window.getBasePath = function() {
    const path = window.location.pathname;
    
    // Detectar si estamos en un caso (ya sea con o sin index.html)
    const isInCase = path.includes('/cases/');
    
    if (isInCase) {
        return '../../';
    }
    
    // Si no estamos en un caso, estamos en home o una ruta base
    return './';
};

window.getCasePath = function(caseId) {
    const basePath = window.getBasePath();
    const caseName = window.caseNames[caseId];
    return `${basePath}cases/${caseName}`;
};

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


function navigateToPage(type, destination) {
    const basePath = getBasePath();
    let finalPath;
    
    switch(type) {
        case 'home':
            finalPath = basePath;
            break;
        case 'case':
            finalPath = `${basePath}cases/${destination}`;
            break;
        default:
            finalPath = basePath;
    }
    
    // Eliminar dobles slashes y limpiar la ruta
    finalPath = finalPath.replace(/\/+/g, '/');
    window.location.href = finalPath;
}


const ALTITUDE_CACHE_DURATION = 30 * 60 * 1000; // 30 minutos

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1734390242/';
window.updateUserAltitude = updateUserAltitude;

let activeCaseId = null;


// ==========================================
// FUNCIONES DE ALTITUD Y UBICACIÓN
// ==========================================
// Función para manejar la solicitud de ubicación. Se expone la función globalmente
window.requestUserAltitude = requestUserAltitude;
async function requestUserAltitude() {
    if ("geolocation" in navigator) {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            
            const { latitude, longitude } = position.coords;
            const response = await fetch(
                `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`
            );
            const data = await response.json();
            if (data.results && data.results[0]) {
                const altitude = Math.round(data.results[0].elevation);
                updateUserAltitude(altitude);
                
                const userAltitudeElement = document.getElementById('user-altitude');
                if (userAltitudeElement) {
                    userAltitudeElement.classList.remove('unavailable');
                    userAltitudeElement.style.cursor = 'default';
                }
            } else {
                setAltitudeUnavailable();
            }
        } catch (error) {
            console.error('Error getting location:', error);
            setAltitudeUnavailable();
        }
    } else {
        setAltitudeUnavailable();
    }
}

// Modifica la función setAltitudeUnavailable existente:
function setAltitudeUnavailable() {
    userAltitudeSpan.textContent = "no disponible";
    const userAltitudeElement = document.getElementById('user-altitude');
    userAltitudeElement.classList.add('unavailable');
    userAltitudeElement.style.cursor = 'pointer';
    
    // Remover listeners existentes y añadir el nuevo
    const newElement = userAltitudeElement.cloneNode(true);
    userAltitudeElement.parentNode.replaceChild(newElement, userAltitudeElement);
    newElement.addEventListener('click', requestUserAltitude);

    // Ocultar el indicador cuando la altitud no está disponible
    const indicator = document.getElementById('user-altitude-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// Función auxiliar para construir URL de Cloudinary
function getCloudinaryUrl(imageName) {
    return `${CLOUDINARY_BASE}${imageName}`;
}

// Función para optimización de imágenes
function getOptimizedImageUrl(url, options = {}) {
    if (!url.includes('cloudinary')) return url;

    const {
        width = 'auto',
        quality = 'auto',
        format = 'auto'
    } = options;

    const transformations = [
        `w_${width}`,
        `q_${quality}`,
        `f_${format}`,
        'c_limit'
    ].join(',');

	const cleanedUrl = url.replace(/\/upload\/(?:[^/]+\/)?(v\d+\/)/, '/upload/$1');

    return cleanedUrl.replace(
        /\/upload\//,
        `/upload/${transformations}/`
    );
}



// ==========================================
// CONFIGURACIÓN DE CASOS DE ESTUDIO
// ==========================================
window.caseStudies = [
    {
        id: 1,
        altitude: 2906,
        name: "La Acuarela",
        fullName: "Casa La Acuarela",
        location: "Subachoque",
        architects: "De La Carrera Cavanzo",
        year: "2017",
        color: "#339966",
        images: [
            getCloudinaryUrl('Acuarela1_vlzljj.png'),
            getCloudinaryUrl('Acuarela2_gabjyc.png'),
            getCloudinaryUrl('Acuarela3_p6idww.png'),
            getCloudinaryUrl('Acuarela4_nigbdt.png'),
            getCloudinaryUrl('Acuarela5_qfwstl.png'),
            getCloudinaryUrl('Acuarela6_nzvvvh.png'),
            getCloudinaryUrl('Acuarela7_copack.png'),
            getCloudinaryUrl('Acuarela8_jls3na.png')
        
        ]
    },
    {
        id: 2,
        altitude: 3138,
        name: "Refugio Bosque La Lechuza",
        fullName: "Refugio Bosque La Lechuza",
        location: "Bogotá",
        architects: "Fernando de la Carrera",
        year: "2002",
        color: "#99CCCC",
        images: [
            getCloudinaryUrl('verjon1_zmnetd.png'),
            getCloudinaryUrl('verjon2_lgcbra.png'),
            getCloudinaryUrl('verjon3_glyxrq.png'),
            getCloudinaryUrl('verjon4_rwfcgw.png'),
            getCloudinaryUrl('verjon5_maxxww.png'),
            getCloudinaryUrl('verjon6_usncnv.png'),
            getCloudinaryUrl('verjon7_bvfajb.png'),
            
        ]
    },
    {
        id: 3,
        altitude: 2916,
        name: "La Niebla",
        fullName: "Casa en La Niebla",
        location: "La Calera",
        architects: "Alfonso Arango",
        year: "2018",
        color: "#99CC99",
        images: [
            getCloudinaryUrl('Niebla1_kxzlvv.png'),
            getCloudinaryUrl('Niebla2_tqd2ie.png'),
            getCloudinaryUrl('Niebla3_rp8qlt.png'),
            getCloudinaryUrl('Niebla4_yftkhg.png'),
            getCloudinaryUrl('Niebla5_qeo2hq.png'),
            getCloudinaryUrl('Niebla6_y10bxw.png'),
            getCloudinaryUrl('Niebla7_qnhmkh.png')
        ]
    },
    {
        id: 4,
        altitude: 2863,
        name: "Cuidandero",
        fullName: "Casa del Cuidandero",
        location: "Subachoque",
        architects: "Lucas Oberlaender",
        year: "2018",
        color: "#006633",
        images: [
            getCloudinaryUrl('Cuidandero1_qqgsr7.png'),
            getCloudinaryUrl('Cuidandero2_d23uen.png'),
            getCloudinaryUrl('Cuidandero3_ngewbc.png'),
            getCloudinaryUrl('Cuidandero4_yz8di1.png'),
            getCloudinaryUrl('Cuidandero5_qvdy7v.png'),
            getCloudinaryUrl('Cuidandero6_gyxnih.png')
        ]
    },
    {
        id: 5,
        altitude: 2828,
        name: "Amangiri",
        fullName: "Casa Amangiri",
        location: "Subachoque",
        architects: "Juan Pablo Ortiz",
        year: "2017",
        color: "#339933",
        images: [
            getCloudinaryUrl('Amangiri1_yz4j9e.png'),
            getCloudinaryUrl('Amangiri2_wovsib.png'),
            getCloudinaryUrl('Amangiri3_smkvej.png'),
            getCloudinaryUrl('Amangiri4_v3zgmf.png'),
            getCloudinaryUrl('Amangiri5_ggedwh.png'),
            getCloudinaryUrl('Amangiri6_m8ayl9.png'),
            getCloudinaryUrl('Amangiri7_oaa7mi.png')
        ]
    },
    {
        id: 6,
        altitude: 2632,
        name: "Japón",
        fullName: "Centro del Japón",
        location: "Bogotá",
        architects: "Maribel Moreno / Álvaro Bohórquez",
        year: "2018",
        color: "#66CC66",
        images: [
            getCloudinaryUrl('Japon1_nfy4p8.png'),
            getCloudinaryUrl('Japon2_o5ctpu.png'),
            getCloudinaryUrl('Japon3_x1iayy.png'),
            getCloudinaryUrl('Japon4_uvyzmp.png'),
            getCloudinaryUrl('Japon5_xlfeoq.png'),
            getCloudinaryUrl('Japon6_daah6z.png'),
            getCloudinaryUrl('Japon7_ewy6zp.png')
        ]
    },
    {
        id: 7,
        altitude: 2595,
        name: "Adobe",
        fullName: "Casa Adobe",
        location: "Guatavita",
        architects: "Adriana Gutiérrez / Esteban Castro",
        year: "2018",
        color: "#DBF68F",
        images: [
            getCloudinaryUrl('Adobe1_ipco8c.png'),
            getCloudinaryUrl('Adobe2_p8qckg.png'),
            getCloudinaryUrl('Adobe3_rbtkna.png'),
            getCloudinaryUrl('Adobe4_fecizg.png'),
            getCloudinaryUrl('Adobe5_adi3fb.png'),
            getCloudinaryUrl('Adobe6_t2ndt1.png'),
            getCloudinaryUrl('Adobe7_ofxnjq.png')
        ]
    },
    {
        id: 8,
        altitude: 2479,
        name: "Pajarera",
        fullName: "Casa Pajarera",
        location: "Envigado",
        architects: "Catalina Patiño / Viviana Peña",
        year: "2015",
        color: "#FFFC5D",
        images: [
            getCloudinaryUrl('Pajarera1_z6j5bw.png'),
            getCloudinaryUrl('Pajarera2_etu7kz.png'),
            getCloudinaryUrl('Pajarera3_kibkuc.png'),
            getCloudinaryUrl('Pajarera4_lc0ccq.png'),
            getCloudinaryUrl('Pajarera5_wqqidw.png'),
            getCloudinaryUrl('Pajarera6_lrnm1j.png'),
            getCloudinaryUrl('Pajarera7_qnoxtv.png')
        ]
    },
    {
        id: 9,
        altitude: 1664,
        name: "Tejida",
        fullName: "Casa Tejida",
        location: "Nocaima",
        architects: "Santiago Pradilla / Zuloark",
        year: "2019",
        color: "#FFCC66",
        images: [
            getCloudinaryUrl('Tejida1_wk5rwz.png'),
            getCloudinaryUrl('Tejida2_hdhepq.png'),
            getCloudinaryUrl('Tejida3_nlz51d.png'),
            getCloudinaryUrl('Tejida4_hrilwo.png'),
            getCloudinaryUrl('Tejida5_flzl4u.png'),
            getCloudinaryUrl('Tejida6_hs0bvs.png')
        ]
    },
    {
        id: 10,
        altitude: 485,
        name: "Muela",
        fullName: "Casa La Muela",
        location: "Mariquita",
        architects: "Granada Garces",
        year: "2019",
        color: "#FF6666",
        images: [
            getCloudinaryUrl('MUELA1_gdgm7r.png'),
            getCloudinaryUrl('MUELA2_ecs0se.png'),
            getCloudinaryUrl('MUELA3_uvjv40.png'),
            getCloudinaryUrl('MUELA4_qjzclo.png'),
            getCloudinaryUrl('MUELA5_ppuoiq.png'),
            getCloudinaryUrl('MUELA6_sp3vcj.png'),
            getCloudinaryUrl('MUELA7_eots9y.png')
        ]
    },
    
];

window.caseNames = {
    1: 'laacuarela',
    2: 'lalechuza',
    3: 'laniebla',
    4: 'cuidandero',
    5: 'amangiri',
    6: 'japon',
    7: 'adobe',
    8: 'pajarera',
    9: 'tejida',
    10: 'muela'
};



// ==========================================
// ELEMENTOS DEL DOM
// ==========================================
const altimeterBar = document.getElementById('altimeter-bar');
const userAltitudeSpan = document.querySelector('#user-altitude span');
const imageGrid = document.getElementById('image-grid');
const feedbackElement = document.getElementById('feedback');
const selectedCaseElement = document.getElementById('selected-case');
const menuOverlay = document.getElementById('menu-overlay');
const caseList = document.querySelector('.case-list');
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');


// ==========================================
// OPTIMIZACIÓN DE IMÁGENES
// ==========================================
function loadOptimizedImages() {
    const viewportWidth = window.innerWidth;
    const options = {
		width: 300,
        quality: 'auto',
        format: 'auto'
    };

    document.querySelectorAll('.case-image img').forEach(img => {
        const originalSrc = img.dataset.src || img.src;
        if (originalSrc) {
            img.dataset.src = getOptimizedImageUrl(originalSrc, options);
        }
    });
}



// ==========================================
// FUNCIONES DE ALTITUD Y MARCADORES
// ==========================================
function createAltitudeMarkers() {
    const sortedCases = [...caseStudies].sort((a, b) => b.altitude - a.altitude);
    const totalCases = sortedCases.length;
    const MARGIN_PERCENT = 10;
    const USABLE_SPACE = 100 - (2 * MARGIN_PERCENT);
    
    sortedCases.forEach((study, index) => {
        const marker = document.createElement('div');
        marker.classList.add('altitude-marker');
        
        const position = MARGIN_PERCENT + ((index / (totalCases - 1)) * USABLE_SPACE);
        marker.style.bottom = `${100 - position}%`;
        marker.dataset.caseId = study.id;
        marker.dataset.altitude = study.altitude;
        marker.title = `Altitud: ${study.altitude}m`;
        altimeterBar.appendChild(marker);
    });

    altimeterBar.addEventListener('click', (e) => {
        e.stopPropagation();
        selectNearestMarker(e.clientY);
    });
}

function selectNearestMarker(y) {
    const markers = document.querySelectorAll('.altitude-marker');
    let nearestMarker = null;
    let minDistance = Infinity;

    markers.forEach(marker => {
        const rect = marker.getBoundingClientRect();
        const markerMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(markerMiddle - y);
        if (distance < minDistance) {
            minDistance = distance;
            nearestMarker = marker;
        }
    });

    if (nearestMarker) {
        selectCase(parseInt(nearestMarker.dataset.caseId));
    }
}

function createUserAltitudeIndicator() {
    // Limpiar indicadores existentes
    const existingIndicator = document.getElementById('user-altitude-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    const indicator = document.createElement('div');
    indicator.id = 'user-altitude-indicator';
    indicator.style.display = 'none';
    altimeterBar.appendChild(indicator);
}

function updateUserAltitude(altitude) {
    userAltitudeSpan.textContent = `${altitude}msnm`;
    document.getElementById('user-altitude').classList.remove('unavailable');
    
    const indicator = document.getElementById('user-altitude-indicator');
    if (!indicator) return;

    // Mostrar el indicador solo cuando tenemos una altura válida
    indicator.style.display = 'block';
    
    const sortedCases = [...caseStudies].sort((a, b) => b.altitude - a.altitude);
    const totalCases = sortedCases.length;
    const MARGIN_PERCENT = 10;
    const USABLE_SPACE = 100 - (2 * MARGIN_PERCENT);
    
    let lowerIndex = sortedCases.findIndex(study => study.altitude <= altitude);
    if (lowerIndex === -1) lowerIndex = totalCases - 1;
    let upperIndex = lowerIndex - 1;
    if (upperIndex < 0) upperIndex = 0;
    
    let position;
    if (lowerIndex === upperIndex) {
        position = altitude > sortedCases[0].altitude ? 
            (100 - MARGIN_PERCENT) : MARGIN_PERCENT;
    } else {
        const lowerCase = sortedCases[lowerIndex];
        const upperCase = sortedCases[upperIndex];
        
        const lowerPosition = MARGIN_PERCENT + ((lowerIndex / (totalCases - 1)) * USABLE_SPACE);
        const upperPosition = MARGIN_PERCENT + ((upperIndex / (totalCases - 1)) * USABLE_SPACE);
        
        const ratio = (altitude - lowerCase.altitude) / 
                     (upperCase.altitude - lowerCase.altitude);
        position = lowerPosition + (ratio * (upperPosition - lowerPosition));
    }
    
    indicator.style.bottom = `${100 - position}%`;
}



// ==========================================
// MANEJO DE CASOS Y GRID DE IMÁGENES
// ==========================================
function selectCase(caseId) {
    document.querySelectorAll('.altitude-marker').forEach(marker => {
        marker.classList.remove('active');
        marker.textContent = '';
		marker.style.backgroundColor = '';
    });
    
    const selectedMarker = document.querySelector(`.altitude-marker[data-case-id="${caseId}"]`);
    const selectedCase = caseStudies.find(study => study.id === parseInt(caseId));
    
    if (selectedMarker && selectedCase) {
        selectedMarker.classList.add('active');
        selectedMarker.textContent = selectedMarker.dataset.altitude;
        selectedMarker.style.backgroundColor = selectedCase.color;

		// Aplicar el color de texto contrastante al marcador de altitud
        selectedMarker.style.color = calculateTextColor(selectedCase.color);
        
        updateImageGrid(caseId);
        
        selectedCaseElement.textContent = `${selectedCase.name} | ${selectedMarker.dataset.altitude}msnm`;
        selectedCaseElement.style.backgroundColor = selectedCase.color;
		selectedCaseElement.style.color = calculateTextColor(selectedCase.color);
        
        // Aplicar color de fondo al feedback
        feedbackElement.style.backgroundColor = selectedCase.color;

		// Calcular y aplicar color de texto apropiado al feedback
        feedbackElement.style.color = calculateTextColor(selectedCase.color);
        
        showPermanentFeedback(`Ir al caso de estudio`);
    }
    
    activeCaseId = caseId;
}

function updateImageGrid(caseId) {
    const selectedCase = caseStudies.find(study => study.id === parseInt(caseId));
    document.querySelectorAll('.case-image').forEach(container => {
        const img = container.querySelector('img');
        const imgSrc = img.src || img.dataset.src;
        const imgFilename = imgSrc.split('/').pop();
        const isActive = selectedCase && selectedCase.images.some(caseSrc => 
            caseSrc.split('/').pop() === imgFilename
        );
        
        if (isActive) {
            container.style.setProperty('--case-color', selectedCase.color);
            container.classList.add('active');
        } else {
            container.style.removeProperty('--case-color');
            container.classList.remove('active');
        }
    });
}

function loadImages() {
    imageGrid.innerHTML = '';
    const allImages = caseStudies.flatMap(study => study.images);
    shuffleArray(allImages);
    
    allImages.forEach((imgSrc, index) => {
        const container = document.createElement('div');
        container.classList.add('case-image');
        container.style.setProperty('--image-index', index);
        
        const img = document.createElement('img');
        img.dataset.src = imgSrc;
        
        // Añadir loading="lazy" para carga progresiva nativa
        img.loading = 'lazy';
        
        container.appendChild(img);
        
        container.addEventListener('click', () => {
            const caseId = caseStudies.find(study => 
                study.images.includes(imgSrc)).id;
            selectCase(caseId);
        });
        
        container.addEventListener('dblclick', () => {
            if (container.classList.contains('active')) {
                const caseId = caseStudies.find(study => 
                    study.images.includes(imgSrc)).id;
                navigateToCaseStudy(caseId);
            }
        });
        
        imageGrid.appendChild(container);

        // Usar IntersectionObserver para carga progresiva
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target.querySelector('img');
                            if (img?.dataset.src) {
                                img.src = getOptimizedImageUrl(img.dataset.src, {
									width: 300,
                                    quality: 'auto',
                                    format: 'auto'
                                });
                                observer.unobserve(entry.target);
                            }
                        }
                    });
                },
                { rootMargin: '50px', threshold: 0.1 }
            );
            observer.observe(container);
        } else {
            img.src = getOptimizedImageUrl(img.dataset.src, {
				width: 300,
                quality: 'auto',
                format: 'auto'
            });
        }
    });
}



// ==========================================
// UTILIDADES Y NAVEGACIÓN
// ==========================================
function showPermanentFeedback(message) {
    feedbackElement.textContent = message;
    feedbackElement.classList.add('show', 'permanent');
    feedbackElement.onclick = () => {
        if (activeCaseId) {
            navigateToCaseStudy(activeCaseId);
        }
    };
}

function hideFeedback() {
    feedbackElement.classList.remove('show', 'permanent');
    feedbackElement.onclick = null;
}

function deselectCase() {
    document.querySelectorAll('.altitude-marker').forEach(marker => {
        marker.classList.remove('active');
        marker.textContent = '';
        marker.style.backgroundColor = '';
    });
    
    updateImageGrid(null);
    selectedCaseElement.textContent = "Seleccione una imagen";
    selectedCaseElement.style.color = "#000";
    feedbackElement.style.backgroundColor = "#fff";
    
    hideFeedback();
    activeCaseId = null;
}

function navigateToCaseStudy(caseId) {
    const caseName = caseNames[caseId];
    if (!caseName) return;

    // Forzar navegación a la raíz + el nombre del caso
    window.location.href = window.location.origin + '/../cases' + caseName;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    selectNearestMarker(touch.clientY);
}



// ==========================================
// MENÚ Y LISTA DE CASOS
// ==========================================
function toggleMenu(e) {
	e.preventDefault();
	mobileMenu.classList.toggle('active');
}



// ==========================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ==========================================
function cleanup() {
    if (window.imageObserver) {
        window.imageObserver.disconnect();
    }
    if (window.altitudeInterval) {
        clearInterval(window.altitudeInterval);
    }
    
}

function initializeMainPage() {
    createAltitudeMarkers();
    createUserAltitudeIndicator();
    loadImages();
    
    // Hacer visibles todos los elementos de navegación y el altímetro
    const elementsToShow = [
        '.nav-left',
        '.nav-center', 
        '.nav-right', 
        '#altimeter-container'
    ];
    
    elementsToShow.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            // Restablecer los estilos a su estado normal
            element.style.removeProperty('visibility');
            element.style.removeProperty('opacity');
            element.style.removeProperty('display');
            
            // Asegurar que el elemento esté en su contenedor original
            if (element.parentElement.id === 'menu-overlay') {
                const mainNav = document.getElementById('main-nav');
                if (mainNav) {
                    mainNav.appendChild(element);
                }
            }
        }
    });
    
    // Verificar si tenemos una altitud guardada del onboarding
    const lastKnownAltitude = localStorage.getItem('lastKnownAltitude');
    if (lastKnownAltitude) {
        updateUserAltitude(parseInt(lastKnownAltitude));
    } else {
        const userAltitudeSpan = document.querySelector('#user-altitude span');
        if (userAltitudeSpan) {
            userAltitudeSpan.textContent = "click aquí para obtener altura.";
            const userAltitudeElement = document.getElementById('user-altitude');
            if (userAltitudeElement) {
                userAltitudeElement.classList.add('unavailable');
                userAltitudeElement.style.cursor = 'pointer';
                userAltitudeElement.addEventListener('click', requestUserAltitude);
            }
        }
    }

    loadOptimizedImages();
}

// Manejador global de errores
window.addEventListener('error', function(event) {
    console.error('Global error caught:', event.error);
    event.preventDefault();
});

window.navigateToCaseStudy = function(caseId) {
    const casePath = window.getCasePath(caseId);
    if (casePath) {
        window.location.href = casePath;
    }
};

document.addEventListener('click', (event) => {
    if (
		activeCaseId &&
		!event.target.closest('#driver-toggle') &&
		!event.target.closest('#mobile-menu-toggle') &&
        !event.target.closest('.case-image.active') &&
        !event.target.closest('#feedback') &&
        !event.target.closest('.altitude-marker')
	) {
        deselectCase();
    }
});

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando aplicación...");

    // Event listeners principales
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
			toggleMenu(e);
		});
    }

    // Event listeners para el altímetro en dispositivos táctiles
    if (altimeterBar) {
        altimeterBar.addEventListener('touchstart', handleTouch);
        altimeterBar.addEventListener('touchmove', handleTouch);
    }

    // Event listener para redimensionamiento de ventana
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            loadOptimizedImages();
        }, 250);
    });

    // Colorear el título del caso si estamos en una página de caso
    const currentPageName = window.location.pathname.split('/').pop().replace('.html', '');
    const currentCase = caseStudies.find(study => {
        const caseName = caseNames[study.id].toLowerCase();
        return caseName === currentPageName;
    });

    if (currentCase) {
        const titleElement = document.querySelector('.titulo-caso');
        if (titleElement) {
            titleElement.style.color = currentCase.color;
        }
    }

    // Inicializar la aplicación
    initializeMainPage();
    console.log("Aplicación iniciada.");
});