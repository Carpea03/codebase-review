import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ExpertiseBox from '../../components/expertiseBox'
import ClientsBox from '../../components/clientsBox'
import AttorneysCard from '../../components/attorneysCard'
import { profiles, awards } from '../../utils/const/people'

export default function HighTech() {
  const data = [
    { title: 'Industry Expertise', link: '/expertise' },
    {
      title: 'HighTech',
      link: '',
    },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>HighTech</title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/expertise/hightech"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/expertise/hightech"
          hrefLang="en-au"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/expertise/hightech"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>HighTech Patents</h1>
      {/* <p>
        Baxter IP’s size belies our breadth and depth of expertise, and we pride
        ourselves on our ability to provide our clients with expert IP advice
        across a range of sectors. Our key areas of focus are engineering, high
        tech, and healthcare, with each sector comprised of a number of discrete
        industries.
      </p>
      <ExpertiseBox active={2} />
      <div className="w-full h-[312px] bg-[#7589CF] mt-10"></div> */}
      <p>
        High technology, also known as advanced technology, is technology that
        is at the cutting edge of developments. Our high tech expertise spans a
        wide range of specialisations, including a number of niche areas not
        offered by many of our competitor firms. This breadth of expertise in
        turn makes us the IP advisor of choice for industry participants ranging
        from start-ups to SMEs and corporates.
      </p>
      <ul>
        <li>Electrical</li>
        <li>Electronic</li>
        <li>Applications</li>
        <li>Physics</li>
        <li>Energy Tech</li>
        <li>Defence</li>
        <li>Robotics</li>
        <li>Telecommunications</li>
        <li>Security</li>
        <li>E-Commerce </li>
        <li>Distributed Ledgers</li>
        <li>Quantum</li>
        <li>Optical Tech</li>
      </ul>
      <ClientsBox state={2} />
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
            people.linkId !== 'warren-chandler' &&
            people.linkId !== 'sean-klinkradt' && 
            people.linkId !== 'richard-grant'
        )}
        awards={awards}
      />
      <p>
        If you are operating at the forefront of innovation, contact one of our
        experts today for specialist advice on how to protect maximise the value
        of your IP and achieve commercially acceptable returns on your research
        and development investment.
      </p>
    </Layout>
  )
}
