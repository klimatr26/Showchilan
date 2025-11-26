import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { translations: t } = useLanguage();

  return (
    <footer className="bg-white py-10 text-primario">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-lg font-bold">
            SHOWCHILAN <span className="text-secundario">{t.header.logoAccent}</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{t.footer.project}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secundario">{t.footer.infoTitle}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a className="hover:text-secundario" href="https://www.gadchugchilan.gob.ec" target="_blank" rel="noreferrer">{t.footer.gad}</a></li>
            <li><a className="hover:text-secundario" href="mailto:hola@showchilan.ec">{t.footer.contact}</a></li>
            <li><a className="hover:text-secundario" href="#guias">{t.footer.guides}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secundario">{t.footer.otherTitle}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a className="hover:text-secundario" href="#privacidad">{t.footer.privacy}</a></li>
            <li><a className="hover:text-secundario" href="#mapa-sitio">{t.footer.sitemap}</a></li>
            <li><a className="hover:text-secundario" href="#suscripciones">{t.footer.subscriptions}</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Showchilan. Todos los derechos reservados.</div>
    </footer>
  );
}
