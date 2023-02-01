'use client'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import ButtonLink from './ButtonLink'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Feedback', href: '#' },
    { name: 'FAQ', href: '#' },
  ]

  function openMenu() {
    setOpen(true)
    document.body.classList.add('overflow-y-hidden') //Remove ability to scroll up/down while open
  }

  function closeMenu() {
    setOpen(false)
    document.body.classList.remove('overflow-y-hidden')
  }

  return (
    <>
      {/*Desktop - Over 768px md:*/}
      <nav className='hidden text-sm md:flex gap-x-4'>
        {links.map((link) => {
          return <ButtonLink key={link.name} href={link.href} clickFunc={closeMenu} text={link.name} classes={`w-[90%] px-1 py-0.5 mx-auto text-[#2b2a33]`} />
        })}
      </nav>

      {/*Mobile - Under 768px md:*/}
      <div className='block md:hidden'>
        {/*Hamburger button*/}
        <button onClick={openMenu}>
          <BiMenuAltRight color='#2b2a33' style={{ fontSize: '2.2rem' }} />
        </button>

        {/*Hamburger Menu*/}
        <div>
          {/*Dark background*/}
          <div
            onClick={closeMenu}
            className={`fixed top-0 left-0 z-10 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-opacity duration-500 ease-in-out ${
              open ? 'opacity-1 backdrop-blur-sm' : 'opacity-0 pointer-events-none'
            }`}
          ></div>

          {/*Link container*/}
          <div
            className={`fixed top-0 gap-y-4 py-4 flex flex-col overflow-x-hidden left-0 z-20 w-[70vw] h-screen bg-white linear transition-all duration-500 ${
              open ? 'max-w-3xl' : 'max-w-0'
            }`}
          >
            {links.map((link, i) => {
              return <ButtonLink key={link.name} href={link.href} clickFunc={closeMenu} text={link.name} classes={`w-[90%] p-1 mx-auto text-white ${i % 2 ? 'bg-secondary' : 'bg-primary'}`} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
