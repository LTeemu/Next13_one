'use client'
import { TfiMenu } from 'react-icons/tfi'
import { useState } from 'react'
import ButtonLink from './ButtonLink'
import { Button } from './Button'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
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
          return (
            <ButtonLink
              key={link.name}
              href={link.href}
              clickFunc={closeMenu}
              content={link.name}
              classContainer={`w-[90%] rounded-md px-2 py-0.5 mx-auto text-[#2b2a33]`}
            />
          )
        })}
      </nav>

      {/*Mobile - Under 768px md:*/}
      <div className='block md:hidden'>
        {/*Hamburger button*/}
        <Button content={<TfiMenu color='#2b2a33' style={{ fontSize: '1.8rem' }} />} clickFunc={openMenu} classes='text-white p-1 rounded-md' />

        {/*Hamburger menu*/}
        <div>
          {/*Dark background*/}
          <div
            onClick={closeMenu}
            className={`fixed top-0 left-0 cursor-pointer z-10 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-opacity duration-500 ease-in-out ${
              open ? 'opacity-1 backdrop-blur-sm' : 'opacity-0 pointer-events-none'
            }`}
          ></div>

          {/*Link container*/}
          <div
            className={`fixed border-r-[0.2em] border-gray-200 top-0 gap-y-4 py-4 flex flex-col overflow-x-hidden z-20 w-[70vw] h-screen bg-white ease-in-out transition-all duration-500 ${
              open ? 'left-0' : '-left-full'
            }`}
          >
            {links.map((link, i) => {
              return (
                <ButtonLink
                  key={link.name}
                  href={link.href}
                  clickFunc={closeMenu}
                  content={link.name}
                  classContainer={`w-[90%] py-1 px-2 rounded-md mx-auto text-white ${i % 2 ? 'bg-secondary' : 'bg-primary'}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
