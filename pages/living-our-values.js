import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Lightboxs from '../components/lightbox'
import React, { useState } from "react"

export default function LivingOurValues() {
  const [toggler, setToggler] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const data = [
    { title: 'Values', link: '' },
  ]

  const setLigthbox = (index) => {
    setImageIndex(index)
    setToggler(!toggler)
  }

  return (
    <Layout navData={data} bannerData={true} layout={2} title={"Living Our Values"} active={"Values"} 
      lightbox={
        <Lightboxs
          images={[
            { src : 'https://www.baxterip.com.au/wp-content/uploads/2021/01/UNSW-Sydney.svg' },
            { src : 'https://www.baxterip.com.au/wp-content/uploads/2021/01/Founders-10x-Accelerator.svg' },
            { src : 'https://www.baxterip.com.au/wp-content/uploads/2019/07/Percy-Baxter-Charitable-Trust.svg' }
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
          Living Our Values at Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="Our philosophy of giving back is inspired by Percy Baxter, great grandfather of Chris Baxter and founder of the Percy Baxter Family Charitable Foundation."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/living-our-values"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/living-our-values"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%AE%9E%E7%8E%B0%E6%88%91%E4%BB%AC%E7%9A%84%E4%BB%B7%E5%80%BC%E8%A7%82"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h2>Care, transparency and commerciality</h2>
      <p className="mb-10" >
        Our core values are care, transparency and commerciality. 
        At the heart of Baxter IP is a group of attorneys who really care about innovators, 
        their projects and the change that they seek to create. 
        Whether you are a member of in-house counsel for a multinational or a mum-and-dad entrepreneur, 
        you can rest assured that our culture of care is for everyone.
      </p>
      <h3>We give back</h3>
      <div className="flex">
        <div className="flex-col">
          <Image
            decoding="async"
            src="/banner/UNSW Sydney.svg"
            alt="The UNSW Sydney logo"
            width="255"
            height="191"
            className="cursor-pointer m-0"
          />
        </div>
        <div className="flex-col">
          <Image
            decoding="async"
            src="/banner/Founders 10x Accelerator.svg"
            alt="Founders of 10x Accelerator"
            width="255"
            height="191"
            className="cursor-pointer m-0"
          />
        </div>
      </div>
      <p>
        Baxter IP is a benefactor of the{' '}
        <Link
          href="https://www.founders.unsw.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#816BD9]"
        >
          UNSW Founder&apos;s Program
        </Link>{' '}
        and provides pro-bono IP advice to their 10X and Health 10X cohorts each
        year. The Founder&apos;s Program supports university students in
        establishing startups with a focus on social impact. For us, this is a
        modest but important start to giving back to the community and more
        generally to STEM education in Australia.
      </p>
      <h3>We support Australian Indigenous Causes</h3>
      <Link
        title="Nunyara Centre"
        href="https://www.vcmh.com.au/"
        rel="noopener nofollow"
      >
        <Image
          decoding="async"
          loading="lazy"
          width="366"
          height="55"
          src="https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre.jpg"
          alt="Nunyara Centre logo"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre.jpg 666w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-300x45.jpg 300w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-210x32.jpg 210w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-100x15.jpg 100w"
          sizes="(max-width: 666px) 100vw, 666px"
        />
      </Link>
      <p className="mb-10">
        We continue the Baxter family tradition of supporting Australian
        Indigenous causes. Recently, we supported the Nunyara Centre at Officer,
        Victoria in using trade mark law to stop the indigenous word
        &ldquo;Nunyara&rdquo; from being adopted by a large cannabis company for
        one of its products.
      </p>
      <h3 className="mt-5">We continue a philanthropic legacy</h3>
      <Image
        decoding="async"
        onClick={() => setLigthbox(2)}
        src="https://www.baxterip.com.au/wp-content/uploads/2019/07/Percy-Baxter-Charitable-Trust.svg"
        alt="Percy Baxter Charitable Trust logo"
        width="210"
        height="124"
      />
      <p className="mb-10">
        64 years ago, John Percy Hamilton Baxter, Chris&apos; great-grandfather,
        showed how one can use their innovative skills in business enterprise to
        develop wealth and, in turn, help people in need. The{' '}
        <Link
          href="http://www.baxtercharitabletrusts.org.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#816BD9]"
        >
          Percy Baxter Charitable Trust
        </Link>{' '}
        which he established is now one of the largest Philanthropic Charitable
        Trusts in Australia. Chris is closely involved in advising the{' '}
        <Link
          href="http://www.baxtercharitabletrusts.org.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trust
        </Link>{' '}
        on a voluntary basis.
      </p>
      <h3 className="mt-5">We step forwards</h3>
      <p>
        Historically, many family foundations give to causes that resonate with
        them, that have some intersection with the life experience of the
        trustees or where the family knows people involved in the charitable
        organisation. This was certainly true for the{' '}
        <Link
          href="http://www.baxtercharitabletrusts.org.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#816BD9]"
        >
          Baxter Charitable Trusts
        </Link>
        , and these are all good reasons to give. However, since 2017 and under
        Chris&apos; and his brother Richard&apos;s initiative, the Baxter family
        started taking what might be described as a more innovative, data-driven
        approach. This now provides the family with a second layer of
        information to help the family assess the social impact of distribution
        decisions.
      </p>
    </Layout>
  )
}
