import NewsBlog from '../../components/newsblog'
import { Container } from '../../components/templates/Container'
import Footer from '../../components/templates/Footer'
import Header from '../../components/templates/Header'
import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import IpNewsBlog from '../../components/homepage/IpNewsBlog'
import { indexQuery } from '../../lib/queries'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { useState, useEffect } from 'react'
import { InnerContainer } from '../../components/templates/InnerContainer'
import Link from 'next/link'

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

export default function Notfound() {
  const [reduceMorePost, setReduceMorePost] = useState()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const allPosts = overlayDrafts(await getClient(false).fetch(indexQuery))
    setReduceMorePost(allPosts)
  }
  return (
    <>
      <Header />
      <Container>
        <div className="bg-404 bg-cover bg-center flex flex-col items-center justify-center gap-6 sm:gap-16 md:gap-14 px-12 sm:px-20 md:px-56 xl:px-[432px] py-52 sm:py-56 md:py-32 bg-hero-banner">
          <div className="flex flex-col items-center justify-center gap-[14px] sm:gap-5">
            <span className="font-lora font-medium text-[64px] sm:text-9xl md:text-8xl text-[#272940] text-center">
              404
            </span>
            <span className="font-lora font-semibold text-xl sm:text-5xl text-[#272940] md:py-5 text-center">
              We’re sorry, the page you looking is gone
            </span>
            <span className="w-92 font-manrope text-xl text-[#7A7B94] md:py-5 text-center">
              Sorry the page you’re looking doesn’t exist or has been moved.
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <Link href={'/'}>
              <div
                className="w-32 h-11 sm:w-[250px] sm:h-24 md:w-[230px] md:h-[75px] flex flex-row justify-center items-center px-6 py-[10px] sm:px-12 sm:py-6 gap-3 sm:gap-6 bg-white border-4 border-[#B2B4DB] rounded-sm cursor-pointer hover:opacity-80"
                style={{
                  boxShadow:
                    '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
                }}
              >
                <IoArrowBackOutline
                  size={16}
                  className="w-[10px] h-[10px] sm:w-6 sm:h-6 md:w-4 md:h-4"
                />
                <span className="font-manrope font-semibold text-xs sm:text-base text-[#272940]">
                  Go back
                </span>
              </div>
            </Link>
            <Link href={'/'}>
              <div
                className="w-60 h-11 sm:w-[250px] sm:h-24 md:w-[230px] md:h-[75px] flex flex-row justify-center items-center px-6 py-[10px] sm:px-12 sm:py-6 gap-6 bg-[#816BD9] rounded cursor-pointer hover:opacity-80 order-first md:order-last"
                style={{
                  boxShadow:
                    '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                }}
              >
                <span className="font-manrope font-semibold text-xs sm:text-base text-white">
                  Go to homepage
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-12 md:gap-[60px]">
          <InnerContainer>
            <div className="md:w-2/3 flex flex-col items-center md:items-start justify-center md:justify-end gap-[10px] sm:gap-6 px-14 xl:px-40 pt-[70px] sm:pt-32">
              <span className="uppercase font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-2xl md:text-xl text-[#40320F]/50 text-center md:text-left">
                ip news blog
              </span>
              <span className="font-lora font-medium text-xl sm:text-5xl leading-[70px] text-[#272940] text-center md:text-left">
                Check out our latest articles
              </span>
              <span className="w-92 font-manrope text-xl text-[#7A7B94] text-center text-[#272940] text-center md:text-left">
                Check out lattes news on Baxter IP, here’s our listed
                recommended news for you to look.
              </span>
            </div>
          </InnerContainer>
          <IpNewsBlog
            isblog={true}
            news={reduceMorePost?.sort(() => Math.random() - 0.5).slice(0, 3)}
            btnTitle={'Discover more IP news'}
          />
        </div>
      </Container>
      <Footer />
    </>
  )
}
