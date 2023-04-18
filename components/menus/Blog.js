import Image from 'next/image'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'

const sideMenus = [
  {
    id: 1,
    name: 'IP News',
    img: '/menus/blog/sideMenus/ip-news.svg',
    href: '',
  },
  {
    id: 2,
    name: 'Resources',
    img: '/menus/blog/sideMenus/resources.svg',
    href: '',
  },
]

const subMenus = [
  [
    { title: 'Browse By Category', bold: true, division: false },
    { title: 'Case Studies', bold: false, division: false },
    { title: 'Client Success Stories', bold: false, division: false },
    { title: 'Commercialisation', bold: false, division: false },
    { title: 'Designs', bold: false, division: false },
    { title: 'Domain Names', bold: false, division: false },
    { title: 'Events', bold: false, division: false },
    { title: 'Featurettes', bold: false, division: false },
    { title: 'Firm News', bold: false, division: false },
  ],
  [
    { title: '', bold: false, division: true },
    { title: 'Innovation Patents', bold: false, division: false },
    { title: 'IP Strategy', bold: false, division: false },
    { title: 'Oppositions & Disputes', bold: false, division: false },
    { title: 'Patents', bold: false, division: false },
    { title: 'Technology', bold: false, division: false },
    { title: 'Trade Marks', bold: false, division: false },
  ],
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Blog() {
  return (
    <div
      className="w-full bg-[#FFFEFD]"
      style={{
        filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15))',
      }}>
      <div className="container max-w-[1440px] mx-auto">
        <Tab.Group
          as="div"
          className="flex flex-col md:flex-row justify-center">
          <Tab.List
            as="div"
            className="hidden md:flex flex-col justify-start w-[30%]">
            {sideMenus.map((sideMenu) => (
              <Tab
                key={sideMenu.id}
                className={({ selected }) =>
                  classNames(
                    'flex flex-row justify-start items-center md:pl-4 lg:pl-20 xl:pl-40 gap-3 w-full h-[67px] border-b border-solid outline-none',
                    selected
                      ? 'bg-[#FFFEF8] border-[#F0E4C3] font-bold text-[#000000]'
                      : 'bg-white border-[#EEEDE9] font-semibold text-[#000000]/50'
                  )
                }>
                <Image
                  src={sideMenu.img}
                  size={16}
                  alt=""
                  width={16}
                  height={16}
                />
                <span className="uppercase font-manrope text-sm ">
                  {sideMenu.name}
                </span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            as="div"
            className="flex flex-col w-full md:w-[70%] pb-12">
            <Tab.Panel>
              <div className="flex flex-col w-full h-full bg-[#FFFDF7] font-manrope font-semibold text-sm">
                <div className="flex flex-col justify-center items-start w-full h-[134px] gap-[10px] pl-12 border-b md:border-b-2 border-solid border-[#BFBBB2] md:border-[#7568D1]">
                  <span className="text-[#272940]">
                    IP FRONT™ – INTELLECTUAL PROPERTY NEWS
                  </span>
                  <span className="text-[#272940]/60">
                    The latest IP news across patents and trade marks law and
                    practice by Baxter IP.
                  </span>
                </div>
                <div className="flex flex-col item-start gap-[10px] pt-8 pl-12">
                  <div className="flex flex-row items-start">
                    <span className="text-[#272940]">Browse By Category</span>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:gap-8">
                    <div className="flex flex-col justify-start item-start gap-[10px] w-60">
                      <span className="text-[#272940]/60">Case Studies</span>
                      <span className="text-[#272940]/60">
                        Client Success Stories
                      </span>
                      <span className="text-[#272940]/60">
                        Commercialisation
                      </span>
                      <span className="text-[#272940]/60">Designs</span>
                      <span className="text-[#272940]/60">Domain Names</span>
                      <span className="text-[#272940]/60">Events</span>
                      <span className="text-[#272940]/60">Featurettes</span>
                      <span className="text-[#272940]/60">Firm News</span>
                    </div>
                    <div className="flex flex-col justify-start item-start gap-[10px] w-60">
                      <span className="text-[#272940]/60">
                        Innovation Patents
                      </span>
                      <span className="text-[#272940]/60">IP Strategy</span>
                      <span className="text-[#272940]/60">
                        Oppositions & Disputes
                      </span>
                      <span className="text-[#272940]/60">Patents</span>
                      <span className="text-[#272940]/60">Technology</span>
                      <span className="text-[#272940]/60">Trade Marks</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
