import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'


// These are icons 
import Home from '@mui/icons-material/Dashboard'
import Calendar from '@mui/icons-material/CalendarMonth'
import Info from '@mui/icons-material/Info'
import Account from '@mui/icons-material/ManageAccounts'

export default function Navbar() {
  return (
    <div className="bg-white p-4 absolute bottom-0 w-screen md:w-max md:top-0 md:my-auto md:rounded-md md:ml-4 md:h-60">
      <ul className='flex justify-around md:flex-col md:h-full'>
        <ListItem href='/home'><Home /></ListItem>
        <ListItem href='/history'><Calendar /></ListItem>
        <ListItem href='/about'><Info /></ListItem>
        <ListItem href='/account'><Account /></ListItem>
      </ul>
    </div>
  )
}


function ListItem(props: {
  href: string,
  name?: string,
  children: ReactJSXElement
}) {

  const [path, setPath] = useState<string>()

  // we used use effect to only use window when it is rendered
  useEffect(() => {
    setPath(window.location.pathname)
  })
  const active = (path === props.href) ? { "color": 'black', "transform": "scale(1.5,1.5)" } : {}
  return (
    <Link href={props.href}>
      <li className='list-item transition-all duration-300 md:hover:scale-150 md:hover:text-slate-900 text-slate-500'
        style={active}>
        {props.children}
        {/* <span className="list-item-name">Home</span> */}
      </li>
      {/* <li className='border-3 border-black transition-all md:hover:scale-105 rounded-md text-center'>
        <span className='px-4 cursor-pointer w-full font-extralight'>
          {props.name}
        </span>
      </li> */}
    </Link>
  )
}