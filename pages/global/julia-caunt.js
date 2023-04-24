import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function JuliaCaunt() {
  return (
    <Layout>
      <Head>
        <title>
          Julia Caunt - Senior Associate, Trade Mark Attorney | Baxter IP Sydney
        </title>
        <meta
          name="description"
          content="Julia Caunt is a Sydney trade mark attorney specialising in trade mark clearance searches, infringement issues, trade mark protection, strategy and enforcement."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/julia-caunt"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/julia-caunt"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E6%9C%B1%E8%8E%89%E5%A8%85%E8%80%83%E7%89%B9"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/sydney/julia-caunt"
        />
      </Head>
      <nav className="flex !pl-0" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link
              href="/"
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
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
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
                  Our patent & trade mark attorneys
                </span>
              </div>
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
                Julia Caunt
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Julia Caunt</h1>
      <p>Senior Associate, Trade Mark Attorney</p>
      <div className="text-sm">
        <Link href="mailto:julia.caunt@baxterip.com.au" className="text-xs">
          julia.caunt@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61290990646">+61 2 9099 0646</Link>
      </div>
      <div className="py-8">
        <small>Areas of Expertise</small>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Trade-Mark-Enforcement.svg"
              alt="Trade Mark Enforcement icon"
              title="Trade Mark Enforcement"
              width="40"
              height="40"
            />
            <div>Trade Mark Enforcement</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Trade-Mark-Filings.svg"
              alt="Trade Mark Filings icon"
              title="Trade Mark Filings"
              width="40"
              height="40"
            />
            <div>Trade Mark Filings</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Trade-Mark-Opposition.svg"
              alt="Trade Mark Oppositions icon"
              title="Trade Mark Oppositions"
              width="40"
              height="40"
            />
            <div>Trade Mark Oppositions</div>
          </div>
        </div>
      </div>
      <Image
        loader={myLoader}
        src="/team/header-julia-caunt.jpg"
        alt="Julia Caunt"
        title="Julia Caunt"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          In the commercial world there can be a lot of moving parts. I like to
          work with businesses to ensure the right strategy is implemented and
          IP is protected.
        </blockquote>
        <cite>&ndash; Julia Caunt - Senior Associate, Trade Mark Attorney</cite>
      </div>
      <br />

      <p>
        Julia has over 16 years of experience in global and local FMCG
        organisations having worked in-house for both Nestlé and Lion. She has
        considerable business advisory experience in trade mark and IP
        protection across a broad range of categories including food and
        beverages, health sciences, infant nutrition and petfood products.
      </p>

      <p>
        Her extensive experience supporting global, regional and local teams on
        diverse brand portfolio and intellectual property matters includes trade
        mark clearance searches, infringement issues, trade mark protection,
        strategy and enforcement.
      </p>

      <p>
        Julia&rsquo;s core motivation is to ensure that clients receive the most
        appropriate advice tailored to their unique requirements.
      </p>

      <p>
        She has a Bachelor of Arts in Modern History from Macquarie University
        and a Masters in Intellectual Property from the University of Technology
        Sydney. Julia is a registered trade mark attorney and a member of the
        Intellectual Property Society of Australia &amp; New Zealand.
      </p>

      <p>
        When not working Julia enjoys being active and embarking on new
        adventures, whether that is road trips, adventure races, long walks
        exploring new areas or even taking a pottery class.
      </p>
    </Layout>
  )
}
