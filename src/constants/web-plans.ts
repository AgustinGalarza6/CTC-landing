/**
 * Web Services Plans and Add-ons Configuration
 * Precios en dólares USA (USD)
 */

export interface WebPlan {
  id: string;
  name: string;
  price: number;
  copy: string;
  description: string;
  hook: string;
  features: string[];
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  salesCopy: string;
}

export const WEB_PLANS: WebPlan[] = [
  {
    id: "silver",
    name: "WEB PLAN SILVER",
    price: 270,
    copy: "Tu puerta de entrada al mundo digital con una estructura sólida.",
    description:
      "Ideal para profesionales independientes o lanzamientos de productos específicos. Diseñamos una Landing Page de alto impacto visual, optimizada para convertir visitantes en clientes desde el primer día. Incluye toda la infraestructura base para que no tengas que preocuparte por nada técnico.",
    hook: "Simplicidad, velocidad y presencia corporativa inmediata.",
    features: [
      "Landing Page profesional",
      "Diseño responsivo + moderno",
      "Hasta 3 cuentas de email coorporativos",
    ],
  },
  {
    id: "gold",
    name: "WEB PLAN GOLD",
    price: 380,
    copy: "La evolución digital para empresas que buscan autoridad y contenido.",
    description:
      "El equilibrio perfecto entre diseño y funcionalidad. Expandimos tu presencia con hasta 3 secciones navegables que permiten detallar tus servicios, equipo y propuesta de valor. Pensada para PyMEs que necesitan una comunicación clara, organizada y con capacidad de crecimiento.",
    hook: "Más secciones, más alcance, más profesionalismo.",
    features: [
        "Página web hasta 3 secciones navegables",
        "Diseño responsivo + moderno",
        "Hasta 5 cuentas de email coorporativos",
    ],
  },
  {
    id: "platinum",
    name: "WEB PLAN PLATINUM + PIL CLOUD",
    price: 600,
    copy: "Infraestructura de elite con respaldo en la nube para máxima seguridad.",
    description:
      "Nuestra solución más robusta para empresas que no pueden permitirse riesgos. Un sitio corporativo de hasta 5 secciones integrado directamente con PIL Cloud. No es solo una web; es un ecosistema digital que incluye 1TB de almacenamiento para backups, garantizando que la información crítica de tu empresa esté siempre protegida y disponible.",
    hook: "Potencia corporativa y seguridad de datos en un solo lugar.",
    features: [
        "Página web hasta 5 secciones navegables",
        "Diseño responsivo + moderno",
        "Incluye PIL Cloud + 1TB almacenamiento de backups",
        "Catalogo digital de productos",
        "Backend autogestionable para actualizaciones de contenido",
    ],
  },
];

export const ADD_ONS: AddOn[] = [
  {
    id: "domain",
    name: "Gestión de Dominio",
    price: 20,
    description: "Registro y gestión de dominio (.com / .com.ar / .ar)",
    salesCopy:
      "Aseguramos tu identidad digital. Nos encargamos del registro y la renovación anual de tu dirección .com o .com.ar.",
  },
  {
    id: "hosting",
    name: "Hosting Corporativo",
    price: 199,
    description: "Alojamiento en servidores de CTC Sistemas",
    salesCopy:
      "Velocidad y estabilidad garantizada. Alojamiento en servidores de alto rendimiento optimizados para tráfico empresarial.",
  },
  {
    id: "ssl",
    name: "Certificado SSL",
    price: 20,
    description: "Seguridad SSL para transacciones seguras (La conexión es segura)",
    salesCopy:
      "Navegación segura y confianza para tus clientes. Activamos el protocolo de seguridad indispensable para el posicionamiento en Google.",
  },
];

export const CURRENCY = "USD $";
export const CURRENCY_CODE = "USD";
