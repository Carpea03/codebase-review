import Image from 'next/image'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'

const sideMenus = [
  {
    name: 'Contact US',
    img: '/menus/contact/sideMenus/contact-book.svg',
    href: '',
  },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
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
            {sideMenus.map((sideMenu, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    'flex flex-row justify-start items-center md:pl-20 lg:pl-20 xl:pl-40 gap-3 w-full h-[67px] border-b border-solid outline-none',
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
            className="pb-12">
            <Tab.Panel>
              <div className="flex flex-col w-full h-full bg-[#FFFDF7] font-manrope font-semibold text-sm">
                <div className="flex flex-col justify-center items-start w-full h-[134px] gap-[10px] pl-12 border-b md:border-b-2 border-solid border-[#BFBBB2] md:border-[#7568D1]">
                  <span className="text-[#272940]">
                    OUR PATENT & TRADE MARK ATTORNEY OFFICES
                  </span>
                  <span className="text-[#272940]/60">
                    Between 2007 and 2019, Baxter IP established a team of
                    industry specialist IP attorneys with offices in Sydney,
                    Melbourne, and Brisbane.
                  </span>
                </div>
                <div className="flex flex-col justify-start item-start gap-8 pt-8 pl-12">
                  <div className="flex flex-col justify-start item-start gap-[10px]">
                    <span className="text-[#272940]">
                      Sydney Patent & Trade Mark Office
                    </span>
                    <span className="text-[#272940]/60">+61 2 9264 6716</span>
                  </div>
                  <div className="flex flex-col justify-start item-start gap-[10px]">
                    <span className="text-[#272940]">
                      Melbourne Patent & Trade Mark Office
                    </span>
                    <span className="text-[#272940]/60">+61 2 9264 6716</span>
                  </div>
                  <div className="flex flex-col justify-start item-start gap-[10px]">
                    <span className="text-[#272940]">
                      Brisbane Patent & Trade Mark Office
                    </span>
                    <span className="text-[#272940]/60">+61 2 9264 6716</span>
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
