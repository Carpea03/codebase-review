import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function HowToBecomeATradeMarkAttorney() {
  const data = [
    { title: 'Join Us', link: '/ip-careers' },
    { title: 'How to Become a Trade Mark Attorney', link: '' },
  ]
  return (
    <Layout navData={data} bannerData={true} layout={2} title={"How to Become a Trade Mark Attorney"} active={"Values"}>
      <Head>
        <title>
          How to Become a Trade Mark Attorney in Australia | Baxter IP
        </title>
        <meta
          name="description"
          content="Learn how to become a trade mark attorney in Australia and determine whether your skill set qualifies for an IP career in Baxter IP."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/how-to-become-a-trade-mark-attorney"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A6%82%E4%BD%95%E6%88%90%E4%B8%BA%E5%95%86%E6%A0%87%E4%BB%A3%E7%90%86%E4%BA%BA"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10">
        <p>
          An Australian trade mark attorney represents and advises clients
          regarding trade mark matters, such as{' '}
          <Link href="/trade-mark-search">trade mark searches</Link>,{' '}
          <Link href="/trade-mark-application">filing</Link>, registration,
          preparation of assignment documents, and enforcement in Australia and
          overseas, including{' '}
          <Link href="/international-trade-mark-application">
            international applications
          </Link>{' '}
          in target foreign markets and global applications through the{' '}
          <Link href="/madrid-protocol-application">Madrid protocol</Link>.
          Unlike patent applications, trade mark applications can be filed by
          anyone; however, registration as a trade mark attorney grants certain
          benefits, such as the right to be called a &quot;trade mark
          attorney&quot; or &quot;trade mark agent&quot; and conduct business as
          so.
        </p>
        <h2>Qualifications of a trade mark attorney</h2>
        <p>
          To become a registered trade mark attorney and be listed in the
          official Australian Register of Trade Mark Attorneys, the individual
          must possess several competencies in accordance to the standards set
          by the Professional Standards Board of Trade Mark and Patent Attorneys
          (hereafter referred to as the Board), who regulates registrations into
          the profession and provides disciplinary control. The requirements
          include the following:
        </p>
        <h3>Academic qualifications</h3>
        <p>To become a trade mark attorney, one must have:</p>
        <ul>
          <li>
            a Level 5 Australian Qualification Framework (AQF) qualification
            (Diploma level) or higher; or
          </li>
          <li>
            an overseas qualification that the Board deems equivalent to a Level
            5 AQF qualification
          </li>
        </ul>
        <p>
          While it is not a requirement, a degree in law may be beneficial in
          the practise of trade marks attorneys.
        </p>
        <p>
          Knowledge on other forms of intellectual property, such as patents,
          copyright, design, trade practises, domain names, circuit layout,
          plant breeder&apos;s rights, and confidential information are
          similarly advantageous.
        </p>
        <h3>Knowledge qualifications</h3>
        <p>
          The IP curriculum includes nine topic groups, but the following four
          course groups are sufficient to be eligible to practise as a trade
          mark attorney.
        </p>
        <ul>
          <li>Legal process and overview of intellectual property</li>
          <li>Professional conduct</li>
          <li>Trade marks law</li>
          <li>Trade marks practice</li>
        </ul>
        <p>
          Knowledge requirements can be obtained by enrolling in accredited
          courses offered by several prescribed tertiary institutions or
          applying for exemptions to the Board on the basis of having previously
          taken the equivalents of these topics.
        </p>
        <h3>Personal qualifications</h3>
        <p>
          A trade mark attorney is tasked to function according to law and act
          in the best interest of their client. Thus, it is of utmost importance
          that trade mark attorney be
        </p>
        <ul>
          <li>of good fame, integrity, and character;</li>
          <li>
            not convicted for a prescribed offence for the last five years; and
          </li>
          <li>not sentenced to imprisonment for a prescribed offence.</li>
        </ul>
        <p>
          Finally, the trade mark attorney should be an ordinary Australian
          citizen.
        </p>
        <h2>Takeaway/s</h2>
        <p>
          A person must have a spotless character, sufficient technical
          knowledge, and the complete educational requirements to be able to
          become an Australian trade mark attorney. Even so, the field is
          starting to become extremely competitive with applicants having
          identical or similar qualifications, so differences in experience and
          work environment may spell your success or failure in the field.
        </p>
      </div>
    </Layout>
  )
}
