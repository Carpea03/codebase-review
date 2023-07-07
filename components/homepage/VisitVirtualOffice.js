import { Container } from '../templates/Container'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import { metaOffice } from '../../utils/const/links'
import { InnerContainer } from '../templates/InnerContainer'

export const VisitVirtualOffice = () => {
  return (
    <Container>
      {/** top */}
      <div className="flex flex-col items-center w-full">
        <InnerContainer>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-12 pt-[60px] sm:px-24 sm:pt-[134px] md:px-40 md:pt-[120px] pb-12 sm:pb-[107px] md:pb-[70px]">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-[14px] sm:gap-[10px]">
              <div className="flex flex-row items-center py-5 gap-[10px] px-9 sm:px-20 md:px-0">
                <span className="font-lora font-medium text-xl sm:text-5xl md:leading-[70px] text-[#272940] text-center md:text-left">
                  {"Meet an IP Attorney in Baxter IP's Virtual Office Now"}
                </span>
              </div>
            </div>
            <div className="hidden w-1/2 md:flex flex-col items-end pl-[108px] text-black opacity-50">
              <span>
                With a single click you will find yourself at the reception area
                of our virtual office. No special equipment is required and you
                can leave your video off if you wish.
                <br />
                <br />
                One of our friendly receptionists will greet you, take you to a
                meeting room, then introduce you to a team member who can
                discuss your query with you.
              </span>
            </div>
          </div>
        </InnerContainer>
        {/** bottom */}
        <div className="w-full bg-[#333552]">
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
        </div>
      </div>
    </Container>
  )
}
