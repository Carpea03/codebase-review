import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function 知识产权信息() {
  return (
    <Layout>
      <Head>
        <title>知识产权价值评估|什么是你的专利值多少钱？</title>
        <meta
          name="description"
          content="Baxter IP可以评估您的知识产权的价值和你的专利组合是值得一用的IP资产估值方法。"
        />
        <link
          rel="canonical"
          href="/zh/知识产权信息"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E4%BF%A1%E6%81%AF"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/ip-info"
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
                知识产权信息
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>IP信息和工具</h1>

      <h2>专利代理人常见问题解答</h2>

      <p>
        在此查看我们的
        <Link
          title="专利代理人常见问题解答"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E9%97%AE%E9%A2%98">
          专利代理人常见问题解答
        </Link>
        .
      </p>

      <hr />

      <h2>知识产权词汇表</h2>

      <p>
        难以理解知识产权术语？我们创建了这个方便的知识产权术语表，为一些更复杂的知识产权相关术语提供定义。点击此处查看我们的
        <Link
          title="知识产权术语表"
          href="https://www.baxterip.com.au/zh/知识产权术语表">
          IP术语表
        </Link>
        。
      </p>

      <hr />

      <h2>IP流程图</h2>

      <p>
        此页面中的流程图仅用于说明目的，仅可以指示与相关过程相关的某些步骤。
      </p>
    </Layout>
  )
}
