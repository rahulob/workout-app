import Head from 'next/head'
import React from 'react'

type Props = {}

export default function Home({ }: Props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Home</h1>
      </div>
    </>
  )
}