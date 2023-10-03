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
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 py-20 xl:py-40">
              <div className="w-full flex flex-col items-center md:items-start gap-[14px] sm:gap-[10px]">
                <span className="font-manrope font-medium text-xl sm:text-2xl md:leading-[30px] text-[#272940] text-center md:text-left opacity-50">
                  {'VIRTUAL OFFICE'}
                </span>
                <div className="flex flex-row items-center py-5 gap-[10px] px-9 sm:px-20 md:px-0">
                  <span
                    style={{ lineHeight: 1.5 }}
                    className="font-lora font-medium text-xl sm:text-5xl md:leading-[10px] text-[#272940] text-center md:text-left"
                  >
                    <h2>{'Meet us in the Baxter IP Virtual Office'}</h2>
                  </span>
                </div>
                <div className="flex flex-row items-center py-5 gap-[10px] px-9 md:px-0 xl:w-[500px]">
                  <span className="text-[#000]">
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
                    <div className="flex flex-row justify-center items-center gap-[10px] h-[75px] p-5 bg-[#8368DF]">
                      <Image
                        alt=""
                        src="/contactus/arrow-outward.svg"
                        className="h-8 w-8"
                        sizes={48}
                        width={48}
                        height={48}
                      />
                      <p className="font-manrope font-semibold text-xl text-white whitespace-nowrap">
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
