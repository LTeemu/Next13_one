'use client'
import { usePathname } from 'next/navigation'

export default function Head() {
  const pathName = usePathname()
  const TITLE = pathName === '/' ? 'NextOne' : 'NextOne - ' + (pathName.charAt(1).toUpperCase() + pathName.slice(2))

  return (
    <>
      <title>{TITLE}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='Practice app made with Next13 and Tailwind' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
