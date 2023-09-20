import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ExpertiseBox from '../../components/expertiseBox'

export default function PatentIndustryExpertise() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Patent Industry Expertise',
      link: '',
    },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>Patent Industry Expertise</title>
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
      <h2>
        Five reasons it’s better working with a patent specialist attorney
      </h2>
      <ExpertiseBox />
      <p>
        1. Your patent industry expert attorney will understand your new idea
        and its technical and commercial context more quickly.
      </p>
      <p>
        2. Your patent specialist attorneys will be able to identify potential
        points of novelty or inventiveness more easily.
      </p>
      <p>
        3.Your patent industry experts will be able to identify how a competitor
        might attempt to circumvent your patent claims more easily in order to
        defend against this.
      </p>
      <p>
        4. With their patent technology specialisation, your patent attorneys
        will be able to expand the scope of your patent claims with logical
        variations.
      </p>
      <p>
        5. They may be able to provide you with some contacts in the industry or
        other commercial advice.
      </p>
      <p>
        If you work in the fast-evolving fintech or SaaS space, patent
        protection is necessary to protect the steps you have taken ahead of
        other players because these gaps can be closed quickly. If you work in
        developing new chemical processes, compounds and pharmaceutical
        formulations, there is often an extended development lifecycle before a
        commercial return can be seen. Often there is a scientific community
        push for publishing advances to establish a pseudo claim of first to
        invent – this needs to be resisted until a patent application has been
        filed by your patent attorney; otherwise, publication may adversely
        affect the ability to obtain adequate and deserved commercial
        compensation for the substantial investment you have made.
      </p>
    </Layout>
  )
}
