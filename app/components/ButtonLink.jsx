'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ButtonLink({ content, href, clickFunc, classContainer, classContent, blank, toggle }) {
  const path = usePathname()

  return (
    <Link
      href={href}
      onClick={clickFunc && clickFunc}
      target={blank ? '_blank' : '_self'}
      className={`button ${!toggle && 'active:buttonDown'} ${path === href && 'pointer-events-none buttonDown saturate-50'} ${classContainer}`}
    >
      <span className={classContent}>{content}</span>
    </Link>
  )
}
