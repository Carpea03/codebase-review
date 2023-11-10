import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PreparingAnEvidenceOfUseReport() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade Mark Oppositions & Disputes',
      link: '/trade-mark-oppositions-disputes',
    },
    { title: 'Evidence of Use Preparation', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Preparing an Evidence of Use Report | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="To counter trade mark opposition against your trade mark, you evidence of use report must address the issues raised by the trade mark examiner."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/preparing-evidence-of-use-report"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Preparing an Evidence of Use Report</h1>
      <p>
        In certain cases, providing evidence of use of a trade mark can help
        overcome objections raised during prosecution of a trade mark. Evidence
        of Use is documentation showing how the trade mark has been used or
        promoted and can be used to prove prior use or contest against alleged
        non-use of the trade mark. Eligibility of the evidence is determined by
        the trade mark examiner, and evidence must be submitted in the correct
        format. Evidence of use typically includes documentation of how the
        trade mark has been used, how long the trade mark has been used and any
        promotional activity related to the trade mark.
      </p>
      <p>
        Section 44 of the <em>Trade Marks Act 1995</em> outlines the type and
        quantity of evidence needed to be submitted in the report. The evidence
        must demonstrate prior use, honest concurrent use, or other
        circumstantial evidence that will address the issues raised by the
        Examiner. To show prior use, there needs to be documentation of the
        trade mark&apos;s use before the opposing trader&apos;s use. Honest
        concurrent use may be established only if the trade mark was used in
        Australia before the filing date of the application.
      </p>
      <p>
        Evidence of actual use can include the trade mark&apos; history of use,
        including when the trade mark was first used on the{' '}
        <Link href="/classes-of-goods-and-services">goods or services</Link> it
        was registered for, the{' '}
        <Link href="/special-types-of-trade-marks#geographical-indication">
          geographical area
        </Link>{' '}
        in which the trade mark was used, the products in respect of which it
        was registered and examples of how it was used. Images of the trade mark
        on objects or actual objects would, for example, show how the trade mark
        was used. In certain cases, evidence of intended use, such as business
        plans or costs already incurred, may be provided.
      </p>
      <p>
        Section 41 of the <em>Trade Marks Act 1995</em> establishes the required
        documentation to show promotion of the trade mark. Promotional evidence
        can include clearly dated advertisements or articles containing the
        registered trade mark.
      </p>
      <h2>
        Examples demonstrating the importance of preparing quality evidence
      </h2>
      <p>
        In <em>Australian Char Pty Ltd v The Kingsford Products Company LLC</em>
        , the use of AU TM 492977 or MATCHLITE was in question. Australian Char
        Pty Ltd did not demonstrate the use of the registered trade mark nor
        show an intention to use the trade mark. The trade mark had been in use
        from 1988 until 2006 when the local factory closed. From 2013 to 2016,
        Australian Char Pty Ltd worked to re-establish the MATCHLITE line, but
        the evidence provided was found to be insufficient. The Hearing Officer
        was unable to give any weight to their statement, and it was determined
        that the trade mark be removed from all goods and services under the
        registration, like manufacturing and selling barbeque briquette.
      </p>
      <p>
        In <em>Inntech Pty Ltd v Pointpal Holdings Pty Ltd</em>, Inntech opposed
        a non-use application filed by Pointpal against a logo containing a
        stylised version of the words &quot;pico life&quot;. The trade mark was
        used on Inntech Pty Ltd&apos;s website in respect of various products
        promoted and sold by Inntech in Australia during the relevant period.
        There was evidence of use of the trade mark during the relevant period,
        but no evidence of use of the mark in respect to the full range of goods
        for which it was registered was provided. It was determined that the
        trade mark was not abandoned, and the evidence demonstrated that it was
        in both, public interest and in the opponent&apos;s interest (Inntech)
        that the trade mark remain registered for all of the goods within the
        specification.
      </p>
      <hr />
      <p>
        If you need assistance in preparing evidence of use to respond to an{' '}
        <Link href="/trade-mark-examination">Examination report</Link> please
        contact our{' '}
        <Link href="/trade-mark-attorney">trade mark attorneys</Link> to
        discuss.
      </p>
    </Layout>
  )
}
