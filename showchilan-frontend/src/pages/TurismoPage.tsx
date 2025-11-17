import { useEffect, useState } from 'react';
import { getNegocios } from '../api/negociosApi';
import type { Negocio } from '../types/negocio';
import { MapView } from '../components/Map/MapView';

const fallbackNegocios: Negocio[] = [
  {
    id: 1,
    nombre: 'Hostería Chugchilán',
    descripcion: 'Hospedaje con vista al cañón del Toachi y desayuno local incluido.',
    telefonoContacto: '+593 98 123 4567',
    latitud: -0.9055,
    longitud: -78.956,
    imagenes: ['https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80'],
  },
  {
    id: 2,
    nombre: 'Guianza Quilotoa Loop',
    descripcion: 'Recorridos guiados por senderos ancestrales y el cráter del Quilotoa.',
    telefonoContacto: '+593 98 765 4321',
    latitud: -0.898,
    longitud: -78.942,
    imagenes: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'],
  },
  {
    id: 3,
    nombre: 'Quesería Andina',
    descripcion: 'Productos lácteos artesanales y talleres de cocina comunitaria.',
    telefonoContacto: '+593 96 555 0011',
    latitud: -0.907,
    longitud: -78.948,
    imagenes: ['https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80'],
  },
];

export function TurismoPage() {
  const [negocios, setNegocios] = useState<Negocio[]>([]);
  const [selectedNegocioId, setSelectedNegocioId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    getNegocios(controller.signal)
      .then((data) => {
        setNegocios(data);
        if (data.length) {
          setSelectedNegocioId(data[0].id);
        }
      })
      .catch(() => {
        setError('No se pudo conectar con el directorio. Mostrando datos de referencia.');
        setNegocios(fallbackNegocios);
        setSelectedNegocioId(fallbackNegocios[0]?.id ?? null);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const handleSelect = (negocio: Negocio) => {
    setSelectedNegocioId(negocio.id);
  };

  return (
    <section className="bg-arena py-10">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs uppercase tracking-[0.6em] text-secundario">Directorio</p>
        <h1 className="mt-2 text-4xl font-semibold text-primario">Turismo y emprendimientos en Chugchilán</h1>
        <p className="mt-3 max-w-3xl text-base text-slate-600">
          Explora el mapa interactivo para contactar directamente con negocios locales. Selecciona un punto del mapa o
          el listado lateral para conocer más detalles.
        </p>

        {loading ? (
          <div className="mt-10 rounded-3xl bg-white p-8 text-center shadow">
            <p className="text-slate-600">Cargando el mapa y los negocios...</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-4 rounded-3xl bg-white p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-primario">Negocios locales</h2>
              {error ? (
                <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-700">{error}</p>
              ) : null}
              <div className="space-y-4">
                {negocios.map((negocio) => (
                  <button
                    key={negocio.id}
                    type="button"
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selectedNegocioId === negocio.id
                        ? 'border-secundario bg-secundario/10'
                        : 'border-slate-200 hover:border-secundario/60'
                    }`}
                    onClick={() => handleSelect(negocio)}
                  >
                    <p className="text-sm font-semibold text-secundario">{negocio.nombre}</p>
                    <p className="mt-1 text-xs text-slate-600">{negocio.descripcion}</p>
                    <p className="mt-2 text-xs text-slate-500">Teléfono: {negocio.telefonoContacto}</p>
                  </button>
                ))}
              </div>
            </aside>

            <div className="min-h-[520px]">
              <MapView negocios={negocios} selectedNegocioId={selectedNegocioId} onSelect={handleSelect} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
