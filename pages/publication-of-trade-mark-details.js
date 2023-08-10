import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function MadridProtocolApplication() {
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
    { title: 'Trade mark publication', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          Publication of your trade mark details | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="After acceptance of the trade mark, the trade mark details are made available to the public in the Register of Trade Marks."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/publication-of-trade-mark-details"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Publication of trade mark details</h1>
      <p>
        When applying for{' '}
        <Link href="/trade-mark-application">trade mark registration</Link>, you
        are required to provide information that will be made available to the
        public on publication of your trade mark details. Therefore, it is
        important to consider what the strategic implications may be of the
        disclosure of, for example:
      </p>
      <ul>
        <li>
          future{' '}
          <Link href="/classes-of-goods-and-services">goods or services</Link>{' '}
          you are planning to launch as stated in the Statement of
          Goods/Services;
        </li>
        <li>
          new <Link href="/choosing-a-brand-name">branding</Link> before that
          branding is launched; and
        </li>
        <li>
          shape trade marks showing{' '}
          <Link href="/types-of-trade-marks">elements of future designs</Link>.
        </li>
      </ul>
      <p>
        It is possible to request that the Registrar keep certain information
        confidential. Specifically, the following information that might be
        disclosed in:
      </p>
      <ul>
        <li>
          <Link href="/preparing-evidence-of-use-report">evidence of use</Link>,
          or intention to use, a trade mark;
        </li>
        <li>
          declarations regarding the reasons for expedited{' '}
          <Link href="/trade-mark-examination">examination</Link> or various
          other reasons for requests for time extensions; or
        </li>
        <li>
          documents filed in relation to{' '}
          <Link href="/trade-mark-opposition">opposition</Link> matters (but not
          the notice of opposition itself).
        </li>
      </ul>
      <p>
        Other information is made available to the public, and the Registrar
        will not allow for that information to be kept confidential. These
        information includes:
      </p>
      <ul>
        <li>responses to examination reports;</li>
        <li>contact details (name and addresses) of trade mark applicants;</li>
        <li>
          names and businesses of declarants, including their position, length
          of tenure in the company or organisation, business address and their
          signatures;
        </li>
        <li>information regarding witnesses to a declaration;</li>
        <li>publicly known marketing collateral and activities; and</li>
        <li>
          length of time of use of the trade mark to represent the corresponding
          goods and/or services.
        </li>
      </ul>
      <p>
        Essentially, for information to be considered confidential, it must be
        of sufficient significance and be inherently confidential.
      </p>
    </Layout>
  )
}
