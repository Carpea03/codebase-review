import Alert from './alert'
// import Contact from '../blocks/contact'
import Footer from '../templates/Footer'
import Header from '../templates/Header'
import Meta from './meta'
// import Newsletter from '../blocks/newsletter'
// import RelatedArticle from '../blocks/related-article'

export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <Meta />
        <Alert preview={preview} />
        <Header active={'Blog'} />
        <main>{children}</main>
        {/* <RelatedArticle /> */}
        {/* <Contact /> */}
        {/* <Newsletter /> */}
      </div>
      <Footer />
    </>
  )
}
