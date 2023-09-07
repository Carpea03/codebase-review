import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function FairUseOfTradeMarks() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade mark oppositions & disputes',
      link: '/trade-mark-oppositions-disputes',
    },
    { title: 'Trade mark disputes', link: '/trade-mark-disputes' },
    { title: 'Domain names and trade marks', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>Fair use of trade marks | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="The policy on trade mark fair use allows for descriptive fair use or nominative fair use of trade marks without risking infringement."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/fair-use-of-trade-marks"
        />
      </Head>
      <div className="mt-10">
        <h1>Fair use of trade marks</h1>
        <p>
          A trade mark serves as a badge of origin of particular{' '}
          <Link href="/classes-of-goods-and-services">
            goods and/or services
          </Link>
          . One of the benefits of having a registered trade mark is that the
          owner of the trade mark can enforce their trade mark rights against
          someone who is using their registered trade mark to sell their similar
          goods or services. However, certain instances of use of a registered
          trade mark can be considered &quot;fair use&quot;. This allows a party
          to legitimately use another person&apos;s trade mark without{' '}
          <Link href="/trade-mark-infringement">infringing the trade mark</Link>
          .
        </p>
        <h2>What is considered fair use?</h2>
        <p>
          Fair use of trade marks is classified into two parts namely,
          descriptive fair use and nominative fair use.
        </p>
        <h3>Descriptive fair use</h3>
        <p>
          Descriptive fair use is when someone&apos;s registered trade mark can
          be used in good faith to describe the user&apos;s products or
          services. This usually happens when the trade mark in question has a
          descriptive meaning in addition to its secondary meaning as a trade
          mark. However, in{' '}
          <em>
            Wellness Pty Ltd v Pro Bio Living Waters Pty Ltd [2004] FCA 438
          </em>
          , it was held that the use of the term &quot;Living Water&quot; was
          found to infringe a registered trade mark which was owned by Wellness
          Pty Ltd. The court found that the use of the words &quot;Living
          water&quot; by <em>Pro Bio</em> was neither descriptive of the goods
          nor reasonably necessary for adequate description of the goods.
          Therefore, the court did not consider Pro Bio&apos;s use of the words
          &quot;Living water&quot; to constitute fair use.
        </p>
        <h3>Nominative fair use</h3>
        <p>
          Nominative fair use is when the use of another&apos;s trade mark to
          refer to the trade mark owner&apos;s actual goods and services
          associated with the mark is permitted. Nominative fair use is allowed
          if:
        </p>
        <ul>
          <li>
            the product or service is not identifiable without use of the trade
            mark;
          </li>
          <li>
            only a portion of the mark that is necessary to identify the product
            or service is used; and
          </li>
          <li>
            use of the mark does not suggest endorsement by the trade mark
            owner.
          </li>
        </ul>
        <p>
          One example of nominative fair use is the use of the
          &quot;Barbie&quot; trade mark in a parody or criticism by a certain
          photographer. His work would not have been identifiable without the
          use of the trade mark &quot;Barbie.&quot;
        </p>
      </div>
    </Layout>
  )
}
