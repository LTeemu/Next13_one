import { GrGithub, GrFacebookOption, GrInstagram, GrLinkedinOption, GrYoutube, GrTwitter } from 'react-icons/gr'
import ScrollTop from './ScrollTop'
import ButtonLink from './ButtonLink'

export default function Footer() {
  return (
    <footer className='px-4 mt-4 mb-2'>
      {/*Buttons*/}
      <div className='flex gap-x-3'>
        <ButtonLink
          title='Github'
          content={<GrGithub style={{ fontSize: '1.4rem' }} />}
          href='https://github.com/lteemu'
          classContainer='bg-[#2b3137] text-white p-1'
          blank
        />
        <ButtonLink
          title='Twitter'
          content={<GrTwitter style={{ fontSize: '1.4rem' }} />}
          href='https://twitter.com'
          classContainer='bg-[#54abef] text-white p-1'
          blank
        />
        <ButtonLink
          title='Facebook'
          content={<GrFacebookOption style={{ fontSize: '1.4rem' }} />}
          href='https://facebook.com'
          classContainer='bg-[#3c569e] text-white p-1'
          blank
        />
        <ButtonLink
          title='Youtube'
          content={<GrYoutube style={{ fontSize: '1.4rem' }} />}
          href='https://youtube.com'
          classContainer='bg-[#ce1719] text-white p-1'
          blank
        />
        <ButtonLink
          title='Instagram'
          content={<GrInstagram style={{ fontSize: '1.4rem' }} />}
          href='https://instagram.com'
          classContainer='text-white p-1 instagramBG'
          blank
        />
        <ButtonLink
          title='LinkedIn'
          content={<GrLinkedinOption style={{ fontSize: '1.4rem' }} />}
          href='https://linkedin.com'
          classContainer='bg-[#0076b4] text-white p-1'
          blank
        />
      </div>

      {/*Copyright + rocket*/}
      <div className='flex items-baseline justify-between mt-4'>
        <p className='text-2xl text-slate-500 font-tourney'>
          &copy;
          <span className='ml-1'>
            TL
            {new Date().getFullYear()}
          </span>
        </p>
        <ScrollTop classes={'px-1 py-2.5'} />
      </div>
    </footer>
  )
}
