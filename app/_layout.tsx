import React from "react";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@redux/store";

type Props = {};

SplashScreen.preventAutoHideAsync();

const Layout = (props: Props) => {
  return (
    <Provider store = {store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)"></Stack.Screen>
        <Stack.Screen name="(tabs)"></Stack.Screen>
      </Stack>
    </Provider>
  );
};

export default Layout;
