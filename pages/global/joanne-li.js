import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function JoanneLi() {
  return (
    <Layout>
      <Head>
        <title>
          Joanne Li - Associate, Trade Mark Attorney, International Filings
          Manager | Baxter IP
        </title>
        <meta
          name="description"
          content="Joanne Li is a Mandarin-speaking Australian trade mark attorney based in Sydney. She also specialises in trademarks in Australia and New Zealand."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/joanne-li"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/joanne-li"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E6%9D%8E%E6%85%A7%E6%80%A1"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/sydney/joanne-li"
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
              href="#"
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
                Joanne Li
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Joanne Li</h1>
      <p>Associate, Trade Mark Attorney, International Filings Manager</p>
      <div className="text-sm">
        <Link href="mailto:joanne.li@baxterip.com.au" className="text-xs">
          joanne.li@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61290990642">+61 2 9099 0642</Link>
      </div>
      <div className="py-8">
        <small>Areas of Expertise</small>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Mandarin-Services.svg"
              alt="Madarin Services icon"
              title="Madarin Services"
              width="40"
              height="40"
            />
            <div>Madarin Services</div>
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
        src="/team/header-joanne-li.jpg"
        alt="Joanne Li"
        title="Joanne Li"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          With the development of science and technology, the nature of goods
          and services is no longer as traditional and unitary as in the past,
          but more diversified and integrated. For example, a software
          application, in addition to the nature of its own being software,
          according to its function, industry, purposes of use, it involves
          multiple areas of services. This requires the scope of protection of
          its trade mark to cover those areas accordingly. As a trade mark
          attorney, I use my professional knowledge to consider suitable
          protection strategies and seek comprehensive trade mark protection for
          clients.
        </blockquote>
        <cite>
          &ndash; Joanne Li - Associate, Trade Mark Attorney, International
          Filings Manager
        </cite>
      </div>
      <br />

      <p>
        Joanne joined Baxter IP in 2015. Before joining our firm, Joanne&rsquo;s
        interest in IP arose during her master degree studies into business,
        majored in entrepreneurship and marketing, at the{' '}
        <Link
          href="https://www.uq.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Queensland
        </Link>{' '}
        and her internship with{' '}
        <Link
          href="https://uniquest.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UniQuest
        </Link>
        , the IP and research commercialisation arm of UQ. She then decided to
        fulfil her studies into trade mark laws and regulations through the
        course of Graduate Certificate of Trade Mark at the University of
        Technology Sydney.
      </p>

      <p>
        Joanne started her career in intellectual property at Baxter IP from the
        role of{' '}
        <Link href="https://www.baxterip.com.au/zh/">
          Chinese Liaison Officer
        </Link>
        , then IP Administrator, and now a professional Trade Mark Attorney.
        With years of working in the industry, Joanne has acquired extensive
        experience in trade mark, in particular{' '}
        <Link href="https://www.baxterip.com.au/global/trade-mark-search">
          trade mark searches
        </Link>
        ,{' '}
        <Link href="https://www.baxterip.com.au/global/australian-trade-marks">
          applications
        </Link>
        , prosecution, and opposition. She manages trade mark portfolios of over
        200 businesses, spanning a broad range of industries, including consumer
        goods, finance, IT and software, biotechnology, medical,
        pharmaceuticals, education, entertainment, retail and wholesale, and
        charity. Besides, her business background and trilingual ability enable
        her to quickly understand the needs of protection of businesses and
        smoothly communicate with local and foreign clients. Her clients
        describe Joanne as a good listener, professional attorney, and asset of
        clients.
      </p>

      <p>
        A consummate team player who is always keen to support the team and
        learn from other professionals, she is continually expanding her
        knowledge and capabilities in trade mark. With her expertise and
        experience, Joanne is perfectly positioned to support you through all
        stages of the process, from your initial enquiry through to successful
        prosecution and registration of your trade marks.
      </p>

      <p>
        A keen photographer who has been firmly bitten by the travel bug, when
        not at work Joanne can usually be found out on the road, or at home
        planning her next international trip.
      </p>

      <h3>Attorney Snapshot</h3>

      <ul class="text-left">
        <li>
          Master of Business (Advanced) in Entrepreneurship and Marketing,{' '}
          <Link
            href="https://www.uq.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Queensland
          </Link>
        </li>
        <li>
          Internship of commercialisation at{' '}
          <Link
            href="https://uniquest.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UniQuest
          </Link>
        </li>
        <li>
          Graduate Certificate of Intellectual Property at the{' '}
          <Link
            href="https://www.uts.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Technology Sydney
          </Link>
        </li>
        <li>
          Bachelor of Art in International Trade and English,{' '}
          <Link
            href="https://iie-en.gdufs.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guangdong University of Foreign Studies, China
          </Link>
        </li>
        <li>Fluent English, Proficient Mandarin and Cantonese</li>
      </ul>
    </Layout>
  )
}
