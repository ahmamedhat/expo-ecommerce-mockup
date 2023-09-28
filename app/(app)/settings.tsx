import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Text } from "@components";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { deleteUser } from "@redux/userSlice";
import { router } from "expo-router";
import { storage } from "@core/storage";
import { LANGUAGES, MMKV_STORAGE_KEYS, translations } from "@utils/constants";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@utils/helpers";

type Props = {};

const Settings = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const language = storage.getString(MMKV_STORAGE_KEYS.language);
  const toggledLanguage =
    language == LANGUAGES.english ? LANGUAGES.arabic : LANGUAGES.english;
  const { t } = useTranslation();

  const onLogout = () => {
    setLoading(true);

    setTimeout(() => {
      dispatch(deleteUser());
      router.replace("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <View className="flex-1 justify-center p-4">
      <Text classNames="text-xl mb-4">Hey {user?.name} 👋🏻</Text>
      <TouchableOpacity
        className="mb-4"
        onPress={() => changeLanguage(toggledLanguage)}
      >
        <Text classNames="text-xl">
          {language == LANGUAGES.english ? "العربية" : "English"}
        </Text>
      </TouchableOpacity>
      <Button
        title={t(translations.logout)}
        onPress={onLogout}
        isLoading={loading}
      />
    </View>
  );
};

export default Settings;
