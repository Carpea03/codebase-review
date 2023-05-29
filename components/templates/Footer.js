import Image from 'next/image'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Container } from './Container'
import { TiSocialLinkedin } from 'react-icons/ti'
import GoogleMapReact from 'google-map-react'
import Link from 'next/link'

const contact = [
  { title: 'Email', content: 'mail@baxterip.com.au' },
  { title: 'Phone', content: '+61 2 9264 6716' },
]

const company = [
  { title: 'About Us', href: '/about-us' },
  { title: 'Contact', href: '/contact-us' },
  { title: 'Privacy Policy', href: '' },
  { title: 'Terms & conditions', href: '' },
]

const moreToExplore = [
  { title: 'IP News', href: '/ip-news' },
  { title: 'Our Values', href: '' },
  { title: 'How We Give Back', href: '' },
  { title: 'Awards & Recognition', href: '' },
]

const logos = ['aippi.svg', 'apaa.svg', 'ita.svg', 'ipta.svg', 'aipla.svg']

const Subject = ({ title }) => {
  return (
    <div className="flex flex-col items-start gap-3 sm:gap-5 md:gap-3">
      <span className="font-lora font-medium text-xl sm:text-3xl md:text-xl text-white whitespace-nowrap">
        {title}
      </span>
      <div className="w-12 sm:w-28 md:w-12 border-b-[1px] border-[#FFD15B]" />
    </div>
  )
}

const Item = ({ title, content, page }) => {
  return (
    <div className="flex flex-col items-start gap-[3px] md:gap-[1px]">
      <span className="font-manrope font-medium text-sm sm:text-xl md:text-sm lg:text-base text-white whitespace-nowrap cursor-pointer">
        {page === title ? <div className="text-black">{title}</div> : title}
      </span>
      <span className="font-manrope font-medium text-sm sm:text-xl text-[#9FA0B2] whitespace-nowrap cursor-pointer">
        {content}
      </span>
    </div>
  )
}

const defaultProps = {
  center: {
    lat: -33.86,
    lng: 151.206529,
  },
  zoom: 11,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Footer = ({ page }) => {
  return (
    <Container>
      <div className="flex flex-col items-center px-4 py-[30px] sm:px-9 sm:py-[67px] md:px-4 lg:px-10 md:pt-[50px] bg-[#404266]">
        <div className="w-full flex flex-col items-center gap-[60px] md:gap-[50px]">
          <div className="w-full flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-[60px] md:gap-0">
            <div className="md:w-2/5 flex flex-col items-start gap-2 sm:gap-[18px] md:gap-4">
              <div className="flex flex-col items-center justify-center p-1 sm:pt-[10px] sm:pr-[10px] sm:pb-1">
                <Image
                  src={'/light-logo.svg'}
                  width={192}
                  height={55}
                  className="w-28 h-8 sm:w-60 sm:h-[76px] md:w-48 md:h-14"
                  alt=""
                />
              </div>
              <span className="font-manrope font-medium text-sm sm:text-2xl md:text-base flex items-center text-white">
                Perpetual Innovation. Protected.
              </span>
            </div>
            <div className="md:w-1/3 flex flex-row items-center md:py-5 relative">
              <input
                className="w-full flex flex-row items-center px-14 sm:px-28 md:px-16 p-4 sm:p-9 md:py-6 gap-4 text-sm sm:text-3xl md:text-xl text-white bg-white/5 border-[1px] border-[#797B94] rounded-md outline-none focus:outline-none"
                placeholder="Search..."
              />
              <div className="absolute top-1/2 left-4 sm:left-8 md:left-6 transform -translate-y-1/2">
                <FiSearch
                  className="w-6 h-6 sm:w-14 sm:h-14 md:w-6 md:h-6"
                  strokeWidth={2}
                  color="#7A7B94"
                />
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-white/30" />
          <div className="flex flex-col md:flex-row justify-between items-start w-full gap-[60px] md:gap-0">
            <div className="flex flex-col items-start gap-6 sm:gap-10 w-full md:w-auto">
              <Subject title="Contact Us" />
              <div className="flex flex-col items-start gap-6">
                {contact.map((item) => (
                  <Item
                    key={item.title}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
              {/* <Image
                src={"/footer/map.png"}
                width={290}
                height={250}
                className="bg-cover w-[340px] h-[290px] sm:w-[760px] sm:h-[650px] md:w-[290px] md:h-[250px]"
              /> */}
              <div className="w-full h-[290px] sm:h-[650px] md:w-[240px] md:h-[200px] lg:w-[290px] lg:h-[250px]">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start gap-10">
                <Subject title="Company" />
                <div className="flex flex-col items-start gap-6">
                  {company.map((item) => (
                    <Link href={item.href} key={item.title}>
                      <Item title={item.title} page={page} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex h-[90px]" />
              <div className="hidden md:flex flex-col items-start gap-3">
                <Subject title="Connect with us" />
                <div className="flex flex-row items-center px-4 py-[10px] gap-3 bg-[#6A6DA9] rounded-md cursor-pointer">
                  <span className="font-manrope font-medium text-base text-white">
                    LinkedIn
                  </span>
                  <TiSocialLinkedin
                    size={24}
                    color="#6A6DA9"
                    className="bg-white rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start gap-10">
                <Subject title="More to explore" />
                <div className="flex flex-col items-start gap-6">
                  {moreToExplore.map((item) => (
                    <Link href={item.href} key={item.title}>
                      <Item title={item.title} page={page} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex h-[90px]" />
              <div className="hidden md:flex flex-col items-start gap-4">
                <span className="font-lora font-medium text-xl text-white">
                  Baxter IP, Patent & Trade Mark
                  <br /> Attorneys is a member of:
                </span>
                <div className="grid grid-rows-2 xl:grid-rows-1 grid-flow-col items-center gap-7 relative">
                  {logos.map((item) => (
                    <Image
                      key={item}
                      src={'/footer/marks/' + item}
                      alt=""
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col items-start gap-10">
              <Subject title="Connect with us" />
              <div className="flex flex-row items-center px-4 py-[10px] sm:px-9 sm:py-6 gap-3 sm:gap-7 bg-[#6A6DA9] rounded-md cursor-pointer">
                <span className="font-manrope font-medium text-base sm:text-xl text-white">
                  LinkedIn
                </span>
                <TiSocialLinkedin
                  color="#6A6DA9"
                  className="bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
            </div>
            <div className="md:hidden flex flex-col items-start gap-4 sm:gap-10">
              <span className="font-lora font-medium text-xl sm:text-3xl text-white">
                Baxter IP, Patent & Trade Mark Attorneys is a member of:
              </span>
              <div className="grid grid-cols-5 items-center gap-7 sm:gap-16">
                {logos.map((item) => (
                  <Image
                    key={item}
                    src={'/footer/marks/' + item}
                    alt=""
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-[30px] sm:gap-[67px] md:gap-10">
            <div className="w-full border-b-[1px] border-white/30" />
            <span className=" font-manrope font-medium text-xs sm:text-xl md:text-base text-white/50 text-center">
              Copyright 2023 © Baxter IP, Patent & Trade Mark Attorneys
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
