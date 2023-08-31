import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function InternationalTradeMarkApplication() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Trade marks', link: '/trade-marks' },
    { title: 'How to trade mark', link: '/how-to-trade-mark' },
    { title: 'International trade mark application', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Applying for international trade marks | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="International trade mark applications can be filed by either filing in each country of interest or through the Madrid Protocol."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/international-trade-mark-application"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%9B%BD%E9%99%85%E5%95%86%E6%A0%87%E7%94%B3%E8%AF%B7"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Applying for an international trade mark</h1>
      <p>
        In order to protect your brand in other countries you have two main
        options:
      </p>
      <ol>
        <li>File a trade mark application in each country of interest</li>
        <li>
          File a Madrid Protocol international trade mark application through
          the <Link href="/madrid-system">Madrid System</Link>
        </li>
      </ol>
      <p>
        In order for the filing that you make to retain the original filing date
        of your{' '}
        <Link title="Australian Trademarks" href="/trade-mark-application">
          Australian trade mark application
        </Link>
        , the filing(s) whether via path 1 or 2 above must be made within 6
        months of the original filing date of your Australian trade mark
        application.
      </p>
      <h2>Madrid Protocol international trade mark application</h2>
      <p>
        A <Link href="/madrid-system">Madrid Protocol</Link> international trade
        mark application is a simpler and less expensive way of seeking trade
        mark protection overseas. Trade mark application through the Madrid
        Protocol offers and presents several advantages, such as:
      </p>
      <ul>
        <li>Only a single international trade mark application is required</li>
        <li>It is in one language</li>
        <li>It is filed through the Trade Marks Office of the home country</li>
        <li>
          Protection can be sought in one, some or all of the member countries
        </li>
        <li>Updates of ownership and renewals can be handled centrally</li>
      </ul>
      <h2>
        Direct trade marks vs. Madrid Protocol international trade mark
        application
      </h2>
      <p>
        There are some circumstances where filing a trade mark application
        directly in countries of interest may be a better option than filing a
        Madrid Protocol international trade mark application. Therefore, it is
        important to obtain the advice of a{' '}
        <Link
          title="Patent Attorneys Sydney &amp; Melbourne"
          href="/trade-mark-attorney"
        >
          trade mark attorney
        </Link>{' '}
        prior to seeking international trade mark protection.
      </p>
      <h2>About to file an international trade mark application?</h2>
      <p>
        If you would like advice on how to protect your brand whether in
        Australia or internationally, please send us a{' '}
        <Link title="Talk to an expert about your IP now" href="/contact">
          message
        </Link>
        .
      </p>
    </Layout>
  )
}
