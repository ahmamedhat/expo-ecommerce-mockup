import React from "react";
import { Stack } from "expo-router";
import { NavigationHeader } from "@components";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{headerShown: false}}/>
      <Stack.Screen name="signup" options={{header : () => <NavigationHeader title="Signup"/>}}/>
    </Stack>
  );
};

export default Layout;
