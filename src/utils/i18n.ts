import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import the types for i18next
import { InitOptions } from 'i18next';

const options: InitOptions = {
    backend: {
        loadPath: '/assets/i18n/{{ns}}/{{lng}}.json', // Use loadPath instead of loadpath
    },
    debug: false,
    fallbackLng: "en",
    ns: ["language"],
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ",",
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;
