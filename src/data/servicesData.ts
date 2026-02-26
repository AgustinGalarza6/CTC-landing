export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  hero: {
    title: string;
    benefitStatement: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  problemStatement: {
    title: string;
    problems: string[];
    closingText: string;
  };
  whatWeDo: {
    title: string;
    description: string;
    capabilities: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    title: string;
    subtitle?: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  howWeWork: {
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  trust: {
    title: string;
    statements: string[];
  };
  finalCTA: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export const servicesData: Record<string, ServicePageData> = {
  // ==========================================
  // 1. SISTEMAS INFORMÁTICOS (Ahora con 6)
  // ==========================================
  "sistemas-informaticos": {
    slug: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    subtitle: "Implementación y optimización de sistemas tecnológicos empresariales",
    hero: {
      title: "Optimización y Modernización de Sistemas Empresariales",
      benefitStatement: "Diseñamos, integramos y optimizamos entornos tecnológicos orientados a mejorar continuidad operativa, eficiencia de procesos y estabilidad del ecosistema IT.",
      primaryCTA: "Solicitar evaluación técnica",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su Ecosistema de Sistemas Limita la Eficiencia Operativa?",
      problems: [
        "¿Sus sistemas actuales generan duplicación de información o inconsistencias de datos?",
        "¿Procesos manuales o integraciones ineficientes afectan la continuidad operativa?",
        "¿La falta de interoperabilidad entre plataformas impacta en la productividad?",
        "¿Su organización depende de sistemas legacy que limitan escalabilidad y eficiencia?",
        "¿Requiere centralizar información y automatizar procesos críticos del negocio?",
      ],
      closingText: "Diseñamos e integramos arquitecturas de sistemas orientadas a estabilidad operativa y eficiencia.",
    },
    whatWeDo: {
      title: "Arquitecturas de Sistemas Eficientes",
      description: "Diseñamos e integramos entornos tecnológicos para garantizar estabilidad y mejora sostenida de procesos.",
      capabilities: [
        {
          icon: "integration",
          title: "Integraciones entre Plataformas",
          description: "Diseñamos e implementamos integraciones entre sistemas empresariales como ERP, CRM y e-commerce. Flujo de información confiable.",
        },
        {
          icon: "optimization",
          title: "Optimización Operativa",
          description: "Evaluamos procesos actuales, identificamos ineficiencias y aplicamos mejoras tecnológicas para maximizar la productividad.",
        },
        {
          icon: "migration",
          title: "Migración & Modernización",
          description: "Migramos sistemas legacy hacia arquitecturas modernas, asegurando integridad de la información y adaptación a entornos escalables.",
        },
        {
          icon: "standardization",
          title: "Estandarización de Procesos",
          description: "Implementamos entornos estructurados y workflows alineados con mejores prácticas, promoviendo previsibilidad operativa y control.",
        },
        {
          icon: "security-audit",
          title: "Seguridad y Auditoría de Datos",
          description: "Implementación de políticas de acceso y control de integridad de la información para prevenir fugas en sistemas críticos.",
        },
        {
          icon: "dashboard-control",
          title: "Dashboards de Control Real",
          description: "Creación de tableros de control con métricas en tiempo real para visualizar el estado de salud de sus sistemas y procesos.",
        }
      ],
    },
    benefits: {
      title: "Impacto Estratégico",
      items: [
        { icon: "efficiency", title: "Eficiencia Operativa", description: "Optimización de procesos mediante automatización e integración tecnológica." },
        { icon: "data", title: "Datos Centralizados", description: "Información consistente y sincronizada entre plataformas críticas empresariales." },
        { icon: "scalability", title: "Escalabilidad", description: "Arquitecturas de sistemas preparadas para acompañar el crecimiento sin interrupciones." },
        { icon: "continuity", title: "Continuidad", description: "Entornos diseñados para garantizar resiliencia operativa y funcionamiento confiable." },
        { icon: "visibility", title: "Control Total", description: "Mayor trazabilidad de procesos y visibilidad integral del ecosistema tecnológico." },
        { icon: "risk", title: "Reducción de Riesgos", description: "Minimización de errores mediante entornos robustos, integrados y estandarizados." },
      ],
    },
    howWeWork: {
      title: "Proceso de Implementación",
      description: "Enfoque metodológico para asegurar estabilidad operativa y previsibilidad técnica.",
      steps: [
        { number: "01", title: "Evaluación del Ecosistema", description: "Análisis de arquitectura existente, integraciones y flujos de información." },
        { number: "02", title: "Diseño de Arquitectura", description: "Definición de la arquitectura tecnológica integrada alineada con el negocio." },
        { number: "03", title: "Implementación Controlada", description: "Despliegue por etapas bajo mejores prácticas y mitigación de riesgos técnicos." },
        { number: "04", title: "Validación y Ajustes", description: "Pruebas funcionales y optimización de rendimiento para garantizar consistencia." },
        { number: "05", title: "Soporte Continuo", description: "Capacitación operativa y soporte post-implementación orientado a la mejora continua." },
      ],
    },
    trust: {
      title: "Experiencia en Sistemas",
      statements: [
        "Especialistas en integración de plataformas ERP, CRM y aplicaciones corporativas.",
        "Metodologías orientadas a estabilidad, previsibilidad y continuidad operativa.",
        "Documentación técnica estructurada incluida en cada proyecto.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Optimizar sus Sistemas Informáticos?",
      description: "Analizaremos oportunidades de integración, modernización y optimización alineadas a sus objetivos.",
      primaryButton: "Solicitar evaluación técnica",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  // ==========================================
  // 2. LICENCIAS EMPRESARIALES (Ahora con 6)
  // ==========================================
  "licencias": {
    slug: "licencias",
    title: "Licencias Empresariales",
    subtitle: "Licenciamiento oficial y asesoramiento especializado para su empresa",
    hero: {
      title: "Licenciamiento Corporativo con Cumplimiento Garantizado",
      benefitStatement: "Gestionamos licencias empresariales oficiales con asesoramiento técnico. Asegure cumplimiento normativo y optimización de costos.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Gestión de Licencias que Expone su Empresa?",
      problems: [
        "¿Tiene visibilidad clara sobre el estado de cumplimiento de licencias?",
        "¿Auditorías de software representan un riesgo potencial para su empresa?",
        "¿Licencias vencidas comprometen la seguridad de su operación?",
        "¿Desconoce qué esquema de licenciamiento es realmente óptimo para su entorno?",
        "¿La gestión manual de renovaciones genera costos innecesarios?",
      ],
      closingText: "El licenciamiento profesional elimina riesgos legales y garantiza el cumplimiento normativo.",
    },
    whatWeDo: {
      title: "Gestión Estratégica de Licencias",
      description: "Asesoramiento, adquisición y administración de licencias oficiales con foco en cumplimiento y optimización.",
      capabilities: [
        {
          icon: "microsoft",
          title: "Windows y Microsoft 365",
          description: "Licenciamiento oficial de Windows Server, Microsoft 365 y Office LTSC. Asesoramiento en planes corporativos.",
        },
        {
          icon: "renewal",
          title: "Gestión de Renovaciones",
          description: "Control proactivo de vencimientos. Prevención de interrupciones operativas asociadas a licencias expiradas.",
        },
        {
          icon: "consulting",
          title: "Asesoramiento Técnico",
          description: "Análisis de necesidades según estructura y usuarios. Optimización de costos evitando sobre-licenciamiento.",
        },
        {
          icon: "compliance",
          title: "Auditorías de Cumplimiento",
          description: "Evaluaciones internas de cumplimiento de software. Acompañamiento ante auditorías oficiales de fabricantes.",
        },
        {
          icon: "cyber-license",
          title: "Ciberseguridad Oficial",
          description: "Licenciamiento avanzado de protección para endpoints, firewalls y sistemas de backup corporativo certificado.",
        },
        {
          icon: "cloud-license",
          title: "Virtualización & Cloud",
          description: "Adquisición de licencias para entornos virtualizados y servicios cloud (Azure, AWS), optimizando recursos.",
        }
      ],
    },
    benefits: {
      title: "Beneficios del Licenciamiento",
      items: [
        { icon: "legal", title: "Cumplimiento Legal", description: "Elimine riesgos de sanciones y multas con documentación oficial y trazabilidad." },
        { icon: "security", title: "Seguridad Corporativa", description: "Software actualizado con parches críticos y reducción de vulnerabilidades IT." },
        { icon: "costs", title: "Optimización Financiera", description: "Ahorro mediante esquemas corporativos y planes de licencias por volumen." },
        { icon: "support", title: "Soporte Oficial", description: "Acceso a soporte técnico del fabricante y recursos oficiales garantizados." },
        { icon: "continuity", title: "Continuidad", description: "Prevención de interrupciones por licencias incorrectas o vencidas." },
        { icon: "control", title: "Control Visibilidad", description: "Gestión centralizada del inventario de software y renovaciones en tiempo real." },
      ],
    },
    howWeWork: {
      title: "Proceso de Licenciamiento",
      description: "Enfoque estructurado que garantiza cumplimiento normativo y control total.",
      steps: [
        { number: "01", title: "Análisis de Necesidades", description: "Relevamiento de usuarios y equipos para identificación precisa de requerimientos." },
        { number: "02", title: "Auditoría de Estado", description: "Evaluación de licencias instaladas y detección de riesgos de incumplimiento." },
        { number: "03", title: "Propuesta Optimizada", description: "Diseño del esquema más eficiente entre modalidades perpetuas y suscripción." },
        { number: "04", title: "Activación Oficial", description: "Gestión de compra por canales oficiales e implementación en su infraestructura." },
        { number: "05", title: "Gestión Continua", description: "Monitoreo proactivo de renovaciones y acompañamiento estratégico permanente." },
      ],
    },
    trust: {
      title: "Partner Oficial de Confianza",
      statements: [
        "Partner autorizado de Microsoft y fabricantes líderes de software empresarial.",
        "Asesoramiento técnico especializado en planes empresariales complejos.",
        "Facturación con plena validez legal y respaldo ante auditorías externas.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Regularizar su Licenciamiento?",
      description: "Solicite una auditoría técnica sin costo para detectar riesgos y optimizar su inversión.",
      primaryButton: "Solicitar cotización",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  // ==========================================
  // 3. SERVICIOS TECNOLÓGICOS (Ahora con 6)
  // ==========================================
  "servicios-tecnologicos": {
    slug: "servicios-tecnologicos",
    title: "Servicios Tecnológicos para Empresas",
    subtitle: "Servicios integrales para proyectos empresariales",
    hero: {
      title: "Servicios Tecnológicos para la Evolución de su Empresa",
      benefitStatement: "Acompañamos decisiones estratégicas y ejecutamos proyectos IT con foco en eficiencia e integración.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Busca un Partner Tecnológico Estratégico?",
      problems: [
        "¿Requiere consultoría tecnológica y necesita definir por dónde comenzar?",
        "¿Necesita ejecutar proyectos IT y no cuenta con equipo técnico interno?",
        "¿Busca optimizar su infraestructura sin realizar grandes inversiones iniciales?",
        "¿Requiere asesoramiento técnico objetivo e independiente de marcas?",
        "¿Necesita un proveedor que comprenda la operación de su negocio?",
      ],
      closingText: "Tecnología diseñada como una ventaja estratégica para su negocio.",
    },
    whatWeDo: {
      title: "Portfolio de Soluciones IT",
      description: "Soluciones tecnológicas diseñadas para eficiencia, estabilidad y escalabilidad empresarial.",
      capabilities: [
        {
          icon: "consulting",
          title: "Consultoría Estratégica",
          description: "Asesoramiento en decisiones tecnológicas. Análisis de infraestructura, riesgos y planificación de evolución.",
        },
        {
          icon: "projects",
          title: "Proyectos Tecnológicos",
          description: "Ejecución de iniciativas tecnológicas específicas. Diseño, implementación y puesta en marcha de soluciones.",
        },
        {
          icon: "optimization",
          title: "Optimización de Plataformas",
          description: "Mejora de rendimiento y eficiencia operativa. Reconfiguración y ajuste de tecnologías existentes.",
        },
        {
          icon: "support",
          title: "Soporte Técnico Corporativo",
          description: "Asistencia técnica preventiva y correctiva con SLA definidos y continuidad operativa garantizada.",
        },
        {
          icon: "perimeter-security",
          title: "Ciberseguridad Perimetral",
          description: "Análisis de vulnerabilidades en la frontera de su red para blindar la operación contra amenazas externas.",
        },
        {
          icon: "disaster-recovery",
          title: "Continuidad & Recuperación",
          description: "Diseño de planes de respaldo y recuperación rápida (DRP) para asegurar que su negocio nunca se detenga.",
        }
      ],
    },
    benefits: {
      title: "Ventajas Competitivas",
      items: [
        { icon: "strategy", title: "Visión Estratégica", description: "Tecnología alineada con objetivos de negocio mediante análisis profesional." },
        { icon: "flexibility", title: "Flexibilidad Total", description: "Servicios adaptados a sus necesidades actuales con escalabilidad futura." },
        { icon: "expertise", title: "Expertise Técnico", description: "Equipo multidisciplinario con experiencia en múltiples escenarios operativos." },
        { icon: "results", title: "Foco en Resultados", description: "Proyectos orientados a eficiencia y retorno de inversión con gestión profesional." },
        { icon: "continuity", title: "Continuidad Garantizada", description: "Infraestructura diseñada para minimizar riesgos y maximizar la resiliencia." },
        { icon: "costs", title: "Eficiencia Financiera", description: "Optimización de costos evitando sobreinversión en personal técnico interno." },
      ],
    },
    howWeWork: {
      title: "Metodología de Trabajo",
      description: "Proceso estructurado orientado a resultados y alineado con su realidad operativa.",
      steps: [
        { number: "01", title: "Entendimiento", description: "Reunión inicial para comprender desafíos tecnológicos y objetivos de negocio." },
        { number: "02", title: "Propuesta Técnica", description: "Diseño de solución con definición de alcance, arquitectura, tiempos y costos." },
        { number: "03", title: "Ejecución Estructurada", description: "Implementación con comunicación continua y control de avances iterativos." },
        { number: "04", title: "Validación y Cierre", description: "Testing funcional, validación operativa y transferencia de conocimiento técnico." },
        { number: "05", title: "Soporte Continuo", description: "Acompañamiento post-implementación para ajustes y mejoras evolutivas." },
      ],
    },
    trust: {
      title: "Su Socio Tecnológico",
      statements: [
        "Proyectos tecnológicos exitosos en empresas de diversos sectores operativos.",
        "Definición clara de costos, alcances y tiempos desde el inicio del proyecto.",
        "Enfoque orientado a la mejora medible del entorno IT de su organización.",
      ],
    },
    finalCTA: {
      title: "Potencie la Capacidad Tecnológica de su Empresa",
      description: "Diseñamos un esquema de servicios IT alineado con sus objetivos de negocio.",
      primaryButton: "Solicitar reunión",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  // ... Soporte Técnico, Ciberseguridad, Desarrollo Software e Infraestructura IT 
  // (asegúrate de que todos tengan sus 6 capabilities y 6 items de beneficios)
};

export const getServiceData = (slug: string): ServicePageData | null => servicesData[slug] || null;
export const getAllServiceSlugs = (): string[] => Object.keys(servicesData);