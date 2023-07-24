import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'

export default function LayoutWide({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
