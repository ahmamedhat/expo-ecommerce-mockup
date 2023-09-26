import { TouchableOpacity, View } from "react-native";
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
import { Text } from "@components";
import { FONTS } from "@utils/constants";

type Props = {};

const index = (props: Props) => {
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
          return
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
    <View
      onLayout={onLayoutRootView}
      className="flex-1 justify-center items-center bg-red-50"
    >
      <TouchableOpacity onPress={() => router.push('(auth)/login')}>
        <Text fontWeight={FONTS.light}>Get Started</Text>
      </TouchableOpacity>
      
      <Text
        classNames="font-light text-lg"
      >
        hey this is poppins
      </Text>
      <Entypo name="rocket" size={30} />
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
