import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <View className='flex-1 justify-center items-center bg-gray-300'>
      <Text className='text-bold'>Signup page</Text>
    </View>
  )
}

export default Page