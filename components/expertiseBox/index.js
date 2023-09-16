import React from 'react'
import { cards, cardsIndustry } from '../../utils/const/menus'
import Image from 'next/image'
import Link from 'next/link'

const ExpertiseBox = ({ active }) => {
  return (
    <div className="w-full">
      <div className="w-full flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {cardsIndustry.map((item, index) => {
          return (
            <Link key={`industry-${index}`} href={item.link} className='no-underline'>
              <div
                className={`flex flex-col w-full p-[32px] cursor-pointer text-[#272940] ${active === index + 1? 'bg-expertise text-[#FFF]':'text-[#272940]' } `}
                style={{
                  boxShadow:
                    '0px 1.54966px 3.15467px 0px rgba(0, 0, 0, 0.05), 0px 3.72406px 7.58112px 0px rgba(150, 151, 169, 0.07), 0px 12.50833px 25.46339px 0px rgba(150, 151, 169, 0.10), 0px 56px 114px 0px rgba(150, 151, 169, 0.17)',
                }}
              >
                <div>
                  <div className={`w-[100px] flex justify-center rounded-full ${active === index + 1? 'bg-[#816BD9]':'bg-[#F3F3FA]' } mb-5`}>
                    <Image
                      src={active === index + 1? item.iconLight : item.iconDark}
                      width={32}
                      height={32}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full flex mb-5">
                  <span className="font-manrope text-xl font-medium">
                    {item.nickname}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ExpertiseBox
