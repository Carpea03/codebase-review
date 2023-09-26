import Link from 'next/link'
import React, { useState } from 'react'

export default function SubMenuBlock({ contents }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 w-full h-[350px] sm:h-[350px] md:h-[350px] lg:h-[500px] xl:h-[500px] 2xl:h-full  py-5 px-10  md:overflow-y-scroll lg:overflow-y-scroll xl:overflow-y-scroll 2xl:overflow-hidden ">
        {contents.map((content, i) => {
          return (
            <div key={i} className="flex flex-col xl:w-[300px]">
              <div key={i} className="flex flex-col w-[280px] gap-1">
                {content.length > 0 &&
                  content.map((c, k) => {
                    return (
                      <div key={k}>
                        {c.division && <p key={k} className="h-4" />}
                        {!c.division && (
                          <span
                            key={k}
                            className={`font-manrope font-semibold text-sm ${
                              c.href ? 'cursor-pointer' : ''
                            } hover:text-black ${
                              c.bold
                                ? 'text-[#272940]'
                                : 'text-[#272940]/60 py-[5px]'
                            }`}
                          >
                            {c.href ? (
                              <Link
                                isFallback={true}
                                href={{
                                  pathname: c.href,
                                }}
                              >
                                {c.title}
                              </Link>
                            ) : (
                              c.title
                            )}
                          </span>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
