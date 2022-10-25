import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PageBody from '../../components/page-body'
import MorePages from '../../components/more-pages'
import Header from '../../components/header'
import PageHeader from '../../components/page-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import { CMS_NAME } from '../../lib/constants'
import { pageQuery, pageSlugsQuery } from '../../lib/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server'

export default function Page({ data = {}, preview }) {
  const router = useRouter()

  const slug = data?.page?.slug
  const {
    data: { page, morePages },
  } = usePreviewSubscription(pageQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PageTitle>Loading…</PageTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {page.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {page.coverImage?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(page.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <PageHeader
                title={page.title}
                coverImage={page.coverImage}
                date={page.date}
                author={page.author}
              />
              <PageBody content={page.content} />
            </article>
            <SectionSeparator />
            {morePages.length > 0 && <MoreStories pages={morePages} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const { page, morePages } = await getClient(preview).fetch(pageQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        page,
        morePages: overlayDrafts(morePages),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(pageSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
