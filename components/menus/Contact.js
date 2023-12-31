import Image from 'next/image'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react'
import SubMenuBlock from '../templates/SubMenuBlock'
import Link from 'next/link'
import {
  sideMenusContact,
  subMenusContact,
  subMenusJoinUs,
} from '../../utils/const/menus'

const panels = [
  {
    title: 'OUR PATENT & TRADE MARK ATTORNEY OFFICES',
    description:
      'Between 2007 and 2019, Baxter IP established a team of industry specialist IP attorneys with offices in Sydney, Melbourne, and Brisbane.',
    data: subMenusContact,
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
      }}
    >
      <div className="bg-[#FFFEF8] md:bg-gradient-to-r from-[#FBF8F1] to-[#FFFEF8]">
        <div className="container max-w-[1440px] mx-auto">
          <Tab.Group
            as="div"
            className="flex flex-col md:flex-row justify-center"
          >
            <Tab.List
              as="div"
              className="hidden md:flex flex-col justify-start w-[30%] bg-[#FBF8F1]"
            >
              {sideMenusContact.map((sideMenu, i) => (
                <Link key={i} href={sideMenu.href}>
                  <Tab
                    key={i}
                    className={({ selected }) =>
                      classNames(
                        'flex flex-row justify-start items-center md:pl-4 lg:pl-20 xl:pl-40 gap-3 w-full h-[67px] border-b border-solid outline-none',
                        selected
                          ? 'bg-[#FFFEF8] border-[#F0E4C3] font-bold text-[#000000]'
                          : 'bg-[#FBF8F1] border-[#EEEDE9] font-semibold text-[#000000]/50'
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
                    <span className="uppercase font-manrope text-sm cursor-pointer">
                      {sideMenu.name}
                    </span>
                  </Tab>
                </Link>
              ))}
            </Tab.List>
            <Tab.Panels as="div" className="flex w-[70%] bg-[#FFFEF8]">
              {panels.map((item, index) => (
                <Tab.Panel key={index}>
                  <div className="flex flex-col w-full h-full bg-[#FFFDF7] font-manrope font-semibold text-sm">
                    <SubMenuBlock contents={item.data} />
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}
