import { View } from "react-native";
import React, { useState } from "react";
import { Button, Text } from "@components";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { deleteUser } from "@redux/userSlice";

type Props = {};

const Settings = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useAppDispatch()

  const onLogout = () => {
    setLoading(true)

    setTimeout(() => {
      dispatch(deleteUser())
      setLoading(false)
    }, 1000);
  }

  return (
    <View className="flex-1 justify-center p-4">
      <Text classNames="text-xl mb-4">Hey {user?.name} 👋🏻</Text>
      <Button
        title="LOGOUT"
        onPress={onLogout}
        isLoading={loading}
      />
    </View>
  );
};

export default Settings;
