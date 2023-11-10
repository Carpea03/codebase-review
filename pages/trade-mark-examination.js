import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkExamination() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'How to Trade Mark',
      link: '/how-to-trade-mark',
    },
    { title: 'Trade Mark Examination', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"} stepper={2} stepperData={true}>
      <Head>
        <title>
          Examination of a Trade Mark Application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="The examination of a trade mark application is conducted after a trade mark application is lodged to determine its registrability."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-examination"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Examination of a Trade Mark Application</h1>
      <p>
        After an Australian trade mark application is submitted to{' '}
        <Link
          href="https://www.ipaustralia.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Australia
        </Link>
        , the trade mark proceeds to examination by the examiner, who is a
        delegate of the Trade Mark Commissioner.
      </p>
      <p>
        The job of the trade mark examiner is to assess the{' '}
        <Link href="/trade-mark-application">application</Link> to check whether
        the requirements for trade mark registration are fulfilled. The main
        areas of review are:
      </p>
      <ol>
        <li>
          Are the{' '}
          <Link href="/classes-of-goods-and-services">
            goods and/or services
          </Link>{' '}
          claimed in the application clear and in the correct classes?;
        </li>
        <li>
          Is the mark too similar to previously registered/applied for marks?
        </li>
        <li>
          Is the mark otherwise allowable for registration or are there other
          prescribed reasons to prevent it from being registered?.
        </li>
      </ol>
      <p>
        If all legislative requirements are met, the mark will proceed to{' '}
        <Link href="/trade-mark-acceptance">acceptance</Link>; otherwise, the
        Office will send details of the objections to registration in an adverse
        examination report.
      </p>
      <h2>Adverse examination report</h2>
      <p>
        Adverse examination reports on trade mark applications are usually based
        on the grounds of two groups of issues, namely,
      </p>
      <ul>
        <li>
          whether the mark itself is allowable in light of Sections 39 to 43,
          and
        </li>
        <li>
          whether the mark and goods and services are sufficiently different to
          other earlier marks in light of{' '}
          <em>Section 44 of the Trade Marks Act</em>.
        </li>
      </ul>
      <p>
        If an Examination report is issued, the applicant will have a 15-month
        period during which to address any objections raised against its mark.
      </p>
      <p>Options of to approaching examination reports include:</p>
      <ol>
        <li>
          Providing submissions arguing why the objections should not have been
          raised or maintained including through legal arguments;
        </li>
        <li>
          Amending the application in order to overcome the objection(s) or;
        </li>
        <li>Providing evidence of use</li>
      </ol>
      <h3>Evidence of use</h3>
      <p>
        Section 41 and Section 44 objections are the most common objections
        raised against a mark. Section 41 provides the grounds for rejecting an
        application on the basis of the lack of distinguishing ability of the
        applicant&apos;s trade mark in relation to the goods or services stated
        in the application, whereas Section 44 elaborates rejection grounds in
        the case of similar/identical trade marks. Both objections may be
        overcome by providing evidence of use.
      </p>
      <h4>Providing evidence under Section 41</h4>
      <p>
        This section of the <em>Trade Marks Act</em> provides the grounds of
        rejection of a trade marks on the basis that the mark cannot be used to
        distinguish the claimed goods and services from those of other traders
        in the market. Some considerations for this objection to be raised
        include that the mark may be:
      </p>
      <ul>
        <li>purely descriptive of the goods and services;</li>
        <li>a common surname or geographical location; or</li>
        <li>include commonly used elements in trade.</li>
      </ul>
      <p>
        On this basis, the application may be rejected under the following
        grounds:
      </p>
      <ol>
        <li>
          <strong>Section 41(3)</strong> &ndash; the mark has no inherent
          adaptation to distinguish
        </li>
        <li>
          <strong>Section 41(4)</strong> &ndash; the mark has limited adaptation
          to distinguish
        </li>
      </ol>
      <p>
        The trade mark will only proceed to{' '}
        <Link href="/trade-mark-acceptance">acceptance</Link> if the applicant
        manages to produce evidence that satisfies the examiner that the mark
        has been used to such extent that it has acquired a secondary meaning
        that now exceeds the primary meaning, and is therefore no longer
        descriptive for the claimed goods and/or services.
      </p>
      <h5>Types of Section 41 evidence</h5>
      <p>
        To overcome an objection on the basis of Section 41(3), the applicant
        needs to provide sufficient evidence to show that, at the date of
        filing, the mark had already been used to such an extent as to
        distinguish the claimed goods and services from those of others in the
        market. Evidence of intended use, such as marketing plans, is not
        acceptable evidence in this case.
      </p>
      <p>
        To overcome an objection on the basis of Section 41(4), the applicant
        may rely on intended use to show that the mark will be capable of
        distinguishing when use in the marketplace commences, such use however
        needs to show a clear picture.
      </p>
      <p>Evidence provided by the applicant may include:</p>
      <ul>
        <li>Long period of use</li>
        <li>Large turnover or sales figures</li>
        <li>
          Continued use of the trade mark even after the filing date (only for
          41(4)).
        </li>
        <li>Consumer surveys</li>
        <li>Publications and advertising</li>
        <li>Indications of market share</li>
      </ul>
      <h5>Specification objections</h5>
      <p>
        If an objection has been raised in respect of the claimed
        goods/services, the applicant may:
      </p>
      <ol>
        <li>
          Amend the list of specifications of goods and/or services dependant on
          the objection
        </li>
        <li>
          Provide arguments to support the validity of the specification as
          claimed, including by using material that was otherwise unavailable to
          the examiner at the time of examination.
        </li>
      </ol>
      <h4>Providing evidence under Section 44</h4>
      <p>
        Section 44 discusses grounds for rejection of an applicant&apos;s mark
        on the basis that it conflicts with previously registered/applied for
        marks on the Register. Objections in these criteria may be addressed by:
      </p>
      <ol type="a">
        <li>Providing evidence of prior use;</li>
        <li>providing evidence of honest concurrent use;</li>
        <li>other circumstances.</li>
      </ol>
      <h5>Prior use</h5>
      <p>
        To establish prior use, the applicant will need to provide evidence to
        show that the trade mark was used in Australia prior to the priority
        date of the cited mark(s). Evidence that may assist will include
        information as to how the trade mark was used, in relation to which
        goods and if such use was continuous.
      </p>
      <h5>Honest concurrent use</h5>
      <p>
        Honest concurrent use evidence should include a evidence showing that
        the mark was used for a significant amount of time before the mark was
        applied for, and that during that time, the mark was used in Australia,
        continuously, for the specific goods and services claimed, concurrently
        with the cited mark and that no confusion had taken place.
      </p>
      <h5>Other circumstances</h5>
      <p>
        Other special instances for overcoming an objection raised on the basis
        of a section 44 ground may include:
      </p>
      <ul>
        <li>
          That the Applicant is using the mark with authorisation of the owner
          of the cited mark (as in the case of subsidiary companies)
        </li>
        <li>
          That the applicant has requested and obtained a letter of consent from
          the owner of the cited mark
        </li>
      </ul>
      <h2>Trade mark examination outcomes</h2>
      <p>
        The issuance of an adverse examination report does not automatically
        mean that the trade mark application is rejected. Once the applicant
        files a response to an examination report the following may occur:
      </p>
      <ol>
        <li>
          The Examiner will assess if the provided evidence/arguments are
          sufficient to overcome the objections, if all or some objections are
          maintained, an additional report may be issued. If the applicant fails
          to overcome the objections raised on the report(s) within 15 months of
          the first report being issued (and if no extensions are requested),
          the application will be refused; or
        </li>
        <li>
          The provided evidence/arguments is considered sufficient to overcome
          the objections against the mark and the mark will be accepted for
          registration.
        </li>
      </ol>
      <p>
        Once the trade mark is{' '}
        <Link href="/trade-mark-acceptance">accepted</Link>, its details will be
        published in the Australian Official Journal of Trade Marks for a
        two-month opposition period. If no{' '}
        <Link href="/trade-mark-opposition">opposition</Link> is filed within
        this time, the mark will then proceed to registration.
      </p>
    </Layout>
  )
}
