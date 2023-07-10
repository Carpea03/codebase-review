import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
export default function Layout({ children }) {
  return (
    <>
      <Header active={'Blog'} />
      <main className="pt-14 px-8w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        {children}
      </main>
      <Footer />
    </>
  )
}
