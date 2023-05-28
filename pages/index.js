import TopMenu from '../components/menus/TopMenu'
import Footer from '../components/templates/Footer'
import Header from '../components/templates/Header'
import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'
import BrandsBanner from '../components/homepage/banner/BrandsBanner'
import HeroBanner from '../components/homepage/banner/HeroBanner'
import Benefits from '../components/homepage/Benefits'
import ContactUs from '../components/homepage/ContactUs'
import { FillingStats } from '../components/homepage/FillingStats'
import { IndustrySepciality } from '../components/homepage/IndustrySepciality'
import IpNewsBlog from '../components/homepage/IpNewsBlog'
import { MarketSegment } from '../components/homepage/MarketSegment'
import { OurClient } from '../components/homepage/OurClient'
import { OurServices } from '../components/homepage/OurServices'
import ProfessionalProfiles from '../components/homepage/ProfessionalProfiles'
import { VisitmetaOffice } from '../components/homepage/VisitMetaOffice'
import useContentStore from '../store/useContent.store'

export default function Home() {
  const menuState = useContentStore((state) => state.menuState)
  const setMenuState = useContentStore((state) => state.setMenuState)
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [subMenu, setSubMenu] = useState(0)

  const onChangeMenu = useCallback((index) => {
    setMenuState(index)
    setSelectedMenu(index)
  }, [])

  useEffect(() => {
    setSubMenu(menuState)
  }, [menuState])

  return (
    <>
      <Head>
        <title>BaxterIP</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>

      <Header
        topMenuIndex={selectedMenu}
        onTopMenuChange={onChangeMenu}
      />
      <HeroBanner />
      <BrandsBanner />
      <Benefits />
      <MarketSegment
        cardIndex={selectedMenu}
        onChange={onChangeMenu}
      />
      <TopMenu
        menuIndex={selectedMenu}
        onChange={onChangeMenu}
      />
      <OurServices />
      {subMenu === 0 && (
        <>
          <ProfessionalProfiles />
          <FillingStats />
          <IndustrySepciality />
          <IpNewsBlog />
          <OurClient />
        </>
      )}
      {subMenu === 1 && (
        <>
          <ProfessionalProfiles />
          <OurClient />
          <FillingStats />
          <IpNewsBlog />
        </>
      )}
      {subMenu === 2 && (
        <>
          <IpNewsBlog />
          <OurClient />
          <FillingStats />
          <ProfessionalProfiles />
        </>
      )}
      {subMenu === 3 && (
        <>
          <ProfessionalProfiles />
          <IpNewsBlog />
          <IndustrySepciality />
          <OurClient />
          <FillingStats />
        </>
      )}
      <ContactUs />
      <VisitmetaOffice />
      <Footer />
    </>
  )
}
