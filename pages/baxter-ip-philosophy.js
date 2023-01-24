import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function BaxterIpPhilosophy() {
  return (
    <Layout>
      <Head>
        <title>
          Dedicated & supportive, transparent and commercial | The Baxter IP
          philosophy
        </title>
        <meta
          name="description"
          content="Baxter IP's philosophy is built on dedication & support, transparency and commerciality. We promise to provide you with clear, commercially astute IP advice."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/baxter-ip-philosophy"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/baxter-family-philosophy"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%B7%B4%E5%85%8B%E6%96%AF%E7%89%B9%E5%AE%B6%E5%BA%AD%E5%93%B2%E5%AD%A6"
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
                href="/about"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                About us
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
                The Baxter IP Philosophy
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>The Baxter IP philosophy</h1>
      <h2>Our heritage, our legacy, our promise to you</h2>
      <blockquote>
        Upholding the highest standard of business ethics and ensuring our
        advice always serves the best interests of our clients. This is our
        guiding principle and our legacy.
      </blockquote>
      <cite>&ndash; Dr John Baxter, Senior Commercial Counsel</cite>
      <p>
        We are passionate about providing intellectual property and advice that
        genuinely helps clients achieve their commercial goals and as such, here
        is <Link href="/about">our firm</Link>&apos;s commitment to you:
      </p>
      <ol>
        <li>Your best interests are always at the forefront of our minds.</li>
        <li>
          We operate at the highest standard of professional ethics and personal
          integrity.
        </li>
        <li>
          The confidentiality of the information you provide to us will be
          protected as a matter of course &ndash; our IP firm takes pride in our
          spotless record of trust, intact since our inception in 2007.
        </li>
        <li>
          We regularly communicate with clients about intellectual property
          processes, possible outcomes and IP costs in an upfront and honest
          manner.
        </li>
        <li>
          We communicate in plain English to ensure that you understand relevant
          intellectual property law.
        </li>
        <li>
          Your matter will be handled efficiently and conscientiously to ensure
          that our work is not only of the highest quality but is completed
          without delay.
        </li>
        <li>
          We look for opportunities to help clients to profit from their
          intellectual property &ndash; often introducing clients to
          professional service providers who can assist them.
        </li>
        <li>
          We provide fixed-cost and capped-fee IP attorney services where
          possible to assist you with budgeting.
        </li>
        <li>
          Our patent firm&apos;s intellectual property work will always be
          undertaken efficiently so as to provide you with the best possible
          value for money.
        </li>
        <li>
          We walk in our client&apos;s shoes &ndash; we know what it is like
          because many of <Link href="/ip-attorney">our IP attorneys</Link> have
          worked in-house at research &amp; development firms.
        </li>
      </ol>
      <blockquote>We promise you commercially astute IP advice</blockquote>
      <cite>&ndash; Michael Manak, General Manager</cite>
    </Layout>
  )
}
