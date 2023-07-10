import { Container } from '../templates/Container'
import React, { useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { metaOffice } from '../../utils/const/links'
import { InnerContainer } from '../templates/InnerContainer'

export default function ContactUs() {
  const [showContactUs, setShowContactUs] = useState(true)
  const [showMetaOffice, setShowMetaOffice] = useState(true)
  const [showCallUs, setShowCallUs] = useState(true)
  const [showEmailUs, setShowEmailUs] = useState(true)

  const handleContactUs = () => {
    setShowContactUs(!showContactUs)
  }

  const handleMetaOffice = () => {
    setShowMetaOffice(!showMetaOffice)
  }

  const handleCallUs = () => {
    setShowCallUs(!showCallUs)
  }

  const handleEmailUs = () => {
    setShowEmailUs(!showEmailUs)
  }

  return (
    <Container>
      <div
        style={{
          background:
            'linear-gradient(107.1deg, #61638D -31.76%, #343652 96.53%)',
        }}
      >
        <InnerContainer>
          <div className="hidden md:flex flex-col md:px-6 xl:px-32 2xl:px-40 py-14">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="py-5">
                  <span className="font-lora font-medium md:text-4xl xl:text-5xl text-white">
                    Speak with an IP Attorney Now
                  </span>
                </div>
              </div>
              <div
                className="flex justify-center items-center bg-[#4C4F76] rounded-sm w-[250px] xl:w-[354px] h-[87px] py-6 px-8 cursor-pointer"
                onClick={handleContactUs}
              >
                <span className="grow text-center font-manrope font-semibold text-xl text-white">
                  Contact Us
                </span>
                <FiChevronUp
                  size={24}
                  color={'white'}
                  className={`flex-none ${showContactUs ? 'rotate-180' : ''}`}
                />
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 ${
                !showContactUs ? 'hidden' : 'flex'
              }`}
            >
              <div className="flex flex-row justify-start md:gap-4 xl:gap-[100px]">
                <div className="flex flex-row items-center py-[10px] gap-[10px] w-1/3 cursor-pointer">
                  <Image
                    src="/contactus/web.svg"
                    sizes={48}
                    alt=""
                    width={48}
                    height={48}
                  />
                  <p className="uppercase font-manrope font-bold text-xl text-white/50">
                    Virtual office
                  </p>
                </div>
                <div className="flex flex-row items-center py-[10px] gap-[10px] w-1/3 cursor-pointer">
                  <Image
                    alt=""
                    src="/contactus/phone.svg"
                    sizes={48}
                    width={48}
                    height={48}
                  />
                  <p className="font-manrope font-bold text-xl text-white/50">
                    Call us
                  </p>
                </div>
                <div className="flex flex-row items-center py-[10px] gap-[10px] w-1/3 cursor-pointer">
                  <Image
                    alt=""
                    src="/contactus/mail-outline.svg"
                    sizes={48}
                    width={48}
                    height={48}
                  />
                  <p className="font-manrope font-bold text-xl text-white/50">
                    Email Us
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start pb-8 md:gap-4 xl:gap-[100px]">
                <div className="w-1/3 flex justify-center items-center border-[3px] border-[#816BD9] rounded-sm bg-contactus-metaoffice">
                  <Link href={metaOffice}>
                    <div className="flex flex-row justify-center items-center gap-[10px] h-[75px] p-5 bg-white/20 backdrop-blur-xl">
                      <Image
                        alt=""
                        src="/contactus/arrow-outward.svg"
                        className="h-8 w-8"
                        sizes={48}
                        width={48}
                        height={48}
                      />
                      <p className="font-manrope font-semibold text-xl text-white whitespace-nowrap">
                        Visit virtual office
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="w-1/3 flex flex-col items-start px-[10px] gap-7">
                  <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                    <span className="font-semibold text-base text-white/50">
                      Sydney
                    </span>
                    <span className="font-normal text-xl text-white">
                      +61 2 9264 6716
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                    <span className="font-semibold text-base text-white/50">
                      Melbourne
                    </span>
                    <span className="font-normal text-xl text-white">
                      +61 2 9264 6716
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                    <span className="font-semibold text-base text-white/50">
                      Brisbane
                    </span>
                    <span className="font-normal text-xl text-white">
                      +61 2 9264 6716
                    </span>
                  </div>
                </div>
                <div className="w-1/3 items-start">
                  <Link href="/contact-us">
                    <div
                      className="flex flex-col justify-center items-center h-[88px] bg-[#816BD9] rounded-sm"
                      style={{ boxShadow: '5px 4px 21px rgba(0, 0, 0, 0.25)' }}
                    >
                      <span className="font-manrope font-semibold text-xl text-white">
                        Send us an enquiry
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center">
            <div
              className="flex flex-col items-center justify-center w-full px-12 py-6 sm:px-28 sm:py-14 gap-8"
              style={{
                background:
                  'linear-gradient(107.1deg, #61638D -31.76%, #343652 96.53%)',
              }}
            >
              <span className="font-manrope font-bold text-xs sm:text-2xl text-white/50">
                Contact us
              </span>
              <span className="font-lora font-medium text-xl sm:text-[32px] leading-tight text-white">
                Reach Out to Baxter IP
              </span>
            </div>
            <div
              className="flex flex-col justify-center items-center w-full"
              style={{
                background:
                  'linear-gradient(134.74deg, #61638D -209.59%, #343652 65.05%)',
              }}
            >
              <div className="flex flex-col items-start w-full">
                <div
                  className="flex flex-row items-center w-full px-12 py-6 sm:px-[107px] sm:py-5 border-b-[3px] border-white/30 opacity-80 cursor-pointer"
                  onClick={handleMetaOffice}
                >
                  <div className="flex flex-row items-center gap-6 w-full">
                    <Image
                      alt=""
                      src="/contactus/web.svg"
                      className="w-6 h-6 sm:w-12 sm:h-12"
                      width={24}
                      height={24}
                    />
                    <span className="uppercase font-manrope font-bold text-sm sm:text-2xl tracking-[0.2em] text-white/50">
                      Virtual office
                    </span>
                  </div>
                  <div className="flex justify-end items-end w-full">
                    <FiChevronUp
                      className={`w-6 h-6 sm:w-[53px] sm:h-[53px] ${
                        showMetaOffice ? 'rotate-180' : ''
                      }`}
                      color={'white'}
                    />
                  </div>
                </div>
                <div
                  className={`relative flex flex-wrap ${
                    showMetaOffice ? 'flex' : 'hidden'
                  }`}
                >
                  <Image
                    alt=""
                    src="/contactus/office-1.png"
                    width={375}
                    height={375}
                  />
                  <div className="absolute bottom-0 right-0 left-0 py-5 px-12 sm:px-[107px] sm:py-6 flex flex-row justify-between items-center gap-[10px] bg-white/20 backdrop-blur-lg">
                    <p className="font-manrope font-semibold text-sm sm:text-xl text-white">
                      Visit virtual office
                    </p>
                    <Image
                      alt=""
                      src="/contactus/arrow-outward.svg"
                      className="w-6 h-6 sm:h-8 sm:w-8"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <div
                  className="flex flex-row items-center w-full py-5 px-12 sm:px-[107px] sm:py-5 border-b-[3px] border-white/30 opacity-80 cursor-pointer"
                  onClick={handleCallUs}
                >
                  <div className="flex flex-row items-center gap-6 w-full">
                    <Image
                      alt=""
                      src="/contactus/phone.svg"
                      className="w-6 h-6 sm:h-12 sm:w-12"
                      width={24}
                      height={24}
                    />
                    <span className="uppercase font-manrope font-bold text-sm sm:text-2xl tracking-[0.2em] text-white/50">
                      Call us
                    </span>
                  </div>
                  <div className="flex justify-end items-end w-full">
                    <FiChevronUp
                      className={`w-6 h-6 sm:w-[53px] sm:h-[53px] ${
                        showCallUs ? 'rotate-180' : ''
                      }`}
                      color={'white'}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col items-start py-5 px-12 sm:px-28 sm:py-11 w-full gap-6 ${
                  showCallUs ? 'flex' : 'hidden'
                }`}
              >
                <div className="flex flex-col items-start gap-[10px]">
                  <span className="font-manrope font-semibold text-sm sm:text-xl text-white">
                    Patent & Trade Mark Office
                  </span>
                  <div className="w-2/5 border-[1px] border-[#FFD15B]" />
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                  <span className="font-manrope font-normal text-sm sm:text-xl text-white/50">
                    Sydney
                  </span>
                  <span className="font-manrope font-normal text-sm sm:text-xl text-white">
                    +61 2 9264 6716
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                  <span className="font-manrope font-normal text-sm sm:text-xl text-white/50">
                    Melbourne
                  </span>
                  <span className="font-manrope font-normal text-sm sm:text-xl text-white">
                    +61 2 9264 6716
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                  <span className="font-manrope font-normal text-sm sm:text-xl text-white/50">
                    Brisbane
                  </span>
                  <span className="font-manrope font-normal text-sm sm:text-xl text-white">
                    +61 2 9264 6716
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <div
                  className="flex flex-row items-center w-full py-5 px-12 sm:px-[107px] border-b-[3px] border-white/30 opacity-80 cursor-pointer"
                  onClick={handleEmailUs}
                >
                  <div className="flex flex-row items-center gap-6 w-full">
                    <Image
                      alt=""
                      src="/contactus/mail-outline.svg"
                      className="w-6 h-6 sm:h-12 sm:w-12"
                      width={24}
                      height={24}
                    />
                    <span className="uppercase font-manrope font-bold text-sm sm:text-2xl tracking-[0.2em] text-white/50">
                      Email Us
                    </span>
                  </div>
                  <div className="flex justify-end items-end w-full">
                    <FiChevronUp
                      className={`w-6 h-6 sm:w-[53px] sm:h-[53px] ${
                        showEmailUs ? 'rotate-180' : ''
                      }`}
                      color={'white'}
                    />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start py-5 px-12 sm:px-[107px] gap-6 opacity-80 w-full ${
                    showEmailUs ? 'flex' : 'hidden'
                  }`}
                >
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="font-manrope font-semibold text-sm sm:text-xl text-white">
                      Baxter IP
                    </span>
                    <div className="w-full border-[1px] border-[#FFD15B]" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl">
                    <span className="font-manrope font-normal text-sm sm:text-xl text-white/50">
                      Email
                    </span>
                    <span className="font-manrope font-normal text-sm sm:text-xl text-white">
                      mail@baxterip.com.au
                    </span>
                  </div>
                </div>
                <div className="flex flex-col px-12 py-5 sm:px-[107px] sm:py-11 gap-[10px] w-full cursor-pointer hover:opacity-80">
                  <div
                    className="flex flex-col justify-center items-center bg-[#816BD9] rounded-sm px-6 py-3 sm:px-14 sm:py-6"
                    style={{ boxShadow: '5px 4px 21px rgba(0, 0, 0, 0.25)' }}
                  >
                    <span className="font-manrope font-semibold text-xs sm:text-2xl text-white">
                      Send us an enquiry
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InnerContainer>
      </div>
    </Container>
  )
}
