import React from 'react'
// import Alert from '../components/alert'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
import RelatedArticle from '../components/related-article'

export default function LayoutBlog({ preview, children }) {
  return (
    <>
      <div>
        {/* <Alert preview={preview} /> */}
        <Header />
        <main className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {children}
        </main>
        <RelatedArticle />
        <Contact />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}
