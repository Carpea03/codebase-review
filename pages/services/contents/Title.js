import React from 'react'

export default function Title({ children }) {
  return (
    <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl text-[#272940]">
      {children}
    </span>
  )
}
