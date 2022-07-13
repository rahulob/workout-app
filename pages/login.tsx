import { Button, TextField } from '@mui/material'
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
  if (context.user) {
    router.push('/home')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: any) => {
    e.preventDefault()
    context.signIn(email, password)
      .then(() => toast.success("Signed In"))
      .catch(() => toast.error('Invalid credentials'))
  }
  return (
    <>
      <div className={styles.login} onClick={handleCancel}>
      </div>
      <form className={styles.form}>
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
        <Button variant='contained'><span>Sign UP</span></Button>
        <Button variant='outlined' onClick={context.signInWithGoogle}>
          <Image src='/google-logo.svg' width={35} height={35} />
          <span style={{ marginLeft: '10px' }}>Sign In with Google</span>
        </Button>
        <button className={styles.cancel} onClick={handleCancel}>
          <Image src='/close.svg' width={40} height={40} />
        </button>
      </form>
    </>
  )
}