import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import { Listbox } from '@headlessui/react'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdArrowDropDown,
} from 'react-icons/md'
import { InnerContainer } from '../../components/templates/InnerContainer'

const menus = [
  {
    id: 1,
    name: 'Health Tech',
    hint: 'healthtech',
    image: '/fillingStats/product-1.png',
    title: 'Consumer Products',
    description:
      'Even if you are not directly responsible for the infringing behaviour, you must have procedures in place to monitor and take action to prevent any instances of infringem',
    design: 12,
    patent: 45,
    trademark: 20,
  },
  {
    id: 2,
    name: 'Enginering',
    hint: 'engineering',
    image: '/ipNewsBlog/slide-1.png',
    title: 'Best Engineering',
    description:
      'Even if you are not directly responsible for the infringing behaviour',
    design: 55,
    patent: 22,
    trademark: 42,
  },
  {
    id: 3,
    name: 'Software & Hardware',
    hint: 'sh',
    image: '/fillingStats/slide-3.png',
    title: 'Software & Hardware Products',
    description:
      'Even if you are not directly responsible for the infringing behaviour, you must have procedures in place to monitor and take action to prevent any instances of infringem',
    design: 23,
    patent: 66,
    trademark: 43,
  },
  {
    id: 4,
    name: 'FMCG',
    hint: 'fmcg',
    image: '/fillingStats/slide-1.png',
    title: 'FMCG Products',
    description:
      'you must have procedures in place to monitor and take action to prevent any instances of infringem',
    design: 76,
    patent: 23,
    trademark: 45,
  },
  {
    id: 5,
    name: 'Physics',
    hint: 'physics',
    image: '/fillingStats/slide-2.png',
    title: 'Physics Products',
    description:
      'Even if you are not directly responsible for the infringing behaviour, you must have procedures in place to monitor and take action to prevent any instances of infringem',
    design: 12,
    patent: 55,
    trademark: 75,
  },
]

const brands = [
  { id: 1, url: '/banner/unsw-sydney.svg' },
  { id: 2, url: '/banner/Founders 10x Accelerator.svg' },
]

const projects = [
  {
    id: 1,
    name: '10X IP Due Diligence',
    image: '/ipNewsBlog/slide-1.png',
    totalNumber: 2,
    totalHours: 54,
    budget: 650,
    activity:
      '1.Preparing script (22 pages), slides and delivering 6 video tutorials related to IP with recording and editing',
    estBudget: '32hrs @ $610 = $1,220',
  },
  {
    id: 2,
    name: 'New Wave',
    image: '/fillingStats/slide-2.png',
    totalNumber: 3,
    totalHours: 534,
    budget: 11232,
    activity:
      '2.Preparing script (22 pages), slides and delivering 6 video tutorials related to IP with recording and editing',
    estBudget: '2hrs @ $610 = $1,220',
  },
  {
    id: 3,
    name: 'Coach & Connect',
    image: '/fillingStats/slide-1.png',
    totalNumber: 2,
    totalHours: 4,
    budget: 23,
    activity:
      '3.Preparing script (22 pages), slides and delivering 6 video tutorials related to IP with recording and editing',
    estBudget: '44hrs @ $610 = $1,220',
  },
]

export const FillingStats = () => {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [selectedBrand, setSelectedBrand] = useState(0)
  const [selectedProject, setSelectedProject] = useState(0)
  const projectRef = useRef(null)
  const projectsRef = useRef(null)

  const prevMenuSlide = () => {
    const isFirstMenu = selectedMenu === 0
    const newIndex = isFirstMenu ? menus.length - 1 : selectedMenu - 1
    setSelectedMenu(newIndex)
  }

  const nextMenuSlide = () => {
    const isLastMenu = selectedMenu === menus.length - 1
    const newIndex = isLastMenu ? 0 : selectedMenu + 1
    setSelectedMenu(newIndex)
  }

  const prevBrandSlide = () => {
    const isFirstSlide = selectedBrand === 0
    const newIndex = isFirstSlide ? brands.length - 1 : selectedBrand - 1
    setSelectedBrand(newIndex)
  }

  const nextBrandSlide = () => {
    const isLastSlide = selectedBrand === brands.length - 1
    const newIndex = isLastSlide ? 0 : selectedBrand + 1
    setSelectedBrand(newIndex)
  }

  const prevProjectSlide = () => {
    const isFirstSlide = selectedProject === 0
    const newIndex = isFirstSlide ? projects.length - 1 : selectedProject - 1
    setSelectedProject(newIndex)
    //projectRef.current?.scrollIntoView();
  }

  const nextProjectSlide = () => {
    const isLastSlide = selectedProject === projects.length - 1
    const newIndex = isLastSlide ? 0 : selectedProject + 1
    setSelectedProject(newIndex)
    // console.log(projectRef);
    //projectRef.current?.scrollIntoView();
  }

  return (
    <div className="-mt-14">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <div className="w-full md:border-b-[1px] border-[#F0E4C3]">
              <InnerContainer>
                <div className="flex flex-col justify-center items-center pt-[133px] px-24 md:pb-10  ">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-5 md:gap-[108px]">
                    <div className="md:w-1/2 flex flex-col item-center md:items-start gap-[10px]">
                      <span className="uppercase font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-2xl md:text-xl text-[#40320F]/50 text-center md:text-left">
                        PRO BONO WORK
                      </span>
                      <div className="hidden md:flex flex-row items-center py-5 gap-[10px]">
                        <span className="font-lora font-medium text-xl sm:text-5xl leading-[70px] text-[#272940]">
                          Giving back to the community
                        </span>
                      </div>
                      <div className="md:hidden flex flex-row items-center py-5 gap-[10px]">
                        <span className="font-lora font-medium text-xl sm:text-5xl sm:leading-[70px] text-[#272940] text-center">
                          Baxter IP Founder program
                        </span>
                      </div>
                    </div>
                    <span className="md:w-1/2 font-manrope font-medium text-sm sm:text-[32px] sm:leading-[44px] md:text-xl text-black/50">
                      {
                        "In 2018 we committed to supporting Australian universities to help them help their academics & students in protecting and commercialising spin-out IP - and we've been hard at work ever since."
                      }
                    </span>
                  </div>
                  <div className="w-full flex flex-rows justify-center text-center">
                    {brands.map((brand, index) => (
                      <div
                        key={brand.id}
                        className="w-1/4  flex cursor-pointer"
                        onClick={() => setSelectedBrand(index)}
                      >
                        <Image
                          alt=""
                          key={brand.id}
                          src={brand.url}
                          className={` ${
                            selectedBrand === index
                              ? 'opacity-100'
                              : 'opacity-50'
                          }`}
                          width={500}
                          height={200}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </InnerContainer>
            </div>
            <div className="flex flex-col items-start w-full">
              {/** brands */}
              <InnerContainer>
                <div className="hidden w-full md:flex flex-row justify-center items-center" />
              </InnerContainer>
              <div className="w-full bg-[#FBF8F1]">
                <InnerContainer>
                  <div className="md:hidden w-full flex flex-row justify-center items-center py-6 sm:py-14 gap-8">
                    <div
                      className="w-1/3 flex flex-row justify-center items-center px-6 py-11 gap-6 hover:opacity-50 cursor-pointer"
                      onClick={prevBrandSlide}
                    >
                      <MdKeyboardArrowRight
                        size={19}
                        color="black"
                        style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
                      />
                    </div>
                    <div className="w-1/3 flex justify-center items-center">
                      <Image
                        alt=""
                        src={brands[selectedBrand].url}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div
                      className="w-1/3 flex flex-row justify-center items-center px-6 py-11 gap-6 hover:opacity-50 cursor-pointer"
                      onClick={nextBrandSlide}
                    >
                      <MdKeyboardArrowLeft
                        size={19}
                        color="black"
                        style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
                      />
                    </div>
                  </div>
                  <div
                    ref={projectsRef}
                    className="w-full flex justify-center text-center flex flex-row overflow-x-auto py-[60px] gap-[60px]"
                  >
                    {projects.slice(0, 3).map((project, index) => (
                      <div
                        key={project.id}
                        ref={selectedProject === index ? projectRef : null}
                        className={`w-1/3 md:w-1/4 flex flex-shrink-0 items-center justify-center cursor-pointer`}
                        onClick={() => setSelectedProject(index)}
                      >
                        <span
                          className={`\ font-lora font-medium sm:text-2xl md:text-3xl xltext-[32px] leading-10 whitespace-nowrap ${
                            selectedProject === index
                              ? 'opacity-100'
                              : 'opacity-50'
                          }`}
                        >
                          {project.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </InnerContainer>
              </div>
              {/** image container */}
              <div className="bg-white/50 w-full h-[246px] sm:h-[574px] md:h-[330px] relative">
                <div className="flex flex-row justify-center items-center h-full">
                  <div
                    className="w-[15%] sm:w-[20%] md:w-[30%] h-full flex justify-center items-center"
                    style={{
                      background: `linear-gradient(0deg, rgba(38, 30, 8, 0.8), rgba(38, 30, 8, 0.8)), url(${
                        projects[
                          selectedProject > 0
                            ? selectedProject - 1
                            : projects.length - 1
                        ].image
                      })`,
                      borderRadius: '2px',
                      backgroundSize: 'cover !important',
                    }}
                  >
                    <div
                      className="w-8 h-8 sm:w-[72px] sm:h-[72px] md:w-32 md:h-32 rounded-full border-2 border-white/50 flex justify-center items-center cursor-pointer hover:opacity-50"
                      onClick={prevProjectSlide}
                    >
                      <MdKeyboardArrowLeft
                        size={48}
                        className="w-4 h-4 md:w-12 md:h-12"
                        color="white"
                      />
                    </div>
                  </div>
                  <div
                    className="w-[70%] sm:w-[60%] md:w-[40%] h-full !bg-cover"
                    style={{
                      background: `linear-gradient(239.25deg, rgba(255, 209, 91, 0) -12.39%, rgba(255, 209, 91, 0.5) 207.04%), url(${projects[selectedProject].image})`,
                      borderRadius: '2px',
                    }}
                  />
                  <div
                    className="w-[15%] sm:w-[20%] md:w-[30%] h-full flex items-center justify-center !bg-cover"
                    style={{
                      background: `linear-gradient(0deg, rgba(38, 30, 8, 0.8), rgba(38, 30, 8, 0.8)), url(${
                        projects[
                          selectedProject + 1 > projects.length - 1
                            ? 0
                            : selectedProject + 1
                        ].image
                      })`,
                      borderRadius: '2px',
                    }}
                  >
                    <div
                      className="w-8 h-8 sm:w-[72px] sm:h-[72px] md:w-32 md:h-32 rounded-full border-2 border-white/50 flex justify-center items-center cursor-pointer hover:opacity-50"
                      onClick={nextProjectSlide}
                    >
                      <MdKeyboardArrowRight
                        size={48}
                        className="w-4 h-4 md:w-12 md:h-12"
                        color="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/** project info */}
              {/* <div className="w-full flex flex-row items-center justify-center px-[107px] sm:py-6 sm:gap-8 md:px-40 md:py-7 md:gap-12 bg-[#FBF8F1] border-b-[1px] border-[#F0E4C3]">
                <div className="w-full flex flex-row justify-center items-center p-6 gap-7 md:py-6 md:px-8 md:gap-12">
                  <div className="flex flex-col justify-center items-center gap-2 md:gap-6">
                    <span className="font-manrope font-medium text-[10px] leading-[14px] sm:text-2xl opacity-30 text-black">
                      Project
                    </span>
                    <span className="font-lora font-normal text-sm sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[70px] text-[#272940] whitespace-nowrap">
                      {projects[selectedProject].totalNumber} Project
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center p-6 gap-7 md:py-6 md:px-8 md:gap-12">
                  <div className="flex flex-col justify-center items-center gap-2 md:gap-6">
                    <span className="font-manrope font-medium text-[10px] leading-[14px] sm:text-2xl opacity-30 text-black">
                      Total time
                    </span>
                    <span className="font-lora font-normal text-sm sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[70px] text-[#272940] whitespace-nowrap">
                      {projects[selectedProject].totalHours} Hours
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center p-6 gap-7 md:py-6 md:px-8 md:gap-12">
                  <div className="flex flex-col justify-center items-center gap-2 md:gap-6">
                    <span className="font-manrope font-medium text-[10px] leading-[14px] sm:text-2xl opacity-30 text-black">
                      Budget
                    </span>
                    <span className="font-lora font-normal text-sm sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[70px] text-[#272940] whitespace-nowrap">
                      {projects[selectedProject].budget}
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="w-full bg-[#FBF8F1] border-b-[1px] border-[#F0E4C3]">
                <InnerContainer>
                  {/** project details */}
                  <div className="grid grid-cols-10 items-start">
                    <div className="col-span-8 w-full flex flex-col items-start">
                      <div className="w-full flex flex-col items-start py-6 pr-3 pl-12 sm:py-12 sm:pr-8 sm:pl-24 md:px-24 xl:px-40 md:py-5 bg-[#FBF8F1]">
                        <div className="w-full flex flex-col items-start">
                          <div className="w-full flex felx-row items-center justify-center gap-3 sm:gap-7 md:gap-12 py-8 md:py-12">
                            <div className="w-[35%] flex flex-row items-start gap-[27px] md:gap-[10px]">
                              <span className="font-manrope font-medium sm:text-2xl text-black opacity-30">
                                Activity
                              </span>
                            </div>
                            <div className="w-[65%] flex flex-row items-start">
                              <span className="font-manrope font-medium sm:text-2xl md:text-xl leading-normal text-black opacity-50">
                                {projects[selectedProject].activity}
                              </span>
                            </div>
                          </div>
                          <div className="w-full flex felx-row items-center justify-center gap-3 sm:gap-7 md:gap-12 py-8 md:py-12">
                            <div className="w-[35%] flex flex-row items-start gap-[27px] md:gap-[10px]">
                              <span className="font-manrope font-medium sm:text-2xl text-black opacity-30">
                                Est budget
                              </span>
                            </div>
                            <div className="w-[65%] flex flex-row items-start">
                              <span className="font-manrope font-medium sm:text-2xl md:text-xl leading-normal text-black opacity-50">
                                {projects[selectedProject].estBudget}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center h-full col-span-1 bg-[#FBF8F1] backdrop-blur-lg hover:opacity-50 cursor-pointer">
                      <div
                        className="flex flex-col justify-center items-center hover:opacity-50 cursor-pointer"
                        onClick={prevProjectSlide}
                      >
                        <MdKeyboardArrowLeft
                          className="w-2 h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
                          color="black"
                        />
                      </div>
                    </div>
                    <div
                      className="h-full flex flex-col justify-center items-center cursor-pointer hover:opacity-50"
                      onClick={nextProjectSlide}
                    >
                      <MdKeyboardArrowRight
                        className="w-2 h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
                        color="black"
                      />
                    </div>
                  </div>
                </InnerContainer>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
