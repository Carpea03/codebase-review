import React from 'react'
import Head from 'next/head'
import ContentCard from '../components/content-card'
// import Container from '../components/container'
import Features from '../components/features'
import FeaturesImages from '../components/features-images'
import Hero from '../components/hero'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Logos from '../components/logos'
import SocialProof from '../components/social-proof'
import MoreStories from '../components/more-stories'
import { CMS_NAME } from '../lib/constants'
// import { postIndexQuery, pageIndexQuery } from '../lib/queries'
import { postIndexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'

export default function Index({ allPosts: initialAllPosts, preview }) {
  const { data: allPosts } = usePreviewSubscription(postIndexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  return (
    <Layout preview={preview}>
      <Head>
        <title>
          Next.js Blog Example with
          {CMS_NAME}
        </title>
      </Head>
      <Hero />
      <SocialProof />
      <ContentCard />
      <Features />
      <Logos />
      <FeaturesImages />
    </Layout>
  )
}

// export default function Index({ allPages: initialAllPages, preview }) {
//   const { data: allPages } = usePreviewSubscription(pageIndexQuery, {
//     initialData: initialAllPages,
//     enabled: preview,
//   })
//   return (
//     <>
//       <Layout preview={preview}>
//         <Head>
//           <title>Next.js Blog Example with {CMS_NAME}</title>
//         </Head>
//         <Container>
//           <Intro />
//           {morePages.length > 0 && <MoreStories posts={morePages} />}
//         </Container>
//       </Layout>
//     </>
//   )
// }

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(postIndexQuery))
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
