import React from "react";
import { Link } from "expo-router";
import { View } from "react-native";


type Props = {};


const index = (props: Props) => {
 

  return (
    <View className="flex-1 justify-center items-center">
      <Link href={"(auth)/login"}>Logout</Link>
    </View>
  );
};

export default index;
