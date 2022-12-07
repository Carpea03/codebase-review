import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function 专利代理人() {
  return (
    <Layout>
      <Head>
        <title>专利代理人|悉尼和墨尔本 | Baxter IP</title>
        <meta
          name="description"
          content="Baxter IP is a leading, independent, mid-tier patent and trade mark attorney firm with offices in Sydney and Melbourne, Australia."
        />
        <link
          rel="canonical"
          href="/zh/专利代理人"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E4%BB%A3%E7%90%86%E4%BA%BA"
          hreflang="zh"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.baxterip.com.au/patent-attorney"
        />
      </Head>
      <nav
        className="flex"
        aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link href="/zh">
              <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
            </Link>
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
                我们的专利代理人
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>我们的专利代理人是行业专家</h1>
      <p>
        2007年至2011年，Baxter
        IP知识产权公司在悉尼，墨尔本和布里斯班均设立了一个行业专家专利代理人团队，因此我们可以为您提供具备行业专业背景的专利代理人
        – 这对您意味着什么？
      </p>
      <ol>
        <li>您的专利代理人将更快地了解您的新想法及其技术和商业背景</li>
        <li>
          专利代理人可以更容易地识别可专利性的潜在要点，包括新颖性和创造性。
        </li>
        <li>
          利用他们的行业知识，您的专利代理人将能够确定竞争对手如何试图规避您的专利申请，从而努力作出防范。
        </li>
        <li>
          您的专利代理人将能够根据专利设计的逻辑变化扩展您的
          <Link
            title="提交临时专利申请"
            href="https://www.baxterip.com.au/zh/临时专利">
            专利申请
          </Link>
          范围。
        </li>
        <li>我们的专利代理人事务所能会为您提供行业内的商业建议或联系人。</li>
      </ol>

      <h2>我们的专利代理人帮助您实现商业目标，而不是出售专利代理人服务</h2>

      <ul>
        <li>
          我们的团队拥有澳大利亚最知名的研发公司如ResMed，澳大利亚知识产权局，CSIRO以及为悉尼和墨尔本着名的专利代理人事务所服务的经验。我们对您的知识产权有全面的了解。
        </li>
        <li>
          我们是一支成功的团队：从2015年的IT专利代理人服务知识产权奖到IP
          Luminary Awards和大学奖章再到企业家的
          <Link
            title="Anthill 奖30岁以下年龄阶段荣誉奖"
            href="http://anthillonline.com/chris-baxter-2011-anthill-30under30-honourable-mention/"
            target="_blank"
            rel="noopener noreferrer">
            Anthill奖
          </Link>
          。
        </li>
        <li>
          我们的专利代理人事务所已在全球30个国家/地区获得150多项授权专利。
        </li>
        <li>我们正在为全球的澳大利亚创新者管理另外626项专利申请。</li>
      </ul>
    </Layout>
  )
}
