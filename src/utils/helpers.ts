import { storage } from "@core/storage";
import i18n from "i18next";
import { I18nManager, NativeModules } from "react-native";
import RNRestart from "react-native-restart";
import { MMKV_STORAGE_KEYS } from "./constants";

export const getLanguage = () => storage.getString(MMKV_STORAGE_KEYS.language);

export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
  if (lang === "ar") {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }
  if (__DEV__) NativeModules.DevSettings.reload();
  else RNRestart.restart();
};
