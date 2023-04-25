import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function 巴克斯特家庭哲学() {
  return (
    <Layout>
      <Head>
        <title>奉献和支持，透明度和商业性|该Baxter IP家庭哲学</title>
        <meta
          name="description"
          content="Baxter IP的理念建立在奉献和支持，透明度和商业性的基础上，以确保我们的建议始终符合客户的最大利益。"
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/zh/巴克斯特家庭哲学"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%B7%B4%E5%85%8B%E6%96%AF%E7%89%B9%E5%AE%B6%E5%BA%AD%E5%93%B2%E5%AD%A6"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/baxter-family-philosophy"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/baxter-ip-philosophy"
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
                href="/zh/关于"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                我们公司
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
                百特知识产权专利公司哲学
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>百特知识产权专利公司哲学</h1>
      <h2>我们的传统，我们的遗产，我们对您的承诺</h2>
      <blockquote>
        <p>
          坚守最高的商业道德，同时确保我们的建议能给客户带来最大的利益，这就是我们的指导原则和传统。&nbsp;
          <em>约翰·巴克斯特·博士 – 商业顾问</em>
        </p>
      </blockquote>

      <p>
        我们非常热衷于为顾客提供真诚的服务， 以帮助他们完成商业上的目标，
        因此，以下是我们对顾客作出的承诺：
      </p>

      <ol>
        <li>我们一直会把您的最佳利益放在首位。</li>
        <li>我们严格遵守最高的职业道德和职业操守。</li>
        <li>
          您向我们所提供的资料一定会得到严格保密.自2007年成立以来,我们对自己在客户资料保密上的成绩一直引以为傲。
        </li>
        <li>
          我们会定期地与您联系,向您汇报进程和预期的结果，并会提前就费用问题如实告知。
        </li>
        <li>我们会采用简单易懂的词句来向您相关的知识产权法律。</li>
        <li>
          我们将会高效且认真负责地处理您的问题,以确保您可以及时得到高品质服务。
        </li>
        <li>
          我们会帮助您寻找从知识产权中获利的机会。通常，我们会帮助您与相关的商业化或者产品开发专家联系。
        </li>
        <li>我们提供收费固定的专利代理服务, 这可以有助于您的预算。</li>
        <li>
          在知识产权服务方面，我们会一直保持高效率的，以便使您享受到最划算的服务。
        </li>
        <li>
          我们会设身处地地为您考虑。因为许多我们的代理人都曾在研究及开发公司内工作过,我们理解您的状况。
        </li>
      </ol>
    </Layout>
  )
}
