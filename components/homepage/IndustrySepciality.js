import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import React, { useState } from 'react'
import Image from 'next/image'

const industries = [
  {
    id: 1,
    normalIcon: '/industrySpeciality/energy-normal.svg',
    activeIcon: '/industrySpeciality/energy-active.svg',
    content: 'Electronics & Electromechanical',
  },
  {
    id: 2,
    normalIcon: '/industrySpeciality/earphones-alt-normal.svg',
    activeIcon: '/industrySpeciality/earphones-alt-active.svg',
    content: 'Consumer Products',
  },
  {
    id: 3,
    normalIcon: '/industrySpeciality/medical-normal.svg',
    activeIcon: '/industrySpeciality/medical-active.svg',
    content: 'Mechanical',
  },
  {
    id: 4,
    normalIcon: '/industrySpeciality/energy-normal.svg',
    activeIcon: '/industrySpeciality/energy-active.svg',
    content: 'Physics & Optical Engineering',
  },
  {
    id: 5,
    normalIcon: '/industrySpeciality/chemistry-normal.svg',
    activeIcon: '/industrySpeciality/chemistry-active.svg',
    content: 'Chemistry, Biotech, Pharmaceuticals',
  },
  {
    id: 6,
    normalIcon: '/industrySpeciality/energy-normal.svg',
    activeIcon: '/industrySpeciality/energy-active.svg',
    content: 'Software, Mobile & Apps',
  },
  {
    id: 7,
    normalIcon: '/industrySpeciality/grid-normal.svg',
    activeIcon: '/industrySpeciality/grid-active.svg',
    content: 'Civil & Construction',
  },
  {
    id: 8,
    normalIcon: '/industrySpeciality/medical-normal.svg',
    activeIcon: '/industrySpeciality/medical-active.svg',
    content: 'Medical Devices',
  },
  {
    id: 9,
    normalIcon: '/industrySpeciality/wrench-normal.svg',
    activeIcon: '/industrySpeciality/wrench-active.svg',
    content: 'Electronics & Electromechanical',
  },
  {
    id: 10,
    normalIcon: '/industrySpeciality/wrench-normal.svg',
    activeIcon: '/industrySpeciality/wrench-active.svg',
    content: 'Civil & Construction',
  },
  {
    id: 11,
    normalIcon: '/industrySpeciality/medical-normal.svg',
    activeIcon: '/industrySpeciality/medical-active.svg',
    content: 'Medical Devices',
  },
  {
    id: 12,
    normalIcon: '/industrySpeciality/wrench-normal.svg',
    activeIcon: '/industrySpeciality/wrench-active.svg',
    content: 'Electronics & Electromechanical',
  },
  {
    id: 13,
    normalIcon: '/industrySpeciality/wrench-normal.svg',
    activeIcon: '/industrySpeciality/wrench-active.svg',
    content: 'Civil & Construction',
  },
]
export const IndustrySepciality = () => {
  const [selectedCard, setSelectedCard] = useState(1)

  return (
    <>
      <div className="-mt-16">
        <Container className="bg-industry-speciality !bg-cover">
          <div className="relative overflow-hidden pt-12 sm:pt-[109px]  md:pt-36 flex flex-col gap-20">
            <div className="flex flex-col justify-center items-center md:hidden px-20 sm:px-[192px]">
              <TitleContainer
                title="Corporate / SME"
                description="Our Industry Speciality"
              />
            </div>
            <div className="hidden md:flex flex-col justify-center items-center">
              <TitleContainer
                title="Corporate / SME"
                description="Our Industry Speciality"
              />
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-1 sm:gap-3 md:gap-x-8 md:gap-y-6 w-full overflow-x-scroll pb-16">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className={`w-[90px] sm:w-[201px] md:w-[350px] flex flex-col md:flex-row items-center justify-center md:justify-start gap-y-2 sm:gap-6 px-4 py-4 sm:py-[30px] sm:px-6 rounded-sm cursor-pointer ${
                    selectedCard === industry.id
                      ? 'selected-industry-card bg-black border-4 border-solid border-[#A290EA]'
                      : 'non-selected-industry-card'
                  }`}
                  onClick={() => {
                    setSelectedCard(industry.id)
                  }}
                >
                  <div
                    className={`rounded-full w-[26px] h-[26px] sm:w-14 sm:h-14 md:w-20 md:h-20 md:min-w-[80px] flex justify-center items-center ${
                      selectedCard === industry.id
                        ? 'selected-industry-card-icon'
                        : 'bg-[#F3F3FA]'
                    }`}
                  >
                    <Image
                      alt=""
                      src={
                        selectedCard === industry.id
                          ? industry.activeIcon
                          : industry.normalIcon
                      }
                      className="w-2 h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-manrope font-medium text-[8px] sm:text-base md:text-xl text-center  md:text-left ${
                        selectedCard === industry.id
                          ? 'text-white'
                          : 'text-[#272940]'
                      }`}
                    >
                      {industry.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
