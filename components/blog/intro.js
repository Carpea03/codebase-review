import Link from 'next/link'
import { CMS_NAME, CMS_URL } from '../../lib/constants'

export default function Intro() {
  return (
    <section className="flex justify-center flex items-center mb-16 md:mb-12">
      <h1 className=" text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        IP Front™ – IP News
      </h1>
    </section>
  )
}
