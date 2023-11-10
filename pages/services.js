import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Services() {
  const data = [{ title: 'Services', link: '' }]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>
          Patent and Trade Mark Services | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Baxter IP provides intellectual property services including patent services, trade mark services, registered designs and other IP services."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/services" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/services"
          hreflang="en-AU"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/services"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%9C%8D%E5%8A%A1"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Patent and Trade Mark Services</h1>
      <p>
        Baxter IP, Patent and Trade Mark Attorneys provide a host of IP
        services, including patent services and trade mark services, to grow and
        maintain your IP portfolio.
      </p>

      <ol type="I">
        <li>
          <Link href="/patents" className="no-underline hover:underline">
            Patent Services
          </Link>
          <ol>
            <li>
              <Link
                title="How To Patent"
                href="/how-to-patent"
                className="no-underline hover:underline"
              >
                How to Patent
              </Link>
              <ul>
                <li>
                  <Link
                    href="/provisional-patents"
                    className="no-underline hover:underline"
                  >
                    Stage 1: Provisional Patent Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/international-type-search"
                    className="no-underline hover:underline"
                  >
                    Stage 2: International-Type Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pct-patent"
                    className="no-underline hover:underline"
                  >
                    Stage 3: PCT International Patent Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/national-phase-patent"
                    className="no-underline hover:underline"
                  >
                    Stage 4: National Patent Applications
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/patent-search"
                className="no-underline hover:underline"
              >
                Patent Search
              </Link>
              <ul>
                <li>
                  <Link
                    href="/international-patent-search"
                    className="no-underline hover:underline"
                  >
                    International Patent Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/international-type-search"
                    className="no-underline hover:underline"
                  >
                    International-Type Patent Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/australian-patent-search"
                    className="no-underline hover:underline"
                  >
                    Australian Patent Search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/freedom-to-operate-search"
                    className="no-underline hover:underline"
                  >
                    Freedom-to-Operate Patent Search
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/specialisations"
                className="no-underline hover:underline"
              >
                Patent Specialisations
              </Link>
              <ul>
                <li>
                  <Link
                    href="/specialisations/software-patents"
                    className="no-underline hover:underline"
                  >
                    Software Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/fintech-patents"
                    className="no-underline hover:underline"
                  >
                    Fintech Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/electrical-engineering-patents"
                    className="no-underline hover:underline"
                  >
                    Electrical Engineering &amp; Electronics Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/mechanical-patents"
                    className="no-underline hover:underline"
                  >
                    Mechanical Engineering &amp; Mining Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/consumer-product-patents"
                    className="no-underline hover:underline"
                  >
                    Consumer Product Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/construction-patents"
                    className="no-underline hover:underline"
                  >
                    Civil Engineering &amp; Construction Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/pharmaceutical-patents"
                    className="no-underline hover:underline"
                  >
                    Chemical, Biotech &amp; Pharmaceutical Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/medical-patents"
                    className="no-underline hover:underline"
                  >
                    Medical Device Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialisations/physics-and-optical-patents"
                    className="no-underline hover:underline"
                  >
                    Physics &amp; Optical Engineering Patents
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/patent-oppositions-disputes"
                className="no-underline hover:underline"
              >
                Patent Oppositions &amp; Disputes
              </Link>
              <ul>
                <li>
                  <Link
                    href="/patent-opposition"
                    className="no-underline hover:underline"
                  >
                    Patent Opposition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/patent-litigation"
                    className="no-underline hover:underline"
                  >
                    Patent Litigation
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/ip-strategy"
                className="no-underline hover:underline"
              >
                IP Strategy
              </Link>
              <ul>
                <li>
                  <Link
                    href="/ip-audit"
                    className="no-underline hover:underline"
                  >
                    IP Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://forms.gle/jePubTXWyKn88L8v5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                  >
                    IP Due Diligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ip-valuation"
                    className="no-underline hover:underline"
                  >
                    IP Valuation
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/registered-designs"
                className="no-underline hover:underline"
              >
                Registered Design Application
              </Link>
              <ul>
                <li>
                  <Link
                    href="/design-disputes"
                    className="no-underline hover:underline"
                  >
                    Design Disputes
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              Other Patent Services
              <ul>
                <li>
                  <Link
                    href="/innovation-patent-application"
                    className="no-underline hover:underline"
                  >
                    Innovation Patents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/patent-costs"
                    className="no-underline hover:underline"
                  >
                    Patent Costs
                  </Link>
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <Link
            title="How To Trade Mark"
            href="/trade-marks"
            className="no-underline hover:underline"
          >
            Trade Mark Services
          </Link>
          <ol>
            <li>
              <Link
                title="How To Trade Mark"
                href="/how-to-trade-mark"
                className="no-underline hover:underline"
              >
                How to Trade Mark
              </Link>
              <ul>
                <li>
                  <Link
                    href="/trade-mark-application"
                    className="no-underline hover:underline"
                  >
                    Australian trade mark applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/international-trade-mark-application"
                    className="no-underline hover:underline"
                  >
                    International trade mark applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-mark-pre-filing-considerations"
                    className="no-underline hover:underline"
                  >
                    Trade mark preparation
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/trade-mark-registration-process"
                className="no-underline hover:underline"
              >
                Registration Process
              </Link>
              <ul>
                <li>
                  <Link
                    href="/trade-mark-search"
                    className="no-underline hover:underline"
                  >
                    Trade mark searches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-mark-examination"
                    className="no-underline hover:underline"
                  >
                    Trade mark examination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-mark-acceptance"
                    className="no-underline hover:underline"
                  >
                    Acceptance of a trade mark application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publication-of-trade-mark-details"
                    className="no-underline hover:underline"
                  >
                    Publication of your trade mark details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/madrid-protocol-application"
                    className="no-underline hover:underline"
                  >
                    Filing a Madrid Protocol application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/international-trade-mark-management"
                    className="no-underline hover:underline"
                  >
                    Managing and renewing your international trade mark
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/trade-mark-oppositions-disputes"
                className="no-underline hover:underline"
              >
                Oppositions &amp; Disputes
              </Link>
              <ul>
                <li>
                  <Link
                    href="/trade-mark-opposition"
                    className="no-underline hover:underline"
                  >
                    Trade mark oppositions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-mark-disputes"
                    className="no-underline hover:underline"
                  >
                    Trade mark disputes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-mark-infringement"
                    className="no-underline hover:underline"
                  >
                    Trade mark infringement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trade-mark-enforcement-options"
                    className="no-underline hover:underline"
                  >
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
