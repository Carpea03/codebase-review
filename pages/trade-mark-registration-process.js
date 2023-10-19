import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Lightboxs from '../components/lightbox'
import React, { useState } from 'react'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function TradeMarkRegistrationProcess() {
  const [toggler, setToggler] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade marks',
      link: '/trade-marks',
    },
    {
      title: 'How to Trade Mark',
      link: '/how-to-trade-mark',
    },
    { title: 'Trade Mark Registration Process', link: '' },
  ]

  const setLigthbox = (index) => {
    setImageIndex(index)
    setToggler(!toggler)
  }

  return (
    <Layout navData={data} active={"Services"}
      lightbox={
        <Lightboxs
          images={[
            { src : '/images/charts/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2-1024x331.png' }
          ]}
          type="image"
          index={imageIndex}
          toggler={toggler}
          setToggler={setToggler}
        />
      }
    >
      <Head>
        <title>
          Trade Mark Registration Process | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="The trade mark registration process involves several steps commencing with a trade mark search and extending beyond registration."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-registration-process"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade Mark Registration Process</h1>
      <p>
        In Australia, the trade mark registration process involves several steps
        commencing with a search and extending beyond registration.
      </p>
      <figure>
        <Image
          loader={myLoader}
          onClick={() => setLigthbox(0)}
          src="/images/charts/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2-1024x331.png"
          alt="Australian Standard Trade Mark Procedure"
          width="1024"
          height="331"
          className="cursor-pointer"
        />
        <figcaption>Australian Standard Trade Mark Procedure</figcaption>
      </figure>
      <h3>File an application</h3>
      <p>
        At application, an identical{' '}
        <Link href="/trade-mark-search">trade mark search</Link> is carried out
        in order to identify any obvious impediments to trade mark registration.
        Applicants can do their own search of the register, however a trade mark
        attorney will use more advanced strategies in conducting these searches.
      </p>
      <p>
        This first step in the trade mark process involves the applicant filing
        a <Link href="/trade-mark-application">trade mark application</Link>.
        Application involves the preparation of the application, submitting the
        application and payment of the required fees.
      </p>
      <p>
        Importantly, in the preparation step, the required information in the
        application should be complete and correct because only limited changes
        can be performed after filing. Incorrect or incomplete information may
        result in rejection or a narrow range of protection for the trade mark.
      </p>
      <h3>Examination</h3>
      <p>
        After submission of the application to the Trade Marks Office (IP
        Australia), the trade mark examiner, who is a delegate of the
        Commissioner of Trade Marks, will assess the application and an{' '}
        <Link href="/trade-mark-examination">examination</Link> report will be
        issued to the applicant. In the case that the application does not meet
        the legislative criteria set by IP Australia in light of the{' '}
        <em>Trade Marks Act 1995</em>, an adverse examination report will be
        issued to the applicant.
      </p>
      <p>
        The applicant can then provide arguments to support their application
        within a certain time frame (which is 15 months in Australia) or
        alternatively the applicant can amend the application.
      </p>
      <p>
        The Trade Marks office will then decide based on the presented evidence
        and/or amendments whether to accept or refuse the trade mark
        application.
      </p>
      <h3>Acceptance</h3>
      <p>
        Upon{' '}
        <Link href="/trade-mark-acceptance">
          acceptance of the trade mark application
        </Link>
        , IP Australia publishes the trade mark in the{' '}
        <em>Australian Official Journal of Trade Marks</em>, which can be seen
        by the public.{' '}
        <Link href="/publication-of-trade-mark-details">
          Publication of the trade mark
        </Link>{' '}
        commences a two-month opposition period in which any third party can
        oppose the registration of the trade mark.
      </p>
      <h3>Opposition</h3>
      <p>
        Based on the similar grounds for the rejection of trade marks, a trade
        mark opposition can be lodged by any third party. A{' '}
        <Link href="/trade-mark-opposition">trade mark opposition</Link> can
        result in either a registered trade mark or a refused application.
      </p>
      <h3>Trade mark registered</h3>
      <p>
        Once registered, the trade mark owner has sole rights to the use of the
        trade mark and to its{' '}
        <Link href="/trade-mark-registration-benefits">benefits</Link>. The
        owner is also responsible for{' '}
        <Link href="/trade-mark-maintenance">managing the trade mark</Link> in
        order to maximise the trade mark&apos;s commercial benefits, for
        preventing other parties from capitalising on their intellectual
        property right by{' '}
        <Link href="/trade-mark-enforcement-options">
          enforcing their trade mark
        </Link>
        , for <Link href="/trade-mark-renewal">maintaining ownership</Link>{' '}
        throughout the trade mark&apos;s lifetime by ensuring that renewal fees
        are paid every 10 years, and for protecting the trade mark by preventing
        others from using it in{' '}
        <Link href="/ip-glossary#trade-mark-dilution">
          a way that diminishes its value
        </Link>
        .
      </p>
    </Layout>
  )
}
