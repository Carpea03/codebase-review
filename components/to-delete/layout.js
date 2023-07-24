import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
export default function Layout({ children }) {
  return (
    <>
      <Header active={'Blog'} />
      <main className="format max-w-none mx-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}
