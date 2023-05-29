import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function WillemDuPreez() {
  return (
    <Layout>
      <Head>
        <title>Willem du Preez - IP Professional | Baxter IP Melbourne</title>
        <meta
          name="description"
          content="Willem du Preez is a Melbourne IP Professional specialising in electrical engineering, ICT, medtech, and agtech."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/willem-du-preez"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/willem-du-preez"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E5%A8%81%E5%BB%89%E5%A7%86%E6%9D%9C%E6%99%AE%E5%88%A9%E8%8C%A8"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/melbourne/willem-du-preez"
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
                Willem du Preez
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Willem du Preez</h1>
      <p>IP Professional</p>
      <div className="text-sm">
        <Link href="mailto:willem.dupreez@baxterip.com.au" className="text-xs">
          willem.dupreez@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61391099876">+61 3 9109 9876</Link>
      </div>
      <div className="py-8">
        <small>Areas of Expertise</small>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Electrical.svg"
              alt="Electrical / Electronics icon"
              title="Electrical / Electronics"
              width="40"
              height="40"
            />
            <div>Electrical / Electronics</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Medical.svg"
              alt="Medical icon"
              title="Medical"
              width="40"
              height="40"
            />
            <div>Medical</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Software.svg"
              alt="Software icon"
              title="Software"
              width="40"
              height="40"
            />
            <div>Software</div>
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
        </div>
      </div>
      <Image
        loader={myLoader}
        src="/team/header-willem-du-preez.jpg"
        alt="Willem du Preez"
        title="Willem du Preez"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          Having personally lived what a carefully developed IP strategy can do
          to support commercialisation, there is nothing more rewarding for me
          than to navigate this journey with others, sharing my experience along
          the way.
        </blockquote>
        <cite>&ndash;Willem du Preez - IP Professional</cite>
      </div>
      <br />

      <p>
        Willem specialises in securing IP protection such as patents and
        trademarks, always with an eye on the broader IP strategy, and how this
        combines with product development and commercialisation.
      </p>

      <p>
        Before starting his career in IP, Willem was an electrical engineer at a
        large mining explosives manufacturer where he was responsible for
        project management and process automation, giving him valuable industry
        insight into standard engineering practices.
      </p>

      <p>
        After registering as a South African patent attorney, Willem joined the
        in-house IP team at a large agtech research and commercialisation
        multinational company, where he was responsible for developing the IP
        protection and commercialisation strategy for newly developed
        technologies.
      </p>

      <p>
        Willem acts for large multinationals, SME&rsquo;s, universities and
        their spin-offs, and is particularly passionate about working with new
        startups. Most recently he has advised clients in the space of medtech
        and medical devices, and combining these fields with artificial
        intelligence.
      </p>

      <p>
        Willem has a masters degree in intellectual property law from the
        University of Melbourne and bachelors degrees in electrical engineering
        and law.
      </p>

      <p>
        He is an admitted attorney of the High Court of South Africa
        (non-practicing) and a registered South African patent attorney.
      </p>

      <p>
        In his free time, Willem enjoys the outdoors, particularly swimming,
        where he has competed in several open water long distance swims. Willem
        is also a competent chess player and avidly follows the professional
        chess scene.
      </p>

      <h2>Attorney snapshot</h2>

      <ul>
        <li>
          Masters degree in Intellectual Property Law (MIP Law) from the
          University of Melbourne
        </li>
        <li>
          Bachelors degree in law (LLB) from the University of South Africa
        </li>
        <li>
          Bachelors degree in electrical engineering (B.Eng (Elec)) from the
          University of Pretoria
        </li>
      </ul>
    </Layout>
  )
}
