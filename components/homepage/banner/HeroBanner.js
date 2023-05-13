import Button from '../../buttons/Button'
import { Container } from '../../templates/Container'
import React from 'react'
import { HiPhone } from 'react-icons/hi'
import { IoArrowForwardOutline } from 'react-icons/io5'
import Image from 'next/image'

const details = [
  {
    title: ' Innovate Boldly. Protect Strategically.',
    description:
      'In-house and top tier patent & trade mark attorney experience to provide astute, commercial IP advice.',
  },
]

const buttonText = [
  { title: 'Talk to attorney now' },
  { title: 'Visit metaoffice now' },
]

export default function HeroBanner() {
  return (
    <Container className="md:px-20 xl:px-40 bg-hero-banner">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-16 md:gap-0 py-10 sm:py-[60px] md:py-16 xl:py-32">
        {/** contents */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start gap-[70px] order-last md:order-first">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <span className="font-lora font-semibold text-2xl sm:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[120%] text-[#272940] text-center md:text-left px-10 md:px-0">
              {details[0].title}
            </span>
            <span className="font-manrope font-semibold text-sm sm:text-2xl text-[#272940]/50 text-center md:text-left px-14 sm:px-40 md:px-0">
              {details[0].description}
            </span>
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-col items-center">
              <div
                className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                style={{
                  boxShadow:
                    '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                }}>
                <div className="rounded-full w-6 h-6 sm:w-10 sm:h-10 bg-white flex justify-center items-center">
                  <HiPhone
                    className="w-[9px] h-[9px] sm:w-5 sm:h-5"
                    color="#404266"
                  />
                </div>
                <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                  {buttonText[0].title}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                style={{
                  boxShadow:
                    '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                }}>
                <div className="rounded-full w-6 h-6 sm:w-10 sm:h-10 bg-white flex justify-center items-center">
                  <IoArrowForwardOutline
                    className="w-3 h-3 sm:w-5 sm:h-5 md:w-4 md:h-4"
                    size={16}
                  />
                </div>
                <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                  {buttonText[1].title}
                </span>
              </div>
            </div>
          </div>
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
