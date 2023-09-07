import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function InnovationPatentApplication() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Patents', link: '/patents' },
    { title: 'How to patent', link: '/how-to-patent' },
    { title: 'Innovation patent application', link: '' },
  ]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          Innovation patent applications | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="File an Australian innovation patent application with Baxter IP. Learn the innovation patent process and costs for innovation patents in Australia."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/innovation-patent-application"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/innovation-patents"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%88%9B%E6%96%B0%E4%B8%93%E5%88%A9%E7%94%B3%E8%AF%B7"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Innovation patent application</h1>
      <p>
        An Innovation patent is a second tier form of patent protection in
        Australia primarily developed for use in protecting incremental
        innovation. However, innovation patents have now become a useful and
        strategic litigation tool.
      </p>
      <h2>Benefits of innovation patent applications</h2>
      <p>
        There are three main benefits to filing an innovation patent
        application:
      </p>
      <ol>
        <li>It is relatively inexpensive,</li>
        <li>It is granted quickly, and</li>
        <li>
          It is relatively difficult for a third party to have it revoked.
        </li>
      </ol>
      <p>
        Two disadvantages of the innovation patent system are that innovation
        patents only last for 8 years and that innovation patent applications
        may not include more than five claims.
      </p>
      <h2>Can I get an innovation patent on my product?</h2>
      <p>
        Yes &ndash; if your product has a feature that is new when compared with
        the <Link href="/ip-glossary#prior-art">prior art</Link>. That new
        feature can be obvious but must make a difference to the functionality
        of the product. The prior art includes all patents and published{' '}
        <Link
          title="File a Provisional Patent Application"
          href="/provisional-patents"
        >
          patent applications
        </Link>{' '}
        worldwide, as well as all other publicly available information.
      </p>
      <h2>
        What is the process for obtaining and enforcing an Australian innovation
        patent?
      </h2>
      <p>
        The following section outlines the Australian innovation patent process.
      </p>
      <p>
        Once filed, an innovation patent application will pass through a
        formalities examination. Your{' '}
        <Link
          title="Patent Attorneys Sydney &amp; Melbourne"
          href="/patent-attorney"
        >
          patent attorney
        </Link>{' '}
        will receive notification of grant or a formalities report within three
        months of filing the innovation patent application.
      </p>
      <p>
        To obtain an enforceable innovation patent right, a Request for
        Certification of the granted innovation patent application must be filed
        with IP Australia &ndash; this can be done at any time after the
        innovation patent has been granted. IP Australia will then conduct a
        substantive examination of the Innovation Patent to determine whether
        the Innovation Patent is new and includes an innovative step over the
        prior art. Anyone (not only the owner of the Innovation Patent) can
        request certification of the innovation patent at any time during the
        term of grant.
      </p>
      <p>
        If the innovation patent application is successful during examination,
        it will be certified. A certified Innovation Patent can be used to stop
        infringement of the innovation by third parties in the Australian
        Federal Court. However, most disputes are settled out of court. It
        should be noted that certification is not a presumption that the
        innovation patent is valid.
      </p>
      <p>
        Included in the innovation patent costs, annual renewal fees are payable
        throughout the life of the patent, which is up to 8 years.
      </p>
      <p>
        The flowchart below illustrates the innovation patent process in
        Australia.
      </p>
      <figure>
        <Link
          href="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2.png"
          data-lbwps-width="1600"
          data-lbwps-height="421"
          data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-300x79.png"
        >
          <Image
            decoding="async"
            loading="lazy"
            width="1024"
            height="270"
            src="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1024x270.png"
            alt="Innovation Patent Procedure"
            srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1024x270.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-300x79.png 300w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-768x202.png 768w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1536x405.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-2048x539.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-210x55.png 210w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-100x26.png 100w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2.png 1600w"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </Link>
        <figcaption>Innovation Patent Procedure</figcaption>
      </figure>
      <h2>Innovation patent strategy</h2>
      <p>
        There are a variety of strategic uses for the innovation patent system.
        Here are some strategies that have been adopted by our clients at
        various times:
      </p>
      <ol>
        <li>
          An innovation patent can be used to specifically target an alleged
          infringer of a granted standard patent. This is achieved by filing a
          divisional innovation patent of the standard patent application. The
          divisional innovation patent will bear the same priority date as the
          standard patent application and thus will enable the infringer&apos;s
          activities to be captured. The claims of the innovation patent are
          specifically drafted by your{' '}
          <Link
            title="Patent Attorneys Sydney &amp; Melbourne"
            href="/patent-attorney"
          >
            patent attorney
          </Link>{' '}
          to ensure the maximum overlap with the infringer&apos;s product or
          process.
        </li>
        <li>
          An innovation patent may be filed as a standard patent is about to
          expire where the innovation patent differs only marginally from that
          of the invention of the standard patent, but where the difference
          possesses an innovative step. In this manner, it is possible to
          effectively extend patent protection for an invention beyond the
          initial 20-year term in a process known as <em>evergreening</em>.
        </li>
        <li>
          By filing a series of innovation patents surrounding a product of a
          competitor, it is relatively easy and cost-effective to form a
          <em>patent thicket</em> around the product, which subsequently makes
          it increasingly difficult and costly for the competitor to maintain
          freedom-to-operate.
        </li>
        <li>
          A variant on 2. is the filing of multiple divisional innovation
          patents claiming priority from a standard patent application, each for
          a minor variant of the invention. This makes opposing the invention a
          difficult and costly process as the opponent must then challenge each
          of the innovation patents, as well as the standard patent. Such a
          patent thicket is also very useful for an application as it creates a
          great deal of uncertainty for potential competitors as to whether they
          are likely to infringe one or more of the patents if they decide to
          enter the sector of the market to which the patents relate.
        </li>
      </ol>
    </Layout>
  )
}
