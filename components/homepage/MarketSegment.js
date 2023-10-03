import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { InnerContainer } from '../../components/templates/InnerContainer'
import { cards, cardsIndustry } from '../../utils/const/menus'

const marketSigment = [
  {
    header: 'STEP 1',
    title: 'What best describes you?',
    description:
      "We've delivered successful projects spanning multiple industries and functions and can draw on this expertise to provide seamless cross-disciplinary advice.",
  },
]
const marketSigment2 = [
  {
    header: 'STEP 2',
    title: 'What best describes your industry?',
    description:
      "We've delivered successful projects spanning multiple industries and functions and can draw on this expertise to provide seamless cross-disciplinary advice.",
  },
]
export const MarketSegment = ({
  cardIndex,
  onChange,
  cardIndexIndustry,
  onChangeIndustry,
}) => {
  const [collapseIndustry, setCollapseIndustry] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('')
  const [selectedItemIndustry, setSelectedItemIndustry] = useState('')
  const [selectedIconIndustry, setSelectedIconIndustry] = useState('')

  const onSelected = (index) => {
    const item = cards.filter((val) => val.id === index + 1)[0]
    setSelectedItem(item?.name)
    setSelectedIcon(item?.iconLight)
  }

  const onSelectedIndustry = (index) => {
    const item = cardsIndustry.filter((val) => val.id === index + 1)[0]
    setSelectedItemIndustry(item?.name)
    setSelectedIconIndustry(item?.iconLight)
  }

  const onCollapse = () => {
    setCollapse(!collapse)
  }

  const onCollapseIndustry = () => {
    setCollapseIndustry(!collapseIndustry)
  }
  return (
    <div className="bg-marketsegment">
      <InnerContainer>
        <div className="w-full flex flex-col gap-10 sm:gap-10 py-16 sm:py-20 md:py-20 px-12 sm:px-[106px] md:px-11 xl:px-32 2xl:px-40 items-center">
          <div className="flex flex-col md:items-start gap-[30px] sm:gap-[30px] md:gap-10 w-full">
            <div className="flex w-full justify-center items-center">
              <span className="font-lora font-medium text-4xl md:text-5xl sm:text-4xl  text-[#272940] text-center md:text-left">
                <h2>{'Tailoring your experience'}</h2>
              </span>
            </div>
            <div className="md:w-full flex flex-row justify-between md:items-start">
              <div className="md:w-1/2 flex flex-col item -center md:items-start gap-8 md:gap-[10px]">
                <span className="font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-2xl md:text-xl text-[#40320f80] text-left md:text-left">
                  {marketSigment[0].header}
                </span>
                <div className="flex py-1 gap-[10px]">
                  <span className="w-48 md:w-full font-lora font-medium text-xl sm:text-4xl  text-[#272940] text-left md:text-left">
                    <h3>{marketSigment[0].title}</h3>
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  onCollapse()
                  onChange(-1)
                }}
                className={`${
                  collapse ? 'flex' : 'hidden'
                } flex-row justify-center text-center mr-5 py-[10px] sm:py-6 gap-[10px] sm:gap-6 bg-white rounded w-1/5 sm:w-[200px] h-20 w-100 cursor-pointer`}
                style={{
                  boxShadow:
                    '0px 124px 253px rgba(150, 151, 169, 0.17), 0px 27px 56px rgba(150, 151, 169, 0.101338), 0px 8px 16px rgba(150, 151, 169, 0.0686618), 0px 3px 7px rgba(0, 0, 0, 0.0477948)',
                  border: '1px solid #000000',
                }}
              >
                <span className="font-manrope text-[10px] sm:text-xl text-[#000000] whitespace-nowrap pl-10 pr-10 flex justify-center items-center">
                  Clear Section
                </span>
              </div>
            </div>
            <div className={`${collapse ? 'hidden' : 'flex'}`}>
              <div className="hidden md:grid grid-cols-2 grid-flow-row gap-6 items-stretch">
                {cards.map((card, index) => (
                  <div
                    className={`${
                      cardIndex - 1 === index ? 'bg-[#a290ea]' : ''
                    }`}
                    key={index}
                  >
                    <div
                      key={index}
                      className={`flex p-8 h-72 rounded-sm cursor-pointer ${
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
                            className={`font-manrope font-medium text-xl ${
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
          {collapse && (
            <div className="flex w-full">
              <div
                className="flex flex-row pl-5 md:pl-10  mr-5 py-[10px] sm:py-6 gap-[10px] sm:gap-6 bg-gradient-to-r from-[#61638D] to-[#494B70]  border-[#DCC895] rounded w-full"
                style={{
                  boxShadow:
                    '0px 124px 253px rgba(150, 151, 169, 0.17), 0px 27px 56px rgba(150, 151, 169, 0.101338), 0px 8px 16px rgba(150, 151, 169, 0.0686618), 0px 3px 7px rgba(0, 0, 0, 0.0477948)',
                }}
              >
                <span
                  style={{ width: 48, height: 48 }}
                  className="bg-[#816BD9] rounded-full flex justify-center items-center"
                >
                  <Image
                    src={selectedIcon}
                    width={30}
                    height={30}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                    alt=""
                  />
                </span>
                <span className="font-manrope text-[10px] sm:text-xl text-white whitespace-nowrap flex justify-center items-center">
                  {selectedItem}
                </span>
              </div>
            </div>
          )}

          {/* --------------------- Industry Section ------------------- */}
          <div className="w-full">
            <div className="md:w-full flex flex-row justify-between md:items-start">
              <div className="w-full flex flex-col item-center md:items-start gap-8 md:gap-[10px]">
                <span className="font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-2xl md:text-xl text-[#40320f80] text-left md:text-left">
                  {marketSigment2[0].header}
                </span>
                <div className="flex pb-10 md:pb-0 gap-[10px] justify-left">
                  <h3 className="w-48 md:w-full font-lora font-medium text-xl sm:text-4xl  text-[#272940] text-left md:text-left">
                    {marketSigment2[0].title}
                  </h3>
                </div>
              </div>
              <div
                onClick={() => {
                  onCollapseIndustry()
                  onChangeIndustry(-1)
                }}
                className={`${
                  collapseIndustry ? 'flex' : 'hidden'
                } flex-row justify-center text-center py-[10px] mr-5 sm:py-6 gap-[10px] sm:gap-6 bg-white rounded w-1/5 sm:w-[200px] cursor-pointer h-20 w-100`}
                style={{
                  boxShadow:
                    '0px 124px 253px rgba(150, 151, 169, 0.17), 0px 27px 56px rgba(150, 151, 169, 0.101338), 0px 8px 16px rgba(150, 151, 169, 0.0686618), 0px 3px 7px rgba(0, 0, 0, 0.0477948)',
                  border: '1px solid #000000',
                }}
              >
                <span className="font-manrope text-[10px] sm:text-xl text-[#000000] whitespace-nowrap pl-10 pr-10 flex justify-center items-center">
                  Clear Section
                </span>
              </div>
            </div>
            <div className={`${collapseIndustry ? 'hidden' : 'flex'}`}>
              <div className="hidden md:grid grid-cols-2 grid-flow-row gap-6 mt-10 items-stretch">
                {cardsIndustry.map((card, index) => (
                  <div
                    className={`${
                      cardIndexIndustry - 1 === index ? 'bg-[#a290ea]' : ''
                    }`}
                    key={index}
                  >
                    <div
                      key={index}
                      className={`flex p-8 h-72 rounded-sm cursor-pointer ${
                        cardIndexIndustry - 1 === index
                          ? 'bg-marketsegment-selected-card'
                          : 'bg-marketsegment-non-selected-card'
                      } ${
                        cardIndexIndustry - 1 === index
                          ? 'border-[5px] border-[#a290ea]'
                          : ''
                      }`}
                      onClick={() => {
                        onChangeIndustry(index)
                        onSelectedIndustry(index)
                        onCollapseIndustry()
                      }}
                    >
                      <div className="flex flex-col gap-6 w-full">
                        <div
                          className={`w-20 h-20 rounded-full flex items-center justify-center  ${
                            cardIndexIndustry - 1 === index
                              ? 'bg-[#816BD9]'
                              : 'bg-[#F3F3FA]'
                          }`}
                          style={{
                            boxShadow: `${
                              cardIndexIndustry - 1 === index
                                ? '5px 4px 21px rgba(0, 0, 0, 0.25)'
                                : ''
                            } `,
                          }}
                        >
                          <Image
                            src={
                              cardIndexIndustry - 1 === index
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
                              cardIndexIndustry - 1 === index
                                ? 'text-white'
                                : 'text-[#272940]'
                            }`}
                          >
                            {card.name}
                          </span>
                          <span
                            className={`font-manrope text-base text-xl ${
                              cardIndexIndustry - 1 === index
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
            </div>
            <div
              className={`${
                collapseIndustry ? 'hidden' : 'flex'
              } md:hidden flex flex-col items-center justify-center gap-8 w-full`}
            >
              {cardsIndustry.map((card, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-6 sm:px-[50px] sm:py-[30px] gap-5 cursor-pointer w-full ${
                    cardIndexIndustry - 1 === index
                      ? 'bg-marketsegment-selected-card'
                      : 'bg-marketsegment-non-selected-card'
                  }`}
                  onClick={() => {
                    onChangeIndustry(index)
                    onSelectedIndustry(index)
                    onCollapseIndustry()
                  }}
                >
                  <div className="flex flex-row items-center gap-6 w-full">
                    <div className="flex flex-row items-center gap-8 w-[90%]">
                      <div
                        className={`w-10 h-10 sm:w-[88px] sm:h-[88px] rounded-full flex items-center justify-center  ${
                          cardIndexIndustry - 1 === index
                            ? 'bg-[#816BD9]'
                            : 'bg-[#F3F3FA]'
                        }`}
                        style={{
                          boxShadow: `${
                            cardIndexIndustry - 1 === index
                              ? '5px 4px 21px rgba(0, 0, 0, 0.25)'
                              : ''
                          } `,
                        }}
                      >
                        <Image
                          src={
                            cardIndexIndustry - 1 === index
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
                          cardIndexIndustry - 1 === index
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
                        cardIndexIndustry - 1 === index
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'white'
                      }`}
                      className={`w-6 h-6 sm:w-14 sm:h-14 ${
                        cardIndexIndustry - 1 === index
                          ? 'rotate-180 '
                          : 'rounded-full bg-[#C8C2B4]/30'
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span
                      className={`font-manrope font-medium text-[10px] sm:text-xl ${
                        cardIndexIndustry - 1 === index
                          ? 'text-white'
                          : 'text-[#7A7B94]'
                      }`}
                    >
                      {card.description}
                    </span>
                  </div>
                  {cardIndexIndustry - 1 === index && (
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
          {collapseIndustry && (
            <div className="flex w-full ">
              <div
                className="flex flex-row pl-5 md:pl-10 mr-5 py-[10px] sm:py-6 gap-[10px] sm:gap-6 bg-gradient-to-r from-[#61638D] to-[#494B70]  border-[#DCC895] rounded w-full"
                style={{
                  boxShadow:
                    '0px 124px 253px rgba(150, 151, 169, 0.17), 0px 27px 56px rgba(150, 151, 169, 0.101338), 0px 8px 16px rgba(150, 151, 169, 0.0686618), 0px 3px 7px rgba(0, 0, 0, 0.0477948)',
                }}
              >
                <span
                  style={{ width: 48, height: 48 }}
                  className="bg-[#816BD9] rounded-full flex justify-center items-center"
                >
                  <Image
                    src={selectedIconIndustry}
                    width={30}
                    height={30}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                    alt=""
                  />
                </span>
                <span className="font-manrope text-[10px] sm:text-xl text-white whitespace-nowrap flex justify-center items-center">
                  {selectedItemIndustry}
                </span>
              </div>
            </div>
          )}
        </div>
      </InnerContainer>
    </div>
  )
}
