import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function NaleeshaNiranjan() {
  return (
    <Layout>
      <Head>
        <title>
          Naleesha Niranjan - Senior Associate, Patent & Trade Mark Attorney |
          Baxter IP Sydney
        </title>
        <meta
          name="description"
          content="Naleesha Niranjan is a Sydney patent and trade mark attorney specialising in the medical field and biomedical engineering."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/naleesha-niranjan"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/naleesha-niranjan"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E7%BA%B3%E4%B8%BD%E8%8E%8E%E5%B0%BC%E7%84%B6%E7%AE%80"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/sydney/naleesha-niranjan"
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
                Naleesha Niranjan
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Naleesha Niranjan</h1>
      <p>Senior Associate, Patent & Trade Mark Attorney</p>
      <div className="text-sm">
        <Link
          href="mailto:naleesha.niranjan@baxterip.com.au"
          className="text-xs"
        >
          naleesha.niranjan@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61280692603">+61 2 8069 2603</Link>
      </div>
      <div className="py-8">
        <small>Areas of Expertise</small>
        <div className="grid grid-cols-5 gap-4 text-xs">
          <div className="text-center">
            <Image
              loader={myLoader}
              src="/expertise/Biotechnology.svg"
              alt="Biotechnology icon"
              title="Biotechnology"
              width="40"
              height="40"
            />
            <div>Biotechnology</div>
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
        src="/team/header-naleesha-niranjan.jpg"
        alt=" Naleesha Niranjan"
        title="Naleesha Niranjan"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          I get excited about new inventions and how they can improve
          people&rsquo;s lives. It is important for me to understand the
          commercial value proposition of the intellectual property and
          incorporate that into a strong IP strategy.
        </blockquote>
        <cite>
          &ndash; Naleesha Niranjan - Senior Associate, Patent & Trade Mark
          Attorney
        </cite>
      </div>
      <br />
      <p>
        Naleesha brings valuable knowledge in the field of biomedical
        engineering to the Baxter IP team. She is passionate about medical
        technology, its advancement and its role in tackling global health
        problems.
      </p>

      <p>
        Having completed her Bachelor degree in Medical Engineering through the
        Dean&rsquo;s Scholar program at the Queensland University of Technology
        with first class honours, Naleesha was awarded a full scholarship
        position in the Erasmus Mundus Master&rsquo;s course in Biomedical
        Engineering, studying both at the University of Ghent in Belgium and The
        University of Groningen in The Netherlands.
      </p>

      <p>
        Naleesha&rsquo;s Master dissertation was conducted in the cardiovascular
        department of Helmholtz Institute at RWTH Aachen University which
        involved conducting a thermal analysis of a prototype total artificial
        heart using numerical methods. During her Masters, Naleesha also
        interned with university start-ups and appreciates the constraints
        innovators face in commercialising their inventions.
        Her&nbsp;multidisciplinary educational background allows her to have a
        broad understanding of a wide range of technologies, spanning several
        engineering and clinical disciplines.
      </p>

      <p>
        Prior to joining Baxter IP Naleesha worked with a large Australian
        intellectual property attorney firm where she gained sound knowledge of
        the IP laws in Australia and New Zealand and broad practical experience
        in the drafting and prosecution of patent specifications. Naleesha has
        also worked in-house as an IP Engineer for a global medical devices
        company.
      </p>

      <p>
        Outside of the office, Naleesha enjoys coastal walks, good food,
        travelling and catching up with friends.
      </p>

      <h3>Attorney Snapshot</h3>

      <ul class="text-left">
        <li>Medical technology/devices</li>
        <li>Biomedical engineering</li>
        <li>Implants and prostheses</li>
        <li>Cardiovascular devices</li>
        <li>Orthopaedic implants</li>
        <li>Implant interface technology</li>
        <li>Mechanical engineering</li>
      </ul>
    </Layout>
  )
}
