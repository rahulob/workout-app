import React from 'react'
import checkUser from '../Components/checkUser'
import Data from '../Components/Data'


export default function Home() {
  checkUser()
  return (
    <Data title="Home" />
  )
}