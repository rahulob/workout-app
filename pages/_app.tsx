import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import Navbar from '../Components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
