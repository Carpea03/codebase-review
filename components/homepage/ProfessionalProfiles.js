import { Container } from '../templates/Container'
import React, { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { TitleContainer } from '../templates/TitleContainer'
import { HiLocationMarker } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'

const profiles = [
  {
    id: 1,
    teamName: 'Sydney teams',
    teamMembers: [
      {
        id: 1,
        name: 'Julia Caunt',
        positions: ['Senior Associate', 'Trade Mark Attorney'],
        url: '',
      },
      {
        id: 2,
        name: 'Chris Baxter',
        positions: ['Managing Director', 'Patent & Trade Mark Attorney'],
        url: '/professionalProfiles/peoples/chris.png',
      },
      {
        id: 3,
        name: 'Martin Earley',
        positions: [
          'Director',
          'Victoria region manager',
          'Patent & trademark attorney',
        ],
        url: '/professionalProfiles/peoples/martin.png',
      },
      {
        id: 4,
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate', 'Patent Attorney'],
        url: '',
      },
      {
        id: 5,
        name: 'Warren Chandler',
        positions: ['Senior Associate', 'Patent & Trade Mark Attorney'],
        url: '',
      },
      {
        id: 6,
        name: 'Andrew Balis',
        positions: ['Associate', 'Patent & trademark attorney'],
        url: '/professionalProfiles/peoples/andrew.png',
      },
    ],
  },
  {
    id: 2,
    teamName: 'Melbourne teams',
    teamMembers: [
      {
        id: 1,
        name: 'Julia Caunt',
        positions: ['Senior Associate', 'Trade Mark Attorney'],
        url: '',
      },
      {
        id: 2,
        name: 'Chris Baxter',
        positions: ['Managing Director', 'Patent & Trade Mark Attorney'],
        url: '/professionalProfiles/peoples/chris.png',
      },
      {
        id: 3,
        name: 'Martin Earley',
        positions: [
          'Director',
          'Victoria region manager',
          'Patent & trademark attorney',
        ],
        url: '/professionalProfiles/peoples/martin.png',
      },
      {
        id: 4,
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate', 'Patent Attorney'],
        url: '',
      },
      {
        id: 5,
        name: 'Warren Chandler',
        positions: ['Senior Associate', 'Patent & Trade Mark Attorney'],
        url: '',
      },
      {
        id: 6,
        name: 'Andrew Balis',
        positions: ['Associate', 'Patent & trademark attorney'],
        url: '/professionalProfiles/peoples/andrew.png',
      },
    ],
  },
]

const slides = [
  {
    id: 1,
    image: '/professionalProfiles/slider-1.png',
    description:
      'There is no surer way to create jobs and wealth than by the commercialization of new ideas anchored on a strong intellectual property foundation.',
    who: 'Anne wan Managing Director, Patent & Trade Mark Attorney',
  },
  {
    id: 2,
    image: '/fillingStats/slide-1.png',
    description:
      ' the commercialization of new ideas anchored on a strong intellectual property foundation.',
    who: 'John Lu Managing Director, Patent & Trade Mark Attorney',
  },
]
const SlideButton = ({ className, children, onClick = {} }) => {
  return (
    <div
      className={`w-12 h-12 sm:w-[106px] sm:h-[106px] md:w-40 md:h-40 backdrop-blur-xl bg-gray-800 flex justify-center items-center ${className}`}
      style={{ background: 'rgba(0, 0, 0, 0.2)' }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default function ProfessionalProfiles() {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [selectSlide, setSelectSlide] = useState(0)

  const prevSlide = () => {
    const isLastSlide = selectSlide === slides.length - 1
    const newIndex = isLastSlide ? 0 : selectSlide + 1
    setSelectSlide(newIndex)
  }
  const nextSlide = () => {
    const isFirstSlide = selectSlide === 0
    const newIndex = isFirstSlide ? slides.length - 1 : selectSlide - 1
    setSelectSlide(newIndex)
  }

  return (
    <Container className="px-0">
      <div className="py-14 sm:py-[100px] md:py-[120px] md:px-40 xl:px-80 2xl:px-[312px]">
        <TitleContainer
          title="Professional Profiles"
          description="Meet our experts for this area in Sydney & Melbourne"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row w-full">
          <div
            className={`flex flex-row w-1/2 justify-center items-center py-5 sm:py-8 cursor-pointer ${
              selectedMenu === 0
                ? 'bg-selected-sydney-team-menu'
                : 'bg-non-selected-sydney-team-menu'
            }`}
            onClick={() => {
              setSelectedMenu(0)
            }}
          >
            <div
              className={`flex flex-row gap-2 ${
                selectedMenu === 0 ? '' : 'rotate-180'
              }`}
            >
              {selectedMenu === 0 ? (
                <HiLocationMarker fill="#7568D1" size={31} />
              ) : (
                <HiLocationMarker
                  fill="none"
                  stroke="#272940"
                  strokeWidth={1}
                  size={31}
                  className="border-none"
                />
              )}
              <span className="font-manrope font-semibold text-base md:text-2xl text-[#272940]">
                {profiles[0].teamName}
              </span>
            </div>
          </div>
          <div
            className={`flex flex-row w-1/2 justify-center items-center py-5 sm:py-8 cursor-pointer ${
              selectedMenu === 1
                ? 'bg-selected-melbourne-team-menu'
                : 'bg-non-selected-melbourne-team-menu'
            }`}
            onClick={() => {
              setSelectedMenu(1)
            }}
          >
            <div
              className={`flex flex-row gap-2 ${
                selectedMenu === 1 ? 'rotate-180' : ''
              }`}
            >
              {selectedMenu === 1 ? (
                <HiLocationMarker fill="#7568D1" size={31} />
              ) : (
                <HiLocationMarker
                  fill="none"
                  stroke="#272940"
                  strokeWidth={1}
                  size={31}
                />
              )}
              <span className="font-manrope font-semibold text-base md:text-2xl text-[#404266]">
                {profiles[1].teamName}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        {/** loader */}
        <div className="w-full h-[10px] bg-[#F0E3C3]">
          <div
            className={`h-full bg-[#816BD9] w-${selectSlide + 1}/${
              slides.length
            }`}
          />
        </div>
        <div
          className="flex flex-col bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[selectSlide].image})` }}
        >
          <div className="flex flex-col w-full pt-24 sm:pt-52 md:pt-32 xl:pt-44 2xl:pt-56 pl-12 sm:pl-24 md:pl-28 lg:pl-32 xl:pl-40 pr-20 sm:pr-40 md:pr-48 lg:pr-80 xl:pr-[540px]">
            <div className="flex flex-col items-start py-6 sm:py-14 md:py-6 gap-[10px] sm:gap-6">
              <FaQuoteLeft
                className="w-8 h-8 sm:w-16 sm:h-16 md:w-8 md:h-8"
                color={'#FFCE4F'}
              />
              <span className="font-lora font-semibold text-sm sm:text-[32px] sm:leading-10 md:text-[40px] md:leading-[51px] text-white">
                {slides[selectSlide].description}
              </span>
              <span className="font-lora italic font-semibold text-xs sm:text-2xl md:text-xl text-white">
                {slides[selectSlide].who}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-end justify-end">
            <SlideButton
              className="hover:opacity-80 cursor-pointer"
              onClick={prevSlide}
            >
              <MdKeyboardArrowRight
                size={32}
                color="#E6E6E6"
                className="w-[2xp] h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
                style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
              />
            </SlideButton>
            <SlideButton
              className="hover:opacity-80 cursor-pointer"
              onClick={nextSlide}
            >
              <MdKeyboardArrowLeft
                size={32}
                color="#E6E6E6"
                className="w-[2xp] h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
                style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
              />
            </SlideButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center py-6 sm:py-14 border-[1px] border-solid border-[#F0E4C3] w-full">
          <span className="font-manrope font-semibold text-xs sm:text-2xl text-[#272940]">
            Our {profiles[selectedMenu].teamName}
          </span>
        </div>
        <div
          className="flex flex-col justify-center items-center py-12 w-full"
          style={{
            background:
              'linear-gradient(167.62deg, #FFFEF8 42.45%, #FFF3D0 91%)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 md:gap-4 px-12 sm:px-24 md:px-0">
            {profiles[selectedMenu].teamMembers.map((teamMember, index) => (
              <div
                key={index}
                className="bg-white rounded-sm cursor-pointer"
                style={{
                  boxShadow:
                    '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
                }}
              >
                <Image alt="" src={teamMember.url} width={200} height={200} />
                <div className="flex flex-col p-4 sm:p-8 md:p-6 gap-y-4 sm:gap-y-8 md:gap-y-6">
                  <div>
                    <span className="font-manrope font-medium text-[8px] sm:text-xl text-[#404266]">
                      {teamMember.name}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    {teamMember.positions.map((position, index) => (
                      <span
                        key={index}
                        className="font-lora italic font-medium text-[7px] sm:text-base md:text-xl text-[#7A7B94]"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/people">
            <div
              className="w-48 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md mt-24 flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
              style={{
                boxShadow:
                  '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
              }}
            >
              <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                Discover more experts
              </span>
              <div className="rounded-full w-6 h-6 sm:w-10 sm:h-10 bg-white flex justify-center items-center">
                <IoArrowForwardOutline
                  className="w-3 h-3 sm:w-5 sm:h-5 md:w-4 md:h-4"
                  strokeWidth={4}
                  size={16}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}
