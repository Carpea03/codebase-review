import Image from 'next/image'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'

const sideMenus = [
  {
    name: 'IP Attorneys',
    img: '/menus/people/sideMenus/empty-shield.svg',
    href: '',
  },
  {
    name: 'Patent attorneys',
    img: '/menus/people/sideMenus/empty-hammer.svg',
    href: '',
  },
  {
    name: 'Trade mark attorneys',
    img: '/menus/people/sideMenus/shield-check.svg',
    href: '',
  },
  {
    name: 'Commercial counsel',
    img: '/menus/people/sideMenus/peoples-two.svg',
    href: '',
  },
]

const subMenus = [
  [
    { title: 'Sydney Team', bold: true, division: false },
    { title: 'Chris Baxter', bold: false, division: false },
    { title: 'Dr Qi Zhang', bold: false, division: false },
    { title: 'Naleesha Niranjan', bold: false, division: false },
    { title: 'Julia Caunt', bold: false, division: false },
    { title: 'Andrew Balis', bold: false, division: false },
    { title: 'Joanne Li', bold: false, division: false },
    { title: 'Dr Richard Grant', bold: false, division: false },
    { title: '', bold: false, division: true },
  ],
  [
    { title: 'Merlbourne Team', bold: true, division: false },
    { title: 'Martin Earley', bold: false, division: false },
    { title: 'Warren Chandler', bold: false, division: false },
    { title: 'Dr Seán Klinkradt', bold: false, division: false },
    { title: 'Jarrod Lichtblau', bold: false, division: false },
    { title: 'Willem du Preez', bold: false, division: false },
    { title: '', bold: false, division: true },
  ],
  [
    { title: 'About', bold: true, division: false },
    {
      title: 'The role of Australian patent attorneys',
      bold: false,
      division: false,
    },
    {
      title: 'How to choose an Australian patent attorney',
      bold: false,
      division: false,
    },
    {
      title: 'The role of Australian trade mark attorneys',
      bold: false,
      division: false,
    },
    {
      title: 'How to become a trade mark attorney',
      bold: false,
      division: false,
    },
  ],
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function People() {
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
                <span className="uppercase font-manrope text-sm cursor-pointer">
                  {sideMenu.name}
                </span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            as="div"
            className="flex flex-col w-full md:w-[70%]">
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
                <SubMenuBlock contents={subMenus} />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
