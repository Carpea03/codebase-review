import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ExpertiseBox from '../../components/expertiseBox'
import ClientsBox from '../../components/clientsBox'
import profiles from '../../utils/const/people'
import AttorneysCard from '../../components/attorneysCard'

export default function OtherIndustries() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Patent Industry Expertise',
      link: '/patent-industry-expertise',
    },
    {
      title: 'Other Industries',
      link: '',
    },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>Other Industries</title>
        <meta name="description" content="" />
      </Head>
      <div className="mt-10"></div>
      <h1>Patent Industry Expertise</h1>
      <p>
        Baxter IP’s size belies our breadth and depth of expertise, and we pride
        ourselves on our ability to provide our clients with expert IP advice
        across a range of sectors. Our key areas of focus are engineering, high
        tech, and healthcare, with each sector comprised of a number of discrete
        industries.
      </p>
      <ExpertiseBox active={4} />
      <div className="w-full h-[312px] bg-[#CF7575] mt-10"></div>
      <p>
        Our patent and trade mark attorneys pride themselves on their ability to
        turn their hand to a variety of IP matters. The breadth of our firmwide
        expertise, coupled with our attorneys’ diverse backgrounds, enable us to
        partner with clients from start-ups to corporates, operating across a
        broad range of additional industries, including a number of more niche
        areas. These include, but are not limited to:
      </p>
      <ul>
        <li>FMCG</li>
        <li>Food & Beverage</li>
        <li>Recruitment</li>
        <li>Cosmetics</li>
        <li>Hospitality</li>
        <li>Entertainment</li>
        <li>Retail</li>
      </ul>
      <p>
        FMCG and food & beverage [does F&B not come within FMCG?] are particular
        areas of expertise, with Principal Julia Caunt having worked for more
        than 16 years in leading global and domestic FMCG organisations.
      </p>
      <ClientsBox />
      <p>
        In addition to their IP expertise, a number of our attorneys also have
        prior experience working in the engineering industry. They pride
        themselves on their ability to understand complex technologies,
        employing their firsthand understanding of the commercial drivers at the
        heart of clients’ businesses, and the integral role of IP in their
        commercial success.
      </p>
      <AttorneysCard />
      <p>
        Contact a member of our team today, to understand how we can help you
        protect your IP and maximise your return on investment.
      </p>
    </Layout>
  )
}
