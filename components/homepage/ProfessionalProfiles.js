import { Container } from '../templates/Container'
import React, { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { TitleContainer } from '../templates/TitleContainer'
import { HiLocationMarker } from 'react-icons/hi'
import { profiles } from '../../utils/const/people'
import Image from 'next/image'
import Link from 'next/link'

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
      <div className="py-14 sm:py-[100px] md:py-[100px] md:px-40 xl:px-80 2xl:px-[312px]">
        <TitleContainer
          title="Professional Profiles"
          description="Meet our experts for this area in Sydney & Melbourne"
        />
      </div>
      <div className="flex flex-col items-center">
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
