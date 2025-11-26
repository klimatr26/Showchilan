import { useLanguage } from '../../context/LanguageContext';

export function AboutProjectSection() {
  const { translations: t } = useLanguage();

  return (
    <section className="bg-primario py-16 text-white">
      <div className="mx-auto max-w-4xl text-center px-4">
        <p className="text-xs uppercase tracking-[0.6em] text-secundario">{t.about.eyebrow}</p>
        <h3 className="mt-4 text-3xl font-semibold">{t.about.title}</h3>
        <div className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.4em] text-white/80">
          {t.about.logo}
        </div>
        <p className="mt-6 text-lg leading-relaxed text-white/90">
          {t.about.description}
        </p>
      </div>
    </section>
  );
}
