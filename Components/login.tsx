import { Button, TextField } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './styles/login.module.scss'
type Props = {}

export default function Login({ }: Props) {
  const router = useRouter()
  function handleCancel() {
    router.push('/about')
  }
  return (
    <>
      <div className={styles.login} onClick={handleCancel}>
      </div>
      <div className={styles.form}>
        <h1>Sign In</h1>
        <TextField type='email' label='Email' />
        <TextField type='password' label='Password' />
        <Button variant='contained' className={styles.Button}>Sign In</Button>
        <p>OR</p>
        <Button variant='contained' className={styles.Button}>Sign Up</Button>
        <Button variant='outlined' className={styles.Button + styles.inverse}>Continue with Google</Button>
        <button className={styles.cancel} onClick={handleCancel}>
          <Image src='/close.svg' width={40} height={40} />
        </button>
      </div>
    </>
  )
}