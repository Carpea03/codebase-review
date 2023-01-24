import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function 专利检索() {
  return (
    <Layout>
      <Head>
        <title>专利检索|全球专利检索|Baxter IP</title>
        <meta
          name="description"
          content="Baxter IP提供专利检索，无论是全球还是在澳大利亚，审查专利性，新颖性和自由使用操作。"
        />
        <link
          rel="canonical"
          href="/zh/专利检索"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/australian-patent-search"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E6%A3%80%E7%B4%A2"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/patent-search"
        />
      </Head>
      <nav
        className="flex"
        aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <Link
                href="/zh/我们的服务"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                我们的服务
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <Link
                href="/zh/专利"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                专利
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <Link
                href="/zh/如何申请专利"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                如何申请专利
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                专利检索
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>专利检索</h1>
      <p>
        专利检索和其他技术文献的检索是获得战略性国际专利保护和减少专利风险的重要一步。
        我们的经验丰富的专利搜索人员善于利用各种复杂的数据库和国际专利检索软件为客户提供高质量的专利检索服务。
      </p>
      <h2>全球新颖的专利检索</h2>
      <p>
        您可以通过全球新颖的专利检索，以得知您的发明是否符合专利申请对于技术的新颖性的要求。因为发明必须是新的并且包括可获得专利的创造性步骤。
        <Link
          title="全球专利新颖性检索"
          href="https://www.baxterip.com.au/zh/全球专利新颖搜索">
          阅读更多…
        </Link>
      </p>
      <h2>可自由运营专利检索</h2>
      <p>
        执行自由运营专利检索（也称为防侵权专利检索）的目的是为了确定产品在授予专利的国家和地区的销售，制造和使用不会侵犯的他人的专利权。
        <Link
          title="自由运营专利检索"
          href="https://www.baxterip.com.au/zh/免费操作搜索">
          阅读更多…
        </Link>
      </p>
      <h2>澳大利亚专利检索</h2>
      <p>
        澳大利亚知识产权局维持着AUSPAT专利数据库，允许公众搜索澳大利亚专利数据。
        我们的专利代理人和专利检索人员可以使用此数据库为您执行多种类型的澳大利亚专利检索，包括通过专利号进行检索，通过专利申请人和发明人进行搜索。
        <Link
          title="澳大利亚专利检索"
          href="https://www.baxterip.com.au/zh/澳大利亚专利检索">
          阅读更多…
        </Link>
      </p>
      <h2>其他专利检索</h2>
      <p>
        专利检索可以用作商业战略。
        以下是我们的专利代理人为我们的客户执行的战略性专利检索类型的一些例子：
      </p>
    </Layout>
  )
}
