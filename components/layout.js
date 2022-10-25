import React from 'react'
import Alert from '../components/alert'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Meta from '../components/meta'
import Newsletter from '../components/newsletter'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
        <Contact />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}
