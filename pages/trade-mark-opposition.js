import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function TradeMarkOpposition() {
  return (
    <Layout>
      <Head>
        <title>Trade mark opposition | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="The trade mark opposition procedure can be undertaken to oppose or challenge the registration of an accepted trade mark application."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-opposition"
        />
      </Head>
      <nav className="flex overflow-x-auto not-format" aria-label="Breadcrumb">
        <ol className="inline-flex items-center mt-4 mb-4 space-x-1 md:space-x-3 list-none pm-25 whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              href="#"
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
          <li>
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
              <Link
                href="/services"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Services
              </Link>
            </div>
          </li>
          <li>
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
              <Link
                href="/trade-mark-oppositions-disputes"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Trade mark oppositions & disputes
              </Link>
            </div>
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
                Trade mark opposition
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Trade mark opposition</h1>
      <p>
        Trade mark opposition is a means of challenging an accepted{' '}
        <Link href="/trade-mark-application">trade mark application</Link>. Any
        third person can file an opposition to trade mark application within 2
        months from the date of its publication. An opposition to registration
        of a trade mark must be filed based of one or more of the{' '}
        <Link href="/grounds-for-trade-mark-opposition">
          grounds of opposition
        </Link>{' '}
        as provided in sections 57 to 62A of the <em>Trade Marks Act 1995</em>.
      </p>
      <figure>
        <Link href="/charts/Flowchart-H-Trade-Mark-Opposition-Procedure-Desktop.png">
          <Image
            loader={myLoader}
            src="/charts/Flowchart-H-Trade-Mark-Opposition-Procedure-Desktop-1024x313.png"
            alt="Trade Mark Opposition Procedure"
            width="1024"
            height="313"
          />
        </Link>
        <figcaption>Trade Mark Opposition Procedure</figcaption>
      </figure>
      <h3>Notice of Intention to Oppose</h3>
      <p>
        A Notice of Intention to Oppose must be filed within two months from the
        date of an application being{' '}
        <Link href="/trade-mark-acceptance">accepted</Link> and{' '}
        <Link href="/publication-of-trade-mark-details">published</Link>. A
        Statement of Grounds and Particulars (SGP) must be submitted within one
        month after a notice is filed.
      </p>
      <h3>Notice of Intention to Defend</h3>
      <p>
        The Applicant will be forwarded the Notice of Intention to Oppose and
        Statement of Grounds and Particulars and given one month from the date
        of notification to file a Notice of Intention to Defend. If a Notice of
        Intention to Defend is not filed, the application will lapse and the
        opposition will be discontinued.
      </p>
      <h3>Evidence Stage</h3>
      <p>
        When the Applicant files a Notice of Intention to Defend, the opposition
        enters an evidence stage where both parties can submit their evidence
        and rebut the evidence filed by the other party.
      </p>
      <p>The evidence stage is broken down into three sub-stages:</p>
      <ol>
        <li>Evidence in Support &ndash; filed by the Opponent</li>
        <li>Evidence in Answer &ndash; filed by the Applicant</li>
        <li>Evidence in Reply &ndash; filed by the Opponent</li>
      </ol>
      <p>Evidence needs to be filed within prescribed time frames.</p>
      <h3>Hearings</h3>
      <p>
        A trade mark opposition hearing is the final step of an opposition
        proceeding and it will take place at the request of either party within
        1 month of the Evidence stage being finalised. Each party will have the
        opportunity of representing themselves or avail of the services of a
        trade mark attorney, lawyer or barrister and provide their submissions.
        A Hearing may proceed with the parties participating through a phone
        call, video conference or with their physical attendance.
      </p>
      <p>
        Once the Hearing Officer has considered the submissions and evidence
        filed in the matter, it will provide a written decision usually within 3
        months of the Hearing date and communicate it to the parties.
      </p>
      <p>
        It is also possible for a matter to be decided on the written record if
        neither party requests a Hearing.
      </p>
      <h4>Decision Stage</h4>
      <p>
        The Hearing Officer will issue a written decision after considering the
        evidence and submissions. Costs may be awarded to the winning party.
      </p>
      <p>
        Either party may file an appeal against the decision in the Federal
        Court or the Circuit Court within 21 days of the decision date.
      </p>
    </Layout>
  )
}
