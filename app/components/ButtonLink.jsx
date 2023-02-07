'use client'
import Link from 'next/link'

export default function ButtonLink({ content, href, clickFunc, classContainer, classContent, blank }) {
  return (
    <Link href={href} onClick={clickFunc && clickFunc} target={blank ? '_blank' : '_self'} className={`button ${classContainer}`}>
      <span className={classContent}>{content}</span>
    </Link>
  )
}
