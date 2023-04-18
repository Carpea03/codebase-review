import { Transition, Listbox } from "@headlessui/react";
import Image from "next/image";
import React, { useState, useEffect, Fragment } from "react";
import { MdArrowDropDown } from "react-icons/md";

const topMenus = [
  {
    id: 1,
    name: "Coperator / SME",
    icon: "/menus/services/topMenus/people-top-card.svg",
    href: "",
  },
  {
    id: 2,
    name: "Founded Startups",
    icon: "/menus/services/topMenus/school.svg",
    href: "",
  },
  {
    id: 3,
    name: "Entrepreneur",
    icon: "/menus/services/topMenus/home.svg",
    href: "",
  },
  {
    id: 4,
    name: "Foriegn Associates",
    icon: "/menus/services/topMenus/peoples-two.svg",
    href: "",
  },
];

export default function TopMenu({ menuIndex, onChange }) {
  // const [menuIndex, onChange] = useState(menuIndex);

  // useEffect(() => {
  //   console.log("top menu: " + menuIndex);
  //   onChange(menuIndex);
  // }, [menuIndex]);

  return (
    <div
      className="sticky top-0 container max-w-screen-2xl mx-auto h-full bg-[#FFFEF8] z-50"
      style={{
        filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15))",
      }}
    >
      <div
        className={`w-auto h-[60px] sm:h-[134px] md:h-32 flex flex-row items-start justify-center ${
          menuIndex === topMenus.length - 1 ? "bg-[#FFFDF7] " : "bg-[#FAF4E4]"
        }`}
      >
        <div
          className="w-3/12 h-full flex flex-row items-center justify-end pr-4 sm:pr-20 cursor-pointer md:-ml-[26px]"
          style={{
            background:
              "linear-gradient(97.07deg, #404266 23.2%, #8083B6 114.87%)",
          }}
        >
          <Image
            className="w-8 h-8 sm:w-20 sm:h-20"
            src="/general.svg"
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div className="hidden md:flex flex-row items-start h-full w-9/12">
          {topMenus.map((topMenu, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row items-center h-full cursor-pointer ${
                  index === topMenus.length - 1
                    ? "w-4/12 justify-start px-4"
                    : "w-3/12 justify-center"
                } ${
                  menuIndex === index
                    ? "skew-x-12 bg-[#FFFDF7] border-b-[10px] border-[#7568D1] -ml-4"
                    : "bg-[#FAF4E4]"
                } ${index == 0 ? "skew-x-12 -ml-4 -mr-4" : ""}`}
                onClick={() => {
                  onChange(index);
                }}
              >
                <div
                  className={`flex flex-row items-center justify-center h-full gap-[10px] p-[10px] ${
                    menuIndex === index ? "-skew-x-12" : ""
                  } ${index == 0 ? "-skew-x-12" : ""}`}
                >
                  <Image src={topMenu.icon} width={32} height={32} alt="" />
                  <span
                    className={`font-manrope text-base px-2 ${
                      menuIndex === index
                        ? "font-bold text-[#272940]"
                        : "font-medium text-[#272940]/50"
                    }`}
                  >
                    {topMenu.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Listbox
          as="div"
          className="md:hidden w-9/12 h-full"
          value={topMenus[menuIndex]}
          onChange={(value) => {
            onChange(value.id - 1);
          }}
        >
          <Listbox.Button className="flex flex-row items-center bg-[#FDFBF5] w-full h-full cursor-pointer">
            <div className="flex flex-row items-center pl-[24px] sm:pl-[54px] h-full w-full">
              <div className="flex flex-row items-center justify-center gap-[10px] sm:gap-6">
                <Image
                  src={topMenus[menuIndex].icon}
                  width={32}
                  height={32}
                  className="w-4 h-4 sm:w-8 sm:h-8"
                  alt=""
                />
                <span className="font-manrope text-xs sm:text-base font-bold text-[#272940]">
                  {topMenus[menuIndex].name}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-6 w-[60px] sm:w-[134px] h-full bg-[#FAF4E4]">
              <MdArrowDropDown
                className="w-4 h-4 sm:w-9 sm:h-9"
                size={36}
                color="#BFBBB2"
              />
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-700"
            enterFrom="transform opacity-0 scale-70"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-700"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-70"
          >
            <Listbox.Options
              as="div"
              className="absolute z-10 flex flex-col items-start justify-center gap-8 py-8 bg-[#FDFBF5]"
              style={{
                width: "-webkit-fill-available",
              }}
            >
              {topMenus.map((topMenu, index) => (
                <Listbox.Option key={index} as="div" value={topMenu}>
                  <div className="flex flex-row items-center pl-[24px] sm:pl-[54px] h-full w-full cursor-pointer">
                    <div className="flex flex-row items-center justify-center gap-6">
                      <Image
                        src={topMenu.icon}
                        className="w-4 h-4 sm:w-8 sm:h-8"
                        width={32}
                        height={32}
                        alt=""
                      />
                      <span className="font-manrope text-xs sm:text-base font-semibold text-[#272940]">
                        {topMenu.name}
                      </span>
                    </div>
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
}
