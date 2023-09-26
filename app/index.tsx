import { View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "expo-router";
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
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (!fontsLoaded && !fontError) {
          return
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded, fontError]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
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
      <Link href="(auth)/login">Get Started</Link>
      <Text
        className="font-light text-lg"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        hey this is poppins
      </Text>
      <Entypo name="rocket" size={30} />
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
