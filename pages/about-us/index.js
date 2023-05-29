import { Container } from '../../components/templates/Container'
import Footer from '../../components/templates/Footer'
import Header from '../../components/templates/Header'
import React, { useState } from 'react'
import Image from 'next/image'
import OurValues from './content/OurValues'
import NewsBlog from '../../components/newsblog'
import Philosophy from './content/Philosophy'
import AwardsAndRecognition from './content/AwardsAndRecognition'
import { Listbox } from '@headlessui/react'
import { MdArrowDropDown } from 'react-icons/md'

const menus = [
  { id: 1, title: 'Living our values', icon: '/services/medal-star.svg' },
  { id: 2, title: 'How We Give Back', icon: '/services/bill.svg' },
  { id: 3, title: 'Awards & Recognition', icon: '/services/book.svg' },
]

const news = [
  {
    id: 1,
    img: '/ipNewsBlog/news-1.png',
    content:
      'Infringement of third party trade marks – Hells Angels and Redbubble',
    visit: 'Nov 25 · 4 min read',
  },
  {
    id: 2,
    img: '/ipNewsBlog/news-2.png',
    content:
      'Infringement of third party trade marks – Hells Angels and Redbubble',
    visit: 'Nov 25 · 4 min read',
  },
  {
    id: 3,
    img: '/ipNewsBlog/news-3.png',
    content:
      'Infringement of third party trade marks – Hells Angels and Redbubble',
    visit: 'Nov 25 · 4 min read',
  },
]

export default function AboutUs() {
  const [selectedMenu, setSelectedMenu] = useState(0)

  return (
    <>
      <Header />
      <Container className="bg-[#FFFDF7]">
        <div className="w-full bg-aboutus-unsplash !bg-cover">
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
              <div className="flex flex-col items-center justify-center px-4 sm:px-32 md:px-24 xl:px-40 2xl:px-[283px] gap-4 h-[510px] sm:h-[710px] md:h-[553px] w-full">
                <span className="font-manrope font-bold text-base sm:text-[32px] sm:leading-[44px] md:text-xl tracking-wide uppercase text-[#FFCE4F]">
                  ABOUT US
                </span>
                <span className="font-lora font-medium text-[32px] sm:text-5xl leading-[140%] sm:tracking-[-0.03em] text-center text-white">
                  Australian Intellectual Property Rights & Other Services
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full sm:h-[134px] md:h-32 md:flex flex-row items-start bg-[#FAF4E4]">
          {menus.map((menu, index) => (
            <div
              key={index}
              className={`w-1/${
                menus.length
              } h-full flex flex-row items-center justify-center gap-4 cursor-pointer ${
                selectedMenu === index ? 'bg-[#FFFDF7]' : 'bg-[#FAF4E4]'
              }`}
              style={{
                clipPath:
                  selectedMenu === 0
                    ? 'polygon(0 0,95% 0, 100% 100%, 0 100%)'
                    : selectedMenu === menus.length - 1
                    ? 'polygon(0 0,100% 0, 100% 100%, 5% 100%)'
                    : 'polygon(0 0,95% 0, 100% 100%, 5% 100%)',
              }}
              onClick={() => setSelectedMenu(index)}
            >
              <Image
                src={menu.icon}
                width={32}
                height={32}
                className="w-6 h-6 xl:w-8 xl:h-8"
                alt=""
              />
              <span className="font-manrope font-medium text-base xl:text-xl 2xl:text-2xl text-[#404266] whitespace-nowrap">
                {menu.title}
              </span>
            </div>
          ))}
        </div>
        <Listbox
          as="div"
          className="md:hidden relative z-30"
          value={menus[selectedMenu]}
          onChange={(value) => setSelectedMenu(value.id - 1)}
        >
          <Listbox.Button
            as="div"
            className="flex flex-row items-center bg-[#FDFBF5] hover:opacity-50 outline-none hover:outline-none cursor-pointer"
          >
            <div className="w-full flex flex-row items-center justify-center py-[10px] pl-6 sm:py-6 sm:pl-14 gap-6">
              <Image
                src={menus[selectedMenu].icon}
                width={32}
                height={32}
                className="w-6 h-6 xl:w-8 xl:h-8"
                alt=""
              />
              <span className="font-manrope font-normal text-xs sm:text-2xl text-[#272940]">
                {menus[selectedMenu].title}
              </span>
            </div>
            <div className="flex flex-row items-start p-5 bg-[#FAF4E4]">
              <MdArrowDropDown className="w-4 h-4 sm:w-9 sm:h-9" />
            </div>
          </Listbox.Button>
          <Listbox.Options
            as="div"
            className="absolute top-14 sm:top-20 left-0 w-full flex flex-col items-center justify-center p-5 gap-[10px] pr-12 sm:gap-6 sm:py-6 sm:pr-7 cursor-pointer bg-[#FDFBF5]"
          >
            {menus.map((menu) => (
              <Listbox.Option
                as="div"
                key={menu.id}
                value={menu}
                className="cursor-pointer"
              >
                <span className="font-manrope font-medium text-xs sm:text-2xl text-[#272940]">
                  {menu.title}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <div className="flex flex-col px-[60px] md:px-20 2xl:px-56 py-20 md:py-12 w-full">
          <div
            className="flex flex-col items-start"
            style={{
              filter: 'drop-shadow(0px 5px 17px rgba(64, 76, 89, 0.06))',
            }}
          >
            <div className="flex flex-col items-center justify-center p-[60px] gap-[60px] bg-white">
              {selectedMenu == 0 && <OurValues />}
              {selectedMenu == 1 && <Philosophy />}
              {selectedMenu == 2 && <AwardsAndRecognition />}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start bg-ipNewsLog-content pt-12 sm:pt-20">
          <div className="w-full flex flex-row justify-start items-center px-6 sm:px-14">
            <span className="font-lora font-medium text-xs sm:text-2xl text-[#272940]">
              Related news
            </span>
          </div>
          <NewsBlog data={news} />
        </div>
      </Container>
      <Footer page="About Us" />
    </>
  )
}
