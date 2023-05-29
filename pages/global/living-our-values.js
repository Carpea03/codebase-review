import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/to-delete/layout'

export default function LivingOurValues() {
  return (
    <Layout>
      <Head>
        <title>
          Living our values at Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="Our philosophy of giving back is inspired by Percy Baxter, great grandfather of Chris Baxter and founder of the Percy Baxter Family Charitable Foundation."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/global/living-our-values"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/living-our-values"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%AE%9E%E7%8E%B0%E6%88%91%E4%BB%AC%E7%9A%84%E4%BB%B7%E5%80%BC%E8%A7%82"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/living-our-values"
        />
      </Head>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/global/about"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                About us
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Living our values
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Living our values</h1>
      <h2>Care, transparency and commerciality</h2>

      <p>
        Our core values are care, transparency and commerciality. At the heart
        of Baxter IP is a group of attorneys who really care about innovators,
        their projects and the change that they seek to create. Whether you are
        a member of in-house counsel for a multinational or a mum-and-dad
        entrepreneur, you can rest assured that our culture of care is for
        everyone.
      </p>

      <h2>We give back</h2>

      <Link
        href="https://www.baxterip.com.au/wp-content/uploads/2021/01/UNSW-Sydney.svg"
        data-lbwps-width="640"
        data-lbwps-height="480"
        data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2021/01/UNSW-Sydney.svg"
      >
        <Image
          decoding="async"
          src="https://www.baxterip.com.au/wp-content/uploads/2021/01/UNSW-Sydney.svg"
          width="255"
          height="191"
        />
      </Link>
      <Link
        href="https://www.baxterip.com.au/wp-content/uploads/2021/01/Founders-10x-Accelerator.svg"
        data-lbwps-width="640"
        data-lbwps-height="480"
        data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2021/01/Founders-10x-Accelerator.svg"
      >
        <Image
          decoding="async"
          src="https://www.baxterip.com.au/wp-content/uploads/2021/01/Founders-10x-Accelerator.svg"
          width="255"
          height="191"
        />
      </Link>

      <p>
        Baxter IP is a benefactor of the{' '}
        <Link
          href="https://www.founders.unsw.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNSW Founder&apos;s Program
        </Link>{' '}
        and provides pro-bono IP advice to their 10X and Health 10X cohorts each
        year. The Founder&apos;s Program supports university students in
        establishing startups with a focus on social impact. For us, this is a
        modest but important start to giving back to the community and more
        generally to STEM education in Australia.
      </p>

      <h2>We support Australian Indigenous Causes</h2>

      <Link
        title="Nunyara Centre"
        href="https://www.vcmh.com.au/"
        rel="noopener nofollow"
      >
        <Image
          decoding="async"
          loading="lazy"
          width="666"
          height="100"
          class="size-full wp-image-35108 img-fluid"
          src="https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre.jpg"
          alt="Nunyara Centre logo"
          srcset="https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre.jpg 666w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-300x45.jpg 300w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-210x32.jpg 210w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-100x15.jpg 100w"
          sizes="(max-width: 666px) 100vw, 666px"
        />
      </Link>

      <p>
        We continue the Baxter family tradition of supporting Australian
        Indigenous causes. Recently, we supported the Nunyara Centre at Officer,
        Victoria in using trade mark law to stop the indigenous word “Nunyara”
        from being adopted by a large cannabis company for one of its products.
      </p>

      <h2>We continue a philanthropic legacy</h2>

      <Link
        href="https://www.baxterip.com.au/wp-content/uploads/2019/07/Percy-Baxter-Charitable-Trust.svg"
        data-lbwps-width="314"
        data-lbwps-height="186"
        data-lbwps-srcsmall="https://www.baxterip.com.au/wp-content/uploads/2019/07/Percy-Baxter-Charitable-Trust.svg"
      >
        <Image
          decoding="async"
          src="https://www.baxterip.com.au/wp-content/uploads/2019/07/Percy-Baxter-Charitable-Trust.svg"
          width="255"
          height="191"
        />
      </Link>

      <p>
        64 years ago, John Percy Hamilton Baxter, Chris&apos; great-grandfather,
        showed how one can use their innovative skills in business enterprise to
        develop wealth and, in turn, help people in need. The{' '}
        <Link
          href="http://www.baxtercharitabletrusts.org.au/"
          target="_blank"
          rel="noopener noreferrer"
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

      <h2>We step forwards</h2>

      <p>
        Historically, many family foundations give to causes that resonate with
        them, that have some intersection with the life experience of the
        trustees or where the family knows people involved in the charitable
        organisation. This was certainly true for the{' '}
        <Link
          href="http://www.baxtercharitabletrusts.org.au/"
          target="_blank"
          rel="noopener noreferrer"
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
