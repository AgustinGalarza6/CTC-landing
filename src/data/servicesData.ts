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
  "soporte-tecnico": {
    slug: "soporte-tecnico",
    title: "Soporte Técnico Especializado",
    subtitle: "Asistencia técnica profesional para garantizar la continuidad operativa",
    hero: {
      title: "Soporte Técnico que Elimina las Interrupciones de su Negocio",
      benefitStatement: "Mantenga su infraestructura IT operando al 100% con nuestro servicio de soporte preventivo y correctivo.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Interrupciones Técnicas que Impactan su Operación?",
      problems: [
        "¿Sus sistemas presentan fallas recurrentes que afectan la continuidad?",
        "¿Los incidentes técnicos generan demoras o costos inesperados?",
        "¿Carece de soporte especializado para resolver eventos críticos rápidamente?",
        "¿Los tiempos de respuesta actuales no acompañan las necesidades de su negocio?",
        "¿Necesita un esquema de mantenimiento preventivo para evitar riesgos?",
      ],
      closingText: "Un servicio de soporte profesional garantiza estabilidad y protege la continuidad de su operación.",
    },
    whatWeDo: {
      title: "Soporte Integral IT",
      description: "Servicios de soporte diseñados para garantizar continuidad operativa y respuesta eficiente.",
      capabilities: [
        { icon: "headset", title: "Mesa de Ayuda Técnica", description: "Soporte multicanal estructurado con trazabilidad completa de incidentes mediante tickets." },
        { icon: "monitor", title: "Soporte Remoto y On-Site", description: "Resolución remota inmediata y asistencia presencial programada según criticidad." },
        { icon: "wrench", title: "Diagnóstico y Resolución", description: "Análisis técnico profundo de incidentes e identificación de causa raíz documentada." },
        { icon: "calendar", title: "Mantenimiento Preventivo", description: "Rutinas programadas de verificación y actualización para detectar riesgos tempranamente." },
        { icon: "alert", title: "Gestión de Fallas Críticas", description: "Protocolos de escalamiento y esquemas SLA definidos según el nivel de servicio." },
        { icon: "chart", title: "Optimización de Rendimiento", description: "Evaluación continua de performance y ajustes técnicos orientados a la eficiencia." },
      ],
    },
    benefits: {
      title: "Impacto Operativo Medible",
      items: [
        { icon: "stability", title: "Estabilidad Operativa", description: "Reducción de incidentes mediante monitoreo y gestión proactiva del entorno IT." },
        { icon: "continuity", title: "Continuidad del Negocio", description: "Minimización de tiempos de inactividad ante incidentes que afectan la operación." },
        { icon: "guarantee", title: "Respuesta Garantizada", description: "Esquemas SLA definidos con prioridades de atención y tiempos establecidos." },
        { icon: "productivity", title: "Productividad del Equipo", description: "Eliminación de interrupciones técnicas que impactan en usuarios y procesos." },
        { icon: "optimization", title: "Optimización Tecnológica", description: "Identificación de cuellos de botella y oportunidades de mejora constante." },
        { icon: "control", title: "Control y Visibilidad", description: "Seguimiento documentado de incidentes y reportes periódicos de gestión técnica." },
      ],
    },
    howWeWork: {
      title: "Metodología de Soporte",
      description: "Modelo de servicio orientado a garantizar resolución eficiente y mejora continua.",
      steps: [
        { number: "01", title: "Relevamiento Inicial", description: "Evaluación del entorno tecnológico y riesgos potenciales del negocio." },
        { number: "02", title: "Definición del Esquema", description: "Diseño del modelo de atención, SLA y protocolos de escalamiento." },
        { number: "03", title: "Soporte y Resolución", description: "Gestión estructurada de incidentes bajo procedimientos técnicos definidos." },
        { number: "04", title: "Mantenimiento Preventivo", description: "Rutinas programadas de actualización y detección temprana de desvíos." },
        { number: "05", title: "Optimización Continua", description: "Evaluación del servicio y detección de oportunidades tecnológicas." },
      ],
    },
    trust: {
      title: "Garantías Corporativas",
      statements: [
        "Equipo técnico especializado con amplia experiencia corporativa.",
        "Acuerdos SLA con métricas y compromisos de tiempo definidos.",
        "Gestión documentada con trazabilidad completa de cada incidente.",
      ],
    },
    finalCTA: {
      title: "Garantice la Continuidad de su Entorno",
      description: "Definimos un modelo de soporte adaptado a sus necesidades operativas y nivel de criticidad.",
      primaryButton: "Solicitar Propuesta",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "infraestructura-it": {
    slug: "infraestructura-it",
    title: "Infraestructura IT",
    subtitle: "Arquitecturas tecnológicas robustas para su empresa",
    hero: {
      title: "Infraestructuras IT Pensadas para Rendimiento y Seguridad",
      benefitStatement: "Diseñamos e implementamos arquitecturas optimizadas para garantizar estabilidad operativa y escalabilidad.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su entorno IT está preparado para escalar?",
      problems: [
        "¿Su red presenta cuellos de botella o inestabilidad operativa?",
        "¿Su infraestructura depende de servidores obsoletos o ineficientes?",
        "¿Su arquitectura cumple con estándares modernos de disponibilidad?",
        "¿La expansión de su negocio genera fricción en sus sistemas actuales?",
        "¿Duda de la seguridad perimetral de su entorno de trabajo actual?",
      ],
      closingText: "Diseñamos arquitecturas IT orientadas a estabilidad, seguridad y crecimiento sostenido.",
    },
    whatWeDo: {
      title: "Ecosistemas Tecnológicos Pro",
      description: "Desde la arquitectura inicial hasta la implementación completa de su red empresarial.",
      capabilities: [
        { icon: "network", title: "Redes Corporativas", description: "Diseño LAN/WAN orientado a rendimiento, segmentación y alta disponibilidad." },
        { icon: "server", title: "Servidores", description: "Implementación de servidores físicos y virtuales optimizados para gestión centralizada." },
        { icon: "cloud", title: "Virtualización", description: "Plataformas diseñadas para maximizar eficiencia y resiliencia de recursos." },
        { icon: "lock", title: "Seguridad Perimetral", description: "Arquitecturas multicapa enfocadas en protección inteligente y continuidad." },
        { icon: "speed", title: "Optimización Performance", description: "Análisis orientado a eliminar cuellos de botella y maximizar la eficiencia." },
        { icon: "growth", title: "Escalabilidad Modular", description: "Diseños preparados para expansión futura sin requerir rediseños estructurales." },
      ],
    },
    benefits: {
      title: "Beneficios Empresariales",
      items: [
        { icon: "rocket", title: "Rendimiento Superior", description: "Infraestructura que soporta operaciones críticas sin pérdida de velocidad." },
        { icon: "shield-check", title: "Seguridad Corporativa", description: "Protección alineada con estándares modernos y reducción de vulnerabilidades." },
        { icon: "savings", title: "Eficiencia de Recursos", description: "Entornos optimizados para mejorar la utilización y reducir costos operativos." },
        { icon: "expand", title: "Preparado para Escalar", description: "Diseños modulares que acompañan el crecimiento sin generar fricciones." },
        { icon: "continuity", title: "Continuidad Operativa", description: "Disponibilidad garantizada incluso en entornos de alta demanda operativa." },
        { icon: "risk", title: "Reducción de Riesgos", description: "Arquitecturas orientadas a prevenir fallos críticos y proteger la estabilidad." },
      ],
    },
    howWeWork: {
      title: "Proceso de Implementación",
      description: "Enfoque metodológico para asegurar previsibilidad y control en cada etapa.",
      steps: [
        { number: "01", title: "Análisis & Arquitectura", description: "Evaluación del entorno actual y diseño orientado a estabilidad." },
        { number: "02", title: "Planificación", description: "Definición de cronograma y recursos para asegurar control operativo." },
        { number: "03", title: "Implementación", description: "Despliegue bajo mejores prácticas y validaciones funcionales continuas." },
        { number: "04", title: "Optimización", description: "Ajuste fino de rendimiento tras la puesta en marcha inicial." },
        { number: "05", title: "Transferencia", description: "Documentación técnica completa y capacitación operativa del equipo." },
      ],
    },
    trust: {
      title: "Capacidad Técnica Comprobada",
      statements: [
        "Experiencia técnica alineada con tecnologías de fabricantes líderes mundiales.",
        "Proyectos ejecutados bajo estándares estrictos de previsibilidad y control.",
        "Soporte post-implementación con acuerdos SLA orientados a la continuidad.",
      ],
    },
    finalCTA: {
      title: "Construyamos una Infraestructura IT de Nivel Crítico",
      description: "Solicite una evaluación técnica. Nuestro equipo propondrá una arquitectura optimizada para su crecimiento.",
      primaryButton: "Solicitar Evaluación",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "erp": {
    slug: "erp",
    title: "Sistemas ERP & Gestión",
    subtitle: "Soluciones para centralizar y automatizar su negocio",
    hero: {
      title: "Software de Gestión que Ordena y Potencia su Operación",
      benefitStatement: "Centralice información crítica, optimice procesos y mejore la eficiencia operativa de su empresa.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Procesos Desordenados que Limitan su Eficiencia?",
      problems: [
        "¿La información crítica se encuentra dispersa en planillas desconectadas?",
        "¿Falta visibilidad en tiempo real para tomar decisiones estratégicas?",
        "¿Procesos manuales generan errores, demoras y retrabajos constantes?",
        "¿Sus áreas operan sin integración, provocando inconsistencia de datos?",
        "¿Necesita un sistema robusto que acompañe su crecimiento sin fricción?",
      ],
      closingText: "Implementamos soluciones ERP orientadas a estructurar procesos y mejorar la previsibilidad.",
    },
    whatWeDo: {
      title: "Impacto del Ecosistema ERP",
      description: "Automatización e integración total para una gestión empresarial moderna.",
      capabilities: [
        { icon: "efficiency", title: "Eficiencia Administrativa", description: "Reducción significativa de tareas manuales y tiempos administrativos diarios." },
        { icon: "visibility", title: "Datos en Tiempo Real", description: "Acceso inmediato a indicadores clave para decisiones basadas en datos." },
        { icon: "integration", title: "Integración de Áreas", description: "Conexión total entre departamentos eliminando silos de información." },
        { icon: "control", title: "Trazabilidad Total", description: "Visibilidad completa sobre flujos de trabajo, recursos y operaciones internas." },
        { icon: "growth", title: "Escalabilidad de Gestión", description: "Plataforma preparada para acompañar la expansión del negocio sin rediseños." },
        { icon: "accuracy", title: "Consistencia de Datos", description: "Automatización que minimiza fallos humanos e inconsistencias operativas." },
      ],
    },
    benefits: {
      title: "Resultados Empresariales",
      items: [
        { icon: "efficiency", title: "Optimización de Tiempos", description: "Ahorro medible en procesos administrativos y operativos críticos." },
        { icon: "visibility", title: "Dashboard Ejecutivo", description: "Métricas estratégicas siempre actualizadas para la gerencia general." },
        { icon: "integration", title: "Unificación Operativa", description: "Toda su empresa hablando el mismo idioma bajo un único sistema de gestión." },
        { icon: "growth", title: "Crecimiento Sin Límites", description: "Infraestructura de software que no frena la expansión de su organización." },
        { icon: "control", title: "Control de Costos", description: "Mejor visibilidad de gastos y recursos para una rentabilidad superior." },
        { icon: "accuracy", title: "Seguridad de Información", description: "Resguardo centralizado y seguro de los activos de datos del negocio." },
      ],
    },
    howWeWork: {
      title: "Metodología de Implementación",
      description: "Enfoque estructurado que garantiza adopción efectiva y estabilidad.",
      steps: [
        { number: "01", title: "Análisis Funcional", description: "Relevamiento detallado de procesos, requerimientos y cuellos de botella." },
        { number: "02", title: "Diseño & Parametrización", description: "Configuración de flujos de trabajo y KPIs estratégicos para el cliente." },
        { number: "03", title: "Migración de Datos", description: "Tratamiento e integridad de información histórica hacia el nuevo sistema." },
        { number: "04", title: "Capacitación", description: "Entrenamiento estructurado a usuarios para asegurar el uso correcto." },
        { number: "05", title: "Acompañamiento", description: "Soporte intensivo durante la puesta en marcha y ajustes post-lanzamiento." },
      ],
    },
    trust: {
      title: "Expertise en Gestión",
      statements: [
        "Implementaciones exitosas en PyMEs de múltiples sectores productivos.",
        "Especialistas en parametrización y optimización de sistemas líderes.",
        "Soporte continuo orientado a la evolución tecnológica del sistema ERP.",
      ],
    },
    finalCTA: {
      title: "Transforme su Gestión con un ERP de Nivel Mundial",
      description: "Analizaremos sus procesos y presentaremos una solución alineada con sus objetivos.",
      primaryButton: "Coordinar Reunión",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "sistemas-informaticos": {
    slug: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    subtitle: "Optimización de sistemas tecnológicos empresariales",
    hero: {
      title: "Modernización de Sistemas para Entornos Corporativos",
      benefitStatement: "Diseñamos entornos tecnológicos orientados a mejorar la continuidad y estabilidad del ecosistema IT.",
      primaryCTA: "Solicitar evaluación",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Inconsistencias que Afectan su Productividad?",
      problems: [
        "¿Sus sistemas actuales generan duplicación de información crítica?",
        "¿La falta de interoperabilidad entre plataformas genera demoras?",
        "¿Depende de sistemas legacy que limitan su capacidad de escalar?",
        "¿Siente que la tecnología actual es un obstáculo y no un motor?",
        "¿Necesita centralizar datos para obtener una visión real del negocio?",
      ],
      closingText: "Diseñamos arquitecturas de sistemas orientadas a estabilidad operativa y eficiencia.",
    },
    whatWeDo: {
      title: "Arquitecturas de Sistemas Eficientes",
      description: "Diseñamos e integramos entornos tecnológicos para garantizar estabilidad y mejora de procesos.",
      capabilities: [
        { icon: "integration", title: "Integraciones de Plataforma", description: "Conexión entre sistemas ERP, CRM y e-commerce para flujo de datos sin fricción." },
        { icon: "optimization", title: "Optimización Operativa", description: "Identificación de ineficiencias y aplicación de mejoras para maximizar productividad." },
        { icon: "migration", title: "Migración & Modernización", description: "Evolución de sistemas legacy hacia arquitecturas modernas y escalables." },
        { icon: "standardization", title: "Estandarización", description: "Workflows alineados con mejores prácticas para promover control y previsibilidad." },
        { icon: "security-audit", title: "Auditoría de Datos", description: "Implementación de políticas de acceso y control de integridad de información crítica." },
        { icon: "dashboard-control", title: "Dashboards de Control", description: "Métricas en tiempo real para visualizar el estado de salud de sus sistemas." },
      ],
    },
    benefits: {
      title: "Impacto en su Operación",
      items: [
        { icon: "efficiency", title: "Eficiencia de Procesos", description: "Automatización de tareas manuales reduciendo tiempos y fricciones diarias." },
        { icon: "data", title: "Datos Centralizados", description: "Información sincronizada eliminando discrepancias derivadas de desintegración." },
        { icon: "scalability", title: "Escalabilidad", description: "Sistemas preparados para crecer sin necesidad de rediseños estructurales." },
        { icon: "continuity", title: "Resiliencia Operativa", description: "Entornos diseñados para garantizar funcionamiento estable bajo exigencia." },
        { icon: "visibility", title: "Visibilidad Integral", description: "Mayor trazabilidad de procesos y control del ecosistema tecnológico." },
        { icon: "risk", title: "Menos Errores", description: "Reducción de fallos mediante sistemas robustos alineados con mejores prácticas." },
      ],
    },
    howWeWork: {
      title: "Proceso de Optimización",
      description: "Enfoque estructurado para asegurar adopción efectiva y estabilidad técnica.",
      steps: [
        { number: "01", title: "Evaluación", description: "Análisis de arquitectura existente e identificación de riesgos operativos." },
        { number: "02", title: "Diseño Objetivo", description: "Definición de la arquitectura integrada alineada con requerimientos." },
        { number: "03", title: "Despliegue", description: "Implementación por etapas bajo validaciones funcionales continuas." },
        { number: "04", title: "Validación", description: "Pruebas de rendimiento para garantizar confiabilidad y estabilidad." },
        { number: "05", title: "Adopción", description: "Documentación y soporte orientado a la mejora continua del ecosistema." },
      ],
    },
    trust: {
      title: "Sistemas con Garantía",
      statements: [
        "Especialistas en integración de plataformas complejas en diversos sectores.",
        "Metodologías orientadas a resultados medibles y estabilidad operativa.",
        "Transferencia de conocimiento incluida en cada entrega de proyecto.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Optimizar sus Sistemas?",
      description: "Solicite una evaluación técnica. Analizaremos su entorno para modernizar su operación.",
      primaryButton: "Solicitar Evaluación",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "licencias": {
    slug: "licencias",
    title: "Licencias Empresariales",
    subtitle: "Licenciamiento oficial y asesoramiento especializado",
    hero: {
      title: "Licenciamiento Corporativo con Cumplimiento Garantizado",
      benefitStatement: "Gestionamos licencias oficiales con asesoramiento técnico para asegurar cumplimiento y ahorro.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Gestión de Licencias que Expone su Empresa?",
      problems: [
        "¿Auditorías de software representan un riesgo legal para su empresa?",
        "¿Carece de visibilidad clara sobre el estado de sus licencias actuales?",
        "¿Licencias vencidas comprometen la seguridad de su infraestructura?",
        "¿El esquema de licenciamiento actual no es óptimo para su presupuesto?",
        "¿La gestión de renovaciones genera costos y estrés administrativo?",
      ],
      closingText: "El licenciamiento profesional elimina riesgos legales y optimiza la inversión en software.",
    },
    whatWeDo: {
      title: "Gestión Estratégica de Software",
      description: "Adquisición y administración de licencias oficiales con foco en cumplimiento y ahorro.",
      capabilities: [
        { icon: "microsoft", title: "Windows & Microsoft 365", description: "Licenciamiento oficial y asesoramiento en planes corporativos por volumen." },
        { icon: "renewal", title: "Gestión de Renovaciones", description: "Control proactivo de ciclos evitando interrupciones por licencias expiradas." },
        { icon: "consulting", title: "Asesoramiento Técnico", description: "Análisis de necesidades reales para evitar el sobre-licenciamiento innecesario." },
        { icon: "compliance", title: "Auditorías de Software", description: "Acompañamiento especializado ante auditorías oficiales de grandes fabricantes." },
        { icon: "cyber-license", title: "Seguridad Oficial", description: "Licenciamiento de herramientas avanzadas de protección para endpoints y backups." },
        { icon: "cloud-license", title: "Virtualización & Cloud", description: "Esquemas optimizados para entornos virtuales y servicios de nube híbrida." },
      ],
    },
    benefits: {
      title: "Ventajas del Cumplimiento",
      items: [
        { icon: "legal", title: "Cumplimiento Legal", description: "Elimine riesgos de sanciones con documentación y trazabilidad oficial completa." },
        { icon: "security", title: "Seguridad IT", description: "Acceso a parches críticos y actualizaciones oficiales de los fabricantes." },
        { icon: "costs", title: "Ahorro Estratégico", description: "Optimización financiera mediante esquemas de planes por volumen corporativo." },
        { icon: "support", title: "Soporte Oficial", description: "Respaldo directo de fabricantes y acceso a recursos técnicos exclusivos." },
        { icon: "continuity", title: "Operación Estable", description: "Prevención de interrupciones del servicio por licencias expiradas o ilegales." },
        { icon: "control", title: "Visibilidad Total", description: "Gestión centralizada del inventario de software y fechas de renovación." },
      ],
    },
    howWeWork: {
      title: "Proceso de Licenciamiento",
      description: "Enfoque estructurado que garantiza control total del ecosistema de software.",
      steps: [
        { number: "01", title: "Relevamiento", description: "Identificación precisa de requerimientos según perfil de uso y estructura." },
        { number: "02", title: "Auditoría Interna", description: "Detección de inconsistencias y riesgos de incumplimiento legal actuales." },
        { number: "03", title: "Diseño de Esquema", description: "Comparativa entre modelos de suscripción y perpetuos para mayor eficiencia." },
        { number: "04", title: "Activación", description: "Gestión de compra por canales oficiales y activación en su infraestructura." },
        { number: "05", title: "Seguimiento", description: "Monitoreo proactivo y acompañamiento estratégico para futuras necesidades." },
      ],
    },
    trust: {
      title: "Partner Autorizado",
      statements: [
        "Partner de Microsoft y fabricantes líderes de software empresarial.",
        "Asesoramiento técnico con foco en optimización de costos y cumplimiento.",
        "Facturación oficial con plena validez legal para auditorías de software.",
      ],
    },
    finalCTA: {
      title: "¿Necesita Regularizar sus Licencias?",
      description: "Solicite una cotización. Analizaremos su entorno para proponer un plan optimizado y legal.",
      primaryButton: "Solicitar Cotización",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "servicios-tecnologicos": {
    slug: "servicios-tecnologicos",
    title: "Servicios Tecnológicos para Empresas",
    subtitle: "Servicios integrales para proyectos y decisiones estratégicas",
    hero: {
      title: "Servicios Tecnológicos para la Evolución de su Empresa",
      benefitStatement: "Acompañamos decisiones estratégicas y ejecutamos proyectos IT con foco en eficiencia.",
      primaryCTA: "Solicitar asesoramiento",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Busca un Partner Tecnológico Estratégico?",
      problems: [
        "¿Requiere consultoría y necesita definir por dónde comenzar su evolución?",
        "¿Necesita ejecutar proyectos IT complejos y carece de equipo técnico?",
        "¿Busca optimizar su infraestructura sin inversiones iniciales masivas?",
        "¿Requiere asesoramiento técnico independiente de marcas comerciales?",
        "¿Su proveedor actual no comprende la operación real de su negocio?",
      ],
      closingText: "Tecnología diseñada como una ventaja competitiva para su organización.",
    },
    whatWeDo: {
      title: "Portfolio de Soluciones IT",
      description: "Servicios diseñados para la estabilidad y escalabilidad del ecosistema digital.",
      capabilities: [
        { icon: "consulting", title: "Consultoría Estratégica", description: "Asesoramiento en decisiones críticas y planificación de evolución tecnológica." },
        { icon: "projects", title: "Proyectos Especiales", description: "Diseño e implementación de iniciativas tecnológicas adaptadas a su operación." },
        { icon: "optimization", title: "Optimización de Plataformas", description: "Mejora de rendimiento y actualización de tecnologías IT empresariales." },
        { icon: "support", title: "Soporte Corporativo", description: "Asistencia técnica con SLA definidos y continuidad operativa garantizada." },
        { icon: "perimeter-security", title: "Ciberseguridad Perimetral", description: "Blindaje de la operación contra amenazas externas y privacidad de datos." },
        { icon: "disaster-recovery", title: "Continuidad (DRP)", description: "Diseño de planes de respaldo y recuperación rápida ante incidentes graves." },
      ],
    },
    benefits: {
      title: "Ventajas Estratégicas",
      items: [
        { icon: "strategy", title: "Alineación de Negocio", description: "Tecnología que soporta directamente los objetivos comerciales de su empresa." },
        { icon: "flexibility", title: "Flexibilidad Operativa", description: "Servicios que se adaptan a su ritmo de crecimiento y necesidades puntuales." },
        { icon: "expertise", title: "Expertise Multidisciplinario", description: "Acceso a especialistas con experiencia en múltiples industrias y entornos." },
        { icon: "results", title: "Gestión Profesional", description: "Proyectos orientados a resultados con control de alcances, tiempos y costos." },
        { icon: "continuity", title: "Garantía de Resiliencia", description: "Infraestructura diseñada para minimizar riesgos e interrupciones críticas." },
        { icon: "costs", title: "Eficiencia Financiera", description: "Modelo de servicio flexible que optimiza la inversión en personal e IT." },
      ],
    },
    howWeWork: {
      title: "Metodología de Trabajo",
      description: "Proceso estructurado orientado a resultados y alineado con su realidad.",
      steps: [
        { number: "01", title: "Entendimiento", description: "Relevamiento de desafíos tecnológicos y objetivos estratégicos de negocio." },
        { number: "02", title: "Propuesta Técnica", description: "Diseño de la solución con alcances, arquitectura y cronograma de ejecución." },
        { number: "03", title: "Ejecución Controlada", description: "Implementación profesional con comunicación continua y control de avances." },
        { number: "04", title: "Validación y Cierre", description: "Testing funcional, aceptación operativa y transferencia de conocimiento." },
        { number: "05", title: "Soporte Evolutivo", description: "Acompañamiento continuo para ajustes y nuevas necesidades tecnológicas." },
      ],
    },
    trust: {
      title: "Su Partner de Confianza",
      statements: [
        "Proyectos exitosos implementados en empresas de diversos sectores.",
        "Definición clara de expectativas, tiempos y costos desde el día uno.",
        "Foco constante en la mejora medible del entorno tecnológico corporativo.",
      ],
    },
    finalCTA: {
      title: "Potencie la Tecnología de su Empresa Hoy",
      description: "Diseñamos un esquema de servicios IT alineado con sus metas comerciales.",
      primaryButton: "Solicitar Reunión",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "ciberseguridad": {
    slug: "ciberseguridad",
    title: "Ciberseguridad Corporativa",
    subtitle: "Protección integral de su infraestructura y datos",
    hero: {
      title: "Proteja su Empresa de Amenazas Cibernéticas",
      benefitStatement: "Implementamos estrategias multicapa que blindan sus datos contra ataques internos y externos.",
      primaryCTA: "Solicitar auditoría",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Su Empresa Está Expuesta a Riesgos Críticos?",
      problems: [
        "¿Carece de una estrategia de seguridad integral y actualizada?",
        "¿Teme que un ransomware paralice su operación y comprometa datos?",
        "¿Sus usuarios acceden a recursos sin controles ni políticas adecuadas?",
        "¿Desconoce si su infraestructura tiene vulnerabilidades explotables?",
        "¿Necesita cumplir normativas vigentes de protección de datos sensibles?",
      ],
      closingText: "La ciberseguridad no es un gasto, es la protección de su continuidad comercial.",
    },
    whatWeDo: {
      title: "Seguridad Integral Empresarial",
      description: "Capas de protección técnica, análisis de riesgos y procesos de seguridad.",
      capabilities: [
        { icon: "audit", title: "Auditorías de Seguridad", description: "Análisis de vulnerabilidades técnicas y reportes ejecutivos con plan de acción." },
        { icon: "firewall", title: "Firewalls & Hardening", description: "Configuración de firewalls de próxima generación y blindaje de sistemas." },
        { icon: "endpoint", title: "Protección de Endpoints", description: "Seguridad avanzada en estaciones de trabajo y servidores (EDR/XDR)." },
        { icon: "monitor-security", title: "Monitoreo 24/7", description: "Detección de anomalías y alertas en tiempo real de eventos de seguridad." },
        { icon: "incident", title: "Respuesta a Incidentes", description: "Protocolos de contención, remediación y recuperación ante brechas." },
        { icon: "education", title: "Concientización", description: "Capacitación a usuarios en buenas prácticas y cultura de prevención digital." },
      ],
    },
    benefits: {
      title: "Protección con Valor Real",
      items: [
        { icon: "shield", title: "Reducción de Riesgo", description: "Minimice la probabilidad de ataques exitosos mediante defensa multicapa." },
        { icon: "compliance", title: "Cumplimiento Normativo", description: "Alineación con regulaciones de protección de datos y evidencia de auditoría." },
        { icon: "trust", title: "Confianza del Cliente", description: "Demuestre compromiso real con la protección de la información de sus clientes." },
        { icon: "continuity", title: "Resiliencia Operativa", description: "Evite paradas por incidentes de seguridad y asegure una recuperación rápida." },
        { icon: "recovery", title: "Recuperación de Desastres", description: "Capacidad de restaurar la operación en tiempos mínimos ante fallas graves." },
        { icon: "culture", title: "Cultura de Seguridad", description: "Fomento de un entorno donde cada colaborador es un eslabón de defensa activo." },
      ],
    },
    howWeWork: {
      title: "Metodología de Seguridad",
      description: "Enfoque basado en frameworks internacionales y mejores prácticas del sector.",
      steps: [
        { number: "01", title: "Evaluación de Riesgos", description: "Análisis de activos críticos y detección de vectores de amenaza potenciales." },
        { number: "02", title: "Diseño Estratégico", description: "Roadmap priorizado por impacto para establecer controles técnicos eficaces." },
        { number: "03", title: "Implementación", description: "Despliegue de tecnologías de protección, hardening y testing de efectividad." },
        { number: "04", title: "Vigilancia Continua", description: "Monitoreo permanente y actualización ante la aparición de nuevas amenazas." },
      ],
    },
    trust: {
      title: "Expertise en Seguridad",
      statements: [
        "Especialistas certificados en seguridad informática y ethical hacking.",
        "Experiencia protegiendo infraestructuras críticas empresariales de alto valor.",
        "Confidencialidad absoluta mediante acuerdos NDA en cada etapa del proyecto.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Blindar su Negocio?",
      description: "Solicite una auditoría inicial. Identificaremos vulnerabilidades y diseñaremos un plan a medida.",
      primaryButton: "Solicitar Auditoría",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "desarrollo-software": {
    slug: "desarrollo-software",
    title: "Desarrollo de Software a Medida",
    subtitle: "Soluciones personalizadas para sus desafíos únicos de negocio",
    hero: {
      title: "Software que se Adapta a su Empresa, No al Revés",
      benefitStatement: "Desarrollamos plataformas diseñadas específicamente para optimizar sus procesos de negocio exclusivos.",
      primaryCTA: "Solicitar cotización",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Sistemas Estándar que No Cumplen sus Expectativas?",
      problems: [
        "¿Sus procesos son únicos y los softwares genéricos no logran resolverlos?",
        "¿Necesita integrar plataformas dispares que no se comunican entre sí?",
        "¿Requiere automatizar procesos manuales que consumen tiempo estratégico?",
        "¿Busca diferenciarse con herramientas que su competencia directa no posee?",
        "¿Necesita tableros de control con datos críticos específicos de su operación?",
      ],
      closingText: "El desarrollo a medida es la clave cuando su negocio requiere tecnología diferencial.",
    },
    whatWeDo: {
      title: "Ingeniería de Software Pro",
      description: "Construimos soluciones robustas, escalables y mantenibles para el largo plazo.",
      capabilities: [
        { icon: "code", title: "Plataformas Empresariales", description: "Sistemas de gestión interna y CRM personalizados con tecnologías modernas." },
        { icon: "web", title: "Aplicaciones Web", description: "Web apps responsivas diseñadas para la productividad y el confort del usuario." },
        { icon: "api", title: "Integración de Sistemas", description: "Conectores personalizados con ERP, e-commerce y pasarelas de pago externas." },
        { icon: "workflow", title: "Automatización (RPA)", description: "Eliminación de tareas repetitivas mediante algoritmos y scripts inteligentes." },
        { icon: "dashboard", title: "Dashboards a Medida", description: "Visualización de KPIs críticos con actualización automática y alertas proactivas." },
        { icon: "tools", title: "Herramientas de Operación", description: "Software específico para optimizar la logística, ventas o producción interna." },
      ],
    },
    benefits: {
      title: "Valor Agregado del Software",
      items: [
        { icon: "custom", title: "Adaptación Total", description: "Sistemas diseñados a imagen y semejanza de sus procesos operativos reales." },
        { icon: "competitive", title: "Ventaja Diferencial", description: "Poseer herramientas únicas que su competencia no puede adquirir en el mercado." },
        { icon: "automation", title: "Automatización Real", description: "Liberación de tiempo estratégico al eliminar errores humanos en tareas manuales." },
        { icon: "ownership", title: "Propiedad del Código", description: "Usted es dueño absoluto del desarrollo, sin dependencias de licencias mensuales." },
        { icon: "ux", title: "Adopción Inmediata", description: "Interfaces intuitivas (UX) diseñadas para la máxima comodidad del personal." },
        { icon: "maintenance", title: "Evolución Garantizada", description: "Software escalable que crece junto a su negocio sin quedar obsoleto jamás." },
      ],
    },
    howWeWork: {
      title: "Metodología Ágil",
      description: "Desarrollo iterativo con entregas funcionales constantes y feedback activo.",
      steps: [
        { number: "01", title: "Requerimientos", description: "Definición profunda de necesidades, casos de uso y arquitectura técnica inicial." },
        { number: "02", title: "Diseño UX/UI", description: "Creación de prototipos interactivos para validación visual antes de programar." },
        { number: "03", title: "Desarrollo Ágil", description: "Sprints de programación con entregas de software funcional cada 2 semanas." },
        { number: "04", title: "Testing & Deploy", description: "Pruebas rigurosas de calidad antes de la puesta en producción controlada." },
      ],
    },
    trust: {
      title: "Ingeniería de Calidad",
      statements: [
        "Desarrolladores con amplia experiencia en proyectos corporativos complejos.",
        "Stack moderno y escalable (React, Next.js, Node.js, Python, SQL/NoSQL).",
        "Propiedad intelectual total del cliente sobre todo el software desarrollado.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Crear su Propia Herramienta Tecnológica?",
      description: "Contáctenos para analizar su proyecto. Presentaremos un timeline y presupuesto detallado.",
      primaryButton: "Solicitar Propuesta",
      secondaryButton: "Consultar por WhatsApp",
    },
  },

  "consultoria-it": {
    slug: "consultoria-it",
    title: "Consultoría IT Estratégica",
    subtitle: "Asesoramiento para la transformación digital de su empresa",
    hero: {
      title: "Estrategia Tecnológica que Impulsa su Negocio",
      benefitStatement: "Diseñamos el roadmap tecnológico que alinea su infraestructura con sus metas comerciales.",
      primaryCTA: "Solicitar consultoría",
      secondaryCTA: "Consultar por WhatsApp",
    },
    problemStatement: {
      title: "¿Decisiones Técnicas sin Rumbo Claro?",
      problems: [
        "¿Invierte en tecnología pero no obtiene el retorno de inversión esperado?",
        "¿No tiene claro qué herramientas priorizar para el crecimiento del negocio?",
        "¿Su infraestructura IT está desactualizada y no sabe por dónde comenzar?",
        "¿Teme tomar decisiones incorrectas que generen dependencias riesgosas?",
        "¿Necesita un partner que entienda tanto de negocio como de servidores?",
      ],
      closingText: "La consultoría estratégica alinea su IT con los objetivos comerciales de su empresa.",
    },
    whatWeDo: {
      title: "Asesoramiento de Alto Nivel",
      description: "Análisis técnico y estratégico para maximizar la inversión tecnológica.",
      capabilities: [
        { icon: "analysis", title: "Auditoría de Sistemas", description: "Evaluación completa de su tecnología actual e identificación de riesgos operativos." },
        { icon: "roadmap", title: "Roadmap de Evolución", description: "Plan estratégico a largo plazo priorizando inversiones según impacto y retorno." },
        { icon: "process", title: "Optimización Procesos", description: "Análisis con foco en eficiencia y detección de tareas aptas para automatizar." },
        { icon: "digital", title: "Estrategia Digital", description: "Plan de transformación adaptado a su industria para modernizar la operación." },
        { icon: "architecture", title: "Diseño de Arquitectura", description: "Selección de plataformas escalables para evitar el vendor lock-in a futuro." },
        { icon: "scale", title: "Plan de Escalamiento", description: "Estrategia de crecimiento IT que acompaña la expansión de su organización." },
      ],
    },
    benefits: {
      title: "Impacto Estratégico Real",
      items: [
        { icon: "roi", title: "Maximización del ROI", description: "Invierta con inteligencia en tecnología que genera valor y retorno medible." },
        { icon: "clarity", title: "Claridad Operativa", description: "Roadmap tecnológico claro y accionable alineado con metas comerciales." },
        { icon: "risk", title: "Reducción de Riesgo", description: "Decisiones basadas en análisis profesional evitando inversiones fallidas." },
        { icon: "competitive", title: "Ventaja en el Mercado", description: "Tecnología como diferenciador para superar a la competencia de su industria." },
        { icon: "readiness", title: "Preparación a Futuro", description: "Infraestructura preparada para tendencias emergentes y transiciones suaves." },
        { icon: "alignment", title: "Alineación Total", description: "Integración absoluta entre los objetivos de negocio y la capacidad IT." },
      ],
    },
    howWeWork: {
      title: "Metodología de Consultoría",
      description: "Proceso estructurado de diagnóstico, diseño estratégico y acompañamiento.",
      steps: [
        { number: "01", title: "Diagnóstico Inicial", description: "Análisis de procesos y entrevistas con los pilares estratégicos de la empresa." },
        { number: "02", title: "Benchmarking", description: "Evaluación de su tecnología frente a las mejores prácticas de su sector." },
        { number: "03", title: "Roadmap Estratégico", description: "Diseño del plan de acción priorizado con estimación de inversión y plazos." },
        { number: "04", title: "Presentación Ejecutiva", description: "Propuesta de proyectos estratégicos y hallazgos críticos de la infraestructura." },
      ],
    },
    trust: {
      title: "Consultores Estratégicos",
      statements: [
        "Visión que combina profundidad tecnológica con objetivos de negocio reales.",
        "Independencia de marcas: recomendaciones 100% objetivas según su necesidad.",
        "Experiencia en frameworks de gestión IT reconocidos a nivel internacional.",
      ],
    },
    finalCTA: {
      title: "¿Listo para Definir su Estrategia Digital?",
      description: "Solicite una sesión de diagnóstico inicial. Diseñaremos un enfoque estratégico a medida.",
      primaryButton: "Solicitar Diagnóstico",
      secondaryButton: "Consultar por WhatsApp",
    },
  },
};

export const getServiceData = (slug: string): ServicePageData | null => {
  return servicesData[slug] || null;
};

export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData);
};