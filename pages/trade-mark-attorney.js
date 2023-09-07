import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

import StaffChris from '../components/staff/chris'
import StaffMartin from '../components/staff/martin'
import StaffQi from '../components/staff/qi'
import StaffWarren from '../components/staff/warren'
import StaffNaleesha from '../components/staff/naleesha'
import StaffJarrod from '../components/staff/jarrod'
import StaffJulia from '../components/staff/julia'
import StaffAndrew from '../components/staff/andrew'
import StaffJoanne from '../components/staff/joanne'
import StaffWillem from '../components/staff/willem'

export default function TradeMarkAttorney() {
  const data = [{ title: 'Our trade mark attorneys', link: '' }]
  return (
    <Layout navData={data}>
      <Head>
        <title>Trade mark attorneys in Sydney & Melbourne | Baxter IP</title>
        <meta
          name="description"
          content="A Baxter IP trade mark attorney based in Sydney or Melbourne can assist you with trade mark applications, trade mark searches or trade mark enforcement."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-attorney"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%95%86%E6%A0%87%E4%BB%A3%E7%90%86%E4%BA%BA"
          hrefLang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>
        Our trade mark attorney teams in Sydney & Melbourne are poised to
        protect & defend your brand
      </h1>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 not-format">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <StaffChris />
          <StaffMartin />
          <StaffQi />
          <StaffWarren />
          <StaffNaleesha />
          <StaffJarrod />
          <StaffJulia />
          <StaffAndrew />
          <StaffJoanne />
          <StaffWillem />
        </div>
      </div>

      <p>
        Our trade mark attorneys in Sydney and Melbourne can secure strategic
        trade mark protection for your brands in Australia &amp; overseas.
      </p>

      <ol>
        <li>
          We have a passion for helping businesses protect their brands – so
          whether you&rsquo;re a small or medium business, or a major national
          brand we have the right team and the right experience for you.
        </li>
        <li>
          We can provide you with a tailor made trade mark strategy to suit your
          business, taking into account the nature of your product, your target
          markets and your budget.
        </li>
        <li>
          We will advise you at every step of the way, from initial concept
          through to registration, through to national or global recognition. We
          will guide you through the maze of intellectual property legislation,
          to put you into the best position for acquisition, exploitation and
          protection.
        </li>
        <li>
          And all of our advice will be given in a way that fits with your wider
          strategic picture. Our trade mark attorneys enjoy working closely with
          our clients so that we truly understand the nature of their business,
          in order to achieve the goal of effectively protecting and exploiting
          their brand.
        </li>
      </ol>
    </Layout>
  )
}
