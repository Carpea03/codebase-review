import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentGrantAndRenewal() {
  return (
    <Layout>
      <Head>
        <title>
          Grant and renewal of an Australian patent | Baxter IP Sydney &
          Melbourne
        </title>
        <meta
          name="description"
          content="A certificate of grant of standard patent will be issued once an application has successfully gone through the examination process."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-grant-and-renewal"
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
                Patent grant and renewal
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Grant and renewal of an Australian patent</h1>
      <h2>Pathway to grant</h2>

      <ol>
        <li>
          <Link href="/patent-application">
            Filing of a standard patent application
          </Link>{' '}
          (if a provisional application has been filed, the standard patent
          application has to be filed within 12 months).
        </li>
        <li>
          <Link href="/patent-examination">Publication</Link> of specification
          in the official journal.
        </li>
        <li>
          <Link href="/patent-examination">Examination</Link> has to be
          requested within 5 years of the date of filing or within two months of
          being directed to do so by the patent office. Objections may be raised
          during the course of the examination and the applicant has a chance to
          overcome objections.
        </li>
        <li>
          <Link href="/patent-opposition-process-and-acceptance">
            Acceptance
          </Link>{' '}
          and publication of acceptance &ndash; if no objections are raised
          during examination or the applicant has successfully addressed the
          objections, the patent application is listed as being accepted.
        </li>
        <li>
          <Link href="/patent-opposition-process-and-acceptance">
            Opposition period
          </Link>{' '}
          &ndash; an opponent can lodge a notice of opposition at any time
          within 3 months from the publication of acceptance of the patent
          specification.
        </li>
        <li>
          <Link href="/patent-grant-and-renewal">Grant</Link> &ndash; assuming
          no opposition or that the applicant has overcome any
          objections/oppositions, the patent office will issue an electronic
          certificate of grant of a standard patent.
        </li>
        <li>
          <Link href="/patent-grant-and-renewal">Renewal</Link> fees have to be
          paid yearly to maintain the patent.
        </li>
      </ol>

      <h2>Grant of an Australian patent</h2>

      <p>
        A <Link href="/patent-application">patent application</Link> once filed,
        undergoes <Link href="/patent-examination">examination</Link>. During
        examination, an examiner will ensure the invention as defined by the
        claims set out in the patent application meet all the requirements under
        the legislation. The examiner may raise objections if the invention does
        not meet the requirements and the applicant is given an opportunity to
        amend the claims. If there are no objections raised by the examiner, or
        the applicant has successfully overcome all the objections, the
        application is accepted and listed in the{' '}
        <em>Australian Journal of Patents</em> (supplement). Once the
        application is accepted there is a three-month period in which a third
        party can oppose grant of the application.
      </p>

      <p>
        If no opposition is lodged, the patent will be granted after the
        three-month period upon payment of the required acceptance fees. Should
        an{' '}
        <Link href="/patent-opposition-process-and-acceptance">opposition</Link>{' '}
        be lodged, the applicant is notified and a hearing is held before a
        Delegate to decide the opposition. If the applicant is successful in
        overcoming the opposition, the patent will be granted. If the opponent
        is successful, the applicant will be given the opportunity to amend the
        specification to address any objections raised. If the applicant is not
        successful in amending the specification to address the objections, a
        patent will not be granted. The applicant must pay all acceptance fees
        prior to the patent being granted (extra fees are payable for every
        claim over 20). The owner of the patent will be issued with a
        certificate of grant of a Standard Patent.
      </p>

      <h2>Renewal fees</h2>

      <p>
        Renewal fees are payable annually from the 4th anniversary of the filing
        date of the patent application. A patent will lapse if the annual
        renewal fees are not paid on time or within six months of due date upon
        payment of monthly extension fees. The patent owner is responsible for
        ensuring the timely payment of all renewal fees as well as maintaining
        the information recorded in the patent register (ownership, address
        details, licensing arrangements).
      </p>

      <h2>Duration of patent protection</h2>

      <p>
        The duration of patent protection runs from the filing date and not the
        date of grant. In Australia, patent protection is for 20 years from the
        filing date if the annual renewal fees are paid. The exception is
        pharmaceutical patents where an extension of term can be requested to
        extend the validity of the patent to up to 25 years.
      </p>

      <h2>After grant</h2>

      <p>
        Once a patent is granted, it is an asset which can be exploited. The
        owner of the invention has exclusive rights to develop and market the
        invention including the ability to issue licences. A patent can be a
        valuable asset and used as collateral to raise further funds. A patent
        is classified as an intangible property asset. Security rights secured
        against a patent must be registered in the personal properties
        securities register.
      </p>

      <p>
        It is the patentee&apos;s responsibility to enforce the patent. This
        means that the patentee needs to be proactive in monitoring the market
        to identify any products that may infringe its patents (and thus affect
        the potential prices that the patentee can charge). Legal action can be
        taken to enforce a patent and to prevent other companies/individuals
        from profiting from the invention.
      </p>

      <h2>Re-examination</h2>

      <p>
        It is important to note that the grant of a patent is not final and can
        be contested. A third party can request that a granted patent be
        re-examined at any time after the grant of a patent. This can be done on
        a number of grounds, but is usually done where the person lodging the
        request is disputing the validity of the patent based on the application
        not meeting the requirements for novelty and/or inventive step.
      </p>

      <p>
        It is also possible for the Commissioner of Patents to independently
        decide to re-examine a patent application. This is usually done where:
      </p>

      <ul>
        <li>
          A third party has filed a notice under s27 of the Patents Act
          disputing validity of the patent;
        </li>
        <li>Opposition proceedings have been started and then withdrawn;</li>
        <li>New prior art has come to the attention of the Commissioner.</li>
      </ul>
    </Layout>
  )
}
