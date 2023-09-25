import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center p-6">
      <View className="flex-1 justify-center mx-auto">
        <Text className="font-bold">Hello World</Text>
        <Text className="font-light">This is the first page of your app.</Text>
        
        <TouchableOpacity className="bg-red-300 p-2 rounded-lg items-center justify-center my-2">
        <Link className="text-white" href={'/auth/login'}>Login</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
