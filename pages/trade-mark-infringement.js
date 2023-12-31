import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/images/${src}?w=${width}&q=${quality || 75}`
}

export default function TradeMarkInfringement() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade Mark Oppositions & Disputes',
      link: '/trade-mark-oppositions-disputes',
    },
    { title: 'Trade Mark Infringement', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Trade Mark Infringement | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Trade mark infringement, the unauthorised use of a registered trade mark, needs to be addressed to avoid dilution of your trade mark."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-infringement"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/trade-mark-infringement"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%95%86%E6%A0%87%E4%BE%B5%E6%9D%83"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade Mark Infringement</h1>
      <p>
        Trade mark registration grants the owner exclusive rights for using that
        trade mark in respect of the{' '}
        <Link href="/classes-of-goods-and-services">goods and services</Link> it
        is registered for. Nowadays, many business owners understand the need
        and{' '}
        <Link href="/trade-mark-registration-benefits">
          benefits of trade mark registration
        </Link>
        , but business owners must also be aware that registration is not the
        last step to protecting your brand. It is up to business owners to be
        watchful of potential trade mark infringement and to ensure timely
        action is taken to enforce their rights.
      </p>
      <h2>What is trade mark infringement?</h2>
      <p>
        Trade mark infringement is the unauthorised use of a registered trade
        mark. A conduct will amount to trade mark infringement when a sign is
        used as a trade mark and is substantially identical or{' '}
        <Link href="/ip-glossary#deceptively-similar">deceptively similar</Link>{' '}
        to a registered trade mark. As a trade mark owner, it is important to
        monitor the market and ensure that no third party is taking advantage of
        your IP rights or to take action quickly if you believe that they are.
      </p>
      <p>
        The registered owner of the trade mark may start legal proceedings
        against a party that violates its trade mark rights, and such conducts
        are heard in the Federal Court, Federal Circuit court, or the supreme
        court of an Australian state and territory.
      </p>
      <h3>How to identify trade mark infringement cases</h3>
      <p>
        Under Section 120 of the <em>Trade Marks Act 1995</em> (Cth) a person
        infringes a registered trade mark by:
      </p>
      <ol>
        <li>
          Using a sign which is substantially identical or deceptively similar
          to a registered mark in relation to:
          <ul>
            <li>
              Goods and services for which the trade mark is registered for
            </li>
            <li>
              Goods and services that are of the same description or closely
              related to the goods and services the trade mark is registered for
            </li>
          </ul>
        </li>
        <li>
          Using a &ldquo;well-known&rdquo; mark for unrelated goods and services
          to those of which the trade mark is registered for (trade mark
          dilution).
        </li>
      </ol>
      <h3>Components of infringement</h3>
      <p>
        An allegedly infringing mark must be used as a trade mark i.e. a badge
        of origin for goods and services in respect of which the allegedly
        infringed trade mark has been registered. Various defences exist under
        Sect. 122 of the Act, which include bone fide use of a sign to indicate
        a characteristic of the goods/services.
      </p>
      <p>
        The alleged infringing mark must be either substantially identical or
        deceptively similar to the registered trade mark and be used upon or in
        relation to goods or services of the same description or closely related
        to goods or services in respect of which the trade mark is registered.
      </p>
      <h4>Substantially identical</h4>
      <p>
        To determine whether a mark is substantially identical to a registered
        mark, a side-by-side comparison of the respective marks, with their
        similarities and differences are noted. The importance of these assessed
        having regard to the essential features of the registered mark and the
        total impression of resemblance or dissimilarity that emerges from the
        comparison.
      </p>
      <h4>Deceptively similar</h4>
      <p>
        If the trade marks are not substantially identical, it should be
        considered whether they are deceptively similar. The test for deceptive
        similarity of marks does not involve a side-by-side comparison. The test
        is between, on the one hand, the impression based on recollection of one
        mark that a person of ordinary intelligence and memory would have and,
        on the other hand, the impressions that such a person would get from
        looking at the second mark.
      </p>
      <h4>Closely related goods/services</h4>
      <p>
        This is assessed by taking into consideration the following
        circumstances:
      </p>
      <ol>
        <li>the nature and characteristics of the goods/services;</li>
        <li>the origin of the goods/services;</li>
        <li>the purpose of the goods/services;</li>
        <li>
          whether the goods/services are usually provided by one and the same
          business or person;
        </li>
        <li>
          whether the goods/services are provided by the same sources, in the
          same area or district, during the same season or in relation to the
          same related goods or services and to the same class or classes of
          customers; and
        </li>
        <li>
          whether the goods/services are regarded as the same by those who
          provide them.
        </li>
      </ol>
      <p>
        These concepts may be quite confusing, and legislation is often
        misunderstood. To enforce your trade mark rights, contact an IP
        professional to help you assess your options.
      </p>
      <p>
        While trade mark infringement may appear as a simple concept,
        legislation is often misunderstood. If you believe an infringing conduct
        may be taking place in relation to your trade mark, contact an IP
        professional to help you assess your options and strategy.
      </p>
      <h3>How to avoid trade mark infringement</h3>
      <p>
        Guaranteeing that your trade mark is unique from the onset can save your
        business from needlessly allocating budget and time. You should perform
        your <Link href="/ip-strategy">due diligence</Link> and contact a trade
        mark attorney to help you perform a{' '}
        <Link href="/trade-mark-search">preliminary search</Link> of previously
        registered trade marks and pending applications before investing in
        developing a logo or a name.
      </p>
      <p>
        In other cases, the use of another person&apos;s registered trade mark
        is not considered as trade mark infringement when the use is categorised
        as <Link href="/fair-use-of-trade-marks">fair use</Link>.
      </p>
      <h4>Example of trade mark infringement</h4>
      <h5>A Cautionary Tale</h5>
      <figure>
        <Image
          loader={myLoader}
          src="/examples/asashi-musashi.jpg"
          alt="Asashi &amp; Musashi"
          width="800"
          height="250"
        />
        <figcaption>
          Société Des Produits Nestlé SA &amp; Anor v Christian &amp; Anor
          (No.4) [2014] FCCA 2025 [46]
        </figcaption>
      </figure>
      <p>
        In{' '}
        <em>
          Société Des Produits Nestlé SA &amp; Anor v Christian &amp; Anor
          (No.4) [2014] FCCA 2025 [46]
        </em>{' '}
        James Christian, the proprietor of an online vitamin business called
        A-sashi Vitamins (a spin from the Japanese beer Asahi), incorporated and
        registered a business name, two domain names and a Facebook page bearing
        the word &ldquo;A-sashi&rdquo;. Nestlé, who owned a range of trade marks
        which contained the word MUSASHI in relation to performance vitamins and
        nutrition products, sued Christian and sought to cease the production of
        the A-sashi supplements. The court ruled that the &quot;Sashi&quot; in
        both trade marks was similar enough for consumers to be confused into
        thinking that the products of both lines were connected. After an
        unsuccessful appeal, the court ordered Christian to pay Nestlé for
        damages. As of 2016, Christian was revealed to be still under debt to
        Nestlé.
      </p>
      <p>
        This trade mark infringement case underlines the importance of having an
        original mark and performing a trade mark search that covers both
        similar and identical trade marks. A trade mark attorney specialises in
        this type of searches and will be able to assess the strength of your
        mark.
      </p>
      <h3>Addressing trade mark infringement</h3>
      <p>
        Conversely, someone could be benefiting from your brand and reputation
        by using a sign as a trade mark which is substantially identical or
        deceptively similar to your trade mark. Trade mark infringement against
        your own registered mark can be addressed either in or out of the
        courts. In order to establish legal action against a potential infringer
        you will need to prove the validity of your IP rights by providing
        evidence of the following:
      </p>
      <ol>
        <li>
          Your trade mark is registered and in force. Intellectual property
          rights have expiry dates; in the case of trade marks, the registration
          needs to be kept up to date. Moreover, the trade mark should be
          actively used.
        </li>
        <li>You are the owner of the trade mark.</li>
        <li>
          Another party is actually infringing on your trade mark. This needs to
          be established because if the infringement charges were proven
          groundless, the accuser in trade mark infringement cases can be
          sanctioned by the courts to pay for damages incurred by the accused
          party.
        </li>
        <li>
          The infringing party does not have authority to use your trade mark.
        </li>
      </ol>
      <p>
        It is important to note that court proceedings can be quite costly;
        therefore exhausting the possibility of settling disputes outside of the
        courts is preferable. You can have your solicitor prepare and send a
        carefully worded Cease and Desist letter to the infringing party to stop
        the use of the offending trade mark. Mediation and arbitration may be
        employed so that both parties can come to a mutual agreement before the
        issue is escalated to court litigation.
      </p>
      <p>
        If the above is not possible, successful court litigation can lead to
        the issuance of an injunction to permanently stop the infringing
        behaviour and repeat offence. Moreover, the courts can add additional
        damages depending on how flagrant the trade mark infringement action is
        and the conduct of the offending party after being informed of the
        transgression.
      </p>
      <h3>Defence for inadvertent trade mark infringement</h3>
      <p>
        Should you find yourself on the receiving end of a Cease and Desist
        letter, note that the <i>Trade Marks Act 1995</i> includes provisions
        that may counter trade mark infringement accusations.
      </p>
      <p>
        Section 122 provides that, trade mark infringement is not committed if,
        under the conditions of good faith:
      </p>
      <ul>
        <li>
          The trade mark is a person&apos;s name or the person&apos;s place of
          business;
        </li>
        <li>
          The trade mark is the name of a predecessor in business of the person
          or the name of the predecessor&apos;s place of business;
        </li>
        <li>
          The trade mark is used &nbsp;descriptively, which means describing the
          kind, quality, quantity, intended purpose, value, geographical origin,
          some other characteristic of goods or services, or the time of
          production of goods or rendering of the services;
        </li>
        <li>
          The trade mark is provided to explicitly define the intended purpose
          of the good/service (as an accessory or spare part);
        </li>
        <li>The trade mark is mentioned for comparative advertising;</li>
        <li>
          The user has the right to use the trade mark given to the person under
          the Act;
        </li>
        <li>
          A disclaimer was published in relation to a section of the trade mark
          for use only of that particular section of the trade mark; and/or
        </li>
        <li>
          There is of a mark that could, in the court&apos;s opinion, obtain
          registration.
        </li>
      </ul>
      <h4>Prior use</h4>
      <p>
        In addition to the above defences, Section 124 of the Act states that
        you are not committing trade mark infringement when your unregistered
        trade mark relating to goods and services in question has been used
        continuously before the filing date (priority date) of the contested
        trade mark or the first time that the contesting party or their
        predecessor started using their unregistered trade mark, whichever is
        earlier.
      </p>
      <h3>Trade mark infringement on the Internet</h3>
      <p>
        Owing to the misconception that everything on the internet is fair game,
        trade mark infringement cases have become extremely prevalent online.
      </p>
      <h4>Meta tags</h4>
      <p>
        Meta tags are information regarding pages that are typically not seen by
        visitors of the said page and are present only in the page&apos;s code.
        These tags usually contain description or keywords that characterise the
        page. While visitors of the page cannot see them, metadata are used by
        algorithms to rank pages. The mention of a trade mark by a third party,
        possibly to drive up the ranking of and thus directing more traffic to a
        certain page, can be classified as meta tag trade mark infringement. Put
        in another way, if the text would infringe if it appeared on physical
        material, then the text is likely to infringe if its used in source
        data.
      </p>
      <h4>Google AdWords</h4>
      <p>
        With Google being its own verb, internet traffic and advertisements
        using the search engine giant and its tool Google AdWords lead to
        possible avenues for trade mark infringement. In{' '}
        <i>
          Veda Advantage Limited v Malouf Group Enterprises Pty Limited [2016]
          FCA 255
        </i>
        , Veda owned the rights to several trade marks bearing the word
        &quot;VEDA&quot; like &quot;Veda&quot;, &quot;Veda Advantage&quot;,
        &quot;Veda Check&quot;, and &quot;Vedascore&quot;. Malouf Group
        registered a number of keywords which incorporated the name VEDA for use
        in sponsored ads to describe their credit repair service. Veda sued
        Malouf, alleging trade mark infringement and breach of the Australian
        Consumer Law. The court initially found that Malouf&apos;s use of VEDA
        did not amount to trade mark infringement but did find some of their
        headings, such as &ldquo;The Veda Report Center,&rdquo; to mislead
        customers into thinking that Malouf Group is affiliated with Veda.
      </p>
      <p>
        This decision highlights the importance of business owners being careful
        in relation to any use of a competitor&apos;s name and trade marks as
        keywords.
      </p>
      <h4>Domain name</h4>
      <p>
        Domain names are addresses which connect Internet users to a website and
        are a must for businesses that intend to establish online operations.
        However, this word or group of words can also be{' '}
        <Link href="/domain-names-and-trade-marks">
          subject to trade mark infringement
        </Link>
        .
      </p>
      <p>
        Registration of a domain name which incorporates a registered trade mark
        can amount to trade mark infringement when coupled with use, and it can
        be heard in court. &nbsp;Alternatively, complaints can be filed under
        the Uniform Domain Name Dispute Resolution Policy (UDRP) and be heard by
        a panel.
      </p>
      <p>
        To determine domain name infringement under the UDRP, three elements
        should be present:
      </p>
      <ol>
        <li>
          The domain name should be identical or at least highly similar (at
          times appearing as a &quot;typo&quot; error) to your domain name such
          that the infringing domain can be mistaken or confused as that of the
          trade mark owner;
        </li>
        <li>
          The registrant of the domain does not have any rights or interests in
          the domain name; and
        </li>
        <li>
          The domain name has previously been registered and is being used with
          duplicitous intent or in bad faith.
        </li>
      </ol>
      <p>
        In cases involving the UDRP, bad faith can be assessed by considering
        several factors, such as whether the domain name was registered for the
        purpose of disrupting the operations of the trade mark holder,
        preventing the same from registering a domain that reflects the trade
        mark, knowingly driving online traffic to the registrant&apos;s website
        and creating confusion among visitors.
      </p>
      <h4>Cybersquatting</h4>
      <p>
        Cybersquatting is the act of purchasing identical or similar domain
        names to registered trade marks by parties with unrelated business for
        possible purposes of duping customers into patronising a competitor,
        destroying the reputation of the trade mark owner, or selling the domain
        to interested parties for an exorbitant price. In Australia, the .au
        Domain Administration Ltd. suggests registering the .au address of
        businesses primarily operating in Australia as early as possible to
        prevent other parties from registering identical or confusingly similar
        domains. The agency bans the purchase of a domain name for the sole
        purpose of reselling, and Australian businesses and organisations that
        have been victimised by cybersquatters should first refer to the .au
        Dispute Resolution Policy (auDRP). Note that, once deregistered, the
        domain will not be automatically transferred to the complaining party,
        but instead, it will be available for registration by any interested
        party.
      </p>
      <h4>Social Media</h4>
      <figure>
        <Link href="/images/examples/facebook-trademark-report-form.jpg">
          <Image
            loader={myLoader}
            src="/examples/facebook-trademark-report-form-300x251.jpg"
            alt="Facebook Trademark Report Form"
            width="300"
            height="251"
          />
        </Link>
      </figure>
      <p></p>
      <Link href="https://www.baxterip.com.au/trade-mark-enforcement-options">
        Enforcement of trade mark rights
      </Link>{' '}
      on social media can be tricky because of the difficulty of tracing the
      identity of the infringer. Possible trade mark infringements may include
      small players editing logos and claiming them as their own, the use of
      registered trade marks for social media advertising &nbsp;by illegal
      distributors, user names incorporating registered trade marks, and the
      likes. Fortunately, brands can be protected from trade mark infringement
      to a certain degree through user reporting interfaces on various social
      media sites, such as Facebook, Instagram, and Twitter, which take down
      content that is found in violation of their terms and conditions. As a
      safeguard, companies are suggested to secure possible user names, pages,
      and accounts as a preventive measure against trade mark infringement on
      social media.
      <h3>Protecting your trade mark internationally</h3>
      <p>
        Expansion of Australian businesses globally exposes your intellectual
        property to different trade mark infringement risks because trade mark
        rights are territorial, meaning they are only valid in the country where
        they are granted. As a trade mark owner, you should protect your
        business from{' '}
        <Link href="/trade-mark-squatting">trade mark squatting</Link> and{' '}
        <Link href="/ip-glossary#trade-mark-dilution">trade mark dilution</Link>{' '}
        by registering your trade mark in countries whose markets you intend to
        enter. Trade mark dilution occurs when a well-known brand is used in
        dissimilar goods. Two approaches can be taken to protect your trade mark
        from trade mark dilution in an international scale: one is by
        registering your trade mark{' '}
        <Link href="/international-trade-mark-application">
          in each foreign market of interest
        </Link>
        , and the other is through an application through the{' '}
        <Link href="/madrid-protocol-application">Madrid Protocol</Link>. There
        are pros and cons to both approaches; thus, certain factors need to be
        preliminarily assessed to decide which IP protection route is better
        suited to your purposes:
      </p>
      <ol>
        <li>
          consider the prospective direction and potential future markets of
          your business;
        </li>
        <li>
          consult with a trade mark specialist that can help in strategising
          trade mark filing.
        </li>
      </ol>
      <h4>Madrid Protocol</h4>
      <p>
        The Madrid Protocol provides a centralised filing system for filing
        overseas trade mark applications, which must be linked to a
        &ldquo;home-base&rdquo; application or registration. A Madrid Protocol
        application can be filed with an authorised office (IP Australia) and
        designate any one or more member countries. &nbsp;At present, there are
        more than 90 Madrid Protocol members.
      </p>
      <p>
        The authorised office will transmit the application to the International
        Bureau of the World Intellectual Property Organisation (WIPO). WIPO will
        then send the application to the Trade Mark Offices in the countries
        designated for registration where the separate applications will be
        subject to local standards for registration in the designed countries.
      </p>
      <p>
        While the Madrid Protocol represents a practical and cost-effective
        means of filing multiple overseas applications in a single step, there
        are some drawbacks to the system over direct filing. For example, the
        international registration is dependent on the home-base application or
        registration during the first five years after issuance. This means that
        if the home-base application or registration is abandoned or cancelled
        for any reason during the first five years after issuance, the
        international registration will also be abandoned or cancelled.
      </p>
      <p>
        International registration is not cost effective if you are filing only
        for a small number of prospective foreign markets; in this case,
        individually filing for each country may be more convenient.
      </p>
      <p>
        A specialised trade mark attorney with experience in individual filing
        as well as Madrid Protocol filings is indispensable in helping you weigh
        the advantages against the disadvantages of each type of filing and
        determining an appropriate strategy for internationally protecting your
        trade mark.
      </p>
      <h4>Filing your trade mark in China</h4>
      <figure>
        <Image
          loader={myLoader}
          src="/examples/Xingbake-logo-disputed-by-Starbucks-as-blatant-piracy-300x131.jpg"
          alt="Xingbake logo disputed by Starbucks as blatant piracy"
          width="300"
          height="131"
        />
        <figcaption>
          Xingbake logo disputed by Starbucks as blatant piracy
        </figcaption>
      </figure>
      <p>
        As opposed to that in Australia, where the first party to use a trade
        mark is legitimate, China&apos;s intellectual property rules give
        priority to those who{' '}
        <Link href="/first-to-file-vs-first-to-use">
          file their trade marks first
        </Link>
        . This provision does not bode well for foreign companies looking toward
        expanding or producing in China, with issues such as trade mark
        squatting being prevalent even with the increasingly stringent IP
        protection applied by the country in recent years. Proactively filing
        your trade mark application in{' '}
        <Link href="/trade-marks-in-other-countries#china">China</Link> from the
        onset of your business to encompass several classes of goods (coffee
        giant Starbucks filed for all 45 classes), consulting an expert trade
        mark attorney who is experienced in trade mark filing in China, and
        selecting trustworthy distributors and producers can be indispensable to
        ensure the protection of your trade mark. Financial constraints may be a
        deterrent to advanced filing, but it is better to err on the side of
        caution rather than getting your production and/or distribution halted
        and having to rebrand your products because your trade mark in China was
        usurped by trade mark squatters.
      </p>
      <p>
        While it is often more difficult to prove and more costly, there is some
        protection to trade marks that are not registered. The tort of passing
        off and consumer protection legislation provide an avenue for business
        owners to protect their trade marks from unauthorised use.
      </p>
      <hr />
      <p>
        <Link href="/trade-mark-registration-process">
          Trade mark registration
        </Link>{' '}
        may be a broad, daunting prospect, but doing so will protect your brand
        and it may help you avoid costly and damaging scenarios that may arise,
        should you fail to protect your intellectual property.
      </p>
    </Layout>
  )
}
