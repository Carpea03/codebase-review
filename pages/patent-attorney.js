import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import StaffChris from '../components/staff/chris'
import StaffMartin from '../components/staff/martin'
import StaffQi from '../components/staff/qi'
import StaffWarren from '../components/staff/warren'
import StaffSean from '../components/staff/sean'
import StaffNaleesha from '../components/staff/naleesha'
import StaffAndrew from '../components/staff/andrew'
import StaffWillem from '../components/staff/willem'
import StaffRichard from '../components/staff/richard'

export default function PatentAttorney() {
  const data = [{ title: 'Our patent attorneys', link: '' }]
  return (
    <Layout navData={data}>
      <Head>
        <title>Our patent attorneys in Sydney & Melbourne | Baxter IP</title>
        <meta
          name="description"
          content="A Sydney patent attorney or Melbourne patent attorney will be matched with you based on technology expertise to help you file a patent in your field."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-attorney"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E4%BB%A3%E7%90%86%E4%BA%BA"
          hrefLang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>
        Our Sydney and Melbourne patent attorneys are industry specialists
      </h1>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 not-format">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <StaffChris />
          <StaffMartin />
          <StaffQi />
          <StaffWarren />
          <StaffSean />
          <StaffNaleesha />
          <StaffAndrew />
          <StaffWillem />
          <StaffRichard />
        </div>
      </div>

      <p>
        Working with an industry specialist patent attorney can make a huge
        difference to the quality and efficiency of the patent attorney work
        performed for you. Baxter IP&rsquo;s industry specialist patent
        attorneys, based at its{' '}
        <Link href="https://www.baxterip.com.au/sydney">Sydney</Link> and{' '}
        <Link href="https://www.baxterip.com.au/melbourne">Melbourne</Link>{' '}
        offices, are on standby to assist you with protecting your project.
        Being industry specialists:
      </p>

      <ol>
        <li>
          Your patent attorney will understand your new idea and its technical
          and commercial context more quickly.
        </li>
        <li>
          Potential points of patentability, including novelty and
          inventiveness, can be identified more easily by your patent attorney.
        </li>
        <li>
          Using their{' '}
          <Link href="https://www.baxterip.com.au/specialisations">
            industry knowledge
          </Link>
          , your patent attorney will be able to identify how a competitor might
          attempt to circumvent your patent claims more easily and so work
          toward defending against this.
        </li>
        <li>
          Your patent attorney will be able to extend the scope of your{' '}
          <Link href="https://www.baxterip.com.au/provisional-patents">
            patent application
          </Link>{' '}
          with logical variations to the patent design.
        </li>
        <li>
          Our patent attorney firm may be able to provide you with some general
          commercial advice or contacts in your industry.
        </li>
      </ol>

      <h2>
        Our Melbourne and Sydney patent attorneys are here to help you achieve
        your commercial goals, not to sell non-commercial patent attorney
        services
      </h2>

      <ul>
        <li>
          With experience at some of Australia&rsquo;s most well known R&amp;D
          companies, such as ResMed, and organisations, such as CSIRO to
          reputable patent attorney firms in Sydney and Melbourne, our team has
          the experience your project needs. We have a comprehensive perspective
          on your intellectual property.
        </li>
        <li>
          We are a winning team: Baxter IP Patent &amp; Trade Mark Attorneys
          have been{' '}
          <Link href="https://www.baxterip.com.au/awards-and-recognition">
            consistently awarded
          </Link>
          . In addition, we were awarded with a{' '}
          <Link href="https://www.baxterip.com.au/about#nps">
            Net Promoter Score of 77 in 2021
          </Link>
          , which is markedly higher than the industry average for law firms of
          -22. This NPS score shows the willingness of our clients to recommend
          our services. These accolades reflect the high regard peers in the
          profession have for us and the high level of trust clients have in us.
        </li>
      </ul>
    </Layout>
  )
}
