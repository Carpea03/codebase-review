import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ExpertiseBox from '../../components/expertiseBox'
import ClientsBox from '../../components/clientsBox'
import AttorneysCard from '../../components/attorneysCard'
import React, { useState, useEffect } from 'react'
import { profiles, awards } from '../../utils/const/people'

export default function Engineering() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Patent Industry Expertise',
      link: '/patent-industry-expertise',
    },
    {
      title: 'Engineering',
      link: '',
    },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>Engineering</title>
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
      <ExpertiseBox active={1} />
      <div className="w-full h-[312px] bg-[#75CFBA] mt-10"></div>
      <p>
        Engineering is a core specialism at Baxter IP. With xx of our attorneys
        specialising in engineering IP, we offer clients strength of expertise
        across a broad range of industries, including:
      </p>
      <ul>
        <li>Mechanical</li>
        <li>Construction</li>
        <li>Mining</li>
        <li>Space</li>
        <li>Aeronautical</li>
        <li>Naval</li>
        <li>Agri Tech</li>
        <li>Manufacturing</li>
      </ul>
      <p>
        Within these industries our attorneys work with private inventors,
        start-ups, SMEs, multinationals, ASX listed companies, and university
        spin-outs.
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
      <AttorneysCard
        peoples={profiles[0]?.teamMembers}
        awards={awards}
      />
      <p>
        For specialist advice on how to protect your engineering IP, contact one
        of our experts today.
      </p>
    </Layout>
  )
}
