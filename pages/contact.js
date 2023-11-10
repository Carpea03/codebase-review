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
  const [area, setArea] = useState(null)

  useEffect(() => {
    let office = null
    let newArray = []
    let ignore = false

    var url = window.location

    var area = url
      .toString()
      .substring(url.toString().lastIndexOf('/') + 1)
      .toLowerCase()

    setArea(area)

    contactDetails.sort().map((key) => {
      newArray.push({ ...key })
    })

    setPlace(newArray)
    let city = 'Sydney'

    office = contactDetails.filter(
      (item) => item.name.toLowerCase() === city.toLowerCase()
    )[0]

    setSelectedPlace(office?.number)
    setSelectedId(office?.id)

    if (!ignore) {
      const geoLocation = handleFetchData()

      geoLocation.then((response) => {
        if (response?.geolocation_data?.country_name == 'Australia') {
          if (
            response?.geolocation_data?.city != 'Sydney' &&
            response?.geolocation_data?.city != 'Melbourne' &&
            response?.geolocation_data?.city != 'Brisbane'
          ) {
            if (response?.geolocation_data?.region_name == 'Victoria')
              city = 'Melbourne'
            else if (response?.geolocation_data?.region_name == 'Queensland')
              city = 'Brisbane'
            else if (
              response?.geolocation_data?.region_name == 'New South Wales'
            )
              city = 'Sydney'
            else city = 'Sydney'
          }

          office = contactDetails.filter(
            (item) => item.name.toLowerCase() === city.toLowerCase()
          )[0]
        }

        setSelectedPlace(office?.number)
        setSelectedId(office?.id)
      })
    }

    return () => {
      ignore = true
    }
  }, [office])

  const onSelected = (id) => {
    const details = contactDetails[id]
    // setSelectedPlace(details.number)
    // setSelectedId(id)
    router.push(`/${details.name.toLocaleLowerCase()}`)
  }

  const handleFetchData = async () => {
    const responseIp = await fetch('https://api.ipify.org?format=json')
    const dataIp = await responseIp.json()

    const responseLocation = await fetch(
      `https://https-api.apigurus.com/iplocation/v1.8/locateip?key=SAKA86EJN6G22AHJS6RZ&ip=${dataIp.ip}&format=JSON`
    )
    const dataLocation = await responseLocation.json()

    return dataLocation
  }

  return (
    <>
      <Head>
        <title>{`Other Australian enquiries | Baxter IP, Patent & Trade Mark Attorneys`}</title>
        <meta
          name="description"
          content={
            'Call +61 2 9264 6716 to talk with a patent or trade mark attorney at Baxter IP to discuss your patents, trade marks and intellectual property options today.'
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
                  title={'Australian Patent & Trade Mark Office'}
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
          <Contact
            contactDetails={contactDetails[selectedId]}
            area={area}
          />
        </InnerContainer>
      </Container>
      <Footer page={'Contact'} />
    </>
  )
}
