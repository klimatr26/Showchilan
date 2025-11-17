export function Footer() {
  return (
    <footer className="bg-white py-10 text-primario">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-lg font-bold">
            SHOWCHILAN <span className="text-secundario">TOURISM</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Sobre el Proyecto (Documentación)</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secundario">Información y ayuda</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a className="hover:text-secundario" href="https://www.gadchugchilan.gob.ec" target="_blank" rel="noreferrer">GAD Chugchilán</a></li>
            <li><a className="hover:text-secundario" href="mailto:hola@showchilan.ec">Contacto</a></li>
            <li><a className="hover:text-secundario" href="#guias">Guías prácticas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secundario">Otros</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a className="hover:text-secundario" href="#privacidad">Políticas de Privacidad</a></li>
            <li><a className="hover:text-secundario" href="#mapa-sitio">Mapa del sitio</a></li>
            <li><a className="hover:text-secundario" href="#suscripciones">Suscripciones</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Showchilan. Todos los derechos reservados.</div>
    </footer>
  );
}
