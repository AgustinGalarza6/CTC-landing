"use client";

export default function HeroCTA() {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => handleClick('#contacto')}
        className="inline-flex items-center justify-center px-8 py-4 text-base text-white bg-gradient-to-r from-ctc-navy to-blue-800 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
      >
        Solicitar Cotización
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
      <button
        onClick={() => handleClick('#productos')}
        className="inline-flex items-center justify-center px-8 py-4 text-base text-white bg-gradient-to-r from-ctc-navy to-blue-800 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
      >
        Ver Productos
      </button>
    </div>
  );
}
