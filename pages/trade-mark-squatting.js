import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function TradeMarkSquatting() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade marks',
      link: '/trade-marks',
    },
    {
      title: 'How to trade mark',
      link: '/how-to-trade-mark',
    },
    {
      title: 'Trade marks in other countries',
      link: '/trade-marks-in-other-countries',
    },
    { title: 'Trade mark squatting', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>Trade mark squatting | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Trade mark squatting is the act of registering a known trade mark for the purpose of selling the registered mark back to the original trade mark owner."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-squatting"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade mark squatting</h1>
      <p>
        Trade mark squatting or bad faith trade mark filing occurs when a party
        files and registers an original applicant&apos;s trade mark in a country
        where the trade mark is not yet registered in bad faith.
      </p>
      <p>
        The original applicant then potentially faces challenges in registering
        in the other country since the squatting party controls the rights to
        the trade mark. Squatting parties normally commit bad faith trade mark
        filing to gain control of the trade mark in a country with the aim of
        forcing the original applicant to purchase the trade mark back when the
        original applicant expands their business into that country.
      </p>
      <p>
        Trade mark squatting is a significant issue in countries like{' '}
        <Link href="/trade-marks-in-other-countries#china">China</Link> as a
        result of the differences in trade mark laws in different countries.
        Unlike Australia, China has a{' '}
        <Link href="/first-to-file-vs-first-to-use">first-to-file</Link> trade
        mark system, which means that the party who applies for a trade mark
        first, obtains the rights to the mark. The filer can enforce their
        rights to the trade mark and potentially sue the original owner in the
        foreign jurisdiction for{' '}
        <Link href="/trade-mark-infringement">infringement</Link>. Rights to the
        trade mark also means that the filer can request for customs officials
        to seize products manufactured for export by the original applicant that
        use the trade mark.
      </p>
      <h2>How to prevent trade mark squatting</h2>
      <p>
        Given the difficulty and costs involved in canceling an application
        after trade mark squatting has occurred, the best way to avoid any
        issues is to{' '}
        <Link href="/trade-marks-in-other-countries">
          file in all relevant jurisdictions
        </Link>{' '}
        as soon as possible, particularly in first-to-file jurisdictions.
        Ideally, companies should not only file their trade mark registrations
        in their home country but also{' '}
        <Link href="/international-trade-mark-application">
          apply for trade mark registration in key countries
        </Link>{' '}
        in which the trade mark will be used, as well as prospective
        jurisdictions under consideration for future business expansion.
      </p>
      <h3>
        An example of trade mark squatting: Qiaodan Sports &amp; Michael Jordan
      </h3>
      <p>
        Up until 2016, Qiaodan Sports was using a Chinese transliteration of
        Michael Jordan&apos;s name and a logo similar to that of Nike&apos;s
        well-known Air Jordan symbol as registered trade marks. They sold
        jerseys and footwear with the number 23, Jordan&apos;s famous basketball
        number, and the name &ldquo;chee-ow dahn&rdquo;, Jordan&apos;s name in
        Chinese. Jordan emphasised that the products were intentionally tricking
        customers into believing the former basketball player was associated
        with the company. It was ruled that the rights to these trade marks be
        revoked from Qiaodan Sports to protect Jordan&apos;s name and legacy.
      </p>
    </Layout>
  )
}
