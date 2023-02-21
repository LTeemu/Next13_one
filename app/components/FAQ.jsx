'use client'
import { useState, useEffect, useRef } from 'react'
import FAQBox from './FAQBox'
var _ = require('lodash')

const QA = [
  {
    question: "Do hummingbirds hum because they don't know the words?",
    answer:
      "No, hummingbirds hum because of the rapid movement of their wings, not because they don't know the words. The humming sound is produced by the rapid vibration of the birds' wing muscles, which moves their wings back and forth rapidly, causing the characteristic humming sound that is often associated with these birds.",
  },
  {
    question: "If rabbits' feet are so lucky, then what happened to the rabbit?",
    answer:
      "Rabbits' feet being considered 'lucky' is a cultural superstition and does not have any scientific basis. The fate of a rabbit can vary depending on various factors such as predators, disease, or hunting. Just like any other animal, rabbits are not immune to danger and can fall prey to various threats in their environment.",
  },
  {
    question: 'How much money you got on you?',
    answer:
      "As an AI language model, I do not have a physical form or the capability to carry money. I exist purely in a digital form and don't have the ability to own or handle physical objects.",
  },
  {
    question: 'Why do you get on a bus and a train but get into a car?',
    answer:
      "The terminology for entering various modes of transportation reflects the historical and cultural background of the English language. 'Getting on' a bus or train is likely a reference to the act of climbing aboard, which is what one typically does when boarding these modes of transportation. 'Getting into' a car, on the other hand, likely refers to the act of entering and occupying the interior of the vehicle, which is a more common experience when traveling in a car. These phrases have become standardized through common usage and are now widely recognized and accepted as the standard way of referring to the act of entering different modes of transportation.",
  },
  {
    question: 'Is it a good idea to kick a llama you are riding?',
    answer:
      'No, it is not a good idea to kick a llama you are riding. Llamas are sensitive animals and can easily become frightened or distressed by rough handling or mistreatment. Kicking a llama can cause the animal to become upset, leading to unpredictable behavior and a potentially dangerous situation for the rider. It is important to treat all animals with kindness and respect, and to handle them in a gentle and careful manner to ensure the safety of both the animal and the person interacting with it.',
  },
  {
    question: 'Why do round pizzas always come in a square pizza box?',
    answer:
      'Round pizzas often come in square boxes because square boxes are easier and more efficient to manufacture, store and transport than round ones. Additionally, a square box provides more room for printing and branding, and helps to protect the pizza during transportation, as there are no corners that could get crushed. The interior of the box is usually round to accommodate the round pizza, while the exterior is square for practical purposes.',
  },
  {
    question: 'Why do you use the same button component everywhere?',
    answer:
      "Using the same button component throughout a user interface can provide a consistent user experience and help with maintainability. By having a single component that is used repeatedly, any updates or changes to the button's style or behavior only need to be made in one place, rather than having to update multiple instances of the button. This can save time and effort and help ensure a consistent look and feel for the user. Additionally, using a standardized button component can help make the user interface more accessible, as the button will consistently behave in a certain way and have a consistent label, reducing confusion for users.",
  },
  {
    question: 'How many questions should there be in the FAQ section?',
    answer: `The number of questions in the FAQ (Frequently Asked Questions) section depends on the specific needs of the product, service or company it represents. There is no fixed number of questions that is considered ideal, but generally, the FAQ section should contain enough information to address the most common questions and concerns of the target audience.\n\nA well-written FAQ section should aim to be comprehensive, yet concise and easy to navigate. If there are too many questions, the FAQ can become overwhelming and difficult to use, while having too few questions may not adequately address the needs of the audience.\n\nIn general, a good starting point could be around 10 to 20 questions, but the actual number may vary based on the complexity of the product or service, the size of the target audience, and the industry. The important thing is to regularly review and update the FAQ section to ensure it remains relevant and useful for the target audience.`,
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState()
  const [maxHeight, setMaxHeight] = useState()
  const openDropdown = useRef()

  const resizeBox = () => {
    openDropdown.current && setMaxHeight(openDropdown.current.scrollHeight)
  }

  const openBox = (dropdown, i) => {
    openDropdown.current = dropdown
    setMaxHeight(dropdown.scrollHeight)
    setOpenIndex(openIndex === i ? null : i)
  }

  useEffect(() => {
    window.addEventListener('resize', _.debounce(resizeBox, 800))
    return () => {
      window.removeEventListener('resize', _.debounce(resizeBox, 800))
    }
  }, [])

  return (
    <div className='grid flex-col px-4 place-content-center gap-y-2'>
      <p className='font-semibold tracking-wider'>Frequently Asked Questions</p>
      {QA.map((item, i) => {
        return (
          <FAQBox
            key={i}
            question={item.question}
            answer={item.answer}
            open={i === openIndex}
            maxHeight={maxHeight}
            clickFunc={(e) => openBox(e.currentTarget.nextSibling, i)}
          />
        )
      })}
    </div>
  )
}
