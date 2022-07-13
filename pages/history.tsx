import React from 'react'
import checkUser from '../Components/checkUser'
import Data from '../Components/Data'

export default function History() {
  checkUser()
  return (
    <Data title='History' />
  )
}