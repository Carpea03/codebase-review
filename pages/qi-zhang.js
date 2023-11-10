import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>
          Dr Qi Zhang - Principal, Patent & Trade Mark Attorney | Baxter IP
        </title>
        <meta
          name="description"
          content="Dr Qi Zhang is a patent and trade mark attorney specialising in mobile communications, electrical engineering and software. Qi is based at Baxter IP's Sydney Office."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/sydney/qi-zhang"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/dr-qi-zhang"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E5%BC%A0%E6%97%97%E5%8D%9A%E5%A3%AB"
          hrefLang="zh"
        />
      </Head>
      {/* <nav className="flex !pl-0" aria-label="Breadcrumb">
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
                Dr Qi Zhang
              </span>
            </div>
          </li>
        </ol>
      </nav> */}
      <h1>
        Dr Qi Zhang
        <p><>-</>Senior Associate, Patent & Trade Mark Attorney</p>
      </h1>
      <div className="text-sm">
        <Link href="mailto:qi.zhang@baxterip.com.au" className="text-xs">
          qi.zhang@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61290990644">+61 2 9099 0644</Link>
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
              src="/expertise/Mandarin-Services.svg"
              alt="Mandarin Services icon"
              title="Mandarin Services"
              width="40"
              height="40"
            />
            <div>Mandarin Services</div>
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
        </div>
      </div>
      <Image
        loader={myLoader}
        src="/team/header-qi-zhang.jpg"
        alt=" Dr Qi Zhang"
        title="Dr Qi Zhang"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          I love seeing my clients and their businesses grow, because I feel
          like I grow with them. There&rsquo;s no better feeling than staying
          with an inventor from the first discussion of their idea, through
          successfully protecting their IP rights, to seeing them generate
          profits from their hard work and creativity.
        </blockquote>
        <cite>
          &ndash; Dr Qi Zhang - Principal, Patent & Trade Mark Attorney
        </cite>
      </div>
      <br />

      <p>
        We were delighted to welcome Qi to the Baxter IP team in 2016.
        Specialising in{' '}
        <Link href="https://www.baxterip.com.au/specialisations/software-patents">
          mobile communications
        </Link>
        ,{' '}
        <Link href="https://www.baxterip.com.au/specialisations/electrical-engineering-patents">
          electrical engineering
        </Link>{' '}
        and{' '}
        <Link href="https://www.baxterip.com.au/specialisations/mechanical-patents">
          mechanics
        </Link>
        , he works with private inventors, start-ups and SMEs, helping to
        identify and protect their IP assets and providing comprehensive support
        from concept through to commercialisation.
      </p>

      <p>
        Qi provides clear, practical advice to clients on the patentability of
        their inventions and patenting strategies, in light of their specific
        goals and business strategies. He also drafts patent specifications and
        prosecutes patent applications in major jurisdictions, including
        Australia, US, China, Europe, Japan, Korea and other emerging economies.
      </p>

      <p>
        Our clients appreciate Qi for his straightforward, jargon-free advice
        and for his strong focus on helping them to generate sustainable value
        from their ideas and hard work. Qi helps his clients explore different
        ideas and options, and make informed decisions about a patent strategy
        and commercialisation pathway to suit their individual circumstances and
        goals.
      </p>

      <p>
        Prior to joining Baxter IP, Qi has enjoyed a highly successful
        international career in IP protection and management. In 2012 he was
        invited to join a tier-1 patent attorney firm in Sydney, where he
        qualified as an Australian patent attorney. Working with high-profile
        international clients and leading Australian research organisations,
        including NICTA, CSIRO and the University of Sydney, he provided expert
        advice on global patent strategies, drafted patent specifications, and
        provided legal and technical analyses of patentability in multiple
        technical areas including{' '}
        <Link href="https://www.baxterip.com.au/specialisations/software-patents">
          software
        </Link>
        , business methods,{' '}
        <Link href="https://www.baxterip.com.au/specialisations/fintech-patents">
          financial services
        </Link>
        , electronics, and mechatronics.
      </p>

      <p>
        Before his move to Sydney Qi&rsquo;s career took him to the USA, where
        he furthered his education in the IP field by completing a Master degree
        in Intellectual Property Management &amp; Markets. As a patent
        researcher with a US patent consulting firm, he applied these learnings
        to help clients create tangible commercial value from their intangible
        IP assets – identifying valuable patents in hot consumer markets and
        advising clients on building their patent portfolios. His work also
        included identifying potential patent infringements and supporting
        clients through infringement litigation.
      </p>

      <p>
        The foundations of Qi&rsquo;s intellectual property career were built in
        China, where he worked with one of the top patent attorney firms in
        China after completing his Ph.D in electrical engineering in 2005. His
        work there included providing legal and technical advice, and managing
        the preparation, filing and prosecution of patent applications for major
        international clients including Motorola, Samsung, 3M, GE and Yamaha.
      </p>

      <h3>Attorney Snapshot</h3>

      <ul class="text-left">
        <li>Registered Australian Patent Attorney</li>
        <li>Chinese Patent Attorney Qualification</li>
        <li>M.S. in Intellectual Property Management &amp; Markets</li>
        <li>Ph.D. in Electrical Engineering</li>
        <li>Bachelor of Science in Communication Engineering</li>
        <li>
          ​Over 10​ years​ working​ experience in ​patent protection in
          Australia, the US, and China
        </li>
        <li>
          ​Solid understanding of cutting-edge technologies, marketing, and
          laws.​
        </li>
        <li>Pragmatic solutions to client problems</li>
        <li>​Positive attitude to work and life​</li>
        <li>
          <Link
            href="https://ipta.org.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Institute of Patent and Trade Mark Attorneys of Australia
          </Link>
        </li>
        <li>
          <Link
            href="http://www.acbc.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The ​Australia ​China Business Council
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
