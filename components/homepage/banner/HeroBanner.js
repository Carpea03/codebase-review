import Button from '../../buttons/Button'
import { Container } from '../../templates/Container'
import { InnerContainer } from '../../templates/InnerContainer'
import React, { useState, useEffect } from 'react'
import { HiPhone } from 'react-icons/hi'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { BsDoorOpenFill } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

  const router = useRouter()

  useEffect(() => {
    // router.prefetch(metaOffice)
  }, [])

  return (
    <Container className="z-4 bg-hero-banner px-[32px] md:px-10">
      <InnerContainer>
        <div className="sm:px-[48] md:px-10 xl:px-8">
          <div className="xl:px-32">
            <div className={`${landing ? 'xl:pt-10 flex justify-center' : 'xl:pt-20 flex justify-center'}`}>
              <div className="container h-full pt-12 xl:pt-0 md:py-20 ">
                <div className="flex flex-col xl:flex-row">
                  <div
                    className={`order-2 xl:order-1  ${
                      landing
                        ? 'xl:w-[730px] pt-[20px] xl:pt-0'
                        : 'pt-[10px] xl:w-[700px]'
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="flex md:mt-10 justify-center text-center md:pt-10 md:text-center lg:py-2 xl:text-left md:justify-center xl:justify-start">
                        <span className="text-[25px] sm:text-[64px] md:text-6xl font-lora font-semibold mb-5">
                          <h1>
                            {landing
                              ? data?.header[0]?.title
                              : 'Innovate Boldly.'}
                            <br />
                            {landing ? '' : 'Protect Strategically.'}
                          </h1>
                        </span>
                      </div>
                      <div className="flex md:mt-5 mb-10 justify-center text-center md:mb-[60px] lg:mb-[60px] xl:mb-8 md:mt-5 xl:mt-0 2xl:mt-0 2xl:mb-0 md:text-center xl:text-left md:justify-center xl:justify-start">
                        <span
                          style={{ whiteSpace: 'pre-line' }}
                          className="text-[16px] sm:text-[24px] md:text-2xl font-semibold font-manrope opacity-50"
                        >
                          <h2>
                            {landing
                              ? data?.header[0]?.body
                              : details[0].description}
                          </h2>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 sm:flex-row 2xl:pt-20 pb-10 sm:pb-20 md:pb-0 xl:pb-0 2xl:pb-10 justify-center 2xl:justify-start">
                      <Link href="/contact">
                        <div className="flex flex-col items-center px-2">
                          <div
                            className="w-full p-3 sm:h-24 sm:w-[330px] md:w-[309px] md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                            style={{
                              boxShadow:
                                '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                            }}
                          >
                            <div className="hidden sm:flex">
                              <Image
                                src="/telephone.svg"
                                alt=""
                                width={48}
                                height={48}
                              />
                            </div>
                            <div className="flex sm:hidden">
                              <Image
                                src="/telephone.svg"
                                alt=""
                                width={24}
                                height={24}
                              />
                            </div>
                            <span className="font-manrope font-semibold text-[10px] sm:text-xl text-white w-[180px]">
                              {buttonText[0].title}
                            </span>
                          </div>
                        </div>
                      </Link>
                      <Link href={metaOffice} target="_blank" passHref>
                        <div
                          className="flex flex-col items-center"
                          onMouseEnter={() => setChangeImage(true)}
                          onMouseLeave={() => setChangeImage(false)}
                        >
                          <div
                            className={`w-[95%] py-[10px] p-3 sm:h-24 sm:w-[330px] md:w-[330px] xl:w-[330px] 2xl:w-[330px]  md:h-[88px] ${
                              changeImage
                                ? 'md:pointerArrow rounded-tl-md rounded-bl-md'
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
                            <div className="hidden sm:flex">
                              <Image
                                src="/door.svg"
                                alt=""
                                width={48}
                                height={48}
                              />
                            </div>
                            <div className="flex sm:hidden">
                              <Image
                                src="/door.svg"
                                alt=""
                                width={24}
                                height={24}
                              />
                            </div>
                            <span className="font-manrope font-semibold text-[10px] sm:text-xl text-white w-[170px] md:w-[200px]">
                              {buttonText[1].title}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`order-1 xl:order-2 flex justify-center xl:justify-end md:mt-5 xl:mt-20`}
                  >
                    <div className="xl:pl-10">
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
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  )
}
