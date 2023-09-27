import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useAppSelector } from "@redux/hooks";

type Props = {};

const Layout = (props: Props) => {
  const user = useAppSelector((state) => state.user);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* {user && (
        // <Stack.Group>
        //   <Stack.Screen name="login" />
        //   <Stack.Screen name="signup" />
        // </Stack.Group>
      )} */}
    </Stack>
  );
};

export default Layout;
