import WebConfigurator from "@/components/WebConfigurator";

export const metadata = {
    title: "Desarrollo Web | CTC Sistemas",
    description:
        "Configurador de servicios de desarrollo web. Landing, Institucional, Ecommerce con precios personalizables.",
    };

    export default function DesarrolloWebPage() {
    return (
        <div className="min-h-screen">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#003d7a] to-[#005fa3] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
                Desarrollo Web
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
                Configura tu solución web perfecta. Elige el plan que se adapte a tus necesidades y agrega los servicios adicionales que requieras.
            </p>
            </div>
        </div>

        {/* CTC Title Section */}
        <div className="bg-white border-b border-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
                <span className="text-gray-600 text-lg font-medium">Soluciones Tecnológicas</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#003d7a] mt-2 mb-4">
                Desarrollo Web
                </h2>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
                Infraestructura web, sitios dinámicos, tiendas online y servicios digitales diseñados para empresas que buscan crecer en el mundo digital.
            </p>
            </div>
        </div>

        {/* Configurator Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100">
            <WebConfigurator />
        </div>
        </div>
    );
}
