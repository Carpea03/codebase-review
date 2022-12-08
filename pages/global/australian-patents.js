import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function AustralianPatents() {
  return (
    <Layout>
      <Head>
        <title>
          Patents in Australia | Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="In Australia, filed patent applications must meet several criteria during the patent process before patent grant is achieved."
        />
        <link rel="canonical" href="/global/australian-patents" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-patents"
          hreflang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A6%82%E4%BD%95%E7%94%B3%E8%AF%B7%E4%B8%93%E5%88%A9"
          hreflang="zh"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.baxterip.com.au/how-to-patent"
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
                Patents in Australia
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Australian Patents</h1>
      <h2>Patent Novelty in Australia</h2>
      <ul>
        <li>
          Australia is an absolute novelty (first-to-file) country. This means
          that publication or public use of the invention anywhere in the world
          before the priority date will invalidate any patent to the invention.
        </li>
        <li>
          Australia does have a twelve month grace period beginning from the
          date of a non-confidential disclosure. However, a complete Australian
          patent application (e.g. a PCT patent application designating
          Australia) must be filed before the expiration of the twelve month
          grace period. The filing of a declaration is not required in order to
          take advantage of the grace period. There are some other limitations
          with respect to the Australian patent grace period so please contact
          us if you want our view on a specific scenario.
        </li>
      </ul>
      <h2>Inventive Step In Australia (Obviousness)</h2>
      <ul>
        <li>
          The test for inventive step in Australia is whether the invention
          would have been obvious to a person skilled in the relevant art in
          light of the common general knowledge as it existed in Australia
          before the priority date of the relevant claim and one or more pieces
          of prior art information.
        </li>
        <li>
          One unique requirement under Australian patent law is that for prior
          art to be able to be considered for the purpose of assessing inventive
          step, it must be &ldquo;ascertained, understood and regarded as
          relevant&rdquo; by the PSA.
        </li>
        <li>
          In a recent revision to the Australian patent examination criteria in
          2010, the &lsquo;obvious to try&rsquo; question can be asked when
          assessing Inventive Step. That it, &ldquo;would the PSA directly be
          led as a matter of course to try the claimed invention in the
          expectation that it might well produce a solution to the
          problem?&rdquo;
        </li>
        <li>
          Inventive step objections raised during the examination process can
          often be overcome by intelligent argument.
        </li>
      </ul>
      <h2>Australian Patent Examination</h2>
      <p>
        Patent applicants must request Australian patent examination within five
        years of the patent application date (international filing date for
        national phase entries of PCT applications) although patent applicants
        can request examination voluntarily at any time. In Australia, a
        Direction to Request Examination is normally issued between 6 and 30
        months after the Australian national phase entry date (filing date for
        the relevant national phase patent application). Examination must then
        be requested within 6 months of the date of the Direction.
      </p>
      <p>
        It is also possible to request modified examination where a
        corresponding patent application has been granted in USA, Canada or New
        Zealand or in any of the countries signatory to the European Patent
        Convention. A certified copy of the corresponding patent application
        needs to be filed and the patent specification of the Australian
        national phase entry needs to be modified such that it conforms to the
        corresponding foreign patent application.
      </p>
      <h2>Patent Amendments in Australia</h2>
      <h3>Prior to Acceptance</h3>
      <p>
        Voluntary amendments may be filed once national phase has been entered
        in Australia. Amendments must not result in matter being claimed that
        was not disclosed at the filing date of the patent application (e.g. PCT
        patent application filing date).
      </p>
      <h3>After Acceptance</h3>
      <p>
        Voluntary amendments may be filed after the patent application has been
        accepted. However, such amendments must fall within the scope of the
        patent claims as accepted.
      </p>
      <h2>Australian Patent Renewals</h2>
      <p>
        Annual continuation fees are payable on a standard patent application in
        Australia, commencing on the fifth anniversary of the PCT patent
        application filing date or the Australian standard application filing
        date (as relevant). Once granted, annual continuation fees are payable
        for the life of the patent. The maximum term of a standard Australian
        patent is 20 years. However, a 5 year extension may be granted for
        pharmaceutical patent applications.
      </p>
    </Layout>
  )
}
