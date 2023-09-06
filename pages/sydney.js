import { Container } from '../components/templates/Container'
import Footer from '../components/templates/Footer'
import Header from '../components/templates/Header'
import Contact from '../components/Contact'
import React, { useState, useEffect } from 'react'
import { contactDetails } from '../utils/const/contacts'
import { useRouter } from 'next/router'
import { InnerContainer } from '../components/templates/InnerContainer'

export default function ContactUs({ office }) {
  const [callUs, setCallUs] = useState(true)
  const router = useRouter()
  const [selectedId, setSelectedId] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState()
  const [place, setPlace] = useState([])

  useEffect(() => {
    let office = null
    let newArray = []

    var url = window.location

    var area = url
      .toString()
      .substring(url.toString().lastIndexOf('/') + 1)
      .toLowerCase()

    contactDetails.sort().map((key) => {
      newArray.push({ ...key })
    })

    setPlace(newArray)

    office = contactDetails.filter(
      (item) => item.name.toLowerCase() === area
    )[0]

    setSelectedPlace(office?.number)
    setSelectedId(office?.id)
  }, [office])

  const onSelected = (id) => {
    const details = contactDetails[id]
    // setSelectedPlace(details.number)
    // setSelectedId(id)
    router.push(`/${details.name.toLocaleLowerCase()}`)
  }

  const renderOptions = (id, item, key) => (
    <option
      key={`contact-${key}`}
      value={id}
      selected={id == selectedId ? 'selected' : ''}
      className="flex font-manrope font-semibold text-[#404266] sm:text-xl md:text-xl whitespace-nowrap"
    >
      {item}
    </option>
  )

  return (
    <>
      <Header active={'Contact'} />
      <Container className="bg-[#FFFDF7]">
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
              <InnerContainer>
                <div className="w-full flex flex-col items-center md:items-start px-4 sm:px-[76px] md:pl-40 py-28 sm:py-[409px] md:py-48">
                  <div className="w-full md:w-[558px] h-44 sm:h-80 md:h-[185px] flex flex-col items-center gap-6 sm:gap-[60px] md:gap-6">
                    <span className="font-lora font-medium text-3xl sm:text-5xl sm:leading-[138%] md:text-[40px] md:leading-[51px] text-white text-center md:text-left">
                      Australian Patent & Trade Mark Office
                    </span>
                    <div className="flex flex-row items-center justify-center md:justify-start h-14 sm:h-32 md:h-[59px] w-full">
                      <select
                        onChange={(e) => onSelected(e.target.value)}
                        className="select-contact flex-row items-center px-5 py-4 sm:py-9 sm:px-5 md:px-6 md:py-4 gap-[10px] bg-[#FFCE4F] cursor-pointer h-full rounded-l-md flex font-manrope font-semibold text-[#404266] text-xl whitespace-nowrap"
                        // value={'Call us Brisbane Office'}
                      >
                        {place?.map((item, index) =>
                          renderOptions(item?.id, item?.place, index)
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
              </InnerContainer>
            </div>
          </div>
        </div>

        <InnerContainer>
          <Contact contactDetails={contactDetails[selectedId]} />
        </InnerContainer>
      </Container>
      <Footer page={'Contact'} />
    </>
  )
}
