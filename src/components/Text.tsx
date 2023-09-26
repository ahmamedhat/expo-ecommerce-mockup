import { Text as RNText } from "react-native";
import React, { ReactNode } from "react";
import { FONTS } from "@utils/constants";

type Props = {
  classNames?: string;
  fontWeight?: string;
  children: ReactNode;
};

const Text = ({ classNames, fontWeight, children }: Props) => {
  return (
    <RNText
      style={{ fontFamily: fontWeight ?? FONTS.regular }}
      className={classNames}
    >
      {children}
    </RNText>
  );
};

export default Text;
