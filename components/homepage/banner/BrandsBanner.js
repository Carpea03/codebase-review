import { Container } from '../../templates/Container'
import { InnerContainer } from '../../templates/InnerContainer'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const banners = [
  { id: 1, src: '/banner/Ten13.png' },
  { id: 2, src: '/banner/investible.svg' },
  { id: 3, src: '/banner/UNSW Sydney.svg' },
  { id: 4, src: '/banner/Founders 10x Accelerator.svg' },
  { id: 5, src: '/banner/airtree.svg' },
]

const landingBanners = [
  { id: 1, src: '/banner/image 67 1.png' },
  { id: 2, src: '/banner/image 58.png' },
  { id: 3, src: '/banner/image 59.png' },
  { id: 4, src: '/banner/image 57.png' },
  { id: 5, src: '/banner/image 73.png' },
]

export default function BrandsBanner({ landing }) {
  const [logos, setLogos] = useState(landing ? landingBanners : banners)
  return (
    <Container>
      <div
        className={`flex flex-col justify-center items-center bg-[#FFFEF8] pt-[53px] ${
          landing ? '' : ''
        } z-30`}
      >
        <span className="z-30 font-manrope font-semibold text-[#272940]/50 tracking-tight text-[16px] sm:text-[24px] md:text-xl xl:text-2xl">
          {landing ? 'Awards and Recognition' : 'Trusted by these brands'}
        </span>
      </div>
      <div className="border-bottom-base bg-[#FFFEF8]">
        <InnerContainer>
          <div className="hidden sm:flex md:w-full md:flex-wrap md:flex-row md:items-center md:justify-center md:mb-5">
            {logos?.map((banner) => (
              <div key={banner.id} className={landing ? 'px-10 pb-10' : 'px-5'}>
                <Image
                  key={banner.id}
                  className="object-cover"
                  src={banner.src}
                  alt=""
                  width={landing? 130 : 200}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className="flex sm:hidden w-full grid grid-cols-2 mb-5">
            {logos?.map((banner) => (
              <div key={banner.id} className={landing ? 'px-10 pb-10' : 'px-5'}>
                <Image
                  key={banner.id}
                  className="object-cover"
                  src={banner.src}
                  alt=""
                  width={landing? 130 : 200}
                  height={100}
                />
              </div>
            ))}
          </div>
        </InnerContainer>
      </div>
    </Container>
  )
}
