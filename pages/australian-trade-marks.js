import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function AustralianTradeMarks() {
  const data = [{ title: 'Trade Marks in Australia', link: '' }]
  return (
    <Layout navData={data}>
      <Head>
        <title>
          Australian Trade Marks | Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="An Australian trade mark application can ensure that your trade mark in Australia is enforced."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/australian-trade-marks"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-trade-marks"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%95%86%E6%A0%87%E6%B3%A8%E5%86%8C%E7%94%B3%E8%AF%B7"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/trade-mark-application"
        />
      </Head>
      <div className="mt-10">
        <h1>Australian Trade Marks</h1>

        <h2 id="filing-requirements">Minimum filing requirements</h2>

        <p>
          In registering a trade mark in Australia, the following requirements
          must be provided in the application:
        </p>

        <ul>
          <li>
            Details of the Australian trade mark and the International trade
            mark class(and relevant goods and/or services) in respect of which
            the mark is to be registered;
          </li>
          <li>
            A high quality hard copy/electronic copy of the mark if it includes
            a graphic or stylised element (preferably an electronic copy in
            &lsquo;jpeg&rsquo; format);
          </li>
          <li>Name, nationality and address of the applicant; and</li>
          <li>
            Convention details if relevant (application number, trade mark and
            filing date). Copies of priority documents are not usually required
            by the Trade Marks Office; if they are, they are due prior to
            acceptance, and a verified English translation will be required.
          </li>
        </ul>

        <h2>Examination</h2>

        <p>
          Australian trade marks will be examined before registration on a
          number of grounds, including that the mark:
        </p>

        <ul>
          <li>
            Must be able to distinguish one trader&apos;s goods or services from
            another&apos;s;
          </li>
          <li>Must not be likely to deceive or cause confusion; and</li>
          <li>
            Must not be substantially identical or deceptively similar to a
            prior mark for similar goods or closely related services.
          </li>
        </ul>

        <h2>Renewal</h2>

        <p>
          The initial trade mark registration is valid for 10 years from the
          filing date. The registration can be renewed within 12 months before
          or after its expiry date. The registration of a trade mark in
          Australia can be renewed indefinitely. If your trade mark has not been
          used by you or on your behalf, for a period of 3 years, an application
          for removal from the Trade Marks Register can be made by another
          party.
        </p>
      </div>
    </Layout>
  )
}
