'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQBox({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='px-2 py-1.5 border-[0.08em] rounded-md border-gray-200 bg-gray-50'>
      <button className='flex w-full text-left rounded-2xl' onClick={() => setOpen(!open)}>
        <p className='flex-1'>{question}</p>
        <FaChevronDown
          style={{ fontSize: '1.2rem' }}
          color='#1e293b'
          className={`self-center transition-[transform] duration-200 ${open ? 'rotate-0' : 'rotate-90'}`}
        />
      </button>

      <p
        className={`backdrop-brightness-[0.97] whitespace-pre-wrap rounded-md px-2 transition-all overflow-hidden duration-200 ${
          open ? 'py-1 mt-1 border-[0.08em] border-gray-200 max-h-[750px]' : 'max-h-0 py-0'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
