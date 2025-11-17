import { Link } from 'react-router-dom';
import { ImageCarousel } from './ImageCarousel';

export function HeroSection() {
  return (
    <section className="bg-arena pb-12 pt-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-stretch">
        <ImageCarousel />

        <div className="rounded-3xl bg-secundario p-8 text-white shadow-xl">
          <p className="text-xs uppercase tracking-[0.6em] text-white/80">Descubre</p>
          <h2 className="mt-2 text-4xl font-semibold leading-tight">Conoce Chugchilán</h2>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            Chugchilán es un hermoso pueblo en la provincia de Cotopaxi. Un lugar lleno de actividades que te conectan
            con la naturaleza y la cultura más pura de las nacionalidades latinoamericanas, con sus costumbres y
            actividades.
          </p>
          <p className="mt-4 text-sm text-white/80">
            Vive el turismo comunitario, aprende de los saberes ancestrales y apoya a los emprendimientos locales.
          </p>
          <Link
            to="/turismo"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primario transition hover:scale-105"
          >
            Conoce Más
          </Link>
        </div>
      </div>
    </section>
  );
}
