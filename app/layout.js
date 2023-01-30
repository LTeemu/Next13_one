import './globals.css'
import { Comfortaa } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const comfortaa = Comfortaa({ subsets: ['latin'], weight: 'variable', variable: '--font-comfortaa' })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${comfortaa.variable} font-comfortaa bg-white text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}