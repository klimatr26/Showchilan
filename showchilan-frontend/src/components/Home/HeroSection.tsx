import { Link } from 'react-router-dom';
import { ImageCarousel } from './ImageCarousel';
import { useLanguage } from '../../context/LanguageContext';

export function HeroSection() {
  const { translations: t } = useLanguage();

  return (
    <section className="bg-arena pb-12 pt-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-stretch">
        <ImageCarousel />

        <div className="rounded-3xl bg-secundario p-8 text-white shadow-xl">
          <p className="text-xs uppercase tracking-[0.6em] text-white/80">{t.hero.eyebrow}</p>
          <h2 className="mt-2 text-4xl font-semibold leading-tight">{t.hero.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            {t.hero.description1}
          </p>
          <p className="mt-4 text-sm text-white/80">
            {t.hero.description2}
          </p>
          <Link
            to="/turismo"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primario transition hover:scale-105"
          >
            {t.hero.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
