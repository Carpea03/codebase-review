import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentSearch() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Patents', link: '/patents' },
    { title: 'How to patent', link: '/how-to-patent' },
    { title: 'Patent search', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>Patent search | Worldwide patent search | Baxter IP</title>
        <meta
          name="description"
          content="Baxter IP provides patent search, whether worldwide or in Australia to review patentability, novelty and freedom-to-operate."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Patent search</h1>
      <p>
        A patent search and searches of other technical literature is an
        important step in obtaining strategic international patent protection
        and minimising your patenting risks. Our patent searchers have at their
        disposal a variety of sophisticated databases and international patent
        search software, as well as many years of experience in these types of
        searches.
      </p>

      <h2>Worldwide patent searches</h2>

      <p>
        A worldwide patent search (international patent novelty search) can be
        carried out to provide you with an indication of whether your invention
        is new (novel). An invention must be both novel and include an inventive
        step to be patentable.{' '}
        <Link href="/international-patent-search">Read more…</Link>
      </p>

      <h2>Freedom-to-operate patent searches</h2>

      <p>
        A freedom-to-operate patent search, also known as an infringement patent
        search, is carried out to attempt to identify any granted patents that a
        product may infringe if sold, manufactured or used in the country where
        the patent has been granted.{' '}
        <Link href="/freedom-to-operate-search">Read more…</Link>
      </p>

      <h2>Australian patent searches</h2>

      <p>
        IP Australia maintains the AUSPAT patent database, which allows anyone
        to search Australian patent data. Our patent attorneys and patent
        searchers can carry out numerous types of Australian patent searches for
        you on this database, including patent number, patent applicant and
        inventor searches.{' '}
        <Link href="/australian-patent-search">Read more…</Link>
      </p>

      <h2>Other patent searches</h2>

      <p>
        Patent searching may be conducted for strategic business purposes. Here
        are some examples of the types of strategic patent searching our patent
        attorneys carry out for our clients:
      </p>

      <ul>
        <li>Map out the competitive landscape</li>
        <li>Identify the main players in a particular field of technology</li>
        <li>Identify the key investors in a particular field of technology</li>
        <li>
          Identify whether extensive patenting has taken place to assess the
          barriers of entry
        </li>
        <li>
          Identify opportunities in the patent landscape that may be capitalised
          on
        </li>
        <li>Identify the latest developments in a specialist area</li>
        <li>Identify competitor initiatives</li>
        <li>Identify potential infringers</li>
        <li>Locate potential licensing partners</li>
        <li>Highlight industry trends</li>
        <li>Assess the value of a patent portfolio</li>
      </ul>
    </Layout>
  )
}
