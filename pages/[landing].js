import Footer from '../components/templates/Footer'
import Header from '../components/templates/Header'
import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'
import BrandsBanner from '../components/homepage/banner/BrandsBanner'
import HeroBanner from '../components/homepage/banner/HeroBanner'
import ContactUs from '../components/homepage/ContactUs'
import { FillingStats } from '../components/homepage/FillingStats'
import IpNewsBlog from '../components/homepage/IpNewsBlog'
import { MarketSegment } from '../components/homepage/MarketSegment'
import { OurClient } from '../components/homepage/OurClient'
import { OurServices } from '../components/homepage/OurServices'
import { VisitVirtualOffice } from '../components/homepage/VisitVirtualOffice'
import ProfessionalProfiles from '../components/homepage/ProfessionalProfiles'
import useContentStore from '../store/useContent.store'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import TransparentCounsel from '../components/homepage/TransparentCounsel'
import { transparentCounselData } from '../utils/const/counsel'

export const landingPages = [
  { landing: 'designs' },
  { landing: 'ip-oppositions-disputes' },
  { landing: 'ip-strategy' },
  { landing: 'patent-oppositions-disputes' },
  { landing: 'patents' },
  { landing: 'trade-mark-oppositions-disputes' },
  { landing: 'trade-marks' },
]

export const getStaticPaths = async () => {
  const paths = landingPages.map((item) => {
    return {
      params: { landing: item?.landing?.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const allPosts = overlayDrafts(await getClient(false).fetch(indexQuery))
  const landing = context.params.landing
  const data = transparentCounselData[landing]
  return {
    props: {
      allPosts,
      preview: false,
      counselData: data,
      landingName: landing,
    },
  }
}

export default function Home({
  allPosts: initialAllPosts,
  preview,
  counselData,
  landingName,
}) {
  const menuState = useContentStore((state) => state.menuState)
  const setMenuState = useContentStore((state) => state.setMenuState)
  const menuState2 = useContentStore((state) => state.menuState2)
  const setMenuState2 = useContentStore((state) => state.setMenuState2)
  const [selectedMenu, setSelectedMenu] = useState(-1)
  const [selectedMenu2, setSelectedMenu2] = useState(-1)
  const [subMenu, setSubMenu] = useState(0)
  const [subMenu2, setSubMenu2] = useState(0)
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })

  const [heroPost, ...morePosts] = allPosts || []
  const reduceMorePost = morePosts.slice(0, 3)

  const onChangeMenu = useCallback((index) => {
    const selectedId = localStorage.getItem('selected-id')

    if (Number(selectedId) === index) {
      setMenuState(0)
      setSelectedMenu(-1)
      localStorage.setItem('selected-id', -1)
      return
    }
    setMenuState(index + 1)
    setSelectedMenu(index + 1)

    localStorage.setItem('selected-id', index)
  }, [])

  const onChangeMenu2 = useCallback((index) => {
    const selectedId = localStorage.getItem('selected-id-2')

    if (Number(selectedId) === index) {
      setMenuState2(0)
      setSelectedMenu2(-1)
      localStorage.setItem('selected-id-2', -1)
      return
    }
    setMenuState2(index + 1)
    setSelectedMenu2(index + 1)

    localStorage.setItem('selected-id-2', index)
  }, [])

  useEffect(() => {
    const selectedId = localStorage.getItem('selected-id')
    if (!selectedId) {
      localStorage.setItem('selected-id', -1)
    }

    setSubMenu(menuState)
  }, [menuState])

  useEffect(() => {
    const selectedId2 = localStorage.getItem('selected-id-2')
    if (!selectedId2) {
      localStorage.setItem('selected-id-2', -1)
    }

    setSubMenu2(menuState2)
  }, [menuState2])

  return (
    <>
      <Head>
        <title>{counselData?.title[0]?.metaTitle}</title>
        <meta name="description" content={counselData?.title[0]?.metaDetails} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.baxterip.com.au/${landingName}`}
        />
        <link
          rel="alternate"
          href={`https://www.baxterip.com.au/${landingName}`}
          hrefLang="en-au"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://www.baxterip.com.au/${landingName}`}
        />
        {counselData?.title[0]?.zh && (
          <link
            rel="alternate"
            href={counselData?.title[0]?.zh}
            hreflang="zh"
          />
        )}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header
        topMenuIndex={selectedMenu}
        onTopMenuChange={onChangeMenu}
        active={'Services'}
      />
      <HeroBanner landing={true} data={counselData} />
      <BrandsBanner landing={true} />
      <TransparentCounsel data={counselData} />
      <MarketSegment
        cardIndex={selectedMenu}
        onChange={onChangeMenu}
        cardIndexIndustry={selectedMenu2}
        onChangeIndustry={onChangeMenu2}
      />
      {/* <MarketSegment2 cardIndex={selectedMenu2} onChange={onChangeMenu2} /> */}
      <OurServices />
      <ContactUs />
      {subMenu === 0 && selectedMenu === -1 && (
        <>
          <OurClient state={menuState2} />
          <ProfessionalProfiles />
          <FillingStats />
          <IpNewsBlog news={reduceMorePost} />
        </>
      )}
      {subMenu === 1 && selectedMenu !== -1 && (
        <>
          <ProfessionalProfiles />
          <OurClient state={menuState2} />
          <IpNewsBlog news={reduceMorePost} />
          <FillingStats state={menuState2} />
        </>
      )}
      {subMenu === 2 && selectedMenu !== -1 && (
        <>
          <ProfessionalProfiles />
          <OurClient state={menuState2} />
          <FillingStats />
          <IpNewsBlog news={reduceMorePost} />
        </>
      )}
      {subMenu === 3 && selectedMenu !== -1 && (
        <>
          <ProfessionalProfiles />
          <OurClient state={menuState2} />
          <FillingStats />
        </>
      )}
      {subMenu === 4 && selectedMenu !== -1 && (
        <>
          <ProfessionalProfiles />
          <IpNewsBlog news={reduceMorePost} />
          <OurClient state={menuState2} />
          <FillingStats />
        </>
      )}
      <VisitVirtualOffice />
      <Footer />
    </>
  )
}
