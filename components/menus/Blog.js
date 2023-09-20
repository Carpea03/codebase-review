import Image from 'next/image'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'
import Link from 'next/link'
import { sideMenus, subMenus, subMenus1 } from '../../utils/const/blog'
import useContentStore from '../../store/useContent.store'

const panels = [
  {
    title: 'IP FRONT™ - INTELLECTUAL PROPERTY NEWS',
    description:
      'The latest IP news across patents and trade marks law and practice by Baxter IP.',
    data: subMenus,
  },
  {
    title: 'IP INFORMATION & TOOLS',
    description:
      'A collection of IP-related information and tools provided by Baxter IP, Patent & Trade Mark Attorneys.',
    data: subMenus1,
  },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Blog() {

  const menuState5 = useContentStore((state) => state.menuState5)
  const setMenuState5 = useContentStore((state) => state.setMenuState5)

  return (
    <div
      className="w-full bg-[#FFFEFD]"
      style={{
        filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15))',
      }}
    >
      <div className="container max-w-[1440px] mx-auto">
        <Tab.Group
          as="div"
          className="flex flex-col md:flex-row justify-center"
          selectedIndex={menuState5}
          onChange={(index) => {
            setMenuState5(index)
          }}
        >
          <Tab.List
            as="div"
            className="hidden md:flex flex-col justify-start w-[30%]"
          >
            {sideMenus.map((sideMenu, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    'flex flex-row justify-start items-center md:pl-4 lg:pl-20 xl:pl-40 gap-3 w-full h-[67px] border-b border-solid outline-none cursor-pointer',
                    selected
                      ? 'bg-[#FFFEF8] border-[#F0E4C3] font-bold text-[#000000]'
                      : 'bg-white border-[#EEEDE9] font-semibold text-[#000000]/50'
                  )
                }
              >
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
            className="flex flex-col w-full md:w-[70%] pb-12"
          >
            {panels.map((item, index) => (
              <Tab.Panel key={index}>
                <div className="flex flex-col w-full h-full bg-[#FFFDF7] font-manrope font-semibold text-sm">
                  {/* <div className="flex flex-col justify-center items-start w-full h-[134px] gap-[10px] pl-12 border-b md:border-b-2 border-solid border-[#BFBBB2] md:border-[#7568D1]">
                    <span className="text-[#272940]">{item.title}</span>
                    <span className="text-[#272940]/60">
                      {item.description}
                    </span>
                  </div> */}
                  <SubMenuBlock contents={item.data} />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
