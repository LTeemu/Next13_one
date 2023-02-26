'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { gsap, Expo } from 'gsap'
import pic1 from '/public/images/owl.webp'
import pic2 from '/public/images/bird.webp'
import pic3 from '/public/images/crab.webp'
import pic4 from '/public/images/rabbit.webp'
import pic5 from '/public/images/panda.webp'

export default function Animals2() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    { src: pic1, mask: 'url(/images/mask1.webp)' }, //default
    { src: pic2, mask: 'url(/images/mask2.webp)', text: '1. Hover, tab and touch' },
    { src: pic3, mask: 'url(/images/mask3.webp)', text: '2. Cool images' },
    { src: pic4, mask: 'url(/images/mask4.webp)', text: '3. GSAP animation' },
    { src: pic5, mask: 'url(/images/mask5.webp)', text: '4. Animals' },
  ]

  useEffect(() => {
    gsap.fromTo(`img[data-animal="${activeIndex}"]`, { scale: 1.1 }, { scale: 1, duration: 2, ease: Expo.easeOut })
  }, [activeIndex])

  return (
    <>
      <div className='relative grid max-w-5xl grid-cols-3 mx-auto'>
        <div className='flex flex-col col-span-1'>
          {images.slice(1).map((item, i) => {
            return (
              <span
                key={i}
                tabIndex={0}
                className='flex items-center h-full px-4 border border-slate-50'
                onTouchStartCapture={() => setActiveIndex(i + 1)}
                onTouchCancelCapture={() => setActiveIndex(0)}
                onFocusCapture={() => setActiveIndex(i + 1)}
                onBlurCapture={() => setActiveIndex(0)}
                onMouseEnter={() => setActiveIndex(i + 1)}
                onMouseLeave={() => setActiveIndex(0)}
              >
                {item.text}
              </span>
            )
          })}
        </div>

        <div className='relative col-span-2 max-h-[80vmin] aspect-square'>
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
                  sizes='66vw'
                  fill
                  priority
                  placeholder='blur'
                  className={`object-cover ${activeIndex === i ? 'visible' : 'invisible'}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
