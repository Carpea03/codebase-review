import React from 'react'
import Blog from '../components/blog'
import Contact from '../components/contact'
import ContentCard from '../components/content-card'
import Features from '../components/features'
import FeaturesImages from '../components/features-images'
import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import HeroPost from '../components/hero-post'
import Logos from '../components/logos'
import Newsletter from '../components/newsletter'
import SocialProof from '../components/social-proof'

export default function Index() {
  return (
    <>
      <Head>
        <title>Baxter IP</title>
      </Head>
      <Header />
      <Hero />
      <SocialProof />
      <ContentCard />
      <Features />
      <Logos />
      <FeaturesImages />
      <Blog />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}
