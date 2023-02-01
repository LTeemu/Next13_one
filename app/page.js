import Image from 'next/image'
import FAQBox from './components/FAQBox'
import { Button, tempClick } from './components/Button'

export default function Home() {
  return (
    <main className='overflow-x-hidden' tabIndex={-1}>

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
            <Button text='GET STARTED' clickFunc={tempClick} classes='bg-primary text-white px-3 py-2'/>
            <Button text='SECONDARY' clickFunc={tempClick} classes='border-secondary text-secondary px-3 py-2' />
          </div>
        </div>

        {/*Grids*/}
        <div className='grid relative w-full max-w-[1000px] grid-cols-5 grid-rows-5 gap-2 pt-8 mx-auto md:w-1/2 mb-8 afterBorder'>
          {/*Dashed border*/}
          <div className='absolute grid w-3/4 border-4 border-dashed border-b-primary border-r-primary border-t-secondary border-l-secondary rounded-4xl place-self-center h-1/2'></div>

          {/*Top empty grid*/}
          <div className='col-span-2 row-span-3'></div>

          {/*Big top grid*/}
          <div className='relative flex col-span-3 row-span-3 bg-primary rounded-4xl aspect-square'>
            <p className='absolute right-0 p-4 font-semibold tracking-wider text-right text-white'>Next13<br />Practice</p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto rounded-full -translate-x-[40%] h-[80%] overflow-clip border-4 border-secondary border-solid'>
              <Image src={"/llama.webp"} sizes='50vw' alt={''} priority fill className='object-cover object-[25%]' />
            </div>
          </div>

          {/*Small bottom grid*/}
          <div className='relative flex col-span-2 row-span-2 text-white bg-secondary rounded-4xl aspect-square'>
            <p className='absolute bottom-0 p-4 font-semibold tracking-wider'>Lorem<br />Laoreet</p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto rounded-full translate-x-[80%] h-[80%] overflow-clip border-4 border-primary border-solid'>
              <Image src={"/boot.webp"} sizes='25vw' alt={''} priority fill className='object-cover object-[60%_50%]' />
            </div>
          </div>

          {/*Bottom empty grid*/}
          <div className='col-span-3 row-span-3'></div>
        </div>
      </div>

      <div className='grid flex-col px-4 place-content-center gap-y-2'>
        <p className='font-semibold tracking-wider'>Frequently Asked Questions</p>

        <FAQBox
          question="Do hummingbirds hum because they don't know the words? "
          answer="Picanha tail enim, meatloaf ipsum hamburger cillum eiusmod ut tempor chuck. Adipisicing in in ground round nisi. Ad brisket esse ut porchetta pastrami elit bresaola corned beef ut drumstick. Veniam irure excepteur porchetta."
        />

        <FAQBox
          question="If rabbits' feet are so lucky, then what happened to the rabbit?"
          answer="Chicken ullamco boudin jerky. Veniam sirloin laborum ham hock cow exercitation anim. Meatball boudin shank tongue dolore sunt kevin aliquip. Ullamco fugiat venison culpa leberkas cupim. Drumstick short loin ullamco porchetta beef ribs, brisket burgdoggen in reprehenderit. In ut ribeye cillum sirloin pork chop meatball shankle do nostrud drumstick chicken burgdoggen mollit excepteur. Irure bresaola eu landjaeger capicola."
        />

        <FAQBox
          question="How much money you got on you?"
          answer="Minim pig commodo, incididunt cupidatat tempor deserunt do jerky hamburger. Ball tip alcatra laboris, andouille exercitation veniam culpa duis spare ribs shankle voluptate salami corned beef strip steak doner. Doner tail short ribs elit, pork chop duis in excepteur qui pork venison nulla enim. Officia est dolore exercitation chuck occaecat. Spare ribs pig cupidatat meatloaf nisi mollit cow meatball proident incididunt. Qui magna aute chuck, t-bone tongue pariatur. Chislic tri-tip andouille t-bone turkey pig capicola strip steak do meatball rump dolore id shankle. Alcatra quis tail officia. Frankfurter et minim shank."
        />

        <FAQBox
          question="Why do you get on a bus and a train but get into a car? "
          answer="Kevin turkey strip steak, ipsum labore qui ground round cillum shoulder est aute dolore buffalo in eu. Aliquip velit occaecat, bacon pork loin excepteur chuck tri-tip ea cow. Sunt labore sirloin in, tongue tempor cillum brisket sed turducken alcatra. Laborum aliqua deserunt, burgdoggen ball tip dolore aliquip minim chicken picanha prosciutto. Doner meatball dolore, kielbasa salami irure venison sint prosciutto strip steak. Sint kevin adipisicing laboris commodo nisi."
        />
      </div>
    </main>
  )
}
