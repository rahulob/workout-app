import React, { useState } from 'react'
import styles from './styles/data-item.module.scss'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { useAuth } from '../lib/AuthContext'

type Props = {
  date_id: string,
  name: string,
  id: string,
  sets: number
}

export default function DataItem(props: Props) {
  const { user } = useAuth()
  const [sets, setSets] = useState(props.sets)
  const [showReps, setShowReps] = useState(false)

  const addSet = async () => {
    const userRef = doc(db, 'data', user)
    await setDoc(userRef, {
      [props.date_id]: {
        [props.id]: {
          reps: {
            [sets + 1]: 0,
          }
        }
      }
    }, { merge: true })
    console.log('added a set')
    setSets(sets + 1)
  }

  // const [reps, setReps] = useState(props.reps)
  let reps = []

  for (let set = 1; set <= sets; set++) {
    reps.push(<div className={styles.set}>{set}</div>)
  }

  return (
    <div className={styles.main}>
      <span className={styles.title} onClick={() => setShowReps(!showReps)}>{props.name}</span>
      <span className={styles.sets}>
        Sets <p>{sets}</p>
        <button onClick={addSet}>+</button>
      </span>
      <div className={styles.reps + ' ' + (showReps ? styles.show : '')}>
        {reps}
      </div>
    </div>
  )
}