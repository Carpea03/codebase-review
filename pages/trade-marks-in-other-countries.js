import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkInOtherCountries() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade marks',
      link: '/trade-marks',
    },
    {
      title: 'How to trade mark',
      link: '/how-to-trade-mark',
    },
    {
      title: 'Trade marks in other countries',
      link: '',
    },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Trade marks in other countries | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="For international trade mark applications, the applicant should consider certain differences trade mark laws governing trade marks in other countries."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-marks-in-other-countries"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade marks in other countries</h1>
      <p>
        Why are foreign jurisdictions considered when discussing trade mark?
        Trade mark rights are territorial, which means that protection is
        enforceable only in the country of registration. An{' '}
        <Link href="/trade-mark-application">Australian trade mark</Link> may be
        protected by law in Australia and cover several special regions, such as
        Christmas Island, Keeling Islands, Nauru and Norfolk Island. On the
        other hand, the same trade mark may be subjected to blatant
        counterfeiting in other countries, for example, a local party in{' '}
        <Link href="/first-to-file-vs-first-to-use">
          first-to-file countries
        </Link>{' '}
        may hold operations hostage by registering a mark that was originally
        created in Australia, thus making operations in that jurisdiction by the
        original Australian owner an infringing behavior. Thus, trade mark
        registration in other jurisdictions is highly important for brand
        owners, especially when considering how widespread globalisation and
        eCommerce has rendered the physical distance of countries as irrelevant.
      </p>
      <h2>Trade marks in New Zealand</h2>
      <p>
        Given its proximity to Australia and close trading relationship, trade
        mark protection of the Australian trade mark in New Zealand is highly
        encouraged. The trade mark laws of Australia and New Zealand have
        similarities and differences; while both nations have a &ldquo;
        <Link href="/first-to-file-vs-first-to-use">first to use</Link>&rdquo;
        rule, New Zealand trade mark law tends to follow more closely the
        British counterpart. Given that Maori is an official language used in
        New Zealand, it is recommended that filing a trade mark registration in
        New Zealand includes the English translation and transliteration and
        that all versions are registered separately. Trade mark applications may
        be filed directly to the Intellectual Property Office of New Zealand
        (IPONZ) or through the{' '}
        <Link href="/madrid-protocol-application">Madrid Protocol</Link>.
      </p>
      <h2>Trade marks in the Pacific Island region</h2>
      <h3>Nations with no existing trade mark system</h3>
      <p>
        For these nations, only common laws protect brands, and no national
        trade mark registration system exists. Use of{' '}
        <Link href="/classes-of-goods-and-services">goods and service</Link>{' '}
        marks can be protected by common law rights of passing off through
        establishing genuine use, public awareness, and possibly posting
        cautionary notices in the papers.
      </p>
      <ul>
        <li>
          Cook Islands &ndash; Cook Islands, which previously followed New
          Zealand intellectual property laws, is party to the WIPO as its own
          entity. However, there is no trade mark system in the country at
          present.
        </li>
        <li>Federated states of Micronesia</li>
        <li>Timor Leste</li>
        <li>Niue</li>
        <li>Palau</li>
      </ul>
      <h3>Nations with some form of trade mark system</h3>
      <ul>
        <li>Guam &ndash; Trade mark protection in the US extends to Guam.</li>
        <li>
          Kiribati &ndash; Only the owners of UK registered trade marks for the
          same goods can apply for trade mark protection in Kiribati. Service
          marks are not registrable.
        </li>
        <li>
          New Caledonia and French Polynesia &ndash; Protection afforded to
          French registered trade marks is automatically extended to New
          Caledonia and French Polynesia. Even so, a national trade mark system
          does not exist.
        </li>
        <li>
          Papua New Guinea &ndash; trade marks for goods and services can be
          registered in Papua New Guinea; however, trade marks cannot be
          registered under multiple classes.
        </li>
        <li>
          Samoa &ndash; application for trade mark regulations for goods and
          services can be lodged directly to the country or through the Madrid
          Protocol.
        </li>
        <li>
          Solomon Islands &ndash; Service marks cannot be registered. A trade
          mark can be filed with the Registrar General based on a corresponding
          UK registration and can include multiple classes.
        </li>
        <li>
          Tonga &ndash; The independent Tonga registration system accepts
          registration applications for goods or services under multiple
          classes.
        </li>
        <li>
          Tuvalu &ndash; Only applications based on the corresponding UK
          registered marks are accepted. The Registrar only registers services
          if included in the corresponding UK registered trade mark, but these
          registered service marks are only nominal and not necessarily
          enforceable.
        </li>
        <li>
          Vanuatu &ndash; Vanuatu has an independent trade mark system that is
          no longer rooted on an EU trade mark registration. Good and services
          under multiple classes are registrable.
        </li>
      </ul>
      <h2>Trade marks in the US</h2>
      <p>
        With the US being the third largest two-way trading country with
        Australia, trade mark registration in the country is crucial. Trade mark
        registration can be directly filed to the US Patent and Trade Mark
        Office or lodged through the{' '}
        <Link href="/madrid-protocol-application">Madrid protocol</Link>.
        However, one key difference between the Australian and US jurisdictions
        is that power of attorney is required for lodging a US trade mark
        registration if the Applicant&apos;s domicile is outside the US, whereas
        no such document is required for an agent to act for you in Australia,
        only an Australian address is required as the address for service.
      </p>
      <p>
        In addition, while both countries use the Nice classification of goods
        and services, US is very specific and concise. This means that while an
        Australian trade mark registration can cover a broad scope of goods and
        services, the same mark in the US may have comparatively narrow
        coverage.
      </p>
      <h2>Trade marks in Canada</h2>
      <p>
        Up until March 2019, applications for trade mark registration in Canada
        were only filed directly to the Canadian Trade Marks Office. Now, Canada
        is the 103rd nation to accede to the Madrid Agreement, and several
        notable changes have been implemented in the country&apos;s trade mark
        system in the same year.
      </p>
      <p>
        Similarly to Australia, Canada is a &ldquo;
        <Link href="/first-to-file-vs-first-to-use">first to use</Link>&rdquo;
        jurisdiction. Even so, prior use is not a requirement for registering a
        trade mark in the country, with intent to use being sufficient for
        filing a trade mark application. Registrability of word marks rely on
        both the English and French versions of the mark.
      </p>
      <p>
        After registration, the validity of a trade mark may be challenged at
        any time, but trade marks that have been registered for five years
        cannot be challenged on the basis of prior use unless the owner is
        proven to have adopted the mark knowing there was prior use of it. Trade
        marks that are not used within a period of three or more consecutive
        years may be removed from the Canadian trade marks register due to
        non-use.
      </p>
      <h2>Trade marks in South East Asia</h2>
      <p>
        Certain South East Asian nations are key target markets for expansion of
        Australian companies.
      </p>
      <p>
        Trade mark protection should not be neglected as counterfeiting and
        infringement is rampant in some countries in the region. Most South East
        Asian countries follow the &ldquo;
        <Link href="/first-to-file-vs-first-to-use">first-to-file</Link>&rdquo;
        rule, so trade marks should be registered as soon as possible. Trade
        mark applications can be lodged directly to the countries or through the
        Madrid Protocol, as six member countries in the region are members
        (Singapore, Cambodia, Laos, Vietnam, Philippines and Thailand).
      </p>
      <h2 className="h5" id="china">
        Trade marks in China
      </h2>
      <p>
        China is one of Australia&apos;s largest trading partners and is a
        popular jurisdiction for protection of IP rights.{' '}
        <em>
          <strong>
            The Chinese trade mark system is highly complex and ever-changing.
            Here are several main points that need to be considered when filing
            a trade mark registration in China.
          </strong>
        </em>
      </p>
      <h3>First to file trade mark system</h3>
      <p>
        As opposed to those in Australia, a &ldquo;first-to-use&rdquo;
        jurisdiction, China&apos;s intellectual property rules give priority to{' '}
        <Link href="/first-to-file-vs-first-to-use">
          those who file their trade mark first
        </Link>
        . This provision does not bode well for foreign companies looking toward
        expanding or producing in China, with issues such as{' '}
        <Link href="/trade-mark-squatting">trade mark squatting</Link> being
        prevalent even with the increasingly stringent IP laws applied by the
        country in recent years. As such, filing a trade mark as early as
        possible is the most effective way to protect your trade mark in China.
      </p>
      <h3>Classification of goods and services</h3>
      <p>
        China uses the{' '}
        <Link
          href="https://www.wipo.int/classifications/nice/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nice Classification of Goods and Services
        </Link>
        , but the classification system is further divided into subclasses.
        Items in different subclasses are generally not considered similar to
        one another. Therefore, when preparing a trade mark application in
        China, it is important to ensure relevant subclasses are covered. Our
        team is very experienced in class and subclass selection in China.
      </p>
      <p>
        If you hold an Australian trade mark application or registration and
        would like to file a Convention trade mark application in China or a
        Madrid application designating in China then we strongly recommended
        that you engage a{' '}
        <Link href="/trade-mark-attorney">
          registered Australian trade mark attorney
        </Link>{' '}
        to make the filing, including a review of your filing particulars and
        amendment of the specification according to the requirements of Chinese
        legislation.
      </p>
      <h3>Chinese language trade marks</h3>
      <p>
        Chinese consumers prefer to use Chinese names for foreign brands. You
        may be advised by your marketing consultant that you use a Chinese
        translation or a transliteration of your English brand name when you
        enter China. To avoid the Chinese brand names being taken by others, it
        is wise to protect them with trade mark registrations when the brands
        are adopted. Failing in protecting the Chinese names of the brand soon
        enough may result in the names being registered by manufacturers,
        distributors, or even your customers, and their registrations could
        block your marketing and business in China.
      </p>
      <p>
        In selecting Chinese names, it is important to consult with trade mark
        attorneys about the various meanings of the Chinese characters that you
        intend to use. Our Mandarin-speaking trade mark attorneys at Baxter IP
        can help advise around choice of Chinese brand names and which may be
        suitable in a Chinese context.
      </p>
      <h2>Trade marks in Japan</h2>
      <p>
        Japan is one of the top three trading countries with Australia; thus,
        applying for trade mark protection in the country is important. Similar
        to China, Japan is a &ldquo;
        <Link href="/first-to-file-vs-first-to-use">first-to-file</Link>&rdquo;
        jurisdiction, so the trade mark should be registered with the Japan
        Patent Office at the earliest possible time. Given that Japan is a
        jurisdiction with its own language and writing system, as with China,
        transliterations and translations of the trade mark to the Japanese
        language should be considered because these versions may infringe on
        currently registered trade marks in Japan or may have unsuitable or
        controversial meanings in the country.
      </p>
      <h2>Trade marks in the EU</h2>
      <p>
        A European Union trade mark (EUTM), formerly known as a European Union
        community trade mark, can be obtained by lodging a trade mark
        registration with the European Intellectual Property Office. This type
        of trade mark is lodged in a single application and grants trade mark
        rights across all members of the union.
      </p>
      <p>
        This approach is more economical and less laborious than filing trade
        mark applications individually in all countries. However, given the
        single filing, a single objection from any of the member countries, as
        in the case of possible contradicting rules in different member nations,
        means that the trade mark application will be refused in all countries.
        It is for this reason that when seeking European protection, it is not
        always advisable to file a EU trade mark. Often, it makes more sense to
        file the application in separate, individual European country
        applications.
      </p>
      <h2>Trade marks in the UK</h2>
      <p>
        Like Australia, the UK is another common law trade mark country, that
        is, unregistered marks can be legally protected to a certain extent by
        the common law tort of passing off if the trade mark has acquired local
        distinctiveness through sufficient use (prior rights). Trade mark
        registration in the UK is filed with the UK Intellectual Property
        Office.
      </p>
    </Layout>
  )
}
