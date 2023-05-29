import React, { useState, useCallback } from 'react'
import TopMenu from './menus/TopMenu'
import Footer from './templates/Footer'
import Header from './templates/Header'
import BrandsBanner from './banner/BrandsBanner'
import HeroBanner from './banner/HeroBanner'
import Benefits from './Benefits'
import ContactUs from './ContactUs'
import { FillingStats } from './FillingStats'
import { IndustrySepciality } from './IndustrySepciality'
import IpNewsBlog from './IpNewsBlog'
import { MarketSegment } from './MarketSegment'
import { OurClient } from './OurClient'
import { OurServices } from './OurServices'
import ProfessionalProfiles from './ProfessionalProfiles'
import { VisitmetaOffice } from './VisitmetaOffice'

export default function Homepage() {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const onChangeMenu = useCallback((index) => {
    setSelectedMenu(index)
  }, [])

  return (
    <>
      <Header topMenuIndex={selectedMenu} onTopMenuChange={onChangeMenu} />
      <HeroBanner />
      <BrandsBanner />
      <Benefits />
      <MarketSegment cardIndex={selectedMenu} onChange={onChangeMenu} />
      <TopMenu menuIndex={selectedMenu} onChange={onChangeMenu} />
      <OurServices />
      <IndustrySepciality />
      <ProfessionalProfiles />
      <ContactUs />
      <IpNewsBlog />
      <FillingStats />
      <OurClient />
      <VisitmetaOffice />
      <Footer />
    </>
  )
}
