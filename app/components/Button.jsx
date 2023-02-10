'use client'
export function tempClick() {
  console.log('Clicked button')
}

export function Button({ content, clickFunc, classes, disabled }) {
  return (
    <button disabled={disabled ? disabled : false} onClick={clickFunc} className={`button ${classes}`}>
      {content}
    </button>
  )
}
