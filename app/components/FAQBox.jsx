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
        className={`backdrop-brightness-[0.97] border-gray-200 border-x-[0.08em] whitespace-pre-wrap rounded-md px-2 transition-all overflow-hidden duration-200 ${
          open ? 'py-1 mt-1 max-h-[750px] border-y-[0.08em]' : 'max-h-0'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
