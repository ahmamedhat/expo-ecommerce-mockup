import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Page = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-primaryBackground">
      <Link className="font-bold text-2xl" href={"signup"}>
        Signup
      </Link>
    </View>
  );
};

export default Page;
