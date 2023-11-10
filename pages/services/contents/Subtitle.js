import React from 'react'

export default function Subtitle({ children }) {
  return (
    <span className="font-lora font-medium sm:text-[32px] text-xl md:text-2xl text-[#272940]">
      {children}
    </span>
  )
}
