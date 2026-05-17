import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import idCommon from './locales/id/common.json';
import idHome from './locales/id/home.json';
import idAbout from './locales/id/about.json';
import idProducts from './locales/id/products.json';
import idTestimonials from './locales/id/testimonials.json';
import idContact from './locales/id/contact.json';
import idBlog from './locales/id/blog.json';
import idFaq from './locales/id/faq.json';
import idGallery from './locales/id/gallery.json';
import idTeam from './locales/id/team.json';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enProducts from './locales/en/products.json';
import enTestimonials from './locales/en/testimonials.json';
import enContact from './locales/en/contact.json';
import enBlog from './locales/en/blog.json';
import enFaq from './locales/en/faq.json';
import enGallery from './locales/en/gallery.json';
import enTeam from './locales/en/team.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: {
        common: idCommon,
        home: idHome,
        about: idAbout,
        products: idProducts,
        testimonials: idTestimonials,
        contact: idContact,
        blog: idBlog,
        faq: idFaq,
        gallery: idGallery,
        team: idTeam,
      },
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        products: enProducts,
        testimonials: enTestimonials,
        contact: enContact,
        blog: enBlog,
        faq: enFaq,
        gallery: enGallery,
        team: enTeam,
      },
    },
    fallbackLng: 'id',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
