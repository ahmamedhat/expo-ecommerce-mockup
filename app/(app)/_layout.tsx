import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAppSelector } from '@redux/hooks'
import { RouteNames } from '@utils/constants'

type Props = {}

const Layout = (props: Props) => {
  const user = useAppSelector((state) => state.user.user)
  console.log('hey we hit here', user);
  

  if (!user) return <Redirect href={RouteNames.LOGIN}/>

  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name='home' />
        <Tabs.Screen name='categories' />
        <Tabs.Screen name='settings' />
    </Tabs>
  )
}

export default Layout