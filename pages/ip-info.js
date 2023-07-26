import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function IpInfo() {
  return (
    <Layout>
      <Head>
        <title>
          IP Info | Intellectual Property Information & Tools | Baxter IP
        </title>
        <meta
          name="description"
          content="A collection of intellectual property information, tools and resources provided by Baxter IP, Patent & Trade Mark Attorneys."
        />{' '}
        <link rel="canonical" href="https://www.baxterip.com.au/ip-info" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BF%A1%E6%81%AF"
          hreflang="zh"
        />
      </Head>
      <nav className="flex overflow-x-auto not-format" aria-label="Breadcrumb">
        <ol className="inline-flex items-center mt-4 mb-4 space-x-1 md:space-x-3 list-none pm-25 whitespace-nowrap">
          <li className="inline-flex items-center">
            {' '}
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
                Resources
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Intellectual Property Information & Tools</h1>

      <h2>Frequently Asked Questions</h2>

      <p>
        Check out our{' '}
        <Link
          title="Patent Attorney FAQ"
          href="https://www.baxterip.com.au/ip-info/faqs"
        >
          IP Attorney FAQs here
        </Link>
        . If you can&apos;t find the answer to your question/s, send us an email
        at <Link href="mailto:mail@baxterip.com.au">mail@baxterip.com.au</Link>{' '}
        or call us at <Link href="tel:+61292646716">+61 2 9264 6716</Link> and
        we&apos;ll try our best to answer your question/s.
      </p>

      <hr />

      <h2>IP Glossary</h2>

      <p>
        Confused by intellectual property jargon? We&apos;ve created this handy
        intellectual property glossary to provide definitions for some of the
        more complex intellectual property related terms. View our{' '}
        <Link
          title="Intellectual Property Glossary"
          href="https://www.baxterip.com.au/ip-glossary"
        >
          IP Glossary here
        </Link>
        .
      </p>

      <hr />

      <h2>IP Process Flowcharts</h2>

      <p>
        View our{' '}
        <Link href="https://www.baxterip.com.au/patent-process-flowcharts">
          patent process flowcharts
        </Link>{' '}
        and{' '}
        <Link href="https://www.baxterip.com.au/trade-mark-process-flowcharts">
          trade mark process flowcharts
        </Link>{' '}
        for your reference. Flowcharts in this page are for illustrative
        purposes alone and may only indicate some of the steps associated with
        the relevant procedure/s.
      </p>
    </Layout>
  )
}
