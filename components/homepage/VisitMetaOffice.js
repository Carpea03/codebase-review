import Image from 'next/image'
import { Container } from '../templates/Container'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export const VisitmetaOffice = () => {
  return (
    <Container>
      {/** top */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-12 pt-[60px] sm:px-24 sm:pt-[134px] md:px-40 md:pt-[120px] pb-12 sm:pb-[107px] md:pb-[70px]">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-[14px] sm:gap-[10px]">
            <span className="uppercase font-manrope font-bold text-xs sm:text-2xl md:text-xl text-[#40320F]/50">
              Meta office
            </span>
            <div className="flex flex-row items-center py-5 gap-[10px] px-9 sm:px-20 md:px-0">
              <span className="font-lora font-medium text-xl sm:text-5xl md:leading-[70px] text-[#272940] text-center md:text-left">
                Meet Us in Baxter IP Meta Office
              </span>
            </div>
          </div>
          <div className="hidden w-1/2 md:flex flex-col items-end pl-[108px] text-black opacity-50">
            <span>
              We specialise aross various market segments, Your bussiness
              provides products or services that make society better. Our patent
              & trademark attorneys bring you profession-leading experience in
              sector-specific IP to protect your valuable tech or brand.
            </span>
          </div>
        </div>
        {/** bottom */}
        <div className="w-full">
          <Image
            alt=""
            src="/meta-office.png"
            className="w-full"
            width={1920}
            height={1080}
          />
          <button
            type="button"
            className="w-full flex flex-row justify-center items-center py-5 sm:py-10 gap-[10px] bg-[#333552]">
            <span className="font-manrope font-semibold text-sm sm:text-xl text-white">
              Visit meta office now
            </span>
            <IoIosArrowForward
              className="w-4 h-4 sm:w-6 sm:h-6"
              color="white"
            />
          </button>
        </div>
      </div>
    </Container>
  )
}
