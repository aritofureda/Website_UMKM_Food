import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import LanguageSwitcher from '../shared/LanguageSwitcher';

const navLinks = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/products', key: 'products' },
  { path: '/blog', key: 'blog' },
  { path: '/gallery', key: 'gallery' },
  { path: '/testimonials', key: 'testimonials' },
  { path: '/faq', key: 'faq' },
  { path: '/team', key: 'team' },
  { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation('common');
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-neutral-100">
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-display font-bold text-primary-600">Dapur Nusantara</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === link.path ? 'text-primary-500' : 'text-neutral-600'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg cursor-pointer"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <span className="font-display font-bold text-lg text-primary-600">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1 overflow-y-auto flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
