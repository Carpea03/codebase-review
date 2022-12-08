import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function PctNationalPhaseAustralia() {
  return (
    <Layout>
      <Head>
        <title>
          PCT National Phase Australia | Baxter IP, Patent & Trade Mark
          Attorneys
        </title>
        <meta
          name="description"
          content="A PCT National phase Australian patent has a national phase entry filing deadline of 31 months after the priority date of the PCT application."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/pct-national-phase-australia"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/pct-national-phase-australia"
          hreflang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%9B%BD%E5%AE%B6%E4%B8%93%E5%88%A9"
          hreflang="zh"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.baxterip.com.au/national-phase-patent"
        />
      </Head>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <Link
                href="/global/australian-patents"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Patents in Australia
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                PCT National Phase Australia
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>PCT National Phase Australia</h1>
      <p>
        Australia is a member of the Patent Cooperation Treaty (PCT). The
        deadline for entry into the PCT national phase in Australia is 31 months
        after the priority date of the PCT application.
      </p>

      <h2>Minimum filing requirements for national phase patent:</h2>

      <ul>
        <li>PCT patent application publication number</li>
        <li>
          If the PCT patent application is in a language other than English, an
          English copy of the application, certified by its translator as a true
          and complete translation
        </li>
      </ul>

      <h2>
        IP Australia may also request to complete the Australian national phase
        entry:
      </h2>

      <ul>
        <li>Verified English translation of the basic patent application</li>
        <li>
          Notice of Entitlement (this can be prepared and signed by an
          Australian Patent Attorney)
        </li>
        <li>
          A copy of PCT Article 19 and PCT Article 34 amendments if not
          published during the international phase
        </li>
        <li>
          A copy of the International Preliminary Examination Report if not
          published during the international phase
        </li>
      </ul>

      <h2>
        Not required under Australian patent law for PCT Australian national
        phase entry:
      </h2>

      <ul>
        <li>Power of Attorney</li>
        <li>Declarations signed by the inventor(s)</li>
        <li>
          Any other form that needs to be executed by the applicant or inventor
        </li>
      </ul>
    </Layout>
  )
}
