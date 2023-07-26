import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function AustralianRegisteredDesign() {
  return (
    <Layout>
      <Head>
        <title>
          Australian Registered Design | Baxter IP, Patent & Trade Mark
          Attorneys
        </title>
        <meta
          name="description"
          content="Australian registered designs provide intellectual property protection for the aesthetics, shape and overall design of new products."
        />
        <link rel="canonical" href="/global/australian-registered-designs" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-registered-designs"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%B3%A8%E5%86%8C%E5%A4%96%E8%A7%82%E8%AE%BE%E8%AE%A1"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/registered-designs"
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
                Registered Designs in Australia
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Australian Registered Design</h1>
      <h2>Minimum registered design filing requirements:</h2>
      <ul>
        <li>
          A set of representations (may be photographs) showing clear views of
          the article (e.g. may include perspective, side, top plan and bottom
          plan views).
        </li>
        <li>A name of the product shown in the representations</li>
        <li>Name and address of the applicant</li>
        <li>Identification of the scope of monopoly claimed</li>
      </ul>
      <h2>
        Additional filing requirements for filing an Australian registered
        design:
      </h2>
      <ul>
        <li>Name of the author and devolution of title to the applicant</li>
        <li>
          Details of convention priority if applicable (application number,
          title, country). A certified copy of the priority document is required
          along with a verified English translation (if relevant) prior to
          registration.
        </li>
        <li>
          A statement of newness and distinctiveness (optional) describing the
          important visual features of the design which are new and distinctive.
        </li>
        <li>Appointment of Agent if requested</li>
      </ul>
      <h2>Examination</h2>
      <p>
        An Australian registered design application undergoes a formalities
        examination and then proceeds to grant. Substantive examination is part
        of an optional, post-grant certification procedure that can be requested
        at any time during the life of the registered design. A registered
        design must be certified before an infringement action may be commenced.
        A third party can request certification of a registered design but must
        share the associated government fees if it does.
      </p>
      <h2>Renewals</h2>
      <p>
        The initial period of registration for the Australian registered design
        lasts five years from the filing date and can be extended once to a
        maximum term of 10 years.
      </p>
    </Layout>
  )
}
