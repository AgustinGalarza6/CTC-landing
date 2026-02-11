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
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Confían en nosotros
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
