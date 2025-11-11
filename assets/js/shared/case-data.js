// Constantes y funciones auxiliares
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmqyn1ic8/image/upload/v1734390242/';

function getCloudinaryUrl(imageName) {
    return `${CLOUDINARY_BASE}${imageName}`;
}

// Datos de los casos
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
            getCloudinaryUrl('acuarela1_rphvby.png'),
            getCloudinaryUrl('acuarela2_weoiku.webp'),
            getCloudinaryUrl('acuarela3_ejvf2o.webp'),
            getCloudinaryUrl('acuarela4_r5xina.webp'),
            getCloudinaryUrl('acuarela5_fykwkw.webp'),
            getCloudinaryUrl('acuarela6_vggtdq.webp'),
            getCloudinaryUrl('acuarela7_gpen5t.webp'),
            getCloudinaryUrl('acuarela8_cammdj.webp')
        ]
    },
    {
        id: 2,
        altitude: 3138,
        name: "Verjon",
        fullName: "Refugio Bosque La Lechuza",
        location: "Bogotá",
        architects: "Fernando de la Carrera",
        year: "2002",
        color: "#99CCCC",
        images: [
            getCloudinaryUrl('verjon1_we3itr.webp'),
            getCloudinaryUrl('verjon2_hygjgb.webp'),
            getCloudinaryUrl('verjon3_sldr2s.webp'),
            getCloudinaryUrl('verjon4_p2hgwj.webp'),
            getCloudinaryUrl('verjon5_zekkeo.webp'),
            getCloudinaryUrl('verjon6_pyfgxn.webp'),
            getCloudinaryUrl('verjon7_f4aivc.webp')
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
            getCloudinaryUrl('niebla1_bbhffx.webp'),
            getCloudinaryUrl('niebla2_xqfgld.webp'),
            getCloudinaryUrl('niebla3_hatfak.webp'),
            getCloudinaryUrl('niebla4_sbuyey.webp'),
            getCloudinaryUrl('niebla5_ccu8vf.webp'),
            getCloudinaryUrl('niebla6_epksj2.webp'),
            getCloudinaryUrl('niebla7_jqlcm4.webp')
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
            getCloudinaryUrl('cuidandero1_yntigc.webp'),
            getCloudinaryUrl('cuidandero2_gdwsd1.webp'),
            getCloudinaryUrl('cuidandero3_xcokaw.webp'),
            getCloudinaryUrl('cuidandero4_da0mgo.webp'),
            getCloudinaryUrl('cuidandero5_hdb33m.webp'),
            getCloudinaryUrl('cuidandero6_eewdhg.webp'),
            getCloudinaryUrl('cuidandero7_vsvukt.webp')
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
            getCloudinaryUrl('amangiri1_oz4cnr.webp'),
            getCloudinaryUrl('amangiri2_s45wzv.webp'),
            getCloudinaryUrl('amangiri3_abii64.webp'),
            getCloudinaryUrl('amangiri4_hczbs9.webp')
        ]
    },
    {
        id: 6,
        altitude: 2632,
        name: "Japón",
        fullName: "Centro del Japón",
        location: "Bogotá",
        architects: "Maribel Moreno / Álvaro Bohórquez ",
        year: "2018",
        color: "#66CC66",
        images: [
            getCloudinaryUrl('japon1_dfjyui.webp'),
            getCloudinaryUrl('japon2_ptv0ju.webp'),
            getCloudinaryUrl('japon3_xaxyrn.webp'),
            getCloudinaryUrl('japon4_pvtt5w.webp'),
            getCloudinaryUrl('japon5_njq5s6.webp'),
            getCloudinaryUrl('japon6_oqhdnk.webp'),
            getCloudinaryUrl('japon7_sgqy2k.webp')
        ]
    },
    {
        id: 7,
        altitude: 2595,
        name: "Adobe",
        fullName: "Casa Adobe",
        location: "Guatavita",
        architects: "Adriana Gutiérrez / Esteban Castro ",
        year: "2018",
        color: "#DBF68F",
        images: [
            getCloudinaryUrl('adobe1_inrzbu.webp'),
            getCloudinaryUrl('adobe2_uzlaqo.webp'),
            getCloudinaryUrl('adobe3_vsiiy4.webp'),
            getCloudinaryUrl('adobe4_z5po7j.webp')
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
            getCloudinaryUrl('pajarera1_zdurct.webp'),
            getCloudinaryUrl('pajarera2_g1zkzj.webp'),
            getCloudinaryUrl('pajarera3_pr9fnm.webp'),
            getCloudinaryUrl('pajarera4_a7nnbi.webp'),
            getCloudinaryUrl('pajarera5_tx6mnf.webp'),
            getCloudinaryUrl('pajarera6_srrzxh.webp'),
            getCloudinaryUrl('pajarera7_rr0deo.webp')
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
            getCloudinaryUrl('tejida1_zhsuaw.webp'),
            getCloudinaryUrl('tejida2_ot40pd.webp'),
            getCloudinaryUrl('tejida3_dgrfkw.webp'),
            getCloudinaryUrl('tejida4_byzv2d.webp')
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
            getCloudinaryUrl('muela1_b5ilft.webp'),
            getCloudinaryUrl('muela2_tjnyp0.webp'),
            getCloudinaryUrl('muela3_psc97g.webp'),
            getCloudinaryUrl('muela4_e7k6bo.webp'),
            getCloudinaryUrl('muela5_mtn33z.webp'),
            getCloudinaryUrl('muela6_eapicz.webp'),
            getCloudinaryUrl('muela7_bwkbna.webp')
        ]
    }
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

// Función de optimización de imágenes necesaria para el carousel
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

    return url.replace('/upload/', `/upload/${transformations}/`);
}