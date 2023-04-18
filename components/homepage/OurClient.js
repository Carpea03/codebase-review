import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Image from 'next/image'

const brands = [
  { id: 1, src: '/banner/ten13.svg' },
  { id: 2, src: '/banner/investible.svg' },
  { id: 3, src: '/banner/unsw-sydney.svg' },
  { id: 4, src: '/banner/university-of-sydney.svg' },
  { id: 5, src: '/banner/founders.svg' },
  { id: 6, src: '/banner/airtree.svg' },
]

export const OurClient = () => {
  return (
    <Container>
      <div className="flex flex-col items-start">
        {/** top */}
        <div className="w-full flex flex-col px-12 pt-12 pb-10 sm:px-24 sm:py-24 md:px-4 xl:px-64 2xl:px-72 md:pt-48 md:pb-16 border-[1px] border-[#F0E4C3]">
          <TitleContainer
            title="Our client"
            description="Join other companies growing their IP with us"
          />
        </div>
        {/** bottom */}
        <div
          className="w-full flex flex-col justify-center px-12 sm:px-[107px] md:px-44"
          style={{
            background:
              'linear-gradient(176.69deg, #FFFEF8 21.12%, #FFBF15 139.62%)',
          }}>
          {/** brands container */}
          <div className="flex flex-col items-start py-12 sm:pb-24 md:py-16">
            <div className="grid grid-cols-3 gap-1 sm:gap-3 md:gap-5 w-full items-center justify-center">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex justify-center items-center bg-white py-7 sm:py-16 md:py-28"
                  style={{
                    boxShadow:
                      '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                  }}>
                  <Image
                    alt=""
                    src={brand.src}
                    className="w-full block"
                    width={200}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
          {/** quote */}
          <div className="flex flex-row justify-center items-start py-7 sm:py-14 md:py-24 gap-[10px] md:gap-6">
            <div className="flex flex-col justify-center px-[2px] py-1 sm:px-1 sm:py-2 md:px-2 md:py-3">
              <FaQuoteLeft
                className="h-2 w-2 sm:h-4 sm:w-4 md:h-8 md:w-8"
                color="#DDBE6F"
              />
            </div>
            <div className="flex flex-col items-center gap-[6px] sm:gap-4 md:gap-8">
              <div className="flex flex-col items-center gap-[10px] sm:gap-8">
                <span className="font-lora font-semibold text-sm sm:text-[32px] sm:leading-10 md:text-4xl text-[#272940] text-center">
                  “We&apos;ve been delighted to make this contribution of
                  $51,692 of in-kind attorney work to the UNSW Founders Program
                  over the last 12 months.”
                </span>
              </div>
              <div
                className="flex flex-row items-center sm:p-5 gap-[6px] sm:gap-5 rounded-sm"
                style={{
                  filter:
                    'drop-shadow(0px 56px 114px rgba(150, 151, 169, 0.17)) drop-shadow(0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338)) drop-shadow(0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618)) drop-shadow(0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948))',
                }}>
                <div className="flex flex-row items-center w-4 h-4 sm:w-[60px] sm:h-[60px]">
                  <Image
                    src="/ipNewsBlog/nicole.png"
                    className="block w-full"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-[10px]">
                  <span className="font-manrope font-semibold text-[10px] sm:text-2xl md:text-xl text-[#272940]">
                    Jhon doe al jhon
                  </span>
                  <span className="font-manrope font-semibold text-[10px] sm:text-2xl md:text-xl text-[#272940] opacity-50">
                    Client leader
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-[2px] py-1 sm:px-1 sm:py-2 md:px-2 md:py-3">
              <FaQuoteRight
                className="h-2 w-2 sm:h-4 sm:w-4 md:h-8 md:w-8"
                color="#DDBE6F"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
