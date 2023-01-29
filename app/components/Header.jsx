import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/eyeball-svgrepo-com.svg'

export default function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-2 bg-red-200 '>
      <Link href='#' className='flex items-center'>
        <div className='relative h-[2.6rem] aspect-square'>
          <Image src={Logo} alt={''} priority fill />
        </div>
        <p className='ml-3 text-2xl font-black'>Logo</p>
      </Link>

      <nav className='hidden md:flex gap-x-5'>
        <Link href='#'>Home</Link>
        <Link href='#'>Features</Link>
        <Link href='#'>Pricing</Link>
        <Link href='#'>Feedback</Link>
        <Link href='#'>FAQ</Link>
      </nav>

      <button className='md:hidden'>Menu</button>
    </header>
  )
}
