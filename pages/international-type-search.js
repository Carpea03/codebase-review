import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function InternationalTypeSearch() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Patents', link: '/patents' },
    { title: 'How to patent', link: '/how-to-patent' },
    { title: 'Stage 2: International-type patent search', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>International-type search | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Conducting an international-type search on provisional patent applications can be used to cost-effectively review the novelty of the patent claims."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/international-type-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%96%B0%E9%A2%96%E6%80%A7%E6%A3%80%E7%B4%A2"
          hreflang="zh"
        />
      </Head>
      <div className='mt-10'></div>
      <h1>Stage 2: International-type patent search</h1>
      <p>
        IP Australia offers a highly cost effective option for an international
        patent search called an &ldquo;international-type search&rdquo;.
      </p>
      <p>
        We would almost always recommend you have an international patent search
        carried out if you have had a patent attorney file a{' '}
        <Link
          title="File a Provisional Patent Application"
          href="/provisional-patents"
        >
          provisional patent application
        </Link>{' '}
        for you recently, except in circumstances where you have commissioned a
        detailed{' '}
        <Link title="Patent Novelty Searches" href="/international-type-search">
          patent novelty search
        </Link>{' '}
        prior to filing.
      </p>
      <p>
        An international-type search typically takes IP Australia about 6
        &ndash; 8 weeks to complete then you should allow your patent attorney
        time to conduct the review of the search results. It is easy to take an
        overly negative view of patent search results if they are received
        without a review from your patent attorney. A{' '}
        <Link
          title="Patent Attorneys Sydney &amp; Melbourne"
          href="/patent-attorney"
        >
          patent attorney
        </Link>{' '}
        will quickly recognise in the results:
      </p>
      <ul>
        <li>
          any&nbsp;
          <Link
            title=""
            href="/ip-glossary#prior-art"
            data-toggle="tooltip"
            data-placement="bottom"
            data-original-title="Information which is in the public domain and hence not patentable."
          >
            prior art
          </Link>{' '}
          that was incorrectly identified by the searcher; and
        </li>
        <li>
          how your patent claims can be reworded to circumvent the search
          results.
        </li>
      </ul>
      <p>
        The bottom line &ndash; if the search results look similar to your new
        idea, don&apos;t despair! Speak to an{' '}
        <Link
          title="Patent Attorneys Sydney &amp; Melbourne"
          href="/patent-attorney"
        >
          Australian patent attorney
        </Link>{' '}
        about the patent search results as the result and your options may well
        be different to how you initially perceive it.
      </p>
    </Layout>
  )
}
