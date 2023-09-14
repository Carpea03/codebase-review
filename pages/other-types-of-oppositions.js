import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function OtherTypesOfOppositions() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade Marks Oppositions & Disputes',
      link: '/trade-mark-oppositions-disputes',
    },
    { title: 'Other Types of Oppositions', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Other Types of Oppositions | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Knowing the types of oppositions, such as opposing time extension and opposing amendment allows you to protect your trade mark's position in the market.The trade mark opposition procedure can be undertaken to oppose or challenge the registration of an accepted trade mark application."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/other-types-of-oppositions"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Other Types of Oppositions</h1>
      <p>
        Any party can lodge an{' '}
        <Link href="/trade-mark-opposition">opposition</Link>, which is a formal
        complaint submitted to{' '}
        <Link
          href="https://www.ipaustralia.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Australia
        </Link>{' '}
        to counter the registration of a trade mark. However, other types of
        oppositions can be filed to stop other requests made to IP Australia.
      </p>

      <h2>Opposing an extension of time of more than three months</h2>

      <p>
        Owing to commercial or strategic reasons, a party may oppose an
        extension of time of more than 3 months requested by another party.
        There are provisions for this under section 224 of the{' '}
        <em>Trade Marks Act 1995</em>.
      </p>

      <p>Common reasons for opposing an extension include:</p>

      <ul>
        <li>
          The other party has already been granted a sufficient amount of time
          to address the issues in their application.
        </li>
        <li>
          Your position may become disadvantageous if such an extension is
          granted.
        </li>
        <li>
          The other party has provided insufficient justification for the time
          extension.
        </li>
      </ul>

      <p>
        In order to oppose a request for time extension beyond three months, the
        opponent must submit a notice of intention to oppose within one month of
        advertising the request for extension in the Australian Official Journal
        of Trade Marks and paying the corresponding opposition fee ($250 per
        trade mark).
      </p>

      <h2>Opposing an amendment to a trade mark application</h2>

      <p>
        Similarly, you may oppose a request to change a trade mark application
        according to section 65A of the <em>Trade Marks Act 1995</em> if you
        consider that the <Link href="/trade-mark-amendment">amendment</Link>{' '}
        will affect your trade mark rights.
      </p>

      <p>
        To oppose an amendment to a trade mark application after the
        advertisement of the details, you will need to file a notice of
        intention to oppose within one month of the request being published in
        the official trade mark journal and pay the corresponding fee.
      </p>

      <h2>Opposing removal applications for non-use</h2>

      <p>
        Trade mark registrations may be removed if it is no longer used by the
        registered owner. Non-use removal action is one of the common approaches
        for trade mark applicants to address conflicting prior registrations. As
        a trade mark owner, you may defend your registration by opposing the
        non-use application.
      </p>

      <h3>Intention to Oppose</h3>

      <p>
        To oppose an application for removal of a trade mark registration, the
        registered owner can file a Notice of Intention to Oppose, followed by a
        Statement of Goods and Particulars. If no opposition is filed or the
        owner fails to file a Statement of Grounds and Particulars (SoGP), the
        registration will be removed.
      </p>

      <h3>Intention to Defend</h3>

      <p>
        If an opposition is initiated, to pursue the non-use application, the
        removal applicant may file a Notice of Intention to Defend within 1
        month from the date of receiving the SoGP filed by the owner. Failure to
        file a NID will result in the registration remaining on the register.
      </p>

      <h3>Evidence in Support</h3>

      <p>
        If the removal applicant files a NID, the opponent must file Evidence in
        Support (EIS) in support of the grounds of the opposition. If EIS is not
        filed, Opposition fails and registration will be removed.
      </p>

      <h3>Evidence in Answer</h3>

      <p>
        If EIS is filed by the opponent, the removal applicant may file Evidence
        in Answer (EIA).
      </p>

      <h3>Evidence in Reply</h3>

      <p>
        If EIA is filed by the removal applicant, the opponent may file Evidence
        in Reply (EIR) in response to EIA.
      </p>

      <h3>Hearing</h3>

      <p>
        When the evidence stage ends, either party may request to be heard or
        present written submissions in order to support their case.
      </p>

      <h3>Decision</h3>

      <p>
        The Hearing Officer decides the case based on his or her consideration
        of the evidence and submissions filed by both parties. A decision is
        made in writing and sent to both parties. The winning party may be
        awarded costs.
      </p>
    </Layout>
  )
}
