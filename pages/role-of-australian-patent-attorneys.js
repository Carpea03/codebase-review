import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function RoleOfAustralianPatentAttorneys() {
  const data = [
    { title: 'Join us', link: '/ip-careers' },
    { title: 'The role of Australian patent attorneys', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          The role of Australian patent attorneys | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="The role of Australian patent attorneys is to use their expertise and understanding of patent law to aid clients seeking protection for their innovations."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/role-of-australian-trade-mark-attorneys"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B8%93%E5%88%A9%E4%BB%A3%E7%90%86%E4%BA%BA%E7%9A%84%E8%A7%92%E8%89%B2"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>The role of Australian patent attorneys</h1>
      <p>
        An Australian patent attorney is a person who represents a patent
        applicant or patent owner before IP Australia and other bodies and is
        specially qualified to do so.{' '}
        <Link
          title="Patent Attorneys Sydney &amp; Melbourne"
          href="/patent-attorney"
        >
          Australian patent attorneys
        </Link>{' '}
        can help clients file, prosecute (e.g. handle the patent examination
        process) and maintain{' '}
        <Link
          title="File a Provisional Patent Application"
          href="/provisional-patents"
        >
          patent applications
        </Link>{' '}
        as well as act for clients in patent oppositions and provide patent
        validity and infringement advice.
      </p>
      <p>
        Registration as a patent attorney in Australia is administered by the
        Professional Standards Board for Patents and Trade Marks Attorneys. The
        Professional Standard Board publishes a Code of Conduct and administers
        the disciplinary regime for all patent attorneys in Australia.
      </p>
      <p>
        Some Australian patent attorneys are fellows or ordinary members of the
        Institute of Patent &amp; Trade Mark Attorneys of Australia, the
        professional body governing the patent attorney profession in Australia.
      </p>
      <p>
        Patent attorneys have a right of privilege in their communication with
        clients in respect of intellectual property matters.
      </p>

      <h2>Australian patent attorney qualifications</h2>

      <p>
        Patent attorneys generally must have both an engineering or science
        degree and have completed a group of topics prescribed by the
        Professional Standards Board. This group of topics may take the form of
        a Masters degree, such as the Master of Industrial Property offered by
        the University of Technology, Sydney.
      </p>

      <h2>Scope of activities and the role of Australian patent attorneys</h2>

      <p>
        The Institute of Patent &amp; Trade Mark Attorneys website provides a
        good summary of the role of patent attorneys and the activities they can
        carry out:
      </p>

      <ul>
        <li>
          Advise on intellectual property (IP), and help IP owners register and
          maintain their property;
        </li>
        <li>
          Apply for and secure patents, registered{' '}
          <Link title="How to trade mark your brand?" href="/how-to-trade-mark">
            trade marks
          </Link>
          ,{' '}
          <Link
            title="Registered Design Applications"
            href="/registered-designs"
          >
            registered designs
          </Link>{' '}
          and plant variety types in Australia and overseas;
        </li>
        <li>Help transfer technology by licensing and other processes;</li>
        <li>
          Conduct <Link href="/ip-audit">IP audits</Link> of organisations and
          products;
        </li>
        <li>
          Determine whether a development is new and sufficiently inventive to
          justify a patent;
        </li>
        <li>
          Determine the nature and ambit of inventions and prepare patent
          specifications;
        </li>
        <li>
          Lodge documents with the Patent Office, and guide applications through
          the patent process;
        </li>
        <li>
          Australian patent attorneys also help clients manage their IP
          portfolios, advise on patents and registrations held by others and
          advise on{' '}
          <Link
            title=""
            href="/ip-glossary#infringement"
            data-toggle="tooltip"
            data-placement="bottom"
            data-original-title="A prohibited act in regards to the use of another persons patent without their permission. Such permission is usually granted through a license."
          >
            patent infringement
          </Link>{' '}
          and validity
        </li>
      </ul>
    </Layout>
  )
}
