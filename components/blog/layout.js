import Alert from './alert'
import Contact from '../to-delete/blocks/contact'
import Footer from '../templates/Footer'
import Header from '../templates/Header'
import Meta from './meta'
import Newsletter from '../to-delete/blocks/newsletter'
import RelatedArticle from '../to-delete/blocks/related-article'

export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <Meta />
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
        <RelatedArticle />
        <Contact />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}
