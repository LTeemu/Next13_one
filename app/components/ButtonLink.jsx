'use client'
import Link from 'next/link'

export default function ButtonLink({ text, href, clickFunc, classes }) {
  return (
    <Link href={href} onClick={clickFunc} className={`font-bold tracking-wider border-4 rounded-md whitespace-nowrap buttonHover ${classes}`}>
      <p className='mx-1'>{text}</p>
    </Link>
  )
}
