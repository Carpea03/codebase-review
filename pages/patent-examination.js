import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentExamination() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Patent', link: '/how-to-patent' },
    { title: 'Patent Examination and Publication', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Examination of an Australian Patent Application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Examination of Australian patent applications involve testing the patent claims to determine whether they are new and inventive in relation to the prior art."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-examination"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Examination and Publication of an Australian Patent Application</h1>
      <h2>Publication of an Australian patent application</h2>

      <p>
        <Link href="/patent-application">Australian patent applications</Link>{' '}
        and <Link href="/pct-patent">PCT patent applications</Link> are
        published at 18 months from their earliest priority date. This is
        typically the filing date of the first{' '}
        <Link href="/provisional-patents">provisional patent application</Link>{' '}
        filed in the family. Standard Australian patent applications are then
        published again when they are accepted. This is done because the claims
        typically change during examination and it is necessary to publish the
        accepted claims.
      </p>

      <p>
        Provisional patent applications are not published if no priority is
        claimed from them.
      </p>

      <p>
        Publication of patents is significant because upon publication the
        information about your invention included in your patent specification
        is no longer confidential. It becomes part of the public knowledge and
        can be accessed by anyone online.
      </p>

      <p>
        Another important aspect is that use of your invention by a third party
        after publication can lead to infringement if the claims of the patent
        are allowed or certified.
      </p>

      <h2>Examination of an Australian patent application</h2>

      <p>
        Examination of Australian patent applications typically takes place
        18-36 months after the patent application has been filed and is a
        detailed review by an Examiner to determine whether the patent claims
        included in a specification meet the requirements of patentability and
        can thus be granted. Only granted patent claims are legally enforceable.
        Provisional patent applications are not examined.
      </p>

      <p>
        Examination of a standard patent is required within 5 years of filing
        the application, although as mentioned above, the patent office will
        typically direct a patent applicant to request examination prior to
        this. The primary considerations during examination of a standard patent
        are whether the claims are patentable subject matter and are new and
        involve an inventive step in respect of the prior art.
      </p>

      <p>
        If during an examination, a standard patent does not meet the
        requirements of the <em>Patents Act 1990</em>, then the Examiner will
        raise one or more objections. The applicant will have the opportunity to
        overcome these objections by making allowable amendments to the
        specification and claims but if the objections cannot be overcome then
        the patent application will lapse.
      </p>
    </Layout>
  )
}
