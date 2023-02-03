'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQBox({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='px-2 py-1 rounded-md shadow-[inset_0_0_1.6px_1.6px_rgba(0,0,0,0.06)] bg-gray-50'>
      <button className='flex w-full text-left rounded-2xl' onClick={() => setOpen(!open)}>
        <p className='flex-1'>{question}</p>
        <FaChevronDown
          style={{ fontSize: '1.2rem' }}
          color='#2b2a33'
          className={`self-center transition-[transform] duration-200 ${open ? 'rotate-0' : 'rotate-90'}`}
        />
      </button>

      <p
        className={`backdrop-brightness-[0.96] whitespace-pre-wrap rounded-md px-2 transition-all overflow-hidden duration-200 ${
          open ? 'py-1 mt-1 border border-gray-200 max-h-[750px]' : 'max-h-0 py-0'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
