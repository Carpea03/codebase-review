import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function BrandNameVsTradeMark() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Trade Mark', link: '/how-to-trade-mark' },
    { title: 'Brand Name vs Trade Mark', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Brand Name vs Trade Mark | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="A brand name is just a name of a brand or a product, whereas a trade mark is the intellectual property that protects a brand."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/brand-name-vs-trade-mark"
        />
      </Head>
      <div className="mt-10">
        <h1>Brand Name vs Trade Mark</h1>
        <p>
          Brand name and trade mark are used interchangeably in daily life.
          However, the difference between brand name and trade mark lies in
          their function. A brand name may be a company name or a name ascribed
          to a particular product or service. It is what the company uses to
          represent its goods and services and what consumers use to refer back
          these goods and services to their source. A{' '}
          <Link href="/ip-glossary#trade-mark">trade mark</Link> is an
          intellectual property right that protects a brand. A trade mark gives
          protection to the brand name that it would not otherwise have.
        </p>
        <h2>What is a brand name?</h2>
        <p>
          A brand name is unstylised text that functions as a name to
          differentiate a company or product from others. A brand name is how
          consumers can recognize a company and its output, that is, goods or
          services, in the market. Companies may use brand names of different
          forms, such as their actual company or business name (Telstra), a
          product (Vegemite) or a product variant (Coke Zero), or a service
          (Uber Eats), among others. A well-known, recognisable brand name
          induces strong customer recall so that the target market will connect
          the company automatically to the goods or services on offer. The goal
          of a brand name is to build enough reputation so that the public would
          opt to avail of that brand&apos;s product instead of a generic kind.
        </p>
        <h2>What is a trade mark?</h2>
        <p>
          A trade mark is a type of intellectual property right that{' '}
          <Link href="/how-to-trade-mark">protects a brand</Link>. It is not
          necessarily a logo: it may be<b> plain text,</b> a slogan, a design
          aspect, a smell, a color or even sound. In a similar manner to a brand
          name, the purpose of a trade mark is to differentiate a product from
          others in the market, but a trade mark offers the owners{' '}
          <Link href="/trade-mark-registration-benefits">protection</Link> that
          an unregistered brand name cannot. After application and upon approval
          by the Trade Marks Office, a trade mark is registered into the
          national register of trade marks. Trade mark registration awards the
          owner the right to seek legal relief against parties using a trade
          mark that is substantially identical or deceptively similar to the
          registered trade mark after the trade mark&apos;s priority date. This
          right may also deter potential infringers and counterfeiters.
        </p>
        <p>
          One important difference between a brand name and a trade mark is the
          legislated enforcement option available for each. When left
          unprotected, a brand name that has acquired a good reputation may
          become a target of counterfeiters who attempt to benefit from the
          established goodwill toward the brand name by selling subpar
          counterfeit items or using their own confusingly similar brand that
          people may mistake for the original brand. Unregistered brand names
          and logo marks can be protected by the common-law tort of passing off,
          but the proceedings may be costly and lengthy. In addition, expansion,
          outsourcing production or distribution to other countries may be out
          of the question as the lack of a registered trade mark may put the
          brand owner at risk of{' '}
          <Link href="/trade-mark-infringement">trade mark infringement</Link>{' '}
          allegations in other jurisdictions with a &ldquo;
          <Link href="/trade-marks-in-other-countries#china">
            first to file
          </Link>
          &rdquo; rule, such as China.
        </p>
        <p>
          By registering the brand name as a trade mark, the owner of the
          registered trade mark is automatically granted the right to seek legal
          relief in the country of registration against the unauthorised use of
          a confusingly similar mark. Thus, it makes good business sense to
          register the brand name and other possible trade marks that may be
          subjected to third-party infringement in order to protect the
          company&apos;s position in the market.
        </p>
      </div>
    </Layout>
  )
}
