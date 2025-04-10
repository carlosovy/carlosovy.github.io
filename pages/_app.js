import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className={`${outfit.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}