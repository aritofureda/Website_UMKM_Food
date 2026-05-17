import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-200 text-sm font-medium hover:bg-neutral-100 transition-colors cursor-pointer"
      aria-label="Switch language"
    >
      <span className={i18n.language === 'id' ? 'text-primary-500 font-bold' : 'text-neutral-500'}>ID</span>
      <span className="text-neutral-300">|</span>
      <span className={i18n.language === 'en' ? 'text-primary-500 font-bold' : 'text-neutral-500'}>EN</span>
    </button>
  );
}
