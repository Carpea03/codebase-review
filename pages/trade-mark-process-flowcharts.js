import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function TradeMarkProcessFlowcharts() {
  return (
    <Layout>
      <Head>
        <title>
          Trade mark process flowcharts | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Flowcharts in this page are for illustrative purposes alone and only indicates some of the steps associated with the relevant trade mark procedures."
        />
        <link
          rel="canonical"
          href="/trade-mark-process-flowcharts"
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
                href="/ip-info"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Resources
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
                Trade mark process flowcharts
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Trade mark process flowcharts</h1>
      <p>
        This page archives all the trade mark process flowcharts. Flowcharts in
        this page are for illustrative purposes alone and only indicates some of
        the steps associated with the relevant procedures. These do not count as
        legal advice. Please contact our{' '}
        <Link href="/trade-mark-attorney">trade mark attorneys</Link> for their
        expert advice.
      </p>
      <hr />
      <h2>Australian Standard Trade Mark Procedure</h2>
      <figure>
        <Link href="/charts/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2.png">
          <Image
            loader={myLoader}
            src="/charts/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2-1024x331.png"
            alt="Australian Standard Trade Mark Procedure"
            width="1024"
            height="331"
          />
        </Link>
        <figcaption>Australian Standard Trade Mark Procedure</figcaption>
      </figure>
      <p>
        In Australia, the trade mark registration process involves several steps
        commencing with a search and extending beyond registration.{' '}
        <Link href="/trade-mark-registration-process">Learn more…</Link>
      </p>
      <hr />
      <h2>Madrid Protocol Trade Mark Application Process</h2>
      <figure>
        <Link href="/charts/Flowchart-I-Madrid-Protocol-Trade-Mark-Application-Process-Desktop-v2.png">
          <Image
            loader={myLoader}
            src="/charts/Flowchart-I-Madrid-Protocol-Trade-Mark-Application-Process-Desktop-v2-1024x395.png"
            alt="Madrid Protocol Trade Mark Application Process"
            width="1024"
            height="395"
          />
        </Link>
        <figcaption>Madrid Protocol Trade Mark Application Process</figcaption>
      </figure>
      <p>
        An application for International Registration is filed by your trade
        mark attorney through IP Australia.{' '}
        <Link href="/madrid-protocol-application">Learn more…</Link>
      </p>
      <hr />
      <h2>Trade Mark Opposition Procedure</h2>
      <figure>
        <Link href="/charts/Flowchart-H-Trade-Mark-Opposition-Procedure-Desktop.png">
          <Image
            loader={myLoader}
            src="/charts/Flowchart-H-Trade-Mark-Opposition-Procedure-Desktop-1024x313.png"
            alt="Trade Mark Opposition Procedure"
            width="1024"
            height="313"
          />
        </Link>
        <figcaption>Trade Mark Opposition Procedure</figcaption>
      </figure>
      <p>
        Any interested third person can file an opposition to trade mark
        application within 2 months from the date of its publication on
        Australian Official Journal of Trade Marks.{' '}
        <Link href="/trade-mark-opposition">Read more…</Link>
      </p>
    </Layout>
  )
}
