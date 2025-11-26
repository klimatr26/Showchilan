import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLanguage, translations: t } = useLanguage();

  return (
    <header className="relative bg-primario text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-6">
        <div className="text-lg font-bold tracking-wide">
          {t.header.logoBase} <span className="text-secundario">{t.header.logoAccent}</span>
        </div>

        <button
          type="button"
          aria-label="Abrir navegación"
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute left-0 top-full z-20 w-full flex-col gap-4 bg-primario px-4 py-4 text-center text-base md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:px-0 md:py-0`}
        >
          {[
            { to: '/', label: t.nav.home },
            { to: '/productos', label: t.nav.products },
            { to: '/turismo', label: t.nav.tourism },
            { to: '/servicios', label: t.nav.services },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium uppercase tracking-wide transition hover:text-secundario ${
                  isActive ? 'text-secundario' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button type="button" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20" aria-label={t.header.cart}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h12l2-8H5.4M7 13l-1.293 5.172A1 1 0 0 0 6.682 19H19"
              />
              <circle cx="10" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
            </svg>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4Z" />
            </svg>
            {t.header.login}
          </button>
          <button
            type="button"
            title={t.header.langTitle}
            className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold transition hover:bg-white/20"
            onClick={toggleLanguage}
          >
            <span className="text-lg" aria-hidden>
              {lang === 'es' ? '🇺🇸' : '🇪🇸'}
            </span>
            {t.header.langButton}
          </button>
        </div>
      </div>
    </header>
  );
}
