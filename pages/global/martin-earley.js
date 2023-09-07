import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function MartinEarley() {
  return (
    <Layout>
      <Head>
        <title>
          Martin Earley - Director, Patent & Trade Mark Attorney | Baxter IP
          Melbourne
        </title>
        <meta
          name="description"
          content="Martin Earley is a Melbourne IP attorney specialising in ICT patents, physics patents, engineering patent applications and patent oppositions."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/martin-earley"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/martin-earley"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E9%A9%AC%E4%B8%81%E5%8E%84%E8%80%8C%E5%88%A9"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/melbourne/martin-earley"
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
                Martin Earley
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Martin Earley</h1>
      <p>Director, Victoria Region Manager, Patent & Trade Mark Attorney</p>
      <div className="text-sm">
        <Link href="mailto:martin.earley@baxterip.com.au" className="text-xs">
          martin.earley@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61396022288">+61 3 9602 2288</Link>
      </div>
      <div className="py-8">
        <small>Areas of Expertise</small>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Chemistry.svg"
              alt="Chemistry icon"
              title="Chemistry"
              width="40"
              height="40"
            />
            <div>Chemistry</div>
          </div>
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
              src="/expertise/Fintech.svg"
              alt="Fintech icon"
              title="Fintech"
              width="40"
              height="40"
            />
            <div>Fintech</div>
          </div>
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Mechanical.svg"
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
              src="/expertise/Plant-Breeder-Rights.svg"
              alt="Plant Breeder Rights icon"
              title="Plant Breeder Rights"
              width="40"
              height="40"
            />
            <div>Plant Breeder Rights</div>
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
        src="/team/header-martin-earley.jpg"
        alt="Martin Earley"
        title="Martin Earley"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          To me, getting on board early in the piece is advantageous because my
          range of experience as an IP attorney in both contentious patent and
          trade mark issues allows us to determine the approach most likely to
          maximise benefits to the client. Positive outcomes for our clients are
          what matter most to me.
        </blockquote>
        <cite>
          &ndash;Martin Earley - Director, Victoria Region Manager, Patent &
          Trade Mark Attorney
        </cite>
      </div>
      <br />

      <p>
        If you have a worthwhile or exciting innovation, patent attorney Martin
        Earley may be the catalyst that drives you towards successful IP
        protection and patent commercialisation. He has an equal passion for
        ideas and problem solving, and believes in sharing every step of each
        client&rsquo;s journey in order to maximise the chances of success on a
        personal and commercial level.
      </p>

      <p>
        Knowing patent law is one thing; applying it to your commercial
        advantage is quite another. To get the most out of your invention you
        need to work with a patent attorney who has both a keen eye for detail
        and an intimate understanding of the subject. Martin&rsquo;s detailed
        strategies for applying a commercial slant to patent protection in the
        areas of ICT, physics, nanotechnology and engineering innovations allow
        him to cut through complexity.
      </p>

      <p>
        Martin started his career as an examiner at IP Australia (the Australian
        Patent Office). His expertise spans technologies as diverse as medical
        and mechanical devices, consumer goods, information technology,
        telecommunication, physics and nanotechnology. His talent for detailed
        conceptual analysis and practical commercial advice delivers ongoing
        value for all his clients.
      </p>

      <p>
        Martin is active both domestically and overseas, and regularly attends
        international patent attorney conferences to maintain his strong links
        with foreign patent attorneys. He was recognised as an IPLuminary in
        IPWorld publications in 2007/8.
      </p>

      <p>
        He has also built a reputation as &lsquo;a man of the people&rsquo; and
        frequently presents at inventor and university groups on patent law and
        patent commercialisation.
      </p>

      <h3>Attorney Snapshot</h3>

      <ul class="text-left">
        <li>Loves being “on board” with your project</li>
        <li>Bachelor of Applied Science in Applied Physics</li>
        <li>Former Examiner at IP Australia</li>
        <li>Over 25 years experience in Patents</li>
        <li>IPLuminary in IPWorld publications in 2007/8</li>
        <li>
          Fellow,{' '}
          <Link
            href="https://ipta.org.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Institute of Patent &amp; Trade Mark Attorneys of Australia
          </Link>
        </li>
        <li>
          Member,{' '}
          <Link
            href="https://aippi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AIPPI
          </Link>
          ,{' '}
          <Link
            href="https://www.ipsanz.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IPSANZ
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.aipla.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AIPLA
          </Link>
        </li>
        <li>
          Member{' '}
          <Link
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE
          </Link>
          , AIP
        </li>
        <li>Physics patent attorney specialist</li>
      </ul>
    </Layout>
  )
}
