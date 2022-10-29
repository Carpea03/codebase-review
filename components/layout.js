import React from 'react'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Newsletter from '../components/newsletter'
export default function Layout({ preview, children }) {
  return (
    <>
      <div>
        <Header />
        <main className="pt-14 mx-auto w-full max-w-2xl max-width-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {children}
        </main>
        <Contact />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}
