export default function SocialProof() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl py-8 lg:py-16 px-4 mx-auto lg:px-6">
        <dl className="grid gap-8 mt-8 text-gray-900 sm:grid-cols-2 lg:gap-20 lg:mt-14 lg:grid-cols-4 dark:text-white">
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              $76 bilion
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              24h trading volume on Flowbite exchange
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">600+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Cryptocurrencies listed on our platform
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              90 milion
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Registered users who trust Flowbite{' '}
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">0.10%</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Lowest transaction fees
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
