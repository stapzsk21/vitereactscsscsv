import { createContext, useEffect, useState, useContext } from "react";
import { loadTranslations } from "./translationsLoader";

const TranslationContext = createContext();

export const TranslationProvider = ({ initialLanguage, children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    if (language) {
      loadTranslations()
        .then((data) => {
          console.log('Loaded translations:', data);
          setTranslations(data[language] || {});
        })
        .catch((error) => {
          console.error('Error loading translations:', error);
        });
    }
  }, [language]);

  console.log('Current translations:', translations);

  return (
    <TranslationContext.Provider value={{ translations, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
