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
            <Link href="/">
              <a>
                <Image
                  loader={myLoader}
                  src="blog-1.png"
                  alt="Flowbite Logo"
                  width={296}
                  height={193}
                  className="mb-5 rounded-lg"
                />
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 2"> */}
              </a>
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a>Our first office</a>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <a className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
              Read in 2 minutes
            </a>
          </article>
          {/* <article className="max-w-xs"> */}
          <article>
            <Link href="/">
              <a>
                <Image
                  loader={myLoader}
                  src="blog-2.png"
                  alt="Flowbite Logo"
                  width={296}
                  height={193}
                  className="mb-5 rounded-lg"
                />
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2"> */}
              </a>
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link href="/">
                <a>Enterprise design tips</a>
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link href="/">
              <a className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read in 12 minutes
              </a>
            </Link>
          </article>
          <article className="max-w-xs-">
            <Link href="/">
              <a>
                <Image
                  loader={myLoader}
                  src="blog-3.png"
                  alt="Flowbite Logo"
                  width={296}
                  height={193}
                  className="mb-5 rounded-lg"
                />
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3"> */}
              </a>
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link href="/">
                <a>We partnered with Google</a>
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link href="/">
              <a className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read in 8 minutes
              </a>
            </Link>
          </article>
          <article className="max-w-xs-">
            <Link href="/">
              <a>
                <Image
                  loader={myLoader}
                  src="blog-4.png"
                  alt="Flowbite Logo"
                  width={296}
                  height={193}
                  className="mb-5 rounded-lg"
                />
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4"> */}
              </a>
            </Link>
            <h4 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <Link href="/">
                <a>Our first project with React</a>
              </Link>
            </h4>
            <p className="mb-4 mr-4 font-light text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link href="/">
              <a className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read in 4 minutes
              </a>
            </Link>
          </article>
        </div>
      </div>
    </aside>
  )
}
