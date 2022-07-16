import { Button, TextField } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../lib/AuthContext'
import styles from '../styles/login.module.scss'
type Props = {}

export default function Login({ }: Props) {
  const router = useRouter()
  let context = useAuth()

  if (context.user)
    router.push('/home')
  function handleCancel(e: any) {
    e.preventDefault()
    router.push('/about')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: any) => {
    e.preventDefault()
    context.signIn(email, password)
      .then(() => {
        toast.success("Signed In")
        router.push('/home')
      })
      .catch(() => toast.error('Invalid credentials'))
  }
  const googleSignIn = (e: any) => {
    e.preventDefault()
    context.signInWithGoogle()
      .then(() => {
        toast.success("Signed In")
        router.push('/home')
      })
      .catch(() => toast.error('Sign In failed. Try Again!'))
  }
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className={styles.login} onClick={handleCancel}>
      </div>
      <form className={styles.form}>
        <button className={styles.cancel} onClick={handleCancel}>
          <Image src='/close.svg' width={40} height={40} />
        </button>
        <h1>Sign In</h1>
        <TextField
          type='email' label='Email' required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type='password' label='Password' required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant='contained' type='submit'
          className={styles.Button}
          onClick={handleSignIn}
        >
          <span>Sign In</span>
        </Button>
        <p>OR</p>
        <Button variant='contained' onClick={() => router.push('/signup')}><span>Sign UP</span></Button>
        <Button variant='outlined' onClick={googleSignIn}>
          <Image src='/google-logo.svg' width={30} height={30} />
          <span style={{ marginLeft: '10px' }}>Continue with Google</span>
        </Button>
      </form>
    </>
  )
}