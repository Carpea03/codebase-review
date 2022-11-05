import React from 'react'

export default function Container({ children }) {
  return (
    <div className="pt-14 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      {children}
    </div>
  )
}
