'use client'
import { Button } from './Button'
import { IoMdRocket } from 'react-icons/io'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
var _ = require('lodash')

export default function ScrollTop({ classes }) {
  const [scrollVisible, setScrollVisible] = useState(false)
  const pathName = usePathname()
  const bodyRef = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      bodyRef.current = document.body
      const resizeObserver = new ResizeObserver(
        _.debounce(() => {
          setScrollVisible(bodyRef.current.scrollHeight > window.innerHeight * 1.1) //Visible if over 110vh
        }, 100)
      )
      resizeObserver.observe(bodyRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    bodyRef.current && setScrollVisible(bodyRef.current > window.innerHeight * 1.1)
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
