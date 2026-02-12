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
        "Mantenga su infraestructura IT operando al 100% con nuestro servicio de soporte técnico preventivo y correctivo. Reducimos hasta un 85% los tiempos de inactividad.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Problemas Técnicos que Frenan su Productividad?",
      problems: [
        "¿Sus equipos sufren fallas recurrentes que afectan la operación diaria?",
        "¿Carece de un equipo técnico disponible para resolver incidencias críticas?",
        "¿Los tiempos de inactividad le generan pérdidas económicas significativas?",
        "¿No cuenta con mantenimiento preventivo para evitar fallas futuras?",
        "¿Necesita un partner tecnológico confiable y con capacidad de respuesta inmediata?",
      ],
      closingText:
        "Nuestro servicio de soporte técnico especializado está diseñado para empresas que no pueden permitirse interrupciones operativas.",
    },
    whatWeDo: {
      title: "Soporte Integral para su Infraestructura IT",
      description:
        "Proveemos asistencia técnica profesional con esquemas adaptados a las necesidades críticas de su organización.",
      capabilities: [
        {
          icon: "headset",
          title: "Mesa de Ayuda Técnica",
          description:
            "Soporte multicanal: telefónico, email, ticketing. Atención en español con personal capacitado en entornos empresariales.",
        },
        {
          icon: "monitor",
          title: "Soporte Remoto y On-Site",
          description:
            "Resolución remota inmediata o visitas programadas según criticidad. Cobertura en toda la región con técnicos certificados.",
        },
        {
          icon: "wrench",
          title: "Diagnóstico y Resolución",
          description:
            "Análisis técnico profundo de incidencias. Resolución efectiva con documentación detallada de cada caso.",
        },
        {
          icon: "calendar",
          title: "Mantenimiento Preventivo",
          description:
            "Rutinas programadas de mantenimiento. Actualizaciones, optimización y detección temprana de fallas potenciales.",
        },
        {
          icon: "alert",
          title: "Gestión de Fallas Críticas",
          description:
            "Protocolo de escalamiento para incidencias críticas. Respuesta SLA garantizada según nivel de servicio contratado.",
        },
        {
          icon: "chart",
          title: "Optimización de Rendimiento",
          description:
            "Análisis de performance y bottlenecks. Recomendaciones técnicas para maximizar el ROI de su infraestructura.",
        },
      ],
    },
    benefits: {
      title: "Beneficios Estratégicos para su Empresa",
      items: [
        {
          icon: "clock",
          title: "Máxima Disponibilidad Operativa",
          description:
            "Reduzca tiempos de inactividad hasta un 85%. Mantenga sus operaciones críticas funcionando sin interrupciones.",
        },
        {
          icon: "shield",
          title: "Tranquilidad y Confianza",
          description:
            "Cuente con un equipo técnico disponible cuando lo necesite. Enfóquese en su negocio, no en problemas técnicos.",
        },
        {
          icon: "dollar",
          title: "Reducción de Costos IT",
          description:
            "Evite contrataciones de personal técnico permanente. Modelo de servicio flexible y predecible en costos.",
        },
        {
          icon: "trending",
          title: "Mejora Continua",
          description:
            "Reportes mensuales de gestión. Identificación de patrones y mejoras proactivas en su infraestructura.",
        },
      ],
    },
    howWeWork: {
      title: "Nuestra Metodología de Soporte",
      description:
        "Un proceso estructurado que garantiza respuesta rápida y resolución efectiva de cualquier incidencia técnica.",
      steps: [
        {
          number: "01",
          title: "Registro y Clasificación",
          description:
            "Recepción del incidente por cualquier canal. Clasificación según criticidad y asignación de prioridad SLA.",
        },
        {
          number: "02",
          title: "Diagnóstico Técnico",
          description:
            "Análisis de causa raíz por especialistas certificados. Evaluación de impacto y definición de estrategia de resolución.",
        },
        {
          number: "03",
          title: "Resolución y Testing",
          description:
            "Implementación de solución validada. Pruebas funcionales para confirmar el restablecimiento del servicio.",
        },
        {
          number: "04",
          title: "Documentación y Cierre",
          description:
            "Registro detallado de la resolución. Feedback del usuario y cierre formal con recomendaciones preventivas.",
        },
      ],
    },
    trust: {
      title: "Respaldo Profesional que su Empresa Necesita",
      statements: [
        "Más de 15 años de experiencia en soporte técnico empresarial",
        "Técnicos certificados en las principales tecnologías del mercado",
        "SLA garantizado con penalizaciones contractuales por incumplimiento",
        "Documentación completa y trazabilidad de cada caso atendido",
        "Esquemas de soporte 24/7 disponibles para infraestructura crítica",
      ],
    },
    finalCTA: {
      title: "¿Listo para Eliminar los Problemas Técnicos de su Empresa?",
      description:
        "Solicite una evaluación gratuita de su infraestructura IT. Le presentaremos un esquema de soporte adaptado a sus necesidades operativas.",
      primaryButton: "Solicitar evaluación gratuita",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "infraestructura-it": {
    slug: "infraestructura-it",
    title: "Implementación de Infraestructura IT",
    subtitle: "Arquitecturas tecnológicas robustas y escalables para su empresa",
    hero: {
      title: "Infraestructura IT que Escala con su Negocio",
      benefitStatement:
        "Diseñamos e implementamos arquitecturas tecnológicas de nivel empresarial que garantizan rendimiento, seguridad y escalabilidad a largo plazo.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su Infraestructura Actual Limita el Crecimiento?",
      problems: [
        "¿Su red corporativa presenta problemas de rendimiento o conectividad?",
        "¿Necesita modernizar servidores obsoletos que comprometen la seguridad?",
        "¿Requiere virtualización para optimizar recursos y reducir costos?",
        "¿Su infraestructura no está preparada para soportar el crecimiento empresarial?",
        "¿Busca implementar mejores prácticas de seguridad perimetral y disponibilidad?",
      ],
      closingText:
        "Implementamos infraestructuras IT de clase empresarial con las mejores prácticas de la industria.",
    },
    whatWeDo: {
      title: "Arquitectura IT Integral",
      description:
        "Desde el diseño inicial hasta la implementación completa, construimos la base tecnológica que su empresa necesita.",
      capabilities: [
        {
          icon: "network",
          title: "Diseño de Redes Corporativas",
          description:
            "Arquitecturas LAN/WAN de alto rendimiento. VLAN, QoS, routing avanzado y redundancia para garantizar disponibilidad.",
        },
        {
          icon: "server",
          title: "Implementación de Servidores",
          description:
            "Servidores físicos y virtuales. Windows Server, Linux, Active Directory, file servers, y servicios empresariales.",
        },
        {
          icon: "cloud",
          title: "Virtualización",
          description:
            "VMware, Hyper-V, Proxmox. Optimización de recursos, alta disponibilidad, disaster recovery y gestión centralizada.",
        },
        {
          icon: "lock",
          title: "Seguridad Perimetral",
          description:
            "Firewalls empresariales, VPN, segmentación de red, IDS/IPS. Protección multicapa de su infraestructura.",
        },
        {
          icon: "speed",
          title: "Optimización de Performance",
          description:
            "Análisis de carga, balanceo, caching. Tuning de sistemas para maximizar el rendimiento operativo.",
        },
        {
          icon: "growth",
          title: "Escalabilidad",
          description:
            "Diseño modular preparado para crecimiento. Capacidad de expansión sin necesidad de rediseño completo.",
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
            "Protección multicapa contra amenazas externas e internas. Cumplimiento de normativas y mejores prácticas.",
        },
        {
          icon: "savings",
          title: "Optimización de Costos",
          description:
            "ROI comprobado mediante virtualización y consolidación. Menor TCO a largo plazo con equipamiento de calidad.",
        },
        {
          icon: "expand",
          title: "Preparado para Crecer",
          description:
            "Arquitectura escalable que acompaña el crecimiento de su empresa sin necesidad de rehacer inversiones.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Implementación",
      description:
        "Un proceso estructurado que garantiza entregas exitosas y sin sorpresas en presupuesto ni tiempos.",
      steps: [
        {
          number: "01",
          title: "Análisis y Diseño",
          description:
            "Relevamiento de necesidades actuales y futuras. Diseño de arquitectura técnica y documentación completa del proyecto.",
        },
        {
          number: "02",
          title: "Planificación",
          description:
            "Cronograma detallado con hitos validados. Definición de recursos, equipamiento y coordinación logística.",
        },
        {
          number: "03",
          title: "Implementación",
          description:
            "Despliegue técnico según mejores prácticas. Testing funcional y de performance en cada etapa crítica.",
        },
        {
          number: "04",
          title: "Entrega y Transferencia",
          description:
            "Documentación técnica completa (as-built). Capacitación al equipo IT y soporte post-implementación garantizado.",
        },
      ],
    },
    trust: {
      title: "Expertise Técnico Comprobado",
      statements: [
        "Arquitecturas implementadas en empresas de diversos rubros industriales",
        "Certificaciones de fabricantes líderes: Cisco, HPE, Dell, VMware",
        "Proyectos entregados on-time y on-budget con garantía extendida",
        "Documentación técnica de nivel enterprise en cada implementación",
        "Soporte post-implementación con SLA garantizado",
      ],
    },
    finalCTA: {
      title: "¿Listo para Construir una Infraestructura de Clase Empresarial?",
      description:
        "Solicite un análisis gratuito de su infraestructura actual. Le presentaremos un roadmap técnico y una propuesta de valor a medida.",
      primaryButton: "Solicitar análisis gratuito",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "erp": {
    slug: "erp",
    title: "Sistemas ERP & Gestión Empresarial",
    subtitle: "Soluciones ERP para centralizar, automatizar y optimizar su negocio",
    hero: {
      title: "ERP que Transforma la Gestión de su Empresa",
      benefitStatement:
        "Centralice toda la información de su empresa en un único sistema integrado. Automatice procesos, elimine errores y tome decisiones basadas en datos en tiempo real.",
      primaryCTA: "Solicitar demo personalizada",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su Empresa Sufre por la Falta de Integración?",
      problems: [
        "¿Maneja la información en múltiples planillas Excel dispersas y desactualizadas?",
        "¿Pierde oportunidades de venta por falta de visibilidad del stock en tiempo real?",
        "¿Sus áreas trabajan en silos sin compartir información crítica del negocio?",
        "¿Dedica horas a generar reportes manualmente con datos inconsistentes?",
        "¿Necesita un sistema robusto que le permita escalar sin cambiar de plataforma?",
      ],
      closingText:
        "Un Sistema ERP profesional centraliza, automatiza y potencia la gestión integral de su empresa.",
    },
    whatWeDo: {
      title: "Soluciones ERP Completas",
      description:
        "Desde la venta de licencias hasta la implementación, capacitación y soporte continuo de su sistema de gestión empresarial.",
      capabilities: [
        {
          icon: "package",
          title: "Venta de Licencias ERP",
          description:
            "Partners oficiales de las principales plataformas ERP del mercado. Licenciamiento flexible según el tamaño y necesidades de su empresa.",
        },
        {
          icon: "settings",
          title: "Implementación y Parametrización",
          description:
            "Configuración completa del ERP adaptado a sus procesos de negocio. Migración de datos históricos con validación de integridad.",
        },
        {
          icon: "link",
          title: "Integraciones entre Sistemas",
          description:
            "Conectamos su ERP con e-commerce, CRM, BI, facturación electrónica, bancos y aplicaciones de terceros.",
        },
        {
          icon: "database",
          title: "Migraciones",
          description:
            "Migración desde sistemas legacy o planillas Excel. Proceso controlado con validación de datos y plan de rollback.",
        },
        {
          icon: "support",
          title: "Soporte y Mantenimiento",
          description:
            "Mesa de ayuda funcional y técnica. Actualizaciones, parches de seguridad y evolución continua del sistema.",
        },
        {
          icon: "automation",
          title: "Automatización de Procesos",
          description:
            "Workflows automáticos, notificaciones, aprobaciones digitales. Eliminación de tareas manuales repetitivas.",
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
            "Reduzca hasta un 40% el tiempo dedicado a tareas administrativas. Automatización de procesos repetitivos de bajo valor.",
        },
        {
          icon: "visibility",
          title: "Visibilidad en Tiempo Real",
          description:
            "Acceda a información actualizada desde cualquier dispositivo. Dashboards ejecutivos para toma de decisiones ágil.",
        },
        {
          icon: "integration",
          title: "Integración Total",
          description:
            "Un único sistema que conecta ventas, compras, stock, finanzas, producción y RRHH. Fin de la duplicación de datos.",
        },
        {
          icon: "growth",
          title: "Escalabilidad Garantizada",
          description:
            "Plataforma que crece con su empresa. Nuevos módulos y funcionalidades sin cambiar de sistema.",
        },
      ],
    },
    howWeWork: {
      title: "Metodología de Implementación ERP",
      description:
        "Un proceso probado que garantiza adopción exitosa del sistema y retorno de inversión medible.",
      steps: [
        {
          number: "01",
          title: "Análisis de Procesos",
          description:
            "Relevamiento detallado de procesos actuales. Identificación de pain points y oportunidades de mejora.",
        },
        {
          number: "02",
          title: "Diseño de Solución",
          description:
            "Configuración funcional del ERP adaptada a su negocio. Definición de flujos, reportes y KPIs críticos.",
        },
        {
          number: "03",
          title: "Implementación Controlada",
          description:
            "Despliegue por fases con usuarios piloto. Validación funcional y ajustes según feedback operativo.",
        },
        {
          number: "04",
          title: "Capacitación y Go-Live",
          description:
            "Entrenamiento completo a usuarios finales. Acompañamiento intensivo en el arranque productivo.",
        },
        {
          number: "05",
          title: "Soporte Post Go-Live",
          description:
            "Mesa de ayuda dedicada en las primeras semanas. Optimización continua y evolución del sistema.",
        },
      ],
    },
    trust: {
      title: "Partners Certificados y Experiencia Comprobada",
      statements: [
        "Implementaciones ERP exitosas en PyMEs y empresas medianas de diversos rubros",
        "Partners certificados de las principales plataformas ERP del mercado",
        "Metodología de implementación probada con tasa de éxito del 95%",
        "Equipo consultor con experiencia funcional y técnica en sistemas de gestión",
        "Soporte continuo en español con personal capacitado en su industria",
      ],
    },
    finalCTA: {
      title: "¿Listo para Centralizar la Gestión de su Empresa?",
      description:
        "Solicite una demo personalizada sin compromiso. Analizaremos sus procesos y le mostraremos cómo un ERP puede transformar su negocio.",
      primaryButton: "Solicitar demo gratuita",
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
