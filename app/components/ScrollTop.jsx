'use client'
import { Button } from './Button'
import { IoMdRocket } from 'react-icons/io'

export default function ScrollTop({ classes }) {
  return <Button text={<IoMdRocket style={{fontSize: '1.6rem'}} />} clickFunc={() => window.scrollTo({ top: 0, behavior: 'smooth' })} classes={classes} />
}
