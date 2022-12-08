import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function InternationalTradeMarkApplication() {
  return (
    <Layout>
      <Head>
        <title>
          Applying for international trade marks | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="International trade mark applications can be filed by either filing in each country of interest or through the Madrid Protocol."
        />
        <link
          rel="canonical"
          href="/international-trade-mark-application"
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
                href="/trade-marks"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Trade marks
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
                href="/how-to-trade-mark"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                How to trade mark
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
                International trade mark application
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Applying for an international trade mark</h1>
      <p>
        In order to protect your brand in other countries you have two main
        options:
      </p>
      <ol>
        <li>File a trade mark application in each country of interest</li>
        <li>
          File a Madrid Protocol international trade mark application through
          the <Link href="/madrid-system">Madrid System</Link>
        </li>
      </ol>
      <p>
        In order for the filing that you make to retain the original filing date
        of your{' '}
        <Link
          title="Australian Trademarks"
          href="/trade-mark-application">
          Australian trade mark application
        </Link>
        , the filing(s) whether via path 1 or 2 above must be made within 6
        months of the original filing date of your Australian trade mark
        application.
      </p>
      <h2>Madrid Protocol international trade mark application</h2>
      <p>
        A <Link href="/madrid-system">Madrid Protocol</Link> international trade
        mark application is a simpler and less expensive way of seeking trade
        mark protection overseas. Trade mark application through the Madrid
        Protocol offers and presents several advantages, such as:
      </p>
      <ul>
        <li>Only a single international trade mark application is required</li>
        <li>It is in one language</li>
        <li>It is filed through the Trade Marks Office of the home country</li>
        <li>
          Protection can be sought in one, some or all of the member countries
        </li>
        <li>Updates of ownership and renewals can be handled centrally</li>
      </ul>
      <h2>
        Direct trade marks vs. Madrid Protocol international trade mark
        application
      </h2>
      <p>
        There are some circumstances where filing a trade mark application
        directly in countries of interest may be a better option than filing a
        Madrid Protocol international trade mark application. Therefore, it is
        important to obtain the advice of a{' '}
        <Link
          title="Patent Attorneys Sydney &amp; Melbourne"
          href="/trade-mark-attorney">
          trade mark attorney
        </Link>{' '}
        prior to seeking international trade mark protection.
      </p>
      <h2>About to file an international trade mark application?</h2>
      <p>
        If you would like advice on how to protect your brand whether in
        Australia or internationally, please send us a{' '}
        <Link
          title="Talk to an expert about your IP now"
          href="/contact">
          message
        </Link>
        .
      </p>
    </Layout>
  )
}
