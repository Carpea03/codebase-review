import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkAcceptance() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade marks',
      link: '/trade-marks',
    },
    {
      title: 'How to trade mark',
      link: '/how-to-trade-mark',
    },
    { title: 'Trade mark acceptance', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Acceptance of a trade mark application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="The acceptance of a trade mark application occurs when an application has successfully overcome any issues raised during the examination phase."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-acceptance"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Acceptance of a trade mark application</h1>
      <h2>What happens once a mark is accepted?</h2>
      <p>
        If an adverse Examination Report is not issued in relation to an
        application, or if the Applicant has successfully overcome any issues
        raised during <Link href="/trade-mark-examination">examination</Link>,
        the mark will be accepted for registration.
      </p>
      <p>
        Once the mark is accepted, it will be advertised in the Australian
        Official Journal of Trade Marks for a two-month period which allows any
        third party to{' '}
        <Link href="/trade-mark-opposition">oppose registration</Link>. If the
        application is not opposed during this period, or if an extension of
        time to file an opposition has not been requested, the mark will be
        registered.
      </p>
      <h2>Deferment of acceptance of a trade mark</h2>
      <p>
        Trade mark acceptance may be deferred when a written request is
        submitted by the applicant in order to address an objection raised in an
        adverse examination report issued by{' '}
        <Link
          href="https://www.ipaustralia.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Australia
        </Link>{' '}
        during formal examination. An objection may arise due to a conflict with
        a previously registered or applied for trade mark under section 44 or
        reg 4.15A.
      </p>
      <p>Deferment can be requested on the following basis:</p>
      <ul>
        <li>the trade mark(s) in conflict are still pending;</li>
        <li>
          the conflicting registration(s) has been challenged and is undergoing
          non-use removal or cancellation proceedings;
        </li>
        <li>
          the cited trade mark(s) has a registration status of &ldquo;expired
          &ndash; renewal possible&rdquo;
        </li>
        <li>the conflicting trade marks have pending court action</li>
        <li>
          the applicant aims to establish prior use or honest, concurrent use or
          obtain a letter of consent from the owner of the conflicting trade
          mark
        </li>
      </ul>
      <p>
        A Request for Deferment of Acceptance may be requested at any time
        within 15 months from the first adverse report date. If the request is
        entered close to the acceptance deadline, it may also be necessary that
        the Applicant enter an extension of time for the deferment request to be
        considered before the application lapses. Deferment may be granted at
        the Registrar&apos;s own discretion.
      </p>
      <p>
        The end of the deferment period will depend on the circumstances in
        which the deferment was requested. Possible scenarios on when the
        deferment will end include:
      </p>
      <ul>
        <li>The conflicting application/registration has been withdrawn</li>
        <li>
          The Registrar is satisfied the ground for rejection no longer exists
        </li>
        <li>
          Proceedings described above have ended and the conflicting mark(s) has
          been removed or renewed.
        </li>
      </ul>
      <p>
        For deferment granted on the basis of prior use, honest concurrent use
        and other circumstances, deferment will end after a period of six
        months. The new acceptance date will be calculated based on the end date
        of the deferment.
      </p>
    </Layout>
  )
}
