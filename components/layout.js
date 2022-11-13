import Contact from '../components/blocks/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Newsletter from '../components/blocks/newsletter'
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-14 px-8 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        {children}
      </main>
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}
