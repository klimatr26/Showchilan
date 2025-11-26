import { useLanguage } from '../../context/LanguageContext';

const categoryImages = [
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501117716987-c8e1ecb210cc?auto=format&fit=crop&w=800&q=80',
];

export function CategoryCards() {
  const { translations: t } = useLanguage();

  return (
    <section className="bg-[#f8f5ef] py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {t.categories.map((category, index) => (
          <article key={category.title} className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <img src={categoryImages[index]} alt={category.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primario">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
