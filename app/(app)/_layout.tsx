import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useAppSelector } from "@redux/hooks";
import { RouteNames, ScreenNames } from "@utils/constants";
import { BottomBar } from "@components";

type Props = {};

const Layout = (props: Props) => {
  const user = useAppSelector((state) => state.user.user);
  if (!user) return <Redirect href={RouteNames.LOGIN} />;

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tabs.Screen name={ScreenNames.HOME} />
      <Tabs.Screen name={ScreenNames.CART} />
      <Tabs.Screen name={ScreenNames.SETTINGS} />
    </Tabs>
  );
};

export default Layout;
