import Image from 'next/image'
import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

export default function NewsBlog({ data, btnTitle = 'Discover more experts' }) {
  return (
    <div className="w-full flex flex-row items-start justify-center py-12 pb-24 sm:pb-40">
      <div className="flex flex-col gap-11 sm:gap-24">
        <div className="grid grid-rows-1 md:grid-cols-3 gap-4 px-6 sm:px-14">
          {data.map((n) => (
            <div
              key={n.id}
              className="flex flex-col items-start bg-white w-full md:max-w-[362px] cursor-pointer"
              style={{
                boxShadow:
                  '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
              }}>
              <div className="relative w-full">
                <Image
                  alt=""
                  src={n.img}
                  className="object-fill w-full h-[306px]"
                  width={362}
                  height={306}
                />
                <div
                  className="hidden absolute md:flex flex-row items-center left-6 bottom-5 bg-white rounded-sm px-5 py-2 gap-2"
                  style={{
                    boxShadow:
                      '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                  }}>
                  <Image
                    alt=""
                    src="/ipNewsBlog/nicole.png"
                    width={40}
                    height={40}
                  />
                  <span className="font-manrope font-semibold text-xl text-[#272940]">
                    Nicole more
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 p-6">
                <div className="md:hidden flex flex-row items-center left-6 bottom-5 bg-white rounded-sm gap-2">
                  <Image
                    alt=""
                    src="/ipNewsBlog/nicole.png"
                    width={40}
                    height={40}
                  />
                  <span className="font-manrope font-semibold text-sm sm:text-xl text-[#272940]">
                    Nicole more
                  </span>
                </div>
                <span className="font-manrope font-medium text-sm sm:text-xl text-[#404266]">
                  {n.content}
                </span>
                <span className="font-manrope font-semibold text-sm sm:text-base text-[#ADAEBD]">
                  {n.visit}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
            style={{
              boxShadow:
                '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
            }}>
            <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
              {btnTitle}
            </span>
            <div className="rounded-full w-6 h-6 sm:w-10 sm:h-10 bg-white flex justify-center items-center">
              <IoArrowForwardOutline
                className="w-3 h-3 sm:w-5 sm:h-5 md:w-4 md:h-4"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}