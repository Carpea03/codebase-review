import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
  return `https://bip-cms-sanity.vercel.app/images/team/${src}?w=${width}&q=${
    quality || 75
  }`
}

export default function StaffAndrew() {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <Image
        loader={myLoader}
        src="andrew-balis-210x210.jpeg"
        alt="Photo of Andrew Balis, Patent & Trade Mark Attorney, Sydney."
        width={200}
        height={200}
        className="mx-auto mb-4 w-36 h-36 rounded-full"
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href="sydney/andrew-balis">
          <a>Andrew Balis</a>
        </Link>
      </h3>
      <p>Associate, Patent & Trade Mark Attorney</p>
      <ul className="flex justify-center mt-4 space-x-4">
        <li>
          <svg
            className="w-6 h-6 justify-center"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </li>
        <li>Sydney</li>
      </ul>
    </div>
  )
}
