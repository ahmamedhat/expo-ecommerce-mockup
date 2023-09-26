import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const Layout = (props: Props) => {
  return (
   <Stack>
    <Stack.Screen name='login' options={{
    headerShown: false
   }}/>
    <Stack.Screen name='signup'/>
   </Stack>
  )
}

export default Layout