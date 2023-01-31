'use client'
import { useState } from "react"

export default function FAQBox({question, answer}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full border-2 rounded-2xl border-stone-300 backdrop-invert-[0.03]'>
      <button className='w-full p-2 text-left rounded-2xl' onClick={() => setOpen(!open)}>
        {question}
      </button>
      <p className={`backdrop-invert-[0.06] duration-200 rounded-b-2xl px-2 transition-all overflow-hidden ${open ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}>
        {answer}
      </p>
    </div>
  )
}
