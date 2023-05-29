import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

export default function TradeMarkSearch() {
  return (
    <Layout>
      <Head>
        <title>Trade mark search | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="A comprehensive trade mark search covering Australian and international databases is necessary to check registrability and clearance."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-search"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/trade-mark-search"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%95%86%E6%A0%87%E6%90%9C%E7%B4%A2"
          hreflang="zh"
        />
      </Head>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
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
                href="/trade-mark-application"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Australian trade mark application
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
                Trade mark search
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Trade mark search</h1>
      <p>
        When introducing a new product into the market, the trade mark is one of
        the first aspects that is considered. After all, your trade mark
        represents your business identity, and thus, this intellectual property
        should be{' '}
        <Link href="/trade-mark-registration-benefits">protected</Link>.
      </p>
      <p>
        In the preliminary stages of developing a trade mark, you need to ensure
        that the mark you choose will not be infringing on somebody else&apos;s
        earlier rights. If{' '}
        <Link href="/trade-mark-infringement">infringement</Link> is found, you
        may end up paying monetary compensation to the party being infringed and
        doing costly rebranding. You may also incur charges if your trade mark
        receives an{' '}
        <Link href="/trade-mark-examination">Examination Report</Link> based on
        a prior trade mark application/registration and you require professional
        help to respond to this report. Alternatively, you may also end up
        having your resources drained if you have to go through an{' '}
        <Link href="/trade-mark-opposition">opposition process</Link>. Such
        occurrences may be avoided if a thorough trade mark check is conducted
        in the preliminary stages.
      </p>
      <h2>Conducting a trade mark search</h2>
      <p>
        A trade mark search offers insight into the competitive brand space and
        can be helpful to conduct either at the time of deciding on a trademark
        or before filing a trade mark application. If your{' '}
        <Link href="/trade-mark-application">trade mark application</Link> is
        defined incorrectly, it may be rejected or if accepted, offer you
        inadequate protection. This could result in missed business
        opportunities and wasted money. A trade mark application should be
        carefully prepared before filing. A trade mark search can be used to
        identify and resolve potential issues in your trade mark application
        before you{' '}
        <Link href="/trade-mark-registration-process">
          apply for registration
        </Link>
        . Based on the results of the search, you may wish to reconsider the
        trade mark or even the entire brand to be able to obtain trade mark
        registration.
      </p>
      <p>A trade mark search can reveal:</p>
      <ul>
        <li>
          pending or registered trade marks that are identical or similar to the
          trade mark being applied for;
        </li>
        <li>
          whether the text or logo in your trade mark application is already
          being used;
        </li>
        <li>
          whether the text or logo in your trade mark application is eligible
          for protection; or
        </li>
        <li>
          possible trade mark infringement by the applicant if the trade mark is
          currently being used in commerce.
        </li>
      </ul>
      <p>
        Whether to conduct a search prior to developing and applying for a trade
        mark by yourself or employing another party to do so is a question of a
        trade-off between cost reduction and risk. You may think that by
        conducting a D.I.Y. search you are saving some money, but lack of
        extensive knowledge of clearance searches, legislation, and practice may
        result in an ineffective search and offer virtually no assurance of
        filtering possible conflicting trade marks that are currently in the
        market.
      </p>
      <h3>
        Is it advisable for you to conduct your own trade mark search using free
        resources?
      </h3>
      <p>
        The word &ldquo;free&rdquo; in this case is misleading; while the actual
        search engine may be free, the time, human resource, expertise, and
        analysis that such searches and their results require are not. Searches
        without a clear-cut direction can output thousands of entries, and
        sifting through all of these trade mark search results is time
        consuming, especially if you are unaware of what you&apos;re looking
        for. One may end up going around in circles, and a wrong decision based
        on your search results may result in considerable financial loss on your
        end in terms of rebranding cost. Ultimately, you may end up losing far
        more than the cost of hiring a trade mark attorney in the first place.
      </p>
      <p>
        A <Link href="/trade-mark-attorney">trade mark attorney</Link> can
        assist you by conducting trade mark searches in national and foreign
        trade mark registries and may provide guidance in relation to common-law
        marks in use in the market, which are not included in the government
        trade mark registers. As a part of their search, trade mark attorneys
        formulate query prompts utilising other possible forms of the trade
        marks, such as deliberately misspelled words, and can also check for
        linguistic suitability of your mark in foreign markets (like{' '}
        <Link href="/trade-marks-in-other-countries#china">
          translations and transliterations for China
        </Link>
        ). Of course, no system is 100% infallible, but these searches are
        typically customised to suit your proposed trade mark and can minimise
        the risk of your mark infringing on a registered trade mark or an
        established unregistered trade mark in the market.
      </p>
      <h2>Purposes of a trade mark search</h2>
      <p>
        Depending on the aim, trade mark searches can be conducted for different
        purposes.
      </p>
      <figure>
        <table>
          <tbody>
            <tr>
              <th scope="row" width="15%">
                Availability (clearance) search
              </th>
              <td width="85%">
                This type of search is performed to see whether your trade mark
                is identical or deceptively similar to existing marks in the
                register; in this case, if your trade mark is found to be
                identical or deceptively similar to a previously
                registered/applied for mark, your trade mark may be infringing
                on prior rights and thus should not be adopted.
              </td>
            </tr>
            <tr>
              <th scope="row">To check distinctiveness</th>
              <td>
                <Link href="/types-of-trade-marks#descriptive-trade-marks">
                  Descriptive trade marks
                </Link>
                , which describe a particular good or service can be granted
                protection to a limited capacity (for example: soft in relation
                to cotton products are not registrable, whereas a
                &ldquo;Soft&rdquo; figurative trade mark is registered in
                relation to cosmetics). Meanwhile,{' '}
                <Link href="/types-of-trade-marks#generic-trade-marks">
                  generic trade marks
                </Link>
                , which use the actual product or service, cannot be protected
                at all. By conducting a search, a trade mark attorney will be
                able to assess the strength and level of distinctiveness of your
                mark.
              </td>
            </tr>
            <tr>
              <th scope="row">Infringement monitoring</th>
              <td>
                Watching searches serve the opposite function as an availability
                search in that the expected outcome is to find other marks
                infringing on your registered mark. Regular monitoring of newly
                filed trade mark applications is needed to minimise the damage
                that possible{' '}
                <Link href="/trade-mark-infringement">
                  trade mark infringement
                </Link>{' '}
                can cause your business.
              </td>
            </tr>
            <tr>
              <th scope="row">Domain name search</th>
              <td>
                While separate from availability searches, trade mark searches
                are also conducted to check the availability of domain names
                that are typically connected to the owned trade marks. The
                outcome of this searches may help the trade mark owner decide
                whether to purchase the{' '}
                <Link href="/domain-names-and-trade-marks">domain</Link> or
                other course of action.
              </td>
            </tr>
            <tr>
              <th scope="row">Disputes</th>
              <td>
                Alleged infringement needs to be investigated before your
                solicitor can{' '}
                <Link href="/trade-mark-disputes">
                  issue a Cease and Desist letter
                </Link>{' '}
                to another party; otherwise, groundless threats may result in
                incurred damages payable to the accused party.
              </td>
            </tr>
            <tr>
              <th scope="row">Response to adverse reports</th>
              <td>
                When addressing an adverse report from an examiner, evidence of
                registration of a similar mark or case may support arguments in
                favour of your application. Of course, presenting such
                information does not guarantee that the current examiner would
                make the same decision regarding the relevant trade mark being
                registered.
              </td>
            </tr>
            <tr>
              <th scope="row">Linguistic search</th>
              <td>
                Translations of your trade mark into other languages may result
                in infringement of registered brands in countries that you are
                considering trade mark registration for potential trading,
                production, and transport. In addition, the translation of your
                mark can be socially inappropriate or offensive. These types of
                searches require trade mark attorneys who are knowledgeable
                about the local market, cultural and linguistic nuances, and
                colloquialisms in target countries.
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h2>Search elements in trade mark searches</h2>
      <p>
        Trade mark attorneys use different information in forming queries in
        addition to identical words or devices in the registered and pending
        trade marks. Possible considered combinations of elements used in search
        queries include added prefixes and suffixes, irregularly pluralised
        forms, punctuations such as apostrophes, deliberate misspellings,
        similarities in phonetics and word play, names, abbreviations, synonyms,
        alternative spellings, and equivalents in other languages
        (transliteration), and equivalent visual devices.
      </p>
      <figure>
        <table>
          <tbody>
            <tr>
              <th scope="row" width="15%">
                Nice Classification (for Australian and international searches)
              </th>
              <td width="85%">
                Trade marks are distinctly associated to the{' '}
                <Link href="/classes-of-goods-and-services">
                  goods and services
                </Link>{' '}
                that they represent or are intended for use. In the Nice
                classification, trade marks are categorised into 45 classes,
                with classes 1 to 34 representing goods and classes 35 to 45
                representing services. Trade marks may be registered under
                multiple classes. Infringement may occur when identical or
                confusingly similar marks are registered under the same or
                related classes, so searches targeted toward finding these marks
                are used to verify if your mark infringes on others or if other
                marks infringe on your registered marks.
              </td>
            </tr>
            <tr>
              <th scope="row">
                Vienna Code (for international trade mark searches)
              </th>
              <td>
                The Vienna code (design search code), which is shorthand for the{' '}
                <Link
                  href="https://www.wipo.int/classifications/nivilo/vienna.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  International Classification of the Figurative Elements of
                  Marks
                </Link>
                , was conceptualised to standardise the images in trade marks
                for the description and indexing purposes. This approach makes
                it easier for the one conducting the search to find similar
                marks by entering the code pertaining to the predominant figures
                in the trade mark. The figure elements are classified into 29
                different categories, such as Category 1 for celestial bodies,
                Category 2 for human beings, and so on. Each category is further
                refined into several levels of subdivisions that most closely
                approximate the figurative element in the trade mark. The
                conventions and the descriptions of each class and subclass can
                be confusing, so the advice of a trade mark attorney
                specialising in international filing is invaluable in conducting
                trade mark searches using the Vienna code.
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h2>Trade mark search resources</h2>
      <p>
        In addition to the search engines of available government trade mark
        registers, such as that of{' '}
        <Link
          href="https://search.ipaustralia.gov.au/trademarks/search/quick"
          target="_blank"
          rel="noopener noreferrer"
        >
          IP Australia
        </Link>{' '}
        and{' '}
        <Link
          href="https://www3.wipo.int/branddb/en/index.jsp"
          target="_blank"
          rel="noopener noreferrer"
        >
          WIPO Global Brand database
        </Link>
        , which reflect registered trade marks in Australia and worldwide,
        respectively, other resources should be used to ensure that the trade
        mark search is as comprehensive as possible. The trade mark registers of
        other countries are not available or may require certain fees or
        subscription. Other search tools utilise complicated query algorithms.
        Moreover, your trade mark attorney may use online search engines, domain
        directories, and social and business registries that are useful in
        identifying common-law marks being used in trade.
      </p>
      <h2>Takeaway/s</h2>
      <p>
        Trade mark searches can serve multiple functions depending on the
        ultimate goal of the party conducting the search. However, without
        relevant experience and knowledge of the available resources, trade mark
        search can seem like a labyrinth with no way out. By contrast, trade
        mark attorneys have the training, experience, and resources to conduct
        relevant searches and suggest possible resolution approaches in the
        event of trade mark conflicts, thereby minimising your effort, the risk
        of missing out on other conflicting marks, and the potential cost of
        overlooking these marks down the line. With all factors considered,
        contacting trade mark attorneys may just be the more cost-effective and
        efficient approach in conducting your trade mark search.
      </p>
    </Layout>
  )
}
