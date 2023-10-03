import Button from '../../components/buttons/Button'
import { Container } from '../../components/templates/Container'
import Footer from '../../components/templates/Footer'
import Header from '../../components/templates/Header'
import React, { useState, useEffect } from 'react'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { profiles as peoples, awards } from '../../utils/const/people'
import { InnerContainer } from '../../components/templates/InnerContainer'

export default function People() {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [team, setTeam] = useState(1)
  const [screenSize, setScreenSize] = useState(getCurrentDimension())

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
    <>
      <Head>
        <title>{`Patent and trade mark attorneys in Sydney & Melbourne | Baxter IP`}</title>
        <meta
          name="description"
          content={
            'The patent and trade mark attorneys at Baxter IP in Sydney or Melbourne can help secure your intellectual property. You will be matched with the IP attorney best suited to your needs.'
          }
        />
      </Head>
      <Header active={'Attorneys'} />
      <Container className="bg-[#FFFDF7]">
        <div className="w-full bg-people-unsplash !bg-cover">
          <div
            style={{
              background: 'rgba(64, 66, 102, 0.7)',
            }}
          >
            <div
              className="flex flex-col items-start gap-4"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 206, 79, 0) 0%, rgba(255, 206, 79, 0.4) 100%)',
              }}
            >
              <InnerContainer>
                <div className="flex flex-col items-center justify-center px-4 sm:px-32 md:px-24 xl:px-40 2xl:px-[283px] gap-4 h-[510px] sm:h-[710px] md:h-[553px] w-full">
                  <span className="font-manrope font-bold text-base sm:text-[32px] sm:leading-[44px] md:text-xl uppercase text-[#FFCE4F]">
                    ATTORNEYS
                  </span>
                  <span className="font-lora font-medium text-[32px] sm:text-5xl leading-[140%] sm:tracking-[-0.03em] text-center text-white">
                    <h1>
                      Our patent & trade mark attorney teams in Sydney &
                      Melbourne are poised to protect what’s yours
                    </h1>
                  </span>
                </div>
              </InnerContainer>
            </div>
          </div>
        </div>
        <InnerContainer>
          <div className="flex flex-row items-start justify-center w-full  md:px-[50px] xl:px-[100px] 2xl:px-[160px]">
            {peoples
              .filter(
                (item) =>
                  item.teamName === 'Sydney teams' ||
                  item.teamName === 'Melbourne teams'
              )
              .map((people, index) => (
                <div
                  key={index}
                  className={`w-1/2 h-16 sm:h-32 flex flex-row items-center justify-center gap-4 cursor-pointer ${
                    selectedMenu == index ? 'bg-[#FFFDF7]' : 'bg-[#FAF4E5]'
                  }`}
                  style={{
                    clipPath:
                      index == 0
                        ? 'polygon(0 0, 98% 0, 100% 100%, 0 100%)'
                        : 'polygon(0 0, 100% 0, 100% 100%, 2% 100%)',
                  }}
                  onClick={() => {
                    setSelectedMenu(index), setTeam(team === 1 ? 2 : 1)
                  }}
                >
                  {selectedMenu === index ? (
                    <HiLocationMarker
                      fill="#7568D1"
                      size={31}
                      className="w-4 h-4 sm:w-8 sm:h-8"
                    />
                  ) : (
                    <HiLocationMarker
                      fill="none"
                      stroke="#272940"
                      strokeWidth={1}
                      size={31}
                      className="border-none w-4 h-4 sm:w-8 sm:h-8"
                    />
                  )}
                  <span
                    className={`font-manrope font-semibold text-xs sm:text-2xl ${
                      selectedMenu == index
                        ? 'text-[#272940]'
                        : 'text-[#272940]/50'
                    }`}
                  >
                    {people.teamName}
                  </span>
                </div>
              ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 md:gap-4 px-12 sm:px-24 md:px-12 xl:px-24 2xl:px-40 py-20 sm:py-24">
            {peoples
              .filter((item) => item.id === team)[0]
              .teamMembers.map((people, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-sm cursor-pointer"
                  style={{
                    boxShadow:
                      '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
                  }}
                >
                  <Link href={people.link}>
                    <Image alt="" src={people?.url} width={400} height={200} />
                    <div className="flex flex-col p-4 sm:p-8 md:p-6 gap-y-4 sm:gap-y-8 md:gap-y-6">
                      <div className="flex flex-row w-full">
                        <div className="flex flex-col w-full">
                          <span className="font-manrope font-medium text-[8px] sm:text-xl text-[#404266] pb-2 sm:pb-4">
                            {people?.name}
                          </span>
                          <div className="flex flex-col w-full">
                            {people?.positions?.map((position, index) => (
                              <span
                                key={index}
                                className="font-lora italic font-medium text-[7px] sm:text-base md:text-sm text-[#7A7B94] sm:w-full md:w-[200px]"
                              >
                                {position}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col flex-end content-end flex-wrap w-full">
                          {people?.awards?.map((award, index) => (
                            <Image
                              key={index}
                              src={`/professionalProfiles/awards/${
                                awards?.filter((value) => value.id == award)[0]
                                  ?.title
                              }.png`}
                              width={
                                screenSize.width <= 768
                                  ? awards?.filter(
                                      (value) => value.id == award
                                    )[0]?.width / 2
                                  : awards?.filter(
                                      (value) => value.id == award
                                    )[0]?.width
                              }
                              height={
                                screenSize.width <= 768
                                  ? awards?.filter(
                                      (value) => value.id == award
                                    )[0]?.height / 1.5
                                  : awards?.filter(
                                      (value) => value.id == award
                                    )[0]?.height
                              }
                              className="self-end pb-2 sm:pb-4"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </InnerContainer>
        <div className="bg-people-unsplash-1 w-full h-[412px] sm:h-[916px] md:h-[624px] !bg-cover">
          <div className="flex flex-col items-center justify-center gap-10 sm:gap-[89px] md:gap-12 px-12 md:px-[184px] h-full">
            <span className="font-lora font-semibold text-2xl sm:text-5xl sm:leading-[120%] tracking-[-0.03em] text-center text-white">
              Innovate Boldly. Protect Strategically.
            </span>
            <Link href="/contact/sydney">
              <Button
                className="w-40 h-11 sm:w-[313px] md:w-[353px] sm:h-24"
                title="Contact Us"
              >
                <div
                  className="flex flex-row items-center justify-center w-6 h-6 sm:w-14 sm:h-14 md:h-12 md:w-12 bg-white rounded-full"
                  style={{
                    boxShadow: '1px 7px 16px rgba(44, 44, 44, 0.15)',
                  }}
                >
                  <HiPhone
                    className="w-[9px] h-[9px] sm:w-5 sm:h-5"
                    color="#404266"
                  />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
