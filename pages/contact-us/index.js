import { Container } from '../../components/templates/Container'
import Footer from '../../components/templates/Footer'
import Header from '../../components/templates/Header'
import React, { useState, useRef } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import Contact from './offices/Contact'
import { contactDetails } from '../../utils/const/contacts'
import { useRouter } from 'next/router'
import { InnerContainer } from '../../components/templates/InnerContainer'
import Head from 'next/head'

const hears = [
  { id: 1, name: 'Select one' },
  { id: 2, name: 'LinkedIn' },
]

export default function ContactUs() {
  const router = useRouter()
  const [callUs, setCallUs] = useState(true)
  const [selectedId, setSelectedId] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState('+61 2 9264 671')

  const onSelected = (id) => {
    const details = contactDetails[id]
    setSelectedPlace(details.number)
    setSelectedId(id)
    // router.push(`/contact-us/${details.name.toLocaleLowerCase()}`)
  }

  const renderOptions = (item, id) => (
    <option
      key={`contact-${id}`}
      value={id}
      className="flex font-manrope font-semibold text-[#404266] sm:text-xl md:text-xl whitespace-nowrap"
    >
      {item}
    </option>
  )

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="" />
      </Head>
      <Header active={'Contact'} />
      <Container className="bg-[#FFFDF7]">
        <InnerContainer>
          <div className="w-full bg-contactus-unsplash !bg-cover">
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
                <div className="w-full flex flex-col items-center md:items-start px-4 sm:px-[76px] md:pl-40 py-28 sm:py-[409px] md:py-48">
                  <div className="w-full md:w-[558px] h-44 sm:h-80 md:h-[185px] flex flex-col items-center gap-6 sm:gap-[60px] md:gap-6">
                    <span className="font-lora font-medium text-3xl sm:text-5xl sm:leading-[138%] md:text-[40px] md:leading-[51px] text-white text-center md:text-left">
                      Australian Patent & Trade Mark Office
                    </span>
                    <div className="flex flex-row items-center justify-center md:justify-start h-14 sm:h-32 md:h-[59px] w-full">
                      <select
                        onChange={(e) => onSelected(e.target.value)}
                        className="select-contact flex flex-row items-center px-5 py-4 sm:py-9 sm:px-5 md:px-6 md:py-4 gap-[10px] bg-[#FFCE4F] cursor-pointer h-full rounded-l-md flex font-manrope font-semibold text-[#404266] text-xl whitespace-nowrap"
                      >
                        {contactDetails.map((item, index) =>
                          renderOptions(item?.place, index)
                        )}
                      </select>
                      <div className="flex flex-row items-center px-5 py-4 sm:py-9 sm:px-6 md:px-6 md:py-4 gap-[10px] bg-black/30 cursor-pointer h-full rounded-r-md">
                        <span className="font-manrope font-semibold items-center text-base sm:text-[32px] sm:leading-[44px] md:text-xl text-white whitespace-nowrap">
                          {selectedPlace}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contact contactDetails={contactDetails[selectedId]} />
        </InnerContainer>
      </Container>
      <Footer page={'Contact'} />
    </>
  )
}
