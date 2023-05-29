import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Chris Baxter - Managing Director | Baxter IP Sydney</title>
        <meta
          name="description"
          content="Chris Baxter is a Sydney patent and trade mark attorney specialising in software patents, computer patents, medical device patents and engineering patents."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/sydney/chris-baxter"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/chris-baxter"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E5%85%8B%E9%87%8C%E6%96%AF%E5%B7%B4%E5%85%8B%E6%96%AF%E7%89%B9"
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
                Chris Baxter
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Chris Baxter</h1>
      <p>Managing Director, Patent & Trade Mark Attorney</p>
      <div className="text-sm">
        <Link href="mailto:chris.baxter@baxterip.com.au" className="text-xs">
          chris.baxter@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61292646716">+61 2 9264 6716</Link>
      </div>
      <div className="py-8">
        <small>Areas of Expertise</small>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Consumer.svg"
              alt="Consumer Products icon"
              title="Consumer Products"
              width="40"
              height="40"
            />
            <div>Consumer Products</div>
          </div>
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
              src="/expertise/Mining.svg"
              alt="Mechanical icon"
              title="Mechanical"
              width="40"
              height="40"
            />
            <div>Mechanical</div>
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
              src="/expertise/Mining.svg"
              alt="Mining / Civil icon"
              title="Mining / Civil"
              width="40"
              height="40"
            />
            <div>Mining / Civil</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Patent-Enforcement.svg"
              alt="Patent Enforcement icon"
              title="Patent Enforcement"
              width="40"
              height="40"
            />
            <div>Patent Enforcement</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Patent-Oppositions.svg"
              alt="Patent Oppositions icon"
              title="Patent Oppositions"
              width="40"
              height="40"
            />
            <div>Patent Oppositions</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Physics.svg"
              alt="Physics icon"
              title="Physics"
              width="40"
              height="40"
            />
            <div>Physics</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Registered-Design.svg"
              alt="Registered Design icon"
              title="Registered Design"
              width="40"
              height="40"
            />
            <div>Registered Design</div>
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
        src="/team/header-chris-baxter.jpg"
        alt="Chris Baxter"
        title="Chris Baxter"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          There is no surer way to create jobs and wealth than by the
          commercialisation of new ideas anchored on a strong intellectual
          property foundation.
        </blockquote>
        <cite>
          &ndash;Chris Baxter - Managing Director, Patent & Trade Mark Attorney
        </cite>
      </div>
      <br />
      <p>
        Chris specialises in strategic, cross-jurisdictional intellectual
        property advice on complex patent portfolios and dispute matters. He
        acts for multinationals, ASX listed companies, university spin-outs and
        a wide variety of SMEs. Chris has broad technological experience
        spanning, in particular:{' '}
        <Link href="https://www.baxterip.com.au/specialisations/medical-patents">
          medtech
        </Link>
        ,{' '}
        <Link href="https://www.baxterip.com.au/specialisations/mechanical-patents">
          defence
        </Link>
        ,{' '}
        <Link href="https://www.baxterip.com.au/specialisations/software-patents">
          software
        </Link>{' '}
        and{' '}
        <Link href="https://www.baxterip.com.au/specialisations/mechanical-patents">
          aerospace inventions
        </Link>
        .
      </p>

      <p>
        Uniquely, alongside providing strategic IP advice, Chris has founded,
        accelerated, mentored and invested in dozens of tech startups. Chris
        draws on his experience working in-house as a{' '}
        <Link href="https://www.baxterip.com.au/patent-attorney">
          patent attorney
        </Link>{' '}
        with one of Australia&rsquo;s largest medical devices companies –
        ResMed, in delivering best-practice international IP strategy to SMEs
        and startups.
      </p>

      <h2>Awards &amp; media</h2>

      <p>
        Chris has a Masters Degree in industrial property from the University of
        Technology, Sydney (for which he received the award for 1st place in
        Trade mark Law) and 1st Class Honours and the thesis prize in
        Aeronautical Engineering from the University of Sydney.
      </p>

      <p>
        Chris is a Fellow of The Institute of Patent &amp; Trade Mark Attorneys
        of Australia, and a member of various International patent attorney
        organisations, conferences of which he attends annually.
      </p>

      <p>
        In 2019, Acquisition International selected him as the{' '}
        <em>
          &ldquo;Leading Specialist Patent and Trademark Attorney of the Year,
          Australia&rduo;
        </em>{' '}
        in the AI Leading Advisers Awards.
      </p>

      <p>
        Chris has been interviewed in the Australian Financial Review, on CNBC,
        Bloomberg, Sky News, the ABC and 2UE.
      </p>

      <p>
        For Chris&rsquo;s full profile, please visit{' '}
        <Link
          title="Chris Baxter"
          href="http://www.chrisbaxter.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.chrisbaxter.com.au
        </Link>
        .
      </p>

      <h2>Attorney Snapshot</h2>

      <ul class="text-left">
        <li>
          <em>
            &ldquo;Leading Specialist Patent and Trademark Attorney of the Year,
            Australia&rduo;
          </em>{' '}
          in the Acquisition International Leading Adviser Awards 2019
        </li>
        <li>
          <Link
            href="https://www.iam-media.com/directories/patent1000/rankings/australia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recommended patent attorney for patent prosecution in 2015 by
            Intellectual Asset Management Magazine
          </Link>
        </li>
        <li>
          Member of&nbsp;
          <Link
            title="Member of Entrepreneurs&rsquo; Organization Sydney"
            href="https://www.eonetwork.org/sydney/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrepreneurs&rsquo; Organization Sydney
          </Link>
        </li>
        <li>
          Fellow of&nbsp;
          <Link
            title="Fellow of The Institute of Patent &amp; Trade Mark Attorneys of Australia"
            href="https://ipta.org.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Institute of Patent &amp; Trade Mark Attorneys of Australia
          </Link>
        </li>
        <li>
          Founded&nbsp;
          <Link
            title="Baxter IP Patent &amp; Trademark Attorneys"
            href="https://www.baxterip.com.au/"
            rel="noopener noreferrer"
          >
            Baxter IP
          </Link>
          &nbsp;in 2007
        </li>
        <li>
          Manages an angel investment{' '}
          <Link
            href="https://www.chrisbaxter.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio
          </Link>
        </li>
        <li>Prev. in-house patent attorney at ResMed</li>
        <li>
          Award for 1st place in Trade Mark Law in Master of Intellectual
          Property Law @{' '}
          <Link
            href="https://www.uts.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UTS
          </Link>
        </li>
        <li>
          Thesis Prize and 1st Class Hons in Aeronautical Engineering @{' '}
          <Link
            href="https://sydney.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            USYD
          </Link>
        </li>
        <li>
          Adviser to&nbsp;
          <Link
            title="Baxter Charitable Trusts"
            href="http://www.baxtercharitabletrusts.org.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baxter Charitable Trusts
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
