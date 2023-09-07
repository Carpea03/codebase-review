import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function AwardsAndRecognition() {
  const data = [
    { title: 'About us', link: '/about' },
    { title: 'Awards & Recognition', link: '' },
  ]
  return (
    <Layout
      navData={data}
      bannerData={true}
      layout={2}
      title={'Awards & Recognition'}
      active={'Values'}
    >
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
      <div className="mt-10">
        <p>
          <Link href="/about">
            Baxter IP, Patent &amp; Trade Mark Attorneys
          </Link>
          has been increasingly awarded in recent years for its expertise in
          Australian patents and trade marks and particularly for its work in
          the field of
          <Link href="/specialisations/software-patents">software patents</Link>
          .
        </p>
        <table>
          <tr>
            <td width="50%">
              <Image
                width="300"
                height="300"
                src="/awards/2021-Global-Law-Experts-Software-Patents-IP-Attorney-Firm-of-the-Year-300x300.jpg"
                alt="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
                title="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
              />
            </td>
            <td>
              <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
              <p>2021 Global Law Experts Annual Awards</p>

              <p>
                Baxter IP was selected as Software Patents IP Attorney Firm of
                the Year (Australia) in the 2021{' '}
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
                width="300"
                height="300"
                src="/awards/2020-AI-Acquisition-International-Global-Excellence-Awards-300x300.jpg"
                alt="AI Acquisition International – Global Excellence Awards: Best Specialist Patent &amp; Trade Mark Law Firm (Australia)"
                title="AI Acquisition International – Global Excellence Awards: Best Specialist Patent &amp; Trade Mark Law Firm (Australia)"
              />{' '}
            </td>
            <td>
              <h2>
                Best Specialist Patent &amp; Trade Mark Law Firm (Australia)
              </h2>
              <p>
                2020 AI Acquisition International - Global Excellence Awards
              </p>

              <p>
                Baxter IP was selected as Best Specialist Patent &amp; Trade
                Mark Law Firm (Australia) in the 2020{' '}
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
                width="300"
                height="300"
                src="/awards/2019-Corporate-INTL-Global-Awards-300x300.jpg"
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
                width="300"
                height="300"
                src="/awards/2019-Global-Law-Experts-Annual-Awards-300x300.jpg"
                alt="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
                title="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
              />
            </td>
            <td>
              <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
              <p>2019 Global Law Experts Annual Awards</p>

              <p>
                Baxter IP was selected as Software Patents IP Attorney Firm of
                the Year (Australia) in the 2019{' '}
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
                width="300"
                height="300"
                src="/awards/2019-LawyersWeekly-Australian-Law-Awards-300x300.jpg"
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
                width="300"
                height="300"
                src="/awards/2018-Global-Law-Experts-Annual-Awards-300x300.jpg"
                alt="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
                title="Global Law Experts Annual Awards: Software Patents IP Attorney Firm of the Year (Australia)"
              />
            </td>
            <td>
              <h2>Software Patents IP Attorney Firm of the Year (Australia)</h2>
              <p>2018 Global Law Experts Annual Awards</p>

              <p>
                Baxter IP was selected as Software Patents IP Attorney Firm of
                the Year (Australia) in the 2018{' '}
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
                width="300"
                height="300"
                src="/awards/2018-Corporate-INTL-Global-Awards-300x300.jpg"
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
                width="300"
                height="300"
                src="/awards/2018-AI-Acquisition-International-Global-Excellence-Awards-300x300.jpg"
                alt="AI Acquisition International – Global Excellence Awards: Patent &amp; Trade Mark Attorneys of the Year (Australia)"
                title="AI Acquisition International – Global Excellence Awards: Patent &amp; Trade Mark Attorneys of the Year (Australia)"
              />{' '}
            </td>
            <td>
              <h2>Patent &amp; Trade Mark Attorneys of the Year (Australia)</h2>
              <p>
                2018 AI Acquisition International - Global Excellence Awards
              </p>

              <p>
                Baxter IP was selected as Patent &amp; Trade Mark Attorneys of
                the Year (Australia) in the 2018{' '}
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
                width="300"
                height="300"
                src="/awards/2017-Corporate-INTL-Global-Awards-300x300.jpg"
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
                width="300"
                height="300"
                src="/awards/2016-AI-Intellectual-Property-Awards-300x300.jpg"
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
      </div>
    </Layout>
  )
}
