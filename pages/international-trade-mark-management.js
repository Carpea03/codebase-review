import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function InternationalTradeMarkManagement() {
  return (
    <Layout>
      <Head>
        <title>
          Managing your international trade mark | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Manage and renew your international trade mark to maintain protection within the countries included in your international registration."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/international-trade-mark-management"
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
                href="/services"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Services
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
                href="/trade-marks"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Trade marks
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
                href="/how-to-trade-mark"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                How to trade mark
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
                International trade mark management
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Managing and renewing your international trade mark</h1>
      <p>
        Certain changes to your{' '}
        <Link href="/international-trade-mark-application">
          international trade mark
        </Link>{' '}
        can result in the ceasing of your trade mark rights. If your trade mark
        is amended or if the base application lapses within five years of the
        date of the International Registration, also known as the dependency
        period as per <em>Article 6(3) of the Madrid Protocol</em>, your trade
        mark rights may cease.{' '}
        <Link
          href="https://www.ipaustralia.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Australia
        </Link>{' '}
        will monitor trade mark activity and notify the International Bureau of
        the changes. In turn, the International Bureau will inform you and the
        trade marks office of the designated countries of the trade mark
        cancellation.
      </p>
      <p>Reasons for extinguishment of the base application:</p>
      <ul>
        <li>Lapsing</li>
        <li>Refusal or withdrawal</li>
        <li>
          Amendment to include a more narrow range of goods and/or services than
          what is included in the original application
        </li>
        <li>Removal due to non-renewal</li>
        <li>
          Cancellation owing to court action or court mandated cancellation
        </li>
      </ul>
      <h3>Amending your international trade mark</h3>
      <p>
        After a trade mark is registered internationally, as evidenced by an
        international registration number, several details of the trade mark can
        be amended with{' '}
        <Link
          href="https://www.wipo.int/portal/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          WIPO
        </Link>
        . These changes can include:
      </p>
      <ol>
        <li>Full or partial change of ownership</li>
      </ol>
      <p>
        Your registration can be transferred to a person or an entity who is
        entitled to own a trade mark registered under the{' '}
        <Link href="/ip-glossary#madrid-protocol">Madrid Protocol</Link>, that
        is,
      </p>
      <ol type="a">
        <li>
          A resident or a national of the Madrid system member country; or
        </li>
        <li>
          An individual or entity that possesses a commercial or industrial
          establishment in a member country.
        </li>
      </ol>
      <p>
        Ownership of an international trade mark can be fully transferred by
        amendment of the international trade mark. Alternatively, the ownership
        of the trade mark in one or more countries or of some of the{' '}
        <Link href="/classes-of-goods-and-services">
          classes of goods and services
        </Link>{' '}
        can be changed. Under such circumstances, the portion that belongs to
        the new owners will be issued a new international registration number.
        When the renewal is due, both the original and new owners will be
        notified by the international bureau.
      </p>
      <p>
        In addition, ownership of the international registration or the base
        trade mark can be changed. Within a five-year period after registration,
        the international trade mark registration is dependent on the base or
        national registration. Therefore, you should ensure that the new owner
        will properly maintain the trade mark to avoid any repercussions to the
        international registration.
      </p>
      <ol start="2">
        <li>Holder name and/or address</li>
        <li>
          Limitation or cancellation of the classes of goods and services in
          some or all countries
        </li>
        <li>Full cancellation of the international registration</li>
        <li>
          Removal of one or more designations from an international registration
        </li>
      </ol>
      <h3>Adding countries to your international trade mark</h3>
      <p>
        It is common for holders of international registrations to wish to add
        subsequent designations after their original selection of countries,
        this can be due to market expansion or new countries joining the Madrid
        Protocol.
      </p>
      <p>
        Before filing for subsequent designation to add countries to your{' '}
        <Link href="/international-trade-mark-application">
          international trade mark
        </Link>
        , you have to be aware of the following:
      </p>
      <ul>
        <li>You need an international registration number issued by WIPO.</li>
        <li>
          Certain countries have specific requirements for subsequent
          designation, so verify whether the countries you are considering to
          add have special requirements by consulting your attorney.
        </li>
        <li>
          All designated countries included in an international registration
          will have the same renewal date, that is, the date when the
          registration was first filed, regardless of how close to the renewal
          date that a country is subsequently designated.
        </li>
        <li>
          Different legislation will dictate the outcome of the subsequent
          designation. The previous acceptance of certain elements of the trade
          mark by WIPO does not guarantee the same results in the subsequently
          designated countries.
        </li>
      </ul>
      <h4>When are subsequent designations not applicable?</h4>
      <p>
        Certain countries require subsequent designations to the country to have
        an international registration date after their accession to the Madrid
        system.
      </p>
      <table>
        <tbody>
          <tr>
            <td align="center">Estonia</td>
            <td align="center">November 18, 1998</td>
          </tr>
          <tr>
            <td align="center">Turkey</td>
            <td align="center">January 1, 1999</td>
          </tr>
          <tr>
            <td align="center">Namibia</td>
            <td align="center">June 30, 2004</td>
          </tr>
          <tr>
            <td align="center">Philippines</td>
            <td align="center">July 25, 2012</td>
          </tr>
          <tr>
            <td align="center">India</td>
            <td align="center">July 8, 2013</td>
          </tr>
        </tbody>
      </table>
      <p>
        Thus, subsequent designation to these countries of trade marks with
        international registration dates that predating the above mentioned is
        not possible. Instead, your trade mark attorney can file a domestic
        application in the country or start a new international registration
        designating these countries.
      </p>
      <h4>What happens after a subsequent designation application?</h4>
      <p>
        After a subsequent designation application is submitted, the
        International Bureau will examine the subsequent designation request and
        inform the applicants of any irregularities. Without irregularities or
        if these were addressed within the specified time frame, the
        international registration will be updated on the international
        register.
      </p>
      <p>
        The designated countries will then check whether the international trade
        mark meets their legislative requirements for registration and inform
        the International Bureau whether protection can be extended to those
        countries or objections arise in their examination (provisional
        refusal). If objections exist and are overcome, the designated countries
        will advertise the international registration to start the opposition
        period and subsequently inform the Bureau of full or partial protection
        or refusal. Without any objections, international trade mark protection
        will be extended within that country.
      </p>
      <h4>Transformation</h4>
      <p>
        Transformation is the process by which an International Registration is
        converted to national or regional applications. Trade mark rights in
        individual designated countries can be retained by requesting for the
        international registration be converted to a national application by
        submitting a transformation request. When IP Australia has informed the
        International Bureau of the ceased effect, the transformation request
        should be submitted to the designated office within three months of the
        cancellation or extinguishment of the international registration. Your
        trade mark attorney can help you in contacting the designated offices to
        prepare and file the documentary requirements and determine the
        transformation costs, which vary per designated office. If the request
        is successfully filed within the three month-period, then the
        transformed national trade mark will retain the filing date of the
        original international registration.
      </p>
      <h2>Renew your international trade mark</h2>
      <p>
        Under the Madrid System, a newly registered international trade mark is
        valid for a period of 10 years. After this period, the trade mark can be
        renewed indefinitely every 10 years by paying the fees prescribed by the
        World Intellectual Property Organisation (WIPO, International Bureau).
      </p>
      <p>
        The trade mark attorney on file will be informed by the International
        Bureau about the expiration of the trade mark six months before the
        expiry date. An international registration will have the same renewal
        date across all designated countries, even those that are subsequently
        designated.
      </p>
      <h3>Renewal fees</h3>
      <p>
        Renewal fees can be paid through{' '}
        <Link
          href="https://webaccess.wipo.int/trademarks_ren/erenewal_en.jsp"
          target="_blank"
          rel="noopener noreferrer"
        >
          WIPO&apos;s e-renewal system
        </Link>
        , and the fees vary depending on when payment is made. Your trade mark
        attorney can determine the renewal fees using{' '}
        <Link
          href="https://www.wipo.int/madrid/en/fees/calculator.jsp"
          target="_blank"
          rel="noopener noreferrer"
        >
          WIPO&apos;s fee calculator
        </Link>
        . Take note that late renewal, which is payable only up to six months
        after the expiry date, will incur a surcharge.
      </p>
      <hr />
      <p>
        The <Link href="/trade-mark-attorney">trade marks attorneys</Link> at
        Baxter IP are well versed in filing, managing and renewing international
        or Madrid protocol applications. Contact Baxter IP if you require any of
        the above services for your international trade mark registration.
      </p>
    </Layout>
  )
}
