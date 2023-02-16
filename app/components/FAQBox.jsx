import { FaChevronDown } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'
import useEventListener from '@/hooks/useEventListener'
var _ = require('lodash')

export default function FAQBox({ question, answer, open, clickFunc, duration }) {
  const [calcMaxH, setCalcMaxH] = useState(0)
  const dropdown = useRef()

  useEffect(() => {
    setCalcMaxH(`calc(${dropdown.current.scrollHeight}px + 0.75rem)`) //0.75rem = py-1 + mt-1
  }, [])

  useEventListener(
    'resize',
    _.debounce(() => setCalcMaxH(`calc(${dropdown.current.scrollHeight}px + 0.75rem)`), 800)
  )

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
        style={{
          maxHeight: open ? calcMaxH : 0,
          transitionProperty: 'max-height, padding, margin',
          transitionTimingFunction: 'linear',
          transitionDuration: duration,
        }}
        className={`backdrop-brightness-[0.97] border-gray-200 border-x-[0.08em] whitespace-pre-wrap rounded-md px-2 overflow-hidden ${
          open && `py-1 mt-1 border-y-[0.08em]`
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
