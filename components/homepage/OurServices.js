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
    <Container className="flex flex-col sm:py-[70px] md:py-[20px] gap-[70px] bg-ourservice">
      <InnerContainer>
        <div className="flex items-center justify-center py-10 ">
          <span className="font-lora font-medium text-xl sm:text-[44px] leading-none md:text-5xl md:text-[#5F618C] text-center">
            <h2>Working with us</h2>
          </span>
        </div>
        <div className="flex flex-col pb-20">
          <div className="hidden sm:flex flex-col items-center sm:px-[42px] md:px-20 xl:px-40">
            {services[selectedMenu]?.map((service) => (
              <div
                key={service.id}
                className="flex flex-row items-center h-full"
              >
                <div
                  className={`w-1/2 sm:w-[300px] md:w-1/2 flex items-center justify-center ${
                    service.id % 2 == 0 ? 'order-last' : 'order-first'
                  }`}
                >
                  <div className='hidden sm:flex md:hidden'>
                    <Image
                      src={service.img}
                      className="object-cover"
                      width={194.07}
                      height={163.414}
                      alt=""
                    />
                  </div>
                  <div className='hidden md:flex'>
                    <Image
                      src={service.img}
                      className="object-cover"
                      width={558}
                      height={300}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={`w-1/2 sm:w-full md:w-1/2 flex flex-col items-start ${
                    service.id % 2 == 0
                      ? 'order-first'
                      : 'md:order-last md:pl-[116px]'
                  }`}
                >
                  <span className="mb-5 font-manrope font-medium  sm:text-[32px] md:text-4xl text-[#272940]">
                    <h3>{service.title}</h3>
                  </span>
                  <span className="mb-10 font-manrope font-semibold sm:text-[20px] md:text-xl text-[#7A7B94]">
                    {service.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex flex-col px-[32px] gap-10">
            {services[selectedMenu]?.map((service) => (
              <div key={service.id} className="flex justify-center">
                <div className="flex flex-col justify-center gap-4">
                  <div className="flex justify-center">
                    <Image
                      src={service.icon}
                      width={80}
                      height={83.56}
                      className="object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center item-center text-center">
                    <span className="font-manrope font-medium text-[16px] ">
                      <h3>{service.title}</h3>
                    </span>
                  </div>
                  <div className="flex justify-center item-center text-center">
                    <span className="font-manrope font-medium text-[14px] sm:text-xl text-[#7A7B94]">
                      {service.content}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="md:hidden relative flex flex-row items-stretch gap-6 sm:gap-14 overflow-x-auto pb-36 px-9 sm:px-11">
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
                  <h3 className="font-manrope font-medium text-sm sm:text-2xl text-[#272940]">
                    {service.title}
                  </h3>
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
          </div> */}
        </div>
      </InnerContainer>
    </Container>
  )
}
