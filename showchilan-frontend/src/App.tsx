import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { TurismoPage } from './pages/TurismoPage';
import { ChatbotPlaceholder } from './components/Chatbot/ChatbotPlaceholder';
import { useLanguage } from './context/LanguageContext';

interface InfoPageProps {
  titleKey: 'productsTitle' | 'servicesTitle' | 'notFoundTitle';
  descriptionKey?: 'defaultDescription' | 'notFoundDescription';
}

function InfoPage({ titleKey, descriptionKey }: InfoPageProps) {
  const { translations: t } = useLanguage();

  return (
    <section className="bg-arena py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-3xl font-semibold text-primario">{t.info[titleKey]}</h1>
        <p className="mt-4 text-base text-slate-600">
          {descriptionKey ? t.info[descriptionKey] : t.info.defaultDescription}
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
          <Route path="/productos" element={<InfoPage titleKey="productsTitle" />} />
          <Route path="/servicios" element={<InfoPage titleKey="servicesTitle" />} />
          <Route path="*" element={<InfoPage titleKey="notFoundTitle" descriptionKey="notFoundDescription" />} />
        </Route>
      </Routes>
      <ChatbotPlaceholder />
    </>
  );
}

export default App;
