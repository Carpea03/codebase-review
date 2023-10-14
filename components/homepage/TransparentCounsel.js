import { Container } from '../templates/Container'
import React, { useState, useEffect } from 'react'
import { TitleContainer } from '../templates/TitleContainer'
import { profiles, peopleIndustry } from '../../utils/const/people'
import { InnerContainer } from '../../components/templates/InnerContainer'
import Image from 'next/image'

export default function TransparentCounsel(counselData) {
  return (
    <Container className="px-0 bg-[#FFFEF8]">
      <InnerContainer>
        <div className="py-8 px-[32px] sm:py-[40px] md:py-[40px] md:px-40 xl:px-80 2xl:px-[312px]">
          <TitleContainer description={counselData.data.title[0].header} />
          <div className="flex items-center justify-center">
            <span className="font-manrope font-medium tracking-wide text-[#9F9987] text-[16px] sm:text-[24px] md:text-xl text-center uppercase font-bold leading-normal">
              {counselData.data.title[0].body}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-full pb-20">
            <div className="grid mt-10 grid-cols-1 m-0 md:ml-40 md:mr-40 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 md:gap-4 px-10  md:px-0">
              {counselData.data.data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row md:flex-col bg-white rounded-sm cursor-pointer"
                  style={{
                    boxShadow:
                      '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#FFD15B',
                    }}
                    className={`flex justify-center items-center p-10 ${item.icon === "/counsel/Patent Litigation.svg"? "sm:p-10 ": "sm:p-[70px] " } md:p-20 sm:w-[500px] md:w-full`}
                  >
                    <Image
                      key={index}
                      style={{ width: '100%', height: '100%' }}
                      src={item.icon}
                      alt=""
                      sizes='100vw'
                      width={195.32}
                      height={195.32}
                    />
                  </div>

                  <div className="flex flex-col p-4 sm:p-8 md:p-6 gap-y-4 sm:gap-y-8 md:gap-y-6">
                    <div>
                      <span className="font-manrope font-medium text-[20px] sm:text-[24px] text-[#272940]">
                        {item?.title}
                      </span>
                    </div>
                    <div className="flex">
                      <span key={index} className="font-manrope text-[16px] sm:text-[20px] text-[#7A7B94]">
                        {item?.body}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  )
}
