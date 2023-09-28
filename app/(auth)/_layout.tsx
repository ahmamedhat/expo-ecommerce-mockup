import React from "react";
import { Stack } from "expo-router";
import { ScreenNames } from "@utils/constants";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.LOGIN} />
      <Stack.Screen name={ScreenNames.SIGNUP} />
    </Stack>
  );
};

export default Layout;
