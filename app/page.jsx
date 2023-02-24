import Image from 'next/image'
import { Button, tempClick } from './components/Button'
import FAQ from './components/FAQ'
import llamaImg from '/public/images/llama.webp'
import bootImg from '/public/images/boot.webp'

export default function Home() {
  return (
    <>
      {/*Top content*/}
      <div className='flex flex-col flex-1 px-6 mx-auto gap-x-4 md:flex-row'>
        {/*Text and buttons*/}
        <div className='grid w-full py-8 text-center md:text-left md:w-1/2 place-content-center'>
          <p className='text-4xl font-light tracking-wider whitespace-pre-wrap'>{'Kicked a llama\nwhile riding'}</p>

          <p className='max-w-[15rem] mt-6 text-slate-700 font-light'>
            Llamas are sensitive animals and can easily become frightened or distressed by rough handling or mistreatment.
            <br />
            <br />
          </p>

          <div className='flex mt-10 md:flex-col md:gap-y-4 gap-x-4'>
            <Button content='GET STARTED' clickFunc={tempClick} classes='bg-primary text-white px-3 py-2 rounded-md' />
            <Button content='SECONDARY' clickFunc={tempClick} classes='border-secondary text-secondary px-3 py-2 rounded-md' />
          </div>
        </div>

        {/*Grids*/}
        <div className='grid relative w-full max-w-[1000px] grid-cols-5 grid-rows-5 gap-2 mx-auto md:w-1/2 py-10'>
          {/*Dashed border in middle*/}
          <div className='absolute grid w-3/4 overflow-hidden translate-y-[3%] rounded-4xl dashBorderAnim place-self-center h-1/2'></div>

          {/*TopL empty grid*/}
          <div className='col-span-2 row-span-3'></div>

          {/*TopR big grid*/}
          <div className='relative flex col-span-3 row-span-3 bg-primary rounded-4xl aspect-square'>
            <p className='absolute right-0 p-4 font-semibold tracking-wider text-right text-white'>
              Next13
              <br />
              Practice
            </p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto -translate-x-[40%] h-[80%] rounded-full dashBorderAnim'>
              <Image
                src={llamaImg}
                sizes='50vw'
                alt='llama'
                placeholder='blur'
                priority
                fill
                className='object-cover border-[0.1em] border-gray-300 z-10 object-[25%] rounded-full'
              />
            </div>
          </div>

          {/*BottomL small grid*/}
          <div className='relative flex col-span-2 row-span-2 text-white bg-secondary rounded-4xl aspect-square'>
            <p className='absolute bottom-0 p-4 font-semibold tracking-wider'>
              Lorem
              <br />
              Laoreet
            </p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto translate-x-[80%] h-[80%] dashBorderAnim rounded-full' style={{ animationDirection: 'reverse' }}>
              <Image
                src={bootImg}
                sizes='25vw'
                alt='boot'
                placeholder='blur'
                priority
                fill
                className='object-cover border-[0.1em] border-gray-300 object-[60%_50%] rounded-full z-10'
              />
            </div>
          </div>

          {/*BottomR empty grid*/}
          <div className='col-span-3 row-span-3'></div>
        </div>
      </div>

      <FAQ />
    </>
  )
}
