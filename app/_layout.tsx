import React from "react";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@redux/store";

type Props = {};

SplashScreen.preventAutoHideAsync();

const Layout = (props: Props) => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </Provider>
  );
};

export default Layout;
