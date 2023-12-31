import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDown,
  IoMdArrowUp,
} from 'react-icons/io'
import { InnerContainer } from '../templates/InnerContainer'
import { cards } from '../../utils/const/menus'

const marketSigment = [
  {
    header: 'Tailoring your experience: Step 2',
    title: 'What best describes your industry?',
    description:
      "We've delivered successful projects spanning multiple industries and functions and can draw on this expertise to provide seamless cross-disciplinary advice.",
  },
]
export const MarketSegment2 = ({ cardIndex, onChange }) => {
  const [collapse, setCollapse] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Corporate or SME')
  const onSelected = (index) => {
    const item = cards.filter((val) => val.id === index + 1)[0]
    setSelectedItem(item?.name)
  }
  const onCollapse = () => {
    setCollapse(!collapse)
  }
  return (
    <div className="bg-marketsegment">
      <InnerContainer>
        <div className="w-full flex flex-col gap-28 sm:gap-20 py-16 sm:py-24 md:py-20 px-12 sm:px-[106px] md:px-11 xl:px-32 2xl:px-40 items-center">
          <div
            className={`${
              collapse ? 'md:hidden' : 'flex'
            } flex flex-col items-center md:items-start gap-[86px] sm:gap-[120px] md:gap-16`}
          >
            <div className="md:w-1/2 flex flex-col item-center md:items-start gap-8 md:gap-[10px]">
              <span className="font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-2xl md:text-xl text-[#40320F]/50 text-center md:text-left">
                {marketSigment[0].header}
              </span>
              <div className="flex py-1 gap-[10px]">
                <span className="font-lora font-medium text-xl sm:text-4xl  text-[#272940] text-center md:text-left">
                  {marketSigment[0].title}
                </span>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 grid-flow-row gap-6 items-stretch">
              {cards.map((card, index) => (
                <div
                  className={`${cardIndex - 1 === index ? 'bg-[#a290ea]' : ''}`}
                  key={index}
                >
                  <div
                    key={index}
                    className={`flex p-7 h-72 rounded-sm cursor-pointer ${
                      cardIndex - 1 === index
                        ? 'bg-marketsegment-selected-card'
                        : 'bg-marketsegment-non-selected-card'
                    } ${
                      cardIndex - 1 === index
                        ? 'border-[5px] border-[#a290ea]'
                        : ''
                    }`}
                    onClick={() => {
                      onChange(index)
                      onSelected(index)
                      onCollapse()
                    }}
                  >
                    <div className="flex flex-col gap-6 w-full">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center  ${
                          cardIndex - 1 === index
                            ? 'bg-[#816BD9]'
                            : 'bg-[#F3F3FA]'
                        }`}
                        style={{
                          boxShadow: `${
                            cardIndex - 1 === index
                              ? '5px 4px 21px rgba(0, 0, 0, 0.25)'
                              : ''
                          } `,
                        }}
                      >
                        <Image
                          src={
                            cardIndex - 1 === index
                              ? card.iconLight
                              : card.iconDark
                          }
                          width={32}
                          height={32}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-4 ">
                        <span
                          className={`font-manrope font-medium text-2xl ${
                            cardIndex - 1 === index
                              ? 'text-white'
                              : 'text-[#272940]'
                          }`}
                        >
                          {card.name}
                        </span>
                        <span
                          className={`font-manrope text-base text-xl ${
                            cardIndex - 1 === index
                              ? 'text-white'
                              : 'text-[#7A7B94]'
                          }`}
                        >
                          {card.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`${
                collapse ? 'hidden' : 'flex'
              } md:hidden flex flex-col items-center justify-center gap-8 w-full`}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-6 sm:px-[50px] sm:py-[30px] gap-5 cursor-pointer w-full ${
                    cardIndex - 1 === index
                      ? 'bg-marketsegment-selected-card'
                      : 'bg-marketsegment-non-selected-card'
                  }`}
                  onClick={() => {
                    onChange(index)
                    onSelected(index)
                    onCollapse()
                  }}
                >
                  <div className="flex flex-row items-center gap-6 w-full">
                    <div className="flex flex-row items-center gap-8 w-[90%]">
                      <div
                        className={`w-10 h-10 sm:w-[88px] sm:h-[88px] rounded-full flex items-center justify-center  ${
                          cardIndex - 1 === index
                            ? 'bg-[#816BD9]'
                            : 'bg-[#F3F3FA]'
                        }`}
                        style={{
                          boxShadow: `${
                            cardIndex - 1 === index
                              ? '5px 4px 21px rgba(0, 0, 0, 0.25)'
                              : ''
                          } `,
                        }}
                      >
                        <Image
                          src={
                            cardIndex - 1 === index
                              ? card.iconLight
                              : card.iconDark
                          }
                          width={30}
                          height={30}
                          className="w-4 h-4 sm:w-8 sm:h-8"
                          alt=""
                        />
                      </div>
                      <span
                        className={`font-manrope font-medium text-sm sm:text-2xl ${
                          cardIndex - 1 === index
                            ? 'text-white'
                            : 'text-[#272940]'
                        }`}
                      >
                        {card.name}
                      </span>
                    </div>
                    <IoMdArrowDropdownCircle
                      size={54}
                      color={`${
                        cardIndex - 1 === index
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'white'
                      }`}
                      className={`w-6 h-6 sm:w-14 sm:h-14 ${
                        cardIndex - 1 === index
                          ? 'rotate-180 '
                          : 'rounded-full bg-[#C8C2B4]/30'
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span
                      className={`font-manrope font-medium text-[10px] sm:text-xl ${
                        cardIndex - 1 === index
                          ? 'text-white'
                          : 'text-[#7A7B94]'
                      }`}
                    >
                      {card.description}
                    </span>
                  </div>
                  {cardIndex - 1 === index && (
                    <div
                      className="flex flex-row items-center justify-center px-6 py-5 gap-6 bg-[#816BD9] rounded-md w-full h-[36px] sm:h-[73px] hover:opacity-80"
                      style={{
                        boxShadow: '11px 8px 46px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      <span className="font-manrope text-xs sm:text-2xl text-white">
                        Yes, this is me
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div onClick={onCollapse} className="flex gap-6 w-full">
            <div
              className="flex flex-row items-center justify-center py-[10px] sm:py-6 gap-[10px] sm:gap-6 bg-[#FFEAAC] border-[3px] border-[#DCC895] rounded w-full cursor-pointer hover:opacity-80"
              style={{
                boxShadow:
                  '0px 124px 253px rgba(150, 151, 169, 0.17), 0px 27px 56px rgba(150, 151, 169, 0.101338), 0px 8px 16px rgba(150, 151, 169, 0.0686618), 0px 3px 7px rgba(0, 0, 0, 0.0477948)',
              }}
            >
              <span className="font-manrope text-[10px] sm:text-xl text-black whitespace-nowrap">
                {`STEP 2: You: ${selectedItem} [Clear Selection]`}
              </span>
              {collapse ? (
                <IoMdArrowDown
                  size={24}
                  color="rgba(0, 0, 0, 0.3)"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              ) : (
                <IoMdArrowUp
                  size={24}
                  color="rgba(0, 0, 0, 0.3)"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              )}
            </div>
          </div>
        </div>
      </InnerContainer>
    </div>
  )
}
