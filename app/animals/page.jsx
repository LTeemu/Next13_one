'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import pic1 from '/public/images/owl.webp'
import pic2 from '/public/images/bird.webp'
import pic3 from '/public/images/crab.webp'
import pic4 from '/public/images/rabbit.webp'
import pic5 from '/public/images/panda.webp'

export default function Animals() {
  const [active, setActive] = useState()
  const imgRef = useRef()
  const imgTL = useRef()

  const defaultImg = { src: pic1, mask: 'url(/images/mask1.webp)' }

  const images = [
    { src: pic2, mask: 'url(/images/mask2.webp)', text: '1. Hover, tab and touch' },
    { src: pic3, mask: 'url(/images/mask3.webp)', text: '2. Cool images' },
    { src: pic4, mask: 'url(/images/mask4.webp)', text: '3. GSAP animation' },
    { src: pic5, mask: 'url(/images/mask5.webp)', text: '4. Animals' },
  ]

  useEffect(() => {
    imgTL.current = gsap.timeline({ defaults: { duration: 2, ease: Expo.easeOut } })
    imgTL.current.fromTo(imgRef.current, { scale: 1.1 }, { scale: 1 })
  }, [])

  useEffect(() => {
    imgTL.current.play(0)
  }, [active])

  return (
    <>
      <div className='relative grid max-w-5xl grid-cols-3 mx-auto'>
        <div className='flex flex-col h-full justify-evenly'>
          {images.map((item, i) => {
            return (
              <span
                key={i}
                tabIndex={0}
                className='flex items-center h-full col-span-1 px-4 py-4'
                onTouchStartCapture={() => setActive(i)}
                onTouchCancelCapture={() => setActive()}
                onFocusCapture={() => setActive(i)}
                onBlurCapture={() => setActive()}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive()}
              >
                {item.text}
              </span>
            )
          })}
        </div>
        {/*Image + mask container*/}
        <div
          style={{
            WebkitMaskImage: images[active] ? images[active].mask : defaultImg.mask,
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
          }}
          className='relative col-span-2 max-h-[80vmin] aspect-square mask m-4'
        >
          <Image
            ref={imgRef}
            src={images[active] ? images[active].src : defaultImg.src}
            alt=''
            fill
            priority
            placeholder='blur'
            className='object-cover'
          />
        </div>
      </div>
    </>
  )
}
