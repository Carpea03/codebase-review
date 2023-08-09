import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function ChoosingABrandName() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Trade marks', link: '/trade-marks' },
    { title: 'How to trade mark', link: '/how-to-trade-mark' },
    { title: 'Choosing a brand name', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>Choosing a brand name | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Choosing a brand name is an exercise in creative thinking backed by cold hard facts in order to arrive at a solid, memorable brand name to trade mark."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/choosing-a-brand-name"
        />
      </Head>
      <div className="mt-10">
        <h1>Choosing a brand name</h1>
        <p>
          Commercial success for inventions and innovations does not solely rely
          on a good product. Along with the manufacture of high-quality goods,
          how the market perceives a product also dictates how well that product
          sells commercially. Good public sentiment towards the product, also
          known as goodwill, strongly influences how likely people would
          purchase a certain product from a certain company. This is where
          branding comes in. The brand is the face the company presents to the
          public and connects the product back to the company. Historically,
          branding referred to actual practice of searing a visible identifying
          mark onto livestock in order for strays to be traced back to their
          owners. The modern brand somewhat serves the same purpose.
        </p>
        <h2>Considerations in choosing a brand name</h2>
        <p>
          Possibly the most basic feature of a brand is the brand name, which is
          the unstylised text by which the brand is known. A good brand name can
          successfully cement a mental connection between the brand and the
          product. The mere mention of Cadbury&apos;s, Kleenex and iPhone
          instantaneously conjures mental images of these well-known global
          brands and indicates the quality of the products they offer.
        </p>
        <p>
          Creativity and out-of-the box thinking are needed to be able to choose
          a unique brand name that sticks. Sometimes, the most iconic brand
          names came to existence by accident (see Google). At the same time,
          one cannot discount the importance of data and market research in
          choosing a brand name. To select an effective brand name, these
          questions can serve as a guide.
        </p>
        <ol>
          <li>
            How well do you know your product? Will you be able to supply
            products of consistently high quality for your brand to acquire good
            reputation over time?
          </li>
          <li>
            Who is your target demographic? How do you want the public to see
            your product? Are there alternative markets for your product?
          </li>
          <li>
            Who are your competitors? What brand names and forms are they using?
          </li>
          <li>
            Do you intend to expand production or supply overseas? Does your
            brand name mean something else in different languages?
          </li>
        </ol>
        <p>
          Therefore, in consideration of these questions, here are several
          guidelines in formulating your own brand.
        </p>
        <ul>
          <li>
            Choose a highly unique brand name. Consider self-coined terms or
            select unrelated words. The name Kodak was a coined word. The word
            apple has no correlation at all with computers, but at present,
            Apple is one of the biggest names in electronics and mobile phone
            technology.
          </li>
          <li>
            Short names run the risk of being attached to acronyms that may be
            damaging to the reputation of the brand. For example, brands that
            sounded like AIDS, SARS and especially ISIS experienced negative
            public response due to their inadvertent association with these
            acronyms that convey negative sentiments. .
          </li>
          <li>
            Conduct research to see whether your selected brand is substantially
            identical or deceptively similar to an existing mark and all its
            related domains and hashtags. This is important because the owner of
            the new brand can be charged with trade mark infringement. Moreover,
            when considering distribution or manufacturing the goods overseas,
            the brand, its translated versions and transliterations should not
            infringe on existing trade marks in that jurisdiction.
          </li>
        </ul>
        <p>
          Finally, upon having settled on a brand name, the brand name should be
          registered as a trade mark under the{' '}
          <Link href="/classes-of-goods-and-services">
            corresponding classes
          </Link>{' '}
          in order for the brand to be protected for all the goods and services
          that are to be sold under that brand. A registered trade mark grants
          the owner protection and the right to enforce their mark against
          infringers and counterfeiters, as well as the right to license their
          brand to other parties.
        </p>
        <h2>Decide if you need to register a trade mark</h2>
        <p>
          A <Link href="/brand-name-vs-trade-mark">trade mark</Link> is a badge
          of origin that differentiates the products and services of your
          business from those of your competitors. Often a business name is
          selected with the intention to use the business name as a brand i.e.
          the business name is selected to be a badge of origin of goods or
          services sold by the business. However, merely registering a business
          name does not provide any enforceable rights. A competitor can copy
          your business name and sell similar goods and services under that
          name, taking away from the hard-earned reputation you have built in
          your business name.
        </p>
        <p>
          Registering your carefully selected business name as a trade mark
          provides exclusive rights to use that trade mark within Australia in
          relation to the goods and services for which the mark is registered.
        </p>
        <p>
          Similarly, the careful selection of a product or service name
          typically reflects a marketing strategy and trade mark protection will
          help ensure your marketing efforts are not diluted by a competitor
          selling a product or service under a similar name.
        </p>
        <p>
          A trade mark can include a word or phrase, a logo, or less commonly:
        </p>
        <ul>
          <li>movement</li>
          <li>sound</li>
          <li>smell</li>
          <li>shape</li>
        </ul>
        <p>
          Sometimes, a trade mark can be a{' '}
          <Link href="/types-of-trade-marks">
            combination of these elements
          </Link>
          .
        </p>
        <p>
          Here are some guiding questions to consider when deciding to{' '}
          <Link href="/trade-mark-application">
            register a trade mark in Australia
          </Link>{' '}
          for trade mark protection:
        </p>
        <ol>
          <li>
            What aspects of the branding of your business function as badges of
            origin for your goods and services e.g. a name, logo, colour of
            logo, combination of elements?
          </li>
          <li>
            If you have decided to apply for a trade mark, does the word or logo
            make it clear that your product, service, organization or business
            originate from you, not from your competitors?
          </li>
          <li>
            Has a search been conducted to ensure that the trade mark you are
            considering is not a duplicate of or confusingly similar to somebody
            else&apos;s trade mark?
          </li>
          <li>
            Will a public disclosure of the details of your trade mark
            application be an issue for you?
          </li>
          <li>Are you qualified to own the trade mark?</li>
        </ol>
      </div>
    </Layout>
  )
}
