'use client'
import { useState } from "react"

export default function FAQBox({question, answer}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full overflow-hidden border-2 rounded-2xl border-stone-300'>
      <button className='w-full p-2 text-left bg-stone-100' onClick={() => setOpen(!open)}>
        {question}
      </button>
      <p className={`bg-stone-200 duration-200 px-2 transition-all overflow-hidden ${open ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}>{answer}</p>
    </div>
  )
}
