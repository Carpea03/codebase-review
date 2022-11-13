import Contact from './blocks/contact'
import Footer from './footer'
import Header from './header'
import Newsletter from './blocks/newsletter'

export default function LayoutWide({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}
