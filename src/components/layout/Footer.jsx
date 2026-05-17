import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Camera, Globe, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Dapur Nusantara</h3>
            <p className="text-sm leading-relaxed">{t('footer.description')}</p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="Facebook">
                <Globe size={20} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.quick_links')}</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-primary-400 transition-colors">{t('nav.home')}</Link>
              <Link to="/about" className="hover:text-primary-400 transition-colors">{t('nav.about')}</Link>
              <Link to="/products" className="hover:text-primary-400 transition-colors">{t('nav.products')}</Link>
              <Link to="/blog" className="hover:text-primary-400 transition-colors">{t('nav.blog')}</Link>
              <Link to="/contact" className="hover:text-primary-400 transition-colors">{t('nav.contact')}</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.contact_info')}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>{t('footer.address')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          <p>&copy; {year} Dapur Nusantara. {t('footer.rights')}.</p>
        </div>
      </Container>
    </footer>
  );
}
