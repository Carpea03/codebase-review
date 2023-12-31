import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FreedomToOperatePatentSearch() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Patent Search',
      link: '/patent-search',
    },
    { title: 'Freedom-to-Operate Patent Search', link: '' },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>
          Freedom-to-Operate Patent Search | Patent Infringement Search | Baxter
          IP
        </title>
        <meta
          name="description"
          content="Freedom-to-operate patent search also known as patent infringement search or patent clearance search should be considered before releasing a new product."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/freedom-to-operate-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/freedom-to-operate-patent-search"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%85%8D%E8%B4%B9%E6%93%8D%E4%BD%9C%E6%90%9C%E7%B4%A2"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10">
        <h1>Freedom-to-Operate Patent Search</h1>
        <h3>Why carry out a freedom-to-operate patent search</h3>
        <p>
          If you are looking to develop or release a new product, it is
          important to ascertain whether it would be open to a claim for
          infringement of intellectual property rights of a third party, for
          example, third-party patent rights. If the answer to this question is
          &ldquo;no&rdquo;, then you are said to have
          &ldquo;freedom-to-operate&rdquo;. A freedom-to-operate patent search
          is also known as a &ldquo;patent clearance search&rdquo; or a &ldquo;
          <Link href="/ip-glossary#infringement">patent infringement</Link>{' '}
          search&rdquo;.
        </p>
        <p>
          A freedom-to-operate patent search addresses the risk associated with
          being blocked from market by a third party in terms of:
        </p>
        <ul>
          <li>development costs</li>
          <li>reputational damage</li>
          <li>withdrawal of products or services from the market</li>
          <li>legal costs</li>
        </ul>
        <p>
          Our clients who operate in crowded markets routinely have us carry out
          patent clearance searches. The first step in an Australian
          freedom-to-operate patent search is to identify granted Australian
          patents or{' '}
          <Link href="/provisional-patents">patent applications</Link> (which
          would upon grant) that are live and that pose an infringement risk.
          Your product or proposed product is then analysed against the claims
          of the patents that have been identified by the patent clearance
          search.
        </p>
        <h2>How to achieve freedom-to-operate</h2>
        <p>
          When a third-party files a portfolio of patent applications, they
          generally will only file in a small selection of countries. For
          example, a patent applicant may only file a{' '}
          <Link href="/provisional-patents">patent application</Link> in the
          United States and Europe &ndash; and not in Australia, in which case
          you can make and sell their patented invention in Australia and in
          every country other than the United States and Europe. The third-party
          patent application may have also been &ldquo;knocked back&rdquo; or
          limited during examination in some countries, and you may therefore
          still have freedom-to-operate in those countries.
        </p>
        <h2>What to do if you don&apos;t have freedom-to-operate</h2>
        <p>
          If you had a freedom-to-operate patent search carried out and
          discovered that you would infringe an existing patent if you were to
          proceed with your product, it&apos;s not the end of the road. There
          are at least 4 paths you can go down:
        </p>
        <ol>
          <li>
            You can attempt to invalidate the patent by locating{' '}
            <Link href="/ip-glossary#prior-art">prior art</Link>. Sometimes,
            patent examiners miss important items of prior art that either
            alone, or in combination with other prior art documents, would
            invalidate or limit the claims of the granted patent. Furthermore,
            patent examiners will normally only look at patents and scientific
            publications and not more broadly at the prior art base, such as on
            commercial websites, forums or blogs. Patent examiners also easily
            miss prior art documents that are not in English &ndash; for
            example, those on the Russian Patent Office Database.
          </li>
          <li>
            You can attempt to obtain a license for the technology from the
            patent owner. You will most likely be successful in obtaining a
            license where the patent owners themselves have not commercialised a
            product in accordance with the patent.
          </li>
          <li>
            Where you are the owner of a{' '}
            <Link href="/provisional-patents">patent application</Link> that is
            of interest to the patent owner of the third-party patent, there is
            also the possibility of cross-licensing the two patent applications.
            This has become quite a popular solution employed by large companies
            to avoid <Link href="/patent-litigation">patent litigation</Link>,
            but this approach is useful for all companies.
          </li>
          <li>
            You can attempt to design around the patent, that is, to ensure that
            your product design does not encompass all of the features of one of
            the claims of the third-party patent. Your{' '}
            <Link href="/patent-attorney">patent attorney</Link> can help you
            with designing around an existing patent.
          </li>
        </ol>
      </div>
    </Layout>
  )
}
