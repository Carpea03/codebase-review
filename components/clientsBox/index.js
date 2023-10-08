import React from 'react'
import Image from 'next/image'
import { brands } from '../../utils/const/clients'

const ClientsBox = ({ state }) => {
  const logos = [
    { image: '/clients/logo-biometic.png' },
    { image: '/clients/logo-covidien.png' },
    { image: '/clients/logo-ethicon-endo-surgery.png' },
    { image: '/clients/logo-glycom.png' },
    { image: '/clients/logo-intelligent-implant-systems.png' },
    { image: '/clients/logo-ironwood-pharmaceuticals.png' },
    { image: '/clients/logo-lenswista.png' },
    { image: '/clients/logo-optimized-ortho.png' },
    { image: '/clients/logo-sunjin-chemicals.png' },
    { image: '/clients/logo-syntheon.png' },
  ]
  return (
    <div className="w-full">
      <div className="w-full flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {brands[state].supportedBrand.map((item, index) => {
          return (
            <div
              key={`logos-${index}`}
              className="flex flex-col w-full h-full"
              style={{
                boxShadow:
                  '0px 1.54966px 3.15467px 0px rgba(0, 0, 0, 0.05), 0px 3.72406px 7.58112px 0px rgba(150, 151, 169, 0.07), 0px 12.50833px 25.46339px 0px rgba(150, 151, 169, 0.10), 0px 56px 114px 0px rgba(150, 151, 169, 0.17)',
              }}
            >
              <div className="w-full flex justify-center md:justify-center">
                <Image src={item.src} alt="" width={320} height={240} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientsBox
