import React from "react";
import { Stack } from "expo-router";
import { useAppSelector } from "@redux/hooks";
import { ScreenNames } from "@utils/constants";

type Props = {};

const Layout = (props: Props) => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.LOGIN} />
      <Stack.Screen name={ScreenNames.SIGNUP} />
    </Stack>
  );
};

export default Layout;
