"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Cliente 1", logo: "/clients/client-1.png" },
  { name: "Cliente 2", logo: "/clients/client-2.png" },
  { name: "Cliente 3", logo: "/clients/client-3.png" },
  { name: "Cliente 4", logo: "/clients/client-4.png" },
  { name: "Cliente 5", logo: "/clients/client-5.png" },
  { name: "Cliente 6", logo: "/clients/client-6.png" },
];

export default function ClientsSlider() {
  // Duplicamos la lista para crear el efecto de bucle infinito sin saltos
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-10 md:py-16 bg-[#003d7a] overflow-hidden">
      <div className="container-custom mx-auto px-6">
        <div className="flex flex-col items-center gap-10 md:gap-14">
          
          {/* TÍTULO: Estilo Sagace y Centrado Absoluto */}
          <div className="w-full text-center">
            <h3 className="text-2xl md:text-3xl font-normal text-white leading-tight">
              Confían en <span className="font-bold">nosotros:</span>
            </h3>
          </div>

          {/* CONTENEDOR BOX: Aquí limitamos el ancho para que no se pase del formato */}
          <div className="w-full max-w-[1200px] relative overflow-hidden">
            {/* Gradientes laterales para suavizar el flujo de logos dentro del Box */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#003d7a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#003d7a] to-transparent z-10 pointer-events-none"></div>
            
            {/* Contenedor Animado con Framer Motion */}
            <motion.div
              className="flex items-center gap-12 md:gap-24"
              animate={{
                x: ["0%", "-50%"], 
              }}
              transition={{
                duration: 25, 
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="relative w-32 h-12 md:w-40 md:h-16">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}