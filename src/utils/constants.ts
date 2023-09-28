import { Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const RouteNames = {
  ROOT: "/",
  LOGIN: "/(auth)/login",
  SIGNUP: "/(auth)/signup",
  HOME: "/home",
  SETTINGS: "/settings",
  CART: "/cart",
};

export const ScreenNames = {
  LOGIN: "login",
  SIGNUP: "signup",
  HOME: "home",
  SETTINGS: "settings",
  CART: "cart",
};

interface Icons {
  [key: string]: keyof typeof FontAwesome.glyphMap;
}

export const IconNames: Icons = {
  Password: "lock",
  Facebook: "facebook",
  Apple: "apple",
  Google: "google",
  BackArrow: "angle-left",
  Home: "home",
  Cart: "shopping-cart",
  User: "user",
};

export enum IconSizes {
  BottomBar = 30,
  Button = 24,
  Header = 40,
}

export const Images = {
  Login: require("../../assets/images/background.jpg"),
};

export const Colors = {
  PrimaryBackground: "#FFFFFF",
  SecondaryBackground: "#2D2D2D",
  AccentBackground: "#50577A",

  PrimaryButton: "#FF4C3B",
  SuccessButton: "",
  DangerButton: "",
  DisabledButton: "",

  PrimaryText: "#FFFFFF",
  SecondaryText: "#A9A9A9",
  AccentText: "",

  PrimaryIcon: "#FF4C3B",
  SecondaryIcon: "#FFFFFF",

  ButtonIcon: "#FFFFFF",

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
