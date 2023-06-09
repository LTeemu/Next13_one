import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)

export default function FAQBox({ question, answer, open, clickFunc }) {
  const dropdown = useRef()
  const dropdown_height = dropdown.current?.scrollHeight

  useEffect(() => {
    CustomEase.create(
      'custom',
      'M0,0,C0.14,0,0.346,0.08,0.5,0.5,0.559,0.661,0.64,0.963,0.648,1,0.656,0.985,0.656,0.992,0.7,0.932,0.802,0.792,0.918,0.916,0.918,0.916,0.918,0.916,0.993,0.983,1,1'
    )
  }, [])

  useEffect(() => {
    open
      ? gsap.to(dropdown.current, {
          height: `calc(${dropdown_height}px + 0.5rem)`,
          marginTop: '0.25rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          ease: 'custom',
          duration: 0.88,
          onComplete: () => gsap.set(dropdown.current, { height: 'auto' }),
        })
      : gsap.to(dropdown.current, {
          height: 0,
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 0,
          ease: 'custom',
          duration: 0.88,
        })
  }, [open])

  return (
    <div className='px-2 py-1.5 border-[0.08em] rounded-md border-gray-200 bg-gray-50'>
      <button className='flex w-full text-left rounded-2xl' onClick={clickFunc}>
        <p className='flex-1'>{question}</p>
        <FaChevronDown
          style={{ fontSize: '1.2rem' }}
          color='#1e293b'
          className={`self-center transition-[transform] duration-300 ${open ? 'rotate-0' : 'rotate-90'}`}
        />
      </button>

      <p
        ref={dropdown}
        className='backdrop-brightness-[0.97] outline -outline-offset-[0.08em] outline-[0.08em] outline-gray-200 h-0 whitespace-pre-wrap rounded-md px-2 overflow-hidden'
      >
        {answer}
      </p>
    </div>
  )
}
