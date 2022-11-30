import React from 'react'
import Link from 'next/link'
import { CMS_NAME, CMS_URL } from '../../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        IP Front™ – IP News
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <Link
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors">
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors">
          {CMS_NAME}
        </Link>
        .
      </h4>
    </section>
  )
}
