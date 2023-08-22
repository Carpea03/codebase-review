import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/blog/container'
import PostBody from '../../components/blog/post-body'
import MoreStories from '../../components/blog/more-stories'
import PostHeader from '../../components/blog/post-header'
import PostTitle from '../../components/blog/post-title'
import { postQuery, postSlugsQuery } from '../../lib/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server'
import Layout from '../../components/layout'
import Banner from '../../components/articles/banner'
import Avatar from '../../components/articles/profile-avatar'
import Image from 'next/image'
import Link from 'next/link'
import CardAvatar from '../../components/articles/card-avatar'

const general = '676965b3-8ec8-43b1-b1a9-1e88f11c65fc'
const patents = '07830fcf-e52a-449b-a873-771207400afb'
const tradeMarks = '350407f4-914c-4d6d-93b7-75c0e1cb0a1b'
//General Types
const corporateOrSME = '17c82d5a-0303-40e7-8897-31cb8fc998a2'
const scaleupOrInvestor = 'f3ae2cc0-56db-4049-a3aa-be654ddd41c4'
const startupOrEntrepreneur = '57580353-cb18-4618-8824-de3a99d441f2'
const foreignAssociates = 'fdbab480-08f8-418d-aa24-b930940e5c5e'
const generalUserType = 'e2641235-19ce-4406-8124-d3cec617da0c'
//Industry Types
const engineering = '4ed84108-ae9f-4d7c-8ee8-98ca9205cacd'
const highTech = '510d7804-bc26-4ff8-9f6e-a694ecf03373'
const healthtech = '63bf9a5a-b8ce-4197-98e8-c8ff280ee3cd'
const otherIndustries = 'b1a0ad48-81a5-45d0-84d9-605d0dc12b90'
const allIndustries = 'f9106bb6-b232-4f2c-8923-96a3414c58b0'

export default function Post({ data = {}, preview }) {
  const router = useRouter()
  const { slug } = router.query
  const slugData = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slugData },
    initialData: data,
    enabled: preview && slugData,
  })
  
  if (!router.isFallback && !slugData) {
    return <ErrorPage statusCode={404} />
  }

  const menu = [
    { title: 'Articles', link: '/ip-news' },
    { title: post?.title, link: `/ip-news/${slug}` },
  ]

  const socialMedia = [
    { link: 'https://twitter.com/', icon: '/socialmedia/twitter.svg' },
    { link: 'https://www.linkedin.com/', icon: '/socialmedia/linkedin.svg' },
    { link: 'https://www.facebook.com/', icon: '/socialmedia/facebook.svg' },
  ]

  const convertTags = (tags) => {
    if (tags === corporateOrSME) {
      return 'Corporate or SME'
    } else if (tags === scaleupOrInvestor) {
      return 'Scaleup or Investor'
    } else if (tags === startupOrEntrepreneur) {
      return 'Startup or Entrepreneur'
    } else if (tags === foreignAssociates) {
      return 'Foreign Associates'
    } else if (tags === generalUserType) {
      return 'General User Type'
    } else if (tags === engineering) {
      return 'Engineering'
    } else if (tags === highTech) {
      return 'HighTech'
    } else if (tags === healthtech) {
      return 'Healthtech'
    } else if (tags === otherIndustries) {
      return 'Other Industries'
    } else {
      return 'All Industries'
    }
  }

  return (
    <Layout navData={menu} articlesBg={true} bannerData={true} contactUs={true} layout={3}>
      <div>
        <div
          className="w-full hidden md:flex rounded"
          style={{ boxShadow: '0 -10px 10px 1px rgba(0, 0, 0, 0.1)' }}
        >
          <div
            style={{
              clipPath:
                'polygon(96% 0px, calc(100% - 0px) 15%, calc(100% - 0px) calc(100% - 5px), 0px calc(100% - 5px), 0px 0px)',
            }}
            className="w-full bg-white px-10 pt-5 py-10 rounded-lg"
          >
            <div
              style={{ marginTop: 20 }}
              className="text-[#FFB800] font-manrope text-xl font-semibold"
            >
              {patents === post?.category[0]._ref
                ? 'Patents'
                : tradeMarks === post?.category[0]._ref
                ? 'Trade Marks'
                : 'General'}
            </div>
            <div className="font-lora text-2xl md: xl:text-5xl font-medium text-[#272940] gap-60 mt-5">
              {post?.title}
            </div>
            <Avatar
              size={60}
              name={post?.author.name}
              picture={post?.author.picture}
              body={true}
              date={post?.date}
            />
          </div>
        </div>

        <div
          className="flex md:hidden w-full"
          style={{ boxShadow: '0 -10px 10px 1px rgba(0, 0, 0, 0.1)' }}
        >
          <div
            style={{
              clipPath:
                'polygon(92% 0px, calc(100% - 0px) 10%, calc(100% - 0px) calc(100% - 5px), 0px calc(100% - 5px), 0px 0px)',
            }}
            className="w-full bg-white px-10 pt-5 py-10 rounded-lg"
          >
            <div
              style={{ marginTop: 20 }}
              className="text-[#FFB800] font-manrope text-xl font-semibold"
            >
              {patents === post?.category[0]._ref
                ? 'Patents'
                : tradeMarks === post?.category[0]._ref
                ? 'Trade Marks'
                : 'General'}
            </div>
            <div className="font-lora text-2xl md: xl:text-5xl font-medium text-[#272940] gap-60 mt-5">
              {post?.title}
            </div>
            <Avatar
              size={60}
              name={post?.author.name}
              picture={post?.author.picture}
              body={true}
              date={post?.date}
            />
          </div>
        </div>
        <div className="px-10">
          <PostBody content={post?.content} post={post} />
          <div className="font-manrope text-xl text-[#404266] font-semibold mt-20">
            Share Articles
            <div className="flex flex-row">
              {socialMedia.map((item, index) => (
                <Link href={item.link} key={`icon-${index}`}>
                  <Image
                    key={`icon-${index}`}
                    src={item.icon}
                    height={40}
                    width={40}
                    style={{ marginRight: 16 }}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="font-manrope text-xl text-[#404266] font-semibold mb-5 ">
            Tags
          </div>
          <div className="flex gap-3 flex-wrap md:flex-row mb-20">
            {post?.tag?.map((item, index) => (
              <div
                className="text-[#7A7B94] font-manrope flex bg-[#F6F6F8] md:mr-2 pr-2 pl-2 pt-1 pb-1"
                key={`tags-${index}`}
              >
                {convertTags(item._ref)}
              </div>
            ))}
          </div>
          <div className="font-manrope text-xl text-[#404266] font-semibold mb-5">
            About the author
          </div>
          <CardAvatar
            name={post?.author.name}
            picture={post?.author.picture}
            position={post?.author.role}
            details={post?.author.bio}
          />
        </div>
      </div>
      {/* {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} - IP Front™ News</title>
                {post.coverImage?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                tag={post.tag}
              />
              <PostBody content={post.content} />
            </article>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )} */}
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 10 second intervals
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
