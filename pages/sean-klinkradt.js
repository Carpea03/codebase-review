import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>
          Dr Seán Klinkradt - Senior Associate, Patent Attorney | Baxter IP
          Melbourne
        </title>
        <meta
          name="description"
          content="Dr Seán Klinkradt is a Melbourne patent attorney specialising in biotechnology, medical devices, industrial processes and chemistry."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/melbourne/sean-klinkradt"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/dr-sean-klinkradt"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E8%82%96%E6%81%A9%E5%85%8B%E6%9E%97%E5%85%8B%E6%8B%89%E5%BE%B7"
          hrefLang="zh"
        />
      </Head>
      <nav
        className="flex !pl-0"
        aria-label="Breadcrumb">
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
              href="/ip-attorney"
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
                Dr Seán Klinkradt
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Dr Seán Klinkradt</h1>
      <p>Senior Associate, Patent Attorney</p>
      <div className="text-sm">
        <Link
          href="mailto:sean.klinkradt@baxterip.com.au"
          className="text-xs">
          sean.klinkradt@baxterip.com.au
        </Link>
        <br />
        <Link href="tel:+61386722977">+61 3 8672 2977</Link>
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
        </div>
      </div>
      <Image
        loader={myLoader}
        src="/team/header-sean-klinkradt.jpg"
        alt="Dr Seán Klinkradt"
        title="Dr Seán Klinkradt"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          Participating in a client&apos;s developing intellectual property
          portfolio is incredibly rewarding to me.
        </blockquote>
        <cite>
          &ndash;Dr Seán Klinkradt - Senior Associate, Patent Attorney
        </cite>
      </div>
      <br />

      <p>
        Seán is a registered Australian and New Zealand Patent Attorney and has
        more than 20 years of experience in IP. During his career, he has worked
        for major intellectual property firms in South Africa and Australia,
        where he gained experience in the fields of pharmaceuticals,
        biotechnology, medical devices, veterinary products, and chemical patent
        applications.
      </p>

      <p>
        Seán is particularly interested in the management of his clients&rsquo;
        intellectual property assets underpinned by a strong focus on the
        clients&rsquo; needs.
      </p>

      <p>
        Seán has been awarded degrees in science, law, and ancient cultures by
        the University of Port Elizabeth, UTS, Sydney, and Stellenbosch
        University.
      </p>

      <p>
        Seán completed a PhD in neuroscience at RMIT University, Melbourne. The
        focus of Seán&rsquo;s research related to the discovery and
        characterization of a new excitatory amino acid transporter in mouse and
        rat brain. This protein has been identified as a likely candidate for
        therapeutics for the treatment of numerous neurological diseases,
        neurodegenerative diseases, and neuropsychiatric diseases or disorders.
      </p>

      <p>
        Seán is a Fellow of the Institute of Patent and Trade Mark Attorneys of
        Australia and an Attorney of the High Court of South Africa.
      </p>

      <p>
        Seán lectures intellectual property and medical subjects at several
        universities. He enjoys reading widely and has a particular interest in
        literature of the ancient world and philosophy.
      </p>

      <p>
        Whenever possible, Seán enjoys heading out with the dogs to spend time
        with the horses.
      </p>

      <h2>Attorney snapshot</h2>

      <ul>
        <li>BSc (Biochemistry and Zoology)</li>
        <li>BSc (Hons) (Biochemistry)</li>
        <li>BJuris (Law subjects, Latin, English, and Afrikaans)</li>
        <li>
          MSc (Biochemistry: Research degree focused on the enzymology and
          protein chemistry of the proteasome)
        </li>
        <li>LLB (Law subjects, postgraduate award – equivalent of JD)</li>
        <li>
          Master of Industrial Property (Patent Law, Trade Mark Law, and Design
          Law)
        </li>
        <li>BPhil (Ancient Cultures of the Near East and Mediterranean)</li>
        <li>PhD (Neuroscience)</li>
        <li>
          Registered Trans-Tasman Patent Attorney (Australia and New Zealand)
        </li>
        <li>Attorney of the High Court, South Africa</li>
        <li>Fellow of the Institute of Patent and Trade Mark Attorneys</li>
        <li>
          25 years&rsquo; experience in intellectual property law at top tier
          firms in Australia and South Africa
        </li>
      </ul>
    </Layout>
  )
}
