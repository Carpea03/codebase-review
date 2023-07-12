import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import { InnerContainer } from '../templates/InnerContainer'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import useContentStore from '../../store/useContent.store'
import { services } from '../../utils/const/services'

export const OurServices = () => {
  const menuState = useContentStore((state) => state.menuState)
  const [selectedMenu, setSelectedMenu] = useState(0)

  useEffect(() => {
    setSelectedMenu(menuState)
  }, [menuState])

  return (
    <Container className="flex flex-col sm:py-[100px] md:py-[20px] gap-[70px] bg-ourservice">
      <InnerContainer>
        <div className="flex items-center justify-center py-10 ">
          <span className="font-lora font-medium text-xl sm:text-[44px] leading-none md:text-5xl text-[#8370D5] md:text-[#5F618C] text-center">
            Working with Us
          </span>
        </div>
        <div className="flex flex-col pb-20">
          <div className="hidden md:flex flex-col items-center gap-[54px] md:px-20 xl:px-40">
            {services[selectedMenu]?.map((service) => (
              <div
                key={service.id}
                className="flex flex-row items-center h-full"
              >
                <div
                  className={`w-1/2 flex items-center justify-center ${
                    service.id % 2 == 0 ? 'order-last' : 'order-first'
                  }`}
                >
                  <Image
                    src={service.img}
                    className="object-cover"
                    width={300}
                    height={300}
                    alt=""
                  />
                </div>
                <div
                  className={`w-1/2 flex flex-col items-start ${
                    service.id % 2 == 0
                      ? 'order-first'
                      : 'order-last pl-[116px]'
                  }`}
                >
                  <span className="mb-5 font-manrope font-medium text-4xl text-[#272940]">
                    {service.title}
                  </span>
                  <span className="mb-10 font-manrope font-semibold text-xl text-[#7A7B94]">
                    {service.content}
                  </span>
                  <a
                    href={services[selectedMenu]?.link}
                    className="inline-flex items-center font-manrope font-semibold text-2xl text-[#272940] hover:opacity-50 cursor-pointer"
                  >
                    <p className="mr-7">Learn more</p>
                    <FiArrowRightCircle size={20} color={'#8069D8'} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative flex flex-row items-stretch gap-6 sm:gap-14 overflow-x-auto pb-36 px-9 sm:px-11">
            {services[selectedMenu]?.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-start w-[80%] shrink-0 p-6 sm:p-14 gap-6 sm:gap-14 bg-ourservice-card"
              >
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src={service.img}
                    width={205}
                    height={238}
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-start gap-6 sm:gap-14 h-[30%]">
                  <span className="font-manrope font-medium text-sm sm:text-2xl text-[#272940]">
                    {service.title}
                  </span>
                  <span className="font-manrope font-medium text-[10px] sm:text-xl text-[#7A7B94]">
                    {service.content}
                  </span>
                </div>
                <div className="h-[10%] flex flex-col justify-end w-full cursor-pointer hover:opacity-50">
                  <a
                    href={services[selectedMenu]?.link}
                    className="inline-flex justify-end items-center font-manrope font-semibold text-[10px] sm:text-2xl text-[#272940]"
                  >
                    <p className="mr-7">Learn more</p>
                    <FiArrowRightCircle size={20} color={'#8069D8'} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InnerContainer>
    </Container>
  )
}
