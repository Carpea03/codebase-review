import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className="flex flex-row justify-center w-[192px] h-[55px] gap-6">
      <div className="flex flex-col items-center justify-center px-2 py-1">
        <Image src="/logo.svg" width={172} height={41} alt="" />
      </div>
    </div>
  )
}
