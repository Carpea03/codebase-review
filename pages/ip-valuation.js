import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function IpValuation() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'IP Strategy', link: '/ip-strategy' },
    { title: 'IP Valuation', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Intellectual Property Valuation | What is your patent worth?
        </title>
        <meta
          name="description"
          content="Baxter IP can assess the value of your intellectual property and what your patent portfolio is worth using IP asset valuation methodologies."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/ip-valuation" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BB%B7%E5%80%BC%E8%AF%84%E4%BC%B0"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Intellectual Property Valuation</h1>
      <p>
        IP valuation is a multi-faceted legal and financial analysis to identify
        and value intellectual property assets. We can carry out parts of the
        process of a patent valuation or trade mark valuation. Once you
        understand what makes your IP valuable, this will also indicate how to
        go about maximising that value.
      </p>
      <h2>Is IP valuation relevant to my business?</h2>
      <p>
        In most businesses, tangible assets only make up a small fraction of the
        total value of the business. The remainder of the value has
        traditionally been referred to under the broad term
        &ldquo;goodwill&rdquo; and encompasses patents and trade marks. Very
        little effort has been made to identify, quantify or plan around this
        value. There are very few businesses that do not fall within this
        description, and it is highly likely that yours does too.
      </p>
      <h2>Why value my IP?</h2>
      <p>IP valuation is carried out for a variety of reasons, such as:</p>
      <ul>
        <li>
          As part of a larger company valuation for a merger or acquisition
        </li>
        <li>
          As part of high-level strategic intellectual property or business
          planning
        </li>
        <li>
          In order to obtain an independent valuation of intangible assets for
          capital gains tax (CGT) purposes
        </li>
        <li>
          For a joint venture deal to establish whether the parties are
          contributing items of equivalent monetary value
        </li>
        <li>In justification of tax returns</li>
      </ul>
      <p>
        While the instances mentioned above are the main reasons why IP
        valuations are carried out, there are other important benefits of having
        patent valuation or other such IP valuation carried out. Not the least
        of these is the recognition of the various discrete items of
        intellectual property that in some cases can make up more than 80% of a
        business&apos;s value.
      </p>
      <p>
        Together with the recognition of these discrete items of IP &ndash; for
        example the business&apos; patents or trade marks &ndash; comes an
        understanding of the part that these discrete items must play in the
        functioning of the business. This understanding allows for a better
        ability to plan for the leveraging of that IP to maximise its value in
        the business.
      </p>
      <p>
        In some cases, just having a compass that points directly to the source
        of the intellectual property value differentiators in your business and
        is explained in a clear and understandable manner allows for the
        business and its strategic planning to be viewed in a new light.
      </p>
      <p>
        When management of a business has a good understanding of its intangible
        assets, they can leverage them for maximum value, such as for attracting
        investment.
      </p>
    </Layout>
  )
}
