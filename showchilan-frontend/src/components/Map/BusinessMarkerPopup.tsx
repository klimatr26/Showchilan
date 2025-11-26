import type { Negocio } from '../../types/negocio';
import { useLanguage } from '../../context/LanguageContext';

interface BusinessMarkerPopupProps {
  negocio: Negocio;
}

export function BusinessMarkerPopup({ negocio }: BusinessMarkerPopupProps) {
  const mainImage = negocio.imagenes[0];
  const { translations: t } = useLanguage();

  return (
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-primario">{negocio.nombre}</h4>
      {mainImage ? (
        <img
          src={mainImage}
          alt={negocio.nombre}
          className="h-28 w-full rounded-md object-cover"
        />
      ) : null}
      <p className="text-sm text-slate-600">{negocio.descripcion}</p>
      <p className="text-sm font-semibold text-secundario">{t.turismo.phoneLabel}: {negocio.telefonoContacto}</p>
    </div>
  );
}
