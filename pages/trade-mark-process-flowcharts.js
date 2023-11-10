import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Lightboxs from '../components/lightbox'
import React, { useState } from "react"

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function TradeMarkProcessFlowcharts() {
  const [toggler, setToggler] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const data = [
    { title: 'IP Info', link: '/ip-info' },
    { title: 'Trade Mark Process Flowcharts', link: '' },
  ]

  const setLigthbox = (index) => {
    setImageIndex(index)
    setToggler(!toggler)
  }

  return (
    <Layout navData={data} active={"Articles"}
      lightbox={
        <Lightboxs
          images={[
            { src: '/flowchart/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2.png' },
            { src: '/flowchart/Flowchart-I-Madrid-Protocol-Trade-Mark-Application-Process-Desktop-v2-1024x395.png' },
            { src: '/flowchart/Flowchart-H-Trade-Mark-Opposition-Procedure-Desktop.png' }
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
          Trade Mark Process Flowcharts | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Flowcharts in this page are for illustrative purposes alone and only indicates some of the steps associated with the relevant trade mark procedures."
        />
        <link rel="canonical" href="/trade-mark-process-flowcharts" />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade Mark Process Flowcharts</h1>
      <p>
        This page archives all the trade mark process flowcharts. Flowcharts in
        this page are for illustrative purposes alone and only indicates some of
        the steps associated with the relevant procedures. These do not count as
        legal advice. Please contact our{' '}
        <Link href="/trade-mark-attorney">trade mark attorneys</Link> for their
        expert advice.
      </p>
      <hr />
      <h2>Australian Standard Trade Mark Procedure</h2>
      <figure>
        <Image
          onClick={() => setLigthbox(0)}
          src="/flowchart/Flowchart-F-Australian-Standard-Trade-Mark-Procedure-Desktop-v2.png"
          alt="Australian Standard Trade Mark Procedure"
          width="1024"
          height="331"
          className="cursor-pointer"
        />
        <figcaption>Australian Standard Trade Mark Procedure</figcaption>
      </figure>
      <p>
        In Australia, the trade mark registration process involves several steps
        commencing with a search and extending beyond registration.{' '}
        <Link href="/trade-mark-registration-process">Learn more…</Link>
      </p>
      <hr />
      <h2>Madrid Protocol Trade Mark Application Process</h2>
      <figure>
        <Image
          onClick={() => setLigthbox(1)}
          src="/flowchart/Flowchart-I-Madrid-Protocol-Trade-Mark-Application-Process-Desktop-v2-1024x395.png"
          alt="Madrid Protocol Trade Mark Application Process"
          width="1024"
          height="395"
          className="cursor-pointer"
        />
        <figcaption>Madrid Protocol Trade Mark Application Process</figcaption>
      </figure>
      <p>
        An application for International Registration is filed by your trade
        mark attorney through IP Australia.{' '}
        <Link href="/madrid-protocol-application">Learn more…</Link>
      </p>
      <hr />
      <h2>Trade Mark Opposition Procedure</h2>
      <figure>
        <Image
          onClick={() => setLigthbox(2)}
          src="/flowchart/Flowchart-H-Trade-Mark-Opposition-Procedure-Desktop.png"
          alt="Trade Mark Opposition Procedure"
          width="1024"
          height="313"
          className="cursor-pointer"
        />
        <figcaption>Trade Mark Opposition Procedure</figcaption>
      </figure>
      <p>
        Any interested third person can file an opposition to trade mark
        application within 2 months from the date of its publication on
        Australian Official Journal of Trade Marks.{' '}
        <Link href="/trade-mark-opposition">Read more…</Link>
      </p>
    </Layout>
  )
}
