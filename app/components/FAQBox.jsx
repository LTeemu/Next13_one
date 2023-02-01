'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQBox({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='px-2 py-1 border border-gray-200 rounded-md shadow-inner bg-gray-50'>
      <button className='flex w-full text-left rounded-2xl' onClick={() => setOpen(!open)}>
        <p className='flex-1'>{question}</p>
        <FaChevronDown
          style={{ fontSize: '1.2rem' }}
          color='#2b2a33'
          className={`self-center transition-[transform] ease-in-out duration-200 ${open ? 'rotate-0' : 'rotate-90'}`}
        />
      </button>

      <p
        className={`backdrop-brightness-[0.96] duration-200 rounded-md px-2 transition-all overflow-hidden ${
          open ? 'max-h-96 py-1 mt-1 border border-gray-200' : 'max-h-0 py-0'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
