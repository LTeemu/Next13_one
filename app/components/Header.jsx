import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/eyeball-svgrepo-com.svg'
import { BiMenuAltRight } from 'react-icons/bi'

export default function Header() {
  return (
    <header className='flex items-center justify-between px-8 py-4'>
      <Link href='#' className='flex items-center'>
        <div className='relative h-[2.2rem] aspect-square'>
          <Image src={Logo} alt={''} priority fill />
        </div>
        <p className='ml-3 text-2xl tracking-wider text-[#2b3a80] font-normal font-nabla'>Logo</p>
      </Link>

      <nav className='hidden text-sm md:flex gap-x-5'>
        <Link href='#'>Home</Link>
        <Link href='#'>Features</Link>
        <Link href='#'>Pricing</Link>
        <Link href='#'>Feedback</Link>
        <Link href='#'>FAQ</Link>
      </nav>

      <button className='md:hidden'>
        <BiMenuAltRight style={{fontSize: '2.2rem'}}/>
      </button>
    </header>
  )
}
