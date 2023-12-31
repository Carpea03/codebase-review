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
import { general } from '../../../utils/const/ids'

export const getStaticPaths = async () => {
  const allPosts = overlayDrafts(await getClient(false).fetch(indexQuery))
  const [...morePosts] = allPosts || []
  const itemsPerPage = 6
  const pageCount = [Math.ceil(morePosts?.length || 0 / itemsPerPage)]
  let newData = []
  for (var i = 1; i <= pageCount; i++) {
    newData.push(i)
  }

  const paths = newData.map((item, index) => {
    return {
      params: { id: (index + 1).toString() },
    }
  })


    return {
    paths,
    fallback: false,
  }
}

export default function Index({ allPosts: initialAllPosts, preview, id }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  const data = [{ title: 'Articles', link: '/ip-news' }]

  return (
    <>
      <Head>
        <title>{`IP Front™ - General`}</title>
        <meta name="description" content="" />
      </Head>
      <Layout
        preview={preview}
        defaultLayout={true}
        navData={data}
        layout={1}
        active={'Articles'}
      >
        <div className="mt-10">
          {morePosts.length > 0 && <Content posts={morePosts} title={"Latest Articles"}/>}
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
