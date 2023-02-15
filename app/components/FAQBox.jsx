import { FaChevronDown } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'
import useEventListener from '@/hooks/useEventListener'
var _ = require('lodash')

export default function FAQBox({ question, answer, open, clickFunc, maxHeight }) {
  const [calcMaxH, setCalcMaxH] = useState(0)
  const ref = useRef()

  useEffect(() => {
    setCalcMaxH(`calc(${ref.current.scrollHeight}px + 0.75rem)`) //0.75rem = py-1 + mt-1
  }, [])

  useEventListener(
    'resize',
    _.debounce(() => setCalcMaxH(`calc(${ref.current.scrollHeight}px + 0.75rem)`), 1000)
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
        ref={ref}
        style={{ maxHeight: open ? calcMaxH : 0, transition: `linear ${(ref?.current?.scrollHeight * 2).toFixed(0)}ms` }}
        className={`backdrop-brightness-[0.97] border-gray-200 border-x-[0.08em] whitespace-pre-wrap rounded-md px-2 ease-out overflow-hidden ${
          open && `py-1 mt-1 border-y-[0.08em]`
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
