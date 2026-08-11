/* ================================================================
 *  Diccionarios i18n — Español (por defecto) e Inglés
 *  La interfaz Translations es la fuente de verdad de estructura.
 *
 *  💡 Textos de venta: los ganchos apelan al valor concreto
 *  (tiempo y dinero) y solo Automatización e IA usa escasez real
 *  (pilotos limitados por mes). Ajustalos si querés.
 * ================================================================ */

export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  featuresLabel: string;
  features: string[];
  processLabel: string;
  process: { title: string; description: string }[];
  hook: string;
  availability: string;
  prefill: string;
}

export interface Translations {
  meta: { title: string; description: string };
  nav: {
    services: string;
    about: string;
    contact: string;
    switchTo: string; // aria-label del switcher de idioma
    theme: string; // aria-label del toggle de tema
    navLabel: string; // aria-label de la navegación principal
  };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleAccent: string;
    titleBottom: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewMore: string;
    items: { slug: string; title: string; description: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stackLabel: string;
    stack: string[];
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    missingKey: string;
    privacy: string;
  };
  servicePage: {
    back: string;
    consultCta: string;
    reassurance: string[];
  };
  servicePages: Record<string, ServicePageContent>;
  footer: {
    tagline: string;
    rights: string;
    social: string;
  };
}

export const es: Translations = {
  meta: {
    title: "Desarrollo de Software — Kader",
    description:
      "Desarrollo de software a medida: sitios web, aplicaciones, APIs y automatizaciones con calidad profesional y diseño cuidado.",
  },
  nav: {
    services: "Servicios",
    about: "Sobre mí",
    contact: "Contacto",
    switchTo: "Ver en inglés",
    theme: "Cambiar tema",
    navLabel: "Navegación principal",
  },
  hero: {
    eyebrow: "Desarrollo de Software",
    titleTop: "Ideas que",
    titleAccent: "trabajan",
    titleBottom: "por vos",
    subtitle:
      "Automatizaciones que eliminan tareas manuales y software a medida — sitios, aplicaciones y APIs — para lo que tu negocio necesite.",
    ctaPrimary: "Hablemos de tu proyecto",
    ctaSecondary: "Ver servicios",
    note: "Automatización · Web · Apps · APIs",
  },
  services: {
    eyebrow: "Servicios",
    title: "Lo que puedo construir para vos",
    subtitle:
      "Soluciones a medida, simples por dentro y elegantes por fuera. Cada proyecto se trabaja con atención al detalle.",
    viewMore: "Ver detalles",
    items: [
      {
        slug: "sitios-web",
        title: "Sitios web",
        description:
          "Landings y sitios corporativos rápidos, accesibles y con diseño cuidado. La carta de presentación que tu negocio merece.",
      },
      {
        slug: "aplicaciones-web",
        title: "Aplicaciones web",
        description:
          "Dashboards, paneles de gestión y herramientas internas que automatizan tu operación y ahorran horas de trabajo.",
      },
      {
        slug: "apis-e-integraciones",
        title: "APIs e integraciones",
        description:
          "Servicios backend y conectores entre sistemas: pagos, envíos, CRMs y cualquier pieza que necesite hablar con otra.",
      },
      {
        slug: "automatizacion-ia",
        title: "Automatización e IA",
        description:
          "Procesos repetitivos que se resuelven solos y prototipos con inteligencia artificial integrada a tu flujo.",
      },
    ],
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Automatizo las tareas que te hacen perder horas",
    paragraphs: [
      "Hola, soy Bautista Suarez, ingeniero en software. Hace más de 5 años construyo software para personas y empresas, y me especializo en automatizaciones: sacarte el trabajo manual de encima.",
      "Facturas y reportes que se envían solos. Datos que se sincronizan entre sistemas sin copiar y pegar. Asistentes con IA que responden consultas y ordenan tu información. Si hoy lo hacés a mano, casi seguro se puede automatizar.",
      "Trabajo simple y por etapas: primero un piloto chico que demuestre valor, después lo escalamos. Comunicación clara en todo momento — el código es mío, pero el proyecto es tuyo.",
    ],
    stackLabel: "Stack habitual",
    stack: ["TypeScript", "Python", "Node.js", "React", "PostgreSQL", "langGraph"],
    cta: "Contame qué tarea te está robando horas",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contame sobre tu proyecto",
    subtitle:
      "Escribime y te respondo a la brevedad. Sin vueltas: primero entendemos el problema, después definimos la solución.",
    name: "Nombre",
    namePlaceholder: "¿Cómo te llamás?",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    message: "Mensaje",
    messagePlaceholder: "Contame qué necesitás…",
    send: "Enviar mensaje",
    sending: "Enviando…",
    success: "¡Gracias! Tu mensaje fue enviado. Te respondo a la brevedad.",
    error: "Hubo un error al enviar. Probá de nuevo o escribime por email.",
    missingKey: "El formulario está en mantenimiento por ahora. Escribime directo a:",
    privacy: "Tus datos solo se usan para responderte. Nada de spam.",
  },
  servicePage: {
    back: "Todos los servicios",
    consultCta: "Pedir presupuesto",
    reassurance: [
      "Respuesta en menos de 24 horas",
      "Presupuesto sin cargo",
      "Sin compromiso ni intermediarios",
    ],
  },
  servicePages: {
    "sitios-web": {
      metaTitle: "Sitios Web a medida — Bautista Suarez",
      metaDescription:
        "Landings y sitios corporativos con diseño premium, SEO y velocidad de carga. Una web clara, rápida y pensada para convertir visitas en clientes.",
      intro: [
        "Un sitio web es más que una página: es tu vidriera abierta las 24 horas, el lugar donde un cliente potencial decide si confiar en vos. Por eso lo construyo con foco en diseño y conversión: rápido, claro y pensado para que quien entra, se quede.",
        "Trabajo contigo desde el contenido hasta el deploy: elegimos juntos la estructura, los textos y cada detalle visual, y te entrego un sitio que podés editar vos mismo si querés.",
      ],
      featuresLabel: "Qué incluye",
      features: [
        "Diseño premium, responsive y accesible",
        "Optimización de velocidad de carga",
        "SEO técnico: meta tags, sitemap, Open Graph",
        "Formularios de contacto y analytics",
        "CMS o sitio estático según tu necesidad",
        "Deploy con dominio incluido y capacitación",
      ],
      processLabel: "Cómo trabajamos",
      process: [
        {
          title: "Diagnóstico",
          description:
            "Una llamada de 30 minutos para entender tu negocio, tu público y tus objetivos.",
        },
        {
          title: "Propuesta y diseño",
          description:
            "Te paso alcance, plazos y presupuesto cerrado. Aprobás y diseño la primera versión.",
        },
        {
          title: "Desarrollo",
          description:
            "Construyo el sitio, integro formularios, analytics y contenidos.",
        },
        {
          title: "Deploy y entrega",
          description:
            "Publicamos, configuramos el dominio y te capacito para que lo manejes solo.",
        },
      ],
      hook: "Tu sitio web es la vidriera de tu negocio: la primera impresión que decide si un cliente te escribe o sigue de largo. Contame en qué etapa está tu proyecto y armamos el plan juntos.",
      availability: "Aceptando proyectos",
      prefill: "Hola, me interesa un sitio web. ¿Podemos conversar sobre mi proyecto?",
    },
    "aplicaciones-web": {
      metaTitle: "Aplicaciones Web a medida — Bautista Suarez",
      metaDescription:
        "Dashboards y herramientas internas que ordenan tu operación y ahorran horas de trabajo. Software a medida que se adapta a cómo trabaja tu equipo.",
      intro: [
        "Si tu equipo pierde horas con planillas, mails encadenados y procesos a mano, una aplicación web a medida lo resuelve de raíz: toda la información en un solo lugar, con accesos claros y tareas que se hacen solas.",
        "Diseño paneles y herramientas internas que se adaptan a cómo trabaja tu equipo —no al revés—, con una interfaz simple que no necesita manual de uso.",
      ],
      featuresLabel: "Qué incluye",
      features: [
        "Paneles y dashboards a medida",
        "Autenticación y permisos por rol",
        "Integración con tus sistemas actuales",
        "Interfaz responsive, clara y rápida",
        "Deploy, backups y monitoreo",
        "Documentación y capacitación del equipo",
      ],
      processLabel: "Cómo trabajamos",
      process: [
        {
          title: "Diagnóstico del proceso",
          description:
            "Mapeamos el flujo actual, los puntos de fricción y qué se gana automatizando.",
        },
        {
          title: "Diseño y alcance",
          description:
            "Definimos módulos, pantallas y presupuesto por etapas. Vos decidís qué priorizar.",
        },
        {
          title: "Desarrollo por etapas",
          description:
            "Entregamos funcionalidad funcionando de a poco, con tu feedback en cada avance.",
        },
        {
          title: "Deploy y entrenamiento",
          description:
            "Ponemos la herramienta en producción y acompañamos al equipo en la adopción.",
        },
      ],
      hook: "Una buena herramienta interna se paga sola: cada hora que tu equipo deja de copiar datos es una hora que vuelve al negocio. Contame qué proceso te está costando horas y te digo, con franqueza, si vale la pena resolverlo con software.",
      availability: "Aceptando proyectos",
      prefill: "Hola, tengo un proceso que me gustaría resolver con una aplicación web. ¿Podemos charlar?",
    },
    "apis-e-integraciones": {
      metaTitle: "APIs e Integraciones — Bautista Suarez",
      metaDescription:
        "Conecto sistemas: pagos, envíos, CRMs y más. APIs bien documentadas, seguras y con monitoreo. Te digo si es viable antes de arrancar.",
      intro: [
        "Cuando dos sistemas no se hablan, aparecen las planillas manuales, los errores y las horas perdidas copiando datos. Una integración bien hecha elimina ese trabajo invisible de una vez.",
        "Diseño APIs limpias y bien documentadas, y conecto servicios de todo tipo: pasarelas de pago, plataformas de envío, CRMs, e-commerce y sistemas propios.",
      ],
      featuresLabel: "Qué incluye",
      features: [
        "APIs REST bien documentadas",
        "Integraciones con pagos, envíos y CRMs",
        "Webhooks y sincronización de datos",
        "Seguridad: claves, tokens y cifrado",
        "Manejo de errores y monitoreo",
        "Migración y respaldo de datos",
      ],
      processLabel: "Cómo trabajamos",
      process: [
        {
          title: "Relevamiento",
          description:
            "Listamos los sistemas a conectar, qué datos circulan y qué necesita cada lado.",
        },
        {
          title: "Diseño de la integración",
          description:
            "Definimos el flujo, los casos límite y la estrategia de errores antes de escribir código.",
        },
        {
          title: "Desarrollo y pruebas",
          description:
            "Construimos y testeamos con datos reales en un entorno seguro.",
        },
        {
          title: "Deploy y monitoreo",
          description:
            "Ponemos la integración en producción y vigilamos que todo siga funcionando.",
        },
      ],
      hook: "Cuando dos sistemas se hablan solos, desaparecen las planillas, los errores y las horas de copiar datos. Contame qué necesitás conectar y evaluamos si te conviene.",
      availability: "Aceptando proyectos",
      prefill: "Hola, necesito conectar dos sistemas. ¿Me ayudás a ver si es viable?",
    },
    "automatizacion-ia": {
      metaTitle: "Automatización e IA — Bautista Suarez",
      metaDescription:
        "Automatizo procesos repetitivos e integro IA. Pilotos limitados por mes: escribime hoy.",
      intro: [
        "¿Cuánto tiempo por semana invertís en tareas que un software podría hacer por vos? Cargar datos, armar reportes, responder mails que son siempre iguales. La automatización no reemplaza personas: les devuelve tiempo para lo que importa.",
        "Integro inteligencia artificial donde suma de verdad: asistentes que responden consultas, clasificación de documentos, resúmenes y análisis de tu propia información. Siempre con un piloto chico que demuestre valor antes de escalar.",
      ],
      featuresLabel: "Qué incluye",
      features: [
        "Automatización de tareas repetitivas",
        "Asistentes e integraciones con IA",
        "Procesamiento de documentos y datos",
        "Chatbots y consultas sobre tu información",
        "Prototipos rápidos para validar ideas",
        "Arquitectura escalable: arrancás chico y crecés",
      ],
      processLabel: "Cómo trabajamos",
      process: [
        {
          title: "Identificación del proceso",
          description:
            "Buscamos la tarea con mayor impacto y menor riesgo para automatizar primero.",
        },
        {
          title: "Piloto pequeño",
          description:
            "Construimos una versión mínima que resuelve el caso real, con costo fijo.",
        },
        {
          title: "Medición y ajuste",
          description:
            "Comparamos tiempo y resultados contra el proceso manual, y afinamos.",
        },
        {
          title: "Escalado",
          description:
            "Una vez que el piloto demuestra valor, lo llevamos al resto de la operación.",
        },
      ],
      hook: "Las tareas repetitivas te roban horas que un programa puede resolver en segundos. Por eso tomo pocos pilotos por mes: cada automatización exige estudio y cuidado real. Contame tu tarea y asegurate un lugar en la lista.",
      availability: "Disponibilidad limitada",
      prefill: "Hola, me interesa automatizar una tarea. ¿Podemos ver qué se puede hacer?"
    },
  },
  footer: {
    tagline: "Software a medida que trabaja por vos.",
    rights: "Todos los derechos reservados.",
    social: "Seguime",
  },
};

export const en: Translations = {
  meta: {
    title: "Software Development — Kader",
    description:
      "Custom software development: websites, applications, APIs and automations with professional quality and careful design.",
  },
  nav: {
    services: "Services",
    about: "About",
    contact: "Contact",
    switchTo: "View in Spanish",
    theme: "Toggle theme",
    navLabel: "Main navigation",
  },
  hero: {
    eyebrow: "Software Development",
    titleTop: "Ideas",
    titleAccent: "that work",
    titleBottom: "for you",
    subtitle:
      "Automations that eliminate manual tasks, plus custom websites, apps and APIs for whatever your business needs.",
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: "View services",
    note: "Automation · Web · Apps · APIs",
  },
  services: {
    eyebrow: "Services",
    title: "What I can build for you",
    subtitle:
      "Tailor-made solutions, simple inside and elegant outside. Every project is crafted with attention to detail.",
    viewMore: "View details",
    items: [
      {
        slug: "websites",
        title: "Websites",
        description:
          "Fast, accessible and beautifully designed landing pages and corporate sites. The first impression your business deserves.",
      },
      {
        slug: "web-applications",
        title: "Web applications",
        description:
          "Dashboards, admin panels and internal tools that streamline your operations and save hours of work.",
      },
      {
        slug: "apis-integrations",
        title: "APIs & integrations",
        description:
          "Backend services and connectors between systems: payments, shipping, CRMs and any piece that needs to talk to another.",
      },
      {
        slug: "automation-ai",
        title: "Automation & AI",
        description:
          "Repetitive processes that take care of themselves, and AI-powered prototypes integrated into your workflow.",
      },
    ],
  },
  about: {
    eyebrow: "About me",
    title: "I automate the tasks that waste your hours",
    paragraphs: [
      "Hi, I'm Bautista Suarez, a software engineer. For over 5 years I've been building software for people and businesses, and I specialize in automation: taking the manual work off your plate.",
      "Invoices and reports that send themselves. Data that syncs between systems without copy-paste. AI assistants that answer questions and organize your information. If you're doing it by hand today, chances are it can be automated.",
      "I keep it simple and work in stages: first a small pilot that proves value, then we scale it. Clear communication all along — the code is mine, but the project is yours.",
    ],
    stackLabel: "Usual stack",
    stack: ["TypeScript", "Python", "Node.js", "React", "PostgreSQL", "langGraph"],
    cta: "Tell me which task is stealing your hours",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me about your project",
    subtitle:
      "Write to me and I'll get back to you shortly. No fluff: first we understand the problem, then we define the solution.",
    name: "Name",
    namePlaceholder: "What's your name?",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me what you need…",
    send: "Send message",
    sending: "Sending…",
    success: "Thanks! Your message was sent. I'll get back to you shortly.",
    error: "Something went wrong. Try again or email me directly.",
    missingKey: "The form is temporarily unavailable. Email me directly at:",
    privacy: "Your data is only used to reply to you. No spam, ever.",
  },
  servicePage: {
    back: "All services",
    consultCta: "Request a quote",
    reassurance: [
      "Reply within 24 hours",
      "Free, no-strings quote",
      "No middlemen — you work with me directly",
    ],
  },
  servicePages: {
    websites: {
      metaTitle: "Custom Websites — Bautista Suarez",
      metaDescription:
        "Premium-designed landing pages and corporate sites with SEO and fast load times. A clear, fast website built to turn visitors into clients.",
      intro: [
        "A website is more than a page: it's your storefront open 24/7, the place where a potential client decides whether to trust you. That's why I build with focus on design and conversion: fast, clear, and designed so people who land, stay.",
        "I work with you from content to deployment: together we choose the structure, copy and every visual detail, and you get a site you can edit yourself if you want.",
      ],
      featuresLabel: "What's included",
      features: [
        "Premium, responsive and accessible design",
        "Page speed optimization",
        "Technical SEO: meta tags, sitemap, Open Graph",
        "Contact forms and analytics",
        "CMS or static site, whichever fits",
        "Deployment with domain and training included",
      ],
      processLabel: "How we work",
      process: [
        {
          title: "Discovery",
          description:
            "A 30-minute call to understand your business, audience and goals.",
        },
        {
          title: "Proposal & design",
          description:
            "You get scope, timeline and a closed budget. You approve, then I design the first version.",
        },
        {
          title: "Development",
          description:
            "I build the site and integrate forms, analytics and content.",
        },
        {
          title: "Deploy & handover",
          description:
            "We publish, configure the domain and train you to manage it yourself.",
        },
      ],
      hook: "Your website is your business's storefront: the first impression that decides whether a visitor writes to you or scrolls past. Tell me where your project stands and we'll plan it together.",
      availability: "Taking new projects",
      prefill: "Hi, I'm interested in a website. Can we talk about my project?",
    },
    "web-applications": {
      metaTitle: "Custom Web Applications — Bautista Suarez",
      metaDescription:
        "Dashboards and internal tools that streamline your operations and save hours of work. Custom software that adapts to how your team works.",
      intro: [
        "If your team loses hours to spreadsheets, email threads and manual processes, a custom web application fixes it at the root: all information in one place, with clear access and tasks that take care of themselves.",
        "I build dashboards and internal tools that adapt to how your team actually works —not the other way around— with a simple interface that needs no manual.",
      ],
      featuresLabel: "What's included",
      features: [
        "Custom dashboards and admin panels",
        "Authentication and role-based permissions",
        "Integration with your existing systems",
        "Responsive, clear and fast interface",
        "Deployment, backups and monitoring",
        "Documentation and team training",
      ],
      processLabel: "How we work",
      process: [
        {
          title: "Process discovery",
          description:
            "We map the current flow, friction points and what automation wins.",
        },
        {
          title: "Design & scope",
          description:
            "We define modules, screens and a staged budget. You decide what to prioritize.",
        },
        {
          title: "Staged development",
          description:
            "Working functionality is delivered progressively, with your feedback at every step.",
        },
        {
          title: "Deploy & training",
          description:
            "We put the tool into production and support the team through adoption.",
        },
      ],
      hook: "A good internal tool pays for itself: every hour your team stops copying data is an hour that goes back into the business. Tell me which process is costing you hours and I'll tell you honestly whether software is the right fix.",
      availability: "Taking new projects",
      prefill: "Hi, I have a process I'd like to solve with a web application. Can we talk?",
    },
    "apis-integrations": {
      metaTitle: "APIs & Integrations — Bautista Suarez",
      metaDescription:
        "I connect systems: payments, shipping, CRMs and more. Well-documented, secure APIs with monitoring. I'll tell you if it's viable before we start.",
      intro: [
        "When two systems don't talk to each other, manual spreadsheets, errors and lost hours copying data appear. A well-built integration removes that invisible work for good.",
        "I design clean, well-documented APIs and connect all kinds of services: payment gateways, shipping platforms, CRMs, e-commerce and in-house systems.",
      ],
      featuresLabel: "What's included",
      features: [
        "Well-documented REST APIs",
        "Payment, shipping and CRM integrations",
        "Webhooks and data synchronization",
        "Security: keys, tokens and encryption",
        "Error handling and monitoring",
        "Data migration and backup",
      ],
      processLabel: "How we work",
      process: [
        {
          title: "Assessment",
          description:
            "We list the systems to connect, what data flows and what each side needs.",
        },
        {
          title: "Integration design",
          description:
            "We define the flow, edge cases and error strategy before writing code.",
        },
        {
          title: "Development & testing",
          description:
            "We build and test with real data in a safe environment.",
        },
        {
          title: "Deploy & monitoring",
          description:
            "We take the integration to production and keep an eye on it.",
        },
      ],
      hook: "When two systems talk to each other on their own, the spreadsheets, the errors and the hours of copying data disappear. Tell me what you need to connect and we'll figure out together if it's worth it.",
      availability: "Taking new projects",
      prefill: "Hi, I need to connect two systems. Can you help me check if it's viable?",
    },
    "automation-ai": {
      metaTitle: "Automation & AI — Bautista Suarez",
      metaDescription:
        "I automate repetitive processes and integrate AI. Limited pilots each month: write today.",
      intro: [
        "How much time a week do you spend on tasks a program could do for you? Entering data, building reports, answering the same emails over and over. Automation doesn't replace people: it gives them back time for what matters.",
        "I integrate AI where it truly adds value: assistants that answer questions, document classification, summaries and analysis of your own information. Always starting with a small pilot that proves value before scaling.",
      ],
      featuresLabel: "What's included",
      features: [
        "Automation of repetitive tasks",
        "AI assistants and integrations",
        "Document and data processing",
        "Chatbots and answers from your information",
        "Fast prototypes to validate ideas",
        "Scalable architecture: start small, grow later",
      ],
      processLabel: "How we work",
      process: [
        {
          title: "Process identification",
          description:
            "We find the task with the highest impact and lowest risk to automate first.",
        },
        {
          title: "Small pilot",
          description:
            "We build a minimal version that solves the real case, at a fixed cost.",
        },
        {
          title: "Measure & adjust",
          description:
            "We compare time and results against the manual process, and refine.",
        },
        {
          title: "Scale",
          description:
            "Once the pilot proves value, we roll it out to the rest of the operation.",
        },
      ],
      hook: "Repetitive tasks steal hours from you every week — hours a program can win back in seconds. That's why I only take a few pilots each month: every automation deserves real study and care. Tell me about your task and secure a spot on the list.",
      availability: "Limited availability",
      prefill: "Hi, I'm interested in automating a task. Can we see what's possible?"
    },
  },
  footer: {
    tagline: "Custom software that works for you.",
    rights: "All rights reserved.",
    social: "Follow me",
  },
};
