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
          Andrew Balis - Associate, Patent & Trade Mark Attorney | Baxter IP
          Sydney
        </title>
        <meta
          name="description"
          content="Andrew advises on several areas of local and international intellectual property and specialises in mechanical and aerospace technology."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/sydney/andrew-balis"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/andrew-balis"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E5%AE%89%E5%BE%B7%E9%B2%81%E5%B7%B4%E5%88%A9%E6%96%AF"
          hreflang="zh"
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
                Andrew Balis
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Andrew Balis</h1>
      <p>Associate, patent & trade mark attorney</p>
      <div className="text-sm">
        <Link href="mailto:andrew.balis@baxterip.com.au" className="text-xs">
          andrew.balis@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61290990650">+61 2 9099 0650</Link>
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
              src="/expertise/Medical-1.svg"
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
              src="/expertise/Patent-Enforcement-1.svg"
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
              src="/expertise/Patent-Oppositions-1.svg"
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
              src="/expertise/Physics-1.svg"
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
        src="/team/header-andrew-balis.jpg"
        alt=" Andrew Balis"
        title="Andrew Balis"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          I enjoy a hands-on approach, working closely with clients to develop
          their strategies. It brings me great satisfaction to help clients
          navigate the IP system to protect their ideas and maximise their
          idea’s potential.
        </blockquote>
        <i>Andrew Balis - Associate, Patent &amp; Trade Mark Attorney</i>
      </div>
      <br />
      <p>
        Andrew advises on several areas of local and international intellectual
        property and specialises in mechanical and aerospace technology.
      </p>
      <p>
        Andrew acts for a wide variety of clients, including multinationals,
        small-medium enterprises and sole traders. Andrew has previously acted
        for one of the world’s largest aerospace companies. He understands that
        these different clients have different goals, and enjoys providing
        individualised advice to each of them. A core part of Andrew’s practice
        is to really understand what clients want from their intellectual
        property, and he will always make the time to talk with clients (whether
        it be in person, over webchat, over the phone, or via email) so that he
        can best understand their ideas and transform that to IP potential.
      </p>
      <p>
        Andrew brings with him a wealth of experience in prosecuting patent
        applications in several industries and technology areas. These include:
        aerospace, automotive, vapour compression systems, mining, medical and
        consumer products. Andrew also has valuable experience in drafting
        patent applications, providing infringement opinions and clearance
        advice across various industries. He also has experience in preparing
        and prosecuting design applications in Australia and internationally,
        design infringement and validity analysis, and design freedom to operate
        analysis.
      </p>
      <p>
        Andrew is a registered trans-Tasman patent attorney and a registered
        Australian trade mark attorney. Andrew has a Master of Intellectual
        Property from the University of Technology, Sydney. Andrew also holds a
        Bachelor of Mechanical Engineering (Aerospace) from the University of
        New South Wales and completed an industry thesis on the aeroacoustic
        properties of a CPX road noise trailer in association with the UNSW
        Aerodynamics Laboratory and an industry wind tunnel facility. Prior to
        joining the IP profession, Andrew worked in a boutique acoustic
        engineering firm where he learned firsthand the foundation of good
        engineering practice, as well as seeing the research and development
        investment small enterprises make to develop their ideas.&nbsp;
      </p>
      <p>
        Andrew is a member of The Institute of Patent &amp; Trade Mark Attorneys
        of Australia, and a member of The Intellectual Property Society of
        Australia and New Zealand.
      </p>
      <p>
        Andrew likes to spend time with family and friends. He is a keen sports
        enthusiast and follows the NBA and NRL in particular. Andrew also enjoys
        working on his classic Saab 900 and going for scenic drives with his
        wife Joanna.
      </p>
      <h2>Attorney Snapshot</h2>
      <ul>
        <li>
          Registered Trans-Tasman patent attorney and a registered Australian
          trade mark attorney
        </li>
        <li>
          Master of Intellectual Property from the University of Technology,
          Sydney
        </li>
        <li>
          Bachelor of Mechanical Engineering (Aerospace) from the University of
          New South Wales
        </li>
        <li>
          Member of The Institute of Patent &amp; Trade Mark Attorneys of
          Australia
        </li>
        <li>
          Member of The Intellectual Property Society of Australia and New
          Zealand
        </li>
      </ul>
    </Layout>
  )
}
