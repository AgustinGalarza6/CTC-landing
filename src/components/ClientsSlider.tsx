"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Por ahora con logos de ejemplo - puedes reemplazarlos con tus propios clientes
const clients = [
  { name: "Cliente 1", logo: "/clients/client-1.png" },
  { name: "Cliente 2", logo: "/clients/client-2.png" },
  { name: "Cliente 3", logo: "/clients/client-3.png" },
  { name: "Cliente 4", logo: "/clients/client-4.png" },
  { name: "Cliente 5", logo: "/clients/client-5.png" },
  { name: "Cliente 6", logo: "/clients/client-6.png" },
];

export default function ClientsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Velocidad del scroll automático

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer.scrollWidth && scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  // Duplicamos el array para crear el efecto de loop infinito
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-6 bg-[#003d7a]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-12">
          {/* Texto a la izquierda */}
          <div className="flex-shrink-0 w-[280px]">
            <h3 className="text-3xl font-normal text-white leading-tight">
              Confían en<br />nosotros:
            </h3>
          </div>

          {/* Slider de logos a la derecha */}
          <div className="flex-1 relative overflow-hidden">
            {/* Gradiente fade a la derecha */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#003d7a] to-transparent z-10 pointer-events-none"></div>
            
            <div
              ref={scrollRef}
              className="flex gap-16 overflow-x-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-40 h-20"
                >
                  <div className="relative w-36 h-16">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain brightness-0 invert"
                      sizes="144px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
