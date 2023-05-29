import React from 'react'
import { MdAdsClick } from 'react-icons/md'

export const Container = ({ className, children }) => {
  return (
    <div className="container- max-w-screen-2xl- w-full mx-auto h-full bg-[#FFFEF8] overflow-hidden">
      <div className={`relative w-full ${className}`}>{children}</div>
    </div>
  )
}
