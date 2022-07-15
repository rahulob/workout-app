import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import Navbar from '../Components/navbar'
import { AuthContextProvider } from '../lib/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster containerClassName='toaster' position='top-right' />
    </AuthContextProvider>
  )
}

export default MyApp
