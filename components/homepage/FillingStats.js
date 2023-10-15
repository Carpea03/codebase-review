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
  { id: 1, url: '/banner/UNSW Sydney.svg' },
  { id: 2, url: '/banner/Founders 10x Accelerator.svg' },
]

const projects = [
  {
    id: 1,
    name: '10X IP Due Diligence',
    image: '/fillingStats/slide-0.jpg',
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
    image: '/fillingStats/slide-3.jpg',
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
    image: '/fillingStats/slide-2.jpg',
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
      <Container className="flex flex-col sm:py-[100px] md:py-[20px] gap-[70px]">
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <div className="w-full md:border-b-[1px] border-[#F0E4C3]">
              <InnerContainer>
                <div className="px-[32px] sm:px-10 xl:px-8">
                  <div className="xl:px-32">
                    <div className="pt-20 sm:pt-5 m:py-20 mt-10">
                      <span className="uppercase font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-[20px] md:text-xl text-[#40320F]/50 text-center md:text-left">
                        PRO BONO WORK
                      </span>
                      <div className="flex flex-col sm:flex-col md:flex-row">
                        <div className="py-5 sm:mt-0 flex flex-col">
                          <div>
                            <span className="font-lora font-medium text-xl sm:text-5xl sm:leading-[70px] text-[#272940]">
                              <h2>Giving back to the community</h2>
                            </span>
                          </div>
                          <div className="mt-5">
                            <span className="text-[14px] sm:text-xl font-manrope font-medium opacity-50">
                              {`In 2018 we committed to supporting Australian
                              universities to help them help their academics &
                              students in protecting and commercialising
                              spin-out IP - and we've been hard at work ever
                              since.`}
                            </span>
                          </div>
                        </div>
                        <div className="w-full flex flex-row xl:flex-col">
                          {brands.map((brand, index) => (
                            <div
                              key={brand.id}
                              className="flex  justify-center xl:justify-end"
                            >
                              <Image
                                alt=""
                                key={brand.id}
                                src={brand.url}
                                width={215}
                                height={93.913}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
                  <div
                    ref={projectsRef}
                    className="flex sm:hidden w-full grid grid-cols-3 "
                  >
                    {projects.slice(0, 3).map((project, index) => (
                      <div
                        key={project.id}
                        ref={selectedProject === index ? projectRef : null}
                        className={`p-5 flex  justify-center text-center`}
                        onClick={() => setSelectedProject(index)}
                      >
                        <span
                          className={`font-lora font-medium sm:text-2xl md:text-3xl xl:text-[32px] ${
                            selectedProject === index
                              ? 'opacity-100'
                              : 'opacity-50'
                          }`}
                        >
                          <h3>{project.name}</h3>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    ref={projectsRef}
                    className="hidden sm:flex w-full flex justify-center text-center flex flex-row overflow-x-auto py-[60px] gap-[60px]"
                  >
                    {projects.slice(0, 3).map((project, index) => (
                      <div
                        key={project.id}
                        ref={selectedProject === index ? projectRef : null}
                        className={` md:w-1/4 flex flex-shrink-0 items-center justify-center cursor-pointer`}
                        onClick={() => setSelectedProject(index)}
                      >
                        <span
                          className={`font-lora font-medium sm:text-2xl md:text-3xl xltext-[32px] leading-10 whitespace-nowrap ${
                            selectedProject === index
                              ? 'opacity-100'
                              : 'opacity-50'
                          }`}
                        >
                          <h3>{project.name}</h3>
                        </span>
                      </div>
                    ))}
                  </div>
                </InnerContainer>
              </div>
              <div className="bg-white/50 w-[100%] h-[209px] sm:w-full sm:h-[437px] md:h-[437px] relative">
                <div className="flex flex-row justify-between items-center h-full">
                  <div
                    className="w-[16px] sm:w-[3%] md:w-[10%] h-full flex justify-center items-center"
                    style={{
                      background: `linear-gradient(0deg, rgba(38, 30, 8, 0.00) 0%, rgba(38, 30, 8, 0.00) 100%), url(${
                        projects[
                          selectedProject > 0
                            ? selectedProject - 1
                            : projects.length - 1
                        ].image
                      })`,
                      backgroundSize: 'cover',
                      borderRadius: '2px',
                      opacity: 0.5,
                    }}
                  >
                    {/* <div
                      className="w-8 h-8 sm:w-[72px] sm:h-[72px] sm:w-20 sm:h-20 md:w-20 md:h-20 xl:w-32 xl:h-32 rounded-full border-2 border-white/50 flex justify-center items-center cursor-pointer hover:opacity-50"
                      onClick={prevProjectSlide}
                    >
                      <MdKeyboardArrowLeft
                        size={48}
                        className="w-4 h-4 md:w-12 md:h-12"
                        color="white"
                      />
                    </div> */}
                  </div>
                  <InnerContainer>
                    <div className="flex justify-center  items-center w-full h-full px-[10px] sm:px-[30px] md:px-[60px]">
                      <div
                        className="w-[100%] h-[209px] sm:w-full sm:h-full !bg-cover"
                        // style={{
                        //   background: `linear-gradient(239.25deg, rgba(255, 209, 91, 0) -12.39%, rgba(255, 209, 91, 0.5) 207.04%), url(${projects[selectedProject].image})`,
                        //   borderRadius: '2px',
                        //   backgroundSize: 'cover',
                        // }}
                      >
                        <Image
                         style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        alt=""
                        src={`${projects[selectedProject].image}`}
                        width={0}
                        height={0}
                        sizes='100vw'
                      />
                      </div>
                    </div>
                  </InnerContainer>
                  <div
                    className="w-[16px] sm:w-[3%] md:w-[10%] h-full flex items-center justify-center !bg-cover"
                    style={{
                      background: `linear-gradient(0deg, rgba(38, 30, 8, 0.00) 0%, rgba(38, 30, 8, 0.00) 100%), url(${
                        projects[
                          selectedProject + 1 > projects.length - 1
                            ? 0
                            : selectedProject + 1
                        ].image
                      })`,
                      backgroundSize: 'cover',
                      borderRadius: '2px',
                      opacity: 0.5,
                    }}
                  >
                    {/* <div
                      className="w-8 h-8 sm:w-[72px] sm:h-[72px] sm:w-20 sm:h-20  md:w-20 md:h-20 xl:w-32 xl:h-32 rounded-full border-2 border-white/50 flex justify-center items-center cursor-pointer hover:opacity-50"
                      onClick={nextProjectSlide}
                    >
                      <MdKeyboardArrowRight
                        size={48}
                        className="w-4 h-4 md:w-12 md:h-12"
                        color="white"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <InnerContainer>
                <div className="px-[32px] sm:px-[55px] xl:px-[110px] 2xl:px-[150px] mt-5 sm:mt-10">
                  <span className="text-[14px] sm:text-xl font-manrope font-medium opacity-50">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sapien id purus condimentum vehicula. Ut iaculis pharetra enim quis gravida. Ut a cursus purus, vitae cursus odio. Fusce at justo eget libero eleifend auctor nec sed felis. Etiam lobortis pulvinar mauris vel fermentum. Vivamus ornare libero nec euismod pretium. Maecenas eleifend varius leo quis pellentesque. Vivamus euismod elit id porttitor tincidunt. Phasellus nec nibh finibus justo ultrices commodo a a lacus. Suspendisse tincidunt lectus purus, ut sollicitudin sapien aliquet placerat.`}</span>
                </div>
                <div className="flex justify-center item-cemter mt-10 md:mt-20 mb-10 md:mb-20 gap-3">
                  <div
                    onClick={() => setSelectedProject(0)}
                    className={`w-[24px] h-[4px] bg-[#8368DF] cursor-pointer ${
                      selectedProject === 0 ? '' : 'opacity-30'
                    }`}
                  ></div>
                  <div
                    onClick={() => setSelectedProject(1)}
                    className={`w-[24px] h-[4px] bg-[#8368DF] cursor-pointer ${
                      selectedProject === 1 ? '' : 'opacity-30'
                    }`}
                  ></div>
                  <div
                    onClick={() => setSelectedProject(2)}
                    className={`w-[24px] h-[4px] bg-[#8368DF] cursor-pointer ${
                      selectedProject === 2 ? '' : 'opacity-30'
                    }`}
                  ></div>
                </div>
              </InnerContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
