import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import Image from 'next/image'

const myLoader = ({ src, width, quality, host = 'http://localhost:3000' }) => {
  return `${host}/images/${src}?w=${width}&q=${quality || 75}`
}

export default function AwardsAndRecognition() {
  return (
    <Layout>
      <Head>
        <title>
          Patent and trade mark attorney awards and recognition | Baxter IP
        </title>
        <meta
          name="description"
          content="Patent and trade mark attorney awards and received by Baxter IP reflect recognition by our peers for excellence in intellectual property advice."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/awards-and-recognition"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/awards-recognition"
          hrefLang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%A5%96%E9%A1%B9%E4%B8%8E%E8%A1%A8%E5%BD%B0"
          hrefLang="zh"
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
                href="/about"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                About us
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
                Awards & Recognition
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Awards & Recognition</h1>
      <p>
        <Link href="https://www.baxterip.com.au/about">
          Baxter IP, Patent &amp; Trade Mark Attorneys
        </Link>{' '}
        has been increasingly awarded in recent years for its expertise in
        Australian patents and trade marks and particularly for its work in the
        field of{' '}
        <Link href="https://www.baxterip.com.au/specialisations/software-patents">
          software patents
        </Link>
        .
      </p>
      <table>
        <tr>
          <td width="50%">
            <Image
              width="300"
              height="300"
              loader={myLoader}
              src="awards/2021-Global-Law-Experts-Software-Patents-IP-Attorney-Firm-of-the-Year-300x300.jpg"
              alt="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
              title="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
            />
          </td>
          <td>
            <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
            <p>2021 Global Law Experts Annual Awards</p>

            <p>
              Baxter IP was selected as Software Patents IP Attorney Firm of the
              Year (Australia) in the 2021{' '}
              <Link
                rel="noreferrer noopener"
                href="https://www.globallawexperts.com/AwardPublications.aspx"
                target="_blank"
              >
                Global Law Experts Annual Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2020-AI-Acquisition-International-Global-Excellence-Awards-300x300.jpg"
              alt="AI Acquisition International – Global Excellence Awards: Best Specialist Patent &amp; Trade Mark Law Firm (Australia)"
              title="AI Acquisition International – Global Excellence Awards: Best Specialist Patent &amp; Trade Mark Law Firm (Australia)"
            />{' '}
          </td>
          <td>
            <h2>
              Best Specialist Patent &amp; Trade Mark Law Firm (Australia)
            </h2>
            <p>2020 AI Acquisition International - Global Excellence Awards</p>

            <p>
              Baxter IP was selected as Best Specialist Patent &amp; Trade Mark
              Law Firm (Australia) in the 2020{' '}
              <Link
                rel="noreferrer noopener"
                href="https://www.acq-intl.com/acq-awards/"
                target="_blank"
              >
                AI Acquisition International – Global Excellence Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2019-Corporate-INTL-Global-Awards-300x300.jpg"
              alt="Corporate INTL Global Awards: Software Patents Attorney Firm of the Year (Australia)"
              title="Corporate INTL Global Awards: Software Patents Attorney Firm of the Year (Australia)"
            />{' '}
          </td>
          <td>
            <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
            <p>2019 Corporate INTL Global Awards</p>

            <p>
              Baxter IP was selected as Software Patents Attorney Firm of the
              Year (Australia) in the 2019{' '}
              <Link
                rel="noreferrer noopener"
                href="https://www.acq-intl.com/2016-the-2016-intellectual-property-awards-press-release/"
                target="_blank"
              >
                Corporate INTL Global Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2019-Global-Law-Experts-Annual-Awards-300x300.jpg"
              alt="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
              title="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
            />
          </td>
          <td>
            <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
            <p>2019 Global Law Experts Annual Awards</p>

            <p>
              Baxter IP was selected as Software Patents IP Attorney Firm of the
              Year (Australia) in the 2019{' '}
              <Link
                rel="noreferrer noopener"
                href="https://www.globallawexperts.com/AwardPublications.aspx"
                target="_blank"
              >
                Global Law Experts Annual Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2019-LawyersWeekly-Australian-Law-Awards-300x300.jpg"
              alt="LawyersWeekly – Australian Law Awards: Intellectual Property Team of the Year (Finalist)"
              title="LawyersWeekly – Australian Law Awards: Intellectual Property Team of the Year (Finalist)"
            />{' '}
          </td>
          <td>
            <h2>Finalist - Intellectual Property Team of the Year</h2>
            <p>2019 LawyersWeekly - Australian Law Awards</p>

            <p>
              Baxter IP was one of the finalists as Intellectual Property Team
              of the Year (2019) in the{' '}
              <Link
                href="https://www.lawyersweekly.com.au/australian-law-awards/winners/2019"
                target="_blank"
                rel="noreferrer noopener"
              >
                19th LawyersWeekly – Australian Law Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2018-Global-Law-Experts-Annual-Awards-300x300.jpg"
              alt="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
              title="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
            />
          </td>
          <td>
            <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
            <p>2018 Global Law Experts Annual Awards</p>

            <p>
              Baxter IP was selected as Software Patents IP Attorney Firm of the
              Year (Australia) in the 2018{' '}
              <Link
                href="https://www.globallawexperts.com/AwardPublications.aspx"
                target="_blank"
                rel="noreferrer noopener"
              >
                Global Law Experts Annual Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2018-Corporate-INTL-Global-Awards-300x300.jpg"
              alt="Corporate INTL Global Awards: Software Patents Attorney Firm of the Year (Australia)"
              title="Corporate INTL Global Awards: Software Patents Attorney Firm of the Year (Australia)"
            />
          </td>
          <td>
            <h2>Software Patents Attorney Firm of the Year (Australia)</h2>
            <p>2018 Corporate INTL Global Awards</p>

            <p>
              Baxter IP was selected as Software Patents Attorney Firm of the
              Year (Australia) in the 2018{' '}
              <Link
                rel="noreferrer noopener"
                href="https://www.acq-intl.com/2016-the-2016-intellectual-property-awards-press-release/"
                target="_blank"
              >
                Corporate INTL Global Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2018-AI-Acquisition-International-Global-Excellence-Awards-300x300.jpg"
              alt="AI Acquisition International – Global Excellence Awards: Patent &amp; Trade Mark Attorneys of the Year (Australia)"
              title="AI Acquisition International – Global Excellence Awards: Patent &amp; Trade Mark Attorneys of the Year (Australia)"
            />{' '}
          </td>
          <td>
            <h2>Patent &amp; Trade Mark Attorneys of the Year (Australia)</h2>
            <p>2018 AI Acquisition International - Global Excellence Awards</p>

            <p>
              Baxter IP was selected as Patent &amp; Trade Mark Attorneys of the
              Year (Australia) in the 2018{' '}
              <Link
                href="https://www.acq-intl.com/acq-awards/"
                target="_blank"
                rel="noreferrer noopener"
              >
                AI Acquisition International – Global Excellence Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2017-Corporate-INTL-Global-Awards-300x300.jpg"
              alt="Corporate INTL Global Awards: Software Patents Attorney Firm of the Year (Australia)"
              title="Corporate INTL Global Awards: Software Patents Attorney Firm of the Year (Australia)"
            />{' '}
          </td>
          <td>
            <h2>Software Patents Attorney Firm of the Year (Australia)</h2>
            <p>2017 Corporate INTL Global Awards</p>

            <p>
              Baxter IP was selected as Software Patents Attorney Firm of the
              Year (Australia) in the 2017{' '}
              <Link
                rel="noreferrer noopener"
                href="https://www.acq-intl.com/2016-the-2016-intellectual-property-awards-press-release/"
                target="_blank"
              >
                Corporate INTL Global Awards
              </Link>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              loader={myLoader}
              width="300"
              height="300"
              src="awards/2016-AI-Intellectual-Property-Awards-300x300.jpg"
              alt="AI Intellectual Property Awards: Best Full-Service Patent Attorney Firm and Recognised Lead in Software &amp; Medical Device Patents (Australia)"
              title="AI Intellectual Property Awards: Best Full-Service Patent Attorney Firm and Recognised Lead in Software &amp; Medical Device Patents (Australia)"
            />{' '}
          </td>
          <td>
            <h2>
              Best Full-Service Patent Attorney Firm (Australia) &amp;
              Recognised Lead in Software &amp; Medical Device Patents
              (Australia)
            </h2>
            <p>2016 AI Intellectual Property Awards</p>

            <p>
              Baxter IP was selected as winner in the{' '}
              <Link
                href="https://www.acq-intl.com/2016-the-2016-intellectual-property-awards-press-release/"
                target="_blank"
                rel="noreferrer noopener"
              >
                2016 AI Intellectual Property Awards
              </Link>{' '}
              for <strong>Best Full-Service Patent Attorney Firm</strong> and{' '}
              <strong>
                Recognised Lead in Software &amp; Medical Device Patents in
                Australia
              </strong>
              .
            </p>
          </td>
        </tr>
      </table>
    </Layout>
  )
}
