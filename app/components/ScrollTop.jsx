'use client'
import { Button } from './Button'
import { IoMdRocket } from 'react-icons/io'
import { useState, useEffect } from 'react'

export default function ScrollTop({ classes }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setScrollY(window.scrollY))
    }
  }, [])

  return <Button disabled={scrollY === 0} text={<IoMdRocket style={{ fontSize: '1.4rem' }} />} clickFunc={() => window.scrollTo({ top: 0, behavior: 'smooth' })} classes={`w-min ${classes}`} />
}
