import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkAmendment() {
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
    { title: 'Trade mark amendment', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          Amending your trade mark application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Amendment of your trade mark may be requested at any point in your trade mark's timeline, but only under certain conditions."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-amendment"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Amending your trade mark application</h1>
      <p>
        A trade mark owner can request to have several details of their trade
        mark amended at any point after filing the{' '}
        <Link href="/trade-mark-application">trade mark application</Link>.
        Trade marks can be amended before or after registration, but only under
        certain conditions. Amendments that can be rectified over a phone call
        includes minor spelling errors, revisions of convention application
        numbers with respect to a priority claim and clerical errors in the
        address for service.
      </p>
      <p>
        Other more complicated revisions have to be done in writing through the
        online services section of{' '}
        <Link
          href="https://www.ipaustralia.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Australia
        </Link>
        . Examples of these revisions include changes in the owner&apos;s names
        and details, changes in the representation of the trade mark, deletion
        of{' '}
        <Link href="/classes-of-goods-and-services">
          classes of goods and services
        </Link>
        , addition or changing endorsements, as well as non-english and
        non-Roman translation endorsements.
      </p>
      <h2>Amendment of trade mark application prior to registration</h2>
      <p>
        Changes can be made to the application as long as the amendment would
        not bestow extended rights and coverage if granted. It is possible for
        the particulars of an application to be amended before the application
        is published, but these are extremely limited and may apply only very
        specific situations.
      </p>
      <p>Once the mark has been published, changes that can be made include:</p>
      <ul>
        <li>changes to the name and address of the applicant;</li>
        <li>changes to the address for service;</li>
        <li>changes to the representation of the mark;</li>
        <li>
          one or more trade marks from the application may be removed (in the
          case of a &ldquo;series&rdquo; application);
        </li>
        <li>classes of goods and services may be corrected; and/or</li>
        <li>adding or changing endorsements.</li>
      </ul>
      <h2>Amendments after registration</h2>
      <p>
        Once a mark has been registered, the Trade Marks office will allow
        amendments of the following nature only:
      </p>
      <ul>
        <li>correcting an office error;</li>
        <li>
          revisions in the registered mark (as long as the identity of the trade
          mark as published is unchanged);
        </li>
        <li>changes in the trade mark owner&apos;s details; and/or</li>
        <li>changes in the address for service</li>
      </ul>
      <p>
        In general, amendments need to be considered by the Registrar and will
        be granted if the Registrar considers the request is fair and reasonable
        and does not affect other people&apos;s rights. Thus, classes of goods
        and services cannot be added, as this would grant the trade mark
        applicant extended rights. In addition, certain amendments may have to
        be advertised in the Australian Official Journal of Trade marks so that
        any third party can oppose the amendment in case the proposed revisions
        to the trade mark are in conflict with their own intellectual property
        rights.
      </p>
      <h2>Amendments prior to renewal</h2>
      <p>
        Prior to <Link href="/trade-mark-renewal">renewal</Link>, the trade mark
        registration can be amended. For example, the name(s) and/or address(es)
        of the applicant may change. Appropriate assignments of rights must be
        in place. You may also decide to reduce the number of{' '}
        <Link href="/classes-of-goods-and-services">
          classes of goods and services
        </Link>{' '}
        in the registration in order to avoid non-use disputes. Reducing the
        number of classes will also decrease trade mark renewal costs, which
        depend on the number of classes specified on the registration. Your{' '}
        <Link href="/trade-mark-attorney">trade mark attorney</Link> can file
        any permissible amendments through IP Australia.
      </p>
    </Layout>
  )
}
