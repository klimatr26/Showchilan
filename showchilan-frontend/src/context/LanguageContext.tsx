import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

type Translation = typeof translations.es;

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      tourism: 'Turismo',
      services: 'Servicios',
    },
    header: {
      logoBase: 'SHOWCHILAN',
      logoAccent: 'TURISMO',
      login: 'Ingresar',
      cart: 'Carrito',
      langButton: 'EN',
      langTitle: 'Cambiar idioma',
    },
    hero: {
      eyebrow: 'Descubre',
      title: 'Conoce Chugchilán',
      description1:
        'Chugchilán es un hermoso pueblo en la provincia de Cotopaxi. Un lugar lleno de actividades que te conectan con la naturaleza y la cultura más pura de las nacionalidades latinoamericanas, con sus costumbres y actividades.',
      description2: 'Vive el turismo comunitario, aprende de los saberes ancestrales y apoya a los emprendimientos locales.',
      cta: 'Conoce Más',
      badge: 'Carrusel de Imágenes',
    },
    carouselCaptions: ['Paisajes andinos', 'Caminatas ecológicas', 'Comunidad y cultura'],
    categories: [
      {
        title: 'Turismo Comunitario',
        description: 'Experiencias guiadas por familias locales.',
      },
      {
        title: 'Artesanías',
        description: 'Textiles y tallados inspirados en la sierra.',
      },
      {
        title: 'Hosterías',
        description: 'Hospedajes cálidos con vista a los Andes.',
      },
    ],
    about: {
      eyebrow: 'Sobre el Proyecto',
      title: 'Auspiciado por',
      logo: 'Logotipo PUCE',
      description:
        'Proyecto realizado por estudiantes de la PUCE con el objetivo de ayudar e impulsar a comunidades del país que necesitan de los conocimientos para impulsar sus emprendimientos, desarrollo cultural y educación.',
    },
    footer: {
      project: 'Sobre el Proyecto (Documentación)',
      infoTitle: 'Información y ayuda',
      gad: 'GAD Chugchilán',
      contact: 'Contacto',
      guides: 'Guías prácticas',
      otherTitle: 'Otros',
      privacy: 'Políticas de Privacidad',
      sitemap: 'Mapa del sitio',
      subscriptions: 'Suscripciones',
    },
    turismo: {
      eyebrow: 'Directorio',
      title: 'Turismo y emprendimientos en Chugchilán',
      intro:
        'Explora el mapa interactivo para contactar directamente con negocios locales. Selecciona un punto del mapa o el listado lateral para conocer más detalles.',
      loading: 'Cargando el mapa y los negocios...',
      errorMessage: 'No se pudo conectar con el directorio. Mostrando datos de referencia.',
      listTitle: 'Negocios locales',
      phoneLabel: 'Teléfono',
    },
    info: {
      defaultDescription: 'Estamos preparando esta sección para conectar mejor con los visitantes.',
      productsTitle: 'Productos locales',
      servicesTitle: 'Servicios comunitarios',
      notFoundTitle: 'Página no encontrada',
      notFoundDescription: 'El enlace que abriste no existe.',
    },
    chatbot: {
      badge: 'Showchilan',
      title: 'Asistente turístico',
      body: 'Aquí se integrará un chatbot para responder preguntas sobre Chugchilán. (Funcionalidad en desarrollo)',
      toggle: 'Asistente turístico (próximamente)',
      closeLabel: 'Cerrar panel del asistente',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      tourism: 'Tourism',
      services: 'Services',
    },
    header: {
      logoBase: 'SHOWCHILAN',
      logoAccent: 'TOURISM',
      login: 'Sign in',
      cart: 'Cart',
      langButton: 'ES',
      langTitle: 'Change language',
    },
    hero: {
      eyebrow: 'Discover',
      title: 'Discover Chugchilán',
      description1:
        'Chugchilán is a beautiful village in Cotopaxi province. It is full of activities that connect you with nature and the most authentic local culture.',
      description2: 'Experience community tourism, learn ancestral knowledge, and support local entrepreneurs.',
      cta: 'Learn More',
      badge: 'Image Carousel',
    },
    carouselCaptions: ['Andean landscapes', 'Eco hikes', 'Community & culture'],
    categories: [
      {
        title: 'Community Tourism',
        description: 'Experiences guided by local families.',
      },
      {
        title: 'Handicrafts',
        description: 'Textiles and wood carvings inspired by the Andes.',
      },
      {
        title: 'Lodges',
        description: 'Cozy stays with views of the Andes.',
      },
    ],
    about: {
      eyebrow: 'About the Project',
      title: 'Sponsored by',
      logo: 'PUCE logo',
      description:
        'Project created by PUCE students to help and boost communities that need support for their ventures, cultural development, and education.',
    },
    footer: {
      project: 'About the Project (Documentation)',
      infoTitle: 'Information & help',
      gad: 'GAD Chugchilán',
      contact: 'Contact',
      guides: 'How-to guides',
      otherTitle: 'Others',
      privacy: 'Privacy Policy',
      sitemap: 'Sitemap',
      subscriptions: 'Subscriptions',
    },
    turismo: {
      eyebrow: 'Directory',
      title: 'Tourism and ventures in Chugchilán',
      intro:
        'Explore the interactive map to contact local businesses directly. Select a map pin or the side list to see more details.',
      loading: 'Loading map and businesses...',
      errorMessage: 'Could not reach the directory. Showing fallback data.',
      listTitle: 'Local businesses',
      phoneLabel: 'Phone',
    },
    info: {
      defaultDescription: 'We are preparing this section to better connect with visitors.',
      productsTitle: 'Local products',
      servicesTitle: 'Community services',
      notFoundTitle: 'Page not found',
      notFoundDescription: 'The link you opened does not exist.',
    },
    chatbot: {
      badge: 'Showchilan',
      title: 'Tourism assistant',
      body: 'A chatbot will be integrated here to answer questions about Chugchilán. (Work in progress)',
      toggle: 'Tourism assistant (coming soon)',
      closeLabel: 'Close assistant panel',
    },
  },
};

interface LanguageContextValue {
  lang: Language;
  toggleLanguage: () => void;
  translations: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');
  const toggleLanguage = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, translations: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
