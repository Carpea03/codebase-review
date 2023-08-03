import { Container } from '../templates/Container'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Link from 'next/link'
import { metaOffice } from '../../utils/const/links'
import { InnerContainer } from '../templates/InnerContainer'
import Image from 'next/image'

export const VisitVirtualOffice = () => {
  return (
    <Container>
      {/** top */}
      <div className="flex flex-col items-center w-full">
        <InnerContainer>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-12 pt-[60px] sm:px-24 sm:pt-[134px] md:px-40 md:pt-[120px] pb-12 sm:pb-[107px] md:pb-[70px]">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-[14px] sm:gap-[10px]">
              <span className="font-lora font-medium text-xl sm:text-2xl md:leading-[30px] text-[#272940] text-center md:text-left opacity-50">
                {"VIRTUAL OFFICE"}
              </span>
              <div className="flex flex-row items-center py-5 gap-[10px] px-9 sm:px-20 md:px-0">
                <span
                  style={{ lineHeight: 1.5 }}
                  className="font-lora font-medium text-xl sm:text-5xl md:leading-[10px] text-[#272940] text-center md:text-left"
                >
                  {"Meet us in the Baxter IP Virtual Office"}
                </span>
              </div>
              <div className="flex flex-row items-center py-5 gap-[10px] px-9 md:px-0">
                <span>
                  We specialise aross various market segments, Your bussiness provides
                  products or services that make society better. 
                  Our patent & trademark attorneys bring you profession-leading experience
                  in sector-specific IP to protect your valuable tech or brand.
                </span>
              </div>
            </div>
            <div className="md:w-1/2 md:flex flex-col items-end md:pl-[20px] md:pt-[40px]">
              <div className="relative w-full pt-[20px] sm:pt-0 md:pt-10">
              <div className="absolute top-[110px] sm:top-[160px] w-full pl-[100px] text-center">
                <Link href={metaOffice}>
                  <div
                    className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[60px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                    style={{
                      boxShadow:
                        '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                    }}
                  >
                    <IoMdArrowRoundForward
                      style={{transform: 'rotate(-45deg)' }} 
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        color="white"
                    />
                    <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                      Visit meta office
                    </span>
                  </div>
                </Link>
              </div>
                {/** bottom */}
                <Image
                  alt=""
                  src="/meta-office new.png"
                  className="w-full"
                  width={1440}
                  height={955}
                />
              </div>
            </div>
          </div>
        </InnerContainer>
        {/* <div className="w-full bg-[#333552]">
          <InnerContainer>
            <Link href={metaOffice}>
              <button
                type="button"
                className="w-full flex flex-row justify-center items-center py-5 sm:py-10 gap-[10px]"
              >
                <span className="font-manrope font-semibold text-sm sm:text-xl text-white">
                  Visit virtual office now
                </span>
                <IoIosArrowForward
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  color="white"
                />
              </button>
            </Link>
          </InnerContainer>
        </div> */}
      </div>
    </Container>
  )
}
