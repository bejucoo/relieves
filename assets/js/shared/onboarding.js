// Crear estilo del onboarding
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { 
            opacity: 0;
            transform: translateY(20px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
        
    body.onboarding-active {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }
    
    /* Asegurar que los elementos empiecen ocultos pero sin bloquear su visualización */
    .nav-left, .nav-center, .nav-right,
    #altimeter-container, .case-image {
        opacity: 0;
    }
    
    /* Animaciones cuando termina el onboarding */
    .onboarding-complete .nav-left,
    .onboarding-complete .nav-center,
    .onboarding-complete .nav-right,
    .onboarding-complete #altimeter-container,
    .onboarding-complete .case-image {
        animation: fadeInUp 0.8s ease-out forwards;
        will-change: transform, opacity;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .onboarding-complete .case-image:hover {
        transform: scale(1.05) !important;
        z-index: 2 !important;
        
    }

    /* Delays para animación escalonada */
    .onboarding-complete .nav-left { animation-delay: 0.1s; }
    .onboarding-complete .nav-center { animation-delay: 0.2s; }
    .onboarding-complete .nav-right { animation-delay: 0.3s; }
    .onboarding-complete #altimeter-container { animation-delay: 0.4s; }
    .onboarding-complete .case-image { 
        animation-delay: calc(0.5s + (var(--image-index, 0) * 0.1s));
    }
`;
document.head.appendChild(style);


// Obtener fecha y devolver en string
function getOnboardingKey() {
    return Date.now().toString();
}


// Hacer que la función esté disponible en window.
window.getOnboardingKey = getOnboardingKey;



const OnboardingExperience = ({ key }) => {
    const [step, setStep] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const [activeImage, setActiveImage] = React.useState(null);
    const [touchStart, setTouchStart] = React.useState(null);
    const [touchMove, setTouchMove] = React.useState(null);

    const handleKeyDown = React.useCallback((e) => {
        if (isTransitioning) return;
        
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                if (step < steps.length - 1) {
                    handleNext();
                }
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                if (step > 0) {
                    handlePrevious();
                }
                break;
        }
    }, [step, isTransitioning]);
    
    const getTextStyles = () => {
        const isMobile = window.innerWidth <= 768;
        return {
            name: {
                fontSize: isMobile ? '18px' : '16px',
                fontWeight: '500'
            },
            location: {
                fontSize: isMobile ? '16px' : '14px',
                opacity: 0.75
            },
            details: {
                fontSize: isMobile ? '15px' : '13px',
                opacity: 0.75
            }
        };
    };
    // Añadir efecto para manejar reinicio
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const mountainPath = "M.52,67s6.99,1.24,17-11c9-11,11-13,11-13,10-6,19-8,25.22-9.38,8.48-1.88,13.79,10.57,20.69,15.85,9.57,7.33,21.76,14.14,29.7,2.54,2.84-4.16,4.69-10.27,8-13.31,2.11-1.94,4.58-2.39,6.96-3.02,9.91-2.64,19.44-9.29,27.56-19.23,3.4-4.16,6.64-8.97,10.58-11.39,4.28-2.63,8.99-2.19,13.54-1.72,17.2,1.79,33.68,128.59,50.74,132.64,10.83,2.58,20.79,41.39,29.4,52.76,2.76,3.65,5.19,8,8.09,11.34,9.9,11.38,23.06,8.93,34.64,14.13,9.31,4.18,17.52,77.3,25.54,86.28,7.09,7.94,14.3,16.05,19.66,27.2,2.81,5.85,5.05,12.41,7.82,18.3,4.37,9.26,9.97,16.63,15.51,23.89,9.47,12.42,18.94,24.85,28.41,37.27,3.92,5.96,4.94,6.13,8.92,9.82,4.67,4.33,17.55,12.23,20,12,1.85-.17,21.52-6.05,28.62-12.21,2.59-2.25,5.47-4.68,8.38-4.79,5.76-.21,10.08,8.01,15.2,12.43,7.9,6.79,17.3,4.71,26.16,5.22,9.39.54,18.71,4.22,27.26,10.77,3.83,2.93,7.52,6.44,11.47,8.85,1.83,1.12,3.74,2.01,5.39,3.75,1.43,1.5,2.61,3.58,3.78,5.63,5.03,8.86,10.06,17.72,15.08,26.58,3.55,6.25,7.15,12.58,11.54,17.07s9.73,7.01,14.71,4.97c3.8-1.56,6.24-6.94,10.54-8.5,4.86-1.76,7.75,1,11.24-1.91,10.62-8.85,11.62-4.85,25.62-11.85,5.05-2.52,7.01-14.16,14-16,19-5,30,0,41.81,6.98,17.52,10.36,27.05-3.04,37.26,13.58,2.5,4.07,4.39,8.69,8.93,9.43,11.64,1.9,13.98-20.56,21.97-18.29,3.02.86,6.13,1.72,9.13.61,2.62-.97,4.96-3.39,7.36-5.41,6.99-5.89,13.19-10.34,20.54-6.91,15,7,17.75,16.22,28.4,12.3,6.96-2.56,14.23-1.49,21.18,1.04,2.6.94,23.86-1.09,26.41-2.34,1.98-.97,11.17-7.4,13-9,2.9-2.53,12.84-8.64,16-10,11.89-5.12,15-10,25-3,6.76,4.73,28.88,43.71,35.46,45.78,3.37,1.06,6.61.95,10.2.38,7.33-1.16,13.33-1.16,26.33-5.16,4.94-1.52,12.63-1.1,17.49-3.1,9.51-3.9,11.2-6.52,13.51-7.9,5-3,17-12,32-10,11.08,1.48,30.08,22.69,31.46,25.62,1.81,3.83,5.03,4.93,7.92,4.46s8.61-4.31,13.5-4.24c10.12.15,23.36,59.71,28.45,59.52,2.31-.09,4.49,1.69,6.76,2.41,1.97.62,4,.44,5.98.86,5.6,1.17,10.44,6.89,15.02,12.44,2.96,3.58,5.56,8.27,8.73,11.29,10.9,10.36,22.51,18.59,34.52,24.46,2.08,1.02,10.23,23.07,12.4,23.05,5.94-.05,11.87,1.19,17.62,3.68,2.38,1.03,4.58,2.09,6.97,3.03,1.1.43,4.51.13,5.51.99.46.39.89.88,1.31,1.37,2.04,2.33,4.08,4.66,6.12,6.99,4.1,4.68,8.27,8.29,12.48,12.68,2.7,2.81,5.63,5.73,8.8,5.43,1.89-.18,3.66-1.49,5.47-2.41,6.8-3.45,14.12-1.31,21.17-2.62,6.18-1.15,12.07-4.93,17.86-8.72,1.85-1.21,3.72-2.43,5.69-2.8,2.31-.44,4.64.32,6.93,1.07,8.75,2.88,17.5,31.76,26.25,34.64,2.25.74,4.55,1.49,6.83,1.07,3.45-.64,6.5-3.85,9.65-6.29,3.45-2.67,7.14-4.48,10.91-5.34,1.56-.35,3.16-.54,4.67.16,1.32.62,2.5,1.89,3.66,3.14,7.07,7.65,16.13,29.31,23.2,36.96,2.03,2.2,4.07,4.41,5.89,7.07,3.8,5.53,6.69,13.02,11.15,16.9,7.32,6.36,9.77,6.25,16.7,13.76,1.33,1.44,2.71,2.8,3.85,4.66,1.52,2.48,1.84,3.05,4.55,4.71,9.86,6.06.41-.05,9,5,4.82,2.83,7,2,13,2,5.1,0,6,1,8,1h9c5.14,0,7.31,1.62,10.3,4.92,1.4,1.55,2.54,3.73,4.02,5.03,1.55,1.36,3.34,1.65,5.05,2.23,9.69,3.29,17.1-10.01,24.35,1.3,3.95,6.16,8.49,12.39,13.87,12.7,10.01.58,17.37,19.4,25.94,28.13,4.7,4.79,9.1,10.56,14.19,14.03,2.42,1.65,4.95,2.75,7.47,3.84,3.17,1.37,6.34,2.75,9.57,3.6,3.39.89,6.83,1.19,10.24,1.86,6.06,1.18,12.01,3.51,17.95,5.83,6.29,2.45,12.57,4.91,18.86,7.36,7.67,2.99,15.47,6.08,22.23,12.86,1.13,1.13,2.23,2.37,3.46,3.16.93.6,1.91.93,2.89,1.25,7.45,2.48,14.91,4.96,22.36,7.45,7.01,2.34,14.93,2.69,22.04,3.92,4.43.77,8.91,1.54,13.33.7,2.08-.39,4.14-1.14,6.23-1.39,8.58-1,15.43,8.48,24.48,12.11,30.16,12.11,62.16,9.91,93,9.97,1.31,0,2.62,0,3.94,0,1.91,0,3.83,0,5.74.01,10.17.02,20.34.04,30.51.06.16,0,.29.02.44.03.18.01.36.02.54.03";

    const cases = [
        {
            name: "Refugio Bosque de la Lechuza",
            location: "El Verjón, Cundinamarca",
            architects: "Fernando de la Carrera",
            year: "2002",
            x: 386.52,
            y: 401,
            color: "#99CCCC"
        },
        {
            name: "Casa en la Niebla",
            location: "La Calera, Cundinamarca",
            architects: "Alfonso Arango",
            year: "2018",
            x: 541.52,
            y: 456,
            color: "#99CC99"
        },
        {
            name: "Casa del Cuidandero",
            location: "Sopó, Cundinamarca",
            architects: "Lucas Oberlaender",
            year: "2018",
            x: 648.52,
            y: 469,
            color: "#006633"
        },
        {
            name: "Casa la Acuarela",
            location: "Subachoque, Cundinamarca",
            architects: "De La Carrera Cavanzo",
            year: "2017",
            x: 721.52,
            y: 482,
            color: "#339966"
        },
        {
            name: "Casa Amangiri",
            location: "Subachoque, Cundinamarca",
            architects: "Juan Pablo Ortiz",
            year: "2017",
            x: 845.52,
            y: 482,
            color: "#339933"
        },
        {
            name: "Centro del Japón",
            location: "Bogotá, Cundinamarca",
            architects: "Maribel Moreno / Álvaro Bohórquez",
            year: "2018",
            x: 983.52,
            y: 501,
            color: "#66CC66"
        },
        {
            name: "Casa Adobe",
            location: "Guatavita, Cundinamarca",
            architects: "Adriana Gutiérrez / Esteban Castro",
            year: "2018",
            x: 1093.52,
            y: 501,
            color: "#DBF68F"
        },
        {
            name: "La Pajarera",
            location: "Envigado, Antioquia",
            architects: "Catalina Patiño / Viviana Peña",
            year: "2015",
            x: 1184.52,
            y: 594,
            color: "#FFFC5D"
        },
        {
            name: "Casa Tejida",
            location: "Nocaima, Cundinamarca",
            architects: "Santiago Pradilla / Zuloark",
            year: "2019",
            x: 1431.52,
            y: 727,
            color: "#FFCC66"
        },
        {
            name: "Casa la Muela",
            location: "Mariquita, Tolima",
            architects: "Granada Garces",
            year: "2019",
            x: 1596.52,
            y: 837,
            color: "#FF6666"
        }
    ];

    const steps = [
        {
            content: "El clima nos moldea, lo heredamos y lo transmitimos",
            showPath: true,
            isFirstStep: true,
            pathProgress: 0
        },
        {
            content: "Relieves es un proyecto que explora la intersección entre las personas, los relieves montañosos y la arquitectura",
            showPath: true,
            pathProgress: 10
        },
        {
            content: "Un estudio de edificios de pequeña escala en distintas geografías para poder identificar los cambios que se avecinan para innovar en nuestro hábitat e inspirar futuros sostenibles",
            showPath: true,
            pathProgress: 40
        },
        {
            content: "10 casos para explorar y aprender",
            showPath: true,
            pathProgress: 100,
            showMarkers: true
        },
        {
            content: "Comparte tu ubicación para ver tu altura actual y ver a que caso estás más cerca",
            showPath: true,
            pathProgress: 0,
            promptLocation: true
        }
    ];

    
    const handleNext = () => {
        if (isTransitioning) return;

        if (step >= steps.length - 1) {
            handleFinishOnboarding();
            return;
        }

        handleTransition('next');
    };

    // Añadir esta nueva función justo después
    const handleTransition = (direction) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setStep(s => direction === 'next' ? s + 1 : s - 1);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 600);
    };


    const handleFinishOnboarding = () => {
        setIsTransitioning(true);
        
        const welcomeOverlay = document.getElementById('welcome-overlay');
        if (welcomeOverlay) {
            welcomeOverlay.style.transition = 'opacity 0.8s ease-in-out';
            welcomeOverlay.style.opacity = '0';
            
            setTimeout(() => {
                welcomeOverlay.style.display = 'none';
                document.body.classList.remove('onboarding-active');
                
                // Primero, ocultar todas las imágenes y elementos
                const elements = document.querySelectorAll('.nav-left, .nav-center, .nav-right, #altimeter-container, .case-image');
                elements.forEach(el => {
                    el.style.opacity = '0';
                });
                
                // Esperar un frame antes de iniciar las animaciones
                requestAnimationFrame(() => {
                    document.body.classList.add('onboarding-complete');
                    
                    // Inicializar índices de imágenes después de ocultar todo
                    document.querySelectorAll('.case-image').forEach((img, index) => {
                        img.style.setProperty('--image-index', index);
                    });
    
                    // Inicializar la aplicación después de que todo esté oculto
                    setTimeout(() => {
                        if (typeof window.initializeMainPage === 'function') {
                            window.initializeMainPage();
                        }
                    }, 50);
                });
            }, 800);
        }
    };

    const handlePrevious = () => {
        if (isTransitioning || step === 0) return;
        handleTransition('prev');
    };

    const currentStep = steps[step];

    const handleWheel = (e) => {
        if (isTransitioning) return;
        if (Math.abs(e.deltaY) > 20) {
            if (e.deltaY > 0) {
                handleNext();
            } else {
                handlePrevious();
            }
        }
    };

    // Funciones para el manejo táctil
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
        setTouchMove(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchMove) return;
        
        const difference = touchStart - touchMove;
        const minSwipeDistance = 50;

        if (Math.abs(difference) > minSwipeDistance) {
            if (difference > 0 && step < steps.length - 1) {
                handleNext();
            } else if (difference < 0 && step > 0) {
                handlePrevious();
            }
        }

        setTouchStart(null);
        setTouchMove(null);
    };

  return React.createElement('div', {
    style: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'white',
        zIndex: 9999,
        fontFamily: 'Roboto, sans-serif'
    },
    onClick: handleNext,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onWheel: handleWheel,
          onKeyDown: (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrevious();
          },
          tabIndex: 0
        }, [
        // 1. SVG Background
        currentStep.showPath && React.createElement('div', {
            key: 'svg-container',
            style: {
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }, [
            React.createElement('svg', {
                viewBox: "0 0 1920.71 920",
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    maxWidth: '1920px',
                    opacity: 0.2
                }
            },
                React.createElement('path', {
                    d: mountainPath,
                    fill: 'none',
                    stroke: '#000',
                    strokeWidth: '6'
                })
            ),
            React.createElement('svg', {
                viewBox: "0 0 1920.71 920",
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    maxWidth: '1920px'
                }
            }, [
                React.createElement('path', {
                    key: 'animated-path',
                    d: mountainPath,
                    fill: 'none',
                    stroke: '#000',
                    strokeWidth: '6',
                    style: {
                        strokeDasharray: '5000',
                        strokeDashoffset: 5000 - (5000 * currentStep.pathProgress / 100),
                        transition: 'stroke-dashoffset 1.5s ease-in-out'
                    }
                }),
                // Dentro del componente OnboardingExperience, en la parte donde se renderizan los marcadores
// Busca la sección donde está currentStep.showMarkers && cases.map()

currentStep.showMarkers && cases.map((cas, index) =>
    React.createElement('g', { key: index }, [
        React.createElement('line', {
            x1: cas.x,
            y1: cas.y,
            x2: cas.x,
            y2: index % 2 === 0 ? cas.y + 120 : cas.y - 120,
            stroke: '#000',
            strokeWidth: '2',
            strokeDasharray: '4',
            style: { opacity: 0.5 }
        }),
        React.createElement('circle', {
            cx: cas.x,
            cy: cas.y,
            r: '9',
            fill: cas.color,
            style: {
                opacity: 0,
                animation: 'fadeIn 0.5s ease-in-out forwards',
                animationDelay: `${index * 200}ms`
            }
        }),
        React.createElement('text', {
            x: cas.x,
            y: index % 2 === 0 ? cas.y + 140 : cas.y - 180,
            textAnchor: 'middle',
            style: {
                opacity: 0,
                animation: 'fadeIn 0.5s ease-in-out forwards',
                animationDelay: `${index * 200}ms`,
                fill: '#000',
                filter: 'drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.9))'
            }
        }, [
            React.createElement('tspan', {
                x: cas.x,
                dy: '0',
                style: getTextStyles().name
            }, cas.name),
            React.createElement('tspan', {
                x: cas.x,
                dy: window.innerWidth <= 768 ? '24' : '20',
                style: getTextStyles().location
            }, cas.location),
            React.createElement('tspan', {
                x: cas.x,
                dy: window.innerWidth <= 768 ? '24' : '20',
                style: getTextStyles().details
            }, cas.architects),
            React.createElement('tspan', {
                x: cas.x,
                dy: window.innerWidth <= 768 ? '24' : '20',
                style: getTextStyles().details
            }, cas.year)
        ])
    ])
)
            ]),

            // Añadir al array principal de elementos en el return
            // En el botón de omitir
            React.createElement('button', {
                style: {
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    border: '1px solid #1C3B2D',
                    color: '#1C3B2D',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                },
                onClick: (e) => {
                    e.stopPropagation();
                    handleFinishOnboarding(); // Usar la misma función de finalización
                }
            }, "Omitir introducción")

        ]),

        // 2. Content
        React.createElement('div', {
            key: 'content',
            style: {
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '32px',
                paddingTop: '15vh',
                zIndex: 2
            }
        }, [
            React.createElement('div', {
                style: {
                    maxWidth: '800px',
                    textAlign: 'center',
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    zIndex: 2
                }
            }, [
                currentStep.content && React.createElement(currentStep.isFirstStep ? 'h3' : 'p', {
                    style: {
                        fontSize: currentStep.isFirstStep ? '2rem' : '1.5rem',
                        fontWeight: 300,
                        color: '#1C3B2D',
                        marginBottom: '20px',
                        position: 'relative',
                        opacity: isTransitioning ? 0 : 1,
                        transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                    }
                }, currentStep.content),

                // En el contenido del botón de ubicación, modifica esto:
               // Modificar el botón de ubicación dentro del componente OnboardingExperience
               currentStep.promptLocation && React.createElement('button', {
                onClick: async (e) => {
                    e.stopPropagation();
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
                                
                                // Add console logs for debugging
                                console.log('Altitude:', altitude);
                                console.log('Window cache function:', window.cacheAltitude);
                                console.log('Window update function:', window.updateUserAltitude);
                
                                // Ensure functions are called only if they exist
                                if (window.cacheAltitude) window.cacheAltitude(altitude);
                                if (window.updateUserAltitude) window.updateUserAltitude(altitude);
                                
                                localStorage.setItem('lastKnownAltitude', altitude);
                            }
                            
                            // Delay finishing onboarding to ensure altitude update
                            setTimeout(handleFinishOnboarding, 100);
                        } catch (error) {
                            console.error('Error getting location:', error);
                            handleFinishOnboarding();
                        }
                    } else {
                        handleFinishOnboarding();
                    }
                },
                onTouchStart: (e) => e.stopPropagation(),
                onTouchMove: (e) => e.stopPropagation(),
                onTouchEnd: (e) => e.stopPropagation(),
                style: {
                    marginTop: '2rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#1C3B2D',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'background-color 0.3s ease'
                }
            }, "Compartir ubicación")


            ]),

            React.createElement('div', {
                style: {
                    position: 'absolute',
                    bottom: '32px',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }
            }, steps.map((_, i) =>
                React.createElement('div', {
                    key: i,
                    style: {
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: i === step ? '#1C3B2D' : '#E5E5E5',
                        transition: 'background-color 0.3s ease'
                    }
                })
            ))
        ]),

        // 3. Images on top
        currentStep.showImages && React.createElement('div', {
            key: 'images-container',
            style: {
                position: 'absolute',
                inset: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 3,
                padding: '0 20px', // Añadir padding para evitar que toquen los bordes
                maxWidth: '1200px', // Limitar el ancho máximo del contenedor
                margin: '0 auto', // Centrar el contenedor
                width: '100%', // Asegurar que ocupe todo el ancho disponible
                height: '100%' // Asegurar que ocupe todo el alto disponible
            }
        }, currentStep.images.map((img, index) =>
            React.createElement('img', {
                key: `image-${index}`,
                src: img.src,
                alt: img.alt,
                onClick: (e) => {
                    e.stopPropagation();
                    setActiveImage(activeImage === index ? null : index);
                },
                style: {
                    position: 'absolute',
                    top: img.position.top,
                    left: img.position.left,
                    maxWidth: 'min(300px, 30vw)', // Responsive width
                    width: 'auto', // Mantener aspecto
                    height: 'auto', // Mantener aspecto
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isTransitioning ? 0 : 1,
                    animation: 'fadeIn 0.5s ease-in-out forwards',
                    animationDelay: `${index * 200}ms`,
                    cursor: 'pointer',
                    zIndex: activeImage === index ? 5 : 3,
                    scale: activeImage === index ? '1.1' : '1',
                    boxShadow: activeImage === index ?
                        '0 10px 20px rgba(0,0,0,0.2)' :
                        '0 4px 8px rgba(0,0,0,0.1)',
                    '@media (max-width: 768px)': {
                        maxWidth: 'min(250px, 80vw)' // Más pequeño en móvil pero mantiene proporción
                    }
                }
            })
        ))
    ]);
};

// Inicializar cuando el documento esté listo


document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('initial-loader');
    const welcomeOverlay = document.getElementById('welcome-overlay');

    if (!welcomeOverlay || !loader) return;

    document.body.classList.add('onboarding-active');

    ReactDOM.render(
        React.createElement(OnboardingExperience, { key: getOnboardingKey() }),
        welcomeOverlay,
        () => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.3s ease';
            setTimeout(() => loader.remove(), 300);
        }
    );
});