import { GrGithub, GrFacebookOption, GrInstagram, GrLinkedinOption, GrYoutube, GrTwitter } from 'react-icons/gr'
import ScrollTop from './ScrollTop'
import ButtonLink from './ButtonLink'

export default function Footer() {
  return (
    <footer className='px-4 mt-4 mb-2'>
      {/*Buttons*/}
        <div className='flex gap-x-2'>
          <ButtonLink content={<GrGithub style={{ fontSize: '1.4rem' }} />} href='https://github.com/lteemu' classContainer='text-slate-800 p-1' blank />
          <ButtonLink content={<GrTwitter style={{ fontSize: '1.4rem' }} />} href='https://twitter.com' classContainer='text-slate-800 p-1' blank />
          <ButtonLink content={<GrFacebookOption style={{ fontSize: '1.4rem' }} />} href='https://facebook.com' classContainer='text-slate-800 p-1' blank />
          <ButtonLink content={<GrYoutube style={{ fontSize: '1.4rem' }} />} href='https://youtube.com' classContainer='text-slate-800 p-1' blank />
          <ButtonLink content={<GrInstagram style={{ fontSize: '1.4rem' }} />} href='https://instagram.com' classContainer='text-slate-800 p-1' blank />
          <ButtonLink content={<GrLinkedinOption style={{ fontSize: '1.4rem' }} />} href='https://linkedin.com' classContainer='text-slate-800 p-1' blank />
        </div>
        
      {/*Copyright + rocket*/}
      <div className='flex justify-between'>
        <p className='mt-4 text-xl text-slate-500 font-tourney'>
          &copy;
          <span className='ml-1'>
            TL
            {new Date().getFullYear()}
          </span>
        </p>
        <ScrollTop classes={'p-1'} />
      </div>
    </footer>
  )
}
