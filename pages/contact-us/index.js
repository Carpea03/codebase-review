import { Container } from '../../components/templates/Container'
import Footer from '../../components/templates/Footer'
import Header from '../../components/templates/Header'
import React, { useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import MelbourneOffice from './offices/MelbourneOffice'
import SydneyOffice from './offices/SydneyOffice'

const hears = [
  { id: 1, name: 'Select one' },
  { id: 2, name: 'LinkedIn' },
]

export default function ContactUs() {
  const [callUs, setCallUs] = useState(true)

  return (
    <>
      <Header />
      <Container className="bg-[#FFFDF7]">
        <div className="w-full bg-contactus-unsplash !bg-cover">
          <div
            style={{
              background: 'rgba(64, 66, 102, 0.7)',
            }}>
            <div
              className="flex flex-col items-start gap-4"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 206, 79, 0) 0%, rgba(255, 206, 79, 0.4) 100%)',
              }}>
              <div className="w-full flex flex-col items-center md:items-start px-4 sm:px-[76px] md:pl-40 py-28 sm:py-[409px] md:py-48">
                <div className="w-full md:w-[558px] h-44 sm:h-80 md:h-[185px] flex flex-col items-center gap-6 sm:gap-[60px] md:gap-6">
                  <span className="font-lora font-medium text-3xl sm:text-5xl sm:leading-[138%] md:text-[40px] md:leading-[51px] text-white text-center md:text-left">
                    Australian Patent & Trade Mark Office
                  </span>
                  <div className="flex flex-row items-center justify-center md:justify-start h-14 sm:h-32 md:h-[59px] w-full">
                    <div className="flex flex-row items-center px-5 py-4 sm:py-9 sm:px-11 md:px-6 md:py-4 gap-[10px] bg-[#FFCE4F] cursor-pointer h-full rounded-l-md">
                      <span className="hidden md:flex font-manrope font-semibold text-[#404266] md:text-xl whitespace-nowrap">
                        Call us Sydney Office
                      </span>
                      <span className="md:hidden font-manrope font-semibold text-base sm:text-[32px] sm:leading-[44px] text-[#404266] whitespace-nowrap">
                        Sydney Office
                      </span>
                      <FiChevronUp
                        className={`w-6 h-6 sm:w-12 sm:h-12 md:w-8 md:h-8 stroke-black ${
                          callUs ? 'rotate-180' : ''
                        }`}
                        color={'white'}
                      />
                    </div>
                    <div className="flex flex-row items-center px-5 py-4 sm:py-9 sm:px-6 md:px-6 md:py-4 gap-[10px] bg-black/30 cursor-pointer h-full rounded-r-md">
                      <span className="font-manrope font-semibold items-center text-base sm:text-[32px] sm:leading-[44px] md:text-xl text-white whitespace-nowrap">
                        +61 2 9264 6716
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SydneyOffice />
        {/* <MelbourneOffice /> */}
      </Container>
      <Footer />
    </>
  )
}