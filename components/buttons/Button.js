import React from 'react'

const Button = ({ className = 'w-full', children, title, onClick }) => {
  return (
    <div
      className={`button-base flex flex-row items-center justify-center md:py-4 xl:py-6 gap-6 cursor-pointer transition duration-150 ease-in-out hover:opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
      <span className="font-manrope font-semibold text-xs sm:text-2xl text-white no-underline">
        {title}
      </span>
    </div>
  )
}

export default Button
