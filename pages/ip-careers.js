import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function IpCareers() {
  const data = [{ title: 'Join us', link: '' }]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          IP attorney careers | Start your intellectual property career at
          Baxter IP
        </title>
        <meta
          name="description"
          content="IP attorney careers as a patent attorney or trade mark attorney provide a fantastic way to support emerging businesses. Get in touch to learn more."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/ip-careers" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E8%81%8C%E4%B8%9A"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Careers at Baxter IP</h1>
      <h2>
        A private Australian IP practice that&apos;s dedicated &amp; supportive,
        transparent and commercial
      </h2>
      <p>
        Do you relish in achieving successful outcomes for your clients?
        You&apos;re in good company.
      </p>
      <p>
        Our purpose is to partner with clients to provide transparent and
        commercially astute advice, dedicated to achieving successful outcomes.
        Baxter IP is always on the lookout for highly motivated individuals who
        take pride in achieving successful outcomes for their clients.
      </p>
      <p>
        What makes a firm culture where attorneys thrive? One that&apos;s
        dedicated to supporting those who are still early in their career with
        oversight, professional development opportunities and mentorship. One
        that provides greater client and portfolio management autonomy to its
        seniors and one that&apos;s transparent around the data and metrics
        attorneys need to understand their contribution to the firm.
      </p>
      <p>
        As a private practice, we&apos;re high on recognition and low on
        politics. You will be recognised and rewarded for your performance, with
        an attractive remuneration package and ESS (share option scheme for
        Associates and above). You will be led by a management team that is
        nimble, adaptive, communicative and meets with you regularly throughout
        the year.
      </p>
    </Layout>
  )
}
