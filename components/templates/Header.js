import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../Logo'
import { FiMenu } from 'react-icons/fi'
import { MdArrowDropDown } from 'react-icons/md'
import { Search } from 'react-feather'
import { Listbox, Popover, Disclosure, Transition } from '@headlessui/react'
import Services from '../menus/Services'
import Blog from '../menus/Blog'
import People from '../menus/People'
import Contact from '../menus/Contact'
import Link from 'next/link'

const menus = [
  { id: 1, name: 'Services' },
  { id: 2, name: 'Blog' },
  { id: 3, name: 'People' },
  { id: 4, name: 'Contact' },
]

const langList = [
  { id: 1, name: 'EN', url: '/countries/us.svg', unavailable: false },
  { id: 2, name: 'FR', url: '/countries/fr.png', unavailable: false },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ topMenuIndex, onTopMenuChange, active }) {
  return (
    <div className="sticky top-0 relative w-full md:border-b border-[#EAE7DD] bg-[#FFFEFD] z-30 ">
      <div className="container hidden md:flex mx-auto justify-center items-center h-[84px] xl:px-32 2xl:px-40">
        <div className="flex justify-between w-full md:gap-8">
          <div className="flex justify-between items-center gap-16 2xl:gap-[70px]">
            <Link href="/">
              <Logo />
            </Link>
            <div className="flex felx-row items-start gap-9 2xl:gap-12">
              {menus.map((menu) => (
                <Popover key={menu.id}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          'font-manrope text-sm leading-5 outline-none',
                          open
                            ? 'font-bold text-[#272940]'
                            : 'font-medium text-[#7A7B94]'
                        )}
                      >
                        {active === menu.name ? (
                          <span className="font-bold text-[#272940]">
                            {menu.name}
                          </span>
                        ) : (
                          menu.name
                        )}
                      </Popover.Button>
                      <Transition
                        show={open}
                        enter="transition ease duration-500 transform"
                        enterFrom="opacity-0 -translate-y-84"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-84"
                        className="absolute top-[84px] left-0 right-0 mx-auto w-full"
                      >
                        <Popover.Panel
                          as="div"
                          // className="absolute top-[85px] left-0 right-0 mx-auto w-full"
                        >
                          {menu.id == 1 && (
                            <Services
                              menuIndex={topMenuIndex - 1}
                              onChange={(index) => onTopMenuChange(index)}
                            />
                          )}
                          {menu.id == 2 && <Blog />}
                          {menu.id == 3 && <People />}
                          {menu.id == 4 && <Contact />}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}
            </div>
          </div>
          <form action="">
            <input
              type="search"
              placeholder="Search here..."
              class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
            />
            <div className="absolute top-4 p-3 flex justify-start item-center">
              <Search color="#404266" size={24} />
            </div>
          </form>
        </div>
      </div>
      <div className="container flex flex-row justify-between items-center mx-auto p-5 md:hidden">
        <form action="">
          <input
            type="search"
            placeholder="Search here..."
            class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
          />
          <div className="absolute top-6 p-3 flex justify-start item-center">
            <Search color="#404266" size={24} />
          </div>
        </form>
        <Logo />
        <Popover as="div">
          <Popover.Button className="outline-none">
            <FiMenu size={24} className="cursor-pointer" />
          </Popover.Button>

          <Popover.Panel className="absolute left-0 right-0 bottom-0 top-[75px] mx-auto flex flex-col justify-start items-start w-full z-20">
            {menus.map((menu) => (
              <Disclosure key={menu.id} as="div" className="w-full">
                <Disclosure.Button
                  as="div"
                  className={({ open }) =>
                    classNames(
                      'flex justify-start w-full cursor-pointer bg-white',
                      open
                        ? 'border-b border-solid box-border border-[#7568D1]'
                        : ''
                    )
                  }
                  style={{
                    boxShadow: '0px 5px 10px rgba(64, 76, 89, 0.05)',
                  }}
                >
                  <span className="font-manrope font-medium text-sm text-[#7A7B94] pl-12 py-4">
                    {menu.name}
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel>
                  {menu.id == 1 && (
                    <Services
                      menuIndex={topMenuIndex}
                      onChange={(index) => onTopMenuChange(index)}
                    />
                  )}
                  {menu.id == 2 && <Blog />}
                  {menu.id == 3 && <People />}
                  {menu.id == 4 && <Contact />}
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  )
}
