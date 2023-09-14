import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function HowToTradeMark() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Trade Mark', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          How to trade mark and obtain protection for your brand | Baxter IP
        </title>
        <meta
          name="description"
          content="We explain how to protect your Australian trade mark by applying for trade mark registration with the help of a trade mark attorney."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/how-to-trade-mark"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A6%82%E4%BD%95%E6%B3%A8%E5%86%8C%E5%95%86%E6%A0%87"
          hreflang="zh"
        />
      </Head>
      <div className='mt-10'></div>
      <h1>How to trade mark</h1>
      <p>
        A trade mark is a form of intellectual property designed to protect
        one&apos;s <Link href="/brand-name-vs-trade-mark">brand</Link>, while
        the legal term for the intellectual property protected under a trade
        mark is called a sign. On a commercial perspective, it is the face of a
        business. It directs customers back to the source of the quality of the
        goods or services. A successful trade mark comes to embody the quality
        of the goods or services provided by the business, building brand
        loyalty and reputation. To stand out from the crowd, you need a strong
        and distinctive trade mark; thus, you need to know how to trade mark
        your brand.
      </p>
      <p>
        An Australian trade mark attorney or lawyer, such as one of our trade
        mark attorneys in Sydney or Melbourne, can prepare and{' '}
        <Link href="/trade-mark-application">apply for a trade mark</Link> on
        your behalf.
      </p>
      <h2>How do you choose a good trade mark?</h2>
      <p>
        A sign may include a word, a tag line, a logo, a visual or packaging
        aspect, even a smell or a sound, or a combination of these elements. The
        signs&apos; purpose is to distinguish the trade mark owner&apos;s goods
        and/or services from those of their competitors.
      </p>
      <p>A good trade mark:</p>
      <ul>
        <li>Distinguishes your products or services in the marketplace; and</li>
        <li>
          Conveys the marketing message you want your clients or customers to
          hear.
        </li>
      </ul>
      <p>
        In <Link href="/choosing-a-brand-name">choosing a branding</Link>{' '}
        strategy, you should consider both what conveys your message in the
        marketplace together with what can distinguish your brand from others in
        the marketplace.
      </p>
      <p>
        Trade marks cannot attempt to take the language that other traders might
        want to use legitimately to describe a quality or characteristic of
        their own goods or services. Therefore, great trade marks either
        include:
      </p>
      <ol>
        <li>Totally original words, images or combinations; or</li>
        <li>
          Words, images or combinations of words and images that:
          <ol>
            <li>contain some element of distinctiveness,</li>
            <li>
              create an emotion or an illusionary effect, which bring the
              goods/services to life, or
            </li>
            <li>are unusual.</li>
          </ol>
        </li>
      </ol>
      <p>
        Our trade mark attorneys, who are based in Sydney and Melbourne, can
        advise you on how to trade mark such that your proposed trade mark is
        likely to be able to distinguish your brand from others in the
        marketplace.
      </p>
      <h2>Why is it important to register a trade mark?</h2>
      <p>
        Trade mark registration provides certain{' '}
        <Link href="/trade-mark-registration-benefits">benefits</Link> exclusive
        to you as the trade mark owner, such as the ability to:
      </p>
      <ul>
        <li>assign, sell or license the trade mark;</li>
        <li>pursue parties that infringe on your trade mark; or</li>
        <li>
          list trade marks among other intangible assets, which helps reinforce
          valuation.
        </li>
      </ul>
      <p>
        Importantly, registering a trade mark makes it easier for you to stop
        other businesses from copying your trade mark because the owner of a
        trade mark has a title to ownership.
      </p>
      <p>
        Without a registered trade mark, your only protection against trade mark
        infringement lies in common law torts (e.g. passing off) and{' '}
        <em>Section 18 of the Competition &amp; Consumer Act 2010</em>. Thus, it
        is more difficult to cost-effectively prosecute a{' '}
        <Link href="/trade-mark-infringement">trade mark infringement</Link>{' '}
        incident without a registered trade mark.
      </p>
      <p>
        In accusing another party of passing off conduct, the plaintiff (i.e.
        the owner of the trade mark) needs to prove that their own brand has
        established sufficient reputation attached to the common law trade mark,
        which takes time to develop, and that the accused party actively sought
        to deceive consumers into thinking that they are buying a product
        sourced from original common law trade mark. By contrast, trade mark
        registration provides the trade mark owner an automatic right to enforce
        and thus protect their mark against infringers.
      </p>
      <p>
        A common misunderstanding is that a{' '}
        <Link href="/brand-name-vs-trade-mark">
          business name or company name provides some form of protection
        </Link>
        ; however, these are mere listings that do not provide any means for
        enforcement.
      </p>
      <h2>Why do I need a trade mark attorney?</h2>
      <p>
        Since trade marks are so often a valuable corporate asset and given the
        many pitfalls to be avoided in the{' '}
        <Link href="/trade-mark-registration-process">
          trade mark application process
        </Link>
        , trade mark applications should always be professionally prepared by a{' '}
        <Link href="/role-of-australian-trade-mark-attorneys">
          registered trade mark attorney
        </Link>
        . Before adopting a new trade mark,{' '}
        <Link href="/trade-mark-search">searches</Link> can be conducted to
        check the availability of the trade mark for use and registration. This
        helps reduce the risk of infringement of a prior trade mark registration
        and the likelihood of objection during examination.
      </p>
      <p>
        Our trade mark attorney team combines extensive business experience with
        a thorough approach to preparing trade mark applications so as to help
        clients protect their brand in Australia and internationally.
      </p>
      <p>
        Notably, trade mark protection is only applicable in the country in
        which the trade mark is registered. To obtain protection for the trade
        mark in other countries, one must register the trade mark in each of the
        countries of interest. Our Sydney and Melbourne based trade mark
        attorneys can also provide advice on{' '}
        <Link href="/international-trade-mark-application">
          how to trade mark internationally
        </Link>
        . This could, for instance, include a consideration of overseas trade
        mark availability or whether branding and trade mark strategies match or
        align and are likely to be appropriate in other countries.
      </p>
    </Layout>
  )
}
