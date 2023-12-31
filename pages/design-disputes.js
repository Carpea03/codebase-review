import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function DesignDisputes() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'Registered Designs', link: '/registered-designs' },
    { title: 'Design Disputes', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Design Disputes | Baxter IP, Patent & Trade Mark Attorneys
        </title>
        <meta
          name="description"
          content="A design dispute allows IP Australia to scrutinise evidence that may be unavailable during formalities examination leading to a registered design."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/design-disputes"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E8%AE%BE%E8%AE%A1%E7%BA%A0%E7%BA%B7"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10">
        <h1>Design Disputes</h1>
        <p>
          The two- or three-dimensional appearance of an article can be
          protected through{' '}
          <Link href="/registered-designs">design registration</Link>. Design
          registration grants the owner a 10 year monopoly on the visual
          appearance of a product, with the registration being renewed five
          years into the lifetime of the registered design. Failure to renew
          registration after five years will cause the registration to lapse,
          meaning that the design will be entered into the public domain and can
          be used by anyone.
        </p>
        <p>In general, to be registered, a design should be:</p>
        <ul>
          <li>
            new, meaning it has not been previously used in Australia, published
            in any document anywhere else in the world, nor submitted for
            application with an earlier priority date; and
          </li>
          <li>
            distinctive, meaning that it should not look substantially similar
            in appearance.
          </li>
        </ul>
        <p>
          Unlike in other jurisdictions, registered designs in Australia are
          enforceable only after being certified. Unregistered designs are only
          eligible for seeking relief through the common law tort of passing off
          and Australian Consumer Law on the basis of the good will established
          by the reputable use of the registered design.
        </p>
        <h2>Registration vs Certification</h2>
        <p>
          To register a design,{' '}
          <Link
            href="https://www.ipaustralia.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IP Australia
          </Link>{' '}
          conducts a formalities examination, after which the design is
          registered. On the other hand, certification of examination is usually
          sought in order to enforce the registered design right against an
          infringement and entails a more thorough examination of the prior art.
        </p>
        <h2>What is a design dispute?</h2>
        <p>
          A design dispute is an avenue provided by the{' '}
          <em>Designs Act 2003</em> to enforce one&apos;s right as the owner of
          a registered design against an infringing party. Design infringement
          may occur even without knowledge of &ldquo;prior art&rdquo; on the
          part of the infringing party.
        </p>
        <h2>Who can own a registered design?</h2>
        <p>
          In cases of design disputes, design registration can be disputed if an
          ineligible party is deemed the owner of the design. In Australia, the
          following parties are eligible to own registered designs:
        </p>
        <ul>
          <li>The actual author of the design</li>
          <li>The employer of the designer</li>
          <li>The party who commissioned to have the design made</li>
          <li>A person to whom the designer assigned the design in writing</li>
        </ul>
        <p>
          In cases of two or more parties having interest in the design, the
          application must be made jointly and under all the names of the
          parties involved.
        </p>
        <h2>Steps in addressing design disputes</h2>
        <h3>Certification</h3>
        <p>
          For the owner of the registered design, the first step is to have the
          registered design certified, because only certified registered designs
          can be enforced in Australia. Certification entails a substantive
          examination in contrast to the formalities examination for
          registration. To be certified, the Designs Office will check if the
          design is new and not offensive (containing graphic words or images).
          The design should also be free of any protected emblems (such as flags
          and signets).
        </p>
        <h3>Scenario 1. Addressing an infringing party</h3>
        <p>
          To address an infringing party, the design must be in force.
          Certification is required for a registered design to be enforced.
        </p>
        <p>
          After registration and certification, a cease and desist letter to the
          infringing party is typically sufficient to stop the infringing
          behavior; otherwise, alternative dispute resolution and sometimes
          litigation ensues. Note that the cease and desist letter should be
          written with utmost care, because if the claims in the letter are
          proven groundless, the accused may be awarded costs. Conversely, if
          infringement is proven, the infringing party may be liable to pay for
          damages or an account of profits.
        </p>
        <h3>Scenario 2. Addressing a cease and desist letter</h3>
        <p>
          Upon receiving a cease and desist letter, one may be involved in
          dispute settlement through alternative dispute resolution routes, such
          as negotiation, mediation or arbitration. An application may be sought
          to have the existing registered design revoked by proving that the
          design being infringed should not have been registered in the first
          place. Any party can request IP Australia re-examine a registered
          design provided that they have information on relevant designs used
          prior to the filing date of the contested registered design.
        </p>
        <h3>The role of an IP attorney in design disputes</h3>
        <p>
          The services of an experienced{' '}
          <Link href="/ip-attorney">IP attorney</Link> is invaluable in design
          disputes. Your IP attorney can:
        </p>
        <ul>
          <li>File your design and seek to have it certified.</li>
          <li>Draft a cease and desist letter with careful consideration.</li>
          <li>
            Represent the client in cases of alternative dispute resolution or
            advise the client in conjunction with legal advice if the matter
            escalates to design litigation in court.
          </li>
        </ul>
      </div>
    </Layout>
  )
}
