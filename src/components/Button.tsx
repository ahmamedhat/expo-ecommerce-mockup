import { ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";
import clsx from "clsx";
import { Colors, IconSizes } from "@utils/constants";
import Text from "./Text";

interface IProps {
  title: string;
  onPress: () => void;
  buttonClassNames?: string;
  textClassNames?: string;
  isLoading?: boolean;
}

const Button = ({
  title,
  onPress,
  buttonClassNames,
  textClassNames,
  isLoading,
}: IProps) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={clsx(
        "bg-primaryButton flex rounded-[8px] items-center justify-center h-[48px] shadow-sm",
        buttonClassNames
      )}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.ButtonIcon} size={IconSizes.Button} />
      ) : (
        <Text classNames={clsx("text-lg text-white", textClassNames)}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
