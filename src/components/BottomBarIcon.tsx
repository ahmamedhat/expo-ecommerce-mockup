import { View } from "react-native";
import React from "react";
import { ScreenNames, Colors, IconNames, IconSizes } from "@utils/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface IProps {
  routeName: string;
  isActive: boolean;
}

const BottomBarIcon = ({ routeName, isActive }: IProps) => {
  const renderIcon = () => {
    switch (routeName) {
      case ScreenNames.HOME:
        return (
          <FontAwesome
            name={IconNames.Home}
            size={IconSizes.BottomBar}
            color={isActive ? Colors.PrimaryIcon : Colors.SecondaryIcon}
          />
        );
      case ScreenNames.CART:
        return (
          <FontAwesome
            name={IconNames.Cart}
            size={IconSizes.BottomBar}
            color={isActive ? Colors.PrimaryIcon : Colors.SecondaryIcon}
          />
        );
      case ScreenNames.SETTINGS:
        return (
          <FontAwesome
            name={IconNames.User}
            size={IconSizes.BottomBar}
            color={isActive ? Colors.PrimaryIcon : Colors.SecondaryIcon}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon()}</View>;
};

export default BottomBarIcon;
