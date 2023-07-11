import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
export default function Layout({ children }) {
  return (
    <>
      <Header active={'Blog'} />
      <main className="format max-w-none mx-auto px-5 lg:px-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
