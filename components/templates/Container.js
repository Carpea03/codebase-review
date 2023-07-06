import React from 'react'
import { MdAdsClick } from 'react-icons/md'

export const Container = ({ className, children }) => {
  return (
      <div className={`relative w-full ${className}`}>{children}</div>
  )
}
