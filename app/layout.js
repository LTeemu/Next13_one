import './globals.scss'
import { Assistant, Tourney } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const assistant = Assistant({ subsets: ['latin'], weight: 'variable', variable: '--font-assistant', display: 'swap' })
const tourney = Tourney({ subsets: ['latin'], weight: ['400'], variable: '--font-tourney', display: 'swap' })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${assistant.variable} ${tourney.variable} flex min-h-full flex-col overflow-x-hidden font-assistant bg-white text-black`}>
        <Header />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
