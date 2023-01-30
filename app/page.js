import Image from 'next/image'

export default function Home() {
  return (
    <main>

      {/*Top content*/}
      <div className='flex flex-col flex-1 px-6 mx-auto gap-x-4 md:flex-row'>

        {/*Text and buttons*/}
        <div className='grid w-full py-8 text-center md:text-left md:w-1/2 place-content-center'>
          <p className='tracking-wider'>
            <span className='text-2xl font-bold opacity-[0.8]'>Improve</span><br />
            <span className='text-3xl font-extrabold opacity-[0.9]'>the way</span><br />
            <span className='text-4xl font-black'>you work</span>
          </p>

          <p className='max-w-[15rem] mt-8 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Sed consequat laoreet lacinia.
          </p>

          <div className='flex mt-12 md:flex-col md:gap-y-4 gap-x-4'>
            <button className='px-3 py-2 font-bold tracking-wider text-white border-4 rounded-md bg-primary w-min md:w-full whitespace-nowrap buttonHover'>
              Get Started
            </button>

            <button className='px-3 py-2 font-bold tracking-wider border-4 rounded-md border-secondary text-secondary w-min md:w-full whitespace-nowrap backdrop-brightness-95 buttonHover'>
              Secondary
            </button>
          </div>

        </div>

        {/*Grids*/}
        <div className='grid relative w-full max-w-[1000px] grid-cols-5 grid-rows-5 gap-2 pt-8 mx-auto md:w-1/2 mb-8 afterBorder'>
          {/*Dashed border*/}
          <div className='absolute grid w-3/4 border-4 border-dashed border-b-primary border-r-primary border-t-secondary border-l-secondary rounded-4xl place-self-center h-1/2'></div>

          {/*Top empty grid*/}
          <div className='col-span-2 row-span-3 '></div>

          {/*Big bottom grid*/}
          <div className='relative flex col-span-3 row-span-3 bg-primary rounded-4xl aspect-square'>
            <p className='absolute right-0 p-4 font-extrabold text-right text-white'>Next13<br />Practice</p>
            {/*Circle img*/}
            <div className='w-[80%] my-auto rounded-full -translate-x-[40%] h-[80%] overflow-clip border-4 border-secondary border-solid'>
              <Image src={"/water-5245722_640.jpg"} alt={''} priority fill />
            </div>
          </div>

          {/*Small bottom grid*/}
          <div className='relative flex col-span-2 row-span-2 text-white bg-secondary rounded-4xl aspect-square'>
            <p className='absolute bottom-0 p-4 font-extrabold'>Lorem<br />Laoreet</p>
            
            {/*Circle img*/}
            <div className='w-[80%] my-auto rounded-full translate-x-[80%] h-[80%] overflow-clip border-4 border-primary border-solid'>
              <Image src={"/stones-1994691_640.jpg"} alt={''} priority fill />
            </div>             
          </div>

          {/*Bottom empty grid*/}
          <div className='col-span-3 row-span-3'></div>
        </div>
      </div>
    </main>
  )
}
