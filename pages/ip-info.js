import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function IpInfo() {
  const data = [{ title: 'IP Info', link: '' }]
  return (
    <Layout navData={data} active={"Articles"}>
      <Head>
        <title>
          IP Info | Intellectual Property Information & Tools | Baxter IP
        </title>
        <meta
          name="description"
          content="A collection of intellectual property information, tools and resources provided by Baxter IP, Patent & Trade Mark Attorneys."
        />{' '}
        <link rel="canonical" href="https://www.baxterip.com.au/ip-info" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BF%A1%E6%81%AF"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Intellectual Property Information & Tools</h1>

      <h2>Frequently Asked Questions</h2>

      <p>
        Check out our{' '}
        <Link
          title="Patent Attorney FAQ"
          href="https://www.baxterip.com.au/ip-info/faqs"
        >
          IP Attorney FAQs here
        </Link>
        . If you can&apos;t find the answer to your question/s, send us an email
        at <Link href="mailto:mail@baxterip.com.au">mail@baxterip.com.au</Link>{' '}
        or call us at <Link href="tel:+61292646716">+61 2 9264 6716</Link> and
        we&apos;ll try our best to answer your question/s.
      </p>

      <hr />

      <h2>IP Glossary</h2>

      <p>
        Confused by intellectual property jargon? We&apos;ve created this handy
        intellectual property glossary to provide definitions for some of the
        more complex intellectual property related terms. View our{' '}
        <Link
          title="Intellectual Property Glossary"
          href="https://www.baxterip.com.au/ip-glossary"
        >
          IP Glossary here
        </Link>
        .
      </p>

      <hr />

      <h2>IP Process Flowcharts</h2>

      <p>
        View our{' '}
        <Link href="https://www.baxterip.com.au/patent-process-flowcharts">
          patent process flowcharts
        </Link>{' '}
        and{' '}
        <Link href="https://www.baxterip.com.au/trade-mark-process-flowcharts">
          trade mark process flowcharts
        </Link>{' '}
        for your reference. Flowcharts in this page are for illustrative
        purposes alone and may only indicate some of the steps associated with
        the relevant procedure/s.
      </p>
    </Layout>
  )
}
