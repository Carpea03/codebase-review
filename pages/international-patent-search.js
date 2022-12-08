import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function InternationalPatentSearch() {
  return (
    <Layout>
      <Head>
        <title>
          International patent search | Patent novelty search | Baxter IP
        </title>
        <meta
          name="description"
          content="An international patent search is normally a form of novelty search conducted to ensure that your IP is novel in light of the international prior art."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/international-patent-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%85%A8%E7%90%83%E4%B8%93%E5%88%A9%E6%96%B0%E9%A2%96%E6%90%9C%E7%B4%A2"
          hreflang="zh"
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
                href="/services"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Services
              </Link>
            </div>
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
                href="/patents"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Patents
              </Link>
            </div>
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
                href="/how-to-patent"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                How to patent
              </Link>
            </div>
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
                href="/patent-search"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Patent search
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
                International patent search
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>International patent search</h1>
      <p>
        Conducting a international patent search of prior art patents is
        valuable since it provides you with an indication of whether a patent
        application for your invention will be allowed.
      </p>
      <p>
        In order to be patentable, an invention must be (1) new (novel); and (2)
        inventive. Although patent law varies from country to country, novelty
        and inventiveness of patent applications are at least usually assessed
        against any document published worldwide before the priority date of the
        patent application. Consequently, no international patent search will
        ever be thoroughly exhaustive as it is impossible to, with complete
        accuracy, search every document ever published worldwide. However,
        patent novelty searches are useful in indicating the state of the prior
        art and locating prior art that is likely to be raised during
        examination.
      </p>
      <p>
        It is important to note that it is not possible to search any patent
        application that is filed less than 18 months prior because patent
        applications are only published at 18 months after their international
        priority date. This means that the results of a patent novelty search
        will likely miss relevant prior art if conducted within 18 months from
        when the patent application was first filed.
      </p>
      <p>
        There are multiple options for international patent novelty searches,
        including:
      </p>
      <ol>
        <li>
          Pre-filing patent searches (i.e. patent searches carried out before a
          patent application is filed)
        </li>
        <li>
          <Link
            title="International-Type Patent Search"
            href="/international-type-search">
            International-type patent searches
          </Link>{' '}
          (based on a filed provisional patent application)
        </li>
      </ol>
      <p>
        Our <Link href="/patent-attorney">patent attorneys</Link> and patent
        searchers can carry out either or both of these types of novelty
        searches, as well as other international patent searches for you to help
        you de-risk your intellectual property protection efforts.
      </p>
    </Layout>
  )
}
