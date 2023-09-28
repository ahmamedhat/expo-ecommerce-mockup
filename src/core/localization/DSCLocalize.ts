import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { setItem, storage } from "@core/storage";
import en from "./translations/en";
import ar from "./translations/ar";

const LANGUAGES = {
  en,
  ar,
};

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,
  detect: (callback: any) => {
    const language = storage.getString("user-language");
    console.log("language here is", language);

    if (!language) {
      storage.set("user-language", "en");
      callback("en");
    }
    callback(language);
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    storage.set("user-language", language);
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
