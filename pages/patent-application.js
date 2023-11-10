import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentApplication() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Patent', link: '/how-to-patent' },
    { title: 'Australian Patent Application', link: '' },
  ] 
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Filing an Australian Patent Application | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Most Australian patent applications filed in the first instance are provisional patents which can secure an international priority date on your invention."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-application"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Filing an Australian Patent Application</h1>
      <p>
        There are two main types of patents available in Australia: these are a
        provisional patent application and a standard patent application.
      </p>

      <h2>Filing a provisional patent application</h2>

      <p>
        A{' '}
        <Link href="/provisional-patents">provisional patent application</Link>{' '}
        is useful for securing a priority date for an invention, however, only a
        standard patent application can be granted and provide enforceable
        rights. A provisional patent expires after 12 months and must therefore
        be followed up by a standard or PCT patent application in order for a
        patentee to continue along the path toward being granted patent rights.
      </p>

      <p>
        A provisional patent secures an international filing date so you can
        then enter into any commercial discussions with the knowledge that your
        priority date has been secured. You should not, however, disclose any
        information in your meetings if that information was not also included
        in the provisional patent. The good news is that you can file multiple
        provisional patent applications covering updated information and then
        claim priority from each one so long as you file a standard or PCT
        patent within 12 months of the earliest priority date, i.e. your first
        filed provisional patent.
      </p>

      <h2>Form of patent applications when filed</h2>

      <p>
        Patent applications must include a patent request form that identifies
        the owners of the patent application along with other details such as
        the inventors to be named, the title of the invention and any other
        associated priority documents (such as a provisional application). The
        other important document that must be filed is a patent specification.
        The specification is a document that describes the invention in
        sufficient detail to allow a person skilled in the art to recreate the
        invention armed only with the document and their own knowledge of the
        industry. A specification typically includes an abstract, drawings and a
        detailed description of at least one embodiment or version of the
        invention.
      </p>

      <h2>Filing a standard patent application</h2>

      <p>
        A standard patent application must include at least one claim that
        defines the scope of the monopoly the applicant is seeking. A standard
        patent application can have as many claims as is necessary although each
        must include the same inventive concept and additional government grant
        fees apply for each claim over 20.
      </p>

      <p>
        The majority of work in preparing a standard patent application for
        filing goes into preparing the patent specification. It is extremely
        important for the patent attorney to receive all the information about
        the invention when preparing the specification as only very limited
        changes can be made to the specification once it has been filed. No new
        information can be added to a specification once it is lodged. While
        minor amendments can be made, these changes can only be made within the
        scope of the information as filed.
      </p>

      <h3>How to work with your patent attorney</h3>

      <p>
        The best way to assist your{' '}
        <Link href="/patent-attorney">patent attorney</Link> in preparing the
        specification is to fully document your invention along with any
        sketches or drawings. This can then be sent confidentially to your
        patent attorney who will review the material and then typically arrange
        one or more meetings so they can fully understand the invention. This
        will allow the patent attorney to include all the necessary information
        in the specification and will assist them in understanding where the
        crux of the invention is. This will ultimately lead to a better patent
        specification and ultimately stronger patent rights if your patent is
        granted.
      </p>

      <h3>Important considerations in timing</h3>

      <p>
        Depending on the complexity of your invention, it can typically take
        between 2 and 6 weeks for your attorney to prepare and file a patent
        application. This time is required due to the complexity of the patent
        specification and the need to fully describe your invention. Ideally,
        you should not disclose the invention to any other person or company,
        even with non-disclosure agreements, prior to securing your filing date
        as any public disclosure could invalidate your patent (even if you are
        the one to disclose the information).
      </p>

      <h3>Note about innovation patents</h3>

      <p>
        There is also a type of patent called an{' '}
        <Link href="/innovation-patent-application">Innovation Patent</Link> but
        it is only available these days as a divisional of a complete (standard,
        divisional or PCT) patent application filed on or before 25 August 2021.
        If this may be relevant to you, please{' '}
        <Link href="/contact">contact us</Link> and we would be happy to provide
        a detailed explanation of this right.
      </p>
    </Layout>
  )
}
