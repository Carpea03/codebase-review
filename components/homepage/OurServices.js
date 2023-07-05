import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import { IoArrowForwardOutline } from 'react-icons/io5'
import useContentStore from '../../store/useContent.store'
import { topMenus } from '../../utils/const/menus'
import { services } from '../../utils/const/services'
import Link from 'next/link'

export const OurServices = () => {
  const menuState = useContentStore((state) => state.menuState)
  const [selectedMenu, setSelectedMenu] = useState(0)

  useEffect(() => {
    setSelectedMenu(menuState - 1)
  }, [menuState])

  return (
    <Container className="flex flex-col py-[60px] sm:py-[100px] md:py-[40px] gap-[70px] bg-ourservice">
      <TitleContainer subDescription={'Working with Us'} />
      <div className="flex flex-col">
        <div className="hidden md:flex flex-col items-center gap-[54px] md:px-20 xl:px-40">
          {services[selectedMenu === -1 ? 0 : selectedMenu]?.map((service) => (
            <div key={service.id} className="flex flex-row items-center h-full">
              <div
                className={`w-1/2 flex items-center justify-center ${
                  service.id % 2 == 0 ? 'order-last' : 'order-first'
                }`}
              >
                <Image
                  src={service.img}
                  className="object-cover"
                  width={205}
                  height={238}
                  alt=""
                />
              </div>
              <div
                className={`w-1/2 flex flex-col items-start ${
                  service.id % 2 == 0 ? 'order-first' : 'order-last pl-[116px]'
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
        <div className="flex justify-center items-center md:pt-[100px] mt-7 sm:mt-14">
          <Link href="/services">
            <div className="flex flex-row gap-6 btn-discover py-6 sm:py-14 w-[203px] h-11 sm:w-[496px] sm:h-[98px] md:py-6 md:w-[318px] md:h-[88px] justify-center items-center cursor-pointer hover:opacity-80">
              <p className="font-manrope font-semibold text-[10px] leading-4 sm:text-2xl md:text-xl text-white">
                Discover more service
              </p>
              <div className="bg-white w-6 h-6 sm:w-14 sm:h-14 md:w-10 md:h-10 rounded-full flex justify-center items-center">
                <IoArrowForwardOutline size={16} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}
