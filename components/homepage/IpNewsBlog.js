import { Container } from '../templates/Container'
import React, { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { TitleContainer } from '../templates/TitleContainer'
import NewsBlog from '../newsblog'
import Image from 'next/image'

const news = [
  {
    id: 1,
    img: '/ipNewsBlog/news-1.png',
    content:
      'Infringement of third party trade marks – Hells Angels and Redbubble',
    visit: 'Nov 25 · 4 min read',
  },
  {
    id: 2,
    img: '/ipNewsBlog/news-2.png',
    content:
      'Infringement of third party trade marks – Hells Angels and Redbubble',
    visit: 'Nov 25 · 4 min read',
  },
  {
    id: 3,
    img: '/ipNewsBlog/news-3.png',
    content:
      'Infringement of third party trade marks – Hells Angels and Redbubble',
    visit: 'Nov 25 · 4 min read',
  },
]

const slides = [
  {
    url: '/ipNewsBlog/slide-1.png',
    time: 'Nov 25 · 4 min read',
    title:
      '“ Infringement of third party trade marks – Hells Angels and Redbubble “',
  },
  {
    url: '/ipNewsBlog/news-3.png',
    time: 'Nov 25 · 2 min read',
    title:
      '“ Infringement of third party trade marks – Hells Angels and Redbubble “',
  },
  {
    url: '/ipNewsBlog/news-1.png',
    time: 'Nov 25 · 2 min read',
    title:
      '“ Infringement of third party trade marks – Hells Angels and Redbubble “',
  },
  {
    url: '/ipNewsBlog/news-2.png',
    time: 'Nov 25 · 2 min read',
    title:
      '“ Infringement of third party trade marks – Hells Angels and Redbubble “',
  },
]
export default function IpNewsBlog() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentSlideIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlideIndex - 1
    setCurrentSlideIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentSlideIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentSlideIndex + 1
    setCurrentSlideIndex(newIndex)
  }

  return (
    <Container>
      <div className="py-14 sm:py-[100px] md:py-[120px] md:px-40 xl:px-80 2xl:px-[312px]">
        <TitleContainer
          title="ip news blog"
          description="IP Front™ Intellectual Property News"
        />
      </div>
      <div className="relative w-full">
        <div className="hidden sm:flex h-[10px] bg-[#F0E3C3]">
          <div
            className={`h-full bg-[#816BD9] ${
              (currentSlideIndex + 1) % slides.length === 1
                ? 'w-full'
                : `w-${currentSlideIndex}/${slides.length}`
            }`}
          />
        </div>
        <div
          className="sm:bg-cover sm:bg-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlideIndex].url})`,
          }}
        >
          <div className="flex flex-col items-center gap-12 px-12 py-24 sm:px-24 sm:py-56 md:py-64">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-row gap-3">
                <span className="font-manrope font-semibold text-[10px] sm:text-2xl md:text-xl text-white text-center">
                  {slides[currentSlideIndex].time}
                </span>
              </div>
              <div className="flex flex-row items-start gap-3">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-[64px] md:leading-tight text-white text-center">
                  {slides[currentSlideIndex].title}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center px-5 py-2 sm:p-5 gap-2 bg-black/50 rounded-sm backdrop-blur-xl">
              <Image
                alt=""
                src="/ipNewsBlog/nicole.png"
                className="w-6 h-6 sm:w-14 sm:h-14 md:w-8 md:h-8"
                width={40}
                height={40}
              />
              <span className="font-manrope font-semibold text-[10px] sm:text-2xl md:text-xl text-white">
                Nicole more
              </span>
              <span className="font-manrope font-semibold text-[10px] sm:text-2xl md:text-xl text-white opacity-50">
                2 min ago
              </span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 flex flex-row">
          <div
            className="w-12 h-12 sm:w-[106px] sm:h-[106px] md:w-40 md:h-40 backdrop-blur-xl bg-gray-800 flex justify-center items-center cursor-pointer hover:opacity-80"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
            onClick={prevSlide}
          >
            <MdKeyboardArrowRight
              className="w-2 h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
              color="#E6E6E6"
              style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
            />
          </div>
          <div
            className="w-12 h-12 sm:w-[106px] sm:h-[106px] md:w-40 md:h-40 backdrop-blur-xl bg-gray-800 flex justify-center items-center cursor-pointer hover:opacity-80"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
            onClick={nextSlide}
          >
            <MdKeyboardArrowLeft
              className="w-2 h-2 sm:w-5 sm:h-5 md:w-8 md:h-8"
              color="#E6E6E6"
              style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start bg-ipNewsLog-content">
        <div className="w-full py-12 sm:py-14 flex flex-row justify-center items-center border-[1px] border-[#F0E4C3]">
          <span className="font-manrope font-semibold text-xs sm:text-2xl text-center">
            Related news
          </span>
        </div>
        <NewsBlog data={news} />
      </div>
    </Container>
  )
}
