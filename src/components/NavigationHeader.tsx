import { View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Text from "./Text";
import { FONTS, IconNames, IconSizes } from "@utils/constants";
import { router } from "expo-router";

type Props = {
  title: string;
};

const NavigationHeader = ({ title }: Props) => {
  return (
    <View className="px-4 bg-white border-b border-b-gray-300 h-[12vh] justify-end">
      <View className="items-center flex flex-row mb-2">
        <FontAwesome
          name={IconNames.BackArrow}
          size={IconSizes.Header}
          onPress={() => router.back()}
        />
        <Text classNames="mx-auto text-lg" fontWeight={FONTS.bold}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default NavigationHeader;
