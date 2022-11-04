import React from 'react'
import Alert from './alert'
import Contact from '../blocks/contact'
import Footer from '../footer'
import Header from '../header'
import Meta from './meta'
import Newsletter from '../blocks/newsletter'
import RelatedArticle from '../blocks/related-article'

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
