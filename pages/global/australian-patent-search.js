import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function AustralianPatentSearch() {
  return (
    <Layout>
      <Head>
        <title>Australian patent search | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Australian patent search often takes the form of freedom-to operate search to see whether a company has freedom-to-operate in Australia."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/australian-patent-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-patent-search"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/australian-patent-search"
        />
      </Head>
      <nav
        className="flex"
        aria-label="Breadcrumb">
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
                Australian patent search
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Australian patent search</h1>
      <p>
        Compared with many other countries, a patent search in Australia is
        relatively straightforward because IP Australia offers a sophisticated
        patent database and patent search system to the general public &ndash;
        called AusPat. AusPat covers Australian patent records right back to
        1904.
      </p>

      <p>
        Australian patent searches can be carried out by patent number,
        applicant name, inventor name and many other more sophisticated
        methodologies. Generally speaking, if you need to find a patent or
        patent application on the basis of a name, it is best to have an
        Australian patent attorney carry out your Australian patent search
        because a few strategies need to be applied to identify the right entity
        and not miss relevant search results.
      </p>

      <p>
        If you are trying to determine whether your new idea is patentable in
        Australia, ironically, an Australian patent search is probably not going
        to give you the correct answer. The reason for this is that for a new
        idea to be patentable, it must be novel in light of all published
        documents worldwide, and not just in Australia.
      </p>
    </Layout>
  )
}
