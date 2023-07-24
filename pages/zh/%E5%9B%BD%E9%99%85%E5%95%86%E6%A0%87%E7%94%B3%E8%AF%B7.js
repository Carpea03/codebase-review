import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function 国际商标申请() {
  return (
    <Layout>
      <Head>
        <title>国际商标申请|Baxter IP</title>
        <meta
          name="description"
          content="国际商标申请可通过马德里协议备案，以保护和保护您的商标IIN多个国家"
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/zh/国际商标申请"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%95%86%E6%A0%87%E8%AF%89%E8%AE%BC"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/international-trade-mark-application"
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
          <li>
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
              <Link
                href="/zh/我们的服务"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/zh/商标"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                商标
              </Link>
            </div>
          </li>
          <li>
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
              <Link
                href="/zh/如何注册商标"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                如何商标
              </Link>
            </div>
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
                申请国际商标
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>国际商标申请</h1>
      <h2>如何申请国际商标</h2>

      <p>为了在其他国家/地区保护您的品牌，您有两个选择：</p>
      <ol>
        <li>在每个感兴趣的国家/地区提交商标申请</li>
        <li>
          提交
          <Link
            title="马德里议定书"
            href="https://www.baxterip.com.au/zh/知识产权术语表#马德里议定书"
          >
            马德里议定书
          </Link>
          国际商标申请
        </li>
      </ol>
      <p>
        为了保留您的
        <Link
          title="澳大利亚商标申请"
          href="https://www.baxterip.com.au/zh/澳大利亚商标注册申请"
        >
          澳大利亚商标申请
        </Link>
        的原始申请日，您提交的申请必须在您的澳大利亚商标的原始申请日期后的6个月内通过上述途径1或2递交国际申请。
      </p>

      <h2>马德里议协议国际商标申请</h2>

      <p>
        马德里国际商标申请是一种在海外寻求商标保护的更简单，更便宜的方式，并具有以下几个优点：
      </p>

      <ul>
        <li>只需要一个国际商标申请</li>
        <li>使用一种语言</li>
        <li>可以从澳大利亚递交申请</li>
        <li>可以在一个，多个甚至所有成员国寻求保护</li>
        <li>可以集中处理所有权和续订的更新</li>
      </ul>

      <h2>直接商标申请与马德里协议国际商标申请</h2>

      <p>
        在某些情况下，直接在感兴趣的国家提交商标申请可能比提交马德里议定书国际商标申请更好，因此在寻求国际商标保护之前获得
        <Link
          title="商标代理人"
          href="https://www.baxterip.com.au/zh/商标代理人"
        >
          商标代理人
        </Link>
        的建议非常重要。
      </p>

      <h2>即将提交国际商标申请？</h2>

      <p>
        如果您想了解如何在澳大利亚和国际上保护您的品牌，欢迎通过
        <Link
          title="与知识产权代理人联系"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E8%81%8C%E4%B8%9A"
        >
          电邮
        </Link>
        联系我们。
      </p>
    </Layout>
  )
}
