// src/pages/About.js
import { useTranslation } from '../TranslationContext';

function About() {
  const { translations } = useTranslation();
  console.log(translations);
  const { title, description } = translations.about || {};

  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default About;
