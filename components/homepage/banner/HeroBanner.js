import Button from '../../buttons/Button'
import { Container } from '../../templates/Container'
import { InnerContainer } from '../../templates/InnerContainer'
import React, { useState } from 'react'
import { HiPhone } from 'react-icons/hi'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { BsDoorOpenFill } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import { metaOffice } from '../../../utils/const/links'

const details = [
  {
    title: 'Innovate Boldly. Protect Strategically.',
    description:
      'In-house and top tier patent & trade mark attorney experience to provide astute, commercial IP advice.',
  },
  {
    title: 'Protect your trade mark to secure your brand’s future.',
    description:
      'Your trade mark is the face of your business. It directs customers back to your company, the source of the quality of your products or services. A successful trade mark is essential to building brand loyalty and reputation. To stand out from the crowd, get in touch with us today.',
  },
]

const buttonText = [
  { title: 'Talk to an IP attorney now' },
  { title: 'Visit our virtual office now' },
]

export default function HeroBanner({ landing, data }) {
  const [changeImage, setChangeImage] = useState(false)
  return (
    <Container className="z-4 bg-hero-banner px-10 xl:px-0">
      <InnerContainer>
        <div className="xl:h-[620px] xl:pt-20">
          <div className="container 2xl:flex 2xl:justify-center h-full pt-12 xl:pt-0 md:py-20 xl:px-10 ">
            <div className="flex flex-col xl:flex-row">
              <div className="order-2 xl:order-1 xl:w-[700px] pt-[60px]">
                <span className="w-full flex justify-center text-center  xl:justify-center 2xl:justify-start 2xl:text-left font-lora font-semibold text-5xl lg:text-6xl xl:text-[56px] xl:leading-[1-0%] text-[#272940] px-10 md:px-0 ">
                  {landing ? data?.header[0]?.title : 'Innovate Boldly.'}
                  <br />
                  {landing ? '' : 'Protect Strategically.'}
                </span>
                <p
                  style={{ whiteSpace: 'pre-line' }}
                  className="pb-20 md:pb-10 pt-10 font-manrope font-semibold text-2xl text-[#272940]/50 text-center 2xl:text-left xl:w-[700px]"
                >
                  {' '}
                  {landing ? data?.header[0]?.body : details[0].description}
                </p>
                <div className="flex flex-col gap-5 md:flex-row 2xl:pt-14 pb-10 sm:pb-10 md:pb-0 xl:pb-0 2xl:pb-10 justify-center 2xl:justify-start">
                  <Link href="/contact-us">
                    <div className="flex flex-col items-center px-2">
                      <div
                        className="w-60 h-[87px] w-[330px] sm:h-24 sm:w-[330px] md:w-[309px] md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                        style={{
                          boxShadow:
                            '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                        }}
                      >
                        <Image
                          src="/telephone.svg"
                          alt=""
                          width={48}
                          height={48}
                        />
                        <span className="font-manrope font-semibold text-[14px] sm:text-xl text-white w-[180px]">
                          {buttonText[0].title}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <Link href={metaOffice}>
                    <div
                      className="flex flex-col items-center"
                      onMouseEnter={() => setChangeImage(true)}
                      onMouseLeave={() => setChangeImage(false)}
                    >
                      <div
                        className={`w-60 h-[87px] w-[330px] sm:h-24 sm:w-[330px] md:w-[330px] xl:w-[330px] 2xl:w-[330px] sm:h-[88px] md:h-[88px] ${
                          changeImage
                            ? 'pointerArrow rounded-tl-md rounded-bl-md'
                            : 'bg-[#816BD9] rounded-md'
                        }  flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer 
                        ${changeImage ? 'pointerArrow' : ''} `}
                        style={
                          changeImage
                            ? { backgroundImage: `url("/arrrow-bg.svg")` }
                            : {
                                boxShadow:
                                  '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                              }
                        }
                      >
                        <Image src="/door.svg" alt="" width={48} height={48} />
                        <span className="font-manrope font-semibold text-[14px] sm:text-xl text-white w-[200px]">
                          {buttonText[1].title}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="order-1 xl:order-2 flex justify-center xl:justify-end">
                <Image
                  src={
                    changeImage
                      ? '/meta-office.png'
                      : '/professionalProfiles/IP-people.jpg'
                  }
                  alt={'banner'}
                  width={584}
                  height={438}
                  style={
                    changeImage
                      ? {
                          borderWidth: 10,
                          borderStyle: 'solid',
                          borderColor: '#806AD9',
                          borderRadius: 5,
                        }
                      : {}
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  )
}
