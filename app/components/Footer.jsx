import { VscGithub } from 'react-icons/vsc'
import ScrollTop from './ScrollTop'

export default function Footer() {
  return (
    <footer className='flex items-center justify-center my-5'>
      <a href='https://github.com/lteemu' target='_blank' aria-label='Github' rel='noreferrer' className='mr-2 hover:opacity-80'>
        <VscGithub style={{ fontSize: '1.4rem' }} />
      </a>
      TL <span className='ml-1'> &copy; {new Date().getFullYear()}</span>
      <ScrollTop classes={'absolute right-4 p-0.5 max-w-min'} />
    </footer>
  )
}