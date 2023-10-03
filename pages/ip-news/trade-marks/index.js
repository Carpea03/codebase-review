import Head from 'next/head'
import Container from '../../../components/blog/container'
import MoreStories from '../../../components/blog/more-stories'
import HeroPost from '../../../components/blog/hero-post'
import Intro from '../../../components/blog/intro'
import Layout from '../../../components/layout'
import { InnerContainer } from '../../../components/templates/InnerContainer'
import { indexQuery } from '../../../lib/queries'
import { usePreviewSubscription } from '../../../lib/sanity'
import { getClient, overlayDrafts } from '../../../lib/sanity.server'
import Content from '../../../components/articles/content'
import { useState, useEffect } from 'react'

export default function Index({ allPosts: initialAllPosts, preview, id }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  const data = [
    { title: 'Articles', link: '/ip-news' },
    { title: 'Trade Marks', link: '' },
  ]

  return (
    <>
      <Head>
      <title>{`IP Front™ - Trade Mark News by Baxter IP`}</title>
        <meta name="description" content='IP Front™ - The latest trade mark news across by Baxter IP.' />
        <link rel="canonical" href="https://www.baxterip.com.au/ip-news/trade-marks" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/ip-news/trade-marks"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/ip-news/trade-marks"
          hreflang="en-AU"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/ip-news"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%85%B3%E4%BA%8E"
          hreflang="zh"
        ></link>
      </Head>
      <Layout
        preview={preview}
        defaultLayout={true}
        navData={data}
        layout={1}
        active={'Articles'}
      >
        <div className="mt-10">
          {morePosts.length > 0 && <Content posts={morePosts} title={"Trade Mark Articles"}/>}
        </div>
      </Layout>
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ preview = false, context }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 10 second intervals
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}
