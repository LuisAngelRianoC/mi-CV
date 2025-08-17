import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerTranslations from './locales/header.ts';
import profileTranslations from './locales/profile.ts';
import experienceTranslations from './locales/experience.ts';
import { projectsTranslations } from './locales/projects.ts';


const resources = {
  es: {
    translation: {
      ...headerTranslations.es,
      ...profileTranslations.es,
      ...experienceTranslations.es,
      ...projectsTranslations.es,
    }
  },
  en: {
    translation: {
      ...headerTranslations.en,
      ...profileTranslations.en,
      ...experienceTranslations.en,
      ...projectsTranslations.en,
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('cv-lang') || 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
    