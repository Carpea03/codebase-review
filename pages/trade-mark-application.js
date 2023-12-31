import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkApplication() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'How to Trade Mark',
      link: '/how-to-trade-mark',
    },
    { title: 'Australian Trade Mark Application', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"} stepper={1} stepperData={true}>
      <Head>
        <title>
          Apply for a Trade Mark in Australia | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Applying for a trade mark in Australia and getting your trade mark registered provides benefits compared with common law protection."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-application"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-trade-marks"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%95%86%E6%A0%87%E6%B3%A8%E5%86%8C%E7%94%B3%E8%AF%B7"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Apply for a Trade Mark in Australia</h1>
      <h2>What is a trade mark?</h2>
      <p>
        In commerce, a trade mark is the identity of a business, product or
        service. Colloquially, the name or logo of a business are often referred
        to as trade marks. The legislative definition of trade mark is broader
        than what it is commonly known. The Australian{' '}
        <em>Trade Marks Act 1995 (Cth)</em> defines trade marks as signs which
        distinguish products or services of a trader from those of other
        traders. Other than words and logos, trade marks can also be{' '}
        <Link href="/types-of-trade-marks">
          letters, numbers, shapes, sounds and scents
        </Link>
        .
      </p>
      <h2>Benefits of a trade mark registration</h2>
      <p>
        As valuable company assets and important goodwill &amp; margin
        protecting tools, trade marks are vital company assets.
      </p>
      <p>
        <strong>Legal protection</strong>
      </p>
      <ul>
        <li>
          The owner is given monopoly rights in using the trade mark in respect
          of the{' '}
          <Link href="/classes-of-goods-and-services">goods and services</Link>{' '}
          for which the registration is achieved.
        </li>
        <li>
          The owner can preclude others from using his or her registered trade
          mark. When it is necessary, the owner can initiate legal proceedings
          against acts of{' '}
          <Link href="/trade-mark-infringement">infringement</Link> and collect
          monetary compensation for damages.
        </li>
        <li>
          The owner is the only person who can rightfully authorise or assign
          the trade mark rights.
        </li>
      </ul>
      <p>
        <strong>Commercial benefits</strong>
      </p>
      <ul>
        <li>
          A trade mark is an asset of a business which can appreciate over time
          as goodwill in the product or service grows.
        </li>
        <li>
          It dissuades brand copycats and so helps avoid the associated losses.
        </li>
        <li>It provides confidence to consumers and can help attract sales.</li>
        <li>
          Products and services bearing registered trade marks have greater
          presence which can lead to better product or service pricing.
        </li>
        <li>
          Trade mark registrations can be licensed or assigned, thereby allowing
          for other business models such as franchising.
        </li>
      </ul>
      <p>
        To summarise, trade mark registration provides the trade mark owner not
        only{' '}
        <Link href="/trade-mark-registration-benefits">
          legal protection but also commercial benefits
        </Link>
        .
      </p>
      <h2>
        How to apply for a trade mark with your Baxter IP trade mark attorney
      </h2>
      <p>
        Baxter IP offers a simple and cost-effective procedure for obtaining
        trade mark protection &ndash; here&apos;s what&apos;s involved:
      </p>
      <ol>
        <li>
          An initial consultation with an Australian trade mark attorney who
          will explain to you the trade marks process in{' '}
          <Link href="/trade-mark-registration-process">Australia</Link> and{' '}
          <Link href="/international-trade-mark-application">
            internationally
          </Link>{' '}
          whilst gaining an understanding of your commercial objectives
        </li>
        <li>
          <Link href="/trade-mark-pre-filing-considerations">
            Pre-filing preparation
          </Link>{' '}
          and strategy, such as:
          <ol type="a">
            <li>
              A trade mark attorney evaluating your goods and services selection
              and ensuring that it is comprehensive and not set out in a
              limiting manner;
            </li>
            <li>
              Trade mark database searching, distinctiveness consideration and
              trade mark representation evaluation for Australia;
            </li>
            <li>
              Trade mark database searching, distinctiveness consideration and
              trade mark representation evaluation for an international trade
              mark application
            </li>
            <li>
              Brief unregistered (common law) trade mark searching in Australia.
            </li>
          </ol>
        </li>
        <li>
          Consideration of filing options, such as:
          <ol type="a">
            <li>
              Proceed with a standard Australian trade mark application based;
            </li>
            <li>
              Using a two-step TM Headstart with restricted goods or services;
            </li>
            <li>
              Using two-step TM Headstart with expanded goods or services; or
            </li>
            <li>
              Filing a standard Australian trade mark application after
              consideration of TM Headstart results.
            </li>
          </ol>
        </li>
        <li>Filing of an trade mark application in Australia</li>
        <li>
          Preparing and filing a response to any{' '}
          <Link href="/trade-mark-examination">trade mark examination</Link>{' '}
          report that arises
        </li>
        <li>
          <Link href="/trade-mark-renewal">Renewals</Link> management
        </li>
        <li>
          Filing overseas trade mark applications within six months of the
          Australian trade mark application through:
          <ol type="a">
            <li>
              <Link href="/international-trade-mark-application">
                Direct country filing
              </Link>
            </li>
            <li>Community Trade mark (CTM) or OAPI, ARIPO, or</li>
            <li>
              <Link href="/madrid-protocol-application">Madrid Protocol</Link>{' '}
              (or agreement) international system.
            </li>
          </ol>
        </li>
      </ol>
      <h3 className="h6">Confidentiality</h3>
      <p>
        Bound by the Code of Conduct for Trans-Tasman Patent and Trade Marks
        Attorneys 2018, your{' '}
        <Link href="/trade-mark-attorney">trade mark attorney</Link> keeps
        information obtained from you confidential. When an application is
        filed, filing particulars, including the subject trade mark and the
        applicant&apos;s information, will be made available to the public.
      </p>
    </Layout>
  )
}
