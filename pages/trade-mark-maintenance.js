import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkMaintenance() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade marks',
      link: '/trade-marks',
    },
    {
      title: 'How to Trade Mark',
      link: '/how-to-trade-mark',
    },
    { title: 'Trade Mark Maintenance', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"} stepper={true} stepperData={true}>
      <Head>
        <title>
          Maintaining your Trade Mark Application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Trade mark maintenance should be properly exercised to gain the maximum utility of your trade mark, as well as to maximise the benefits of your trade mark."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-maintenance"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Maintaining your Trade Mark Application</h1>
      <p>
        Being able to readily enforce rights in a brand against an infringing
        competitor is one of the major benefits of registering a trade mark. A
        registered trade mark can also act as a deterrent to competitors
        considering copying your trade mark and so, benefiting from the
        reputation in your trade mark. However, this benefit can only be
        maximised if the trade mark owner exercises proper trade mark
        maintenance.
      </p>
      <p>
        You can conduct several activities to properly maintain your trade mark
        as outlined below:
      </p>
      <ol>
        <li>
          <strong>
            Monitor new trade mark applications lodged with IP Australia to
            identify new marks that appear similar to your trade mark.
          </strong>{' '}
          Contact an attorney to potentially file an opposition to the
          registration of an accepted trade mark that you are concerned about.
        </li>
        <li>
          <strong>
            Use the trade mark in relation to the classes of goods and services
            indicated in the registration.
          </strong>{' '}
          Failure to do so may open an avenue for another party to file for
          removal for non-use. A trade mark that has been registered for five
          years and which has not been used for a continuous period of three
          years is vulnerable to a non-use attack.{' '}
          <Link href="/special-types-of-trade-marks">
            Defensive trade marks
          </Link>{' '}
          are exempt from disputes due to non-use.
        </li>
        <li>
          <strong>
            Conduct monitoring searches to identify if any third party in the
            market may be infringing upon or diluting your trade mark.
          </strong>{' '}
          IP Australia is not responsible for monitoring infringing activity;
          the trade mark owner is. Know the movement of your competitors and
          beware of counterfeiters and competitor action that may{' '}
          <Link href="/ip-glossary#trade-mark-dilution">dilute</Link> or tarnish
          the value of your trade mark. Understand the types of relief available
          to trade mark owners against these parties, for example seizure of
          goods upon arrival in Australia or other injunctive relief.
        </li>
        <li>
          <strong>
            Have your trade mark{' '}
            <Link className="text-danger" href="/trade-mark-amendment">
              amended
            </Link>{' '}
            to exclude classes for which the trade mark is not used.
          </strong>{' '}
          New classes of goods and services cannot be added after the trade mark
          has been registered. In addition, update information in the case of
          changes in the name and address of the applicant, address in service,
          agent, and other contact details.
        </li>
        <li>
          <strong>
            Apply for international protection if you intend for the business to
            expand to other countries such as for example, through distribution,
            licensing or manufacture.
          </strong>{' '}
          An Australian registered trade mark does not provide protection in any
          jurisdiction other than Australia, and there are no provisions for a
          universal trade mark registration. The trade mark may be registered in
          foreign jurisdictions by{' '}
          <Link href="/international-trade-mark-application">
            filing individual applications in different countries
          </Link>{' '}
          or{' '}
          <Link href="/madrid-protocol-application">
            through the Madrid Protocol system
          </Link>{' '}
          which is a centralised filing system for foreign trade marks.
        </li>
        <li>
          <strong>
            Maintain the trade mark and{' '}
            <Link className="text-danger" href="/trade-mark-renewal">
              be aware of important dates
            </Link>
            .
          </strong>{' '}
          Trade mark registration is virtually interminable, provided that
          renewal fees are paid every 10 years and the trade mark continues to
          be used commercially as a trade mark. Renewal fees can be paid from 12
          months before the renewal deadline and up to 6 months after the
          renewal deadline in Australia. However, additional fees will be
          incurred when the renewal fee is paid after the renewal date.
        </li>
      </ol>
    </Layout>
  )
}
