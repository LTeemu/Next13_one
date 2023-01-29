import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col flex-1 bg-gray-200 md:flex-row'>

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

          <button className='px-2 py-1 mt-12 text-base font-bold tracking-widest bg-[#5caae9] text-white rounded-lg'>
            Get Started
          </button>

          <button className='px-2 py-1 mt-4 text-base font-bold tracking-widest border-2 border-black rounded-lg'>
            Secondary
          </button>
        </div>

        <div className='grid w-full grid-cols-5 grid-rows-5 gap-2 py-8 md:w-1/2 max-w-[1000px] mx-auto'>
          <div className='col-span-2 row-span-3 bg-green-50'>
            <p>Empty</p>
          </div>

          <div className='flex col-span-3 row-span-3 bg-red-300 rounded-4xl aspect-square'>
            <p>3x3</p>
            <div className='w-[80%] my-auto rounded-full -translate-x-[60%] bg-orange-300 h-[80%]'>
              xxx
            </div>
          </div>

          <div className='flex col-span-2 row-span-2 bg-red-300 rounded-4xl aspect-square'>
            <p>2x2</p>
            <div className='w-[80%] my-auto rounded-full translate-x-[60%] bg-orange-300 h-[80%]'>
              xxx
            </div>
          </div>

          <div className='col-span-3 row-span-3 bg-green-50'>
            <p>Empty</p>
          </div>
        </div>

      </div>
    </main>
  )
}
