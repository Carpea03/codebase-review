import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import { InnerContainer } from '../components/templates/InnerContainer'
import Banner from '../components/articles/banner'
import IpNewsBlog from '../components/homepage/IpNewsBlog'
import { indexQueryTop3 } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { useState, useEffect, useCallback } from 'react'
import Nav from '../components/Nav'

export default function Layout({
  children,
  bannerData,
  navData,
  defaultLayout,
  allPosts: initialAllPosts,
  preview,
}) {
  const { data: allPosts } = usePreviewSubscription(indexQueryTop3, {
    initialData: initialAllPosts,
    enabled: (preview = true),
  })
  const [heroPost, ...morePosts] = allPosts || []
  const reduceMorePost = morePosts
  // const [reduceMorePost, setReduceMorePost] = useState()

  // useEffect(() => {
  //   init()
  // }, [])

  // const init = async () => {

  //   const allPosts = overlayDrafts(await getClient(false).fetch(indexQueryTop3))
  //   setReduceMorePost(allPosts)
  // }

  return (
    <>
      <Header active={'Articles'} />
      {bannerData && <Banner author={bannerData} />}

      <div className="bg-white w-full flex  item-center absolute h-30 ">
        <InnerContainer>
          <div className="flex flex-col">
            <div className=" md:flex flex-col  xl:px-[120px]">
              <div className="pl-10">
                <Nav navData={navData} />
              </div>
            </div>
          </div>
        </InnerContainer>
      </div>
      {!defaultLayout && (
        <div className="bg-ipNewsLog-content md:px-20">
          <InnerContainer>
            <div className="flex flex-col">
              <div className=" md:flex flex-col items-center xl:px-[120px] pt-10">
                <main className=" bg-white format max-w-none mx-auto md:mt-20 mb-20 pl-10 pr-10 pb-10">
                  {children}
                </main>
              </div>
            </div>
          </InnerContainer>
          <IpNewsBlog news={reduceMorePost?.slice(0, 3)} isblog={true} />
        </div>
      )}

      {defaultLayout && (
        <InnerContainer>
          <main className="format max-w-none mx-auto mb-20">{children}</main>
        </InnerContainer>
      )}
      <Footer />
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQueryTop3))
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 10 second intervals
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}
