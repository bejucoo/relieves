// Componente para el filtro de ruido visual
const NoiseFilter = () => (
    <svg className="fixed inset-0 h-full w-full opacity-70 pointer-events-none" style={{ zIndex: -1 }}>
        <filter id="noiseFilter">
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.6" 
                numOctaves="5" 
                stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
                <feFuncR type="linear" slope="2" />
                <feFuncG type="linear" slope="2" />
                <feFuncB type="linear" slope="2" />
            </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.15"/>
    </svg>
);

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isInCaseList, setIsInCaseList] = React.useState(false);
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    
    // Determinar la ubicación actual
    const currentPath = window.location.pathname;
    const isInCase = currentPath.includes('/cases/');
    const isInInfo = currentPath.includes('/info/');
    
    // Construir las rutas absolutas desde la raíz del sitio
    const homeHref = '/'; // Ruta absoluta a la raíz del sitio
    const casesBaseHref = '/cases/';
    const infoHref = '/info/';
    
    const menuItems = [
        { 
            title: 'Home', 
            href: homeHref,
            external: false 
        },
        { 
            title: 'Casos', 
            action: () => {
                toggleMenu();
                handleCaseList();
            }
        },
        { 
            title: 'Publicación Completa', 
            href: 'https://arqdis.uniandes.edu.co/publicaciones/',
            external: true,
            newTab: true
        },
        { 
            title: 'Información', 
            href: infoHref,
            external: false
        }
    ];

    const toggleMenu = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        document.body.classList.toggle('menu-open');
        
        if (!newIsOpen) {
            const menuOverlay = document.getElementById('menu-overlay');
            if (menuOverlay) {
                menuOverlay.style.display = 'none';
            }
            setIsInCaseList(false);
        }
    };

    const loadIllustration = async (caseId, container) => {
        try {
            // Usa rutas absolutas para las ilustraciones
            const basePath = '/assets/illustrations/';
            const imagePath = `${basePath}case-${caseId}.png`;
            
            const img = document.createElement('img');
            img.className = 'w-full h-auto max-h-48 md:max-h-full';
            img.style.maxWidth = '300px';
            img.alt = `Illustration for case ${caseId}`;
            img.src = imagePath;
            
            container.innerHTML = '';
            container.appendChild(img);
            
        } catch (error) {
            console.error(`Error loading illustration for case ${caseId}:`, error);
        }
    };

    const handleCaseList = () => {
        const menuOverlay = document.getElementById('menu-overlay');
        if (menuOverlay && window.caseStudies) {
            menuOverlay.style.display = 'block';
            document.body.classList.add('menu-open');
            setIsInCaseList(true);
            setIsOpen(false);
            
            const caseList = menuOverlay.querySelector('.case-list');
            if (caseList) {
                caseList.innerHTML = '';
                
                window.caseStudies.forEach(study => {
                    const caseItem = document.createElement('div');
                    caseItem.className = 'case-item';
                    
                    caseItem.innerHTML = `
                    <div class="case-container grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div class="case-info flex flex-col justify-center">
                            <div class="case-header">
                                <h3 class="case-altitude">${study.altitude} msnm</h3>
                                <h4 class="case-name" style="color: #1C3B2D">${study.fullName}</h4>
                            </div>
                            <div class="case-details">
                                <p class="case-location">${study.location}</p>
                                <p class="case-architects">Arquitectos: ${study.architects}</p>
                                <p class="case-year">${study.year}</p>
                            </div>
                        </div>
                        <div class="case-illustration flex items-center justify-center">
                            <div class="illustration-container w-full h-full flex items-center justify-center" 
                                 data-case-id="${study.id}">
                            </div>
                        </div>
                    </div>
                `;

                    const illustrationContainer = caseItem.querySelector('.illustration-container');
                    loadIllustration(study.id, illustrationContainer, study.color);

                    // Usar ruta absoluta para los casos
                    const casePath = `/cases/${window.caseNames[study.id]}`;

                    caseItem.addEventListener('click', () => {
                        window.location.href = casePath;
                        toggleMenu();
                    });
                    
                    caseItem.addEventListener('mouseenter', () => {
                        caseItem.style.borderColor = study.color;
                    });
                    
                    caseItem.addEventListener('mouseleave', () => {
                        caseItem.style.borderColor = '';
                        caseItem.style.backgroundColor = '';
                    });
                    
                    caseList.appendChild(caseItem);
                });
            }
        }
    };

    const handleBack = () => {
        const menuOverlay = document.getElementById('menu-overlay');
        if (menuOverlay) {
            menuOverlay.style.display = 'none';
            setIsInCaseList(false);
            setIsOpen(true);
        }
    };

    const buttonStyles = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        color: '#1C3B2D',
        marginLeft: '20px',
        padding: 0,
        height: '60px',
        width: '65px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1000
    };
    
    return (
        <div className="relative font-['Roboto']">
            <button 
                onClick={isInCaseList ? handleBack : toggleMenu}
                style={buttonStyles}
                className="hover:italic relative"
                aria-label={isInCaseList ? "Volver" : "Menu"}
            >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <span 
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.3s ease',
                            opacity: (!isOpen && !isInCaseList) ? 1 : 0,
                            fontWeight: 100
                        }}
                    >
                        MENÚ
                    </span>
                    <span 
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.3s ease',
                            opacity: (isOpen && !isInCaseList) ? 1 : 0,
                            fontWeight: 100
                        }}
                    >
                        CERRAR
                    </span>
                    <span 
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.3s ease',
                            opacity: isInCaseList ? 1 : 0,
                            fontWeight: 100
                        }}
                    >
                        VOLVER
                    </span>
                </div>
            </button>

            {isOpen && ReactDOM.createPortal(
                <div 
                    className="fixed inset-0 flex items-center justify-center"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 999,
                        top: '60px',
                        height: 'calc(100vh - 60px)',
                        margin: 0,
                        padding: 0
                    }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            toggleMenu();
                        }
                    }}
                >
                    <NoiseFilter />
                    <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
                        <nav className="space-y-8 md:space-y-12 text-center max-w-4xl w-full mb-20 sm:mb-16">
                            {menuItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="menu-item py-2 md:py-4"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="overflow-visible">
                                        <button
                                            onClick={() => {
                                                if (item.action) {
                                                    item.action();
                                                } else if (item.href) {
                                                    if (item.newTab) {
                                                        window.open(item.href, '_blank');
                                                    } else {
                                                        window.location.href = item.href;
                                                    }
                                                }
                                            }}
                                            className="text-3xl md:text-5xl inline-block transition-all duration-300 ease-out
                                                hover:text-[#5AAF55] will-change-transform font-thin hover:font-bold
                                                tracking-normal hover:tracking-wide"
                                            style={{
                                                transform: hoveredIndex === index ? 
                                                    'translateY(-4px) scale(1.1)' : 
                                                    'translateY(0) scale(1)',
                                                color: hoveredIndex === index ? '#5AAF55' : '#1C1C1C',
                                                fontWeight: hoveredIndex === index ? '700' : '100'
                                            }}
                                        >
                                            {item.title}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </nav>
                        {!isInCase && (
                            <div className="fixed bottom-8 md:bottom-8 mb-16 sm:mb-8 text-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (window.restartOnboarding) {
                                            window.restartOnboarding();
                                            toggleMenu();
                                        }
                                    }}
                                    className="text-sm sm:text-base text-gray-800 hover:text-[#5AAF55] transition-all duration-200 
                                        hover:tracking-wider font-medium hover:font-bold px-4"
                                >
                                    Repetir introducción del proyecto
                                </button>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

// Montar el componente
const menuContainer = document.getElementById('new-menu-container');
if (menuContainer) {
    ReactDOM.render(<Menu />, menuContainer);
}