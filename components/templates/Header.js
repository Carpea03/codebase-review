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
import { Container } from './Container'

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

export default function Header({ topMenuIndex, onTopMenuChange }) {
  const [selectedLanguage, setSelectedLanguage] = useState(langList[0])

  return (
    <div className="relative w-full md:border-b border-[#EAE7DD] bg-[#FFFEFD] z-30">
      <div className="container hidden md:flex mx-auto justify-center items-center h-[84px] xl:px-32 2xl:px-40">
        <div className="flex justify-between w-full md:gap-8">
          <div className="flex justify-between items-center gap-16 2xl:gap-[70px]">
            <Logo />
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
                        )}>
                        {menu.name}
                      </Popover.Button>
                      <Transition
                        show={open}
                        enter="transition ease duration-500 transform"
                        enterFrom="opacity-0 -translate-y-84"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease duration-300 transform"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-84"
                        className="absolute top-[84px] left-0 right-0 mx-auto w-full">
                        <Popover.Panel
                          as="div"
                          // className="absolute top-[85px] left-0 right-0 mx-auto w-full"
                        >
                          {menu.id == 1 && (
                            <Services
                              menuIndex={topMenuIndex}
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
          <div className="flex justify-between items-center gap-16 2xl:gap-[70px]">
            <div className="flex items-center w-full h-14 pl-6 rounded-sm border-solid border-[1px] border-[#F1F2F8] overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <Search
                  color="#404266"
                  size={24}
                />
              </div>
              <input
                className="h-full w-full outline-none text-sm text-[#7A7B94] pl-2 focus:outline-none border-none"
                type="text"
                id="search"
                placeholder="Search..."
              />
            </div>
            <div className="flex flex-row justify-start items-center h-11 w-full">
              <Listbox
                value={selectedLanguage}
                onChange={setSelectedLanguage}>
                <Listbox.Button className="flex flex-row justify-start items-center gap-3">
                  <p className="font-manrope text-xs font-normal text-[#404246]">
                    {selectedLanguage.name}
                  </p>
                  <Image
                    alt=""
                    src={selectedLanguage.url}
                    width={24}
                    height={24}
                  />
                  <MdArrowDropDown
                    size={16}
                    color="black"
                  />
                </Listbox.Button>
                {/* <Listbox.Options>
                  {langList.map((lang) => (
                    <Listbox.Option
                      key={lang.id}
                      value={lang}
                      disabled={lang.unavailable}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <li
                          className={`${
                            active
                              ? "bg-blue-500 text-white"
                              : "bg-white text-black"
                          }`}
                        >
                          {selected && (
                            <FiCheck
                              className="hidden ui-selected:block"
                              sizes={5}
                            />
                          )}
                          {lang.name}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options> */}
              </Listbox>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-row justify-between items-center mx-auto p-5 md:hidden">
        <Search size={24} />
        <Logo />
        <Popover as="div">
          <Popover.Button className="outline-none">
            <FiMenu
              size={24}
              className="cursor-pointer"
            />
          </Popover.Button>

          <Popover.Panel className="absolute left-0 right-0 bottom-0 top-[67px] mx-auto flex flex-col justify-start items-start w-full z-20">
            {menus.map((menu) => (
              <Disclosure
                key={menu.id}
                as="div"
                className="w-full">
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
                  }}>
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
