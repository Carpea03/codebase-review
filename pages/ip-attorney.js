import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import StaffChris from '../components/staff/chris'
import StaffMartin from '../components/staff/martin'
import StaffQi from '../components/staff/qi'
import StaffWarren from '../components/staff/warren'
import StaffSean from '../components/staff/sean'
import StaffNaleesha from '../components/staff/naleesha'
import StaffJarrod from '../components/staff/jarrod'
import StaffJulia from '../components/staff/julia'
import StaffAndrew from '../components/staff/andrew'
import StaffJoanne from '../components/staff/joanne'
import StaffWillem from '../components/staff/willem'
import StaffRichard from '../components/staff/richard'

export default function IpAttorney() {
  return (
    <Layout>
      <Head>
        <title>
          Patent and trade mark attorneys in Sydney & Melbourne | Baxter IP
        </title>
        <meta
          name="description"
          content="The patent and trade mark attorneys at Baxter IP in Sydney or Melbourne can help secure your intellectual property. You will be matched with the IP attorney best suited to your needs."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/ip-attorney" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%A3%E7%90%86%E4%BA%BA"
          hrefLang="zh"
        />
      </Head>
      <nav className="flex overflow-x-auto not-format" aria-label="Breadcrumb">
        <ol className="inline-flex items-center mt-4 mb-4 space-x-1 md:space-x-3 list-none pm-25 whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Our patent & trade mark attorneys
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>
        Our patent & trade mark attorney teams in Sydney & Melbourne are poised
        to protect what&rsquo;s yours
      </h1>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 not-format">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <StaffChris />
          <StaffMartin />
          <StaffQi />
          <StaffWarren />
          <StaffSean />
          <StaffNaleesha />
          <StaffJarrod />
          <StaffJulia />
          <StaffAndrew />
          <StaffJoanne />
          <StaffWillem />
          <StaffRichard />
        </div>
      </div>
    </Layout>
  )
}
