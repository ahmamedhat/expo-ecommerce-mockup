import { Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Text, Input } from "@components";
import { setUser } from "@redux/userSlice";
import { useAppDispatch } from "@redux/hooks";
import {
  Colors,
  FONTS,
  IconNames,
  IconSizes,
  Images,
  RouteNames,
} from "@utils/constants";
import { InferType, object, string } from "yup";
import { Formik } from "formik";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { setItem, storage } from "@core/storage";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const userSchema = object({
    username: string()
      .required("Username is required")
      .min(4, "Username should not be less than 4 characters"),
    password: string()
      .required("Password is required")
      .min(4, "Password should not be less than 4 characters"),
  });

  type UserSchema = InferType<typeof userSchema>;

  const onLogin = (user: UserSchema) => {
    setLoading(true);
    setTimeout(() => {
      setItem("user", user);
      dispatch(setUser({ name: user.username }));

      user.username = "";
      user.password = "";
      router.back();
      router.replace(RouteNames.HOME);
      setLoading(false);
    }, 3000);
  };

  return (
    <View className="flex-1 bg-accentBackground">
      <View className="h-[28vh] self-center w-full">
        <Image
          source={Images.Login}
          className="w-full h-full bg-white"
          resizeMode="cover"
        />
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="absolute top-16 left-4"
        >
          <FontAwesome
            name={IconNames.BackArrow}
            size={IconSizes.Header}
            color={Colors.PrimaryBackground}
          />
        </TouchableOpacity>
        <Text
          classNames="text-white absolute bottom-10 left-4 text-4xl"
          fontWeight={FONTS.bold}
        >
          Sign in
        </Text>
      </View>
      <View className="flex-1 bg-primaryBackground p-4 pt-[6vh] z-10">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => onLogin(values)}
          validationSchema={userSchema}
        >
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <View>
              <Input
                value={values.username}
                onTextChange={handleChange("username")}
                onBlur={handleBlur("username")}
                capitalize={false}
                secureTextEntry={false}
                placeholder="Username"
              >
                <FontAwesome name={IconNames.User} size={IconSizes.Button} />
              </Input>

              <Input
                value={values.password}
                onTextChange={handleChange("password")}
                capitalize={false}
                secureTextEntry={true}
                onBlur={handleBlur("password")}
                placeholder="Password"
              >
                <FontAwesome
                  name={IconNames.Password}
                  size={IconSizes.Button}
                />
              </Input>
              <Button
                title="LOGIN"
                onPress={() => {
                  onLogin(values);
                }}
                isLoading={loading}
              />
            </View>
          )}
        </Formik>

        <View className="flex flex-row justify-center mt-auto mb-16">
          <Text classNames="text-gray-500">Don&apos;t have an account?</Text>
          <TouchableOpacity onPress={() => router.push(RouteNames.SIGNUP)}>
            <Text classNames="text-black"> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default LoginScreen;
