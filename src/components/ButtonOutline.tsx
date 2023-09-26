import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import React from "react";
import clsx from "clsx";
import { Colors, IconSizes } from "@utils/constants";
import Entypo from "@expo/vector-icons/Entypo";
import Text from "./Text";

interface IProps {
  title: string;
  onPress: () => void;
  buttonClassNames?: string;
  textClassNames?: string;
  isLoading?: boolean;
}

const ButtonOutline = ({
  title,
  onPress,
  buttonClassNames,
  textClassNames,
  isLoading,
}: IProps) => {
  const renderIconWithText = () => {
    return (
      <View className="flex flex-row">
        <Entypo name="facebook" size={32} />
        <Text classNames={clsx("text-lg", textClassNames)}>{title}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      disabled={isLoading}
      className={clsx(
        "border border-primaryButton flex rounded-[8px] items-center justify-center h-[48px]",
        buttonClassNames
      )}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.ButtonIcon} size={IconSizes.Button} />
      ) : (
        renderIconWithText()
      )}
    </TouchableOpacity>
  );
};

export default ButtonOutline;
