import { Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Text, Input } from "@components";
import { setUser } from "@redux/userSlice";
import { useAppDispatch } from "@redux/hooks";
// import { LockIcon, ProfileIcon, RightArrowIcon } from "@icons";
import { Colors, FONTS, IconNames, IconSizes, Images } from "@utils/constants";
import { InferType, object, string } from "yup";
import { Formik, FormikErrors } from "formik";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
// import { Background } from "@images/background.jpg";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorText, setErrorText] = useState("");
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

  const onLogin = (
    user: UserSchema,
    errors?: FormikErrors<UserSchema>,
    touched?: any
  ) => {
    if (
      !touched.username ||
      (!touched.password &&
        (user.username.length < 1 || user.password.length < 1))
    ) {
      setErrorText("All fields are required");
      setIsModalVisible(true);
      return;
    } else if (errors?.username || errors?.password) {
      setErrorText(errors?.username ?? (errors?.password as string));
      setIsModalVisible(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch(setUser({ name: user.username }));
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
        <TouchableOpacity onPress={() => router.back()} className="absolute top-16 left-4">
          <FontAwesome
            name={IconNames.BackArrow}
            size={IconSizes.Header}
            color={Colors.PrimaryBackground}
            onPress={() => router.back()}
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
                <FontAwesome name="user" size={IconSizes.Button} />
              </Input>

              <Input
                value={values.password}
                onTextChange={handleChange("password")}
                capitalize={false}
                secureTextEntry={true}
                onBlur={handleBlur("password")}
                placeholder="Password"
              >
                <FontAwesome name="lock" size={IconSizes.Button} />
              </Input>
              <Button
                title="LOGIN"
                onPress={() => {
                  onLogin(values, errors, touched);
                }}
                isLoading={loading}
              />
            </View>
          )}
        </Formik>

        <View className="flex flex-row justify-center mt-auto mb-16">
          <Text classNames="text-gray-500">Don&apos;t have an account?</Text>
          <TouchableOpacity onPress={() => router.push("(auth)/signup")}>
            <Text classNames="text-black"> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default LoginScreen;
