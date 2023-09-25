import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Props = {}

const login = (props: Props) => {
  return (
    <Link href={"/home"}>Sign in</Link>
  )
}

export default login