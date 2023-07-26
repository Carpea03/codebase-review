import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import { InnerContainer } from '../templates/InnerContainer'
import Banner from '../../components/articles/banner'

export default function Layout({ children, bannerData }) {
  return (
    <>
      <Header active={'Articles'} />
      {bannerData && <Banner author={bannerData} />}
      <InnerContainer>
        <main className="format max-w-none mx-auto mb-20">{children}</main>
      </InnerContainer>
      <Footer />
    </>
  )
}
