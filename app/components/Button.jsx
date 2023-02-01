'use client'

export function tempClick() {
  console.log('Clicked button')
}

export function Button({ text, clickFunc, classes }) {
  return (
    <button onClick={clickFunc} className={`font-bold tracking-wider border-4 rounded-md w-min md:w-full whitespace-nowrap buttonHover ${classes}`}>
      {text}
    </button>
  )
}

