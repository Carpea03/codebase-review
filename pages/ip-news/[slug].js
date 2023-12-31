import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
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
import {
  corporateOrSME,
  scaleupOrInvestor,
  startupOrEntrepreneur,
  foreignAssociates,
  generalUserType,
  engineering,
  highTech,
  healthtech,
  otherIndustries,
  patents,
  tradeMarks,
} from '../../utils/const/ids'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import { profiles } from '../../utils/const/people'

export default function Post({ data = {}, preview }) {
  const router = useRouter()
  const [tags, setTags] = useState()
  const [url, setUrl] = useState()
  const [copy, setCopy] = useState('Copy')
  const { slug } = router.query
  const slugData = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slugData },
    initialData: data,
    enabled: preview && slugData,
  })

  const menu = [
    { title: 'Articles', link: '/ip-news' },
    { title: post?.title, link: `/ip-news/${slug}` },
  ]

  const socialMedia = [
    { link: '', icon: '/socialmedia/twitter.svg' },
    { link: '', icon: '/socialmedia/linkedin.svg' },
    { link: '', icon: '/socialmedia/facebook.svg' },
    { link: '', icon: '/socialmedia/Copy link.svg' },
  ]

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    let tagsName = []
    setUrl(window.location)
    post?.tag?.map((item) => {
      tagsName.push(convertTags(item._ref))
    })
    setTags(tagsName.sort())
    return
  }

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

  if (!router.isFallback && !slugData) {
    return <ErrorPage statusCode={404} />
  }

  const onProfile = () => {
    const selectedProfile = profiles[0]?.teamMembers?.filter(
      (people) => people.name.toLowerCase() === post?.author.name.toLowerCase()
    )[0]

    router.push(`/attorneys/${selectedProfile.linkId}`)
  }

  return (
    <>
      <Head>
        <title>{`${post?.title} - IP Front™ News`}</title>
        <meta name="description" content={post?.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.baxterip.com.au/ip-news/${post?.slug}`}
        />
         <link
          rel="alternate"
          href={`https://www.baxterip.com.au/ip-news/${post?.slug}`}
          hrefLang="en-au"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://www.baxterip.com.au/ip-news/${post?.slug}`}
        />
      </Head>
      <Layout
        navData={menu}
        articlesBg={true}
        bannerData={true}
        contactUs={true}
        layout={3}
        active={'Articles'}
        coverImage={post?.coverImage}
      >
        <div className="bg-transparent">
          <div
            className="w-full hidden sm:flex rounded bg-transparent"
            style={{ boxShadow: '0 -10px 10px 1px rgba(0, 0, 0, 0.1)' }}
          >
            <div
              style={{
                clipPath:
                  'polygon(96% 0px, calc(100% - 0px) 15%, calc(100% - 0px) calc(100% - 5px), 0px calc(100% - 5px), 0px 0px)',
              }}
              className="w-full bg-white px-[16px] md:px-10 pt-5 md:py-10 rounded-lg"
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
              <h1 className="font-lora text-2xl md: xl:text-5xl font-medium text-[#272940] gap-60 mt-5">
                {post?.title}
              </h1>
              <div className="cursor-pointer" onClick={() => onProfile()}>
                <Avatar
                  size={60}
                  name={post?.author.name}
                  picture={post?.author.picture}
                  body={true}
                  date={post?.date}
                />
              </div>
            </div>
          </div>

          <div
            className="flex sm:hidden w-full"
            style={{ boxShadow: '0 -10px 10px 1px rgba(0, 0, 0, 0.1)' }}
          >
            <div
              style={{
                clipPath:
                  'polygon(92% 0px, calc(100% - 0px) 10%, calc(100% - 0px) calc(100% - 5px), 0px calc(100% - 5px), 0px 0px)',
              }}
              className="w-full bg-white px-[16px] md:px-10 pt-5 md:py-10 rounded-lg"
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
          <div className="px-[16px] md:px-10">
            <PostBody content={post?.content} post={post} />
            <div className="font-manrope text-xl text-[#404266] font-semibold mt-20">
              Share Articles
              <div className="flex flex-row">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(url),setCopy('Copied!')
                  }}
                >
                  <div className="tooltip">
                  <Image
                    // key={`icon-${index}`}
                    src={socialMedia[3].icon}
                    height={40}
                    width={40}
                    style={{ marginRight: 16 }}
                  />
                  <span className="tooltiptext">{copy}</span>
                  </div>
                </div>
                <TwitterShareButton url={url}>
                  <Image
                    // key={`icon-${index}`}
                    src={socialMedia[0].icon}
                    height={40}
                    width={40}
                    style={{ marginRight: 16 }}
                  />
                </TwitterShareButton>
                <LinkedinShareButton url={url}>
                  <Image
                    // key={`icon-${index}`}
                    src={socialMedia[1].icon}
                    height={40}
                    width={40}
                    style={{ marginRight: 16 }}
                  />
                </LinkedinShareButton>
                <FacebookShareButton url={url}>
                  <Image
                    // key={`icon-${index}`}
                    src={socialMedia[2].icon}
                    height={40}
                    width={40}
                    style={{ marginRight: 16 }}
                  />
                </FacebookShareButton>
                {/* {socialMedia.map((item, index) => (
                  <Link href={item.link} key={`icon-${index}`}>
                    <Image
                      key={`icon-${index}`}
                      src={item.icon}
                      height={40}
                      width={40}
                      style={{ marginRight: 16 }}
                    />
                  </Link>
                ))} */}
              </div>
            </div>
            <div className="font-manrope text-xl text-[#404266] font-semibold mb-5 ">
              Tags
            </div>
            <div className="flex gap-3 flex-wrap md:flex-row mb-20">
              {tags?.map((item, index) => (
                <div
                  className="text-[#7A7B94] font-manrope flex bg-[#F6F6F8] md:mr-2 pr-2 pl-2 pt-1 pb-1"
                  key={`tags-${index}`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="font-manrope text-xl text-[#404266] font-semibold mb-5">
              About the author
            </div>
            <div className="cursor-pointer" onClick={() => onProfile()}>
              <CardAvatar
                name={post?.author.name}
                picture={post?.author.picture}
                position={post?.author.role}
                details={post?.author.bio}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
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
