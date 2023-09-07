import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function AustralianRegisteredDesign() {
  const data = [{ title: 'Registered Designs in Australia', link: '' }]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          Australian Registered Design | Baxter IP, Patent & Trade Mark
          Attorneys
        </title>
        <meta
          name="description"
          content="Australian registered designs provide intellectual property protection for the aesthetics, shape and overall design of new products."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/australian-registered-designs"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-registered-designs"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%B3%A8%E5%86%8C%E5%A4%96%E8%A7%82%E8%AE%BE%E8%AE%A1"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/registered-designs"
        />
      </Head>
      <div className="mt-10">
        <h1>Australian Registered Design</h1>
        <h2>Minimum registered design filing requirements:</h2>
        <ul>
          <li>
            A set of representations (may be photographs) showing clear views of
            the article (e.g. may include perspective, side, top plan and bottom
            plan views).
          </li>
          <li>A name of the product shown in the representations</li>
          <li>Name and address of the applicant</li>
          <li>Identification of the scope of monopoly claimed</li>
        </ul>
        <h2>
          Additional filing requirements for filing an Australian registered
          design:
        </h2>
        <ul>
          <li>Name of the author and devolution of title to the applicant</li>
          <li>
            Details of convention priority if applicable (application number,
            title, country). A certified copy of the priority document is
            required along with a verified English translation (if relevant)
            prior to registration.
          </li>
          <li>
            A statement of newness and distinctiveness (optional) describing the
            important visual features of the design which are new and
            distinctive.
          </li>
          <li>Appointment of Agent if requested</li>
        </ul>
        <h2>Examination</h2>
        <p>
          An Australian registered design application undergoes a formalities
          examination and then proceeds to grant. Substantive examination is
          part of an optional, post-grant certification procedure that can be
          requested at any time during the life of the registered design. A
          registered design must be certified before an infringement action may
          be commenced. A third party can request certification of a registered
          design but must share the associated government fees if it does.
        </p>
        <h2>Renewals</h2>
        <p>
          The initial period of registration for the Australian registered
          design lasts five years from the filing date and can be extended once
          to a maximum term of 10 years.
        </p>
      </div>
    </Layout>
  )
}
