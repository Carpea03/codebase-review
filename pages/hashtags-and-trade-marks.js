import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function HashtagsAndTradeMarks() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Trade marks', link: '/trade-marks' },
    { title: 'How to trade mark', link: '/how-to-trade-mark' },
    { title: 'Hashtags and trade marks', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>Hashtags and trade marks | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Hashtags may perform a similar function as trade marks but do not offer the same protection."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/hashtags-and-trade-marks"
        />
      </Head>
      <div className="mt-10">
        <h1>Hashtags and trade marks</h1>
        <p>
          Australian e-commerce has grown by 22% in 2018, and the number of
          people relying on testimonials from social media influencers before
          availing of a particular good or service is currently on the rise. One
          powerful tool in influencer marketing is the use of hashtags on social
          media posts as part of a companies&apos; marketing campaigns.
        </p>
        <p>
          A hashtag is a word or phrase following a hash sign (#, also referred
          to as the pound sign). The hash tag may be used across most social
          media platforms, such as Facebook, Twitter and Linkedin, and the
          string of characters following the # sign can direct online traffic
          toward a certain product or service. Influencer marketing and the
          growing reliance of consumers on people&apos;s actual experiences
          instead of traditional advertising before availing of a certain
          product or service have underlined the potential issue of trade mark
          infringement using hashtags.
        </p>
        <h2>Registering a hashtag trade mark and infringement</h2>
        <p>
          A recent update to the{' '}
          <Link
            href="http://manuals.ipaustralia.gov.au/trademarks/trade_marks_examiners_manual.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Australian Trade Marks Office Manual of Practice and Procedure
          </Link>{' '}
          included a discussion on hashtags and their registrability. Rules as
          to whether a hashtag can be used to commit{' '}
          <Link href="/trade-mark-infringement">trade mark infringement</Link>{' '}
          is analogous to previous issues with{' '}
          <Link href="/domain-names-and-trade-marks">
            domain names and trade marks
          </Link>
          . Hashtag trade marks perform the same function as trade marks, that
          is, distinguishing the{' '}
          <Link href="/classes-of-goods-and-services">goods and services</Link>{' '}
          from those of the competition and serving as a badge of origin in
          relation to the goods and services. Infringement is qualified as the
          unauthorised use of hashtags as a trade mark for the aforementioned
          purpose.
        </p>
        <p>
          Thus, if the text following the hash sign is already registered, then
          an actual hashtag trade mark may be unnecessary. However, a hashtag
          marketing campaign should be carefully considered in order to avoid
          infringing on a competitor&apos;s prior rights. There are currently no
          existing trade mark infringement cases involving hashtags, but the
          issue may expand similarly to domain name disputes.
        </p>
      </div>
    </Layout>
  )
}
