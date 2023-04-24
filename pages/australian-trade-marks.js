import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

export default function AustralianTradeMarks() {
  return (
    <Layout>
      <Head>
        <title>
          Australian Trade Marks | Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="An Australian trade mark application can ensure that your trade mark in Australia is enforced."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/australian-trade-marks"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-trade-marks"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%95%86%E6%A0%87%E6%B3%A8%E5%86%8C%E7%94%B3%E8%AF%B7"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/trade-mark-application"
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
                Trade Marks in Australia
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Australian Trade Marks</h1>

      <h2 id="filing-requirements">Minimum filing requirements</h2>

      <p>
        In registering a trade mark in Australia, the following requirements
        must be provided in the application:
      </p>

      <ul>
        <li>
          Details of the Australian trade mark and the International trade mark
          class(and relevant goods and/or services) in respect of which the mark
          is to be registered;
        </li>
        <li>
          A high quality hard copy/electronic copy of the mark if it includes a
          graphic or stylised element (preferably an electronic copy in
          &lsquo;jpeg&rsquo; format);
        </li>
        <li>Name, nationality and address of the applicant; and</li>
        <li>
          Convention details if relevant (application number, trade mark and
          filing date). Copies of priority documents are not usually required by
          the Trade Marks Office; if they are, they are due prior to acceptance,
          and a verified English translation will be required.
        </li>
      </ul>

      <h2>Examination</h2>

      <p>
        Australian trade marks will be examined before registration on a number
        of grounds, including that the mark:
      </p>

      <ul>
        <li>
          Must be able to distinguish one trader&apos;s goods or services from
          another&apos;s;
        </li>
        <li>Must not be likely to deceive or cause confusion; and</li>
        <li>
          Must not be substantially identical or deceptively similar to a prior
          mark for similar goods or closely related services.
        </li>
      </ul>

      <h2>Renewal</h2>

      <p>
        The initial trade mark registration is valid for 10 years from the
        filing date. The registration can be renewed within 12 months before or
        after its expiry date. The registration of a trade mark in Australia can
        be renewed indefinitely. If your trade mark has not been used by you or
        on your behalf, for a period of 3 years, an application for removal from
        the Trade Marks Register can be made by another party.
      </p>
    </Layout>
  )
}
