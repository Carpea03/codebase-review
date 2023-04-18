import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-14 px-8 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        {children}
      </main>
      <Footer />
    </>
  )
}
