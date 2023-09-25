import React from 'react'
import { Link } from 'expo-router'

type Props = {}

const index = (props: Props) => {
  return (
    <Link href={"auth/login"}>Logout</Link>
  )
}

export default index