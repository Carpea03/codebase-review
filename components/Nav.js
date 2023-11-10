import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav({ navData }) {
  return (
    <nav className="flex w-full" aria-label="Breadcrumb">
      <ol className="inline-flex md:pt-5 pt-0 mb:pb-6 space-x-1 md:space-x-3 list-none pm-25">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Feather icon/Home">
                <path
                  id="Vector"
                  d="M17.5 16.6669C17.5 16.8879 17.4122 17.0999 17.2559 17.2562C17.0996 17.4124 16.8877 17.5002 16.6667 17.5002H3.33333C3.11232 17.5002 2.90036 17.4124 2.74408 17.2562C2.5878 17.0999 2.5 16.8879 2.5 16.6669V7.90856C2.49991 7.78157 2.52885 7.65624 2.5846 7.54214C2.64035 7.42805 2.72143 7.3282 2.82167 7.25023L9.48833 2.06523C9.63462 1.95143 9.81466 1.88965 10 1.88965C10.1853 1.88965 10.3654 1.95143 10.5117 2.06523L17.1783 7.25023C17.2786 7.3282 17.3597 7.42805 17.4154 7.54214C17.4712 7.65624 17.5001 7.78157 17.5 7.90856V16.6669ZM15.8333 15.8336V8.31523L10 3.77856L4.16667 8.31523V15.8336H15.8333Z"
                  fill="#7A7B94"
                />
              </g>
            </svg>
          </Link>
        </li>
        {navData?.map((item, index) => (
          <li key={`list-${index}`}>
            <div key={`list-${index}`} className="flex items-center ">
              <div className="font-manrope text-[#7A7B94]">/</div>
              <Link href={item?.link}>
                <div
                  className={`ml-1 text-sm font-manrope 'text-[#7A7B94] ${
                    navData?.length - 1 === index
                      ? 'text-gray-900'
                      : 'text-[#7A7B94]'
                  } hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white line-clamp-1`}
                >
                  {item?.title}
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
