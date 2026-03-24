export type Locale = "es" | "en";

export type ExperienceJob = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export type TranslationTree = {
  nav: {
    inicio: string;
    sobreMi: string;
    stack: string;
    experiencia: string;
    contacto: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    contactame: string;
    curriculum: string;
  };
  about: {
    title: string;
    whoTitle: string;
    whoBody: string;
    purposeTitle: string;
    purposeBody: string;
    locationTitle: string;
    locationBody: string;
    badgeTitle: string;
    badgeSubtitle: string;
  };
  stack: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    tools: string;
    learningTitle: string;
    learningBody: string;
  };
  experience: {
    title: string;
    subtitle: string;
    technologies: string;
    achievements: string;
    jobs: ExperienceJob[];
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
    send: string;
    sending: string;
    infoTitle: string;
    labelEmail: string;
    labelPhone: string;
    labelLocation: string;
    locationValue: string;
    socialTitle: string;
    availableTitle: string;
    availableBody: string;
    toastFillAll: string;
    toastSuccessTitle: string;
    toastSuccessDesc: string;
    toastError: string;
  };
  footer: {
    madeBy: string;
    rights: string;
  };
};

const es: TranslationTree = {
  nav: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    stack: "Mi Stack",
    experiencia: "Experiencia",
    contacto: "Contacto",
  },
  hero: {
    greeting: "¡Hola! Soy",
    subtitle:
      "Desarrollador web en constante evolución, enfocado en ofrecer soluciones claras y efectivas.",
    contactame: "Contáctame",
    curriculum: "Currículum",
  },
  about: {
    title: "SOBRE MÍ",
    whoTitle: "Quien soy?",
    whoBody:
      "Soy desarrollador de software con enfoque en frontend, especializado en crear interfaces web rápidas, responsivas y pensadas para el usuario. Me caracterizo por ser una persona proactiva, y comprometida con la calidad del código. Disfruto trabajar en equipo, aprender constantemente y aportar soluciones funcionales que también sean elegantes y fáciles de usar.",
    purposeTitle: "Construyendo con propósito",
    purposeBody:
      "La programación es mucho más que una habilidad para mí: es una forma de transformar ideas en soluciones reales. Disfruto cada etapa del proceso —aprender, crear, resolver— y siempre estoy explorando nuevas tecnologías que me permitan mejorar y aportar valor. Me motiva construir cosas útiles, con propósito, que marquen una diferencia.",
    locationTitle: "Remoto y Local",
    locationBody:
      "Estoy ubicado en España, abierto a oportunidades ubicadas en el país, pero también me interesa trabajar con empresas remotas a nivel global. Las zonas horarias no son un obstáculo, y me adapto fácilmente a equipos distribuidos. Siempre estoy en busca de nuevos desafíos y oportunidades para crecer profesionalmente, ya sea de forma remota o local.",
    badgeTitle: "Desarrollador Web",
    badgeSubtitle: "Diseñando soluciones, una interfaz a la vez",
  },
  stack: {
    title: "MI STACK",
    subtitle:
      "Tecnologías y herramientas que domino para crear experiencias excepcionales",
    frontend: "FRONTEND",
    backend: "BACKEND",
    tools: "HERRAMIENTAS",
    learningTitle: "Siempre aprendiendo",
    learningBody:
      "La tecnología evoluciona constantemente, y yo también. Siempre estoy explorando nuevas herramientas, frameworks y metodologías para mantenerme al día con las mejores prácticas de la industria.",
  },
  experience: {
    title: "EXPERIENCIA",
    subtitle: "Mi trayectoria profesional construyendo soluciones digitales",
    technologies: "Tecnologías:",
    achievements: "Logros destacados:",
    jobs: [
      {
        title: "Desarrollador Web Full Stack",
        company: "Grupo Banklot",
        location: "Remoto",
        period: "Julio 2024 - Febrero 2026",
        description:
          "Desarrollo de interfaces web modernas con Vuejs, optimizadas para rendimiento y accesibilidad.",
        technologies: [
          "Vuejs",
          "TypeScript",
          "Go",
          "PostgreSQL",
          "Docker",
          "PrimeVue",
          "NestJS",
          "TailwindCSS",
        ],
        achievements: [
          "Identifico y resuelvo problemas de rendimiento en las aplicaciones web",
          "Colaboro con el equipo de backend para alinear requerimientos técnicos con necesidades de usuarios finales",
          "Garantizo que las soluciones tecnológicas se alineen a las necesidades de los usuarios",
        ],
      },
      {
        title: "Desarrollador Web",
        company: "Freelance",
        location: "Remoto",
        period: "Diciembre 2023 - Marzo 2024",
        description:
          "Desarrollé una página web haciendo uso de WordPress con el plugin Divi para una empresa de alquiler de artículos mobiliarios para eventos",
        technologies: ["WordPress", "Divi"],
        achievements: [
          "Implementé un catálogo de productos y pasarela de pagos, mejorando la experiencia de compra del cliente",
        ],
      },
      {
        title: "Prácticas profesionales (Asistente de Programación)",
        company: "GENIO, Casa de Software C.A.",
        location: "Maracaibo, Venezuela",
        period: "Enero 2023 - Abril 2023",
        description:
          "Diseño y desarrollo de la página principal de la empresa, enfocada en presentar de forma clara los sistemas administrativos que ofrece.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        achievements: [
          "Diseñé una landing page orientada a la captación de clientes potenciales",
          "Mejoré la comunicación visual de los productos mediante contenido estructurado",
          "Integré un sistema para que los clientes pudieran consultar la validez de sus licencias en tiempo real",
        ],
      },
    ],
  },
  contact: {
    title: "CONTACTO",
    subtitle: "¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!",
    formTitle: "Envíame un mensaje",
    name: "Nombre",
    email: "Email",
    subject: "Asunto",
    message: "Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "tu@email.com",
    placeholderSubject: "Asunto del mensaje",
    placeholderMessage: "Cuéntame sobre tu proyecto...",
    send: "Enviar mensaje",
    sending: "Enviando",
    infoTitle: "Información de contacto",
    labelEmail: "Email",
    labelPhone: "Teléfono",
    labelLocation: "Ubicación",
    locationValue: "Madrid, España",
    socialTitle: "Mis Redes Sociales",
    availableTitle: "Disponible para proyectos",
    availableBody:
      "Actualmente aceptando nuevos proyectos y oportunidades tanto remotas como locales.",
    toastFillAll: "Rellena todos los campos",
    toastSuccessTitle: "Mensaje enviado correctamente",
    toastSuccessDesc: "Gracias por contactarme. Te responderé pronto.",
    toastError: "Hubo un error al enviar el mensaje",
  },
  footer: {
    madeBy: "Hecho por, Luis Rodríguez",
    rights: "Todos los derechos reservados",
  },
};

const en: TranslationTree = {
  nav: {
    inicio: "Home",
    sobreMi: "About",
    stack: "Stack",
    experiencia: "Experience",
    contacto: "Contact",
  },
  hero: {
    greeting: "Hi! I'm",
    subtitle:
      "A web developer constantly evolving, focused on delivering clear and effective solutions.",
    contactame: "Contact me",
    curriculum: "Resume",
  },
  about: {
    title: "ABOUT ME",
    whoTitle: "Who am I?",
    whoBody:
      "I'm a software developer focused on frontend, specialized in building fast, responsive, user-centered web interfaces. I'm proactive and committed to code quality. I enjoy teamwork, continuous learning, and delivering functional solutions that are also elegant and easy to use.",
    purposeTitle: "Building with purpose",
    purposeBody:
      "Programming is more than a skill to me: it's how I turn ideas into real solutions. I enjoy every stage of the process—learn, build, solve—and I'm always exploring new technologies to grow and add value. I'm motivated to build useful, purposeful things that make a difference.",
    locationTitle: "Remote & on-site",
    locationBody:
      "I'm based in Spain and open to opportunities here, and I'm also interested in working remotely with companies worldwide. Time zones aren't a problem, and I adapt easily to distributed teams. I'm always looking for new challenges and ways to grow professionally, whether remote or local.",
    badgeTitle: "Web Developer",
    badgeSubtitle: "Designing solutions, one interface at a time",
  },
  stack: {
    title: "MY STACK",
    subtitle:
      "Technologies and tools I use to build exceptional experiences",
    frontend: "FRONTEND",
    backend: "BACKEND",
    tools: "TOOLS",
    learningTitle: "Always learning",
    learningBody:
      "Technology keeps evolving, and so do I. I'm always exploring new tools, frameworks, and methodologies to stay current with industry best practices.",
  },
  experience: {
    title: "EXPERIENCE",
    subtitle: "My professional path building digital solutions",
    technologies: "Technologies:",
    achievements: "Key achievements:",
    jobs: [
      {
        title: "Full Stack Web Developer",
        company: "Grupo Banklot",
        location: "Remote",
        period: "July 2024 - February 2026",
        description:
          "Building modern web interfaces with Vue.js, optimized for performance and accessibility.",
        technologies: [
          "Vuejs",
          "TypeScript",
          "Go",
          "PostgreSQL",
          "Docker",
          "PrimeVue",
          "NestJS",
          "TailwindCSS",
        ],
        achievements: [
          "Identify and fix performance issues in web applications",
          "Collaborate with the backend team to align technical requirements with end-user needs",
          "Ensure technical solutions meet user and business needs",
        ],
      },
      {
        title: "Web Developer",
        company: "Freelance",
        location: "Remote",
        period: "December 2023 - March 2024",
        description:
          "Built a website using WordPress with the Divi plugin for an event furniture rental company.",
        technologies: ["WordPress", "Divi"],
        achievements: [
          "Implemented a product catalog and payment flow, improving the customer purchase experience",
        ],
      },
      {
        title: "Internship (Programming Assistant)",
        company: "GENIO, Casa de Software C.A.",
        location: "Maracaibo, Venezuela",
        period: "January 2023 - April 2023",
        description:
          "Designed and developed the company's main page, focused on clearly presenting its administrative software offerings.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        achievements: [
          "Designed a landing page aimed at lead generation",
          "Improved product communication through structured content",
          "Integrated a system for clients to check license validity in real time",
        ],
      },
    ],
  },
  contact: {
    title: "CONTACT",
    subtitle: "Have a project in mind? Let's talk and make it happen!",
    formTitle: "Send me a message",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    placeholderName: "Your name",
    placeholderEmail: "you@email.com",
    placeholderSubject: "Message subject",
    placeholderMessage: "Tell me about your project...",
    send: "Send message",
    sending: "Sending",
    infoTitle: "Contact details",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelLocation: "Location",
    locationValue: "Madrid, Spain",
    socialTitle: "Social links",
    availableTitle: "Open to projects",
    availableBody:
      "Currently accepting new projects and both remote and local opportunities.",
    toastFillAll: "Please fill in all fields",
    toastSuccessTitle: "Message sent successfully",
    toastSuccessDesc: "Thanks for reaching out. I'll get back to you soon.",
    toastError: "Something went wrong while sending the message",
  },
  footer: {
    madeBy: "Built by Luis Rodríguez",
    rights: "All rights reserved",
  },
};

export const translations: Record<Locale, TranslationTree> = { es, en };
