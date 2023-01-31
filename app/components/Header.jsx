import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/eyeball-svgrepo-com.svg'
import Navigation from './Navigation'

export default function Header() {

  return (
    <header className='flex items-center justify-between px-8 py-4'>
      <Link href='#' className='flex items-center'>
        <div className='relative h-[2.2rem] aspect-square'>
          <Image src={Logo} alt={''} priority fill />
        </div>
        <p className='ml-3 text-2xl tracking-wider text-[#2b2a33] font-normal font-tourney'>Logo</p>
      </Link>

      <Navigation/>
    </header>
  )
}
