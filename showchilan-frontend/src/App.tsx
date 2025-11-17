import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { TurismoPage } from './pages/TurismoPage';
import { ChatbotPlaceholder } from './components/Chatbot/ChatbotPlaceholder';

interface InfoPageProps {
  title: string;
  description?: string;
}

function InfoPage({ title, description }: InfoPageProps) {
  return (
    <section className="bg-arena py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-3xl font-semibold text-primario">{title}</h1>
        <p className="mt-4 text-base text-slate-600">
          {description ?? 'Estamos preparando esta sección para conectar mejor con los visitantes.'}
        </p>
      </div>
    </section>
  );
}

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/turismo" element={<TurismoPage />} />
          <Route path="/productos" element={<InfoPage title="Productos locales" />} />
          <Route path="/servicios" element={<InfoPage title="Servicios comunitarios" />} />
          <Route path="*" element={<InfoPage title="Página no encontrada" description="El enlace que abriste no existe." />} />
        </Route>
      </Routes>
      <ChatbotPlaceholder />
    </>
  );
}

export default App;
