import React from 'react'
import { MdAdsClick } from 'react-icons/md'

export const InnerContainer = ({ children }) => {
  return (
    <div
      className={`container max-w-screen-2xl mx-auto h-full  overflow-hidden`}
    >
      {children}
    </div>
  )
}
