import { View, TextInput } from "react-native";
import React, { ReactNode } from "react";
import { Colors, IconSizes } from "@utils/constants";

interface IProps {
  children: ReactNode;
  secureTextEntry?: boolean;
  capitalize?: boolean;
  onTextChange: (val: string) => void;
  onBlur: (e: any) => void;
  value: string;
  placeholder: string;
}

const CustomTextInput = ({
  children,
  secureTextEntry,
  capitalize,
  onTextChange,
  onBlur,
  value,
  placeholder,
}: IProps) => {
  return (
    <View className="mb-6">
      <View
        className="absolute z-10 left-6 top-1/2"
        style={{ transform: [{ translateY: -IconSizes.Button / 2 }] }}>
        {children}
      </View>
      <TextInput
        selectionColor={Colors.PrimaryButton}
        secureTextEntry={secureTextEntry}
        autoCapitalize={capitalize ? "none" : "sentences"}
        onChangeText={onTextChange}
        onBlur={onBlur}
        autoCorrect={false}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.SecondaryText}
        className="h-12 bg-inputBack rounded-[8px] pl-16 w-full font-poppins"
        style={{
          color: Colors.PrimaryButton,
        }}
      />
    </View>
  );
};

export default CustomTextInput;
