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
          title="IP News Blog"
          description="IP Front™ Intellectual Property News"
        />
      </div>
      <div className="w-full flex flex-col items-start bg-ipNewsLog-content">
        <NewsBlog data={news} />
      </div>
    </Container>
  )
}
