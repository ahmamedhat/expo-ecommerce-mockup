import { Dimensions } from "react-native";

export const RouteNames = {
  HOME: "Home",
  PROFILE: "Profile",
  NOTIFICATIONS: "Notifications",
};

export enum IconSizes {
  BottomBar = 30,
  Button = 20,
}

export const Colors = {
  PrimaryBackground: "#FFFFFF",
  SecondaryBackground: "#2D2D2D",
  AccentBackground: "#50577A",

  PrimaryButton: "#FF4C3B",
  SuccessButton: "",
  DangerButton: "",
  DisabledButton: "",

  PrimaryText: "white",
  SecondaryText: "#A9A9A9",
  AccentText: "",

  PrimaryIcon: "#2D2D2D",
  SecondaryIcon: "white",

  ButtonIcon: "white",

  Danger: "#bb2124",
};

export const FONTS = {
  thin: "Poppins_100Thin",
  light: "Poppins_300Light",
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  bold: "Poppins_700Bold",
  extraBold: "Poppins_800ExtraBold",
};

export enum DeviceScreen {
  Height = Dimensions.get("window").height,
  Width = Dimensions.get("window").width,
}
