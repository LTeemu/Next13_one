import { FaChevronDown } from 'react-icons/fa'

export default function FAQBox({ question, answer, open, clickFunc, maxHeight }) {
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
        style={{
          maxHeight: open ? `calc(${maxHeight}px + 0.75rem)` : 0,
          transitionProperty: 'max-height, padding, margin',
          transitionTimingFunction: 'linear',
          transitionDuration: (maxHeight * 2).toFixed(0) + 'ms',
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
