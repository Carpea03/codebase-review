import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function WarrenChandler() {
  return (
    <Layout>
      <Head>
        <title>
          Warren Chandler - Senior Associate, Patent & Trade Mark Attorney |
          Baxter IP
        </title>
        <meta
          name="description"
          content="Warren Chandler is a Melbourne IP attorney specialising in engineering, chemical patents, biotechnology, and pharmaceutical patent applications."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/warren-chandler"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/warren-chandler"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E6%B2%83%E4%BC%A6%E9%92%B1%E5%BE%B7%E5%8B%92"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/melbourne/warren-chandler"
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
                Warren Chandler
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Warren Chandler</h1>
      <p>Senior Associate, Patent & Trade Mark Attorney</p>
      <div className="text-sm">
        <Link href="mailto:warren.chandler@baxterip.com.au" className="text-xs">
          warren.chandler@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61390203143">+61 3 9020 3143</Link>
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
              src="/expertise/Pharmaceutical.svg"
              alt="Pharmaceutical / Biochemistry / Vet Science icon"
              title="Pharmaceutical / Biochemistry / Vet Science"
              width="40"
              height="40"
            />
            <div>Pharmaceutical / Biochemistry / Vet Science</div>
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
        src="/team/header-warren-chandler.jpg"
        alt="Warren Chandler"
        title="Warren Chandler"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          I care about people and their business goals. So whilst I consider
          client instructions carefully, I always look to make recommendations
          that are practical, commercially strategic, and that add value.
        </blockquote>
        <cite>
          &ndash;Warren Chandler - Senior Associate, Patent & Trade Mark
          Attorney
        </cite>
      </div>
      <br />

      <p>
        When you&rsquo;ve excelled in a particular field for 30 years, you build
        a name for yourself. When that area of excellence is mastering a
        scientific approach to IP strategy, you also earn the admiration of both
        colleagues and clients. But for Warren Chandler, it&rsquo;s only ever
        been about creating strong intellectual property assets for his clients.
      </p>

      <p>
        The claim &lsquo;attention to detail&rsquo; tends to be used far too
        liberally – but Warren&rsquo;s appetite for detail can be seen in his
        comprehensive assessments of client&rsquo;s commercial IP strategies,
        and it&rsquo;s something that delivers literal and measurable results.
        Several Australian companies that Warren has advised from start-up stage
        have now emerged as large, well-known commercial enterprises with strong
        intellectual property assets. This is where Warren, and by extension,
        his clients are well served by his 24 years&rsquo; experience as a
        patent attorney in chemical engineering.
      </p>

      <p>
        Warren worked across a broad spectrum of disciplines during the course
        of a 7-year tenure at the{' '}
        <Link
          href="https://www.csiro.au/"
          target="_blank"
          rel="noopener noreferrer">
          CSIRO
        </Link>
        . Fields as diverse as radical polymerisation of diallylamine monomers
        (at the division of applied organic chemistry) to chemical engineering,
        and controlled release of veterinary pharmaceuticals (at the division of
        Animal Production) were traversed during this time. With the dawn of the
        90s, Warren registered as a patent attorney, commencing in his area of
        speciality, applied chemistry and methods of treatment of diseased
        states in animals and humans.
      </p>

      <p>
        Warren&rsquo;s modus operandum has always put client service and quality
        first. Warren&rsquo;s reward? The satisfaction of a raft of listed and
        private companies whose businesses have significantly increased in value
        as a result of his assistance as their patent attorney.
      </p>

      <p>
        A patient man, known for his tenacity, Warren has never lost a staring
        competition with his home-brewed beer and produces a brave if not
        aggressive drop for the private collection.
      </p>

      <h3>Attorney Snapshot</h3>

      <ul class="text-left">
        <li>
          24 years&rsquo; experience as a patent attorney in private practice
          and at{' '}
          <Link
            href="https://www.ipaustralia.gov.au/"
            target="_blank"
            rel="noopener noreferrer">
            IP Australia
          </Link>
        </li>
        <li>Extensive patent oppositions and litigation experience</li>
        <li>
          Succeeded in a patent opposition matter for a pharmaceutical company
          against multi-national – the multi-national acquired the business of
          Warren&rsquo;s client due to strength of its IP
        </li>
        <li>
          Patents Examiner at IP Australia for 8 years in the fields of applied
          chemistry and pharmaceuticals
        </li>
        <li>
          7 years at CSIRO – Applied Organic Chemistry and Animal Production
          divisions
        </li>
        <li>
          Fellow of{' '}
          <Link
            href="https://ipta.org.au/"
            target="_blank"
            rel="noopener noreferrer">
            Institute of Patent &amp; Trade Mark Attorneys Australia
          </Link>
        </li>
        <li>
          Member of the{' '}
          <Link
            href="https://www.raci.org.au/"
            target="_blank"
            rel="noopener noreferrer">
            Royal Australian Chemical Institute
          </Link>
        </li>
        <li>BAppSc (Applied Chemistry), MAppSc (Applied Chemistry)</li>
        <li>Chemical engineering patent attorney specialist</li>
      </ul>
    </Layout>
  )
}
