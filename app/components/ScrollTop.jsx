'use client'
import { Button } from './Button'
import { IoMdRocket } from 'react-icons/io'
import { useState, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
var _ = require('lodash')

export default function ScrollTop({ classes }) {
  const [scrollVisible, setScrollVisible] = useState(false)
  const pathName = usePathname()

  useLayoutEffect(() => {
    setScrollVisible(document.body.scrollHeight > window.innerHeight * 1.2) //if over 120vh
  }, [pathName])

  return (
    <Button
      disabled={!scrollVisible}
      title='Scroll top'
      content={<IoMdRocket color='#1e293b' style={{ fontSize: '1.6rem' }} />}
      clickFunc={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      classes={`w-min disabled:invisible ${classes}`}
    />
  )
}
