import Header from './templates/Header'
import Footer from './templates/Footer'

export default function LayoutWide({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
