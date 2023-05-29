import { Disclosure, Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'
import { FaCaretDown } from 'react-icons/fa'
import {
  sideMenus,
  subMenus,
  subMenus1,
  subMenus2,
  subMenus3,
  subMenus4,
} from '../../utils/const/services'
import { topMenus } from '../../utils/const/menus'
import useContentStore from '../../store/useContent.store'
import Link from 'next/link'

const panels = [
  {
    title: 'PATENTING IN YOUR INDUSTRY',
    description:
      'Baxter IP has patent attorneys who have specialist expertise in a variety of industries and technology specialisations.',
    data: subMenus1,
  },
  {
    title: 'OUR PATENT SERVICES',
    description:
      'We explain how to apply for a trade mark in Australia so you can protect your trade mark to secure your brand’s future.',
    data: subMenus2,
  },
  {
    title: 'IP OPPOSITIONS & DISPUTES',
    description:
      'With their extensive expertise in contentious matters, our patent and trade mark attorneys are well-equipped to handle your IP dispute and opposition matters.',
    data: subMenus3,
  },
  {
    title: 'OUR PARTNERS',
    description:
      'The Baxter IP team is trained in capital raising, licensing and government grants and can help connect you with BIP Capital Partners.',
    data: subMenus4,
  },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Services({ menuIndex, onChange }) {
  const setMenuState = useContentStore((state) => state.setMenuState)
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
              <Link
                key={index}
                href={sideMenus[index].href}>
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
              </Link>
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
                          setMenuState(index)
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
                            className={`font-manrope text-l px-2 ${
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
            {panels.map((item, index) => (
              <Tab.Panel key={index}>
                <div className="flex flex-col w-full h-full bg-[#FFFDF7] font-manrope font-semibold text-sm">
                  <div className="flex flex-col justify-center items-start w-full h-[134px] gap-[10px] pl-12 border-b md:border-b-2 border-solid border-[#BFBBB2] md:border-[#7568D1]">
                    <span className="text-[#272940]">{item.title}</span>
                    <span className="text-[#272940]/60">
                      {item.description}
                    </span>
                  </div>
                  <SubMenuBlock contents={item.data} />
                </div>
              </Tab.Panel>
            ))}
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
