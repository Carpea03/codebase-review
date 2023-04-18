import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function TradeMarkRegistrationProcess() {
  return (
    <Layout>
      <Head>
        <title>
          Trade mark registration process | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="The trade mark registration process involves several steps commencing with a trade mark search and extending beyond registration."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-registration-process"
        />
      </Head>
      <nav
        className="flex"
        aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none text-xs">
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
                Trade mark registration process
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Trade mark registration process</h1>
      <p>
        In Australia, the trade mark registration process involves several steps
        commencing with a search and extending beyond registration.
      </p>
      <figure>
        <Link href="/images/charts/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2-1024x331.png">
          <a>
            <Image
              loader={myLoader}
              src="/charts/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2-1024x331.png"
              alt="Australian Standard Trade Mark Procedure"
              width="1024"
              height="331"
            />
          </a>
        </Link>
        <figcaption>Australian Standard Trade Mark Procedure</figcaption>
      </figure>
      <h3>File an application</h3>
      <p>
        At application, an identical{' '}
        <Link href="/trade-mark-search">trade mark search</Link> is carried out
        in order to identify any obvious impediments to trade mark registration.
        Applicants can do their own search of the register, however a trade mark
        attorney will use more advanced strategies in conducting these searches.
      </p>
      <p>
        This first step in the trade mark process involves the applicant filing
        a <Link href="/trade-mark-application">trade mark application</Link>.
        Application involves the preparation of the application, submitting the
        application and payment of the required fees.
      </p>
      <p>
        Importantly, in the preparation step, the required information in the
        application should be complete and correct because only limited changes
        can be performed after filing. Incorrect or incomplete information may
        result in rejection or a narrow range of protection for the trade mark.
      </p>
      <h3>Examination</h3>
      <p>
        After submission of the application to the Trade Marks Office (IP
        Australia), the trade mark examiner, who is a delegate of the
        Commissioner of Trade Marks, will assess the application and an{' '}
        <Link href="/trade-mark-examination">examination</Link> report will be
        issued to the applicant. In the case that the application does not meet
        the legislative criteria set by IP Australia in light of the{' '}
        <em>Trade Marks Act 1995</em>, an adverse examination report will be
        issued to the applicant.
      </p>
      <p>
        The applicant can then provide arguments to support their application
        within a certain time frame (which is 15 months in Australia) or
        alternatively the applicant can amend the application.
      </p>
      <p>
        The Trade Marks office will then decide based on the presented evidence
        and/or amendments whether to accept or refuse the trade mark
        application.
      </p>
      <h3>Acceptance</h3>
      <p>
        Upon{' '}
        <Link href="/trade-mark-acceptance">
          acceptance of the trade mark application
        </Link>
        , IP Australia publishes the trade mark in the{' '}
        <em>Australian Official Journal of Trade Marks</em>, which can be seen
        by the public.{' '}
        <Link href="/publication-of-trade-mark-details">
          Publication of the trade mark
        </Link>{' '}
        commences a two-month opposition period in which any third party can
        oppose the registration of the trade mark.
      </p>
      <h3>Opposition</h3>
      <p>
        Based on the similar grounds for the rejection of trade marks, a trade
        mark opposition can be lodged by any third party. A{' '}
        <Link href="/trade-mark-opposition">trade mark opposition</Link> can
        result in either a registered trade mark or a refused application.
      </p>
      <h3>Trade mark registered</h3>
      <p>
        Once registered, the trade mark owner has sole rights to the use of the
        trade mark and to its{' '}
        <Link href="/trade-mark-registration-benefits">benefits</Link>. The
        owner is also responsible for{' '}
        <Link href="/trade-mark-maintenance">managing the trade mark</Link> in
        order to maximise the trade mark&apos;s commercial benefits, for
        preventing other parties from capitalising on their intellectual
        property right by{' '}
        <Link href="/trade-mark-enforcement-options">
          enforcing their trade mark
        </Link>
        , for <Link href="/trade-mark-renewal">maintaining ownership</Link>{' '}
        throughout the trade mark&apos;s lifetime by ensuring that renewal fees
        are paid every 10 years, and for protecting the trade mark by preventing
        others from using it in{' '}
        <Link href="/ip-glossary#trade-mark-dilution">
          a way that diminishes its value
        </Link>
        .
      </p>
    </Layout>
  )
}
