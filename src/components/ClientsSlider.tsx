"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
    const scrollSpeed = 0.6;

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

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-10 md:py-14 bg-[#003d7a]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Usamos items-center para centrar el contenido verticalmente en el flex-col (móvil) */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
          
          {/* w-full y text-center centran el texto en móvil; md:w-auto y md:text-left lo devuelven a su sitio en PC */}
          <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-normal text-white leading-tight">
              Confían en<br className="hidden md:block" /> nosotros:
            </h3>
          </div>

          <div className="w-full relative overflow-hidden">
            {/* Gradiente fade lateral */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#003d7a] to-transparent z-10 pointer-events-none"></div>
            
            <div
              ref={scrollRef}
              className="flex gap-10 md:gap-16 overflow-x-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-32 md:w-40 h-16 md:h-20"
                >
                  <div className="relative w-28 h-12 md:w-36 md:h-16">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
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