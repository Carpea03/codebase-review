import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function aus() {
  return (
    <Layout>
      <Head>
        <title>
          About Baxter IP, Patent & Trade Mark Attorneys | Baxter IP
        </title>
        <meta
          name="description"
          content="Baxter IP is a leading, independent, mid-tier patent and trade mark attorney firm with offices in Sydney and Melbourne, Australia."
        />
        <link
          rel="canonical"
          href="/about"
        />
      </Head>
      <nav
        className="flex"
        ariaLabel="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link href="#">
              <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Patents
              </a>
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
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                How to patent
              </a>
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
                Australian patent process
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Australian patent process</h1>
      <p>
        Developing new technologies allows businesses to generate significant
        new revenue streams and charge higher margins. However, at the start of
        the process the value of a new invention is difficult to measure. Only
        once you have built the product and started selling it will you develop
        the associated revenue stream.
      </p>
      <p>
        Having spent time and money developing a great idea, you will want to
        stop others from copying it and competing with you. As it’s cheaper and
        easier to simply copy a product rather than have to design and invent
        it, copycats are, typically, able to undercut the price at which you can
        sell your product. This is because the inventor of a new innovation will
        need to recoup the investment and research and development costs of the
        innovation through sales of the commercial product.
      </p>
      <p>
        The good news is that there is a way to stop this from happening if you
        are able to obtain patent protection and the start of the Australian
        patent process is to file a patent application for your invention.
        Obtaining a patent on your invention is a way of obtaining a legal
        monopoly for your invention and will allow you to take action against
        those people who copy your invention.
      </p>
      <p>
        If you do not want to sell the product yourself, once your patent has
        been filed you can licence your invention if you choose to allow others
        to use your invention. This means you could still be paid for your idea
        even if you don’t want to commercialise it yourself. This payment may
        take the form of a lump sum payment, royalty fees, a combination of both
        or another scheme altogether.
      </p>
      <p>
        Importantly, it is crucial that you file a patent application before you
        sell or publicly disclose your invention. This is because once the
        information is in the public domain it is deemed to be public
        information and you cannot patent public information even if you came up
        with the idea. Therefore you need to speak to a patent attorney and file
        your patent application before disclosing your invention to any third
        party.
      </p>
      <p>
        The Australian patent process can be lengthy depending on the options
        you choose and therefore obtaining a patent on your invention is a long
        term investment in your idea. Depending on your invention you could get
        a granted patent within 6 months but the process typically takes between
        1 – 3 years before a patent office can undertake a full review of your
        application and the various processes completed. Your patent attorney
        can also match the application timelines with your commercial timelines
        to ensure you are taking the most appropriate commercial pathway. The
        best thing you can do is obtain expert advice as soon as possible.
      </p>
      <p>
        Click through below to learn more about the different stages of the
        Australian patent process:
      </p>
      <ul>
        <li>
          <a href="https://www.baxterip.com.au/patent-application">
            Filing an Australian standard patent application
          </a>
        </li>
        <li>
          <a href="https://www.baxterip.com.au/patent-examination">
            Examination of an Australian patent application
          </a>
        </li>
        <li>
          <a href="https://www.baxterip.com.au/patent-opposition-process-and-acceptance">
            Patent opposition process and acceptance
          </a>
        </li>
        <li>
          <a href="https://www.baxterip.com.au/patent-grant-and-renewal">
            Grant and renewal of an Australian patent
          </a>
        </li>
      </ul>
    </Layout>
  )
}
