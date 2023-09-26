import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
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
import { FONTS } from "@utils/constants";

type Props = {};

const Page = (props: Props) => {
  const [appIsReady, setAppIsReady] = useState(false);

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
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded, fontError]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <View className="h-[20vh] bg-gray-500 p-4">
        <Text fontWeight={FONTS.bold} classNames="text-4xl text-white mt-auto">
          Lets get you in
        </Text>
      </View>

      <View className="p-4">
        <ButtonOutline
          title="Continue With Facebook"
          onPress={() => {}}
        ></ButtonOutline>
        <View className="h-2" />
        <Button
          title="Sign In With Password"
          onPress={() => router.push("(auth)/login")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Page;
