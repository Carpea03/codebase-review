import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function IpCareers() {
  return (
    <Layout>
      <Head>
        <title>
          IP attorney careers | Start your intellectual property career at
          Baxter IP
        </title>
        <meta
          name="description"
          content="IP attorney careers as a patent attorney or trade mark attorney provide a fantastic way to support emerging businesses. Get in touch to learn more."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/ip-careers" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E8%81%8C%E4%B8%9A"
          hreflang="zh"
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
                Join us
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Careers at Baxter IP</h1>
      <h2>
        A private Australian IP practice that&apos;s dedicated &amp; supportive,
        transparent and commercial
      </h2>
      <p>
        Do you relish in achieving successful outcomes for your clients?
        You&apos;re in good company.
      </p>
      <p>
        Our purpose is to partner with clients to provide transparent and
        commercially astute advice, dedicated to achieving successful outcomes.
        Baxter IP is always on the lookout for highly motivated individuals who
        take pride in achieving successful outcomes for their clients.
      </p>
      <p>
        What makes a firm culture where attorneys thrive? One that&apos;s
        dedicated to supporting those who are still early in their career with
        oversight, professional development opportunities and mentorship. One
        that provides greater client and portfolio management autonomy to its
        seniors and one that&apos;s transparent around the data and metrics
        attorneys need to understand their contribution to the firm.
      </p>
      <p>
        As a private practice, we&apos;re high on recognition and low on
        politics. You will be recognised and rewarded for your performance, with
        an attractive remuneration package and ESS (share option scheme for
        Associates and above). You will be led by a management team that is
        nimble, adaptive, communicative and meets with you regularly throughout
        the year.
      </p>
    </Layout>
  )
}
