const galleryConfigs = [
    // 1. Testimonios (primero)
    {
        id: "galeria-testimonios",
        title: "Testimonios",
        items: [
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1753128543/JAPON_MINIATURAS_TESTIMONIOS_ALVARO_bx8znf.png',
                type: 'video',
                videoId: 'wDjStOFA8xs', // Reemplazar con el ID real del video
                menuTitle: 'Testimonio de Álvaro',  // Título personalizado para el menú
                chapters: [
                    { time: 0, title: 'Introducción' },
                    { time: 16, title: 'Compromiso con el vacío' },
                    { time: 146, title: 'El jardín japonés' },
                    { time: 230, title: 'Espacios flexibles' },
                    { time: 340, title: 'Créditos' }
                ],
                transcriptUrl: 'URL_DEL_PDF', // Añadir esta línea
                index: 1

            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1753128536/JAPON_MINIATURAS_TESTIMONIOS_AKI_u8anyk.png',
                type: 'video',
                videoId: 'mOl5nKsBhAo', // Reemplazar con el ID real del video
                menuTitle: 'Testimonio de Aki',  // Título personalizado para el menú
                chapters: [
                    { time: 0, title: 'Introducción' },
                    { time: 16, title: 'Desafíos de desarrollo urbano' },
                    { time: 83, title: 'Flexibilidad de espacios' },
                    { time: 130, title: 'Iluminación natural' },
                    { time: 170, title: 'Créditos' }
                ],
                transcriptUrl: 'URL_DEL_PDF', // Añadir esta línea
                index: 2

            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1753128551/JAPON_MINIATURAS_TESTIMONIOS_MARGARITA_uctdy9.png',
                type: 'video',
                videoId: 'VV0NGOR0mhg', // Reemplazar con el ID real del video
                menuTitle: 'Testimonio de Margarita',  // Título personalizado para el menú
                chapters: [
                    { time: 0, title: 'Introducción' },
                    { time: 16, title: 'Cerámica, luz y viento' },
                    { time: 110, title: 'Técnicas en los contextos' },
                    { time: 216, title: 'El barro' },
                    { time: 306, title: 'Créditos' }
                ],
                transcriptUrl: 'URL_DEL_PDF', // Añadir esta línea
                index: 3
            }
        ]
    },
    
    // 2. Planimetría (segundo)
    {
        id: "galeria-planimetria",
        title: "Planimetría",
        items: [
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300277/JAPON_PLANIMETRIA_1920X1080_PLANTAGENERAL__kr2uds.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300277/JAPON_PLANIMETRIA_1920X1080_PLANTAGENERAL__kr2uds.gif',
                title: 'Planta General',
                index: 1

            },

            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300186/JAPON_PLANIMETRIA_1920X1080_GIRASOLPLANTA__un1nhv.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300186/JAPON_PLANIMETRIA_1920X1080_GIRASOLPLANTA__un1nhv.gif',
                index: 2
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300232/JAPON_PLANIMETRIA_1920X1080_DETALLECORTE1__jyqccw.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300232/JAPON_PLANIMETRIA_1920X1080_DETALLECORTE1__jyqccw.gif',
                index: 3
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300359/JAPON_PLANIMETRIA_1920X1080_GIRASOLCORTE__yzecrj.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759300359/JAPON_PLANIMETRIA_1920X1080_GIRASOLCORTE__yzecrj.gif',
                index: 4
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1758125641/JAP%C3%93N_PLANIMETRIA_1920X1080_AXOGENERAL_GIF_vyec1y.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1758125641/JAP%C3%93N_PLANIMETRIA_1920X1080_AXOGENERAL_GIF_vyec1y.gif',
                index: 5
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311740/JAPON_C_qbwa2e.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311740/JAPON_C_qbwa2e.gif',
                index: 6
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311755/JAPON_D_vworkh.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311755/JAPON_D_vworkh.gif',
                index: 7
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311759/JAPON_E_cdrxtg.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311759/JAPON_E_cdrxtg.gif',
                index: 8
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311761/JAPON_F_ndgcxg.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311761/JAPON_F_ndgcxg.gif',
                index: 9
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311747/JAPON_A_ixaxh5.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311747/JAPON_A_ixaxh5.gif',
                index: 10
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311743/JAPON_B_ayxbmu.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1759311743/JAPON_B_ayxbmu.gif',
                index: 11
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/Centro del Japón modelo 3D.obj',
                index: 12
            }
            ,
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/02 Centro del Japon_Base.obj',
                index: 13
            }
            ,
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/02 Centro del Japon_Exterior.obj',
                index: 14
            }
            ,
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/02 Centro del Japon_Interior.obj',
                index: 15
            }
        ]
    },
    
    // 3. Proyecto (tercero)
    {
        id: "galeria-proyecto",
        title: "Proyecto",
        items: [
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_1_vgcedz.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_1_vgcedz.png',
                caption: 'Vacío',
                index: 1
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_2_pjjay4.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_2_pjjay4.png',
                caption: 'Luz cenital',
                index: 2
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_3_f7lc6f.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_3_f7lc6f.png',
                caption: 'Sala',
                index: 3
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_4_cfzzkd.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_4_cfzzkd.png',
                caption: 'Luz cenital',
                index: 4
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_5_wovpa2.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_5_wovpa2.png',
                caption: 'Vista aérea',
                index: 5
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_6_oxghkl.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_6_oxghkl.png',
                caption: 'Primer piso',
                index: 6
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_7_onhjhu.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_7_onhjhu.png',
                caption: 'Exposición',
                index: 7
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_8_ozuop2.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_8_ozuop2.png',
                caption: 'Primer piso',
                index: 8
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_9_qojia7.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_9_qojia7.png',
                caption: 'Fachada',
                index: 9
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_10_ur2ear.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_10_ur2ear.png',
                caption: 'Escalera',
                index: 10
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_11_ykiks3.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_11_ykiks3.png',
                caption: 'Vista exterior',
                index: 11
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_12_xglqje.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_12_xglqje.png',
                caption: 'Vista exterior',
                index: 12
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_13_fdmqkz.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_13_fdmqkz.png',
                caption: 'Vista exterior',
                index: 13
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_14_m0z8ib.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_14_m0z8ib.png',
                caption: 'Auditorio',
                index: 14
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_15_i3fk5g.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_15_i3fk5g.png',
                caption: 'Patio',
                index: 15
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_16_favogg.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_16_favogg.png',
                caption: 'Exterior',
                index: 16
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_17_atk0iz.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_17_atk0iz.png',
                caption: 'Entrada exterior',
                index: 17
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_18_w0iwvn.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_18_w0iwvn.png',
                caption: 'Empalme fachadas',
                index: 18
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_19_yn5acg.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_19_yn5acg.png',
                caption: 'Vista exterior',
                index: 19
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738345280/FOTO_20_n0n1gk.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738345280/FOTO_20_n0n1gk.png',
                caption: 'Vista exterior',
                index: 20
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_400,c_scale,q_auto,f_auto/v1738344934/CDJ_PAISAJE_1_kkpmnc.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/w_1920,c_limit,q_auto,f_auto/v1738344934/CDJ_PAISAJE_1_kkpmnc.png',
                caption: 'Paisaje',
                index: 21
            }
        ]
    },
    
    // 4. Análisis (último)
    {
        id: "galeria-analisis",
        title: "Análisis",
        items: [
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715508/centro-cultural-grc-clima-rosa-de-vientos-00_szzk8m.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715508/centro-cultural-grc-clima-rosa-de-vientos-00_szzk8m.gif',
                index: 1
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715505/centro-cultural-grc-clima-jun-a-dic-00_hb0isx.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715505/centro-cultural-grc-clima-jun-a-dic-00_hb0isx.gif',
                index: 2
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715498/centro-cultural-grc-clima-dic-a-jun-00_cxogid.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715498/centro-cultural-grc-clima-dic-a-jun-00_cxogid.gif',
                index: 3
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715514/centro-cultural-grc-clima-temperatura---00_ovvkbp.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715514/centro-cultural-grc-clima-temperatura---00_ovvkbp.gif',
                index: 4
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715500/centro-cultural-grc-clima-humedad-00_v6bnzj.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715500/centro-cultural-grc-clima-humedad-00_v6bnzj.gif',
                index: 5
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715503/centro-cultural-grc-clima-nubosidad-00_xsxs8f.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715503/centro-cultural-grc-clima-nubosidad-00_xsxs8f.gif',
                index: 6
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715511/centro-cultural-grc-clima-psicometrica-00_ajwple.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1752715511/centro-cultural-grc-clima-psicometrica-00_ajwple.gif',
                index: 7
            }
        ]
    }
];


// document.addEventListener('DOMContentLoaded', () => {
//     const manager = new GalleriesManager(caseContent.galleries);
//     manager.init();
// });