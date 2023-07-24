import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function ConventionPatentAustralia() {
  return (
    <Layout>
      <Head>
        <title>
          Convention Patent Australia | Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="Australian patents can be filed within 12 months of a foreign patent application, filed in a member of the Paris convention, and benefit from the foreign filing date."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/convention-patent-australia"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/convention-patent-australia"
          hrefLang="en-us"
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
          <li>
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
              <Link
                href="/global/australian-patents"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Convention Patent Australia
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Convention Applications</h1>
      <p>
        By virtue of the Paris convention, if an Australian patent application
        is filed within 12 months of a patent application filed in a foreign
        country that is a member of the Paris convention, it will benefit from
        the filing date of that foreign patent application.
      </p>

      <h2>Minimum Australian patent filing requirements:</h2>

      <ul>
        <li>
          A copy of the patent specification, claims, drawings (if applicable),
          abstract and title
        </li>
        <li>
          If the patent specification is not in English, a verified English
          translation will be required
        </li>
        <li>Name and address of the patent applicant</li>
        <li>Inventor name</li>
        <li>
          Details of basic patent application if convention priority is to be
          claimed (patent application number, country, patent filing date)
        </li>
      </ul>

      <h2>
        IP Australia may also request to complete patent registration in
        Australia:
      </h2>

      <ul>
        <li>
          Certified copy of the basic patent application must be filed before
          acceptance
        </li>
        <li>
          Verified English translation of the basic patent application if
          requested by IP Australia
        </li>
        <li>
          Notice of Entitlement (can be prepared and signed by an Australian
          Patent Attorney)
        </li>
      </ul>

      <h2>
        Not required under Australian patent law for Australian patent
        applications:
      </h2>

      <ul>
        <li>Power of Attorney</li>
        <li>Declarations signed by the inventor(s)</li>
        <li>
          Any other form that needs to be executed by the patent applicant or
          inventor
        </li>
      </ul>
    </Layout>
  )
}
