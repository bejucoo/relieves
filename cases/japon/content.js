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
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362053/JAPON_MINIATURAS_PLANIMETRIA_PLANTAGENERAL_d3xpmk.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239159/JAPON_PLANIMETRIA_1920X1080_PLANTAGENERAL___r4uezr.gif',
                title: 'Planta General',
                index: 1

            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362050/JAPON_MINIATURAS_PLANIMETRIA_GIRASOLPLANTA_yaboxv.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239163/JAPON_PLANIMETRIA_1920X1080_GIRASOLPLANTA___a0ibli.gif',
                index: 2
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_CORTE_uxieqc.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239129/JAPON_PLANIMETRIA_1920X1080_DETALLECORTE__mtns9h.gif',
                index: 3
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362049/JAPON_MINIATURAS_PLANIMETRIA_GIRASOLCORTE_xkk4gf.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239167/JAPON_PLANIMETRIA_1920X1080_GIRASOLCORTE___p901m2.gif',
                index: 4
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_AXOGENERAL_uoumsj.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239133/JAP%C3%93N_PLANIMETRIA_1920X1080_AXOGENERAL__meppim.gif',
                index: 5
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362048/JAPON_MINIATURAS_PLANIMETRIA_DETALLECORTE2C_yfrhdh.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239155/JAPON_PLANIMETRIA_1920X1080_DETALLECORTE2C__lmmhej.gif',
                index: 6
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362045/JAPON_MINIATURAS_PLANIMETRIA_DETALLECORTE2A_cc1skt.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239148/JAPON_PLANIMETRIA_1920X1080_DETALLECORTE2A__yfor3c.gif',
                index: 7
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362047/JAPON_MINIATURAS_PLANIMETRIA_DETALLECORTE2B_xhc6mm.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239145/JAPON_PLANIMETRIA_1920X1080_DETALLECORTE2B__dhvrty.gif',
                index: 8
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362042/JAPON_MINIATURAS_PLANIMETRIA_DETALLE3DEXTERIOR_gtrg1v.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239151/JAPON_PLANIMETRIA_1920X1080_DETALLE3DEXTERIOR__xguiwk.gif',
                index: 9
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362043/JAPON_MINIATURAS_PLANIMETRIA_DETALLE3DINTERIOR_orvx7x.png',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1765239141/JAPON_PLANIMETRIA_1920X1080_DETALLE3DINTERIOR__nfmxmy.gif',
                index: 10
            },
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/Centro del Japón modelo 3D.obj',
                index: 11
            }
            ,
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/02 Centro del Japon_Base.obj',
                index: 12
            }
            ,
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/02 Centro del Japon_Exterior.obj',
                index: 13
            }
            ,
            {
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1738362041/JAPON_MINIATURAS_PLANIMETRIA_MODELOS3D_qezhk9.png',
                type: 'model',
                modelUrl: '../../cases/japon/media/models/02 Centro del Japon_Interior.obj',
                index: 14
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
                thumbnail: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1763922832/centro-cultural-grc-clima-psicometrica-00_ajwple_qwplul.gif',
                type: 'image',
                fullContent: 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1763922832/centro-cultural-grc-clima-psicometrica-00_ajwple_qwplul.gif',
                index: 7
            }
        ]
    }
];