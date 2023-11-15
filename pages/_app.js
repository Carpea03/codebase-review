import '../styles/globals.css'
import Head from 'next/head'
import favicon from '../public/favicon.ico';
import favicon16 from '../public/images/favicon-16x16.png';
import favicon32 from '../public/images/favicon-32x32.png';
import favicon48 from '../public/images/favicon-48x48.png';
import favicon180 from '../public/images/apple-touch-icon.png';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src}  type="image/x-icon" />
        <link rel="icon" href={favicon.src}  type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicon180.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={favicon48.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon32.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon16.src}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
