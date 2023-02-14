'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/eyeball-svgrepo-com.svg'
import Navigation from './Navigation'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()

  return (
    <header className='flex items-center justify-between px-8 py-4'>
      <Link href='/' className={`flex items-center ${path === '/' && 'pointer-events-none'}`} tabIndex={path === '/' ? -1 : 0}>
        <div className='relative h-[2.2rem] aspect-square'>
          <Image src={Logo} alt={''} priority fill />
        </div>
        <p className='ml-2.5 text-3xl tracking-wider text-[#2b2a33] font-normal font-tourney'>Logo</p>
      </Link>

      <Navigation />
    </header>
  )
}
