import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { set } from 'date-fns'

const Stepper = ({ active, stepperData }) => {
  const router = useRouter()
  const [data, setData] = useState()

  const patents = [
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

  const tradeMarks = [
    {
      title: 'Stage  1',
      subTitle: 'Filing',
      href: '/trade-mark-application',
    },
    {
      title: 'Stage  2',
      subTitle: 'Examination',
      href: '/trade-mark-examination',
    },
    {
      title: 'Stage  3',
      subTitle: 'Acceptance',
      href: '/trade-mark-acceptance',
    },
    {
      title: 'Stage  4',
      subTitle: 'Publication',
      href: '/publication-of-trade-mark-details',
    },
    {
      title: 'Stage  5',
      subTitle: 'Renewal',
      href: '/trade-mark-renewal',
    },
  ]

  useEffect(() => {
    if (stepperData) {
      setData(tradeMarks)
      return
    }
    setData(patents)
  }, [])

  const onClick = (href) => {
    router.push(href)
  }

  return (
    <div className="z-50 w-full h-[100px] sm:h-[127px] flex flex-row justify-center items-center bg-[#FFF] rounded-md">
      {data?.map((item, index) => {
        return (
          <div
            key={`stepper-${index}`}
            className={`w-full h-full flex flex-row justify-center items-center ${
              index + 1 === active
                ? 'bg-stepper-mobile sm:bg-stepper-tablet md:bg-stepper-tablet lg:bg-stepper-desktop opacity-100 text-white'
                : ''
            } hover:bg-stepper-mobile hover:sm:bg-stepper-tablet hover:md:bg-stepper-tablet hover:lg:bg-stepper-desktop 
            hover:opacity-100 hover:text-[#FFF] opacity-50`}
          >
            <div
              className={`ml-4 sm:m-2 md:m-4 lg:m-6 xl:m-8 cursor-pointer sm:p-10 md:p-10 lg:p-3 xl:p-5`}
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
