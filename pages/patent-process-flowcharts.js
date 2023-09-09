import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Lightbox from '../components/lightbox'
import React, { useState } from "react"

export default function PatentProcessFlowcharts() {
  const [toggler, setToggler] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const data = [
    { title: 'Resources', link: '/ip-info' },
    { title: 'Patent process flowcharts', link: '' },
  ]

  const setLigthbox = (index) => {
    setImageIndex(index)
    setToggler(!toggler)
  }

  return (
    <Layout navData={data} active={"Articles"}  
      lightbox={
        <Lightbox
          images={[
            'https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1024x315.png',
            'https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1024x335.png',
            'https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1024x306.png',
            'https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1024x270.png',
            'https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-1024x332.png',
            'https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-1024x292.png'

          ]}
          type="image"
          index={imageIndex}
          toggler={toggler}
        />
      }
      >
      <Head>
        <title>Patent process flowcharts | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Flowcharts in this page are for illustrative purposes alone and only indicates some of the steps associated with the relevant Patent procedures."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-process-flowcharts"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Patent process flowcharts</h1>
      <p>
        This page archives all the patent process flowcharts. Flowcharts in this
        page are for illustrative purposes alone and only indicates some of the
        steps associated with the relevant procedures. These do not count as
        legal advice. Please contact our{' '}
        <Link href="/patent-attorney">patent attorneys</Link> for their expert
        advice.
      </p>

      <hr />

      <h2>Patent Procedure Overview</h2>

      <figure>
        <Image
          decoding="async"
          onClick={() => setLigthbox(0)}
          loading="lazy"
          width="1024"
          height="315"
          src="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1024x315.png"
          alt="Patent Procedure Overview"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1024x315.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-300x92.png 300w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-768x236.png 768w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-1536x472.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-2048x630.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-210x65.png 210w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2-100x31.png 100w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-A-Patent-Procedure-Overview-Desktop-0-v2.png 1600w"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="cursor-pointer"
        />
        <figcaption>Patent Procedure Overview</figcaption>
      </figure>

      <p>
        The entire patent process on how to patent an idea or a product can be
        expressed simply as 4 distinct stages.{' '}
        <Link href="/how-to-patent">Find out more…</Link>
      </p>

      <hr />

      <h2>PCT Patent Procedure</h2>

      <figure>
        <Image
          decoding="async"
          onClick={() => setLigthbox(1)}
          loading="lazy"
          width="1024"
          height="335"
          src="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1024x335.png"
          alt="Flowchart B - PCT Patent Procedure (Desktop)"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1024x335.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-300x98.png 300w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-768x251.png 768w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-1536x503.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-2048x670.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-210x69.png 210w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3-100x33.png 100w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-B-PCT-Patent-Procedure-Desktop-v3.png 1600w"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="cursor-pointer"
        />
        <figcaption>Flowchart B &ndash; PCT Patent Procedure</figcaption>
      </figure>

      <p>
        To obtain patent protection in any country, it is necessary to file a
        patent application in that country.{' '}
        <Link href="/pct-patent">Read more…</Link>
      </p>

      <hr />

      <h2>Australian Standard Patent Procedure</h2>

      <figure>
        <Image
          decoding="async"
          onClick={() => setLigthbox(2)}
          loading="lazy"
          width="1024"
          height="306"
          src="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1024x306.png"
          alt="Flowchart C - Australian Standard Patent Procedure (Desktop)"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1024x306.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-300x90.png 300w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-768x229.png 768w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-1536x459.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-2048x611.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-210x63.png 210w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop-100x30.png 100w, https://www.baxterip.com.au/wp-content/uploads/2019/12/Flowchart-C-Australian-Standard-Patent-Procedure-Desktop.png 1600w"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="cursor-pointer"
        />
        <figcaption>
          Flowchart C &ndash; Australian Standard Patent Procedure
        </figcaption>
      </figure>

      <p>
        The final stage of the PCT application process, whereby an entity and /
        or individual files national patent applications in the countries where
        IP protection is required.{' '}
        <Link href="/national-phase-patent">Learn more…</Link>
      </p>

      <hr />

      <h2>Innovation Patent Procedure</h2>

      <figure>
        <Image
          decoding="async"
          onClick={() => setLigthbox(3)}
          loading="lazy"
          width="1024"
          height="270"
          src="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1024x270.png"
          alt="Innovation Patent Procedure"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1024x270.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-300x79.png 300w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-768x202.png 768w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-1536x405.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-2048x539.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-210x55.png 210w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2-100x26.png 100w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-D-Innovation-Patent-Procedure-Desktop-v2.png 1600w"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="cursor-pointer"
        />
        <figcaption>Innovation Patent Procedure</figcaption>
      </figure>

      <p>
        An Innovation patent is a second tier form of patent protection in
        Australia primarily developed for use in protecting incremental
        innovation.{' '}
        <Link href="/innovation-patent-application">Learn more…</Link>
      </p>

      <hr />

      <h2>Registered Design Procedure</h2>

      <figure>
        <Image
          decoding="async"
          onClick={() => setLigthbox(4)}
          loading="lazy"
          width="1024"
          height="332"
          src="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-1024x332.png"
          alt="Registered Design Procedure"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-1024x332.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-300x97.png 300w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-768x249.png 768w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-1536x497.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-2048x663.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-210x68.png 210w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2-100x32.png 100w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-E-Registered-Design-Procedure-Desktop-v2.png 1600w"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="cursor-pointer"
        />
        <figcaption>Registered Design Procedure</figcaption>
      </figure>

      <p>
        You can register designs in Australia through a patent attorney very
        quickly (often in a matter of a few weeks).{' '}
        <Link href="/registered-designs">Find out more…</Link>
      </p>

      <hr />

      <h2>Patent Opposition Procedure</h2>

      <figure>
        <Image
          decoding="async"
          onClick={() => setLigthbox(5)}
          loading="lazy"
          width="1024"
          height="292"
          src="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-1024x292.png"
          alt="Patent Opposition Procedure"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-1024x292.png 1024w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-300x85.png 300w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-768x219.png 768w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-1536x438.png 1536w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-2048x584.png 2048w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-210x60.png 210w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2-100x28.png 100w, https://www.baxterip.com.au/wp-content/uploads/2020/08/Flowchart-G-Patent-Opposition-Procedure-Desktop-v2.png 1600w"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="cursor-pointer"
        />
        <figcaption>Patent Opposition Procedure</figcaption>
      </figure>

      <p>
        For an Australian standard patent, patent opposition can be filed at any
        time from publication of acceptance of the patent application to three
        months from that date. An opposition to an Australian Innovation Patent
        can be filed at any time after it has been certified.{' '}
        <Link href="/patent-opposition/">Learn more…</Link>
      </p>
    </Layout>
  )
}
