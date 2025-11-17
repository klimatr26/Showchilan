-- Crear esquema y tabla para Showchilan
-- CREATE SCHEMA IF NOT EXISTS showchilan;
-- SET search_path = showchilan;

CREATE TABLE IF NOT EXISTS negocios (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  telefono_contacto TEXT NOT NULL,
  latitud DOUBLE PRECISION NOT NULL,
  longitud DOUBLE PRECISION NOT NULL,
  imagenes TEXT[] NOT NULL
);

TRUNCATE TABLE negocios RESTART IDENTITY;

INSERT INTO negocios (nombre, descripcion, telefono_contacto, latitud, longitud, imagenes) VALUES
(
  'Hostería Nido del Cóndor',
  'Habitaciones acogedoras, alimentación local y rutas guiadas hacia el mirador del Toachi.',
  '+593 98 765 4321',
  -0.9068,
  -78.9555,
  ARRAY['https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80']
),
(
  'Cabalgatas Quilotoa Loop',
  'Cabalgatas de medio día hacia la laguna del Quilotoa con guianza comunitaria.',
  '+593 98 123 4567',
  -0.8998,
  -78.9432,
  ARRAY['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80']
),
(
  'Quesería Vista Andina',
  'Productos lácteos artesanales y degustaciones guiadas con familias locales.',
  '+593 96 555 0011',
  -0.9072,
  -78.949,
  ARRAY['https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80']
),
(
  'Taller de Artesanías Sumak Kawsay',
  'Venta de tejidos, tallados en madera y talleres cortos para turistas.',
  '+593 95 888 3300',
  -0.9036,
  -78.9525,
  ARRAY['https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=1200&q=80']
);
