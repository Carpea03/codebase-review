import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import React from 'react'
import { InnerContainer } from '../templates/InnerContainer'
import Image from 'next/image'

const brands = [
  { id: 1, src: '/banner/Ten13.svg' },
  { id: 2, src: '/banner/investible.svg' },
  { id: 3, src: '/banner/UNSW Sydney.svg' },
  { id: 4, src: '/banner/USYD Genesis.svg' },
  { id: 5, src: '/banner/founder.svg' },
  { id: 6, src: '/banner/airtree.svg' },
]

export const OurClient = () => {
  return (
    <Container>
      <div className="flex flex-col items-start">
        {/** top */}
        <div className="w-full flex flex-col py-10  border-[1px] border-[#F0E4C3]">
          <TitleContainer

            description="Join other companies growing their IP with us"
          />
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
              {brands.map((brand) => (
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
