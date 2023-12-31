import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Testimonial from '../components/testimonial'

export default function BaxterIpPhilosophy() {
  const data = [
    { title: 'About Us', link: '/about' },
    { title: 'Our Philosophy', link: '' },
  ]

  return (
    <Layout
      navData={data}
      bannerData={true}
      layout={2}
      title={'The Baxter IP Philosophy'}
      active={'Values'}
    >
      <Head>
        <title>
          Dedicated & supportive, transparent and commercial | The Baxter IP
          Philosophy
        </title>
        <meta
          name="description"
          content="Baxter IP's philosophy is built on dedication & support, transparency and commerciality. We promise to provide you with clear, commercially astute IP advice."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/baxter-ip-philosophy"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/baxter-family-philosophy"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%B7%B4%E5%85%8B%E6%96%AF%E7%89%B9%E5%AE%B6%E5%BA%AD%E5%93%B2%E5%AD%A6"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10">
        <h2>Our heritage, our legacy, our promise to you</h2>
        <Testimonial
          content="Upholding the highest standard of business ethics and ensuring our
          advice always serves the best interests of our clients. This is our
          guiding principle and our legacy"
          name={'John Baxter'}
        />
        {/* <blockquote>
          Upholding the highest standard of business ethics and ensuring our
          advice always serves the best interests of our clients. This is our
          guiding principle and our legacy.
        </blockquote>
        <cite>&ndash; Dr John Baxter, Senior Commercial Counsel</cite> */}
        <p>
          We are passionate about providing intellectual property and advice
          that genuinely helps clients achieve their commercial goals and as
          such, here is <Link href="/about">our firm</Link>&apos;s commitment to
          you:
        </p>
        <ol>
          <li>Your best interests are always at the forefront of our minds.</li>
          <li>
            We operate at the highest standard of professional ethics and
            personal integrity.
          </li>
          <li>
            The confidentiality of the information you provide to us will be
            protected as a matter of course &ndash; our IP firm takes pride in
            our spotless record of trust, intact since our inception in 2007.
          </li>
          <li>
            We regularly communicate with clients about intellectual property
            processes, possible outcomes and IP costs in an upfront and honest
            manner.
          </li>
          <li>
            We communicate in plain English to ensure that you understand
            relevant intellectual property law.
          </li>
          <li>
            Your matter will be handled efficiently and conscientiously to
            ensure that our work is not only of the highest quality but is
            completed without delay.
          </li>
          <li>
            We look for opportunities to help clients to profit from their
            intellectual property &ndash; often introducing clients to
            professional service providers who can assist them.
          </li>
          <li>
            We provide fixed-cost and capped-fee IP attorney services where
            possible to assist you with budgeting.
          </li>
          <li>
            Our patent firm&apos;s intellectual property work will always be
            undertaken efficiently so as to provide you with the best possible
            value for money.
          </li>
          <li>
            We walk in our client&apos;s shoes &ndash; we know what it is like
            because many of <Link href="/ip-attorney">our IP attorneys</Link>{' '}
            have worked in-house at research &amp; development firms.
          </li>
        </ol>
        <Testimonial
          content="We promise you commercially astute IP advice"
          name={'Chris Baxter'}
        />
      </div>
    </Layout>
  )
}
