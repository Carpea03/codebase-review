import { Container } from '../../templates/Container'
import React from 'react'
import Image from 'next/image'

const banners = [
  { id: 1, src: '/banner/ten13.png' },
  { id: 2, src: '/banner/investible-new.svg' },
  { id: 3, src: '/banner/unsw-sydney.svg' },
  { id: 4, src: '/banner/founders.svg' },
  { id: 5, src: '/banner/airtree.svg' },
]

export default function BrandsBanner() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center py-[53px] border-bottom-base z-30">
        <p className="font-manrope font-semibold text-[#272940]/50 tracking-tight text-sm sm:text-lg md:text-xl xl:text-2xl">
          Trusted by these brands
        </p>
      </div>
      <div className="w-full grid grid-rows-3 md:grid-rows-2 xl:grid-rows-1 grid-flow-col place-items-center px-12 sm:px-[107px] md:px-40 border-bottom-base">
        {banners.map((banner) => (
          <Image
            key={banner.id}
            className="object-cover"
            src={banner.src}
            alt=""
            width={200}
            height={100}
          />
        ))}
      </div>
    </Container>
  )
}
