import { Container } from '../../components/templates/Container'
import { Listbox } from '@headlessui/react'
import { MdArrowDropDown } from 'react-icons/md'
import Image from 'next/image'
import React, { useState } from 'react'
import Patents from './contents/patents'
import TradeMarks from './contents/trademarks'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import NewsBlog from '../../components/newsblog'
import ScrollToTop from '../../components/buttons/ScrollToTop'

const menus = [
  {
    id: 1,
    title: 'Australian Patents',
    icon: '/services/medal-star.svg',
    submenus: [
      { id: 1, title: 'PCT National Phase Australia' },
      { id: 2, title: 'Convention Applications' },
      { id: 3, title: 'Australian Innovation Patents' },
      { id: 4, title: 'Patent Litigation' },
    ],
  },
  {
    id: 2,
    title: 'Australian Trade Marks',
    icon: '/services/bill.svg',
    submenus: [
      { id: 1, title: 'Trade Mark Search' },
      { id: 2, title: 'Trade Mark Litigation' },
      { id: 3, title: 'Trade Mark Infringement' },
    ],
  },
  { id: 3, title: 'Australian Registered Design', icon: '/services/book.svg' },
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

export default function Index() {
  const [selectedMenu, setSelectedMenu] = useState(0)

  return (
    <>
      <Header />
      <Container>
        <div className="w-full bg-services-unsplash !bg-cover">
          <div
            style={{
              background: 'rgba(64, 66, 102, 0.7)',
            }}>
            <div
              className="flex flex-col items-center gap-4 px-8 md:px-56 py-28 sm:py-80 md:py-36"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 206, 79, 0) 0%, rgba(255, 206, 79, 0.4) 100%)',
              }}>
              <span className="uppercase font-manrope font-bold tracking-[0.2em] md:tracking-normal text-xs sm:text-2xl md:text-xl text-[#FFCE4F] text-center">
                Services
              </span>
              <span className="font-lora font-medium text-xl sm:text-5xl text-white text-center">
                Australian Intellectual Property Rights & Other Services
              </span>
              <span className="font-manrope font-medium text-sm sm:text-[32px] sm:leading-[44px] md:text-xl text-white text-center">
                Information on filing requirements to patent in Australia and
                other unique aspects of Australian intellectual property.
              </span>
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
              onClick={() => setSelectedMenu(index)}>
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
          onChange={(value) => setSelectedMenu(value.id - 1)}>
          <Listbox.Button
            as="div"
            className="flex flex-row items-center bg-[#FDFBF5] hover:opacity-50 outline-none hover:outline-none cursor-pointer">
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
            className="absolute top-14 sm:top-20 left-0 w-full flex flex-col items-center justify-center p-5 gap-[10px] pr-12 sm:gap-6 sm:py-6 sm:pr-7 cursor-pointer bg-[#FDFBF5]">
            {menus.map((menu) => (
              <Listbox.Option
                as="div"
                key={menu.id}
                value={menu}
                className="cursor-pointer">
                <span className="font-manrope font-medium text-xs sm:text-2xl text-[#272940]">
                  {menu.title}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <div
          className="flex flex-col items-start rounded-lg px-8 md:px-20 xl:px-32 2xl:px-56 sm:pt-12 pb-[107px]"
          style={{
            filter: 'drop-shadow(0px 5px 17px rgba(64, 76, 89, 0.06))',
          }}>
          {selectedMenu === 0 && <Patents menus={menus[0].submenus} />}
          {selectedMenu === 1 && <TradeMarks menus={menus[1].submenus} />}
        </div>
        <div
          className="w-full"
          style={{
            background:
              'linear-gradient(177.97deg, rgba(255, 254, 248, 0) 4.08%, rgba(255, 217, 115, 0.4) 98.05%)',
          }}>
          <NewsBlog data={news} />
        </div>
      </Container>
      <Footer />
    </>
  )
}
