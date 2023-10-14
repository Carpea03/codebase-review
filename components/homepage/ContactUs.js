import { Container } from '../templates/Container'
import React, { useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { metaOffice } from '../../utils/const/links'
import { InnerContainer } from '../templates/InnerContainer'
import { contactDetails } from '../../utils/const/contacts'

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
                    <h2>Speak with an IP Attorney now</h2>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-8 ${
                !showContactUs ? 'hidden' : 'flex'
              }`}
            >
              <div className="flex flex-row justify-start md:gap-4 xl:gap-[100px]">
                <div className="flex flex-row items-center py-[10px] gap-[10px] w-1/3 cursor-pointer">
                  <Link
                    href={metaOffice}
                    target="_blank"
                    className="flex flex-row items-center"
                  >
                    <Image
                      src="/contactus/web.svg"
                      sizes={48}
                      alt=""
                      width={48}
                      height={48}
                    />
                    <p className="font-manrope font-bold text-xl text-white/50">
                      Virtual office
                    </p>
                  </Link>
                </div>

                <div className="flex flex-row items-center py-[10px] gap-[10px] w-1/3 cursor-pointer">
                  <Link href="/sydney" className="flex flex-row items-center">
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
                  </Link>
                </div>
                <div className="flex flex-row items-center py-[10px] gap-[10px] w-1/3 cursor-pointer">
                  <Link href="/sydney" className="flex flex-row items-center">
                    <Image
                      alt=""
                      src="/contactus/mail-outline.svg"
                      sizes={48}
                      width={48}
                      height={48}
                    />
                    <p className="font-manrope font-bold text-xl text-white/50">
                      Enquiry form or email
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row justify-start pb-8 md:gap-4 xl:gap-[100px]">
                <div className="w-1/3 flex justify-center items-center border-[3px] border-[#816BD9] rounded-sm bg-contactus-metaoffice">
                  <Link href={metaOffice} target="_blank">
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
                  {contactDetails.map((item, index) => (
                    <a key={`link1-2${index}`} href={`tel:${item.number}`}>
                      <div
                        key={`contact-${index}`}
                        className="flex flex-col justify-center items-start gap-[10px] backdrop-blur-xl"
                      >
                        <span className="font-semibold text-base text-white/50">
                          {item.name}
                        </span>
                        <span className="font-normal text-xl text-white">
                          {item.number}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="w-1/3 items-start">
                  <Link href="/sydney">
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

          {/* Tablet/Mobile */}
          <div className="md:hidden flex flex-col items-center">
            <div
              className="flex flex-col items-center justify-center w-full px-[32px] py-6 sm:px-[48px] sm:py-14 gap-8"
              style={{
                background:
                  'linear-gradient(107.1deg, #61638D -31.76%, #343652 96.53%)',
              }}
            >
              {/* <span className="font-manrope font-bold text-xs sm:text-2xl text-white/50">
                Contact us
              </span> */}
              <span className="font-lora font-medium text-[24px] sm:text-[46px] leading-tight text-white">
                <h2>Speak with an IP Attorney now</h2>
              </span>

              <div className="flex flex-col items-start w-full">
                <div className="flex flex-row items-center w-full  cursor-pointer">
                  <div className="flex flex-row items-center gap-3 sm:gap-6 w-full mb-2">
                    <Image
                      alt=""
                      src="/contactus/web.svg"
                      className="w-6 h-6 sm:w-12 sm:h-12"
                      width={24}
                      height={24}
                    />
                    <span className="font-manrope font-bold text-[14px] sm:text-[20px] tracking-[0.2em] text-white/50 toUpper uppercase">
                      Virtual office
                    </span>
                  </div>
                </div>
                <div className="w-full h-full sm:w-full md:px-0">
                  <div className={`relative flex `}>
                    <div className="w-full">
                      <div className="hidden sm:flex ">
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          alt=""
                          src="/contactus/image 53.jpg"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                      <div className="flex sm:hidden">
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          alt=""
                          src="/contactus/office-1.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[100px] sm:top-[130px] left-[30px] sm:left-[210px]">
                      <Link href={metaOffice} target="_blank">
                        <div
                          style={{
                            background: 'rgba(0, 0, 0, 0.20)',
                            backdropFilter: 'blur(25px)',
                          }}
                          className="flex flex-row justify-center items-center gap-[10px] sm:h-[75px] p-5  "
                        >
                          <Image
                            alt=""
                            src="/contactus/arrow-outward.svg"
                            className="w-[24px] h-[24px] sm:h-8 sm:w-8"
                            sizes={0}
                            width={0}
                            height={0}
                          />
                          <p className="font-manrope font-semibold text-[14px] sm:text-xl text-white whitespace-nowrap">
                            Visit virtual office
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <div
                  className="flex flex-row items-center w-full  cursor-pointer"
                  onClick={handleCallUs}
                >
                  <div className="flex flex-row items-center gap-6 w-full ">
                    <Image
                      alt=""
                      src="/contactus/phone.svg"
                      className="w-6 h-6 sm:h-12 sm:w-12"
                      width={24}
                      height={24}
                    />
                    <span className="font-manrope font-bold text-sm sm:text-[20px] tracking-[0.2em] text-white/50 toUpper uppercase">
                      Call us
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col items-start sm:px-[32px]  w-full gap-6 ${
                  showCallUs ? 'flex' : 'hidden'
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-[10px] w-full">
                  {contactDetails.map((item, index) => (
                    <a key={`link1-${index}`} href={`tel:${item.number}`}>
                      <div
                        key={`contactus-${index}`}
                        className="flex flex-col justify-center items-start"
                      >
                        <span className="font-manrope font-normal text-[14px] sm:text-xl text-white/50">
                          {item.name}
                        </span>
                        <span className="font-manrope font-normal text-[14px] sm:text-xl text-white">
                          {item.number}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <div
                  className="flex flex-row items-center w-full  cursor-pointer"
                  onClick={handleEmailUs}
                >
                  <div className="flex flex-row items-center gap-6 w-full ">
                    <Image
                      alt=""
                      src="/contactus/phone.svg"
                      className="w-6 h-6 sm:h-12 sm:w-12"
                      width={24}
                      height={24}
                    />
                    <span className="font-manrope font-bold text-sm sm:text-[20px] tracking-[0.2em] text-white/50 toUpper uppercase">
                      Email Us
                    </span>
                  </div>
                </div>
                <div className="flex flex-col py-5 gap-[10px] w-full cursor-pointer hover:opacity-80">
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
