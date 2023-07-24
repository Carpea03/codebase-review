import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function 我们的服务() {
  return (
    <Layout>
      <Head>
        <title>专利服务和商标服务|Baxter IP</title>
        <meta
          name="description"
          content="Baxter IP提供知识产权服务，包括专利服务，商标服务和其他IP服务。"
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/zh/我们的服务"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%9C%8D%E5%8A%A1"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/services"
        />
      </Head>
      <nav className="flex overflow-x-auto not-format" aria-label="Breadcrumb">
        <ol className="inline-flex items-center mt-4 mb-4 space-x-1 md:space-x-3 list-none pm-25 whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                我们的服务
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>我们的服务</h1>

      <h2>
        <Link
          title="如何在澳大利亚申请专利？"
          href="https://www.baxterip.com.au/zh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%9C%8D%E5%8A%A1/%E4%B8%93%E5%88%A9/%E5%A6%82%E4%BD%95%E7%94%B3%E8%AF%B7%E4%B8%93%E5%88%A9"
        >
          如何申请专利
        </Link>
      </h2>

      <ul>
        <li>
          <Link href="https://www.baxterip.com.au/zh/%E4%B8%B4%E6%97%B6%E4%B8%93%E5%88%A9">
            第一阶段一临时专利申请
          </Link>
        </li>
        <li>
          <Link href="https://www.baxterip.com.au/zh/%E6%96%B0%E9%A2%96%E6%80%A7%E6%A3%80%E7%B4%A2">
            第二阶段一新颖性检索
          </Link>
        </li>
        <li>
          <Link
            title="提交PCT国际专利申请"
            href="https://www.baxterip.com.au/zh/pct国际专利"
          >
            第三阶段一PCT国际专利
          </Link>
        </li>
        <li>
          <Link
            title="国家阶段申请"
            href="https://www.baxterip.com.au/zh/国家专利"
          >
            第四阶段一国家专利
          </Link>
        </li>
        <li>
          <Link
            title="创新专利"
            href="https://www.baxterip.com.au/zh/创新专利申请"
          >
            创新专利
          </Link>
        </li>
        <li>
          <Link title="专利诉讼" href="https://www.baxterip.com.au/zh/专利诉讼">
            专利诉讼
          </Link>
        </li>
        <li>
          <Link
            title="注册外观设计"
            href="https://www.baxterip.com.au/zh/注册外观设计"
          >
            注册外观设计
          </Link>
        </li>
        <li>
          <Link
            title="知识产权价值评估"
            href="https://www.baxterip.com.au/zh/知识产权价值评估"
          >
            知识产权评估
          </Link>
        </li>
      </ul>

      <h2>
        <Link href="https://www.baxterip.com.au/zh/专利检索">专利检索</Link>
      </h2>

      <ul>
        <li>
          <Link href="https://www.baxterip.com.au/zh/全球专利新颖搜索">
            全球专利新颖性检索
          </Link>
        </li>
        <li>
          <Link href="https://www.baxterip.com.au/zh/新颖性检索">
            新颖性检索
          </Link>
        </li>
        <li>
          <Link href="https://www.baxterip.com.au/zh/澳大利亚专利检索">
            澳大利亚范围专利检索
          </Link>
        </li>
        <li>
          <Link href="https://www.baxterip.com.au/zh/免费操作搜索">
            自由运营检索
          </Link>
        </li>
      </ul>

      <h2>
        <Link
          title="如何注册商标？"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E8%81%8C%E4%B8%9A"
        >
          如何注册商标
        </Link>
      </h2>

      <ul>
        <li>
          <Link
            title="澳大利亚商标注册申请"
            href="https://www.baxterip.com.au/zh/澳大利亚商标注册申请"
          >
            澳大利亚商标申请
          </Link>
        </li>
        <li>
          <Link
            title="国际商标申请"
            href="https://www.baxterip.com.au/zh/国际商标申请"
          >
            国际商标申请
          </Link>
        </li>
        <li>
          <Link title="商标搜索" href="https://www.baxterip.com.au/zh/商标搜索">
            商标检索
          </Link>
        </li>
        <li>
          <Link title="商标诉讼" href="https://www.baxterip.com.au/zh/商标诉讼">
            商标诉讼
          </Link>
        </li>
        <li>
          <Link title="商标侵权" href="https://www.baxterip.com.au/zh/商标侵权">
            商标侵权
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
