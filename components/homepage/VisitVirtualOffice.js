import { Container } from '../templates/Container'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Link from 'next/link'
import { metaOffice } from '../../utils/const/links'
import { InnerContainer } from '../templates/InnerContainer'
import Image from 'next/image'

export const VisitVirtualOffice = () => {
  return (
    <Container className="flex flex-col sm:py-[100px] md:py-[20px] gap-[70px]">
      {/** top */}
      <InnerContainer>
        <div className="sm:px-10 xl:px-8">
          <div className="xl:px-32">
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 py-10 sm:py-5 xl:py-40">
              <div className="w-full flex flex-col items-start gap-[14px] sm:gap-[10px]">
                <span className="px-[20px] md:px-0 font-manrope font-medium text-[12px] sm:text-[20px] md:leading-[30px] text-[#40320F] text-center md:text-left opacity-50">
                  {'VIRTUAL OFFICE'}
                </span>
                <div className="flex flex-row items-center py-2 gap-[10px] px-[20px] md:px-0">
                  <span
                    style={{ lineHeight: 1.5 }}
                    className="font-lora font-medium text-[24px] sm:text-[48px] md:leading-[10px] text-[#272940] text-start md:text-left"
                  >
                    <h2>{'Meet us in the Baxter IP Virtual Office'}</h2>
                  </span>
                </div>
                <div className="flex flex-row items-center sm:py gap-[10px] px-[20px] md:px-0 xl:w-[500px] text-[14px] sm:text-[20px]">
                  <span className="text-[#000] opacity-50">
                    We specialise aross various market segments, Your bussiness
                    provides products or services that make society better. Our
                    patent & trademark attorneys bring you profession-leading
                    experience in sector-specific IP to protect your valuable
                    tech or brand.
                  </span>
                </div>
              </div>
              <div className="mt-10 px-5 xl:px-0 xl:mt-20">
                <div
                  style={{ height: 279 }}
                  className="flex justify-center items-center rounded-sm bg-metaoffice"
                >
                  <Link href={metaOffice} target="_blank">
                    <div className="flex flex-row justify-center items-center gap-[10px] sm:h-[75px] p-5 bg-[#8368DF]">
                      <Image
                        alt=""
                        src="/contactus/arrow-outward.svg"
                        className="w-[24px] h-[24px] sm:h-8 sm:w-8"
                        sizes={48}
                        width={48}
                        height={48}
                      />
                      <p className="font-manrope font-semibold text-[10px] sm:text-[20px] md:text-xl text-white whitespace-nowrap">
                        Visit virtual office
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  )
}
