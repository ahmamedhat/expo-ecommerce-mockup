import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { Colors, IconSizes } from "@utils/constants";
import Text from "./Text";

interface IProps {
  title: string;
  onPress: () => void;
  buttonClassNames?: string;
  textClassNames?: string;
  isLoading?: boolean;
  children?: ReactNode
}

const ButtonOutline = ({
  title,
  onPress,
  buttonClassNames,
  textClassNames,
  isLoading,
  children
}: IProps) => {
  const renderIconWithText = () => {
    return (
      <View className="flex flex-row">
        {children}
        <Text classNames={clsx("text-lg ml-3", textClassNames)}>{title}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      disabled={isLoading}
      className={clsx(
        "border border-gray-300 flex rounded-[8px] items-center justify-center h-[48px] mt-3",
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
