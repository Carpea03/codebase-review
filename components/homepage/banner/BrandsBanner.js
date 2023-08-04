import { Container } from '../../templates/Container'
import { InnerContainer } from '../../templates/InnerContainer'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const banners = [
  { id: 1, src: '/banner/ten13.png' },
  { id: 2, src: '/banner/investible-new.svg' },
  { id: 3, src: '/banner/unsw-sydney.svg' },
  { id: 4, src: '/banner/founders.svg' },
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
        className={`flex flex-col justify-center items-center py-[53px] ${
          landing ? '' : 'border-bottom-base'
        } z-30`}
      >
        <p className="z-30 font-manrope font-semibold text-[#272940]/50 tracking-tight text-sm sm:text-lg md:text-xl xl:text-2xl">
          {landing ? 'Awards and Recognition' : 'Trusted by these brands'}
        </p>
      </div>
      <div className="border-bottom-base">
        <InnerContainer>
          <div className="w-full flex flex-wrap flex-rows items-center justify-center">
            {logos?.map((banner) => (
              <div key={banner.id} className={landing ? 'px-10 pb-10' : ''}>
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
