'use client'
export function tempClick() {
  console.log('Clicked button')
}

export function Button({ content, clickFunc, classes, disabled, title }) {
  return (
    <button title={title} disabled={disabled ? disabled : false} onClick={clickFunc} className={`button active:buttonDown ${classes}`}>
      {content}
    </button>
  )
}
