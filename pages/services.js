import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>
          Patent services and trade mark services | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Baxter IP provides intellectual property services including patent services, trade mark services, registered designs and other IP services."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/services" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%9C%8D%E5%8A%A1"
          hreflang="zh"
        />
      </Head>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link
              href="#"
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
                Services
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Services</h1>
      <p>
        Baxter IP, Patent and Trade Mark Attorneys provide a host of IP
        services, including patent services and trade mark services, to grow and
        maintain your IP portfolio.
      </p>

      <ol type="I">
        <li>
          <Link href="/patents">Patent Services</Link>
          <ol>
            <li>
              <Link title="How To Patent" href="/how-to-patent">
                How to Patent
              </Link>
              <ul>
                <li>
                  <Link href="/provisional-patents">
                    Stage 1: Provisional Patent Applications
                  </Link>
                </li>
                <li>
                  <Link href="/international-type-search">
                    Stage 2: International-Type Search
                  </Link>
                </li>
                <li>
                  <Link href="/pct-patent">
                    Stage 3: PCT International Patent Applications
                  </Link>
                </li>
                <li>
                  <Link href="/national-phase-patent">
                    Stage 4: National Patent Applications
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/patent-search">Patent Search</Link>
              <ul>
                <li>
                  <Link href="/international-patent-search">
                    International Patent Search
                  </Link>
                </li>
                <li>
                  <Link href="/international-type-search">
                    International-Type Patent Search
                  </Link>
                </li>
                <li>
                  <Link href="/australian-patent-search">
                    Australian Patent Search
                  </Link>
                </li>
                <li>
                  <Link href="/freedom-to-operate-search">
                    Freedom-to-Operate Patent Search
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/specialisations">Patent Specialisations</Link>
              <ul>
                <li>
                  <Link href="/specialisations/software-patents">
                    Software Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/fintech-patents">
                    Fintech Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/electrical-engineering-patents">
                    Electrical Engineering &amp; Electronics Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/mechanical-patents">
                    Mechanical Engineering &amp; Mining Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/consumer-product-patents">
                    Consumer Product Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/construction-patents">
                    Civil Engineering &amp; Construction Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/pharmaceutical-patents">
                    Chemical, Biotech &amp; Pharmaceutical Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/medical-patents">
                    Medical Device Patents
                  </Link>
                </li>
                <li>
                  <Link href="/specialisations/physics-and-optical-patents">
                    Physics &amp; Optical Engineering Patents
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/patent-oppositions-disputes">
                Patent Oppositions &amp; Disputes
              </Link>
              <ul>
                <li>
                  <Link href="/patent-opposition">Patent Opposition</Link>
                </li>
                <li>
                  <Link href="/patent-litigation">Patent Litigation</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/ip-strategy">IP Strategy</Link>
              <ul>
                <li>
                  <Link href="/ip-audit">IP Audit</Link>
                </li>
                <li>
                  <Link
                    href="https://forms.gle/jePubTXWyKn88L8v5"
                    target="_blank"
                    rel="noopener noreferrer">
                    IP Due Diligence
                  </Link>
                </li>
                <li>
                  <Link href="/ip-valuation">IP Valuation</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/registered-designs">
                Registered Design Application
              </Link>
              <ul>
                <li>
                  <Link href="/design-disputes">Design Disputes</Link>
                </li>
              </ul>
            </li>
            <li>
              Other Patent Services
              <ul>
                <li>
                  <Link href="/innovation-patent-application">
                    Innovation Patents
                  </Link>
                </li>
                <li>
                  <Link href="/patent-costs">Patent Costs</Link>
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <Link title="How To Trade Mark" href="/trade-marks">
            Trade Mark Services
          </Link>
          <ol>
            <li>
              <Link title="How To Trade Mark" href="/how-to-trade-mark">
                How to Trade Mark
              </Link>
              <ul>
                <li>
                  <Link href="/trade-mark-application">
                    Australian trade mark applications
                  </Link>
                </li>
                <li>
                  <Link href="/international-trade-mark-application">
                    International trade mark applications
                  </Link>
                </li>
                <li>
                  <Link href="/trade-mark-pre-filing-considerations">
                    Trade mark preparation
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/trade-mark-registration-process">
                Registration Process
              </Link>
              <ul>
                <li>
                  <Link href="/trade-mark-search">Trade mark searches</Link>
                </li>
                <li>
                  <Link href="/trade-mark-examination">
                    Trade mark examination
                  </Link>
                </li>
                <li>
                  <Link href="/trade-mark-acceptance">
                    Acceptance of a trade mark application
                  </Link>
                </li>
                <li>
                  <Link href="/publication-of-trade-mark-details">
                    Publication of your trade mark details
                  </Link>
                </li>
                <li>
                  <Link href="/madrid-protocol-application">
                    Filing a Madrid Protocol application
                  </Link>
                </li>
                <li>
                  <Link href="/international-trade-mark-management">
                    Managing and renewing your international trade mark
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/trade-mark-oppositions-disputes">
                Oppositions &amp; Disputes
              </Link>
              <ul>
                <li>
                  <Link href="/trade-mark-opposition">
                    Trade mark oppositions
                  </Link>
                </li>
                <li>
                  <Link href="/trade-mark-disputes">Trade mark disputes</Link>
                </li>
                <li>
                  <Link href="/trade-mark-infringement">
                    Trade mark infringement
                  </Link>
                </li>
                <li>
                  <Link href="/trade-mark-enforcement-options">
                    Trade mark enforcement options
                  </Link>
                </li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  )
}
