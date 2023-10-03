import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function InternationalPatentSearch() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Patent Search', link: '/patent-search' },
    { title: 'International Patent Search', link: '' },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>
          International Patent Search | Patent Novelty Search | Baxter IP
        </title>
        <meta
          name="description"
          content="An international patent search is normally a form of novelty search conducted to ensure that your IP is novel in light of the international prior art."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/international-patent-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%85%A8%E7%90%83%E4%B8%93%E5%88%A9%E6%96%B0%E9%A2%96%E6%90%9C%E7%B4%A2"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>International Patent Search</h1>
      <p>
        Conducting a international patent search of prior art patents is
        valuable since it provides you with an indication of whether a patent
        application for your invention will be allowed.
      </p>
      <p>
        In order to be patentable, an invention must be (1) new (novel); and (2)
        inventive. Although patent law varies from country to country, novelty
        and inventiveness of patent applications are at least usually assessed
        against any document published worldwide before the priority date of the
        patent application. Consequently, no international patent search will
        ever be thoroughly exhaustive as it is impossible to, with complete
        accuracy, search every document ever published worldwide. However,
        patent novelty searches are useful in indicating the state of the prior
        art and locating prior art that is likely to be raised during
        examination.
      </p>
      <p>
        It is important to note that it is not possible to search any patent
        application that is filed less than 18 months prior because patent
        applications are only published at 18 months after their international
        priority date. This means that the results of a patent novelty search
        will likely miss relevant prior art if conducted within 18 months from
        when the patent application was first filed.
      </p>
      <p>
        There are multiple options for international patent novelty searches,
        including:
      </p>
      <ol>
        <li>
          Pre-filing patent searches (i.e. patent searches carried out before a
          patent application is filed)
        </li>
        <li>
          <Link
            title="International-Type Patent Search"
            href="/international-type-search"
          >
            International-type patent searches
          </Link>{' '}
          (based on a filed provisional patent application)
        </li>
      </ol>
      <p>
        Our <Link href="/patent-attorney">patent attorneys</Link> and patent
        searchers can carry out either or both of these types of novelty
        searches, as well as other international patent searches for you to help
        you de-risk your intellectual property protection efforts.
      </p>
    </Layout>
  )
}
