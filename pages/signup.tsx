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
  let context = useAuth()
  const router = useRouter()
  function handleCancel() {
    router.push('/about')
  }
  const handleSignUp = (e: any) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error("Password does not match!")
      return
    }
    context.signUp(email, password)
      .then(() => {
        toast.success("Signed Up")
        router.push('/home')
      })
      .catch(() => toast.error('Invalid credentials'))
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className={styles.login} onClick={handleCancel}>
      </div>
      <form className={styles.form}>
        <button className={styles.cancel} onClick={handleCancel}>
          <Image src='/close.svg' width={40} height={40} />
        </button>
        <h1>Sign Up</h1>
        <TextField
          type='email' label='Email' required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type='password' label='Password' required
          value={password} autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          type='password' label='Confirm Password' required
          value={passwordConfirm} autoComplete="new-password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button variant='contained' type='submit' onClick={handleSignUp}><span>Sign UP</span></Button>
        <p>OR</p>
        <Button variant='contained' onClick={() => router.push('/login')}>
          <span>Sign In</span>
        </Button>
        <Button variant='outlined' onClick={context.signInWithGoogle}>
          <Image src='/google-logo.svg' width={30} height={30} />
          <span style={{ marginLeft: '10px' }}>Continue with Google</span>
        </Button>
      </form>
    </>
  )
}