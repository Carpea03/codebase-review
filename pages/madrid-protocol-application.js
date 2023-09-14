import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function MadridProtocolApplication() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Trade Mark', link: '/how-to-trade-mark' },
    { title: 'Madrid Protocol', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Filing a Madrid Protocol Application | Baxter IP</title>
        <meta
          name="description"
          content="The Madrid Protocol governs the registration and management of trade marks for protection in member states of the Madrid Union."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/madrid-protocol-application"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Filing a Madrid Protocol Trade Mark Application</h1>
      <p>
        Whilst there is no such thing as a worldwide trade mark <em>per se</em>,
        the{' '}
        <Link
          href="https://www.wipo.int/portal/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          World Intellectual Property Organization (WIPO)
        </Link>{' '}
        provides the Madrid Protocol system for applicants to pursue protection
        in multiple countries more cost effectively.
      </p>
      <p>
        The Madrid System is a system for registering trade marks in member
        states of the Madrid Union. It allows applicants to apply for trade mark
        applications and maintain registrations in up to 122 member countries
        through one centralized system.
      </p>
      <h3>Benefits of international trade mark registration</h3>
      <p>
        One of the greatest benefits of acquiring an{' '}
        <Link href="/international-trade-mark-application">
          international trade mark registration
        </Link>{' '}
        for your mark is that you, as the owner of an{' '}
        <Link href="/trade-mark-application">Australian trade mark</Link>, can
        seek international trade mark protection by submitting a single
        application in the English language. This approach is easier and less
        expensive than filing multiple applications in each individual
        jurisdiction in which you seek trade mark protection. Moreover,{' '}
        <Link href="/international-trade-mark-management">
          amendments and renewals
        </Link>{' '}
        of international registrations can be implemented more cost effectively.
      </p>
      <p>
        Another advantage of an international trade mark registration is that
        once it is registered in the designated country, your trade mark is
        accorded the same protection as any trade mark that is nationally
        registered in that country.
      </p>
      <p>
        The Madrid Protocol offers a provision for designating in other
        countries after the initial submission and at a later date through
        subsequent designations.
      </p>
      <h3>
        Considerations before filing an international trade mark registration
      </h3>
      <p>
        Given the independent national trade mark systems of the members of the
        Madrid protocol, you can still apply for trade mark protection directly
        to these countries. Your{' '}
        <Link href="/trade-mark-attorney">trade mark attorney</Link> can help
        you decide whether to file in the countries you are interested in via
        the Madrid Protocol or directly.
      </p>
      <p>Considerations for this decision include:</p>
      <ul>
        <li>
          Are the countries you intend to apply in members of the Madrid
          Protocol?
        </li>
        <li>
          Are you eligible to file an international application under the Madrid
          Protocol?
        </li>
        <li>
          What is the scope of your Australian trade mark, such as the{' '}
          <Link href="/classes-of-goods-and-services">
            goods and/or services
          </Link>{' '}
          you wish to be protected overseas?
        </li>
      </ul>
      <p>
        Your trade mark attorney can perform a trade mark pre-filing search and
        include different databases that may show where a similar mark has been
        used in your countries of interest. These searches can help identify
        which of the countries may present a potential prior use or prior filing
        conflict. In addition, we can help you determine whether your trade mark
        is likely or not to be registrable in the countries of interest due to
        possible cultural or legal restrictions.
      </p>
      <h2>Madrid registration process</h2>
      <h3>Filing an international trade mark application</h3>
      <p>
        Before you can file an international trade mark application through the
        Madrid Protocol, you need to have a basic trade mark application filed
        if you don&apos;t already have a trade mark registration in your home
        country. This means, you need to start with an Australian trade mark
        application.
      </p>
      <p>
        An application for International Registration is filed by your trade
        mark attorney through IP Australia. Once an application is filed, IP
        Australia certifies the International application and forwards it to
        WIPO. WIPO conducts a formal examination, registers the mark in the
        International Register and publishes it in the WIPO Gazette of
        International registrations. WIPO will then issue a certificate of
        international registration and notify the designated contracting
        parties.
      </p>
      <figure>
        <Link href="/charts/Flowchart-I-Madrid-Protocol-Trade-Mark-Application-Process-Desktop-v2.png">
          <Image
            loader={myLoader}
            src="/charts/Flowchart-I-Madrid-Protocol-Trade-Mark-Application-Process-Desktop-v2-1024x395.png"
            alt="Madrid Protocol Trade Mark Application Process (for desktop)"
            width="1024"
            height="395"
          />
        </Link>
        <figcaption>Madrid Protocol Trade Mark Application Process</figcaption>
      </figure>
      <h4>Dependance on basic application</h4>
      <p>
        An international registration remains dependent on the basic application
        for a period of five years from the date of international registration.
        For Australian applicants the basic application is normally an
        Australian trade mark application. If the basic application or
        registration ceases to have effect, the international registration
        lapses. After the five-year period elapses, the maintenance of the
        international registration is no longer dependent on the basic
        application staying alive.
      </p>
      <h3>Lifetime of an international registration</h3>
      <p>
        An international registration has an initial validity period of ten
        years. When the ten year period ends, the registration can be renewed
        for all or some of the designations for further ten year periods by
        payment of renewal fees.
      </p>
    </Layout>
  )
}
