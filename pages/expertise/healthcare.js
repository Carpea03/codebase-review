import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ExpertiseBox from '../../components/expertiseBox'
import ClientsBox from '../../components/clientsBox'
import { profiles, awards } from '../../utils/const/people'
import AttorneysCard from '../../components/attorneysCard'

export default function HealthTech() {
  const data = [
    { title: 'Industry Expertise', link: '/expertise' },
    {
      title: 'Healthcare',
      link: '',
    },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>Healthtech</title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/expertise/healthcare"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/expertise/healthcare"
          hrefLang="en-au"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/expertise/healthcare"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Healthtech Patents</h1>
      {/* <p>
        Baxter IP’s size belies our breadth and depth of expertise, and we pride
        ourselves on our ability to provide our clients with expert IP advice
        across a range of sectors. Our key areas of focus are engineering, high
        tech, and healthcare, with each sector comprised of a number of discrete
        industries.
      </p>
      <ExpertiseBox active={3} />
      <div className="w-full h-[312px] bg-[#B875CF] mt-10"></div> */}
      <p>
        Our healthcare team is led by Dr Seán Klinkradt, who has a PhD in
        neuroscience and is ranked in the 2023 IAM Patent 1000 as a Recommended
        Individual, recognised for utilising “his extensive academic background
        in biochemistry and neuroscience to safeguard his patrons’ intangible
        assets”. Principal Martin Earley and Senior Associate Warren Chandler
        add further breadth and depth of expertise to the team, having both
        spent several years as Patent Examiners at IP Australia reviewing
        patents in the chemical and pharmaceutical industries. Warren also
        brings the experience gained during seven years at the CSIRO, where he
        worked across a range of chemical fields.{' '}
      </p>
      <p>
        The depth of this expertise greatly enhances our ability to assess the
        merits of a client’s patent application, and to provide commercially
        astute advice to ensure the successful commercialisation of a client’s
        IP.
      </p>
      <p>
        Clients range from start-ups to small research groups, universities and
        research institutions, as well as SMEs and large corporates. The
        industries in which we advise clients include:
      </p>
      <ul>
        <li>Medical Devices</li>
        <li>Chemistry</li>
        <li>Pharmaceuticals</li>
        <li>Biochemistry</li>
        <li>Vet Science</li>
        <li>Biotechnology</li>
      </ul>
      <ClientsBox state={3} />
      <p>
        In addition to their IP expertise, a number of our attorneys also have
        prior experience working in the engineering industry. They pride
        themselves on their ability to understand complex technologies,
        employing their firsthand understanding of the commercial drivers at the
        heart of clients’ businesses, and the integral role of IP in their
        commercial success.
      </p>
      <AttorneysCard
        peoples={profiles[0]?.teamMembers?.filter(
          (people) =>
            people.isShow === true &&
            people.linkId !== 'chris-baxter' &&
            people.linkId !== 'andrew-balis' &&
            people.linkId !== 'martin-earley' &&
            people.linkId !== 'qi-zhang'
        )}
        awards={awards}
      />
      <p>
        For expert advice on protecting your IP and maximising your means of
        commercialisation, contact our team of specialists today.
      </p>
    </Layout>
  )
}
