import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>
          Jarrod Lichtblau - Senior Associate, Trade Mark Attorney | Baxter IP
          Melbourne
        </title>
        <meta
          name="description"
          content="Jarrod Lichtblau is a Melbourne trade mark attorney specialising in trade mark enforcement and complex trade mark related dispute matters."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/melbourne/jarrod-lichtblau"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/jarrod-lichtblau"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E8%B4%BE%E7%BD%97%E5%BE%B7%E5%88%A9%E5%B8%8C%E7%89%B9%E5%B8%83%E5%8A%B3"
          hrefLang="zh"
        />
      </Head>
      <nav className="flex !pl-0" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link
              href="/"
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
            <Link
              href="/ip-attorney"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Jarrod Lichtblau
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Jarrod Lichtblau</h1>
      <p>Senior Associate, Trade Mark Attorney</p>
      <div className="text-sm">
        <Link
          href="mailto:jarrod.lichtblau@baxterip.com.au"
          className="text-xs"
        >
          jarrod.lichtblau@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61390203142">+61 3 9020 3142</Link>
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
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Website-Disputes.svg"
              alt="Website Disputes icon"
              title="Website Disputes"
              width="40"
              height="40"
            />
            <div>Website Disputes</div>
          </div>
        </div>
      </div>
      <Image
        loader={myLoader}
        src="/team/header-jarrod-lichtblau.jpg"
        alt="Jarrod Lichtblau"
        title="Jarrod Lichtblau"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          I enjoy assisting people in protecting their intellectual property,
          especially with a focus on the commercial needs of their business.
        </blockquote>
        <cite>
          &ndash;Jarrod Lichtblau - Senior Associate, Trade Mark Attorney
        </cite>
      </div>
      <br />

      <p>
        Jarrod is a qualified Australian lawyer and registered Australian and
        New Zealand Trade Marks Attorney. He has worked for major intellectual
        property firms in Australia.
      </p>

      <p>
        Jarrod specialises in trade mark protection, from conducting clearance
        searches through to enforcement of rights. He has a particular interest
        in global portfolio strategy and domain name disputes.
      </p>

      <p>
        Jarrod&rsquo;s priority is to always obtain the best commercial outcome
        for all his clients. He manages this through strong attention to detail
        and technical capabilities, which have allowed him to act for a wide
        variety of clients from start-ups to multinational corporations, in many
        different industries. He also draws on his previous experience as a
        Judge&rsquo;s Associate, to provide commercially savvy advice for his
        clients.
      </p>

      <p>
        Jarrod has a Bachelor of Laws and Bachelor of Biomedical Science from
        Monash University. He subsequently obtained Graduate Diplomas in both
        Legal Practice and Intellectual Property Law.
      </p>

      <p>
        Jarrod is a member of the Institute of Patent &amp; Trade Mark Attorneys
        of Australia, and the Intellectual Property Society of Australian &amp;
        New Zealand.
      </p>

      <p>
        Outside of work, Jarrod enjoys getting on his bicycle and exploring the
        world.
      </p>
    </Layout>
  )
}
