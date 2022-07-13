import { Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import checkUser from '../Components/checkUser'
import { useAuth } from '../lib/AuthContext'

export default function Account() {
  const context = useAuth()
  checkUser()
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <div>
        <h1>Account</h1>
        <Button variant='contained' onClick={context.logOut}>Log Out</Button>
      </div>
    </>
  )
}