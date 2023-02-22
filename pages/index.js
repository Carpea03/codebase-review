import Blog from '../components/blocks/blog'
import Contact from '../components/blocks/contact'
import ContentCard from '../components/blocks/content-card'
import Features from '../components/blocks/features'
import FeaturesImages from '../components/blocks/features-images'
import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/blocks/hero'
import Logos from '../components/blocks/logos'
import ImagesHeadingDescription from '../components/blocks/images-heading-description'
import Newsletter from '../components/blocks/newsletter'
import SocialProof from '../components/blocks/social-proof'
import CardCta from '../components/blocks/card-cta'
import FeatureListCta from '../components/blocks/feature-list-cta'
import Image from 'next/image'

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
      <ImagesHeadingDescription />
      <FeatureListCta />
      <CardCta />
      <FeaturesImages />
      <Blog />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}
