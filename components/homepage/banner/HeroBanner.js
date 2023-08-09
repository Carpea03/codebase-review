import Button from '../../buttons/Button'
import { Container } from '../../templates/Container'
import { InnerContainer } from '../../templates/InnerContainer'
import React from 'react'
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
  { title: 'Talk to an IP attorney' },
  { title: 'Visit our Virtual Office' },
]

export default function HeroBanner({ landing, data }) {
  return (
    <Container className="z-4 0 md:px-20 xl:px-40 bg-hero-banner">
      <div className="container max-w-screen-2xl mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-16 md:gap-0 py-10 sm:py-[60px] md:py-16 xl:py-32">
          {/** contents */}
          <div className="md:w-[50%] xl:w-full flex flex-col items-center md:items-start gap-[70px] order-last md:order-first">
            <div className="w-full flex flex-col items-start justify-center gap-6">
              <span className="w-full font-lora font-semibold text-2xl sm:text-5xl lg:text-6xl xl:text-[59px] xl:leading-[120%] text-[#272940] text-center md:text-left px-10 md:px-0">
                {landing ? data?.header[0]?.title : 'Innovate Boldly.'}
                <br />
                {landing ? '' : 'Protect Strategically.'}
              </span>
              <p
                style={{ whiteSpace: 'pre-line' }}
                className="font-manrope font-semibold text-sm sm:text-2xl text-[#272940]/50 text-center md:text-left px-14 sm:px-40 md:px-0"
              >
                {landing ? data?.header[0]?.body : details[0].description}
              </p>
            </div>
            <div className="flex sm:flex-col md:flex-row md:justify-center md:items -center gap-6 md:gap-6">
              <Link href="/contact-us">
                <div className="flex flex-col items-center">
                  <div
                    className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                    style={{
                      boxShadow:
                        '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                    }}
                  >
                   <Image src="/telephone.svg" alt="" width={48} height={48} />
                    <span className="font-manrope font-semibold text-[10px] sm:text-xl text-white">
                      {buttonText[0].title}
                    </span>
                  </div>
                </div>
              </Link>
              <Link href={metaOffice}>
                <div className="z-40 group flex flex-col items-center hover:bg-[#9A85D2] rounded">
                  <div
                    className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] group-hover:bg-[#9A85D2] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer"
                    style={{
                      boxShadow:
                        '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                    }}
                  >
                    <Image src="/door.svg" alt="" width={48} height={48} />
                    <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                      {buttonText[1].title}
                    </span>
                  </div>
                  <div className="z-40 flex justify-center ">
                    <span className=" absolute z-50 -mt-2 scale-0 transition-none bg-[#9A85D2] p-2 group-hover:scale-100 rounded">
                      <Image
                        src="/virtual-office.png"
                        alt=""
                        width={304}
                        height={300}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Image
            src="/professionalProfiles/IP-people.jpg"
            className={`${
              landing ? 'pt-10' : ''
            } md:h-[300px] md:w-full xl:h-full xl:w-full object-cover md:pl-5`}
            alt=""
            width={442}
            height={332}
          />
        </div>
      </div>
    </Container>
  )
}
