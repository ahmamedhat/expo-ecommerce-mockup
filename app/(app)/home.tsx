import { View } from 'react-native'
import React from 'react'
import { Text } from '@components'

type Props = {}

const Home = (props: Props) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Home</Text>
    </View>
  )
}

export default Home