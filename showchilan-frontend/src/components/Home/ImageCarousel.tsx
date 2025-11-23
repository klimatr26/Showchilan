import { useEffect, useState } from 'react';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    caption: 'Paisajes andinos',
  },
  {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    caption: 'Caminatas ecológicas',
  },
  {
    url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comunidad y cultura',
  },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = carouselImages[currentIndex];

  return (
    <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-200 shadow-xl md:h-[480px] lg:h-[520px]">
      <img
        src={currentImage.url}
        alt={currentImage.caption}
        className="h-full w-full object-cover transition duration-500"
      />
      <div className="absolute inset-x-0 top-4 flex items-center justify-between px-6">
        <span className="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primario">
          Carrusel de Imágenes
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-secundario">Chugchilán</p>
        <h3 className="text-2xl font-semibold">{currentImage.caption}</h3>
      </div>
      <div className="absolute bottom-4 right-6 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            className={`h-2 w-6 rounded-full ${index === currentIndex ? 'bg-secundario' : 'bg-white/60'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
