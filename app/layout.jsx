import './globals.scss'
import { Assistant, Tourney } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const assistant = Assistant({ subsets: ['latin'], weight: 'variable', variable: '--font-assistant' })
const tourney = Tourney({ subsets: ['latin'], weight: ['400'], variable: '--font-tourney' })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${assistant.variable} ${tourney.variable} overflow-x-hidden font-assistant bg-white text-black flex flex-col min-h-screen`}>
        <Header />
        <main className='flex flex-col flex-1'>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
