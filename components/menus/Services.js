import { Disclosure, Tab } from '@headlessui/react'
import Image from 'next/image'
import React, { useState } from 'react'
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

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const menusData = {
  0: subMenus,
  1: subMenus1,
  2: subMenus2,
  3: subMenus3,
}

export default function Services({ menuIndex, onChange }) {

  const menuState = useContentStore((state) => state.menuState2)
  const setMenuState = useContentStore((state) => state.setMenuState2)

  return (
    <div
      className="w-full bg-[#FFFEFD]"
      style={{
        filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15))',
      }}
    >
      <div className="container max-w-[1440px] mx-auto">
        <Tab.Group as="div" className="hidden md:flex flex-row justify-center"
          selectedIndex={menuState}
          onChange={(index) => {
            setMenuState(index)
          }}
        >
          <Tab.List
            as="div"
            className="hidden md:flex flex-col justify-start w-[30%]"
          >
            {sideMenus.map((item, index) => (
                <Tab
                  key={index}
                  as="div"
                  className={({ selected }) =>
                    classNames(
                      'flex justify-start items-center hover:text-black md:pl-4 lg:pl-20 xl:pl-40 gap-3 h-[67px] border-b border-solid outline-none',
                      selected
                        ? 'bg-[#FFFEF8] border-[#F0E4C3] font-bold text-[#000000]'
                        : 'bg-white border-[#EEEDE9] font-semibold text-[#000000]/50'
                    )
                  }
                >
                  <Image
                    src={item.img}
                    size={16}
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span className="uppercase font-manrope text-sm ">
                    {item.name}
                  </span>
                </Tab>
            ))}
          </Tab.List>
          <Tab.Panels as="div" className="flex flex-col xl:flex-row w-[70%]">
            {sideMenus.map((item, index) => (
              <Tab.Panel key={index}>
                <SubMenuBlock contents={menusData[index]} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className="flex flex-col md:hidden">
          {sideMenus.map((sideMenu, index) => (
            <Disclosure key={sideMenu.id}>
              <Disclosure.Button
                className={({ open }) =>
                  classNames(
                    'flex justify-start hover:text-black items-center gap-3 w-full h-[67px] pl-12 border-b border-solid outline-none',
                    open
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
                <span className="uppercase font-manrope font-bold text-xs">
                  {sideMenu.name}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="flex overflow-scroll">
                <SubMenuBlock contents={menusData[index]} />
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  )
}
