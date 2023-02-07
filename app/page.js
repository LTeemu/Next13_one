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
          <p className='text-4xl font-light tracking-wider whitespace-pre-wrap'>
            {'Kicked a llama\nwhile riding'}
          </p>

          <p className='max-w-[15rem] mt-6 text-slate-700 font-light'>
            Llamas are sensitive animals and can easily become frightened or distressed by rough handling or mistreatment.<br /><br />
          </p>

          <div className='flex mt-10 md:flex-col md:gap-y-4 gap-x-4'>
            <Button content='GET STARTED' clickFunc={tempClick} classes='bg-primary text-white px-3 py-2 rounded-md' />
            <Button content='SECONDARY' clickFunc={tempClick} classes='border-secondary text-secondary px-3 py-2 rounded-md' />
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
            <div className='w-[80%] relative my-auto -translate-x-[40%] h-[80%]'>
              <Image src={"/llama.webp"} sizes='50vw' alt={''} priority fill className='object-cover object-[25%] rounded-full border-[3.2px] border-secondary' />
            </div>
          </div>

          {/*BottomL small grid*/}
          <div className='relative flex col-span-2 row-span-2 text-white bg-secondary rounded-4xl aspect-square'>
            <p className='absolute bottom-0 p-4 font-semibold tracking-wider'>Lorem<br />Laoreet</p>
            {/*Circle img*/}
            <div className='w-[80%] relative my-auto translate-x-[80%] h-[80%]'>
              <Image src={"/boot.webp"} sizes='25vw' alt={''} priority fill className='object-cover object-[60%_50%] rounded-full border-[3.2px] border-primary' />
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

        <FAQBox
          question="Is it a good idea to kick a llama you are riding?"
          answer="No, it is not a good idea to kick a llama you are riding. Llamas are sensitive animals and can easily become frightened or distressed by rough handling or mistreatment. Kicking a llama can cause the animal to become upset, leading to unpredictable behavior and a potentially dangerous situation for the rider. It is important to treat all animals with kindness and respect, and to handle them in a gentle and careful manner to ensure the safety of both the animal and the person interacting with it."
        />

        <FAQBox
          question="Why do round pizzas always come in a square pizza box?"
          answer="Round pizzas often come in square boxes because square boxes are easier and more efficient to manufacture, store and transport than round ones. Additionally, a square box provides more room for printing and branding, and helps to protect the pizza during transportation, as there are no corners that could get crushed. The interior of the box is usually round to accommodate the round pizza, while the exterior is square for practical purposes."
        />

        <FAQBox
          question="Why do you use the same button component everywhere?"
          answer="Using the same button component throughout a user interface can provide a consistent user experience and help with maintainability. By having a single component that is used repeatedly, any updates or changes to the button's style or behavior only need to be made in one place, rather than having to update multiple instances of the button. This can save time and effort and help ensure a consistent look and feel for the user. Additionally, using a standardized button component can help make the user interface more accessible, as the button will consistently behave in a certain way and have a consistent label, reducing confusion for users."
        />

        <FAQBox
          question="How many questions should there be in the FAQ section?"
          answer={
            `The number of questions in the FAQ (Frequently Asked Questions) section depends on the specific needs of the product, service or company it represents. There is no fixed number of questions that is considered ideal, but generally, the FAQ section should contain enough information to address the most common questions and concerns of the target audience.\n\nA well-written FAQ section should aim to be comprehensive, yet concise and easy to navigate. If there are too many questions, the FAQ can become overwhelming and difficult to use, while having too few questions may not adequately address the needs of the audience.\n\nIn general, a good starting point could be around 10 to 20 questions, but the actual number may vary based on the complexity of the product or service, the size of the target audience, and the industry. The important thing is to regularly review and update the FAQ section to ensure it remains relevant and useful for the target audience.`
          }
        />
      </div>
    </>
  )
}
