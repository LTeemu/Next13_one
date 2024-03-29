'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { gsap, Sine, Circ } from 'gsap'
import pic1 from '/public/images/owl.webp'
import pic2 from '/public/images/bird.webp'
import pic3 from '/public/images/crab.webp'
import pic4 from '/public/images/rabbit.webp'
import pic5 from '/public/images/panda.webp'

export default function Animals2() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const imgContainer = useRef();

  const images = [
    { src: pic1, mask: 'url(/images/mask1.webp)' }, //default
    { src: pic2, mask: 'url(/images/mask2.webp)', text: '1. Hover, tab and touch' },
    { src: pic3, mask: 'url(/images/mask3.webp)', text: '2. Cool images' },
    { src: pic4, mask: 'url(/images/mask4.webp)', text: '3. GSAP animation' },
    { src: pic5, mask: 'url(/images/mask5.webp)', text: '4. Animals' },
  ]

  useEffect(() => {
    setActiveIndex(0);
    gsap.timeline({ defaults: { ease: Sine.easeInOut, duration: 0.4 } })
      .fromTo(imgContainer.current, { opacity: 0 }, { opacity: 1 }, '>')
      .fromTo(`img[data-animal="${0}"]`, { scale: 1, rotateX: 0.02 }, { scale: 1.05, rotateX: 0, duration: 0.9, ease: Circ.easeOut }, '<')
      .play();
  }, []);

  function switchAnimal(i) {
    if (i == activeIndex) return;
    gsap.timeline({ defaults: { ease: Sine.easeInOut, duration: 0.4 } })
      .to(imgContainer.current, { opacity: 0, onComplete: () => setActiveIndex(i) })
      .to(`img[data-animal="${activeIndex}"]`, { scale: 1, rotateX: 0.02 }, '<')
      .to(imgContainer.current, { opacity: 1 }, '>')
      .fromTo(`img[data-animal="${i}"]`, { scale: 1, rotateX: 0.02 }, { scale: 1.05, rotateX: 0, duration: 1.2, ease: Circ.easeOut }, '<') //rotate prevents shake
      .play();
  }

  return (
    <div className='grid max-w-5xl grid-cols-1 mx-auto sm:grid-cols-3'>
      <div ref={imgContainer} className='relative col-span-1 sm:col-span-2 h-[70vmin] sm:order-2 max-w-full aspect-square mx-auto'>
        {images.map((img, i) => {
          return (
            <div
              key={i}
              className='absolute w-full h-full'
              style={{
                WebkitMaskImage: img.mask,
                WebkitMaskPosition: 'center',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
              }}
            >
              <Image
                data-animal={i}
                src={img.src}
                alt=''
                sizes='(min-width: 640px) 66vw, 100vw'
                fill
                priority
                placeholder='blur'
                className={`object-cover scale-105 ${activeIndex === i ? 'visible' : 'invisible'}`}
              />
            </div>
          )
        })}
      </div>

      <div id='imgOptions' className='grid col-span-1'>
        {images.slice(1).map((item, i) => {
          return (
            <span
              key={i}
              tabIndex={0}
              className='flex items-center h-full px-4 py-2 border-t whitespace-nowrap last:border-b sm:order-1 from-slate-100 to-white'
              onTouchStartCapture={() => switchAnimal(i + 1)}
              onTouchCancelCapture={() => switchAnimal(0)}
              onFocusCapture={() => switchAnimal(i + 1)}
              onBlurCapture={(e) => e.relatedTarget?.parentNode?.id !== 'imgOptions' && switchAnimal(0)}
              onMouseEnter={() => switchAnimal(i + 1)}
              onMouseLeave={() => switchAnimal(0)}
            >
              {item.text}
            </span>
          )
        })}
      </div>
    </div>
  )
}
