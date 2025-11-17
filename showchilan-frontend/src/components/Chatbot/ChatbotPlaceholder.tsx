import { useState } from 'react';

export function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-secundario">Showchilan</p>
              <h5 className="text-lg font-semibold text-primario">Asistente turístico</h5>
            </div>
            <button
              type="button"
              className="text-slate-500 transition hover:text-primario"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar panel del asistente"
            >
              ✕
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Aquí se integrará un chatbot para responder preguntas sobre Chugchilán. (Funcionalidad en desarrollo)
          </p>
          {/* TODO: integrar lógica real del chatbot y comunicación con backend */}
        </div>
      )}

      <button
        type="button"
        className="flex items-center gap-2 rounded-full bg-secundario px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:translate-y-[-2px] hover:bg-secundario/90"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          💬
        </span>
        Asistente turístico (próximamente)
      </button>
    </div>
  );
}
