import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { profiles, awards } from '../../utils/const/people'
import Link from 'next/link'

const AttorneysCard = ({ peoples, awards }) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension())

  function getCurrentDimension() {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }

    window.addEventListener('resize', updateDimension)

    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [screenSize])

  return (
    <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 md:gap-4 mb-10">
      {peoples?.map((teamMember, index) => (
        <div
          key={index}
          className="bg-white rounded-sm cursor-pointer"
          style={{
            boxShadow:
              '0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 7.01207px 14.2746px rgba(150, 151, 169, 0.085), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(150, 151, 169, 0.0477948)',
          }}
        >
          <Link href={teamMember.link} className='no-underline'>
            <Image
              alt=""
              style={{ width:"100%", marginTop:0, objectFit:"cover"}}
              src={teamMember?.url}
              sizes="100vw"
              width={0}
              height={0}
            />
            <div className="flex flex-col pl-4 pb-4 pr-4 sm:p-4 md:p-8 mt-[-20px]">
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-full md:w-[50%]">
                  <span className="font-manrope font-medium text-base sm:text-xl md:text-[20px] text-[#404266] pb-2 sm:pb-4">
                    {teamMember?.name}
                  </span>
                  <div className="flex flex-col w-full">
                    {teamMember?.positions?.map((position, index) => (
                      <span
                        key={index}
                        className="font-lora italic font-medium text-base sm:text-base md:text-[16px] text-[#7A7B94] sm:w-full md:w-[200px]"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`${
                    teamMember?.awards.length !== 0
                      ? 'flex justify-end w-full'
                      : 'hidden'
                  }`}
                >
                  <div className="flex-col">
                    {teamMember?.awards?.map((award, index) => (
                      <>
                        <div className={`mb-10 mt-[-30px]`}>
                          <Image
                            key={index}
                            src={`/professionalProfiles/awards/${
                              awards?.filter((value) => value.id == award)[0]
                                ?.title
                            }.png`}
                            width={
                              screenSize.width <= 768
                                ? awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.width
                                : awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.width
                            }
                            height={100}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AttorneysCard
