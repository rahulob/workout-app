import Head from 'next/head'
import React from 'react'
import DataItem from '../Components/data-item'
import styles from '../styles/Home.module.scss'
import Login from './login'

type Props = any

export default function Data({ title }: Props) {
  if (true)//put user here
    return (<Login />)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Today</h1>
        <div className={styles.data}>
          <DataItem name="Bench Press" sets={3} reps={12} />
          <DataItem name="Dumbell Press" sets={3} reps={12} />
          <DataItem name="Cable flies" sets={3} reps={12} />
          <DataItem name="Machine Flies" sets={3} reps={12} />
          <DataItem name="Dips" sets={3} reps={12} />
          <DataItem name="Crunches" sets={3} reps={12} />
          <button className={styles.add_excercise}>Add Excercise</button>
        </div>
      </div>
    </>
  )
}