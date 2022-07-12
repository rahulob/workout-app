import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './styles/navbar.module.scss'


export default function Navbar() {
  const [checked, setChecked] = useState(false)
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.hamburger}>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div> */}
      <ul className={styles.nav_ul + " " + (checked ? styles.show : '')} onClick={() => setChecked(!checked)}>
        <List href="/" name="Home" />
        <List href="/history" name="History" />
        <List href="/about" name="About" />
        <List href="/account" name="Account" />
      </ul>
    </nav>
  )
}


function List(props: {
  href: string,
  name: string
}) {
  const [path, setPath] = useState<string>()

  // we used use effect to only use window when it is rendered
  useEffect(() => {
    setPath(window.location.pathname)
  })

  return (
    <li className={path == props.href ? styles.active : ""}>
      <A {...props} />
    </li>
  )
}

function A(props: any) {
  return (
    <Link href={props.href} className={styles.link}>
      {props.name}
    </Link>
  )
}