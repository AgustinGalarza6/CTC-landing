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
  "soporte-tecnico": {
    slug: "soporte-tecnico",
    title: "Soporte Técnico Especializado",
    subtitle: "Asistencia técnica profesional para garantizar la continuidad operativa",
    hero: {
      title: "Soporte Técnico que Elimina las Interrupciones de su Negocio",
      benefitStatement:
        "Mantenga su infraestructura IT operando al 100% con nuestro servicio de soporte técnico preventivo y correctivo. Reduciendo los tiempos de inactividad.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Interrupciones Técnicas que Impactan su Operación?",
      problems: [
        "¿Sus sistemas presentan fallas recurrentes que afectan la continuidad operativa?",
        "¿Los incidentes técnicos generan demoras, pérdidas de productividad o costos inesperados?",
        "¿Carece de soporte técnico especializado para resolver eventos críticos rápidamente?",
        "¿Los tiempos de respuesta actuales no acompañan las necesidades de su negocio?",
        "¿Necesita un esquema de mantenimiento preventivo para evitar caídas y riesgos operativos?",
      ],
      closingText:
        "Un servicio de soporte técnico profesional garantiza estabilidad, minimiza interrupciones y protege la continuidad de su operación.",
    },
    whatWeDo: {
      title: "Soporte Integral para su Infraestructura IT",
      description:
        "Servicios de soporte técnico diseñados para garantizar continuidad operativa, estabilidad y respuesta eficiente ante incidentes críticos.",
      capabilities: [
        {
          icon: "headset",
          title: "Mesa de Ayuda Técnica",
          description:
            "Soporte multicanal estructurado: telefónico, email y sistema de tickets. Atención profesional en español con trazabilidad completa de incidentes.",
        },
        {
          icon: "monitor",
          title: "Soporte Remoto y On-Site",
          description:
            "Resolución remota inmediata y asistencia on-site programada según criticidad. Cobertura técnica con tiempos de respuesta definidos.",
        },
        {
          icon: "wrench",
          title: "Diagnóstico y Resolución",
          description:
            "Análisis técnico profundo de incidentes. Identificación de causa raíz y resolución documentada bajo estándares operativos.",
        },
        {
          icon: "calendar",
          title: "Mantenimiento Preventivo",
          description:
            "Rutinas programadas de verificación, actualización y optimización. Detección temprana de riesgos técnicos antes de impactar la operación.",
        },
        {
          icon: "alert",
          title: "Gestión de Fallas Críticas",
          description:
            "Protocolos de escalamiento para incidentes de alta criticidad. Esquemas SLA y prioridades de atención según nivel de servicio.",
        },
        {
          icon: "chart",
          title: "Optimización de Rendimiento",
          description:
            "Evaluación continua de performance, cuellos de botella y oportunidades de mejora. Ajustes técnicos orientados a eficiencia operativa.",
        },
      ],
    },
    benefits: {
      title: "Impacto Operativo Medible",
      subtitle:
        "Nuestro modelo de soporte técnico no solo resuelve incidentes, sino que impacta directamente en la estabilidad, continuidad y eficiencia operativa.",
      items: [
        {
          icon: "stability",
          title: "Estabilidad Operativa",
          description:
            "Reducción de incidentes recurrentes mediante mantenimiento preventivo, monitoreo y gestión proactiva del entorno IT.",
        },
        {
          icon: "continuity",
          title: "Continuidad del Negocio",
          description:
            "Minimización de tiempos de inactividad. Respuesta estructurada ante incidentes críticos que afectan la operación.",
        },
        {
          icon: "guarantee",
          title: "Respuesta Garantizada",
          description:
            "Esquemas SLA definidos según criticidad del negocio. Prioridades de atención y tiempos de resolución establecidos.",
        },
        {
          icon: "productivity",
          title: "Productividad del Equipo",
          description:
            "Eliminación de interrupciones técnicas que impactan en usuarios y procesos. Mayor foco en tareas estratégicas.",
        },
        {
          icon: "optimization",
          title: "Optimización Tecnológica",
          description:
            "Identificación continua de cuellos de botella, oportunidades de mejora y ajustes técnicos del entorno IT.",
        },
        {
          icon: "control",
          title: "Control y Visibilidad",
          description:
            "Seguimiento documentado de incidentes, métricas de servicio y reportes periódicos de gestión técnica.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Soporte Técnico",
      description:
        "Un modelo de servicio estructurado orientado a garantizar continuidad operativa, resolución eficiente y mejora continua del entorno IT.",
      steps: [
        {
          number: "01",
          title: "Relevamiento Inicial",
          description:
            "Evaluación integral del entorno tecnológico, criticidad operativa, riesgos potenciales y necesidades del negocio.",
        },
        {
          number: "02",
          title: "Definición del Esquema de Servicio",
          description:
            "Diseño del modelo de atención, SLA, niveles de criticidad, canales de soporte y protocolos de escalamiento.",
        },
        {
          number: "03",
          title: "Soporte y Resolución de Incidentes",
          description:
            "Gestión estructurada de incidentes bajo procedimientos definidos, diagnóstico técnico y resolución documentada.",
        },
        {
          number: "04",
          title: "Mantenimiento Preventivo",
          description:
            "Rutinas programadas de verificación, actualización, monitoreo y detección temprana de desvíos operativos.",
        },
        {
          number: "05",
          title: "Optimización Continua",
          description:
            "Evaluación continua del servicio, tendencias operativas y oportunidades de optimización tecnológica.",
        },
      ],
    },
    trust: {
      title: "Soporte Técnico con Garantías Corporativas",
      statements: [
        "Trayectoria comprobada en soporte técnico para entornos empresariales",
        "Equipo técnico especializado con experiencia en tecnologías corporativas",
        "Acuerdos de nivel de servicio (SLA) con métricas, tiempos de respuesta y compromisos definidos",
        "Gestión documentada de incidentes con trazabilidad y control operativo",
        "Esquemas de soporte extendido adaptados a entornos de alta criticidad operativa",
      ],
    },
    finalCTA: {
      title: "Garantice la Continuidad Operativa de su Entorno Tecnológico",
      description:
        "Definimos un modelo de soporte técnico adaptado a sus necesidades operativas, SLA requeridos y nivel de criticidad.",
      primaryButton: "Solicitar Propuesta de Soporte",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "infraestructura-it": {
    slug: "infraestructura-it",
    title: "Implementación de Infraestructura IT",
    subtitle: "Arquitecturas tecnológicas robustas y escalables para su empresa",
    hero: {
      title: "Diseñamos Infraestructuras IT Pensadas para Rendimiento, Seguridad y Escalabilidad",
      benefitStatement:
        "Diseñamos e implementamos arquitecturas tecnológicas de nivel empresarial, optimizadas para garantizar estabilidad operativa, seguridad y escalabilidad a largo plazo.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su entorno IT está preparado para escalar su operación?",
      problems: [
        "¿Su red corporativa presenta cuellos de botella o inestabilidad operativa?",
        "¿Su infraestructura depende de servidores obsoletos o poco eficientes?",
        "¿Su entorno IT está optimizado para eficiencia y escalabilidad?",
        "¿Su infraestructura puede escalar sin generar fricción operativa?",
        "¿Su arquitectura IT cumple con estándares modernos de seguridad y disponibilidad?",
      ],
      closingText:
        "Diseñamos e implementamos arquitecturas IT orientadas a estabilidad, seguridad y crecimiento sostenido.",
    },
    whatWeDo: {
      title: "Diseñamos Ecosistemas Tecnológicos de Alto Rendimiento",
      description:
        "Desde la arquitectura inicial hasta la implementación completa, diseñamos infraestructuras tecnológicas orientadas a estabilidad, seguridad y escalabilidad.",
      capabilities: [
        {
          icon: "network",
          title: "Redes Corporativas",
          description:
            "Diseño de arquitecturas LAN/WAN orientadas a rendimiento, segmentación eficiente y alta disponibilidad operativa.",
        },
        {
          icon: "server",
          title: "Servidores",
          description:
            "Implementación de entornos de servidores físicos y virtuales optimizados para estabilidad, seguridad y gestión centralizada.",
        },
        {
          icon: "cloud",
          title: "Virtualización",
          description:
            "Plataformas de virtualización diseñadas para maximizar eficiencia, resiliencia y escalabilidad de recursos.",
        },
        {
          icon: "lock",
          title: "Seguridad Perimetral",
          description:
            "Arquitecturas de seguridad perimetral enfocadas en protección multicapa, segmentación inteligente y continuidad operativa.",
        },
        {
          icon: "speed",
          title: "Optimización de Performance",
          description:
            "Análisis y optimización de rendimiento orientados a eliminar cuellos de botella y maximizar eficiencia operativa.",
        },
        {
          icon: "growth",
          title: "Escalabilidad",
          description:
            "Diseño de infraestructuras modulares preparadas para expansión y crecimiento sostenido sin rediseños críticos.",
        },
      ],
    },
    benefits: {
      title: "Beneficios Empresariales Concretos",
      items: [
        {
          icon: "rocket",
          title: "Rendimiento Empresarial",
          description:
            "Infraestructura que soporta operaciones críticas sin cuellos de botella. Velocidad y confiabilidad garantizada.",
        },
        {
          icon: "shield-check",
          title: "Seguridad de Nivel Corporativo",
          description:
            "Arquitecturas tecnológicas orientadas a protección multicapa, reducción de riesgos y cumplimiento de estándares modernos de seguridad.",
        },
        {
          icon: "savings",
          title: "Eficiencia & Optimización de Recursos",
          description:
            "Entornos IT optimizados para maximizar rendimiento, mejorar utilización de recursos y reducir costos operativos innecesarios.",
        },
        {
          icon: "expand",
          title: "Infraestructura Preparada para Escalar",
          description:
            "Diseños tecnológicos modulares que acompañan el crecimiento empresarial sin generar fricciones ni requerir rediseños críticos.",
        },
        {
          icon: "continuity",
          title: "Continuidad Operativa",
          description:
            "Infraestructuras diseñadas para garantizar disponibilidad, resiliencia y funcionamiento estable incluso en entornos de alta demanda.",
        },
        {
          icon: "risk",
          title: "Reducción de Riesgos Tecnológicos",
          description:
            "Arquitecturas IT orientadas a minimizar vulnerabilidades, prevenir fallos críticos y proteger la estabilidad de la operación empresarial.",
        },
      ],
    },
    howWeWork: {
      title: "Proceso de Implementación Estructurado",
      description:
        "Aplicamos un enfoque metodológico diseñado para asegurar previsibilidad, control y estabilidad en cada etapa del proyecto.",
      steps: [
        {
          number: "01",
          title: "Análisis & Arquitectura",
          description:
            "Evaluación del entorno actual, relevamiento de requerimientos y diseño de arquitectura tecnológica orientada a estabilidad y escalabilidad.",
        },
        {
          number: "02",
          title: "Planificación Estratégica",
          description:
            "Definición de alcance, cronograma, recursos y estrategia de implementación para asegurar control y previsibilidad operativa.",
        },
        {
          number: "03",
          title: "Implementación Controlada",
          description:
            "Despliegue técnico bajo mejores prácticas, validaciones funcionales y optimización de rendimiento en cada etapa crítica.",
        },
        {
          number: "04",
          title: "Entrega & Transferencia Operativa",
          description:
            "Documentación técnica completa, validación final, capacitación operativa y soporte post-implementación.",
        },
      ],
    },
    trust: {
      title: "Capacidad Técnica con Trayectoria Comprobada",
      statements: [
        "Arquitecturas tecnológicas implementadas en entornos empresariales de múltiples sectores.",
        "Experiencia técnica alineada con tecnologías de fabricantes líderes como Cisco, HPE, Dell y VMware.",
        "Proyectos ejecutados bajo estándares de previsibilidad, control y cumplimiento de plazos.",
        "Documentación técnica estructurada y alineada con prácticas de entornos enterprise.",
        "Soporte post-implementación con acuerdos de servicio (SLA) orientados a continuidad operativa.",
      ],
    },
    finalCTA: {
      title: "Construyamos una Infraestructura IT Pensada para Operaciones Críticas",
      description:
        "Solicite una evaluación técnica de su entorno IT. Nuestro equipo analizará su infraestructura actual y propondrá una arquitectura optimizada para estabilidad, seguridad y crecimiento sostenido.",
      primaryButton: "Solicitar evaluación técnica",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "erp": {
    slug: "erp",
    title: "Sistemas ERP & Gestión Empresarial",
    subtitle: "Soluciones ERP para centralizar, automatizar y optimizar su negocio",
    hero: {
      title: "Software de Gestión que Ordena, Automatiza y Potencia su Operación",
      benefitStatement:
        "Implementamos soluciones de gestión empresarial diseñadas para centralizar información crítica, optimizar procesos y mejorar la eficiencia operativa. Transforme datos en control, previsibilidad y decisiones estratégicas.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Procesos Desordenados que Limitan la Eficiencia de su Empresa?",
      problems: [
        "¿La información crítica se encuentra dispersa en múltiples planillas o sistemas desconectados?",
        "¿La falta de visibilidad en tiempo real afecta decisiones operativas y comerciales?",
        "¿Procesos manuales generan errores, demoras y retrabajos innecesarios?",
        "¿Sus áreas operan sin integración, provocando inconsistencias de datos?",
        "¿Necesita un sistema robusto que acompañe el crecimiento sin fricciones operativas?",
      ],
      closingText:
        "Implementamos soluciones de gestión empresarial orientadas a centralizar información, estructurar procesos y mejorar la previsibilidad operativa.",
    },
    whatWeDo: {
      title: "Impacto Empresarial del ERP",
      description:
        "Resultados concretos derivados de la centralización, automatización e integración de la gestión empresarial.",
      capabilities: [
        {
          icon: "efficiency",
          title: "Eficiencia Operativa",
          description:
            "Reducción significativa de tareas manuales y tiempos administrativos. Procesos optimizados y mayor productividad organizacional.",
        },
        {
          icon: "visibility",
          title: "Información en Tiempo Real",
          description:
            "Acceso inmediato a indicadores clave del negocio. Decisiones estratégicas basadas en datos confiables y actualizados.",
        },
        {
          icon: "integration",
          title: "Integración Total",
          description:
            "Un único sistema que conecta áreas críticas. Eliminación de silos operativos y duplicación de información.",
        },
        {
          icon: "control",
          title: "Control & Trazabilidad",
          description:
            "Mayor visibilidad sobre operaciones, procesos y recursos. Gestión estructurada y controlada.",
        },
        {
          icon: "growth",
          title: "Escalabilidad Empresarial",
          description:
            "Plataforma preparada para acompañar el crecimiento del negocio sin rediseños ni fricciones operativas.",
        },
        {
          icon: "accuracy",
          title: "Reducción de Errores",
          description:
            "Automatización y consistencia de datos que minimizan fallos humanos e inconsistencias operativas.",
        },
      ],
    },
    benefits: {
      title: "Impacto Empresarial Medible",
      items: [
        {
          icon: "efficiency",
          title: "Eficiencia Operativa",
          description:
            "Reducción significativa de tiempos administrativos y tareas manuales. Automatización de procesos críticos del negocio.",
        },
        {
          icon: "visibility",
          title: "Visibilidad en Tiempo Real",
          description:
            "Acceso inmediato a información estratégica. Dashboards ejecutivos y métricas clave siempre actualizadas.",
        },
        {
          icon: "integration",
          title: "Integración Total",
          description:
            "Un único sistema que conecta áreas, procesos y datos. Eliminación de silos operativos y duplicación de información.",
        },
        {
          icon: "growth",
          title: "Escalabilidad Garantizada",
          description:
            "Plataforma preparada para acompañar el crecimiento empresarial sin rediseños ni cambios de sistema.",
        },
        {
          icon: "control",
          title: "Control & Trazabilidad",
          description:
            "Mayor visibilidad sobre operaciones, flujos y procesos internos. Gestión estructurada y predecible.",
        },
        {
          icon: "accuracy",
          title: "Reducción de Errores Operativos",
          description:
            "Consistencia de datos y automatización que minimizan fallos humanos e inconsistencias en la gestión.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Implementación ERP",
      description:
        "Un enfoque estructurado que garantiza previsibilidad, adopción efectiva y estabilidad operativa.",
      steps: [
        {
          number: "01",
          title: "Análisis de Procesos",
          description:
            "Relevamiento funcional y operativo detallado. Identificación de requerimientos, restricciones y oportunidades de mejora.",
        },
        {
          number: "02",
          title: "Diseño de Solución",
          description:
            "Definición de arquitectura funcional del ERP. Parametrización, flujos de trabajo, reportes y KPIs estratégicos.",
        },
        {
          number: "03",
          title: "Implementación Controlada",
          description:
            "Despliegue por fases bajo mejores prácticas. Validaciones continuas para asegurar estabilidad e integridad de datos.",
        },
        {
          number: "04",
          title: "Capacitación & Go-Live",
          description:
            "Entrenamiento estructurado a usuarios clave. Acompañamiento intensivo durante la puesta en producción.",
        },
        {
          number: "05",
          title: "Soporte & Optimización Continua",
          description:
            "Monitoreo post-implementación. Ajustes evolutivos y mejora sostenida del ecosistema ERP.",
        },
      ],
    },
    trust: {
      title: "Partners Estratégicos y Experiencia Comprobada",
      statements: [
        "Implementaciones ERP exitosas en PyMEs y empresas medianas de múltiples sectores.",
        "Especialistas en parametrización, integración y optimización de sistemas de gestión.",
        "Metodología de implementación estructurada con alta tasa de adopción.",
        "Equipo consultor con expertise funcional, técnico y operativo.",
        "Soporte continuo en español orientado a estabilidad y evolución del sistema.",
      ],
    },
    finalCTA: {
      title: "Transforme su Gestión Empresarial con un ERP Profesional",
      description:
        "Solicite una demo personalizada. Analizaremos sus procesos y le presentaremos una solución ERP alineada con sus objetivos operativos y estratégicos.",
      primaryButton: "Coordinar reunión",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "ciberseguridad": {
    slug: "ciberseguridad",
    title: "Ciberseguridad Corporativa",
    subtitle: "Protección integral de su infraestructura y datos críticos",
    hero: {
      title: "Proteja su Empresa de Amenazas Cibernéticas",
      benefitStatement:
        "Implementamos estrategias de ciberseguridad multicapa que protegen su infraestructura, datos y operaciones contra ataques internos y externos.",
      primaryCTA: "Solicitar auditoría de seguridad",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su Empresa Está Expuesta a Riesgos Críticos?",
      problems: [
        "¿No cuenta con una estrategia de ciberseguridad integral y actualizada?",
        "¿Teme que un ransomware paralice su operación y comprometa datos críticos?",
        "¿Sus usuarios acceden a recursos empresariales sin controles adecuados?",
        "¿Desconoce si su infraestructura tiene vulnerabilidades explotables?",
        "¿Necesita cumplir normativas de seguridad y protección de datos?",
      ],
      closingText:
        "La ciberseguridad no es un gasto, es la protección de la continuidad de su negocio.",
    },
    whatWeDo: {
      title: "Ciberseguridad Empresarial Integral",
      description:
        "Implementamos capas de protección técnica, análisis de vulnerabilidades y procesos de seguridad corporativa.",
      capabilities: [
        {
          icon: "audit",
          title: "Auditorías de Seguridad",
          description:
            "Análisis de vulnerabilidades técnicas y organizacionales. Penetration testing ético y reportes ejecutivos con plan de acción.",
        },
        {
          icon: "firewall",
          title: "Firewalls y Hardening",
          description:
            "Implementación de firewalls empresariales de próxima generación. Hardening de sistemas operativos y aplicaciones críticas.",
        },
        {
          icon: "endpoint",
          title: "Protección de Endpoints",
          description:
            "Antivirus empresarial, EDR/XDR, control de dispositivos. Protección avanzada en estaciones de trabajo y servidores.",
        },
        {
          icon: "monitor-security",
          title: "Monitoreo",
          description:
            "SIEM, detección de anomalías, alertas en tiempo real. Monitoreo 24/7 de eventos de seguridad críticos.",
        },
        {
          icon: "incident",
          title: "Respuesta ante Incidentes",
          description:
            "Protocolos de respuesta ante brechas de seguridad. Análisis forense, contención, remediación y recuperación.",
        },
        {
          icon: "education",
          title: "Buenas Prácticas",
          description:
            "Capacitación a usuarios en ciberseguridad. Políticas de seguridad, concientización y cultura de protección.",
        },
      ],
    },
    benefits: {
      title: "Protección que Genera Valor",
      items: [
        {
          icon: "shield",
          title: "Reducción de Riesgo",
          description:
            "Minimice la probabilidad de ataques exitosos. Protección multicapa contra las amenazas más comunes y avanzadas.",
        },
        {
          icon: "compliance",
          title: "Cumplimiento Normativo",
          description:
            "Cumpla con regulaciones de protección de datos. Evidencia documentada para auditorías y certificaciones.",
        },
        {
          icon: "trust",
          title: "Confianza de Clientes",
          description:
            "Demuestre que protege la información de sus clientes. Ventaja competitiva en mercados regulados.",
        },
        {
          icon: "continuity",
          title: "Continuidad del Negocio",
          description:
            "Evite interrupciones operativas por incidentes de seguridad. Recuperación rápida ante eventos adversos.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Ciberseguridad",
      description:
        "Un enfoque estructurado basado en frameworks internacionales de seguridad y mejores prácticas.",
      steps: [
        {
          number: "01",
          title: "Evaluación de Riesgos",
          description:
            "Análisis de activos críticos y vectores de amenaza. Evaluación de madurez de seguridad actual.",
        },
        {
          number: "02",
          title: "Diseño de Estrategia",
          description:
            "Roadmap de seguridad priorizado por riesgo e impacto. Definición de controles técnicos y organizacionales.",
        },
        {
          number: "03",
          title: "Implementación de Controles",
          description:
            "Despliegue de tecnologías de protección. Configuración, hardening y testing de efectividad.",
        },
        {
          number: "04",
          title: "Monitoreo y Mejora Continua",
          description:
            "Vigilancia permanente de eventos de seguridad. Actualización de controles ante nuevas amenazas.",
        },
      ],
    },
    trust: {
      title: "Expertise en Seguridad Empresarial",
      statements: [
        "Especialistas certificados en ciberseguridad y ethical hacking",
        "Experiencia en protección de infraestructuras críticas empresariales",
        "Metodologías basadas en NIST, ISO 27001 y frameworks reconocidos",
        "Coordinación con organismos de respuesta ante incidentes (CERT)",
        "Confidencialidad total: NDA firmados en cada proyecto de seguridad",
      ],
    },
    finalCTA: {
      title: "¿Listo para Proteger su Empresa?",
      description:
        "Solicite una auditoría de seguridad gratuita. Identificaremos vulnerabilidades críticas y le presentaremos un plan de protección a medida.",
      primaryButton: "Solicitar auditoría gratuita",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "desarrollo-software": {
    slug: "desarrollo-software",
    title: "Desarrollo de Soluciones a Medida",
    subtitle: "Software empresarial personalizado para sus procesos de negocio",
    hero: {
      title: "Software a Medida que Potencia su Operación",
      benefitStatement:
        "Desarrollamos plataformas, aplicaciones y automatizaciones diseñadas específicamente para resolver los desafíos únicos de su negocio.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Los Sistemas Genéricos No Resuelven sus Necesidades?",
      problems: [
        "¿Sus procesos de negocio son únicos y los softwares estándar no se adaptan?",
        "¿Necesita integrar sistemas que no se comunican entre sí?",
        "¿Requiere automatizar procesos manuales que consumen tiempo valioso?",
        "¿Busca diferenciarse con herramientas tecnológicas que su competencia no tiene?",
        "¿Necesita dashboards personalizados con la información crítica de su negocio?",
      ],
      closingText:
        "El desarrollo a medida es la solución cuando su negocio requiere tecnología que no existe en el mercado.",
    },
    whatWeDo: {
      title: "Desarrollo de Software Empresarial",
      description:
        "Construimos soluciones tecnológicas robustas, escalables y mantenibles con las mejores prácticas de ingeniería de software.",
      capabilities: [
        {
          icon: "code",
          title: "Software Empresarial",
          description:
            "Sistemas de gestión internos, CRM personalizado, plataformas de administración. Desarrollo full-stack con tecnologías modernas.",
        },
        {
          icon: "web",
          title: "Aplicaciones Web",
          description:
            "Web apps responsivas, PWA, portales corporativos. Stack moderno: React, Next.js, Node.js, bases de datos SQL/NoSQL.",
        },
        {
          icon: "api",
          title: "Integraciones ERP / APIs",
          description:
            "Conectores custom con sistemas ERP, e-commerce, pasarelas de pago. APIs REST/GraphQL para integración con terceros.",
        },
        {
          icon: "workflow",
          title: "Automatizaciones",
          description:
            "RPA, scripts de automatización, workflows. Eliminación de tareas manuales repetitivas mediante software.",
        },
        {
          icon: "dashboard",
          title: "Dashboards",
          description:
            "Tableros ejecutivos con métricas en tiempo real. Visualización de KPIs críticos con actualización automática.",
        },
        {
          icon: "tools",
          title: "Sistemas Internos",
          description:
            "Herramientas internas de productividad, gestión de recursos, tracking. Software específico para su operación.",
        },
      ],
    },
    benefits: {
      title: "Ventajas Competitivas del Software a Medida",
      items: [
        {
          icon: "custom",
          title: "100% Adaptado a su Negocio",
          description:
            "Software diseñado específicamente para sus procesos. Sin adaptaciones forzadas ni funcionalidades innecesarias.",
        },
        {
          icon: "competitive",
          title: "Ventaja Competitiva",
          description:
            "Herramientas tecnológicas únicas que su competencia no posee. Diferenciación real en su mercado.",
        },
        {
          icon: "automation",
          title: "Automatización Total",
          description:
            "Elimine tareas manuales repetitivas. Reduzca errores humanos y libere tiempo para actividades estratégicas.",
        },
        {
          icon: "ownership",
          title: "Propiedad del Código",
          description:
            "Usted es dueño del software desarrollado. Sin dependencias de licencias ni vendor lock-in a largo plazo.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Desarrollo",
      description:
        "Desarrollo ágil con entregas iterativas, validación continua y participación activa del cliente.",
      steps: [
        {
          number: "01",
          title: "Análisis de Requerimientos",
          description:
            "Relevamiento profundo de necesidades funcionales. Definición de casos de uso, mockups y estructura técnica.",
        },
        {
          number: "02",
          title: "Diseño UX/UI",
          description:
            "Diseño de interfaz centrado en el usuario. Prototipos interactivos para validación antes de desarrollar.",
        },
        {
          number: "03",
          title: "Desarrollo Iterativo",
          description:
            "Sprints de desarrollo con entregas funcionales cada 2-3 semanas. Feedback continuo y ajustes en tiempo real.",
        },
        {
          number: "04",
          title: "Testing y QA",
          description:
            "Pruebas funcionales, de performance y seguridad. Validación de calidad antes de cada entrega.",
        },
        {
          number: "05",
          title: "Deploy y Capacitación",
          description:
            "Puesta en producción con plan de rollback. Capacitación a usuarios y documentación técnica completa.",
        },
        {
          number: "06",
          title: "Mantenimiento y Evolución",
          description:
            "Soporte post-lanzamiento incluido. Evolución del software según nuevas necesidades del negocio.",
        },
      ],
    },
    trust: {
      title: "Ingeniería de Software de Calidad",
      statements: [
        "Desarrolladores senior con experiencia en proyectos empresariales complejos",
        "Stack tecnológico moderno: React, Next.js, Node.js, Python, .NET",
        "Metodologías ágiles con entregas iterativas y participación del cliente",
        "Código limpio, documentado y con testing automatizado",
        "Propiedad intelectual del cliente sobre todo el código desarrollado",
      ],
    },
    finalCTA: {
      title: "¿Listo para Desarrollar su Herramienta Tecnológica Única?",
      description:
        "Contáctenos para analizar su proyecto. Le presentaremos una propuesta técnica, timeline y presupuesto detallado.",
      primaryButton: "Solicitar propuesta",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "sistemas-informaticos": {
    slug: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    subtitle: "Implementación y optimización de sistemas tecnológicos empresariales",
    hero: {
      title: "Optimización y Modernización de Sistemas Empresariales",
      benefitStatement:
        "Diseñamos, implementamos y optimizamos entornos tecnológicos orientados a mejorar continuidad operativa, eficiencia de procesos y estabilidad del ecosistema IT.",
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
      closingText:
        "Diseñamos e integramos arquitecturas de sistemas orientadas a estabilidad operativa, eficiencia de procesos y crecimiento sostenido.",
    },
    whatWeDo: {
      title: "Arquitecturas de Sistemas Orientadas a Eficiencia Operativa",
      description:
        "Diseñamos, integramos y optimizamos entornos tecnológicos para garantizar continuidad operativa, estabilidad del ecosistema IT y mejora sostenida de procesos empresariales.",
      capabilities: [
        {
          icon: "integration",
          title: "Integraciones entre Plataformas",
          description:
            "Diseñamos e implementamos integraciones entre sistemas empresariales como ERP, CRM, e-commerce y aplicaciones críticas. Flujo de información confiable, automatizado y sin fricciones operativas.",
        },
        {
          icon: "optimization",
          title: "Optimización Operativa",
          description:
            "Evaluamos procesos actuales, identificamos ineficiencias y aplicamos mejoras tecnológicas orientadas a maximizar productividad, reducir tareas manuales y optimizar recursos operativos.",
        },
        {
          icon: "migration",
          title: "Migración & Modernización",
          description:
            "Migramos sistemas legacy hacia arquitecturas modernas, asegurando continuidad operativa, integridad de la información y adaptación a entornos tecnológicos escalables.",
        },
        {
          icon: "standardization",
          title: "Estandarización de Procesos",
          description:
            "Implementamos entornos estructurados y workflows alineados con mejores prácticas, promoviendo previsibilidad operativa, control y eficiencia en procesos críticos.",
        },
      ],
    },
    benefits: {
      title: "Impacto Estratégico en la Operación Empresarial",
      items: [
        {
          icon: "efficiency",
          title: "Eficiencia Operativa",
          description:
            "Optimización de procesos mediante automatización e integración tecnológica. Reducción de tareas manuales, tiempos operativos y fricciones en la ejecución diaria.",
        },
        {
          icon: "data",
          title: "Datos Centralizados",
          description:
            "Información consistente y sincronizada entre plataformas críticas. Eliminación de duplicaciones, discrepancias y errores derivados de sistemas desintegrados.",
        },
        {
          icon: "scalability",
          title: "Escalabilidad Tecnológica",
          description:
            "Arquitecturas de sistemas preparadas para acompañar el crecimiento empresarial sin necesidad de rediseños estructurales ni interrupciones operativas.",
        },
        {
          icon: "continuity",
          title: "Continuidad del Negocio",
          description:
            "Entornos tecnológicos diseñados para garantizar estabilidad, resiliencia operativa y funcionamiento confiable incluso en escenarios de alta exigencia.",
        },
        {
          icon: "visibility",
          title: "Control & Visibilidad Operativa",
          description:
            "Mayor trazabilidad de procesos, flujo de información estructurado y visibilidad integral del ecosistema tecnológico empresarial.",
        },
        {
          icon: "risk",
          title: "Reducción de Riesgos Operativos",
          description:
            "Minimización de errores, inconsistencias y dependencias críticas mediante entornos de sistemas robustos, integrados y alineados con mejores prácticas.",
        },
      ],
    },
    howWeWork: {
      title: "Proceso de Implementación & Optimización de Sistemas",
      description:
        "Aplicamos un enfoque metodológico estructurado para asegurar estabilidad operativa, previsibilidad técnica y adopción efectiva en cada etapa del proyecto.",
      steps: [
        {
          number: "01",
          title: "Evaluación del Ecosistema Actual",
          description:
            "Análisis de arquitectura existente, integraciones, flujos de información y dependencias críticas. Identificación de riesgos, ineficiencias y oportunidades de optimización.",
        },
        {
          number: "02",
          title: "Diseño de Arquitectura Objetivo",
          description:
            "Definición de la arquitectura tecnológica integrada, alineada con requerimientos operativos, escalabilidad y estabilidad del entorno empresarial.",
        },
        {
          number: "03",
          title: "Implementación Controlada",
          description:
            "Despliegue por etapas bajo mejores prácticas, validaciones continuas y estrategias de mitigación de riesgos durante la transición tecnológica.",
        },
        {
          number: "04",
          title: "Validación & Ajustes Operativos",
          description:
            "Pruebas funcionales, verificación de integraciones y optimización de rendimiento para garantizar consistencia, confiabilidad y estabilidad operativa.",
        },
        {
          number: "05",
          title: "Adopción & Soporte Continuo",
          description:
            "Capacitación operativa, documentación estructurada y soporte post-implementación orientado a mejora continua del ecosistema tecnológico.",
        },
      ],
    },
    trust: {
      title: "Experiencia en Sistemas Empresariales",
      statements: [
        "Implementaciones de sistemas realizadas en entornos empresariales de múltiples sectores.",
        "Especialistas en integración de plataformas ERP, CRM y aplicaciones corporativas.",
        "Metodologías de trabajo orientadas a estabilidad, previsibilidad y continuidad operativa.",
        "Capacidad técnica en diversas arquitecturas, tecnologías y ecosistemas de software.",
        "Documentación técnica estructurada y transferencia de conocimiento incluida en cada proyecto.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Optimizar sus Sistemas Informáticos?",
      description:
        "Solicite una evaluación técnica de su entorno actual. Analizaremos oportunidades de integración, modernización y optimización alineadas a sus objetivos operativos.",
      primaryButton: "Solicitar evaluación técnica",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "licencias": {
    slug: "licencias",
    title: "Licencias Empresariales",
    subtitle: "Licenciamiento oficial y asesoramiento especializado para su empresa",
    hero: {
      title: "Licenciamiento Corporativo con Cumplimiento Garantizado",
      benefitStatement:
        "Gestionamos licencias empresariales oficiales con asesoramiento técnico especializado. Asegure cumplimiento normativo, seguridad operativa y optimización inteligente de costos de software.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Gestión de Licencias que Puede Exponer su Empresa a Riesgos Legales?",
      problems: [
        "¿Tiene visibilidad clara sobre el estado de cumplimiento de licencias en su organización?",
        "¿Auditorías de software representan un riesgo potencial para su empresa?",
        "¿Licencias vencidas o mal gestionadas comprometen la seguridad operativa?",
        "¿Desconoce qué esquema de licenciamiento es realmente óptimo para su entorno?",
        "¿La gestión manual de renovaciones genera costos innecesarios e ineficiencias?",
      ],
      closingText:
        "El licenciamiento empresarial profesional elimina riesgos legales, garantiza cumplimiento normativo y optimiza estratégicamente la inversión en software.",
    },
    whatWeDo: {
      title: "Gestión Estratégica de Licencias Empresariales",
      description:
        "Asesoramiento, adquisición y administración de licencias oficiales con foco en cumplimiento, optimización financiera y continuidad operativa.",
      capabilities: [
        {
          icon: "microsoft",
          title: "Windows y Microsoft 365",
          description:
            "Licenciamiento oficial de Windows Server, Windows Pro, Microsoft 365 y Office LTSC. Asesoramiento en planes corporativos y esquemas de licencias por volumen.",
        },
        {
          icon: "renewal",
          title: "Gestión de Renovaciones",
          description:
            "Control proactivo de vencimientos y ciclos de renovación. Prevención de interrupciones operativas y riesgos asociados a licencias expiradas.",
        },
        {
          icon: "consulting",
          title: "Asesoramiento Técnico",
          description:
            "Análisis de necesidades reales según estructura, usuarios y cargas de trabajo. Optimización de costos evitando sobre-licenciamiento o sub-dimensionamiento.",
        },
        {
          icon: "compliance",
          title: "Auditorías de Cumplimiento",
          description:
            "Evaluaciones internas de cumplimiento de software. Preparación y acompañamiento ante auditorías oficiales de fabricantes.",
        },
      ],
    },
    benefits: {
      title: "Beneficios del Licenciamiento Profesional",
      subtitle:
        "Una gestión estratégica de licencias no solo garantiza cumplimiento, sino que protege la operación, reduce riesgos financieros y mejora la eficiencia tecnológica.",
      items: [
        {
          icon: "legal",
          title: "Cumplimiento Legal",
          description:
            "Elimine riesgos de sanciones y multas. Documentación oficial, trazabilidad completa y respaldo ante auditorías.",
        },
        {
          icon: "security",
          title: "Seguridad Corporativa",
          description:
            "Software actualizado con parches críticos. Reducción de vulnerabilidades y mayor protección de la infraestructura IT.",
        },
        {
          icon: "costs",
          title: "Optimización de Costos",
          description:
            "Adquiera únicamente las licencias necesarias. Ahorro mediante esquemas corporativos y licencias por volumen.",
        },
        {
          icon: "support",
          title: "Soporte Oficial",
          description:
            "Acceso a soporte técnico del fabricante. Actualizaciones, documentación y recursos oficiales garantizados.",
        },
        {
          icon: "continuity",
          title: "Continuidad Operativa",
          description:
            "Prevención de interrupciones por licencias vencidas o incorrectas. Operación estable y sin contingencias legales.",
        },
        {
          icon: "control",
          title: "Control y Visibilidad",
          description:
            "Gestión centralizada del inventario de software. Monitoreo de estados, renovaciones y cumplimiento en tiempo real.",
        },
      ],
    },
    howWeWork: {
      title: "Proceso de Licenciamiento Corporativo",
      description:
        "Un enfoque estructurado que garantiza cumplimiento normativo, optimización de costos y control total del ecosistema de licencias.",
      steps: [
        {
          number: "01",
          title: "Análisis de Necesidades",
          description:
            "Relevamiento de usuarios, equipos y escenarios operativos. Identificación precisa de requerimientos de licenciamiento según perfil y uso real.",
        },
        {
          number: "02",
          title: "Auditoría de Estado Actual",
          description:
            "Evaluación de licencias instaladas y disponibles. Detección de inconsistencias, riesgos de incumplimiento y oportunidades de optimización.",
        },
        {
          number: "03",
          title: "Propuesta Optimizada",
          description:
            "Diseño del esquema de licenciamiento más eficiente. Comparación técnica y financiera entre modalidades perpetuas, suscripción y volumen.",
        },
        {
          number: "04",
          title: "Adquisición y Activación",
          description:
            "Gestión de compra mediante canales oficiales. Implementación, activación y validación operativa dentro de su infraestructura tecnológica.",
        },
        {
          number: "05",
          title: "Gestión Continua",
          description:
            "Monitoreo proactivo de vencimientos, renovaciones y cumplimiento. Reportes periódicos y acompañamiento estratégico permanente.",
        },
      ],
    },
    trust: {
      title: "Partner Oficial con Experiencia Corporativa",
      statements: [
        "Partner autorizado de Microsoft y fabricantes líderes de software empresarial",
        "Gestión integral de licenciamiento corporativo para PyMEs y grandes empresas",
        "Asesoramiento técnico especializado en planes empresariales y licencias por volumen",
        "Documentación oficial y facturación con plena validez legal",
        "Soporte continuo en cumplimiento normativo, renovaciones y optimización de costos",
        "Metodología probada para minimizar riesgos legales y operativos",
      ],
    },
    finalCTA: {
      title: "¿Listo para Regularizar su Licenciamiento?",
      description:
        "Solicite una auditoría técnica sin costo. Analizaremos su entorno de licencias, detectaremos riesgos de incumplimiento y le presentaremos un plan de regularización optimizado.",
      primaryButton: "Solicitar cotización",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "servicios-tecnologicos": {
    slug: "servicios-tecnologicos",
    title: "Servicios Tecnológicos para Empresas",
    subtitle: "Servicios integrales para decisiones tecnológicas y proyectos empresariales",
    hero: {
      title: "Servicios Tecnológicos Diseñados para la Evolución de su Empresa",
      benefitStatement:
        "Acompañamos decisiones tecnológicas estratégicas y ejecutamos proyectos IT con foco en eficiencia, integración y crecimiento operativo.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Busca un Partner Tecnológico Estratégico?",
      problems: [
        "¿Requiere consultoría tecnológica y necesita definir por dónde comenzar?",
        "¿Necesita ejecutar proyectos IT y no cuenta con un equipo técnico interno especializado?",
        "¿Busca optimizar su infraestructura tecnológica sin realizar grandes inversiones iniciales?",
        "¿Requiere asesoramiento técnico objetivo e independiente de marcas?",
        "¿Necesita un proveedor que comprenda tanto la tecnología como la operación de su negocio?",
      ],
      closingText:
        "Tecnología diseñada como una ventaja estratégica, no como un gasto operativo.",
    },
    whatWeDo: {
      title: "Portfolio de Servicios Tecnológicos",
      description:
        "Soluciones tecnológicas diseñadas para eficiencia, estabilidad y escalabilidad empresarial.",
      capabilities: [
        {
          icon: "consulting",
          title: "Consultoría Tecnológica Estratégica",
          description:
            "Asesoramiento estratégico en decisiones tecnológicas. Análisis de infraestructura, arquitectura, riesgos y planificación de evolución tecnológica.",
        },
        {
          icon: "projects",
          title: "Diseño e Implementación de Proyectos Tecnológicos",
          description:
            "Ejecución de iniciativas tecnológicas específicas. Diseño, implementación, integración y puesta en marcha de soluciones adaptadas a su operación.",
        },
        {
          icon: "optimization",
          title: "Optimización y Evolución de Infraestructura",
          description:
            "Mejora de rendimiento, estabilidad y eficiencia operativa. Reconfiguración, actualización y ajuste de plataformas tecnológicas existentes.",
        },
        {
          icon: "support",
          title: "Soporte Técnico Corporativo",
          description:
            "Asistencia técnica preventiva y correctiva. Gestión profesional de incidentes con SLA definidos y continuidad operativa garantizada.",
        },
      ],
    },
    benefits: {
      title: "Ventajas de un Partner Tecnológico Integral",
      subtitle:
        "Una infraestructura tecnológica bien diseñada no solo optimiza sistemas, sino que impacta directamente en la estabilidad, eficiencia y proyección de la operación empresarial.",
      items: [
        {
          icon: "strategy",
          title: "Visión Estratégica",
          description:
            "Tecnología alineada con objetivos de negocio. Decisiones basadas en análisis técnico y operativo profesional.",
        },
        {
          icon: "flexibility",
          title: "Flexibilidad",
          description:
            "Servicios adaptados a sus necesidades actuales. Escalabilidad y evolución tecnológica sin compromisos rígidos.",
        },
        {
          icon: "expertise",
          title: "Expertise Técnico",
          description:
            "Equipo multidisciplinario con experiencia en entornos empresariales. Conocimiento en múltiples tecnologías y escenarios operativos.",
        },
        {
          icon: "results",
          title: "Foco en Resultados",
          description:
            "Proyectos orientados a eficiencia, estabilidad y retorno de inversión. Gestión profesional de alcances, tiempos y recursos.",
        },
        {
          icon: "continuity",
          title: "Continuidad Operativa",
          description:
            "Infraestructura tecnológica diseñada para minimizar riesgos e interrupciones. Esquemas de soporte, prevención y respuesta adaptados a entornos críticos.",
        },
        {
          icon: "costs",
          title: "Optimización de Costos Tecnológicos",
          description:
            "Modelo de servicio flexible que evita sobreinversión en infraestructura y personal técnico. Mayor eficiencia financiera y previsibilidad operativa.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Trabajo",
      description:
        "Proceso estructurado orientado a resultados, alineado con la realidad operativa y estratégica de su empresa.",
      steps: [
        {
          number: "01",
          title: "Entendimiento de Necesidades",
          description:
            "Reunión inicial para comprender objetivos, contexto operativo y desafíos tecnológicos. Relevamiento técnico y funcional según alcance del proyecto.",
        },
        {
          number: "02",
          title: "Propuesta Técnica",
          description:
            "Diseño de solución con definición clara de alcance, arquitectura, tiempos y costos. Recomendaciones tecnológicas basadas en criterios técnicos y de negocio.",
        },
        {
          number: "03",
          title: "Ejecución Estructurada",
          description:
            "Implementación bajo metodología profesional, con comunicación continua y control de avances. Entregas iterativas y validaciones parciales.",
        },
        {
          number: "04",
          title: "Validación y Cierre",
          description:
            "Testing funcional, validación operativa y aceptación del cliente. Documentación técnica y transferencia de conocimiento cuando corresponda.",
        },
        {
          number: "05",
          title: "Soporte Continuo",
          description:
            "Acompañamiento post-implementación. Disponibilidad para ajustes, mejoras evolutivas y nuevas necesidades operativas.",
        },
      ],
    },
    trust: {
      title: "Su Socio Tecnológico de Confianza",
      statements: [
        "Implementaciones y proyectos tecnológicos en empresas de diversos sectores",
        "Profesionales especializados con visión de negocio y experiencia en entornos corporativos",
        "Definición clara de costos, alcances, tiempos y expectativas desde el inicio",
        "Recomendaciones objetivas basadas en criterios técnicos y necesidades reales",
        "Enfoque orientado a eficiencia, estabilidad y mejora medible del entorno IT",
      ],
    },
    finalCTA: {
      title: "Potencie la Capacidad Tecnológica de su Empresa",
      description:
        "Analizamos su contexto operativo y diseñamos un esquema de servicios IT alineado con sus objetivos de negocio.",
      primaryButton: "Solicitar reunión",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "consultoria-it": {
    slug: "consultoria-it",
    title: "Consultoría IT y Transformación Digital",
    subtitle: "Asesoramiento estratégico en tecnología para su empresa",
    hero: {
      title: "Estrategia Tecnológica que Impulsa su Negocio",
      benefitStatement:
        "Analizamos su infraestructura actual, diseñamos el roadmap tecnológico y acompañamos la transformación digital de su empresa.",
      primaryCTA: "Solicitar consultoría",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Decisiones Tecnológicas sin Estrategia Clara?",
      problems: [
        "¿Invierte en tecnología pero no obtiene el retorno esperado?",
        "¿No tiene claro qué tecnologías priorizar para el crecimiento de su empresa?",
        "¿Su infraestructura IT está desactualizada y no sabe por dónde empezar?",
        "¿Necesita escalar tecnológicamente pero teme tomar decisiones incorrectas?",
        "¿Requiere un partner estratégico que entienda tanto de tecnología como de negocio?",
      ],
      closingText:
        "La consultoría IT estratégica alinea la tecnología con los objetivos de negocio de su empresa.",
    },
    whatWeDo: {
      title: "Consultoría Estratégica en Tecnología",
      description:
        "Asesoramiento técnico y de negocio para maximizar el ROI de su inversión tecnológica.",
      capabilities: [
        {
          icon: "analysis",
          title: "Análisis de Infraestructura",
          description:
            "Auditoría completa de su tecnología actual. Identificación de gaps, riesgos y oportunidades de mejora.",
        },
        {
          icon: "roadmap",
          title: "Roadmap Tecnológico",
          description:
            "Plan estratégico de evolución tecnológica a 1-3 años. Priorización de inversiones según impacto y retorno.",
        },
        {
          icon: "process",
          title: "Optimización de Procesos",
          description:
            "Análisis de procesos actuales con foco en eficiencia. Identificación de oportunidades de automatización.",
        },
        {
          icon: "digital",
          title: "Estrategia Digital",
          description:
            "Plan de transformación digital adaptado a su industria. Digitalización de procesos críticos del negocio.",
        },
        {
          icon: "architecture",
          title: "Arquitectura de Soluciones",
          description:
            "Diseño de arquitecturas tecnológicas escalables. Selección de plataformas y tecnologías adecuadas.",
        },
        {
          icon: "scale",
          title: "Escalamiento Tecnológico",
          description:
            "Estrategia de crecimiento IT alineado al crecimiento del negocio. Preparación para expansión sin rehacer inversiones.",
        },
      ],
    },
    benefits: {
      title: "Impacto Estratégico para su Empresa",
      items: [
        {
          icon: "roi",
          title: "Maximización de ROI",
          description:
            "Invierta en tecnología que realmente genera valor. Priorización de proyectos con mayor retorno de inversión.",
        },
        {
          icon: "clarity",
          title: "Claridad Estratégica",
          description:
            "Roadmap tecnológico claro y accionable. Alineación de IT con objetivos de negocio.",
        },
        {
          icon: "risk",
          title: "Reducción de Riesgo",
          description:
            "Decisiones tecnológicas basadas en análisis profesional. Evite inversiones incorrectas y vendor lock-in.",
        },
        {
          icon: "competitive",
          title: "Ventaja Competitiva",
          description:
            "Tecnología como diferenciador en su mercado. Preparación para disrupciones digitales de su industria.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Consultoría",
      description:
        "Un proceso estructurado de análisis, diseño estratégico y acompañamiento en la ejecución.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico Inicial",
          description:
            "Entrevistas con stakeholders clave. Análisis de infraestructura, procesos y objetivos de negocio.",
        },
        {
          number: "02",
          title: "Análisis y Benchmarking",
          description:
            "Evaluación técnica de su tecnología actual. Comparación con mejores prácticas de la industria.",
        },
        {
          number: "03",
          title: "Diseño de Roadmap",
          description:
            "Plan estratégico tecnológico priorizado. Estimación de inversiones, ROI y plan de acción.",
        },
        {
          number: "04",
          title: "Presentación Ejecutiva",
          description:
            "Presentación de hallazgos y recomendaciones. Roadmap con quick wins y proyectos estratégicos.",
        },
        {
          number: "05",
          title: "Acompañamiento en Ejecución",
          description:
            "Soporte opcional en la implementación del roadmap. PMO tecnológica y validación de entregas.",
        },
      ],
    },
    trust: {
      title: "Consultores con Experiencia Empresarial",
      statements: [
        "Consultores IT con experiencia en empresas de diversos rubros",
        "Visión estratégica que combina tecnología y objetivos de negocio",
        "Metodología basada en frameworks reconocidos (TOGAF, COBIT, ITIL)",
        "Independencia de vendors: recomendaciones objetivas según su necesidad",
        "Casos de éxito documentados con ROI medible en nuestros clientes",
      ],
    },
    finalCTA: {
      title: "¿Listo para Definir su Estrategia Tecnológica?",
      description:
        "Solicite una sesión de diagnóstico inicial sin costo. Analizaremos su situación actual y le presentaremos un enfoque estratégico a medida.",
      primaryButton: "Solicitar diagnóstico gratuito",
      secondaryButton: "Consultar por WhatsApp",
    },
  },
};

// Mapping from service slugs to their data
export const getServiceData = (slug: string): ServicePageData | null => {
  return servicesData[slug] || null;
};

// Get all service slugs for static generation
export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData);
};
