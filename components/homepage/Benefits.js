import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import Image from 'next/image'
import React, { useState } from 'react'
import { benifits } from '../../utils/const/benefits'

export default function Benefits() {
  const [selectedCard, setSelectedCard] = useState(1)

  return (
    <Container className="flex flex-col px-12 sm:px-0 md:px-20 xl:px-40 py-[60px] sm:py-[100px] md:py-[120px] border-bottom-base gap-[70px]">
      <TitleContainer title="Benefits" />
      <div className="w-full flex flex-col sm:flex-row sm:overflow-x-auto md:overscroll-none items-start gap-6 sm:gap-14 md:gap-6 font-manrope sm:pb-16 md:pb-0 sm:px-[107px] md:px-0 cursor-pointer">
        {benifits.map((benifit) => (
          <div
            key={benifit.id}
            className={`sm:w-[90%] sm:shrink-0 md:shrink md:sh md:w-1/3 py-8 flex flex-col justify-center items-center rounded-l cursor-pointer,
                  ${
                    selectedCard == benifit.id
                      ? 'selected-benifit-card'
                      : 'border-2 border-[#F0E7D0] #FFFEF8'
                  }`}
            onClick={() => {
              setSelectedCard(benifit.id)
            }}
          >
            <div
              className={`mb-12 flex justify-center items-center rounded-full w-[58px] h-[58px] sm:w-[170px] sm:h-[170px] md:w-24 md:h-24 xl:w-[120px] xl:h-[120px] benifit-card-icon ${
                selectedCard === benifit.id ? 'bg-[#816BD9]' : 'bg-white'
              }`}
            >
              <Image
                src={
                  +selectedCard === benifit.id
                    ? '/benifits/active-' + benifit.imgSrc
                    : '/benifits/' + benifit.imgSrc
                }
                width={48}
                height={48}
                color="white"
                className="w-[23px] h-[23px] sm:w-[67px] sm:h-[67px] md:w-12 md:h-12"
                alt=""
              />
            </div>
            <h5 className="mb-8 text-sm sm:text-2xl md:text-xl xl:text-[32px] font-bold tracking-tight text-[#272940] whitespace-nowrap">
              {benifit.title}
            </h5>
            <p className="mb-8 text-xs sm:text-xl md:text-base xl:text-xl font-medium text-[#7A7B94] text-center px-12 md:px-2 xl:px-11">
              {benifit.content}
            </p>
            <a
              href={benifit.link}
              className="inline-flex text-xs sm:text-xl md:text-base xl:text-xl items-center font-semibold text-[#8069D8] hover:opacity-50 cursor-pointer"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}
