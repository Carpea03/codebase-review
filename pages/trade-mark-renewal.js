import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkRenewal() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'How to Trade Mark',
      link: '/how-to-trade-mark',
    },
    { title: 'Trade Mark Renewal', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Renewing your Trade Mark Application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Trade mark renewal is part of keeping your trade mark in force indefinitely, so long as the trade mark continues to be used as a trade mark."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-renewal"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Renewing your Trade Mark Application</h1>
      <p>
        After registration, a registered trade mark is in force for 10 years. At
        the 10 year mark, the trade mark owner can then opt to keep the trade
        mark active by paying the appropriate renewal fees. The trade mark
        renewal can be done every 10 years from the date of filing, indefinitely
        so long as the trade mark continues to be used as a trade mark.
      </p>
      <h2>When can the registration be renewed?</h2>
      <p>
        Renewal of trade mark registration can be conducted as early as 12
        months before the renewal due date. You can still renew up to six months
        past the trade mark renewal date in Australia. However, additional fees
        for extension will be added to the renewal fees. Your trade mark
        attorney can help prevent any additional fees being incurred or lapsing
        of the registration by sending you timely reminders before a renewal is
        due.
      </p>
      <p>
        After payment of the appropriate renewal fees, your trade mark attorney
        will notify you that the trade mark registration has been successfully
        renewed.
      </p>
      <h2>Consequences of non-renewal</h2>
      <p>
        Failure to renew a trade mark by the expiry date means that the trade
        mark will lose any rights and will be labeled lapsed. However,
        registration can be renewed within a six-month period after the renewal
        date. When this period has elapsed, the trade mark will be deleted from
        the Australian Trade Marks Register. Unless you can successfully get an
        extension of time, you may need to lodge a new application for the trade
        mark. Your trade mark attorney can advise you of your options should you
        miss a renewal deadline.
      </p>
      <p>
        If your business has been actively gaining goodwill associated with the
        trade mark, a lapsed trade mark opens up a window for opportunistic{' '}
        <Link href="/trade-mark-application">trade mark filings</Link> by any
        competitors for a similar or identical trade mark in respect of the same{' '}
        <Link href="/classes-of-goods-and-services">goods and classes</Link>.
        Therefore, it is in your best interest to stay informed of the important
        dates in your trade mark&apos;s timeline and to keep your registration
        up to date. The{' '}
        <Link href="/trade-mark-attorney">trade mark attorneys</Link> at Baxter
        IP will be able to help you manage your trade mark registration.
      </p>
    </Layout>
  )
}
