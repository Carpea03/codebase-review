import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import React from 'react'
import { InnerContainer } from '../templates/InnerContainer'
import Image from 'next/image'

const brands = [
  {
    id: 0,
    supportedBrand: [
      { src: '/banner/ten13.svg' },
      { src: '/banner/investible.svg' },
      { src: '/banner/UNSW Sydney.svg' },
      { src: '/banner/USYD Genesis.svg' },
      { src: '/banner/founder.svg' },
      { src: '/banner/airtree.svg' },
    ],
  },
  {
    id: 1,
    supportedBrand: [
      { src: '/banner/Ozito Industries Pty Ltd.svg' },
      { src: '/banner/Hankook.svg' },
      { src: '/banner/Sea Transport.svg' },
      { src: '/banner/A&I Coatings.svg' },
      { src: '/banner/K2 Systems.svg' },
      { src: '/banner/Juvo Solutions.svg' },
      { src: '/banner/A&J Australia.svg' },
      { src: '/banner/AF Accessories.svg' },
      { src: '/banner/Lomax Group Pty Ltd.svg' },
      { src: '/banner/Wise Networking.svg' },
      { src: '/banner/Mission Systems.svg' },
      { src: '/banner/Valiant Space.svg' },
    ],
  },
  {
    id: 2,
    supportedBrand: [
      { src: '/banner/Identitii Pty Ltd.svg' },
      { src: '/banner/Secure Code Warrior.svg' },
      { src: '/banner/Prophecy.svg' },
      { src: '/banner/EASI-square.svg' },
      { src: '/banner/Braintree Communications Pty Ltd.svg' },
      { src: '/banner/Tiliter Pty Ltd.svg' },
      { src: '/banner/Preezie.svg' },
      { src: '/banner/Picnic IP Pty Ltd.svg' },
      { src: '/banner/Mission Systems.svg' },
    ],
  },
  {
    id: 3,
    supportedBrand: [
      { src: '/banner/Cyclomedica.svg' },
      { src: '/banner/iiShield.svg' },
      { src: '/banner/Global Surgical Innovations Holdings Pty Ltd.svg' },
      { src: '/banner/Nuroflux.svg' },
      { src: '/banner/Alpinia Biopharm Pty Ltd.svg' },
    ],
  },
  {
    id: 1,
    supportedBrand: [
      { src: '/banner/Cyclomedica.svg' },
      { src: '/banner/Identitii Pty Ltd.svg' },
      { src: '/banner/Ozito Industries Pty Ltd.svg' },
      { src: '/banner/Secure Code Warrior.svg' },
      { src: '/banner/Prophecy.svg' },
      { src: '/banner/EASI-square.svg' },
      { src: '/banner/Hankook.svg' },
      { src: '/banner/Mortgage Choice.svg' },
      { src: '/banner/Sea Transport.svg' },
      { src: '/banner/Alpinia Biopharm Pty Ltd.svg' },
      { src: '/banner/Nick Scali.svg' },
      { src: '/banner/A&I Coatings.svg' },
      { src: '/banner/K2 Systems.svg' },
      { src: '/banner/Juvo Solutions.svg' },
      { src: '/banner/A&J Australia.svg' },
      { src: '/banner/AF Accessories.svg' },
      { src: '/banner/Braintree Communications Pty Ltd.svg' },
      { src: '/banner/Lomax Group Pty Ltd.svg' },
      { src: '/banner/Preezie.svg' },
      { src: '/banner/Picnic IP Pty Ltd.svg' },
    ],
  },
]
export const OurClient = ({ state }) => {
  return (
    <Container>
      <div className="flex flex-col items-start">
        {/** top */}
        <div className="w-full flex flex-col py-10  border-[1px] border-[#F0E4C3]">
          <TitleContainer description="Join other companies growing their IP with us" />
        </div>
        {/** bottom */}
        <div
          className="w-full flex flex-col justify-center px-12 sm:px-[107px] md:px-44"
          style={{
            background:
              'linear-gradient(176.69deg, #FFFEF8 21.12%, #FFBF15 139.62%)',
          }}
        >
          <InnerContainer>
            {/** brands container */}
            <div className="flex flex-col items-ystart py-20 sm:pb-20 md:py-20">
              <div className="grid grid-cols-3 gap-1 sm:gap-3 md:gap-5 w-full items-center justify-center">
                {brands[state].supportedBrand.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex justify-center items-center bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                    }}
                  >
                    <Image
                      alt=""
                      src={brand.src}
                      className="w-full block"
                      width={200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InnerContainer>
        </div>
      </div>
    </Container>
  )
}
