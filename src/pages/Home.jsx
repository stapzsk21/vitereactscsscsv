// src/pages/Home.js
import { useTranslation } from '../TranslationContext';

function Home() {
  const { translations } = useTranslation();
  const { title, text, button } = translations.home || {};

  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{button}</button>
    </section>
  );
}

export default Home;
