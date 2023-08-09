import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function LivingOurValues() {
  const data = [
    { title: 'About us', link: '/about' },
    { title: 'Living our values', link: '' },
  ]
  return (
    <Layout navData={data}>
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
      <h1>Living our values</h1>
      <h2>Dedicated &amp; supportive, transparent and commercial</h2>
      <p>
        These are our core values. At the heart of Baxter IP is a{' '}
        <Link href="/ip-attorney">group of attorneys</Link> who are dedicated to
        you, your business and the change you seek to create. Whether
        you&apos;re in-house counsel for a multinational or a mum-and-dad
        entrepreneur, you can rest assured that every team member you deal with
        is dedicated to your successful commercial outcomes.
      </p>
      <p>
        Transparency is at the heart of every trusted advisor and the same is
        true for IP attorneys. We&apos;ll be completely transparent with you on
        how we&apos;re handling your matter and consult with you closely.
        Clarity on timing, costs and sticking to our word, unless we communicate
        otherwise, are all part and parcel of our transparent service.
      </p>
      <p>
        The best advice an IP attorney can give their client is always business
        contextual. It&apos;s advice that&apos;s balanced in line with the
        multi-factorial considerations that govern your strategic plans. We
        promise to ask the right questions and to provide you with clear,
        commercially astute IP advice.
      </p>
      <figure className="aligncenter size-large is-resized">
        <Image
          decoding="async"
          loading="lazy"
          src="https://www.baxterip.com.au/wp-content/uploads/2021/01/square-chris-baxter.jpg"
          alt="Chris Baxter - Managing Director, Patent &amp; Trade Mark Attorney"
          width="150"
          height="150"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2021/01/square-chris-baxter.jpg 300w, https://www.baxterip.com.au/wp-content/uploads/2021/01/square-chris-baxter-150x150.jpg 150w, https://www.baxterip.com.au/wp-content/uploads/2021/01/square-chris-baxter-210x210.jpg 210w, https://www.baxterip.com.au/wp-content/uploads/2021/01/square-chris-baxter-100x100.jpg 100w"
          sizes="(max-width: 150px) 100vw, 150px"
        />
      </figure>
      <blockquote>
        Our purpose: To partner with clients to provide transparent and
        commercially astute advice, dedicated to achieving successful outcomes.
      </blockquote>
      <cite>
        &ndash; Chris Baxter, Managing Director, Patent &amp; Trade Mark
        Attorney
      </cite>
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
          alt="The UNSW Sydney logo"
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
          alt="Founders of 10x Accelerator"
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
          src="https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre.jpg"
          alt="Nunyara Centre logo"
          srcSet="https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre.jpg 666w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-300x45.jpg 300w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-210x32.jpg 210w, https://www.baxterip.com.au/wp-content/uploads/2020/09/nuyaracentre-100x15.jpg 100w"
          sizes="(max-width: 666px) 100vw, 666px"
        />
      </Link>
      <p>
        We continue the Baxter family tradition of supporting Australian
        Indigenous causes. Recently, we supported the Nunyara Centre at Officer,
        Victoria in using trade mark law to stop the indigenous word
        &ldquo;Nunyara&rdquo; from being adopted by a large cannabis company for
        one of its products.
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
          alt="Percy Baxter Charitable Trust logo"
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
