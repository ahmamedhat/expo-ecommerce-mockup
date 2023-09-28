import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { storage } from "@core/storage";
import en from "./translations/en";
import ar from "./translations/ar";
import { LANGUAGES, MMKV_STORAGE_KEYS } from "@utils/constants";

const USER_LANGUAGES = {
  en,
  ar,
};

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,
  detect: (callback: any) => {
    const language = storage.getString(MMKV_STORAGE_KEYS.language);
    console.log("language heee", language);

    if (!language) {
      storage.set(MMKV_STORAGE_KEYS.language, LANGUAGES.english);
      callback(LANGUAGES.english);
    }
    callback(language);
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    storage.set(MMKV_STORAGE_KEYS.language, language);
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: USER_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
