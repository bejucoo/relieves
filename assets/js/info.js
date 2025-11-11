import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InfoPage = () => {
  const sections = [
    {
      title: "El Proyecto",
      content: "Relieves es una exploración arquitectónica de la relación entre la altitud y el diseño en Colombia. Este proyecto documenta y analiza cómo la arquitectura contemporánea responde a los diversos paisajes altitudinales del país, desde el nivel del mar hasta las alturas andinas.",
      color: "#5AAF55"
    },
    {
      title: "Metodología",
      content: "Los casos de estudio fueron seleccionados siguiendo un riguroso proceso que considera la altitud, el impacto en el paisaje y la innovación en diseño. Cada proyecto representa una respuesta única a su contexto altitudinal específico.",
      color: "#339966"
    },
    {
      title: "Equipo",
      content: "Este proyecto es una iniciativa de ARQDIS, desarrollada por un equipo interdisciplinario de arquitectos, investigadores y diseñadores digitales.",
      color: "#1C3B2D"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Roboto'] relative overflow-hidden">
      {/* Filtro de ruido visual */}
      <svg className="fixed inset-0 h-full w-full opacity-70 pointer-events-none" style={{ zIndex: -1 }}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="5" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncR type="linear" slope="2" />
            <feFuncG type="linear" slope="2" />
            <feFuncB type="linear" slope="2" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.15"/>
      </svg>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-thin text-[#1C3B2D] mb-6">
              Información del Proyecto
            </h1>
            <p className="text-lg md:text-xl font-light text-[#1C3B2D] opacity-80">
              Una exploración de la arquitectura a través de la altitud
            </p>
          </div>

          {/* Secciones de información */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <h2 
                        className="text-xl md:text-2xl font-light mb-4 md:mb-0"
                        style={{ color: section.color }}
                      >
                        {section.title}
                      </h2>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-[#1C3B2D] font-light leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Datos del proyecto */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-light text-[#5AAF55] mb-2">10</p>
                <p className="text-sm font-light text-[#1C3B2D]">Casos de Estudio</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-[#5AAF55] mb-2">3640m</p>
                <p className="text-sm font-light text-[#1C3B2D]">Rango de Altitud</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-[#5AAF55] mb-2">2023</p>
                <p className="text-sm font-light text-[#1C3B2D]">Año de Publicación</p>
              </div>
            </div>
          </div>

          {/* Enlace a la publicación */}
          <div className="mt-16 text-center">
            <a 
              href="https://arqdis.uniandes.edu.co/publicaciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-white bg-[#5AAF55] rounded-lg hover:bg-[#4a9f45] transition-colors duration-300 font-light"
            >
              Ver Publicación Completa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;

