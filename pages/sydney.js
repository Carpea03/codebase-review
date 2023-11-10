import { Container } from '../components/templates/Container'
import Footer from '../components/templates/Footer'
import Header from '../components/templates/Header'
import Contact from '../components/Contact'
import React, { useState, useEffect } from 'react'
import { contactDetails } from '../utils/const/contacts'
import { useRouter } from 'next/router'
import { InnerContainer } from '../components/templates/InnerContainer'
import Head from 'next/head'
import Dropdown from '../components/Dropdown'

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
      <Head>
        <title>{`Contact our Baxter IP Sydney Patent & Trade Mark Attorneys`}</title>
        <meta
          name="description"
          content={
            'Call +61 2 9264 6716 to talk with a patent or trade mark attorney at our Sydney office to discuss intellectual property queries today.'
          }
        />
      </Head>
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
                <Dropdown
                  title={'Sydney Patent & Trade Mark Office'}
                  place={place}
                  onChange={(e) => onSelected(e.target.value)}
                  selectedPlace={selectedPlace}
                  selectedId={selectedId}
                />
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
