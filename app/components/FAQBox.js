import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

export default function FAQBox({ question, answer, open, clickFunc }) {
  const dropdown = useRef();
  const dropdown_height = dropdown.current?.scrollHeight
  const cEase = CustomEase.create("custom", "M0,0,C0.14,0,0.258,0.402,0.31,0.561,0.345,0.668,0.41,0.963,0.418,1,0.424,0.988,0.5,0.85,0.61,0.812,0.743,0.765,0.862,0.874,0.862,0.874,0.862,0.874,0.986,0.987,1,1");

  useEffect(() => {
    open
      ? gsap.to(dropdown.current, { height: `calc(${dropdown_height}px + 0.5rem)`, marginTop: '0.25rem', paddingTop: '0.25rem', paddingBottom: '0.25rem', ease: cEase, duration: 0.8, onComplete: () => gsap.set(dropdown.current, { height: 'auto' }) })
      : gsap.to(dropdown.current, { height: 0, paddingTop: 0, marginTop: 0, paddingBottom: 0, ease: cEase, duration: 0.8 })
  }, [open]);

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

      <p ref={dropdown} className='backdrop-brightness-[0.97] border-gray-200 border-x-[0.08em] h-0 whitespace-pre-wrap rounded-md px-2 overflow-hidden'>
        {answer}
      </p>
    </div>
  )
}
