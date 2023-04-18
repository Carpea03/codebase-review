import Button from '../../buttons/Button'
import { Container } from '../../templates/Container'
import React from 'react'
import { HiPhone } from 'react-icons/hi'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <Container className="md:px-20 xl:px-40 bg-hero-banner">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-16 md:gap-0 py-10 sm:py-[60px] md:py-16 xl:py-32">
        {/** contents */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start gap-[70px] order-last md:order-first">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <span className="font-lora font-semibold text-2xl sm:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[120%] text-[#272940] text-center md:text-left px-10 md:px-0">
              Perpetual Innovation. Protected.
            </span>
            <span className="font-manrope font-semibold text-sm sm:text-2xl text-[#272940]/50 text-center md:text-left px-14 sm:px-40 md:px-0">
              Your bussiness provides products or services that make society
              better.
            </span>
          </div>
          <Button
            className="w-[50%] md:w-[90%] h-11 sm:h-24"
            title="Talk to an attorney">
            <div
              className="flex flex-row items-center justify-center w-6 h-6 sm:w-14 sm:h-14 md:h-12 md:w-12 bg-white rounded-full"
              style={{
                boxShadow: '1px 7px 16px rgba(44, 44, 44, 0.15)',
              }}>
              <HiPhone
                className="w-[9px] h-[9px] sm:w-5 sm:h-5"
                color="#404266"
              />
            </div>
          </Button>
        </div>
        <div className="w-2/5 flex flex-row items-start md:pl-24 order-first md:order-last">
          <Image
            src="/gray-empty-rect.png"
            className="h-full w-full object-cover"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  )
}
