import Head from 'next/head'
import React, { useState } from 'react'
import DataItem from '../Components/data-item'
import styles from './styles/Data.module.scss'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuth } from '../lib/AuthContext'
import { TextField } from '@mui/material'
import toast from 'react-hot-toast'

type Props = any

export default function Data({ title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Today</h1>
        <div className={styles.data}>
          {/* Todo: Map data items here*/}
          {/*  */}
          <AddExcercise />
        </div>
      </div>
    </>
  )
}


// Todo: put logic for 'day-id' and 'excercise-id'
// right now its hard coded 
const AddExcercise = () => {
  const { user } = useAuth()
  const [excerciseName, setExcerciseName] = useState('')
  const [sets, setSets] = useState(0)

  const addExcercise = async () => {
    if (!excerciseName && sets)
      return
    let reps: any = {}
    for (let i = 1; i <= sets; i++) {
      reps[i] = 0;
    }
    const userRef = doc(db, 'data', user)
    await setDoc(userRef, {
      'date-id': {
        'excercise-id': {
          name: excerciseName,
          reps,
        }
      }
    }, { merge: true })
      .then(() => {
        toast.success(`${excerciseName} added`)
        setExcerciseName('')
        setSets(0)
      })
      .catch(() => toast.error('Error occured. Try Again!'))
  }
  return (
    <div className={styles.add_excercise}>
      <TextField
        type='text'
        placeholder='Name of the excercise'
        value={excerciseName}
        onChange={(e: any) => setExcerciseName(e.target.value)}
      />
      <TextField
        type='number'
        placeholder='Number of sets'
        value={sets}
        onChange={(e: any) => setSets(e.target.value)}
      />
      <button className={styles.btn} onClick={addExcercise}>Add Excercise</button>
    </div>
  )
}