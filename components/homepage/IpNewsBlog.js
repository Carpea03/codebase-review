import { Container } from '../templates/Container'
import React, { useState } from 'react'
import { TitleContainer } from '../templates/TitleContainer'
import NewsBlog from '../newsblog'

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
export default function IpNewsBlog({ news }) {
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
      <div className="py-10">
        <TitleContainer  description="IP Front™ Articles" />
      </div>
      <div className="w-full flex flex-col items-start bg-ipNewsLog-content">
        <NewsBlog data={news} />
      </div>
    </Container>
  )
}
