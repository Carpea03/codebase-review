import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentExamination() {
  return (
    <Layout>
      <Head>
        <title>
          Examination of an Australian patent application | Baxter IP Sydney &
          Melbourne
        </title>
        <meta
          name="description"
          content="Examination of Australian patent applications involve testing the patent claims to determine whether they are new and inventive in relation to the prior art."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-examination"
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
          <li>
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
              <Link
                href="/services"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/patents"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/how-to-patent"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Patent examination and publication
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Examination and publication of an Australian patent application</h1>
      <h2>Publication of an Australian patent application</h2>

      <p>
        <Link href="/patent-application">Australian patent applications</Link>{' '}
        and <Link href="/pct-patent">PCT patent applications</Link> are
        published at 18 months from their earliest priority date. This is
        typically the filing date of the first{' '}
        <Link href="/provisional-patents">provisional patent application</Link>{' '}
        filed in the family. Standard Australian patent applications are then
        published again when they are accepted. This is done because the claims
        typically change during examination and it is necessary to publish the
        accepted claims.
      </p>

      <p>
        Provisional patent applications are not published if no priority is
        claimed from them.
      </p>

      <p>
        Publication of patents is significant because upon publication the
        information about your invention included in your patent specification
        is no longer confidential. It becomes part of the public knowledge and
        can be accessed by anyone online.
      </p>

      <p>
        Another important aspect is that use of your invention by a third party
        after publication can lead to infringement if the claims of the patent
        are allowed or certified.
      </p>

      <h2>Examination of an Australian patent application</h2>

      <p>
        Examination of Australian patent applications typically takes place
        18-36 months after the patent application has been filed and is a
        detailed review by an Examiner to determine whether the patent claims
        included in a specification meet the requirements of patentability and
        can thus be granted. Only granted patent claims are legally enforceable.
        Provisional patent applications are not examined.
      </p>

      <p>
        Examination of a standard patent is required within 5 years of filing
        the application, although as mentioned above, the patent office will
        typically direct a patent applicant to request examination prior to
        this. The primary considerations during examination of a standard patent
        are whether the claims are patentable subject matter and are new and
        involve an inventive step in respect of the prior art.
      </p>

      <p>
        If during an examination, a standard patent does not meet the
        requirements of the <em>Patents Act 1990</em>, then the Examiner will
        raise one or more objections. The applicant will have the opportunity to
        overcome these objections by making allowable amendments to the
        specification and claims but if the objections cannot be overcome then
        the patent application will lapse.
      </p>
    </Layout>
  )
}
