import Image from 'next/image'
import FAQBox from './components/FAQBox'
import { Button, tempClick } from './components/Button'

export default function Home() {
  return (
    <>
      {/*Top content*/}
      <div className='flex flex-col flex-1 px-6 mx-auto gap-x-4 md:flex-row'>

        {/*Text and buttons*/}
        <div className='grid w-full py-8 text-center md:text-left md:w-1/2 place-content-center'>
          <p className='text-4xl font-light tracking-wider'>
            <span>Kicked a llama</span><br />
            <span>while riding</span><br />
          </p>

          <p className='max-w-[15rem] mt-8 text-slate-700 font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Sed consequat laoreet lacinia.
          </p>

          <div className='flex mt-12 md:flex-col md:gap-y-4 gap-x-4'>
            <Button text='GET STARTED' clickFunc={tempClick} classes='bg-primary text-white px-3 py-2 rounded-md'/>
            <Button text='SECONDARY' clickFunc={tempClick} classes='border-secondary text-secondary px-3 py-2 rounded-md' />
          </div>
        </div>

        {/*Grids*/}
        <div className='grid relative w-full max-w-[1000px] grid-cols-5 grid-rows-5 gap-2 pt-8 mx-auto md:w-1/2 mb-8 afterBorder'>
          {/*Dashed border in middle*/}
          <div className='absolute grid w-3/4 border-4 border-dashed border-b-primary border-r-primary border-t-secondary border-l-secondary rounded-4xl place-self-center h-1/2'></div>

          {/*TopL empty grid*/}
          <div className='col-span-2 row-span-3'></div>

          {/*TopR big grid*/}
          <div className='relative flex col-span-3 row-span-3 bg-primary rounded-4xl aspect-square'>
            <p className='absolute right-0 p-4 font-semibold tracking-wider text-right text-white'>Next13<br />Practice</p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto rounded-full -translate-x-[40%] h-[80%] overflow-clip border-4 border-secondary border-solid'>
              <Image src={"/llama.webp"} sizes='50vw' alt={''} priority fill className='object-cover object-[25%]' />
            </div>
          </div>

          {/*BottomL small grid*/}
          <div className='relative flex col-span-2 row-span-2 text-white bg-secondary rounded-4xl aspect-square'>
            <p className='absolute bottom-0 p-4 font-semibold tracking-wider'>Lorem<br />Laoreet</p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto rounded-full translate-x-[80%] h-[80%] overflow-clip border-4 border-primary border-solid'>
              <Image src={"/boot.webp"} sizes='25vw' alt={''} priority fill className='object-cover object-[60%_50%]' />
            </div>
          </div>

          {/*BottomR empty grid*/}
          <div className='col-span-3 row-span-3'></div>
        </div>
      </div>

      {/*FAQ*/}
      <div className='grid flex-col px-4 place-content-center gap-y-2'>
        <p className='font-semibold tracking-wider'>Frequently Asked Questions</p>

        <FAQBox
          question="Do hummingbirds hum because they don't know the words? "
          answer="No, hummingbirds hum because of the rapid movement of their wings, not because they don't know the words. The humming sound is produced by the rapid vibration of the birds' wing muscles, which moves their wings back and forth rapidly, causing the characteristic humming sound that is often associated with these birds."
        />

        <FAQBox
          question="If rabbits' feet are so lucky, then what happened to the rabbit?"
          answer="Rabbits' feet being considered 'lucky' is a cultural superstition and does not have any scientific basis. The fate of a rabbit can vary depending on various factors such as predators, disease, or hunting. Just like any other animal, rabbits are not immune to danger and can fall prey to various threats in their environment."
        />

        <FAQBox
          question="How much money you got on you?"
          answer="As an AI language model, I do not have a physical form or the capability to carry money. I exist purely in a digital form and don't have the ability to own or handle physical objects."
        />

        <FAQBox
          question="Why do you get on a bus and a train but get into a car? "
          answer="The terminology for entering various modes of transportation reflects the historical and cultural background of the English language. 'Getting on' a bus or train is likely a reference to the act of climbing aboard, which is what one typically does when boarding these modes of transportation. 'Getting into' a car, on the other hand, likely refers to the act of entering and occupying the interior of the vehicle, which is a more common experience when traveling in a car. These phrases have become standardized through common usage and are now widely recognized and accepted as the standard way of referring to the act of entering different modes of transportation."
        />
      </div>
    </>
  )
}
