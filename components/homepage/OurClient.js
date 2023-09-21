import { Container } from '../templates/Container'
import { TitleContainer } from '../templates/TitleContainer'
import React from 'react'
import { InnerContainer } from '../templates/InnerContainer'
import Image from 'next/image'
import { brands } from '../../utils/const/clients'

export const OurClient = ({ state }) => {
  return (
    <Container className="flex flex-col gap-[70px]">
      <div
        style={{
          background: 'linear-gradient(168deg, #FFFEF8 42.45%, #FFF3D0 91%)',
        }}
      >
        <InnerContainer>
          <div className="px-10 mt-10 w-full flex justify-center">
            <div className="w-[500px] xl:w-[700px]">
              <TitleContainer description="Join other companies growing their IP with us" />
            </div>
          </div>
          <div className="px-10 xl:px-8 mb-10">
            <div className="flex flex-col py-20 sm:pb-20 md:py-20 xl:px-32">
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4 md:gap-5 w-full items-center justify-center">
                {brands[state].supportedBrand.map((brand) => (
                  <div
                    key={`brand-${brand.id}`}
                    className="flex justify-center items-center bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                    }}
                  >
                    <Image
                      key={brand.id}
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
          </div>
        </InnerContainer>
      </div>
    </Container>
  )
}
