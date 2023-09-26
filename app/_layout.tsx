import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const Layout = (props: Props) => {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='(auth)'></Stack.Screen>
        <Stack.Screen name='(tabs)'></Stack.Screen>
    </Stack>
  )
}

export default Layout