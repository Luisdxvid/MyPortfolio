export type Language = 'es' | 'en';

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    stack: string;
    experience: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    paragraph: string;
    ctaContact: string;
    ctaResume: string;
    baseLocation: string;
    ready: string;
  };
  about: {
    eyebrowLabel: string;
    title: string;
    intro: {
      lead: string;
      text: string;
    };
    panel: {
      location: string;
      education: string;
      languages: string;
    };
  };
  stack: {
    eyebrowLabel: string;
    title: string;
    subtitle?: string;
    categories: { frontend: string; backend: string; tools: string };
  };
  experience: {
    eyebrowLabel: string;
    title: string;
    subtitle?: string;
    technologiesLabel: string;
    achievementsLabel: string;
    items: ExperienceItem[];
  };
  contact: {
    eyebrowLabel: string;
    title: string;
    subtitle?: string;
    form: {
      heading: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
    };
    toasts: {
      missingTitle: string;
      successTitle: string;
      successDescription: string;
      errorTitle: string;
    };
    info: {
      heading: string;
      email: string;
      phone: string;
      location: string;
      locationValue: string;
    };
  };
  footer: { rights: string };
  notFound: { message: string; back: string };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      stack: 'Mi Stack',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Disponible para nuevos proyectos',
      role: 'Desarrollador Full-Stack',
      paragraph:
        'Construyo interfaces web rápidas y bien pensadas, con una base sólida en el backend que las sostiene. Foco en claridad, rendimiento y soluciones que de verdad resuelven el problema.',
      ctaContact: 'Contáctame',
      ctaResume: 'Currículum',
      baseLocation: '"Madrid, España"',
      ready: 'listo para el siguiente reto',
    },
    about: {
      eyebrowLabel: 'Quién soy',
      title: 'Sobre mí',
      intro: {
        lead: 'Ingeniero en Informática y desarrollador Full Stack, con más de 2 años construyendo aplicaciones web en producción.',
        text: 'Me muevo con soltura entre el backend —NestJS y Go, con TypeORM, PostgreSQL y Redis— y el frontend —Vue 3, React y TypeScript—, siempre con foco en mantener el producto vivo, resolver incidencias reales y trabajar codo a codo con negocio para que cada solución responda a una necesidad concreta.',
      },
      panel: {
        location: 'Madrid, España',
        education: 'Ing. Informática',
        languages: 'ES · EN (B2)',
      },
    },
    stack: {
      eyebrowLabel: 'Herramientas',
      title: 'Mi Stack',

      categories: { frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas' },
    },
    experience: {
      eyebrowLabel: 'Trayectoria',
      title: 'Experiencia',
      technologiesLabel: 'Tecnologías',
      achievementsLabel: 'Logros destacados',
      items: [
        {
          title: 'Desarrollador Web Full Stack',
          company: 'Grupo Banklot',
          location: 'Remoto',
          period: 'Julio 2024 - Agosto 2026',
          description:
            'Desarrollo full stack sobre un ecosistema de plataformas transaccionales en producción (Lotomatic, GatoWeb, Loterías24, LottoLivery y Registry), con integraciones bancarias, pasarelas de pago y proveedores externos.',
          technologies: [
            'NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'Go', 'Vue 3',
            'TypeScript', 'Docker', 'Jest', 'AWS S3',
          ],
          achievements: [
            'Contribuí al backend (NestJS, TypeORM, PostgreSQL, Redis) de una plataforma que multiplicó su volumen mensual casi 100 veces en 5 meses, pasando de unas 3.000 a más de 300.000 operaciones, con cerca de 5.000 usuarios registrados, más de 250.000 transacciones de fondos y más de 90.000 notificaciones procesadas desde una pasarela de pagos externa, sobre más de 50 variantes de producto integradas con un proveedor externo.',
            'Construí los flujos de compra del ecosistema de aplicaciones con backend en Go, utilizados hoy por más de 5.000 agencias activas y cerca de 15.000 usuarios, con un volumen superior a 20 millones de operaciones mensuales.',
            'Lancé "Paguetodo" end-to-end, frontend y backend en Go: un módulo de pago de servicios de TV, telefonía e internet que amplió la oferta de la plataforma hacia una nueva línea de negocio.',
            'Diseñé y desarrollé de punta a punta el programa de referidos —backend, panel de administración e interfaz de cliente—, con un módulo de configuración que permite al equipo de negocio activar o desactivar el bono y ajustar depósito mínimo y recompensa sin intervención técnica, reportes y gráficos de seguimiento para el área financiera, y control de concurrencia para evitar recompensas duplicadas en depósitos simultáneos.',
            'Desarrollé backend (NestJS, PostgreSQL) y frontend (Vue 3) de la plataforma oficial de registro de operadores de un organismo público de loterías, digitalizando la verificación documental (KYC) con almacenamiento en AWS S3, generación de reportes en PDF y geolocalización de puntos de venta.',
            'Implementé el webhook de notificaciones de pago con una entidad bancaria nacional, con autenticación por API Key, superando su proceso oficial de certificación.',
            'Contribuí a una API de más de 50 controladores y cerca de 300 endpoints REST, respaldada por casi 50 migraciones de base de datos y más de 40 suites de pruebas automatizadas con Jest.',
            'Contribuí al panel administrativo de operaciones para el seguimiento de ventas por agencia y distribuidor y la gestión de comisiones de la red, con validaciones que bloquean configuraciones fuera de los límites de negocio permitidos.',
          ],
        },
        {
          title: 'Desarrollador Web Freelance',
          company: 'Empresa de alquiler de equipamiento para eventos',
          location: 'Remoto',
          period: 'Diciembre 2023 - Abril 2024',
          description:
            'Diseñé y desarrollé el sitio web corporativo como único perfil técnico del proyecto, cubriendo desde el levantamiento de requisitos con la dirección de la empresa hasta la construcción de la solución con WordPress y Divi.',
          technologies: ['WordPress', 'Divi'],
          achievements: [
            'Construí el catálogo de productos y el circuito de solicitud de presupuesto, base del canal digital de captación de clientes del negocio.',
            'Dirigí la interlocución directa con el cliente, traduciendo objetivos comerciales en decisiones de producto y gestionando alcance y prioridades de forma autónoma.',
          ],
        },
        {
          title: 'Desarrollador Frontend (Prácticas Profesionales)',
          company: 'GENIO, Casa de Software',
          location: 'Maracaibo, Venezuela',
          period: 'Enero 2023 - Abril 2023',
          description:
            'Desarrollé y publiqué en producción el sitio web corporativo con HTML, CSS, JavaScript, PHP y SQL, que pasó a ser la presencia digital oficial de la compañía.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
          achievements: [
            'Diseñé e implementé una landing page dinámica en JavaScript que reforzó la presentación comercial del producto y la interacción del visitante.',
            'Desarrollé un módulo privado de consulta de licencias conectado a base de datos, que dio autonomía a los clientes sobre su propia información y eliminó consultas manuales recurrentes al equipo de soporte.',
          ],
        },
      ],
    },
    contact: {
      eyebrowLabel: 'Hablemos',
      title: 'Contacto',
      form: {
        heading: 'Envíame un mensaje',
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        subject: 'Asunto',
        subjectPlaceholder: 'Asunto del mensaje',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        send: 'Enviar mensaje',
        sending: 'Enviando',
      },
      toasts: {
        missingTitle: 'Rellena todos los campos',
        successTitle: 'Mensaje enviado correctamente',
        successDescription: 'Gracias por contactarme. Te responderé pronto.',
        errorTitle: 'Hubo un error al enviar el mensaje',
      },
      info: {
        heading: 'Información de contacto',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        locationValue: 'Madrid, España',
      },
    },
    footer: {
      rights: 'todos los derechos reservados',
    },
    notFound: {
      message: 'Esta ruta no existe.',
      back: 'Volver al inicio',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      stack: 'Stack',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Available for new projects',
      role: 'Full-Stack Developer',
      paragraph:
        "I build fast, well-thought-out web interfaces, backed by a solid backend foundation. Focused on clarity, performance, and solutions that actually solve the problem.",
      ctaContact: 'Get in touch',
      ctaResume: 'Resume',
      baseLocation: '"Madrid, Spain"',
      ready: 'ready for the next challenge',
    },
    about: {
      eyebrowLabel: 'About',
      title: 'About Me',
      intro: {
        lead: 'Computer Engineer and Full Stack developer, with 2+ years building production web applications.',
        text: "I move comfortably between the backend —NestJS and Go, with TypeORM, PostgreSQL, and Redis— and the frontend —Vue 3, React, and TypeScript—, always focused on keeping the product alive, solving real incidents, and working closely with the business so every solution answers a concrete need.",
      },
      panel: {
        location: 'Madrid, Spain',
        education: 'CS Engineering',
        languages: 'ES · EN (B2)',
      },
    },
    stack: {
      eyebrowLabel: 'Tools',
      title: 'My Stack',
      categories: { frontend: 'Frontend', backend: 'Backend', tools: 'Tools' },
    },
    experience: {
      eyebrowLabel: 'Journey',
      title: 'Experience',
      technologiesLabel: 'Technologies',
      achievementsLabel: 'Key achievements',
      items: [
        {
          title: 'Full Stack Web Developer',
          company: 'Grupo Banklot',
          location: 'Remote',
          period: 'July 2024 - August 2026',
          description:
            'Full-stack development across a production ecosystem of transactional platforms (Lotomatic, GatoWeb, Loterías24, LottoLivery, and Registry), with banking integrations, payment gateways, and third-party providers.',
          technologies: [
            'NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'Go', 'Vue 3',
            'TypeScript', 'Docker', 'Jest', 'AWS S3',
          ],
          achievements: [
            'Contributed to the backend (NestJS, TypeORM, PostgreSQL, Redis) of a platform that multiplied its monthly volume almost 100x in 5 months, growing from roughly 3,000 to over 300,000 operations, with close to 5,000 registered users, over 250,000 fund transactions, and more than 90,000 notifications processed from an external payment gateway, across 50+ product variants integrated with a third-party provider.',
            'Built the purchase flows for the app ecosystem with a Go backend, used today by more than 5,000 active agencies and close to 15,000 users, with a volume exceeding 20 million monthly operations.',
            'Shipped "Paguetodo" end-to-end, frontend and backend in Go: a bill-payment module for TV, phone, and internet services that expanded the platform into a new business line.',
            "Designed and built the referral program end-to-end —backend, admin panel, and client interface— with a configuration module that lets the business team enable or disable the bonus and adjust the minimum deposit and reward without engineering involvement, tracking reports and charts for the finance team, and concurrency control to prevent duplicate rewards on simultaneous deposits.",
            'Developed the backend (NestJS, PostgreSQL) and frontend (Vue 3) of the official operator registration platform for a public lottery authority, digitizing document verification (KYC) with AWS S3 storage, PDF report generation, and point-of-sale geolocation.',
            'Implemented the payment notification webhook with a national banking institution, using API key authentication, and passed its official certification process.',
            'Contributed to an API with 50+ controllers and nearly 300 REST endpoints, backed by close to 50 database migrations and 40+ automated test suites with Jest.',
            'Contributed to the operations admin panel for tracking sales by agency and distributor and managing network commissions, adding validations that block configurations outside allowed business limits.',
          ],
        },
        {
          title: 'Freelance Web Developer',
          company: 'Event equipment rental company',
          location: 'Remote',
          period: 'December 2023 - April 2024',
          description:
            'Designed and built the corporate website as the sole technical profile on the project, covering everything from requirements gathering with company leadership to building the solution with WordPress and Divi.',
          technologies: ['WordPress', 'Divi'],
          achievements: [
            "Built the product catalog and the quote-request flow, the foundation of the business's digital client-acquisition channel.",
            'Led direct communication with the client, translating business goals into product decisions and independently managing scope and priorities.',
          ],
        },
        {
          title: 'Frontend Developer (Professional Internship)',
          company: 'GENIO, Casa de Software',
          location: 'Maracaibo, Venezuela',
          period: 'January 2023 - April 2023',
          description:
            "Developed and shipped to production the corporate website using HTML, CSS, JavaScript, PHP, and SQL, which became the company's official digital presence.",
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
          achievements: [
            "Designed and implemented a dynamic JavaScript landing page that strengthened the product's commercial presentation and visitor engagement.",
            'Built a private, database-connected license lookup module that gave clients autonomy over their own information and eliminated recurring manual queries to the support team.',
          ],
        },
      ],
    },
    contact: {
      eyebrowLabel: "Let's talk",
      title: 'Contact',
      form: {
        heading: 'Send me a message',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send message',
        sending: 'Sending',
      },
      toasts: {
        missingTitle: 'Please fill in all fields',
        successTitle: 'Message sent successfully',
        successDescription: "Thanks for reaching out. I'll get back to you soon.",
        errorTitle: 'There was an error sending the message',
      },
      info: {
        heading: 'Contact information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Madrid, Spain',
      },
    },
    footer: {
      rights: 'all rights reserved',
    },
    notFound: {
      message: "This route doesn't exist.",
      back: 'Back home',
    },
  },
};
