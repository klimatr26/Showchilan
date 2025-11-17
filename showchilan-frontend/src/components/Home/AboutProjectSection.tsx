export function AboutProjectSection() {
  return (
    <section className="bg-primario py-16 text-white">
      <div className="mx-auto max-w-4xl text-center px-4">
        <p className="text-xs uppercase tracking-[0.6em] text-secundario">Sobre el Proyecto</p>
        <h3 className="mt-4 text-3xl font-semibold">Auspiciado por</h3>
        <div className="mt-6 inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.4em] text-white/80">
          Logotipo PUCE
        </div>
        <p className="mt-6 text-lg leading-relaxed text-white/90">
          Proyecto realizado por estudiantes de la PUCE con el objetivo de ayudar e impulsar a comunidades del país que
          necesitan de los conocimientos para impulsar sus emprendimientos, desarrollo cultural y educación.
        </p>
      </div>
    </section>
  );
}
