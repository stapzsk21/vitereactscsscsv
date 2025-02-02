import Papa from "papaparse";

// Используем правильный путь к файлам в public/cvs
import enCSV from '/cvs/en.csv?raw';
import ruCSV from '/cvs/ru.csv?raw';
import esCSV from '/cvs/es.csv?raw';

export const loadTranslations = async () => {
  const translations = {};
  const csvFiles = {
    en: enCSV,
    ru: ruCSV,
    es: esCSV
  };

  try {
    for (const [language, csvContent] of Object.entries(csvFiles)) {
      console.log(`Loading ${language} translations:`, csvContent); // логируем содержимое файла

      const parsedData = Papa.parse(csvContent, { 
        header: true,
        skipEmptyLines: true // пропускаем пустые строки
      }).data;

      console.log(`Parsed ${language} data:`, parsedData); // логируем распарсенные данные

      translations[language] = {};
      parsedData.forEach(row => {
        console.log('Processing row:', row); // логируем каждую строку
        if (row.key && row.text) {
          translations[language][row.key] = row.text;
        }
      });
    }

    console.log('Final translations:', translations); // логируем финальный результат
  } catch (error) {
    console.error("Error loading translations:", error);
  }

  return translations;
};
