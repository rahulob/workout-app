import React, { useState } from 'react'
import styles from './styles/data-item.module.scss'

type Props = any

export default function DataItem(props: Props) {
  function handleSet(value: number) {
    if (sets < 3 && value === -1) {
      return
    }
    setSets(sets + value)
  }
  const [sets, setSets] = useState(props.sets)
  const [showReps, setShowReps] = useState(false)
  // const [reps, setReps] = useState(props.reps)
  let reps = []

  for (let set = 1; set <= sets; set++) {
    reps.push(<div className={styles.set}>{set}</div>)
  }

  return (
    <div className={styles.main}>
      <span className={styles.title} onClick={() => setShowReps(!showReps)}>{props.name}</span>
      <span className={styles.sets}>
        <button onClick={() => handleSet(1)}>+</button>
        Sets <p>{sets}</p>
        <button onClick={() => handleSet(-1)}>-</button>
      </span>
      <div className={styles.reps + ' ' + (showReps ? styles.show : '')}>
        {reps}
      </div>
    </div>
  )
}