import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import { InnerContainer } from '../components/templates/InnerContainer'
import PostBody from '../components/blog/post-body'
import Banner from '../components/articles/banner'
import IpNewsBlog from '../components/homepage/IpNewsBlog'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { useState, useEffect, useCallback } from 'react'
import Nav from '../components/Nav'
import ContactUsBanner from '../components/articles/contact-us-banner'
import Stepper from '../components/stepper'

export default function Layout({
  articlesBg,
  children,
  bannerData,
  navData,
  layout,
  title,
  defaultLayout,
  contactUs,
  active,
  stepper,
  coverImage,
  allPosts: initialAllPosts,
  preview,
  lightbox,
}) {
  // const { data: allPosts } = usePreviewSubscription(indexQueryTop3, {
  //   initialData: initialAllPosts,
  //   enabled: (preview = true),
  // })
  // const [heroPost, ...morePosts] = allPosts || []
  // const reduceMorePost = morePosts
  const [reduceMorePost, setReduceMorePost] = useState()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    setReduceMorePost([])
    const allPosts = overlayDrafts(await getClient(false).fetch(indexQuery))
    setReduceMorePost(allPosts?.sort(() => Math.random() - 0.5).slice(0, 3))
  }

  return (
    <>
      <Header active={active} lightbox={lightbox} />
      <div
        style={{ zIndex: 10 }}
        className="bg-white w-full flex item-center absolute h-30 z-100"
      >
        <InnerContainer>
          <div className="flex">
            <div className=" md:flex xl:px-[120px]">
              <div className="pl-[32px] md:pl-10 ">
                <Nav navData={navData} />
              </div>
            </div>
          </div>
        </InnerContainer>
      </div>
      {bannerData && (
        <div className="z-0">
          <Banner layout={layout} coverImage={coverImage} />
        </div>
      )}

      {!bannerData && !defaultLayout && (
        <div className="z-0">
          <Banner layout={layout} />
        </div>
      )}
      {!layout && (
        <>
          <div className={`${articlesBg ? '' : 'bg-ipNewsLog-content'} `}>
            <InnerContainer>
              <div className="flex flex-col md:px-20 mt-10 ">
                <div
                  style={{ zIndex: 10 }}
                  className={`${
                    bannerData ? 'x2l:mr-10 x2l:ml-10' : ''
                  } md:flex flex-col  items-center xl:px-[81px] px-[32px] md:px-10`}
                >
                  {stepper && (
                    <div className="w-full mt-40">
                      <Stepper active={stepper} />
                    </div>
                  )}
                  <main
                    style={{
                      zIndex: 0,
                    }}
                    className={` ${
                      bannerData ? 'py-80 mt-20' : 'bg-white'
                    } format max-w-none mx-auto  mt-[100px] pt-[1px] pl-[16px] pr-[16px] md:pl-10 md:pr-10 pb-10 rounded-lg w-full
                  ${
                    bannerData
                      ? 'mb-20'
                      : stepper
                      ? 'md:mt-10 mb-20'
                      : 'md:mt-32 mb-20'
                  }
                  `}
                  >
                    {children}
                  </main>
                </div>
              </div>
            </InnerContainer>
            <>
              <IpNewsBlog
                news={reduceMorePost
                  ?.sort(() => Math.random() - 0.5)
                  .slice(0, 3)}
                isblog={true}
              />
            </>
          </div>
        </>
      )}

      {layout === 1 && (
        <div className="w-full">
          <InnerContainer>
            <main className="format max-w-none mx-auto mb-20">{children}</main>
          </InnerContainer>
        </div>
      )}

      {layout === 2 && (
        <>
          <div className={`bg-ipNewsLog-content`}>
            <InnerContainer>
              <div className="flex flex-col px-5 md:px-20 pt-10">
                <div
                  style={{ zIndex: 10 }}
                  className={`${
                    bannerData ? 'x2l:mr-10 x2l:ml-10' : ''
                  } md:flex flex-col  justify-center items-center xl:px-[81px] pt-10`}
                >
                  <div className="flex justify-center item-center">
                    <span
                      className={
                        'font-lora text-[32px] sm:text-[48px] md:text-5xl mt-20 mb-10 text-white'
                      }
                    >
                      <h1>{title}</h1>
                    </span>
                  </div>
                  <main
                    style={{
                      zIndex: 0,
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                    className={` 
                  bg-white
                     format max-w-none mx-auto pl-[16px] pr-[16px] sm:pl-[32px] sm:pr-[32px] md:pl-10 md:pr-10 pb-10 rounded-md pt-1
                    
                 ${bannerData ? 'mb-20' : 'md:mt-20 mb-20'}
                 `}
                  >
                    {children}
                  </main>
                </div>
              </div>
            </InnerContainer>
            <>
              <IpNewsBlog
                isblog={true}
                news={reduceMorePost
                  ?.sort(() => Math.random() - 0.5)
                  ?.slice(0, 3)}
              />
            </>
          </div>
        </>
      )}

      {layout === 3 && (
        <>
          <div className={`${articlesBg ? '' : 'bg-ipNewsLog-content'} `}>
            <InnerContainer>
              <div className="flex flex-col md:px-20 mt-[200px]">
                <div
                  style={{ zIndex: 10 }}
                  className={`${
                    bannerData ? 'x2l:mr-10 x2l:ml-10' : ''
                  } md:flex flex-col  items-center xl:px-[43px]`}
                >
                  <main
                    style={{
                      zIndex: 0,
                    }}
                    className={` ${
                      bannerData ? 'py-80 mt-20' : 'bg-white'
                    } format max-w-none mx-auto pl-[32px] pr-[32px] md:pl-10 md:pr-10 pb-10
                  ${bannerData ? 'mb-20' : 'md:mt-20 mb-20 '}
                  `}
                  >
                    {children}
                  </main>
                </div>
              </div>
            </InnerContainer>
            <>
              <IpNewsBlog news={reduceMorePost} isblog={true} />
            </>
          </div>
        </>
      )}

      {contactUs && <ContactUsBanner />}
      <Footer />
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps({ preview = false }) {
//   const allPosts = overlayDrafts(await getClient(preview).fetch(indexQueryTop3))
//   return {
//     props: { allPosts, preview },
//     // If webhooks isn't setup then attempt to re-generate in 10 second intervals
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10,
//   }
// }
