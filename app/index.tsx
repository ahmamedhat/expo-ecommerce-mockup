import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Props = {}

const index = (props: Props) => {
  return (
    <View className='flex-1 justify-center items-center bg-red-50'>
      <Link href='(auth)/login'>Get Started</Link>
    </View>
  )
}

export default index