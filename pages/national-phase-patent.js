import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function NationalPhasePatent() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Patents', link: '/patents' },
    { title: 'How to patent', link: '/how-to-patent' },
    { title: 'Stage 4: National phase patent applications', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"} stepper={4}>
      <Head>
        <title>
          Australian PCT national phase patent application | Baxter IP
        </title>
        <meta
          name="description"
          content="File a PCT national phase entry patent application with Baxter IP to obtain patent protection in countries of your choice via the PCT system."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/national-phase-patent"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%9B%BD%E5%AE%B6%E4%B8%93%E5%88%A9"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Stage 4: National phase patent applications</h1>
      <h2>National phase patent applications overview &amp; timing</h2>
      <figure>
        <Link
          href="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2.png"
          data-lbwps-width="1600"
          data-lbwps-height="492"
          data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-300x92.png"
        >
          <Image
            decoding="async"
            loading="lazy"
            width="1024"
            height="315"
            src="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1024x315.png"
            alt="Patent Procedure Overview"
            srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1024x315.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-300x92.png 300w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-768x236.png 768w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1536x472.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-2048x630.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-210x65.png 210w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-100x31.png 100w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2.png 1600w"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </Link>
        <figcaption>Patent Procedure Overview</figcaption>
      </figure>
      <p>
        Stage 4 of the patent process is illustrated in Flowchart A above and
        involves either:
      </p>
      <ol>
        <li>
          Filing &ldquo;national phase&rdquo; patent applications post the
          filing of a{' '}
          <Link href="/pct-patent">
            Stage 3 PCT International Patent Application
          </Link>
          ; or
        </li>
        <li>
          Filing national patent applications directly in the countries of
          interest either in the first instance or claiming priority to another
          patent application within the 12 month Paris Convention period (e.g.
          claiming priority to a{' '}
          <Link href="/provisional-patents">
            Stage 1 Provisional Patent Application
          </Link>
          ).
        </li>
      </ol>
      <p>
        The filing deadlines for national phase patent applications and national
        patent applications are as follows:
      </p>
      <ul>
        <li>
          30 or 31 months after the priority date for national phase patent
          applications; and
        </li>
        <li>
          12 months after the priority date for national patent applications
        </li>
      </ul>
      <p>
        Since the processes for 1. and 2. patent applications are largely the
        same and given that 1. is by far the more common path for clients of our
        firm, we will simply refer to &ldquo;national phase&rdquo; patent
        applications to refer to both on this page.
      </p>
      <figure className="wp-block-image size-large">
        <Link
          href="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop.png"
          data-lbwps-width="1600"
          data-lbwps-height="478"
          data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-300x90.png"
        >
          <Image
            decoding="async"
            loading="lazy"
            width="1024"
            height="306"
            src="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1024x306.png"
            alt="Flowchart C - Australian Standard Patent Procedure"
            srcSet="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1024x306.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-300x90.png 300w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-768x229.png 768w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1536x459.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-2048x611.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-210x63.png 210w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-100x30.png 100w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop.png 1600w"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </Link>
        <figcaption>
          Flowchart C &ndash; Australian Standard Patent Procedure
        </figcaption>
      </figure>
      <h2>10 strategies for selecting countries for national phase entry</h2>
      <p>
        As the national phase entry filing deadlines in the above table are the
        final dates by which you can choose the geographical coverage for patent
        protection, it is crucial to ask the right questions in determining the
        breadth of patent coverage to pursue. Here are 10 filing strategies that
        Baxter IP has developed for you to consider when selecting countries for
        national phase entry. We highly recommend that you discuss them in
        detail with your <Link href="/patent-attorney">patent attorney</Link>.
      </p>
      <ol>
        <li>
          <strong>Your largest markets:</strong> particularly in cases where
          your product could be manufactured anywhere.
        </li>
        <li>
          <strong>
            Countries where competitors would be likely to manufacture an
            infringing product:
          </strong>{' '}
          particularly where competitors have existing manufacturing facilities
          that cannot be easily relocated.
        </li>
        <li>
          <strong>Countries where you are considering manufacturing:</strong>{' '}
          This helps avoid a manufacturer selling your product on the side.
        </li>
        <li>
          <strong>Your home ground:</strong> File in Australia to protect your
          home market &ndash; for most entrepreneurs it is the easiest market to
          access commercially.
        </li>
        <li>
          <strong>Your pilot markets first:</strong> Having a national phase
          patent application filed in the countries you are commercialising in
          initially enhances credibility in those markets.
        </li>
        <li>
          <strong>The United States:</strong> As the largest consumer market in
          the world, this jurisdiction represents by far and away the best value
          for money in terms of patent protection.
        </li>
        <li>
          <strong>Europe:</strong> Many countries can be protected by a single
          patent application in any country belonging to the European Union,
          which represents the 2nd largest consumer region in the world.
        </li>
        <li>
          <strong>China:</strong> The largest population in the world with a
          rapidly growing middle class. Contrary to traditional views, patent
          registration and enforcement is now generally very effective in China
          when combined with the right commercial and legal strategies.
        </li>
        <li>
          <strong>Countries where your patent is being infringed:</strong> In
          order to be able to address infringement with an enforceable right as
          soon as possible.
        </li>
        <li>
          <strong>File in your future markets:</strong> As patents have a
          20-year lifespan, it is important to consider that the markets that
          are most valuable now may not be the markets that are most valuable in
          10 or 15 years&apos; time.
        </li>
      </ol>
      <p>
        In order to assist you in deciding on what level of geographical
        coverage to pursue, please refer to the diagram below, which outlines in
        respect of common country selections:
      </p>
      <ul>
        <li>
          National phase patent filing deadline (i.e. post a&nbsp;
          <Link
            title="File a PCT International Patent Application"
            href="/pct-patent"
          >
            PCT international patent application
          </Link>
          )
        </li>
        <li>Population</li>
        <li>GDP</li>
      </ul>
      <h2>European (EP) regional patent applications</h2>
      <p>
        If you wish to obtain patent protection in Europe, you can utilise a
        European regional patent application. While it is possible to file
        directly into individual countries in Europe, a European patent
        application can be filed designating up to 38 countries and is examined
        as a single application. This generally leads to significant cost
        reductions. Once your European patent application proceeds to grant, it
        is necessary to register the application in the individual countries in
        a process known as &ldquo;validation&rdquo;.
      </p>
      <h2>Patent publication</h2>
      <p>
        Your patent application will be published (i.e. disclosed to the public)
        at 18 months after its priority date. This means that your patent
        specification can be read online by anyone from that point in time.
      </p>
      <h2>Patent validity</h2>
      <p>
        Once a national phase patent has been granted, you have an enforceable
        right in the country in which you have obtained grant. However, it
        should be noted that grant is not a presumption that the patent is
        valid.
      </p>
      <p>
        Ultimately, if you decide to enforce your national patent rights, the
        matter will usually be heard in court, and the alleged infringer of your
        patent will have the opportunity to lodge evidence against your patent
        to attempt to invalidate it. This is known as a &ldquo;cross-claim for
        revocation&rdquo;. You may or may not be successful in such a matter,
        and it is not uncommon for patents to be invalidated in court (e.g. by
        locating information that is not uncovered during examination). However,
        the vast majority of patents are never litigated; instead, a patent
        usually forms a strong and useful starting point for commercial
        negotiations and agreements, such as licensing.
      </p>
      <h2>National phase patent application costs</h2>
      <p>
        The costs associated with obtaining and maintaining patents can be
        grouped into 4 main categories:
      </p>
      <ol>
        <li>Filing costs</li>
        <li>
          Prosecution costs (e.g. examination, argumentation, acceptance &amp;
          grant costs)
        </li>
        <li>Renewal costs, and</li>
        <li>Validation costs (for European applications only)</li>
      </ol>
      <p>
        Renewal costs are usually incurred annually and are paid to the
        respective patent office to keep the application or patent alive.
        Patents usually have a term (lifespan) of 20 years from their{' '}
        <Link href="/pct-patent">Stage 3 International Patent Application</Link>{' '}
        filing date.
      </p>
    </Layout>
  )
}
