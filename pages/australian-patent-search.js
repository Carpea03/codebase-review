import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function AustralianPatentSearch() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Patent Search', link: '/patent-search' },
    { title: 'Australian Patent Search', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Australian Patent Search | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Australian patent search often takes the form of freedom-to operate search to see whether a company has freedom-to-operate in Australia."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/australian-patent-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-patent-search"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10">
        <h1>Australian Patent Search</h1>
        <p>
          Compared with many other countries, a patent search in Australia is
          relatively straightforward because IP Australia offers a sophisticated
          patent database and patent search system to the general public –
          called AusPat. AusPat covers Australian patent records right back to
          1904.
        </p>
        <p>
          Australian patent searches can be carried out by patent number,
          applicant name, inventor name and many other more sophisticated
          methodologies. Generally speaking, if you need to find a patent or{' '}
          <Link
            title="File a Provisional Patent Application"
            href="https://www.baxterip.com.au/provisional-patents"
          >
            patent application
          </Link>{' '}
          on the basis of a name, it is best to have an{' '}
          <Link
            title="Patent Attorneys Sydney &amp; Melbourne"
            href="https://www.baxterip.com.au/patent-attorney"
          >
            Australian patent attorney
          </Link>{' '}
          carry out your Australian patent search because a few strategies need
          to be applied to identify the right entity and not miss relevant
          search results.
        </p>
        <p>
          If you are trying to determine whether your new idea is patentable in
          Australia, ironically, an Australian patent search is probably not
          going to give you the correct answer. The reason for this is that for
          a new idea to be patentable, it must be novel in light of all
          published documents worldwide, and not just in Australia.{' '}
          <Link
            title="Worldwide Patent Novelty Search"
            href="https://www.baxterip.com.au/international-patent-search"
          >
            For information on worldwide novelty searches, please click here
          </Link>
          .
        </p>
      </div>
    </Layout>
  )
}
