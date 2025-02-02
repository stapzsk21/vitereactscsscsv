import { useTranslation } from "../TranslationContext";
import { APP_CONSTANTS } from "../constants/site.config";

function LanguageSwitcher() {
  const { setLanguage, language } = useTranslation();
  const { languages } = APP_CONSTANTS;

  return (
    <div className="language-switcher">
      {languages.list.en && (
        <button 
          onClick={() => setLanguage("en")}
          className={language === "en" ? "active" : ""}
        >
          EN
        </button>
      )}
      {languages.list.ru && (
        <button 
          onClick={() => setLanguage("ru")}
          className={language === "ru" ? "active" : ""}
        >
          RU
        </button>
      )}
      {languages.list.es && (
        <button 
          onClick={() => setLanguage("es")}
          className={language === "es" ? "active" : ""}
        >
          ES
        </button>
      )}
      {languages.list.de && (
        <button 
          onClick={() => setLanguage("de")}
          className={language === "de" ? "active" : ""}
        >
          DE
        </button>
      )}
      {languages.list.fr && (
        <button 
          onClick={() => setLanguage("fr")}
          className={language === "fr" ? "active" : ""}
        >
          FR
        </button>
      )}
      {languages.list.it && (
        <button 
          onClick={() => setLanguage("it")}
          className={language === "it" ? "active" : ""}
        >
          IT
        </button>
      )}
      {languages.list.pl && (
        <button 
          onClick={() => setLanguage("pl")}
          className={language === "pl" ? "active" : ""}
        >
          PL
        </button>
      )}
      {languages.list.zh && (
        <button 
          onClick={() => setLanguage("zh")}
          className={language === "zh" ? "active" : ""}
        >
          ZH
        </button>
      )}
      {languages.list.tr && (
        <button 
          onClick={() => setLanguage("tr")}
          className={language === "tr" ? "active" : ""}
        >
          TR
        </button>
      )}
      {languages.list.hi && (
        <button 
          onClick={() => setLanguage("hi")}
          className={language === "hi" ? "active" : ""}
        >
          HI
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
