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
          Dr John Baxter - Senior Commercial Counsel | Baxter IP Sydney
        </title>
        <meta
          name="description"
          content="Dr John Baxter is one of Australia&rsquo;s most highly regarded patent licensing experts and has worked in the field for more than 40 years."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/sydney/dr-john-baxter"
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
                  Commercial Counsel
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
                Dr John Baxter
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Dr John Baxter</h1>
      <p>Senior Commercial Counsel</p>
      <Image
        loader={myLoader}
        src="/team/header-john-baxter.jpg"
        alt="Dr John Baxter"
        title="Dr John Baxter"
        width="1200"
        height="600"
        className="!w-full"
      />
      <div>
        <blockquote>
          Upholding the highest standard of business ethics and ensuring our
          advice always serves the best interests of our clients. This is our
          guiding principle and our legacy.
        </blockquote>
        <cite>&ndash;Dr John Baxter - Senior Commercial Counsel</cite>
      </div>
      <br />

      <p>
        John Baxter commenced working for the Australian inventor Arthur Bishop
        in 1977, while completing his PhD studies in Mechanical Engineering in
        the field of vehicle dynamics at UNSW. Arthur Bishop&rsquo;s invention
        and IP commercialisation business was subsequently corporatised as the
        Bishop Technology Group Limited in 1985.
      </p>

      <p>
        John&rsquo;s 33 year career at Bishop involved all aspects of product
        and process R&amp;D, IP management, marketing of automotive steering
        technology and international IP licensing. As part of his
        responsibilities at Bishop, John managed various product R&amp;D teams
        working in automotive hydraulic power steering, IC engine, advanced
        sensors and electric power steering, vehicle motorsport steering, and
        vehicle dynamics development.
      </p>

      <p>
        In parallel with this R&amp;D role, John also had responsibility for
        Bishop&rsquo;s international patent portfolio of over 350 patents and
        patent applications, including the writing, filing, prosecution,
        maintenance and&nbsp;
        <Link href="https://www.baxterip.com.au/patent-litigation">
          IP litigation
        </Link>
        . John was the inventor or co-inventor for many of Bishop&rsquo;s
        international patent families, and has authored and co-authored numerous
        published technical papers in the field of automotive steering and the
        related field of vehicle dynamics.
      </p>

      <p>
        John was a member of the Australian Government&rsquo;s Advisory Council
        on Industrial Property (ACIP) for IP Australia for the period 1994 –
        2000.
      </p>

      <p>
        John left Bishop at the end of 2009 and is now a Commercial Counsel at
        Baxter IP, specialising in IP commercialisation and, in particular, the
        structuring of patents and licence agreements to maximise the commercial
        value of the IP.
      </p>

      <p>
        John is a Fellow of the{' '}
        <Link
          href="https://www.atse.org.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Australian Academy of Technology and Engineering
        </Link>{' '}
        (ATSE) and of the{' '}
        <Link
          href="http://www.saea.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Society of Automotive Engineers Australasia
        </Link>{' '}
        (SAE-A), and is an Honorary Fellow of{' '}
        <Link
          href="https://www.engineersaustralia.org.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Engineers Australia
        </Link>
        .
      </p>

      <p>
        Since 2004, John has been a member of the Dean&rsquo;s Advisory
        Committee for the Faculty of Engineering at UNSW. Also from 2004 through
        to 2016 he was a director of Micreo Limited, an Australian defence
        microwave and photonics engineering company.
      </p>

      <p>
        John&rsquo;s recent engineering interests have involved the evolution of
        electric vehicles, and the architectural requirements of the electricity
        grid to enable charging of these vehicles, and the electrical
        integration with rooftop PV and stationary batteries. He is a member of
        the ATSE Energy Forum and assisted with ATSE&rsquo;s submission to the
        Energy White Paper in 2014 and the organisation of ATSE&rsquo;s
        “Intelligent Grids” Symposium in Sydney in May 2015, its “Beyond Coal –
        What Will Power NSW?” Symposium in Sydney in November 2016, and its “The
        NEM Post-Finkel” Symposium held in Sydney in November 2017.
      </p>
    </Layout>
  )
}
