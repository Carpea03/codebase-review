import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
  return `https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/${src}?w=${width}&q=${
    quality || 75
  }`
}

export default function RelatedArticle() {
  return (
    <aside
      aria-label="Related articles"
      className="lg:py-24 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white md:p-8 lg:p-10">
          Related articles
        </h4>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 md:p-8 lg:p-10">
          {/* <article className="max-w-xs"> */}
          <article>
            <Link href="/" legacyBehavior>
              <Image
                loader={myLoader}
                src="blog-1.png"
                alt="Flowbite Logo"
                width={296}
                height={193}
                className="mb-5 rounded-lg"
              />
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link>
                Our first office
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
              Read in 2 minutes
            </Link>
          </article>
          {/* <article className="max-w-xs"> */}
          <article>
            <Link href="/" legacyBehavior>
              <Image
                loader={myLoader}
                src="blog-2.png"
                alt="Flowbite Logo"
                width={296}
                height={193}
                className="mb-5 rounded-lg"
              />
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link href="/">
                Enterprise design tips
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link
              href="/"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
              Read in 12 minutes
            </Link>
          </article>
          <article className="max-w-xs-">
            <Link href="/" legacyBehavior>
              <Image
                loader={myLoader}
                src="blog-3.png"
                alt="Flowbite Logo"
                width={296}
                height={193}
                className="mb-5 rounded-lg"
              />
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link href="/">
                We partnered with Google
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link
              href="/"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
              Read in 8 minutes
            </Link>
          </article>
          <article className="max-w-xs-">
            <Link href="/" legacyBehavior>
              <Image
                loader={myLoader}
                src="blog-4.png"
                alt="Flowbite Logo"
                width={296}
                height={193}
                className="mb-5 rounded-lg"
              />
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link href="/">
                Our first project with React
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link
              href="/"
              className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
              Read in 4 minutes
            </Link>
          </article>
        </div>
      </div>
    </aside>
  );
}
