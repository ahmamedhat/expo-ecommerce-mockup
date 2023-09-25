import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Text className='text-red-400'>Open up App.tsx to start working on your app!</Text>
      <Link href={"/Login"}>Login</Link>
      <StatusBar style="auto" />
    </View>
  );
}