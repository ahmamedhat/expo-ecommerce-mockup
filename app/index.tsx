import { TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Button, ButtonOutline, Text } from "@components";
import {
  FONTS,
  IconNames,
  IconSizes,
  MMKV_STORAGE_KEYS,
  RouteNames,
  translations,
} from "@utils/constants";
import { useTranslation } from "react-i18next";
import { getItem } from "@core/storage";
import { useAppDispatch } from "@redux/hooks";
import { setUser } from "@redux/userSlice";

type Props = {};

const Page = (props: Props) => {
  const user = getItem(MMKV_STORAGE_KEYS.user) as User;
  const dispatch = useAppDispatch();

  const [appIsReady, setAppIsReady] = useState(false);
  const { t } = useTranslation();

  let [fontsLoaded, fontError] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontAwesome.font);
        if (!fontsLoaded && !fontError) {
          return;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded, fontError]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      if (user) {
        dispatch(setUser(user));
        router.replace("/(app)/home");
      }
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded, fontError]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <View className="h-[28vh] bg-gray-500 p-4">
        <Text
          fontWeight={FONTS.bold}
          classNames="text-4xl text-white mt-auto mr-auto"
        >
          {t(translations.landing_screen_welcome)}
        </Text>
      </View>

      <View className="p-4 mt-4">
        <ButtonOutline
          title={t(translations.login_with_facebook)}
          onPress={() => {}}
        >
          <FontAwesome name={IconNames.Facebook} size={IconSizes.Button} />
        </ButtonOutline>
        <ButtonOutline
          title={t(translations.login_with_google)}
          onPress={() => {}}
        >
          <FontAwesome name={IconNames.Google} size={IconSizes.Button} />
        </ButtonOutline>
        <ButtonOutline
          title={t(translations.login_with_apple)}
          onPress={() => {}}
        >
          <FontAwesome name={IconNames.Apple} size={IconSizes.Button} />
        </ButtonOutline>

        <View className="my-12 flex flex-row items-center">
          <View className="h-[2px] bg-gray-300 flex-grow" />
          <Text classNames="mx-2">or</Text>
          <View className="h-[2px] bg-gray-300 flex-grow" />
        </View>
        <Button
          title={t(translations.landing_screen_password_signin)}
          onPress={() => router.push(RouteNames.LOGIN)}
        />
      </View>

      <View className="flex flex-row justify-center mt-auto mb-16">
        <Text classNames="text-gray-500">
          {t(translations.landing_screen_no_account_yet)}
        </Text>
        <TouchableOpacity onPress={() => router.push(RouteNames.SIGNUP)}>
          <Text classNames="text-black"> {t(translations.signup)}</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Page;
