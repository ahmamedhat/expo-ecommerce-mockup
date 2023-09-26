import React from 'react'
import { Tabs } from 'expo-router'

type Props = {}

const Layout = (props: Props) => {
  return (
    <Tabs>
        <Tabs.Screen name='home' />
        <Tabs.Screen name='categories' />
        <Tabs.Screen name='settings' />
    </Tabs>
  )
}

export default Layout