'use client'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { useState } from 'react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Feedback', href: '#' },
    { name: 'FAQ', href: '#' },
  ]

  return (
    <>
      {/*Desktop - Over 768px md:*/}
      <nav className='hidden text-sm md:flex gap-x-5'>
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          )
        })}
      </nav>

      {/*Mobile - Under 768px md:*/}
      <div className='block md:hidden'>
        {/*Hamburger button*/}
        <button onClick={() => setOpen(true)}>
          <BiMenuAltRight color='#2b2a33' style={{ fontSize: '2.2rem' }} />
        </button>

        {/*Hamburger Menu*/}
        <div>
          {/*Dark background*/}
          <div
            onClick={() => setOpen(false)}
            className={`fixed top-0 left-0 z-10 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-opacity duration-500 ease-in-out ${
              open ? 'opacity-1 backdrop-blur-sm' : 'opacity-0 pointer-events-none'
            }`}
          ></div>

          {/*Link container*/}
          <div
            className={`fixed top-0 gap-y-4 py-4 flex flex-col overflow-x-hidden left-0 z-20 w-[70vw] h-screen bg-slate-200 linear transition-all duration-500 ${
              open ? 'max-w-3xl' : 'max-w-0'
            }`}
          >
            {links.map((link, i) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`w-[90%] p-1 mx-auto font-bold tracking-wider border-slate-300 text-white border-4 rounded-md whitespace-nowrap buttonHover ${
                    i % 2 ? 'bg-secondary' : 'bg-primary'
                  }`}
                >
                  <p className='ml-2'>{link.name}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
