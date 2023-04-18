import { Disclosure, Tab } from '@headlessui/react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'
import { FaCaretDown } from 'react-icons/fa'

const sideMenus = [
  {
    id: 1,
    name: 'Patent Service',
    img: '/menus/services/sideMenus/patent-service.svg',
    href: '',
  },
  {
    id: 2,
    name: 'Patent Specification',
    img: '/menus/services/sideMenus/patent-specifications.svg',
    href: '',
  },
  {
    id: 3,
    name: 'Trademark Service',
    img: '/menus/services/sideMenus/trademark-services.svg',
    href: '',
  },
  {
    id: 4,
    name: 'Ip Opporsitions & Disputes',
    img: '/menus/services/sideMenus/ip-oppositions.svg',
    href: '',
  },
  {
    id: 5,
    name: 'Bip Partners',
    img: '/menus/services/sideMenus/bip-partners.svg',
    href: '',
  },
]

const topMenus = [
  {
    id: 1,
    name: 'Coperator / SME',
    icon: '/menus/services/topMenus/people-top-card.svg',
    href: '',
  },
  {
    id: 2,
    name: 'Founded Startups',
    icon: '/menus/services/topMenus/school.svg',
    href: '',
  },
  {
    id: 3,
    name: 'Entrepreneur',
    icon: '/menus/services/topMenus/home.svg',
    href: '',
  },
  {
    id: 4,
    name: 'Foriegn Associates',
    icon: '/menus/services/topMenus/peoples-two.svg',
    href: '',
  },
]

const subMenus = [
  [
    { title: 'How to patent', bold: true, division: false },
    { title: 'Patent benefits', bold: false, division: false },
    { title: '', bold: false, division: true },
    { title: 'Patent search', bold: true, division: false },
    { title: 'International patent search', bold: false, division: false },
    { title: 'International-type search', bold: false, division: false },
    { title: 'Australian patent search', bold: false, division: false },
    { title: 'Freedom-to-operate patent search', bold: false, division: false },
    { title: '', bold: false, division: true },
    { title: 'Registered design', bold: true, division: false },
    { title: 'Registered design application', bold: false, division: false },
    { title: 'Design disputes', bold: false, division: false },
    { title: '', bold: false, division: true },
    { title: 'Other patent services', bold: true, division: false },
    { title: 'Inovation patents', bold: false, division: false },
    { title: '', bold: false, division: true },
  ],
  [
    { title: 'Ip strategy', bold: true, division: false },
    { title: 'Ip audit', bold: false, division: false },
    { title: 'Ip vaulation', bold: false, division: false },
    { title: '', bold: false, division: true },
    { title: 'Patent opositions & dispites', bold: true, division: false },
    { title: 'Patent opositions', bold: false, division: false },
    { title: 'Patent itigation', bold: false, division: false },
    { title: '', bold: false, division: true },
    { title: 'Other patent services', bold: false, division: false },
    { title: 'Inovation patents', bold: false, division: false },
    { title: '', bold: false, division: true },
    { title: 'Patent opositions & dispites', bold: true, division: false },
    { title: 'Patent opositions', bold: false, division: false },
    { title: 'Patent itigation', bold: false, division: false },
  ],
  [
    { title: 'Australian patent process', bold: true, division: false },
    { title: 'International-type patent search', bold: false, division: false },
    {
      title: 'PCT internationals patent applications',
      bold: false,
      division: false,
    },
    {
      title: 'National phase patent application',
      bold: false,
      division: false,
    },
    { title: '', bold: false, division: true },
    { title: 'Australian patent process', bold: true, division: false },
    { title: 'International-type patent search', bold: false, division: false },
    {
      title: 'PCT internationals patent applications',
      bold: false,
      division: false,
    },
    {
      title: 'National phase patent application',
      bold: false,
      division: false,
    },
    { title: '', bold: false, division: true },
  ],
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Services({ menuIndex, onChange }) {
  return (
    <div
      className="w-full bg-[#FFFEFD]"
      style={{
        filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15))',
      }}>
      <div className="container max-w-[1440px] mx-auto">
        <Tab.Group
          as="div"
          className="hidden md:flex flex-row justify-center">
          <Tab.List
            as="div"
            className="hidden md:flex flex-col justify-start w-[30%]">
            {Object.keys(sideMenus).map((index) => (
              <Tab
                key={index}
                as="div"
                className={({ selected }) =>
                  classNames(
                    'flex justify-start items-center md:pl-4 lg:pl-20 xl:pl-40 gap-3 h-[67px] border-b border-solid outline-none',
                    selected
                      ? 'bg-[#FFFEF8] border-[#F0E4C3] font-bold text-[#000000]'
                      : 'bg-white border-[#EEEDE9] font-semibold text-[#000000]/50'
                  )
                }>
                <Image
                  src={sideMenus[index].img}
                  size={16}
                  alt=""
                  width={16}
                  height={16}
                />
                <span className="uppercase font-manrope text-sm ">
                  {sideMenus[index].name}
                </span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            as="div"
            className="flex flex-col w-[70%]">
            <Tab.Panel>
              <Tab.Group defaultIndex={1}>
                <Tab.List
                  as="div"
                  className="flex justify-start items-center h-[67px]">
                  <Tab
                    as="div"
                    className="flex justify-center items-center outline-none w-[133px] h-full"
                    style={{
                      background:
                        'linear-gradient(97.07deg, #404266 23.2%, #8083B6 114.87%)',
                    }}>
                    <Image
                      src="/general.svg"
                      width={47}
                      height={47}
                      alt=""
                    />
                  </Tab>
                  <div
                    className={`flex flex-row items-start w-full h-full ${
                      menuIndex == topMenus.length - 1
                        ? 'bg-[#FFFDF7]'
                        : 'bg-[#FAF4E4]'
                    }`}>
                    {topMenus.map((topMenu, index) => (
                      <Tab
                        key={index}
                        as="div"
                        onClick={() => {
                          onChange(index)
                        }}
                        className={`w-1/3 flex flex-row items-center justify-center h-full outline-none cursor-pointer ${
                          menuIndex === index
                            ? 'skew-x-12 bg-[#FFFDF7] border-b-[4px] border-[#7568D1] -ml-4'
                            : 'bg-[#FAF4E4]'
                        } ${index == 0 ? 'skew-x-12 -ml-4 -mr-2' : ''}`}>
                        <div
                          className={`flex flex-row items-center justify-center h-full gap-[10px] p-[10px] ${
                            menuIndex === index ? '-skew-x-12' : ''
                          } ${index == 0 ? '-skew-x-12' : ''}`}>
                          <Image
                            src={topMenu.icon}
                            width={32}
                            height={32}
                            alt=""
                          />
                          <span
                            className={`font-manrope text-sm px-2 ${
                              menuIndex === index
                                ? 'font-bold text-[#272940] '
                                : 'font-medium text-[#272940]/50'
                            }`}>
                            {topMenu.name}
                          </span>
                        </div>
                      </Tab>
                    ))}
                  </div>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel></Tab.Panel>
                  <Tab.Panel>
                    <SubMenuBlock contents={subMenus} />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="flex flex-col md:hidden">
          {sideMenus.map((sideMenu) => (
            <Disclosure key={sideMenu.id}>
              <Disclosure.Button
                className={({ open }) =>
                  classNames(
                    'flex justify-start items-center gap-3 w-full h-[67px] pl-12 border-b border-solid outline-none',
                    open
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
                <span className="uppercase font-manrope font-bold text-xs">
                  {sideMenu.name}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel as="div">
                {sideMenu.id == 1 &&
                  topMenus.map((topMenu) => (
                    <Disclosure
                      key={topMenu.id}
                      as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as="div"
                            className={`flex flex-row justify-between items-center cursor-pointer border-b border-solid border-[#BFBBB2] pl-12 ${
                              open ? 'h-[68px]' : 'h-[60px]'
                            }`}
                            style={{
                              background:
                                topMenu.id == 1
                                  ? 'linear-gradient(93.59deg, #404266 -11.69%, #8083B6 223.51%)'
                                  : '#FAF5EB',
                            }}
                            defaultIndex={1}>
                            <div className="flex flex-row justify-between items-center gap-[10px]">
                              {topMenu.id == 1 ? (
                                <Image
                                  src={topMenu.icon}
                                  width={32}
                                  height={32}
                                  alt=""
                                />
                              ) : (
                                <Image
                                  src={topMenu.icon}
                                  width={16}
                                  height={16}
                                  color={'#5F618C'}
                                  alt=""
                                />
                              )}
                              <span
                                className={`font-manrope font-bold text-xs ${
                                  topMenu.id == 1
                                    ? 'text-[#fff]'
                                    : 'text-[#272940]'
                                }`}>
                                {topMenu.name}
                              </span>
                            </div>
                            {open && (
                              <div className="w-[68px] h-full flex justify-center items-center bg-[#FAF4E4]">
                                <FaCaretDown
                                  width={24}
                                  height={24}
                                  color="#BFBBB2"
                                />
                              </div>
                            )}
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            {topMenu.id == 2 && (
                              <SubMenuBlock contents={subMenus} />
                            )}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  )
}
