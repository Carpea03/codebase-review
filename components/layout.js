import React from 'react'
import Alert from '../components/alert'
import Blog from '../components/blog'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Meta from '../components/meta'
import Newsletter from '../components/newsletter'
import markdownStyles from './markdown-styles.module.css'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          {/* <div className="flex justify-between px-4 mx-auto max-w-screen-xl"> */}
          <div
            className={`flex justify-between px-4 mx-auto max-w-screen-xl ${markdownStyles.markdown}`}>
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              {children}
            </article>
          </div>
        </main>
        <Blog />
        <Contact />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}
