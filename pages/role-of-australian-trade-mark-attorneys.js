import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function RoleOfAustralianTradeMarkAttorneys() {
  const data = [
    { title: 'Join us', link: '/ip-careers' },
    { title: 'The role of Australian trade mark attorney', link: '' },
  ]
  return (
    <Layout navData={data} bannerData={true} layout={2} title={"The role of Australian trade mark attorneys"} active={"Values"}>
      <Head>
        <title>The role of Australian trade mark attorneys | Baxter IP</title>
        <meta
          name="description"
          content="The role of Australian trade mark attorneys include filing, prosecution and enforcement of the trade mark rights of their client."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/role-of-australian-trade-mark-attorneys"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%95%86%E6%A0%87%E5%BE%8B%E5%B8%88%E7%9A%84%E8%A7%92%E8%89%B2"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <p>
        The role of Australian trade mark attorneys is both legal and technical
        in nature. Trade mark attorneys ensure that trade mark applications
        lodged to IP Australia meet the requirements of the{' '}
        <Link href="https://www.legislation.gov.au/Details/C2019C00085">
          <em>Trade Marks Act 1995 (Cth)</em>
        </Link>{' '}
        and the <em>Trade Marks Regulations 1995</em>. In addition, trade mark
        attorneys should have the skills and knowledge to conduct effective
        trade mark searches based on client goals, such as trade mark clearance,{' '}
        <Link href="/trade-mark-infringement">infringement check</Link>, or
        freedom to operate searches.
      </p>
      <p>
        Australian trade mark attorneys maintain trade marks for clients
        throughout the lifetime of the registrations. To be a trade mark
        attorney, candidates must have the{' '}
        <Link href="/how-to-become-a-trade-mark-attorney">qualifications</Link>{' '}
        in order to have the privilege to practise in Australia.
      </p>
      <p>
        We, at Baxter IP, are always on standby to help with your{' '}
        <Link href="/trade-mark-application">trade mark applications</Link>.
        With our experienced{' '}
        <Link href="/trade-mark-attorney">trade mark attorneys</Link>, we can:
      </p>
      <ul>
        <li>
          Help you develop trade mark strategies that befits your portfolio and
          commercial goals, as well as, help you maintain your trade mark
          portfolio.
        </li>
        <li>
          Assist you in investigating potential obstacles of the application by
          performing effective{' '}
          <Link href="/trade-mark-search">trade mark searches</Link> for your
          proposed trade marks and provide you with advice on addressing the
          identified issues.
        </li>
        <li>
          Advise you on selecting and{' '}
          <Link href="/choosing-a-brand-name">deciding your trade marks</Link>
        </li>
        <li>
          Help you identify all the relevant{' '}
          <Link href="/classes-of-goods-and-services">
            classes of goods and services
          </Link>{' '}
          and define appropriate scope of protection for your trade mark
          application
        </li>
        <li>
          Conduct prosecution and prepare trade mark applications for filing to
          IP Australia.
        </li>
        <li>
          Help facilitate trade mark protection{' '}
          <Link href="/international-trade-mark-application">
            outside of Australia
          </Link>
          , such as New Zealand, US or{' '}
          <Link href="/trade-marks-in-other-countries">
            other jurisdictions
          </Link>
          .
        </li>
        <li>
          Act on your behalf in{' '}
          <Link href="/trade-mark-oppositions-disputes">
            brand protection matters
          </Link>
          , such as in{' '}
          <Link href="/trade-mark-opposition">trade mark oppositions</Link>,{' '}
          <Link href="/trade-mark-disputes">disputes</Link> and{' '}
          <Link href="/trade-mark-enforcement-options">
            enforcement actions
          </Link>
          .
        </li>
        <li>
          Analyse any objections, should these be raise by the Examiner, and
          assist you in addressing them.
        </li>
        <li>
          Assist you in opposition proceedings, should your trade mark
          application be opposed by a third party.
        </li>
        <li>
          Review your trade mark application and correct errors to the extent
          which is allowable under the <em>Trade Mark Regulations 1995</em>, or
          assist you on refiling your application, in the event that you have an
          application filed by yourself, or any person without a professional
          training and mistakes occur as a result.
        </li>
      </ul>
    </Layout>
  )
}
