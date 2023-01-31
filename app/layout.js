import './globals.css'
import { Assistant, Nabla, Tourney } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const assistant = Assistant({ subsets: ['latin'], weight: 'variable', variable: '--font-assistant' })
const tourney = Tourney({ subsets: ['latin'], weight: ['400'], variable: '--font-tourney' })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${assistant.variable} ${tourney.variable} font-assistant bg-white text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}