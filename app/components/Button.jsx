'use client'

export function tempClick() {
  console.log('Clicked button')
}

export function Button({ text, clickFunc, classes, disabled }) {
  return (
    <button disabled={disabled ? disabled : false} onClick={clickFunc} className={`font-bold tracking-wider border-4 whitespace-nowrap buttonHover ${classes} disabled:hidden`}>
      {text}
    </button>
  )
}

