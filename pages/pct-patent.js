import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function PctPatent() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Patent', link: '/how-to-patent' },
    { title: 'Stage 3: PCT International Patent Applications', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"} stepper={3}>
      <Head>
        <title>
          PCT Patent | PCT International Patent Applications | Baxter IP
        </title>
        <meta
          name="description"
          content="File a PCT patent with Baxter IP. PCT international patent applications with can be used to patent protect your new idea or invention internationally."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/pct-patent" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/pct%E5%9B%BD%E9%99%85%E4%B8%93%E5%88%A9"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Stage 3: PCT International Patent Applications</h1>

      <h2>How to patent an idea internationally?</h2>

      <figure>
        <Link
          href="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3.png"
          data-lbwps-width="1600"
          data-lbwps-height="523"
          data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-300x98.png"
        >
          <Image
            decoding="async"
            loading="lazy"
            width="1024"
            height="335"
            src="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1024x335.png"
            alt="Flowchart B - PCT Patent Procedure"
            srcSet="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1024x335.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-300x98.png 300w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-768x251.png 768w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1536x503.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-2048x670.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-210x69.png 210w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-100x33.png 100w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3.png 1600w"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </Link>
        <figcaption>Flowchart B &ndash; PCT Patent Procedure</figcaption>
      </figure>

      <p>
        To obtain patent protection in any country, it is necessary to file a
        patent application in that country. The filed patent application will
        then be examined according to the patent rules and regulations of that
        country.
      </p>

      <p>
        If you wish to file a complete application in a country other than
        Australia and New Zealand a complete application can be filed by:
      </p>

      <ol type="A">
        <li>Filing a Patent Cooperation Treaty (PCT) application</li>
        <li>
          Filing convention patent applications directly in the countries of
          interest
        </li>
      </ol>

      <p>
        The patent cooperation treaty (PCT) provides a centralised filing system
        for a patent in any of the designated member states of the PCT.
      </p>

      <p>
        The PCT currently has 153 contracting states and includes major trading
        partners with Australia.
      </p>

      <p>
        Alternatively, as per Option B, individual applications can be filed
        directly in each of the countries you wish to file patent applications
        in.
      </p>

      <p>
        If a priority application such as a provisional patent application has
        been filed in Australia a complete application must be filed in 12
        months from the initial filing date.
      </p>

      <p>
        If a standard patent application has been filed in Australia to
        establish a priority date, a PCT application or a convention filing can
        also be made within 12 months of the filing date of the standard patent
        application.
      </p>

      <h2>What is a PCT international patent application?</h2>

      <p>
        A PCT patent application extends the applicant&appos;s right of priority
        to 153 member states. In other words, the priority date of the{' '}
        <Link href="/provisional-patents">
          Stage 1: Provisional Patent Application
        </Link>{' '}
        will be recognised in all member states of the PCT for the purposes of
        examination of a patent application and for enforcement of any granted
        patents in each designated country that is a member state of the PCT.
      </p>

      <h2>What are the benefits of a PCT international patent application?</h2>

      <ol>
        <li>
          Delay in prosecution costs associated with national phase entry: the
          deadline for filing individual complete patent applications in the
          countries of interest is delayed from 12 months by up to a further 18
          months.
        </li>
        <li>
          Delay decision to designate countries: the option to have input in
          designating countries for patent filing may be valuable to a
          commercialisation partner that has, for example, reach in a number of
          foreign markets.
        </li>
        <li>
          A search conducted by the IPE with results that while, not being
          binding on any of the member states, is often considered during
          prosecution in some countries.
        </li>
      </ol>

      <h2>Decide if you need an international patent application</h2>

      <p>
        It is advisable to speak with a commercially focussed patent attorney to
        decide if you need a PCT application and to start thinking about filing
        a PCT application.
      </p>

      <p>
        Factors to consider include your commercial plans such as meetings with
        manufacturers or any R&amp;D timelines. It is important to consider and
        share your commercial plans with your patent attorney at the beginning
        of the patenting process.Your patent attorney can then recommend
        suitable options for you.
      </p>

      <h2>Publication of an international application</h2>

      <p>
        PCT patent applications are published internationally during the
        international phase, at 18 months from the initial filing date of the
        priority application.
      </p>

      <h2>Search report and written opinion</h2>

      <p>
        The PCT international patent process also includes an International
        Search and Written Opinion in relation to the patentability of your
        invention. Favourably, if a{' '}
        <Link href="/patent-novelty-search">Stage 2: Novelty Search</Link> was
        performed, a partial refund is often available for the cost of the PCT
        International Search.
      </p>

      <p>
        If the Examiner has raised objections in the Written Opinion, a response
        can be filed supported by amendments made to the claims of the patent
        application, if necessary, together with a Demand for further
        International Preliminary Examination (IPE), to better position your
        application for IPE. The IPE, together with an analysis of the results
        by your patent attorney, can give you an idea of the scope of patent
        protection you may be able to secure in national patent offices around
        the world.
      </p>

      <p>
        During the IPE, your patent attorney can respond to the Written Opinion
        to attempt to have the examiner consider your invention as patentable
        and issue a clear International Preliminary Report on Patentability
        (IPRP). A clear report can greatly increase the value of your IP Asset
        and is generally held in high regard by potential investors or
        licensees. If you do not respond to the WO, it is published as the IPRP.
      </p>

      <p>
        If you have any questions related to filing a patent application, feel
        free to contact any one of the{' '}
        <Link href="/patent-attorney">patent attorneys</Link> at Baxter IP.
      </p>
    </Layout>
  )
}
