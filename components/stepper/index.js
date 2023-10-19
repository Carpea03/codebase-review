import React from 'react'
import { useRouter } from 'next/router'

const Stepper = ({ active }) => {
  const router = useRouter()

  const data = [
    {
      title: 'Stage  1',
      subTitle: 'File a Provisional Patent Application',
      href: '/provisional-patents',
    },
    {
      title: 'Stage  2',
      subTitle: 'International Type Patent Search',
      href: '/international-type-search',
    },
    {
      title: 'Stage  3',
      subTitle: 'PCT International Patent Applications',
      href: '/pct-patent',
    },
    {
      title: 'Stage  4',
      subTitle: 'National Phase Patent Applications',
      href: '/national-phase-patent',
    },
  ]

  const onClick = (href) => {
    router.push(href)
  }

  return (
    <div className="w-full h-[127px] flex flex-row justify-center items-center bg-[#FFF] rounded-md">
      {data.map((item, index) => {
        return (
          <div
            key={`stepper-${index}`}
            className={`w-full h-full flex flex-row justify-center items-center ${
              index + 1 === active
                ? 'bg-stepper-mobile md:bg-stepper-tablet xl:bg-stepper-desktop opacity-100 text-white'
                : ''
            } hover:bg-stepper-mobile hover:md:bg-stepper-tablet hover:xl:bg-stepper-desktop 
            hover:opacity-100 hover:text-[#FFF] opacity-50`}
          >
            <div
              className={`m-0 sm:m-2 md:m-4 lg:m-6 xl:m-8 cursor-pointer p-1 md:p-2 lg:p-3 xl:p-5`}
              onClick={() => onClick(item.href)}
            >
              <div className="text-[12px] md:text-[20px] xl:text-2xl font-manrope font-semibold">
                {item.title}
              </div>
              <div className="text-[10px] md:text-[12px] xl:text-[15px] font-manrope ">
                {item.subTitle}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stepper
