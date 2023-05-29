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
        <title>
          Dr Richard Grant - Senior Patent Attorney | Baxter IP Sydney
        </title>
        <meta
          name="description"
          content="Dr Richard Grant is a Sydney patent attorney specialising in drafting and filing chemical and pharmaceutical patents, such as nanotechnology and polymers."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/sydney/richard-grant"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/dr-richard-grant"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E7%90%86%E6%9F%A5%E5%BE%B7%E6%A0%BC%E5%85%B0%E7%89%B9%E5%8D%9A%E5%A3%AB"
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
                Dr Richard Grant
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Dr Richard Grant</h1>
      <p>Senior Patent Attorney</p>
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
        </div>
      </div>
      <Image
        loader={myLoader}
        src="/team/header-richard-grant.jpg"
        alt="Dr Richard Grant"
        title="Dr Richard Grant"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          It is important when preparing patent applications to listen to the
          client closely. It&rsquo;s very easy to think that you understand what
          the client is saying when, in fact, they mean something subtly
          different. Drafting a patent specification involves reflecting the
          inventor&rsquo;s new technology faithfully, as well as balancing the
          sometimes conflicting requirements of multiple jurisdictions and
          anticipating possible issues that may be raised by the Patent Office
          or a third party.
        </blockquote>
        <cite>&ndash; Dr Richard Grant - Senior Patent Attorney</cite>
      </div>
      <br />
      <p>
        Richard has a PhD in organic chemistry and spent 20 years working as a
        researcher in the academic sphere and at CSIRO, and as a
        researcher/research manager in industry. His industrial experience spans
        both small start-up companies and large multinationals. He has been a
        designated inventor on several patent applications arising from that
        research.
      </p>

      <p>
        He also has around 16 years experience as a patent attorney, most
        recently as a principal of a prominent Australian firm. He has worked on
        a wide range of chemical inventions spanning organic synthesis,
        pharmaceuticals, nanotechnology, polymer synthesis and processing,
        polymer composites, solar energy, carbon sequestration, graphene
        synthesis, sensor technology and others. Richard has drafted several
        hundred patent applications and successfully prosecuted many of these
        through to granted patents, both locally and in foreign jurisdictions.
        He has also provided opinions on patentability and infringement, and
        strategic advice for management of patent portfolios.
      </p>

      <p>
        Richard has worked with sole inventors, SMEs, universities, government
        laboratories and major multinationals to achieve their IP goals. He
        particularly enjoys working with local clients, where he has more scope
        to work directly with inventors and to provide strategic advice so as to
        promote clients&rsquo; commercial objectives. Having worked extensively
        both as a researcher and as an attorney, Richard understands the
        patenting process from both angles, enabling him to provide clear and
        realistic advice to clients.
      </p>

      <h2>Attorney snapshot</h2>

      <ul>
        <li>BSc (Hons)</li>
        <li>PhD (Organic Chemistry)</li>
        <li>Diploma of Imperial College</li>
        <li>MBA (Technology Management)</li>
        <li>MIP</li>
        <li>Registered Australian/New Zealand Patent Attorney</li>
        <li>
          Fellow,{' '}
          <Link href="https://www.raci.org.au/">
            Royal Australian Chemical Institute
          </Link>
        </li>
        <li>
          Fellow,{' '}
          <Link href="https://ipta.org.au/">
            Institute of Patent and Trade Mark Attorneys of Australia
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
