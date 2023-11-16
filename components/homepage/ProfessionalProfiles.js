import { Container } from '../templates/Container'
import React, { useState, useEffect } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { TitleContainer } from '../templates/TitleContainer'
import { profiles, peopleIndustry, awards } from '../../utils/const/people'
import { cards } from '../../utils/const/menus'
import useContentStore from '../../store/useContent.store'
import Image from 'next/image'
import Link from 'next/link'
import { InnerContainer } from '../templates/InnerContainer'

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
  const [selectedMenu, setSelectedMenu] = useState([])
  const [selectSlide, setSelectSlide] = useState(0)
  const [selectIndustry, selectedIndustry] = useState(
    'Meet our patent & trade mark attorneys in Sydney & Melbourne'
  )
  const menuState2 = useContentStore((state) => state.menuState2)
  const [screenSize, setScreenSize] = useState(getCurrentDimension())

  useEffect(() => {
    const newProfiles = profiles[0].teamMembers.map((val) => {
      let itemContainer = []

      peopleIndustry
        .filter((val) => val.id === menuState2)[0]
        .item.map((item) => {
          if (item === val.id) {
            return itemContainer.push({ ...val })
          }
        })

      return itemContainer[0]
    })
    setSelectedMenu(newProfiles.filter((people) => people?.isShow === true))
    const item = cards.filter((val) => val.id === menuState2)[0]
    selectedIndustry(item?.name)
  }, [menuState2])

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

  function getCurrentDimension() {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }

    window.addEventListener('resize', updateDimension)

    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [screenSize])

  return (
    <Container className="flex flex-col gap-[70px]">
      <div
        style={{
          background: 'linear-gradient(168deg, #FFFEF8 42.45%, #FFF3D0 91%)',
        }}
      >
        <InnerContainer>
          <div className="px-[32px] mt-10 w-full flex justify-center">
            <div className="w-[600px] xl:w-[950px]">
              <TitleContainer
                description={`${
                  menuState2
                    ? `Meet our patent & trade mark attorneys specializing in ${selectIndustry} in Sydney & Melbourne`
                    : 'Meet our patent & trade mark attorneys in Sydney & Melbourne'
                }`}
              />
            </div>
          </div>
          <div className="px-[32px] sm:px-10 xl:px-8">
            <div className="xl:px-32">
              <div className="grid mt-10 grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 md:gap-4">
                {selectedMenu.map((teamMember, index) => (
                  <div
                    key={index}
                    className="bg-white  rounded-sm cursor-pointer"
                    style={{
                      boxShadow:
                        '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
                    }}
                  >
                    <Link href={teamMember.link} className='no-underline'>
                    <Image
                      alt=""
                      src={teamMember?.url}
                      sizes="100vw"
                      width={0}
                      height={0}
                      className="w-full"
                    />
                    <div className="flex flex-col p-3 sm:p-8 no-underline">
                      <div className="flex flex-col sm:flex-row w-full">
                        <div className="flex flex-col w-full md:w-[50%]">
                          <span className="font-manrope font-medium text-base sm:text-xl md:text-[20px] text-[#404266] pb-2 sm:pb-4">
                            {teamMember?.name}
                          </span>
                          <div className="flex flex-col w-full no-underline">
                            {teamMember?.positions?.map((position, index) => (
                              <span
                                key={index}
                                className="font-lora italic font-medium text-base sm:text-base md:text-[16px] text-[#7A7B94] sm:w-full md:w-[200px]"
                              >
                                {position}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className={`${teamMember?.awards.length !== 0? "flex justify-center mt-3 sm:justify-end w-full": "hidden"}`}>
                          <div className="flex flex-row sm:flex-col gap-2 sm:gap-0">
                            {teamMember?.awards?.map((award, index) => (
                              <>
                                <div
                                  className={`mb-5`}
                                >
                                  <Image
                                    key={index}
                                    src={`/professionalProfiles/awards/${
                                      awards?.filter(
                                        (value) => value.id == award
                                      )[0]?.title
                                    }.png`}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='w-[40px] sm:w-[60px]'
                                  />
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-20 md:mb-32">
                <Link href="/attorneys" className='no-underline'>
                  <div
                    className="w-48 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md mt-10 md:mt-20 flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                    style={{
                      boxShadow:
                        '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                    }}
                  >
                    <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                      Meet other IP attorneys
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
          </div>
        </InnerContainer>
      </div>
    </Container>

  )
}
