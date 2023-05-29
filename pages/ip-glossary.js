import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

export default function IpGlossary() {
  return (
    <Layout>
      <Head>
        <title>IP Glossary | Intellectual Property Glossary | Baxter IP</title>
        <meta
          name="description"
          content="IP Glossary providing definitions of intellectual property related terms covering patents, trade marks, registered designs and copyright."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/ip-glossary" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8"
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
                href="/ip-info"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Resources
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
                IP Glossary
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Intellectual Property Glossary</h1>
      <h2>Confused by intellectual property jargon?</h2>
      <p>
        We&rsquo;ve created this handy intellectual property glossary to provide
        definitions for some of the more complex intellectual property related
        terms.
      </p>
      <hr />
      <h3 id="assignee">Assignee</h3>
      <p>
        The assignee is an individual or corporate body to whom a right to
        intellectual property has been legally transferred from an assignor. An
        assignee is an entity and / or individual that is the recipient of a
        patent transfer. An assignee will receive the transfer of these rights
        from an assignor, who is the current owner of the patent. This transfer
        may come as the result of the sale of intellectual property. Company A
        (assignor) decides it wishes to sell its intellectual property to
        Company B. Company A legally transfers the right to its intellectual
        property to Company B, and as a result Company B becomes the assignee.
      </p>
      <hr />
      <h3 id="assignment-of-rights">Assignment of Rights</h3>
      <p>
        A legal transfer of intellectual property rights by the owner of an
        intellectual property right (assignor) to another entity and / or
        individual (assignee). The concept of assignment simply covers the
        transfer of rights from one party to another. An assignment agreement
        must show an intention to transfer rights and include any necessary
        conditions that the parties should be expected to abide by. Company A
        (assignor) decides it wishes to sell its intellectual property to
        Company B. As the assignor, Company A legally transfers the right to its
        intellectual property to Company B, and as a result Company B becomes
        the assignee.
      </p>
      <hr />
      <h3 id="australian-office-journal-of-designs">
        Australian Office Journal of Designs
      </h3>
      <p>
        The Australian Office Journal of Designs is a monthly publication that
        is published by IP Australia to notify the public about changes made to
        the design registered. The various what design applications have been
        filed at IP Australia, and of these, what design applications have been
        registered and/or certified. The Australian Office Journal of Designs is
        published on a monthly basis and is available online at{' '}
        <Link href="http://pericles.ipaustralia.gov.au/ols/epublish/content/olsDesignPDFs.jsp">
          IP Australia
        </Link>
        . The Australian office general designs is intended to be a notification
        to the public of changes made to the register of designs. Changes made
        to the register designs can include:
      </p>
      <ul>
        <li>the filing of new design applications</li>
        <li>the registration of design applications</li>
        <li>the certification of design applications</li>
        <li>the lapsing of design applications and registrations</li>
        <li>
          amendments made to existing design applications and registrations
        </li>
      </ul>
      <hr />
      <h3 id="australian-official-journal-of-patents">
        Australian Official Journal Of Patents (AJOP)
      </h3>
      <p>
        AJOP is the official patent journal provided by IP Australia that
        reports on all major events and actions involved in the life cycle of an
        Australian Patent. The Australian official journal of patents reports on
        the main stages in the progression of a patent application up to and
        when the patent becomes sealed. The journal therefore provides detailed
        information on patent filings, publication, acceptance, opposition,
        sealing and certification. The journal can be used to gain a weekly
        update on the status of pending patents in Australia.
      </p>
      <hr />
      <h3 id="australian-trade-mark-on-line-search-system">
        Australian Trade Mark On-line Search System (ATMOSS)
      </h3>
      <p>
        A database that can be used to search for similar trade marks, by
        comparing prospective trade mark features with those of trade marks that
        already exist. ATMOSS is a free online database provide by IP Australia
        that allows the user to engage in a comprehensive search of existing
        trade mark rights in Australia. ATMOSS can also be used to keep track of
        the progress of trade mark applications, and the status of trade marks
        that have been previously registered. ATMOSS is therefore a highly
        useful tool for those who are in the process of registering their trade
        mark. If an individual or entity has an idea for trade markable material
        that they wish to legally identify as their own, they may use ATMOSS to
        see if their idea is already in existence. ATMOSS can therefore be used
        prior to applying for a trade mark and when formulating the original
        idea for a trade mark.
      </p>
      <hr />
      <h3 id="authorised-user">Authorised User</h3>
      <p>
        An individual or entity who has been authorised by the owner of a trade
        mark to use the trade mark with respect to goods and or services covered
        by trade mark. If an individual or entity wishes to use a trade mark
        that has been registered by another entity they may approach them and
        ask to become an authorised user. A legal agreement will be drafted
        between the two parties that outlines the terms of use of the trade
        mark. This agreement would generally promise a financial return to the
        owner of the trade mark, and in return the authorised user gains
        conditional rights to the trade mark. An entity that is currently
        operating under the name Company A wishes to expand their business and
        license their trade marked name to others. In order to do this, Company
        A may become a franchise and make franchisees authorised users of their
        trade marked name.
      </p>
      <hr />
      <h3 id="basic-application">Basic Application</h3>
      <p>
        The initial stage of the patent application process that sets the
        priority date for disclosure of the inventions details. The basic
        application is the first document filed in the patent application
        process, and as a result, it will set the priority date for disclosure
        of the invention details. Typically speaking the Basic Application
        criteria is satisfied with the submission of a Provisional Application
        to IP Australia. The basic application is therefore the first ever
        submission of an application in regards to a specific invention. Company
        A submits a Provisional Application to IP Australia. This submission
        establishes the priority date for any disclosure of the invention
        details. As a result, the Provisional Application is classified as the
        IP rights &lsquo;Basic Application&rsquo;.
      </p>
      <hr />
      <h3 id="berne-convention">Berne Convention, The</h3>
      <p>
        The Berne Convention for the Protection of Literary and Artistic Works
        was most recently amended on 28 September 1979 but dates back to 1886.
      </p>
      <p>
        It&apos;s primary purpose is to have one member state of the Convention
        treat copyright of works of other signatory members in exactly the same
        way as it does for its own nationals. The Berne Convention conveniently
        extends to registered designs per Article 2 (7) of the Convention which
        states: &ldquo;(7) Subject to the provisions of Article 7(4) of this
        Convention, it shall be a matter for legislation in the countries of the
        Union to determine the extent of the application of their laws to works
        of applied art and industrial designs and models, as well as the
        conditions under which such works, designs and models shall be
        protected. Works protected in the country of origin solely as designs
        and models shall be entitled in another country of the Union only to
        such special protection as is granted in that country to designs and
        models; however, if no such special protection is granted in that
        country, such works shall be protected as artistic works.&rdquo; In this
        way, a registered design of one member state of the Convention is
        recognised by each other member state of the Convention. Conveniently,
        where an Australian applicant for a registered design or owner of a
        registered design wishes to extend the registered design into another
        member state, so long as it files the foreign design application within
        the other member state within 6 months, it can do so and claim the
        filing date of the Australian registered design.
      </p>
      <hr />
      <h3 id="biomedical-patent">Biomedical Patent</h3>
      <p>
        A &ldquo;
        <Link href="/specialisations/pharmaceutical-patents">
          biomedical patent
        </Link>
        &rdquo; is a patent having claims that are focussed on covering a
        biomedical technology. A biomedical technology is a technology that
        focuses on applications of biological and chemical sciences, including
        biotechnology, recombinant DNA technologies, cancer biology, medical
        treatments, medical devices and pharmaceuticals. The pharmaceutical,
        biotechnology, medical engineering technology and healthcare related
        industries usually require patents to allow them to recoup the costs of
        research and development of new technology to a commercial stage. This
        can be In some instances a 20 year patent term can be extended to assist
        in giving sufficient monopoly cover. These technologies are covered by
        patent claims to specific devices (such as an instrument), software and
        servers that controls optical systems, whole of system and processes.
      </p>
      <hr />
      <h3 id="business-idea-patent">Business Idea Patent</h3>
      <p>
        A business idea patent is more commonly referred to as a business method
        patent. This is a patent which claims rights in an invention relating to
        a method of carrying out business. As technology has evolved and
        advanced, the business world has found ways of incorporating technology
        in the way business is conducted. As a consequence, provided there is a
        focus on the technological aspect, such methods of conducting business
        may be patented provided the method satisfies all the tests for
        patentability. However, not all business ideas are able to be patented.
        For example, a business idea that does not involve any technology use is
        considered a mere scheme or plan that is not eligible for patent
        protection.
      </p>
      <hr />
      <h3 id="certification-mark">Certification Mark</h3>
      <p>
        A{' '}
        <Link href="/special-types-of-trade-marks">
          certification trade mark
        </Link>{' '}
        (CTM) is used to identify to consumers, goods or services, that carry
        such mark, and have met the rules and standards imposed by the
        certification mark owner. Typically, the rules demand certain criteria
        such quality, accuracy, place of manufacturing or material type. A
        certification mark criteria is outlined by the holder of the mark and
        checked for fairness by the Australian Competition and Consumer
        Commission (ACCC). The owner of a certification mark outlines rules and
        standards for others to adhere to in order to attach a certification
        mark to their product. The rules outlined by the certification mark
        holder are checked by the ACCC in order to ensure that they satisfy the
        &lsquo;Certification Trademark Rules Checklist&rsquo;, which can be
        found on the ACCC website. If an entity&apos;s product or service
        satisfy the rules outlined by the certification trade mark owner, then
        they may attach the CTM to their product offering. Certification trade
        marks can be used to enhance the credibility of a good or service, as
        they show that the product has satisfied the requirements outlined by
        the CTM. The &lsquo;C-Tick&rsquo; is an example of an Australian
        certification mark that certifies a products compliance with the
        electromagnetic interference standards, as outlined by the Australian
        Communications and Media Authority.
      </p>
      <hr />
      <h3 id="chemistry-patent">Chemistry Patent</h3>
      <p>
        <Link href="/specialisations/pharmaceutical-patents">
          Chemistry patents
        </Link>{' '}
        underpin a wide range of endeavours from industrial processes,
        pharmaceuticals/treatments, plastics/polymers, dyes, cosmetics,
        adhesives, costings, and many more. Claims of a chemical patent can be
        prepared in a number of different ways for different jurisdictions.
        Patent protection is essential for protecting research and development
        (R&amp;D) investment and commercial outcomes from chemical processes,
        chemical compounds, pharmaceutical formulations, and treatments for
        diseases such as Alzheimer&apos;s, HIV and Hepatitis. Inventive advances
        and often risk investment in R&amp;D investment often directly impacts
        on and positively affects quality of life but may have extended
        development life cycles before a commercial return can be made. Often
        there is a scientific community push for publishing advances to
        establish a pseudo claim of first to invent - this needs to be resisted
        until a patent has been filed otherwise publication may adversely affect
        the ability to obtain adequate and deserved commercial compensation for
        substantial investment.
      </p>
      <hr />
      <h3 id="circuit-layout-rights">Circuit Layout Rights</h3>
      <p>
        The automatic protection of the original layout designs of electrical
        circuits within; integrated circuits, computer chips,
        semiconductor&apos;s, and computer reliant equipment. IP Australia
        defines a circuit layout as the two-dimensional representation of the
        three-dimensional location of electronic components within an integrated
        circuit. A circuit layout right is automatically assigned upon the date
        which the original plan or design is created. It is therefore not
        necessary to apply for circuit layout right protection, as this is
        automatically granted. However, if an issue were to come into
        contention, the onus of proof is placed on the inventor of the circuit
        layout right to prove that they were the original developers of the
        invention. An owner of a circuit layout right has the exclusive
        right&apos;s to copy the layout in material form, make integrated
        circuits from the layout and exploit the circuit layout commercially
        within Australia. Company A were the first to draw a two-dimensional
        representation of the three-dimensional location of electronic
        components within the circuit layout of a new computer reliant heart
        pacemaker. So long as it can be proven that they were the first to
        document this invention, Company A will be automatically granted circuit
        layout rights over the invention.
      </p>
      <hr />
      <h3 id="civil-engineering-patent">Civil Engineering Patent</h3>
      <p>
        A{' '}
        <Link href="/specialisations/construction-patents">
          civil engineering patent
        </Link>{' '}
        is a patent that can protect various aspects relating to civil
        engineering technology. Civil engineering patents can relate to items as
        diverse as the configuration of structural framing, support
        configurations, cladding configurations, and the layout and
        configurations of modular constructions. In addition, patents can
        protect methods or processes of producing and/or constructing these.
      </p>
      <hr />
      <h3 id="classes">Classes</h3>
      <p>
        Trade marks are classified according to the{' '}
        <Link href="/classes-of-goods-and-services">
          categories of the goods or services
        </Link>{' '}
        that they fall under. When applying to register a trade mark it is
        important to identify the classes of the goods and / or services that
        are to be covered. The IP Australia Classification Search Database can
        be used to determine the appropriate classes of goods and / or services
        that an idea is best related to. Australia uses the &lsquo;Nice
        Classification System&rsquo;, which is an internationally recognised
        system that is used to group different types of goods and services into
        distinct classes. The Nice system divides goods and services into 45
        separate classes. This ultimately determines the extent of trade mark
        filing fees, as fees are calculated on a per class basis. The list of 45
        separate classes can be accessed through the World Intellectual Property
        Database WIPO.
      </p>
      <hr />
      <h3 id="collective-mark">Collective Mark</h3>
      <p>
        A form of trade mark that is owned by an association, on behalf of
        members, which distinguishes the goods or services of members from those
        of non-members. The primary function of a{' '}
        <Link href="/special-types-of-trade-marks">collective mark</Link> is to
        inform a consumer that the goods and / or services that they are using,
        comply with the standards outlined by the collective mark. Collective
        marks are owned by an association that represents a specific group of
        people. Membership indicates satisfaction of the requirements outlined
        by this association. Collective marks are generally used to distinguish
        goods or services based on geographical origin, materials used,
        manufacturing methods or other common characteristics. As a result,
        ownership of a collective mark is exclusive. As such, the proceeds of
        this exclusivity can be used in the marketing efforts of an
        organisation. An example of a collective mark is the &lsquo;CA&rsquo;
        used to identify Chartered Accountants. This acronym is used to identify
        members of the Institute of Chartered Accountants, who have satisfied
        the requirements of obtaining the mark. Members of the association can
        use this mark to demonstrate to potential customers the standard of
        accounting that they have reached.
      </p>
      <hr />
      <h3 id="common-law-trade-mark">Common Law Trade Mark</h3>
      <p>
        A distinguishable symbol or word that has not been registered as a trade
        mark but has been used to the extent that it is recognised as
        identifying goods or services provided by a particular entity. While
        this form of trade mark is unregistered, in certain circumstances the
        common law may prevent another entity from using a common law trade mark
        in a way that may be considered unfair. The term &lsquo;common
        law&rsquo; indicates that the terms of use of a common law trade mark
        are not governed by statute. A common law right will, however, have been
        developed in the courts by a judicially selected set of principles.
        These principles dictate that while a trade mark may not have been
        registered, under certain circumstances, trade mark rights deserve to be
        recognised under the common law. The primary function of common law
        trade mark rights is to protect the intellectual property of a company
        who has acquired recognition and reputation in a trade mark. Proving a
        common law trade mark right may, however, create difficulties that could
        have been easily resolved by registering the trade mark in the first
        place. Company A has developed a reputation for a distinguishable
        feature of its brand through prolonged use and marketing of this
        feature. Even if company A has not registered this feature as a trade
        mark it is likely to be considered a common law trade mark if it can be
        proven that the trade mark has an established reputation.
      </p>
      <hr />
      <h3 id="complete-specification">Complete Specification</h3>
      <p>
        A detailed description of the invention in language that would enable
        the public to work the invention once patent rights have expired. A
        complete specification outlines the purpose and structure of an
        invention and identifies the subject matter that the patent owner
        intends to protect as their intellectual property. The complete
        specification must describe the invention fully in language that the
        public can understand. Furthermore, the complete specification must
        include a detailed description of the best way to put the invention into
        effect. Lastly, the complete specification must include at least one
        claim that defines the scope of the invention. It is crucial to the
        potential success or failure of a patent application that every aspect
        of the invention is described in extreme detail in order to ensure that
        potentially critical components of an invention are not missed.
      </p>
      <hr />
      <h3 id="computer-patent">Computer Patent</h3>
      <p>
        A <Link href="/specialisations/software-patents">computer patent</Link>{' '}
        is a patent application or granted patent that claims subject matter
        related to computers, for example, hardware components, software, or
        design integration. Computer patents generally comprise patentable
        subject matter around the world, unless the patent claims relate to
        computer software being used to execute a simple business process, such
        as one that could otherwise be carried out using pen and paper. Computer
        / IT related patents are the most filed upon subject matter in the
        world, with many of the world&apos;s highest filers of patent
        applications being involved in the electronics industry. Patent claims
        in computer patents are often phrased in terms of code, software
        applications, processes carried out by a computer, hardware, a computer
        or server or even an entire system comprising server and client devices.
      </p>
      <hr />
      <h3 id="confidentiality-agreement">Confidentiality Agreement</h3>
      <p>
        A legal agreement between two parties that outlines the terms of use of
        confidential information. A confidentiality agreement can be made with
        anyone whom you wish to impose a legal obligation of confidence. This
        obligation of confidence imposes a constraint on the holder of
        confidential information not to reveal such information. A
        confidentiality agreement can therefore be used as a form of protection
        for some innovations, propriety knowledge or intellectual property. A
        confidentiality agreement can also be used as a form of protection for
        trade secrets. It is, however, important to note that a confidentiality
        agreement only protects the intellectual property from being exploited
        by those with whom you have an agreement. The best method widespread
        protection for intellectual property is to have it patented. Coca Cola
        Ltd uses confidentiality agreements to prevent its employees from
        revealing trade secrets. The benefit of this method of protection is
        that Coca Cola never has to reveal its secret recipe in a patent
        application, and subsequently can maintain its claim of holding a
        &lsquo;secret recipe&rsquo;.
      </p>
      <hr />
      <h3 id="construction-patent">Construction Patent</h3>
      <p>
        A{' '}
        <Link href="/specialisations/construction-patents">
          construction patent
        </Link>{' '}
        is a patent that can protect aspects relating to various forms
        construction, including residential, commercial or high-rise
        construction. This is very similar to a{' '}
        <Link href="/ip-glossary#civil-engineering-patent">
          civil engineering patent
        </Link>
        . Construction patents can relate to a wide variety of items including
        tools or processors that may be used in the construction of buildings,
        as well as the configuration and/or layout of particular modular
        construction types, or even protecting novel and inventive features
        around the configuration of the buildings themselves. Construction
        patterns can also protect a novel and inventive series of process steps
        carried out in assembling a construction.
      </p>
      <hr />
      <h3 id="consumer-product-patent">Consumer Product Patent</h3>
      <p>
        A consumer product is an item that is consumed consistently in
        quantities of high turnover and relatively low cost, and can range from
        edible items, disposable items, drinks, appliances, hardware, toys,
        electronics including mobile phones and game players, over the counter
        medications, medical equipment, toiletries, sporting equipment, and fast
        moving consumer goods. A consumer good patent is a patent having claims
        that are focussed on covering innovative aspects of fast turnover
        consumable products. Such a patent allows companies and entrepreneurs to
        benefit financially from their bright ideas and investment in
        innovation.{' '}
        <Link href="/specialisations/consumer-product-patents">
          Consumer product patents
        </Link>{' '}
        are the granted form of applications which can relate to technologies as
        diverse as rehydration drink compositions (GatoradeTM), dental
        straighteners, a children&apos;s toys. These technologies are covered by
        patent claims to specific compositions, devices, treatments and
        processes. Ideally, a consumer product patent should be filed by a
        patent attorney with wide ranging industry experience in fast moving
        consumer goods.
      </p>
      <hr />
      <h3 id="copyright">Copyright</h3>
      <p>
        A form of intellectual property protection that grants the creator of
        the original work, the exclusive moral and commercial rights to; copy,
        publish, communicate, and publicly perform the copyrighted material.
        Copyright protection provides the original creator of a literary,
        musical, dramatic or artistic work, the exclusive rights to control how
        that material is used. The <em>Copyright Act 1968 (Cth)</em> does not
        require the submission of any formal application in order to gain
        protection for copyrightable material within Australia. Unlike many
        other forms of intellectual property, whereby registration is a
        precondition to protection, copyright protection is granted from the
        date that the work is first created. As a general rule, this copyright
        protection lasts for 70 years after the death of the creator of
        copyrightable material. While the copyright symbol is no longer required
        for copyright protection in Australia, it may be a useful tool for
        alerting potential users of your content that copyright is claimed on
        such material. For example; Company A creates a glossary of patent terms
        and wishes to copyright the material. They may alert potential users of
        this information with; &lsquo;© Company A 2015&rsquo;, by placing this
        image in a prevalent place on their webpage.
      </p>
      <hr />
      <h3 id="deceptively-similar">Deceptively Similar</h3>
      <p>
        A trade mark that is so similar to another trade mark that it is likely
        to deceive or cause confusion. A trade mark is protected from other
        trade marks that are seen to be deceptively similar to one that is
        already in existence. Trade marks that are deceptively similar to
        another may deceive consumers into purchasing unwanted products, and
        damage a brands reputation. Trade mark protection from deceptively
        similar trade marks prevents competitors from using another entities
        reputation to further their own business operations. Company A adopts a
        brand name and logo that has a high level of similarity to the brand
        name of Company B. If Company A attempts to register this similar brand
        and logo as a trade mark, it may be subject to objection upon
        examination. Furthermore Company A may attract infringement proceedings
        from the owner of the similar trade mark. This demonstrates the
        importance of developing a unique trade mark, and the potential
        consequences of similarity.
      </p>
      <hr />
      <h3 id="design">Design</h3>
      <p>
        A registrable design refers to new and distinctive features such as
        shape, pattern or ornamentation that make a product unique. Designs may
        be registered in order to protect a product that has potential
        commercial use. A design may be registered in Australia as long as it is
        both new to the world and distinctive. It is important to note the
        distinction between design registration and copyright. Copyright
        provides protection for the original work until it is industrially
        applied (more than 50 items sold or hired), after which design
        protection is required. Furthermore, designs that have previously been
        publically disclosed may not be considered new and distinctive. It is
        therefore important to register a design before it is commercialised in
        order to receive design protection. Speedo registered the design of its
        &lsquo;Fastskin Suit&rsquo; due to the innovative nature of its
        streamlined design.
      </p>
      <hr />
      <h3 id="divisional-application">Divisional Application</h3>
      <p>
        A patent application that has been divided into two or more separate
        applications containing matter included in a previously filed
        application (parent application). When submitting a divisional
        application, an entity and / or individual will submit two separate
        invention specifications, both of which have the same description of the
        invention. Where the applications will differ, is in the claims that
        define the scope of protection desired from the patent. The divisional
        application therefore allows an applicant to make two separate
        applications that are more specific to the claims made. Divisional
        applications are often submitted when an examination report states that,
        the basic application filed claims more than one invention. The main
        benefit of submitting a divisional application is that it allows you to
        make a separate patent application, while maintaining the priority
        rights established by the parent application. Company A submits its
        patent application for examination. The results of the examination find
        that claims 1-54 are similar in nature but claims 55-65 require a
        separate application. Company A may file a divisional application, while
        maintaining the priority date set by the parent application.
      </p>
      <hr />
      <h3 id="domain">Domain</h3>
      <p>
        A unique name that is controlled by an entity and / or individual that
        corresponds with an internet protocol address. Simply registering a
        domain name does not constitute use as a trade mark, and will not
        provide the with entity proprietary rights. A domain name can be trade
        marked if it can be shown that the domain name is used as sign to
        distinguish the goods and / or services of one entity from those of
        another. If it cannot be demonstrated that the domain name is used as
        such a sign, then it will not be protected under the{' '}
        <em>Trademark Act 1995 (Cth).</em> As a result, other businesses may
        register your company&apos;s domain name in any state or country other
        than the one you are registered in. It is, however, important to note
        that even if a domain name cannot be proven to be a trade mark, the
        inappropriate use of a companies name may constitute passing off at
        common law, or be deemed to be false or misleading conduct under the{' '}
        <em>Trade Practices Act 1974 (Cth)</em>. While there are difficulties
        involved in protecting a domain name as intellectual property, there are
        numerous avenues to protection if anticompetitive behaviour is impacting
        your business activities. Company A wishes to register its domain name
        companyA.com but neglects registering this domain name as a trade mark.
        A close competitor of company A decides to register this domain name in
        other states in order to stall company A&apos;s marketing activities.
        Without trade mark protection Company A would not have proprietary
        rights to sue. It is however important to note that other avenues to
        protection may arise out of the <em>Trade Practices Act 1974 (Cth)</em>.
      </p>
      <hr />
      <h3 id="electrical-patent">Electrical Patent</h3>
      <p>
        <Link href="/specialisations/electrical-engineering-patents">
          Electrical engineering patents
        </Link>{' '}
        are patents having claims directed to an electrical device or component,
        to a product utilising electrical components, or to a technology which
        generally relates to the application of electricity, electronics, and/or
        electromagnetism. An electrical engineering patent is the granted form
        of an electrical engineering patent application which relates to the
        technology of electricity, especially the design and application of
        circuitry and equipment for power generation and distribution, machine
        control, and communications. Electrical engineering patents may relate
        to: electrically powered (either from mains outlet or battery powered)
        consumer devices; new types of electrical components;
        modifications/improvements of existing electrical components that are
        used to manipulate electrical signals, currents, voltages etc. for an
        improved outcome; or devices or methods for improved manufacture of
        electrical components or devices. Electrical engineering patent
        applications should be prepared and filed by a patent attorney with an
        explicit technical background in electrical engineering due to the level
        of specialisation required to adequately understand such technology.
      </p>
      <hr />
      <h3 id="electronics-patent">Electronics Patent</h3>
      <p>
        An{' '}
        <Link href="/specialisations/electrical-engineering-patents">
          electronics patent
        </Link>{' '}
        is a patent that protects various aspects of a new idea relating to
        electronics technology. Electronics patents can relate to a wide variety
        of technologies covered by the term electronics. Examples of subject
        matter that can be protected include methods of laying down layers of
        conductors and semiconductors to form electronic circuits, the chemical
        formulation of particular conductor and semiconductor materials, methods
        of connecting hardware to a circuit board, and specific structures of
        and even methods of operating specific electronic items such as
        transistors or the like.
      </p>
      <hr />
      <h3 id="embodiment">Embodiment</h3>
      <p>
        An &ldquo;embodiment&rdquo; is an example of an invention or idea. A new
        idea or invention may take many different forms and each form is called
        an &lsquo;embodiment&rsquo;. In a professionally prepared patent
        specification, the embodiments of your new idea are disclosed in full
        technical detail in the description section of your patent specification
        and covered by your patent claims. In many jurisdictions it&apos;s
        important to disclose a broad range of embodiments in your patent
        specification to underwrite, in a legal sense, the breadth of your
        claims. Say your new idea is a headrest for an office chair and that
        before this time, headrests for chairs did not exist. Then a first
        embodiment of your new idea might be a typical swivel mounted
        workstation chair with a headrest, a second embodiment might be a
        reception chair with a headrest, a third embodiment might be an armchair
        with a headrest and a fourth embodiment, a sofa with a headrest and so
        on.
      </p>
      <hr />
      <h3 id="examination">Examination</h3>
      <p>
        The process whereby a patent, trade mark, design or plant breeders right
        is assessed to meet the requirements of the relevant act. Once a
        standard patent application has been submitted, examination must be
        requested within five years of the filing date. If you have not done so
        already, IP Australia will direct you to request an examination
        approximately 1 year before this expiry date. Once examination has been
        requested it will generally be completed by IP Australia within 1 year.
        The results of this examination will either come in the form of an
        Adverse Report or a Notice of Acceptance. If an adverse report is
        received, there will be an outline of the contentious issues within your
        IP claims, and a description regarding why your application does not
        meet the requirements of the <em>Patents Act 1990 (Cth)</em>. You will
        then have 12 months to address or retract all of the issues within the
        adverse report. IP Australia will then further examine the application
        based on their set criteria, and if satisfied, the patent will be
        granted.
      </p>
      <hr />
      <h3 id="expedited-examination">Expedited Examination</h3>
      <p>
        A process for getting a patent application granted as a patent in a
        shorter time period than would ordinarily occur. Examination is the
        process by which patent applications are tested by examiners at the
        various patent offices to check whether the invention being claimed by a
        particular patent application meets all the requirements for
        patentability. If the patent application is found to have met the
        requirements, then it is granted as a patent. However, the process of
        examination is usually dependent on backlogs being currently experienced
        at the various patent offices, and the workloads of the individual
        examiners. Expedited examination is a process for requesting that such
        testing be carried out on an expedited basis, in order to get a patent
        granted faster. Expedited examination is usually requested when a
        competitor has put competing product onto the market in a territory or
        country, that would infringe the claims of a patent application in that
        country if it was granted as a patent.
      </p>
      <hr />
      <h3 id="filing-date">Filing Date</h3>
      <p>
        The date a patent application is submitted to IP Australia in complete
        form. The filing date is a critical point in the lifetime of a patent as
        it defines a number of key issues such as the start of the patent term
        and the calculation of when annuity payments fall due. In the case of a
        Basic Application, the filing date may also define the priority date for
        the disclosed invention.
      </p>
      <hr />
      <h3 id="information-communications-technology-patent">
        Information, Communications &amp; Technology Patent (ICT Patent)
      </h3>
      <p>
        ICT stands for Information, Communications &amp; Technology and so an
        ICT patent is one that is filed in these areas of technology.{' '}
        <Link href="/specialisations/software-patents">ICT patents</Link> are
        the most commonly filed in the world and cover a very broad range of
        patentable subject matter from information processing systems including
        computers and communications technologies over a vast range of protocols
        including telecommunications. ICT patents is also a term used to
        describe patents for software including enterprise software, middleware,
        cloud-based software and apps and for digital storage and audio-visual
        systems. Whilst the majority of ICT subject matter is patentable, some
        countries do specifically exclude software patents from patentable
        subject matter in law.
      </p>
      <hr />
      <h3 id="infringement">Infringement</h3>
      <p>
        A prohibited act in regards to the use of another persons patent without
        their permission. Such permission is usually granted through a license.
        In patent law, an infringement occurs when an individual or entity
        violates a patent owners exclusive right. Infringement can be done
        advertently or inadvertently, however either form can leave the
        infringer liable. The terms of a patent claim, as outlined in the patent
        specification, will inform the public of how restricted the terms of use
        of the patent are. It is therefore very important that thorough research
        is conducted before engaging in the use of material that could be
        potentially protected by law. It is important to note that as patents
        are territorial, infringement can only occur in countries where the
        patent has been granted. <em>Apple Inc v Samsung Electronics Co</em> was
        a high profile case involving patent infringement in regards to
        smartphones and tablets. Samsung was granted a limited ban by the US
        International Trade Commission on certain Apple products being sold.
        While this decision was ultimately vetoed, patent infringements
        ultimately cost both organisations a large amount of financial resources
        and heartache.
      </p>
      <hr />
      <h3 id="innovation-patent">Innovation Patent</h3>
      <p>
        A second tier form of patent that protects innovations that offer a
        comparatively small advance in existing technology, thus satisfying an
        innovative step rather an inventive step. An innovation patent is a
        second tier form of patent protection in Australia that is primarily
        developed for use in protecting incremental innovation. Innovation
        patents can be obtained if a product has a feature that is new when
        compared with existing prior art. The new features can be obvious, but
        must at least make an improvement to the functionality of the product.
        In order for an innovation patent to be granted, it must be filed with
        IP Australia who will conduct a substantive examination of the
        application. If the patent is seen to be new and to include an
        innovative step over existing prior art, it may be certified. The three
        primary benefits to obtaining an innovation patent are; (1) they are
        relatively inexpensive, (2) they can be granted quickly, and, (3) it is
        relatively difficult for third parties to revoke this form of patent. It
        is however important to note that innovation patents are only valid for
        eight years, and may not include more than five claims. Company A has a
        standard patent that is about to expire. Company A creates a development
        for their standard patent that satisfies the innovation step required to
        obtain an innovation patent. By obtaining an innovation patent, Company
        A is able to maintain patent protection to their developments.
      </p>
      <hr />
      <h3 id="innovative-step">Innovative Step</h3>
      <p>
        A part of the invention that is deemed to have exceeded common general
        knowledge and prior art that existed in Australia before the priority
        date. The innovative step is an important component of the application
        process for innovation patents in Australia. An innovative step exists
        when the invention differs from what is previously known, and / or if
        the difference makes a substantial contribution to the way a current
        invention works. Whether or not an innovative step is deemed to exist
        will be viewed in light of common general knowledge, and through the
        perspective of a person that has been identified as skilled in the
        specific art that the invention covers. Innovation patents and their
        allowance for innovative steps, allows an individual and / or entity to
        protect incremental advances in existing technology, and widens the
        scope of intellectual property law in Australia.
      </p>
      <hr />
      <h3 id="intellectual-property">Intellectual Property (IP)</h3>
      <p>
        Intellectual Property (IP) is a catch-all term used to describe a range
        of different types of assets, also known as, or more generally, a
        special class of intangible assets or creations of the mind that can be
        owned by law by an individual or organisation and is able to be traded
        similarly to tangible &lsquo;bricks and mortar&rsquo; assets.
        Intellectual Property generally refers to such assets including,
        patents, trade marks registered designs, and copyright. IP generally
        includes legal rights protecting discoveries and inventions; trade
        reputation &amp; goodwill; music, literature &amp; other artistic works;
        &amp; words, phrases, symbols, and designs. Intellectual Property is
        also often used to refer to other asset classes including, for example,
        trade dress or trade secrets. Intellectual Property law has evolved over
        many centuries, however the term itself was not coined until the 19
        <sup>th</sup> century and it wasn&rsquo;t until the late 20
        <sup>th</sup>century that the term became common place around the world.
        The legal rights surrounding IP have their origins in the ancient Greek
        colony of Sybaris where innovative chefs were granted year-long
        monopolies for creating particular culinary delights. One of the first
        legal instruments issued to protect the intellectual creations of a
        person was issued by the Republic of Florence on June 19, 1421 to
        architect Filippo Brunelleschi. The first lasing institution of
        intellectual property protection, however, did not come into existence
        until the Florentine patent statute of 1474, 150 years prior to
        England&apos;s Statute of Monopolies in 1624. In the Florentine patent
        statute, the rights of inventors were recognized, an incentive mechanism
        was included, compensation for infringement was established, and a term
        limit on inventors&apos; rights was imposed. The Statute of Monopolies
        granted fourteen-year monopolies to authors and inventors and ended the
        practice of granting rights to &ldquo;non-original/new&rdquo; ideas or
        works already in the public domain. From these humble beginnings, it was
        estimated in 2000 by Leonard Nakamura of the Federal Reserve Bank of
        Philadelphia, that intangible assets were responsible for 1 trillion US
        dollars of investment having a capitalized value of in excess of $ 6
        trillion in that same year. There are many great examples of good
        product design that are the result of many years of development and
        refinement. Particularly notable is the iPhone by Apple Inc. which, when
        it was first released in the United States in June 2007, started a
        revolution in the personal mobile device industry and effectively
        starting the smartphone movement. The iPhone concept was originally
        conceived of by Steve Jobs in 2005 as a method of interacting with a
        computer using a multi-touch screen &ndash; effectively making the
        keyboard or individual letter keys (e.g. on Blackberry devices at the
        time) obsolete. The initial designs were carried out in secret within
        Apple Inc. and when the first prototype was shown to Steve, he conceived
        of the idea to integrate it into a mobile phone which was announced in
        his keynote address at the Macworld conference as on January 9 2007 with
        the words: &ldquo;I have been looking forward to this for two and a half
        years …. today, Apple is going to reinvent the phone.&rdquo; The iPhone
        design sparked a massive push by existing mobile phone developers to try
        to &lsquo;catch up&rsquo; to the Apple iPhone resulting in the current
        landscape of a variety of smartphone devices by many manufacturers, most
        of which have - either directly or indirectly - been in some form of
        litigation with Apple, Inc over copying of the design of the iPhone
        hardware and software enabling the user interactions with the device.{' '}
        <Link href="https://en.wikipedia.org/wiki/Time_(magazine)">Time</Link>{' '}
        magazine named the iPhone the Invention of the Year in 2007.
      </p>
      <hr />
      <h3 id="intellectual-property-asset">
        Intellectual Property Asset (IP Asset)
      </h3>
      <p>
        An Intellectual Property (IP) asset is an intangible asset (either
        registered or unregistered) that has a tangible value, for example, on
        the balance sheet of a company. Intellectual property assets come in two
        flavours, registered and unregistered. Registered IP Assets include
        patents, trade marks, registered designs, or plant breeder&apos;s
        rights. This type of asset, after meeting the eligibility requirement,
        is registered by the government in a particular country and provides the
        asset owner with monopoly rights in the country of registration to
        exploit the asset. Unregistered IP Assets most notably include
        copyright, and circuit layouts, although trade secrets and employee
        knowledge are other forms of an unregistered IP asset. Unregistered IP
        assets exist immediately on creation of a work in a tangible form (for
        example, writing a poem or song lyrics down on paper, or writing
        computer software code) without requiring any additional action by the
        creator to be able to claim their rights. It was estimated by Kevin A.
        Hassett and Robert J. Shapiro in October 2005 that the value of
        intellectual property assets in the United States was worth between $USD
        5 trillion and $USD 5.5 trillion or equivalent to about 45% of US GDP.
        This estimate was updated by the authors in 2011 in their report &ldquo;
        <Link href="http://www.sonecon.com/docs/studies/Value_of_Intellectual_Capital_in_American_Economy.pdf">
          What Ideas Are Worth; The Value of Intellectual Capital and Intangible
          Assets in the American Economy
        </Link>
        &rdquo; where they estimated that the value of intellectual capital in
        the U.S. economy had increased to between $USD 8.1 trillion and $USD 9.2
        trillion and the value of intellectual assets (which includes
        intellectual capital plus the economic competencies of employees of U.S.
        firms) totalled an estimated $USD 14.5 trillion in 2011. This amounts to
        an estimated ~44% of the market value of U.S. firms across all
        industries with notable industries including Media (~75% of market
        value), Telecommunications Services (~72% of market value), and
        Household &amp; Personal Products (~61% of market value).
      </p>
      <hr />
      <h3 id="intellectual-property-audit">
        Intellectual Property Audit (IP Audit)
      </h3>
      <p>
        An Intellectual Property (IP) Audit is in many ways very similar to a
        stock audit or inventory audit where an analysis of the quantity of
        stock a business has at hand, what the ongoing stock requirements are
        likely to be and determining strategic plans to ensure stock
        requirements can be met in the future. The difference between a stock
        audit and an IP audit is simply in the asset being reviewed. In
        particular an IP audit will aim to analyse and capture information about
        the intellectual assets owned, used or acquired by a business so that
        informed and considered decisions about the future direction of the
        business can be made. It is not uncommon that, in most businesses, an IP
        audit has not been undertaken. Often, when an IP audit is carried out,
        the business owners are often surprised by the quantity and value of
        intellectual assets the business has. Such an audit may uncover, for
        example, among others:
      </p>
      <ul>
        <li>
          a brand that is important to the businesses customers that does not
          enjoy the benefit of trade mark protection;
        </li>
        <li>
          a novel and unique product or process developed by the business that
          may be eligible for patent protection;
        </li>
        <li>
          significant trade secrets (e.g. the recipe for a distinctive sauce)
          that would be detrimental to the business if it was made available to
          competitors or to the public;
        </li>
        <li>
          publications and training manuals that are invaluable to ensure
          production of a quality product or service.
        </li>
      </ul>
      An IP audit may also be invaluable in uncovering potential risks to the
      business that could ultimately result in costly legal proceedings with
      employees or third parties, for example, unknowingly infringing on the
      patent rights of another. There are two main steps in an IP audit:
      <ol>
        <li>
          Identify the IP.
          <ul>
            <li>
              Identify the products and/or services that are key to the
              business.
            </li>
            <li>
              Identify existing IP assets (registered patents, patent
              application, trade marks, registered designs) and the legal rights
              attached to each identified asset.
            </li>
            <li>
              Determine the advantages that the identified assets provide in the
              marketplace.
            </li>
            <li>
              Place a value on the identified asset. What would be the
              opportunity or market cost to the business if the asset was taken
              away? Or, how much it would cost to replace the asset if it was
              lost?
            </li>
          </ul>
        </li>
        <li>
          Asses the rights and/or restrictions associated with each identified
          asset
          <ul>
            <li>
              Determine whether there are any issues with ownership of the
              asset;
            </li>
            <li>
              If you do not own an asset, do you have adequate rights to its
              use?
            </li>
            <li>
              Determine whether adequate steps been taken to protect the
              identified assets e.g.: filed applications for registration of
              assets such as patents, trade marks or designs; or have
              established internal processes for protection of trade secrets and
              employee know-how
            </li>
            <li>
              Determine whether there are any restrictions on being able to use
              the identified IP assets, e.g. joint ownership, existing IP rights
              of third parties.
            </li>
          </ul>
        </li>
      </ol>
      An IP audit should consider IP assets that are internal to the business
      such as trade marks, patents, designs, copyright, trade secrets manuals,
      custom computer software, recipes/formulations, processes, licenses in/out
      etc.; and also external assets such as product brands (trade marks),
      distribution networks and contracts, client lists, marketing/advertising/
      goodwill, customer loyalty, product certifications and import/export
      networks and contracts. Not only can an IP audit identify the strengths
      and weaknesses of a business, but it can also be a very effective tool to
      bring together different departments in the business to work together
      toward the common goal of increasing the value of the goods or service
      provided by the business and increase the likelihood of business success.
      <hr />
      <h3 id="intellectual-property-lawsuit">
        Intellectual Property Lawsuit (IP Lawsuit)
      </h3>
      <p>
        An Intellectual Property Lawsuit is an action taken in the Courts to
        enforce a person&apos;s rights in Intellectual Property. Those rights
        are generally the person&apos;s creative or intellectual rights such as
        can be created by musicians, authors, artists, and inventors which are
        protected by Statutes that define the scope of the protection and the
        scope of the possible infringement and damages that Courts can award. It
        also includes non-tangible commercial rights of businesses such as their
        reputation, goodwill or trade secrets associated with businesses or
        scientists or engineer&apos;s non-tangible assets such as inventions and
        know-how. The law of intellectual property typically encompasses the
        areas of Copyright, Patents, and Trade Mark law. It is intended largely
        to encourage the development of art, science, information and technology
        by granting certain property rights to creators, which include
        inventors, in the arts and the sciences. These rights allow the creators
        to protect themselves from infringement, or the unauthorized use and
        misuse of their creations The main statutory forms of protection of
        Intellectual Property include:
      </p>
      <ul>
        <li>
          The Patents Act 1990 which defines a patentable invention and the
          possible 20 year monopoly protection to the inventor or assignee;
        </li>
        <li>
          The Trade Marks Act 1995 which defines what can be a registrable mark
          showing a unique source for certain defined goods or services and the
          possible renewable 10 year registration term to the registered owner
          if the mark is continuously used;
        </li>
        <li>
          The Design Act 2003 which defines what is a registrable design as it
          is applied to a defined product. The registered design can be subject
          of a monopoly to the author or assignee of that design for up to two
          five-year terms;
        </li>
        <li>
          The Copyright Act which defines monopoly protection of some creative
          material such as literary, dramatic, musical, and artistic works and
          the allowed use and the restriction on copying of those works for up
          to 70 years;
        </li>
        <li>
          The Plant Breeder&apos;s Rights Act 1994 which defines monopoly in new
          plant matter if it fulfils newness, distinctiveness, uniformity, and
          stability criteria. The monopoly right can be for a period of twenty
          five years for trees and grapevinesor for twenty years for all other
          plants.
        </li>
        <li>
          The Circuit Layouts Act 1989 which defines monopoly for original
          layout designs for integrated circuits and computer chips. The maximum
          protection can be 20 years.
        </li>
      </ul>
      Intellectual Property and its enforcement in an Intellectual Property
      lawsuit can be to protect your business or creativity. Let us take an
      example on the golf course. Your newly designed golf club or putter could
      be protected by patents and allow you to have the monopoly to exploit that
      invention for twenty years. The name or brand under which you sell the
      golf club could be a mark which brings customers back to you and therefore
      should be exclusive to you with regard golfing equipment. The shape of the
      head of the golf club could be a new creative and distinctive design which
      is protectable. Further the book that you have published on how to improve
      your golf swing by use of your new golf club is a protectable literary
      work. Further the grass on which you play which took a number of years to
      develop could be a new plant breed that is a new grass with unique
      properties and uniform reproducibility and can therefore be protected.
      Further the layout of the circuit board in your golf shot measuring device
      could be unique in order to fit into a small easily carryable attachment.
      Clearly all the creative work that has been expended into the project
      would usually only occur if later you can claim monopoly rights and
      enforce those rights through an intellectual property lawsuit. It is
      therefore important to work with your patent attorney at BaxterIP to
      review and assess your creations.
      <hr />
      <h3 id="intellectual-property-rights">
        Intellectual Property Rights (IP Rights)
      </h3>
      <p>
        Intellectual property rights or &ldquo;IP rights&rdquo; is a term that
        refers to legal monopoly rights conferred by Governments on certain
        intellectual works, such as works of art, inventions, designs, branding
        and literature. The idea behind the issuance of most registrable
        intellectual property rights is that the person who created the
        intellectual works enjoys a limit time-period monopoly in exchange for
        disclosing their work to the public. Broadly speaking, there are 6 main
        types of registrable intellectual property rights in most countries
        including:
      </p>
      <ul>
        <li>
          Utility patents and utility model patents &ndash; these protect new
          and inventive functionality of products and processes. In Australia, a
          utility model patent is known as an &ldquo;Innovation Patent&rdquo;.
        </li>
        <li>
          Registered designs (or &ldquo;design patents&rdquo;) &ndash; these
          protect the new and distinctive aesthetic appearance of products
          whether in 2D or 3D form.
        </li>
        <li>
          Copyright &ndash; this protects original works of literature and art,
          in fact virtually anything that is put on paper or in a computer.
          Copyright is not registrable in all countries . In Australia,
          copyright arises automatically in any original creative work.
          Copyright only covers the expression of works, not the ideas or
          information behind it.
        </li>
        <li>
          Trade marks &ndash; these protect signs that act as a badge of origin
          of goods or services, such as words, logos, scents, sounds and shapes.
        </li>
        <li>
          Plant varieties &ndash; these protect new and distinctive breeds of
          plants that are created by artificial means.
        </li>
        <li>Circuit designs &ndash; these protect new circuit layouts.</li>
      </ul>
      There are also numerous forms of non-registrable intellectual property
      rights. In Australia, non-registrable intellectual property rights include
      copyright, trade secrets and trade dress (or &ldquo;get-up&rdquo;).
      <ul>
        <li>
          Trade secrets &ndash; a commercially advantageous and confidential
          piece or combination of information, such as a formula, practices or
          processes.
        </li>
        <li>
          Trade dress &ndash; this term refers to characteristics of the visual
          appearance of a product or packaging that signify the source of the
          product or packaging to the market.
        </li>
      </ul>
      <hr />
      <h3 id="international-patent">International Patent</h3>
      <p>
        Whilst there is no such thing as an &ldquo;International patent&rdquo;,
        the term is generally used to refer to a{' '}
        <Link href="/pct-patent">
          Patent Cooperation Treaty (PCT) international patent application
        </Link>
        . A PCT international patent application allows a patent applicant to
        maintain or create a priority date effective internationally (Taiwan
        being the main exception) that can be claimed by a PCT national phase
        patent application at any time prior to 30 or 31 months after the
        priority date (depending on the country). The PCT patent process
        includes a patent search, publication and an optional patent examination
        stage. The patent search and examination procedures offered by the PCT
        route can be quite valuable as they allow any novelty or inventive step
        issues with the patent claims to be addressed centrally, prior to
        national phase.
      </p>
      <hr />
      <h3 id="invention">Invention</h3>
      <p>
        An &ldquo;invention&rdquo; can be said to be any apparatus or method
        that is novel and innovative. This could be assessed according to the
        newness in marketability or the novelty in a technical sense or
        according to a range of other criteria. In order to give it a single
        meaning it is often considered to be assessed as to whether the novel
        and innovative apparatus or method would fulfil the requirements of
        being patentable. That is &ndash; can you obtain a Patent? The Patents
        Act 1990 defines a technical meaning of &ldquo;invention&rdquo; in
        Schedule 1 of the Patents Act as: &ldquo;
        <strong>
          <em>invention</em>
        </strong>
        means any manner of new manufacture the subject of letters patent and
        grant of privilege within section 6 of the Statute of Monopolies, and
        includes an alleged invention. &ldquo; Generally for a new apparatus or
        method to be an invention and to be patentable, it must fulfil three
        main tests:
      </p>
      <ol>
        <li>
          the subject matter must be allowable patentable subject matter. Most
          apparatuses and methods fulfil this ground; there are exceptions in
          business methods, pure nature or pure science, and some computer
          programming;
        </li>
        <li>
          the new apparatus or method must be novel over the prior art,
          including any earlier published document or any earlier use in any
          country; this means that all of the features of your new apparatus or
          method are not disclosed in an earlier publication or earlier use; and
        </li>
        <li>
          the new apparatus or method must include an inventive step in that the
          difference to what has been known must not merely be an obvious
          difference. This means the difference to the past solutions is an
          unexpected but effective difference.
        </li>
      </ol>
      It is important to not use fake systems in identifying if a new apparatus
      or method is an invention and is patentable. One common fake system is
      that there only needs to be 10% difference. This goes against a famous
      Court decision on invention which stated that to be patentable there only
      needs to be &ldquo;a scintilla of invention&rdquo;. It can be seen that it
      is not the quantity of how different is the invention to the prior art but
      the quality of how non-obvious or unexpected and effective is that
      difference to the prior art. It is therefore important to work with your
      patent attorney at Baxter IP to review and assess your invention.
      <hr />
      <h3 id="letter-of-demand">Letter of Demand</h3>
      <p>
        A letter issued to an expected infringer of patent rights that outlines
        the nature of the infringement, what is expected in return for such
        infringement, and a time frame for response before legal action is
        initiated. A letter of demand is an effective means of communication
        between the holder of a patent, and individuals who may have infringed
        on another&apos;s patent rights. An effective letter of demand will
        hopefully resolve the situation, and encourage the infringer to stop,
        for fear of legal proceedings.
      </p>
      <hr />
      <h3 id="madrid-protocol">Madrid Protocol</h3>
      <p>
        A treaty that is administered by the World Intellectual Property
        Organisation (WIPO) that provides international registration for trade
        marks. The Madrid Protocol enacted a system of international trade mark
        registration for member states of the Paris Convention. This treaty
        facilitates simultaneous filing of trade mark applications in numerous
        different countries. All applications for protection under the Madrid
        Protocol are examined according to trade mark legislation in each of the
        member countries. This international form of registration automatically
        replaces a national or regional registration and allows for more
        widespread protection of trade mark. The Madrid Protocol is highly
        beneficial as it allows the holder of trademarkable material to only
        make one application, one payment, and as a result, be protected in all
        states that are included in the protocol.
      </p>
      <hr />
      <h3 id="manner-of-manufacture">Manner of Manufacture</h3>
      <p>
        The distinction between inventions that are patentable and those that
        are not. Historically speaking there has always been a divide between
        material that is deemed to be patentable and material that is not. This
        distinction arose out of fears that discoveries and abstract ideas would
        be patentable. This opposed the traditional notion that only inventions
        that meet certain criteria are patentable. Without this divide there
        would be an unnecessary level of patentable material, which could
        ultimately stifle rather than promote innovation. Furthermore an
        inundation of patentable material could further increase the amount of
        litigation within the intellectual property sphere. Things that cannot
        be patentable include; artistic creations, mathematical methods, plans,
        schemes, and other purely mental processes. In
        <em>
          Kiren-Amgen Inc v Board of Regents of the University of Washington
        </em>
        , the Deputy Commissioner of Patents found that; &lsquo;a claim directed
        towards naturally occurring DNA characterised by specifying the DNA
        coding for a portion of a molecule, would likely be claiming no more
        than a discovery per se and not be a manner of manufacture&rsquo;. The
        court found that gene paths found within naturally occurring DNA cannot
        be patented, thus demonstrating the importance of the manner of
        manufacture test when considering whether or not an invention can be
        patented.
      </p>
      <hr />
      <h3 id="medical-patent">Medical Patent</h3>
      <p>
        A <Link href="/specialisations/medical-patents">medical patent</Link>{' '}
        typically refers to a patent or patent application, the subject matter
        of which relates to either a medical device, method of medical treatment
        or software for controlling medical equipment. Medical patents are one
        of the fastest growing areas of patenting, particularly reflecting
        growing demand in the aged care sector around the world. Whilst the term
        &ldquo;medical patents&rdquo; is normally used to refer to medical
        device patents, such as surgical, therapeutic or diagnostic devices and
        methods of medical treatment, the term is often also used more broadly
        to refer to new medical grade compounds, that is, pharmaceuticals or
        other therapeutic compounds and various forms of biotechnology. Various
        software control system such as for large scale medical equipment found
        in hospitals (X-ray machines, MRI machines, robotic surgical tools) and
        cloud based patient data analysis often also come under the umbrella of
        the term &lsquo;medical patents&rsquo;.
      </p>
      <hr />
      <h3 id="mobile-application-patent">Mobile Application Patent</h3>
      <p>
        A{' '}
        <Link href="/specialisations/software-patents">
          mobile application patent
        </Link>{' '}
        is a patent that protects novel and inventive steps carried out by
        software on a mobile electronic device. Protection of a software
        application used on a mobile electronic device can be achieved by
        protecting:
      </p>
      <ul>
        <li>
          a method carried out on a mobile electronic device comprising novel
          and inventive steps carried out by the software, and preferably having
          a technical effect;
        </li>
        <li>
          protecting a mobile device with particular hardware and software
          configured for carrying out novel and inventive steps
        </li>
        <li>
          computer readable storage media configured for storing instructions
          for extracting a mobile electronic device to carry out a method
        </li>
      </ul>
      <hr />
      <h3 id="national-stage">National Stage</h3>
      <p>
        The final stage of the <Link href="/pct-patent">PCT application</Link>{' '}
        process, whereby an entity and / or individual files national patent
        applications in the countries where IP protection is required. The
        National Stage is the final stage in the PCT application process. The
        national stage patent application process can be summarised as: (1)
        filing of the &lsquo;National Phase&rsquo; patent application with IP
        Australia, and, (2) filing &lsquo;national&rsquo; patent applications in
        countries of interest outside of the Australian jurisdiction. National
        stage applications must be filed in Australia 31 months after the
        earliest claimed priority date. IP Australia will assess the application
        based on their set criteria, and if satisfied, the patent will be
        granted. It is important to note that a national phase application in
        Australia will only grant patent protection within the Australian
        jurisdiction. As a result, individual national patent applications will
        need to be filed in all the countries in which patent protection is
        sought. This is a lengthy process and therefore requires significant
        consideration of a variety of salient features. Baxter IP has developed
        9 filing strategies to consider when deciding where to extend the
        geographical coverage of the intellectual property. These strategies
        include consideration of;
      </p>
      <ol>
        <li>
          <em>Your largest markets</em> &ndash; this is most important in cases
          where your product could be manufactured anywhere in the world.
        </li>
        <li>
          <em>Your home ground</em> &ndash; filing in the markets that will be
          easiest to commercialise in.
        </li>
        <li>
          <em>Your pilot markets first</em> &ndash; having a national patent
          filed in countries that you intend to commercialise in will enhance
          the credibility of your product within those markets.
        </li>
        <li>
          <em>File in future markets</em> &ndash; while the United States is
          currently the largest consumer market in the world, across a patents
          20 year lifespan there may be changes in market dominance.
        </li>
        <li>
          <em>
            Countries where competitors would be likely to manufacture an
            infringing product
          </em>
          - this is particularly relevant if you manufacture overseas, and wish
          to prevent your manufacturer from selling your product on the side.
        </li>
        <li>
          <em>File in countries where your patent is likely to be infringed</em>
          &ndash; this will allow you to address infringement with an
          enforceable right as soon as possible.
        </li>
      </ol>
      <hr />
      <h3 id="nice-classification-system">Nice Classification System</h3>
      <p>
        An international classification of goods and services used for the
        purpose of registering trade and service marks.
      </p>
      <p>
        Australia uses the{' '}
        <Link href="/classes-of-goods-and-services">
          <em>Nice Classification System</em>
        </Link>{' '}
        to group different types of goods and services into distinct classes.
        Countries party to the <em>Nice Agreement</em> are obliged to apply the
        nice classification system when classifying trade and service marks. The
        Nice system divides goods and services into 45 separate classes. This
        ultimately determines the extent of trade mark filing fees, as fees are
        calculated on a per class basis.
      </p>
      <p>
        The list of 45 separate classes can be accessed through the World
        Intellectual Property Database / WIPO.
      </p>
      <hr />
      <h3 id="non-exclusive-license">Non-Exclusive License</h3>
      <p>
        A license without the features of exclusivity, thus allowing the owner
        of intellectual property to retain the right to commercialisation of
        their asset and the authority to grant an unlimited number of licenses.
        Simply put, a non-exclusive license does not preclude the owner of
        intellectual property the right to assign multiple license agreements,
        and personally commercialise their IP. Through granting a non-exclusive
        license, the licensor retains the right to commercialise their
        intellectual property. Furthermore, the owner of the IP is able to
        assign multiple licensees while retaining the right to exploit their
        intellectual property. In comparison to an exclusive license, this
        allows an owner of intellectual property to retain control over the
        commercialisation process, while expanding the reach of their IP through
        licensees.
      </p>
      <hr />
      <h3 id="notice-of-opposition">Notice of Opposition</h3>
      <p>
        A notice to a patent applicant, from a third party, which initiates a
        formal dispute to a pending patent application or a registered patent or
        trade mark. A notice of opposition is filed when a third party wishes to
        initiate a formal dispute of a pending patent application. A trade mark
        that has been filed or accepted may be opposed if it satisfies any of
        the grounds of rejection as outlined in the{' '}
        <em>Trade Marks Act 1995 (Cth)</em>. A common example of grounds for
        rejection is when a trademark is perceived to be identical or
        deceptively similar to a registered or pending trademark. Oppositions to
        registration are initiated through filing a notice of opposition and
        providing a statement of the grounds of opposition and particulars.
      </p>
      <hr />
      <h3 id="novelty">Novelty</h3>
      <p>
        &ldquo;Novelty&rdquo; is a term typically used in reference to the
        primary test for whether an idea or invention is patentable.
        &ldquo;Novel&rdquo; is a rather archaic term that basically means
        &ldquo;new&rdquo;. Thus, for an idea to be patentable, it must be new
        and satisfy various other criteria. In terms of patent law in most
        countries, the test for &ldquo;novelty&rdquo; is international in scope
        meaning an idea must be new in respect of any piece or, in some
        circumstances, combination of pieces of information that are publically
        known. Any idea that has been written about publically, such as on the
        internet, in a trade journal or other literature or performed/used
        publically is known as prior art. In a patent application, an idea is
        defined in a patent claim and thus the test for novelty of a patent is
        one where the claim is compared with the prior art to see whether it is
        new. For a claim to be new it must include at least one feature that is
        not in the prior art.
      </p>
      <hr />
      <h3 id="novelty-search">Novelty Search</h3>
      <p>
        A novelty search is a type of search conducted, normally on patent
        databases but often across other literature such as technical journals
        and blogs, to determine whether an idea is new. There are 2 main
        criteria for patenting an idea in most countries around the world; the
        first is that the idea must be new or &ldquo;novel&rdquo; and the second
        is that the idea must comprise an &ldquo;inventive step&rdquo;. Novelty
        is determined by comparing the idea with other ideas that are publically
        known such as those that have been published on the internet, in
        technical journals and in various patent databases such as, for example:
        Espacenet, Patent Scope or the USPTO patent office database in what is
        known as a &ldquo;novelty search&rdquo;. If an idea is different from
        that which is already known, it is novel. A novelty search can be
        conducted prior to, or post, filing a patent application. Often the
        decision as to whether a novelty search is performed is driven by
        financial or timing requirements. In Australia, a very common way to
        have a detailed novelty search conducted is to request what is known as
        an &ldquo;International-type&rdquo; search by IP Australia, based on a
        filed provisional patent application.
      </p>
      <hr />
      <h3 id="omnibus-claim">Omnibus Claim</h3>
      <p>
        A special form of claim, as included in the complete specification, that
        includes a description and / or drawing that provides details of the
        preferred form of an invention. An omnibus claim is a form of claim that
        provides a description, drawing or example of the invention that is
        outlined in the complete specification, which does not expressly define
        any technical features of the intellectual property. This form of claim
        provides a description or drawing that defines the essential features of
        the invention, and its preferred embodiment. It is important to note
        that under amendments made in the{' '}
        <em>Intellectual Property Laws Amendment Act 2012 (Cth)</em> the
        practice of employing omnibus claims has been effectively abolished.
      </p>
      <hr />
      <h3 id="opposition">Opposition</h3>
      <p>
        A third parties entitlement to formal objection of a pending patent,
        trade mark or designs registration. For a third party to oppose a patent
        application they must submit a notice of opposition and a statement of
        grounds and particulars. There are two types of opposition that may be
        lodged. This includes, an opposition to the grant of a standard patent,
        or an opposition to the grant of an innovation patent. It is important
        to note that a statement of grounds and particulars must be lodged
        within three months of the notice of opposition. Prior to the lodging of
        this statement, evidence must be filed according to the means approved
        by the Commissioner of Patents. A hearing will then be held that takes
        into account the evidence and grounds of the opposition, after which,
        the outcome of the opposition will be revealed within three months of
        the hearing date.
      </p>
      <hr />
      <h3 id="optical-engineering-patent">Optical Engineering Patent</h3>
      <p>
        An{' '}
        <Link href="/specialisations/physics-and-optical-patents">
          optical engineering patent
        </Link>{' '}
        is a patent having claims that are focussed on covering an optical
        engineering technology. An optical engineering technology is a
        technology that focuses on applications of optics. Optical engineering
        patents are the granted form of optical engineering patent applications
        and can relate to technologies as diverse as lenses, microscopes,
        telescopes, optical disc storage systems and fiber optic communication
        systems. These technologies are covered by patent claims to specific
        devices (such as an instrument), software and servers that controls
        optical systems, whole of system and processes.
      </p>
      <hr />
      <h3 id="passing-off">Passing Off (in relation to trade marks)</h3>
      <p>
        When an entity and / or individual represents the registered
        intellectual property of another as their own. Entities and / or
        individuals are protected from breaches of passing off, under tort law
        within the common law framework. A form of action can be brought in
        order to enforce unregistered trade mark rights and protect the goodwill
        of traders from misrepresentation in the course of trade. Passing off
        often occurs when an entity that is not the owner or licensee of
        intellectual property represents goods in a way that deceives or
        confuses consumers in the course of trade. If an entity is lead to
        believe that passing off has occurred, the onus of proof will be placed
        on the entity and / or individual. They will need to demonstrate that
        there was goodwill owned by the trader, this goodwill was
        misrepresented, and as a result, there has been subsequent damage to
        this goodwill.
      </p>
      <hr />
      <h3 id="patent">Patent</h3>
      <p>
        A set of exclusive rights that is granted to an inventor or assignee for
        a limited period of time in return for detailed public disclosure of an
        invention. A patent is a form of intellectual property right that can be
        granted for an invention, such as a device, substance, method or
        process. Once submitted, the invention must undergo examination to
        establish whether or not it is new to the world, inventive and useful. A
        patent can be used to exclude others from commercialising the patented
        invention without permission. This exclusion will last for the duration
        of the patents term. The standard patent terms are twenty years for a
        standard patent and eight years for an innovation patent. While the
        patent application process is complex, in a simplified form there are
        four steps that need to be followed. Stage one involves a{' '}
        <Link href="/provisional-patents">Provisional Patent Application</Link>.
        This is to be followed by a{' '}
        <Link href="/international-type-search">novelty search</Link>,{' '}
        <Link href="/pct-patent">
          Patent Cooperation Treaty (PCT) International Patent Application
        </Link>
        , and a{' '}
        <Link href="/national-phase-patent">
          National Phase Patent Application
        </Link>
        . IP Australia will assess the application based on their set criteria,
        and if satisfied, the patent will be granted. Patent protection is a
        crucial component in developing an intangible idea with unknown value,
        into a twenty-year monopoly over the potential market for the invention.
        By protecting an invention, the holder of a patent has the ability to
        stop third parties from copying the idea, and passing off the invention
        as their own. This will enable to patent holder to recover research and
        development costs and gain a competitive edge in the market.
      </p>
      <hr />
      <h3 id="patent-application">Patent Application</h3>
      <p>
        The process of filing national and international patent applications in
        order to gain protection for intellectual property. While the patent
        application process is complex, in a simplified form there are four
        steps that need to be followed. Stage one involves a lodging a
        provisional patent application with IP Australia in order to set a
        priority date. This is to be followed by a novelty search, which will
        provide an indication of whether or not the invention will be approved
        by IP Australia (IPA). If the steps are deemed to be a success, a Patent
        Cooperation Treaty (PCT) International Patent Application should be
        lodged. This is the first step towards securing patent protection in
        countries other than Australia. The final stage of the patent
        application process involves filing a National Phase Patent Application
        with IP Australia, and filing national patent applications in other
        countries in which protection is desired. IP Australia will assess the
        application based on their set criteria, and if satisfied, the patent
        will be granted.
      </p>
      <hr />
      <h3 id="patent-around-the-world">Patent Around the World</h3>
      <p>
        We are in an international global market and therefore need patent
        protection around the world. However there is no single patent that
        gives enforceable coverage around the world. But the Patent Systems of
        over 190 countries will allow a single application to start the process
        of patent protection around the world. A patent covers the concept and
        application of an invention. If your commercial markets extend beyond
        the boundaries of Australia, you may want to consider protecting your
        innovations and technical advances in countries around the world.
        Obtaining patent protection is a multi-stepped process, and extending
        patent protection to countries outside Australia can be obtained by a
        first application filed in Australia. Patent protection is essential for
        encouraging research and development (R&amp;D) investment by allowing
        commercial outcomes from inventive advances such as pharmaceutical
        formulations, and treatments for diseases such as Alzheimer&apos;s, HIV
        and Hepatitis. This is clearly advantageous for quality of life
        outcomes, and therefore patents represent a practical means for
        encouraging investment and obtaining a commercial return on such
        investment. Patents are specific to particular countries or groups of
        countries and have their particular patent legislation. For example, a
        Patent granted in Australia provides exclusive rights in Australia only.
        In order to obtain a corresponding exclusive right in countries such as
        the USA, Europe, China and many more, separate action is required.
        International Treaties and Conventions provide agreed international
        processes for countries that are signatories. One example is the Paris
        Convention for protection of Industrial Property signed by over 190
        countries. This Convention is started with one application in a
        Convention member country such as the first application in Australia.
        The patent applicant then has 12-months under the Convention to file an
        application in other member countries. While there is no mechanism for
        obtaining a singular international patent, there are two approaches to
        filing overseas. In one approach, overseas patent applications can be
        filed directly in each jurisdiction for which exclusive rights are
        sought. In the second approach, the patent applicant may file a single
        international patent application under the Patent Cooperation Treaty
        (PCT). The Patent Cooperation Treaty (PCT) provides a practical
        mechanism for obtaining patents in countries of commercial interest by
        entering the national phase in one or more PCT member countries such as
        the USA, Europe, Australia, and China. The PCT is administered by the
        World Intellectual Property Organisation (WIPO) which defers separate
        local and overseas filings for a period of up to 30/31-months from the
        earliest filing date. A great example of Patents around the world is
        detailed{' '}
        <Link href="http://www.wipo.int/ipadvantage/en/details.jsp?id=2568">
          here
        </Link>
        . In the above example, the patent applicant focussed attention on
        addressing risks of AIDS and Hepatitis C infection associated with
        accidental infection during blood collection where blood collection
        needle devices and syringes were commonly used. The applicant identified
        a global market for its solution (a protection assembly) to the above
        problems. In this case, the following steps were taken by the applicant:
      </p>
      <ol>
        <li>
          Patent process started by filing an Australia provisional patent
          application;
        </li>
        <li>
          Within 12-months of the provisional application filing date, the
          applicant filed an International patent application under the PCT
          &ndash; under the Paris Convention, the applicant was entitled to
          claim priority for its PCT application from the first Australian
          provisional patent application.
        </li>
        <li>
          Applicant entered the national phase at around 30-months from the
          filing date of the Australian provisional application in a number of
          PCT member countries including the USA, Japan, Europe and Australia.
        </li>
      </ol>
      The applicant has subsequently grown and expanded and continues to develop
      new IP and take steps to protect its IP around the world.
      <hr />
      <h3 id="patent-attorney">Patent Attorney</h3>
      <p>
        A <Link href="/patent-attorney">patent attorney</Link> is a scientist or
        engineer that has legal training in patents, including in drafting
        patent specifications which need to describe the full technical details
        of inventions. In Australia a patent attorney must be registered with
        the Professional Standards Board for Patent &amp; Trade Mark Attorneys
        and can only practice in technologies in which they have studied or in
        which they have acquired experience. The Patents Act 1990 defines Patent
        Attorneys in Chapter 20 and in Part 1—Registration, privileges and
        professional conduct of a patent attorney and in Part 2—Offences if Part
        1 is not followed. Further in Section 227A of the Professional Standards
        Board for Patent and Trade Marks Attorneys, the definition of a patent
        attorney is elaborated. Therefore patent attorneys must follow strict
        professional standards and are officially given the following privileges
        by Section 200 of the Patents Act 1990:
      </p>
      <ol>
        <li>
          A registered patent attorney:
          <ul>
            <li>
              is entitled to prepare all documents, transact all business and
              conduct all proceedings for the purposes of this Act; and
            </li>
            <li>has such other rights and privileges as are prescribed.</li>
          </ul>
        </li>
        <li>
          A communication record or document made for the dominant purpose of a
          registered patent attorney providing intellectual property advice to a
          client is privileged in the same way, and to the same extent, as a
          communication made for the dominant purpose of a legal practitioner
          providing legal advice to a client.
        </li>
      </ol>
      An example of why it is important to engage a patent attorney is in
      defining the best scope of monopoly for your invention in your patent
      claims. Your patent claims needs to at least match the scope of your
      disclosure if not define a broader invention. Say for example, your
      invention is: &ldquo;the use of a flashing light on a vehicle in order to
      indicate to the surrounding public that an emergency situation has
      occurred and to allow other vehicles to pass.&rdquo; Now let&apos;s assume
      that this is novel idea and that the way you enact your invention is by:
      <ul>
        <li>
          The use of an incandescent light and an on/off switch to allow the
          driver to create a flashing light effect.
        </li>
      </ul>
      However, you may not have considered other concepts for mechanisms that
      could be used, such as:
      <ul>
        <li>
          The use of a light on one side of a carousel that is configured to
          provide intermittent light to a viewer located on the other side of
          the carousel.
        </li>
        <li>
          The use of a fixed light but using a moving curtain means, such as a
          metal slide with a cut-out, where the curtain means moves laterally
          across the light to reveal or hide the light, thereby providing a
          flashing light effect;
        </li>
        <li>
          The use of light source with electronic switching, which controls the
          turning on and off of the light.
        </li>
      </ul>
      An Australian patent attorney must be technology aware, legally aware and
      skilful in drafting patent claims defining your invention. The definition
      of your invention must be supported by a description of various
      embodiments of the invention to support your patent claims. It is
      therefore important to work with your patent attorney to review and assess
      different versions of your invention, so that you can make a full
      disclosure and achieve as wide a monopoly as possible, by justifying your
      monopoly claim with a wide range of examples.
      <hr />
      <h3 id="patent-cooperation-treaty">Patent Cooperation Treaty (PCT)</h3>
      <p>
        An international patent law treaty that provides a uniform filing
        procedure for gaining patent protection across the entirety of the
        member states. The Patent Cooperation Treaty was signed in 1970, and
        binds the 148 contracting states to a unified system of international
        patent filing. In order to gain patent protection in a variety of
        countries of interest, a Patent Cooperation Treaty International Patent
        Application (PCT) can be filed. A PCT is filed with the World
        Intellectual Property Organisation (WIPO), who will then conduct an
        International Search and Written Opinion on the patentability of the
        invention. Prior to this search of the PCT contracting states, an
        Intellectual Preliminary Examination can be conducted. This examination
        will provide a further opinion on the international patentability of
        your application. It is important to note that PCT applications do not
        result in the granting of an international patent, as there is no such
        thing as an international patent. A{' '}
        <Link href="/pct-patent">PCT application</Link> will, however, determine
        a filing date in all of the member states, and facilitate a smooth
        transition into the separate{' '}
        <Link href="/national-phase-patent">National Patent Application</Link>{' '}
        phase.
      </p>
      <hr />
      <h3 id="patent-enforcement">Patent Enforcement</h3>
      <p>
        Patent enforcement is when a patent owner exercises their legal patent
        rights against another person or entity who are perceived as infringing
        the patent. Patent rights provide a patent owner with the exclusive
        right to exploit a claimed invention. When another person or entity
        exploits the claimed invention without the authority of the patent owner
        there is an answerable case for infringement of the patent. The patent
        owner may instigate court proceedings against the infringer; thereby
        enforcing the patent rights.
      </p>
      <hr />
      <h3 id="patent-firm">Patent Firm</h3>
      <p>
        A patent firm is a firm that provides the professional services of a
        registered patent attorney in relation to intellectual property rights.
        A patent firm offers professional intellectual property services to its
        clients. The professional advice and assistance from a patent attorney
        is important for a client to understand their position with respect to
        intellectual property rights and seeking effective protection for
        registered intellectual property rights, such as patents, trade marks
        and registered designs.
      </p>
      <hr />
      <h3 id="patent-in-china">Patent in China</h3>
      <p>
        A patent in China will give the patent applicant(s) enforceable monopoly
        rights to their invention within China to discourage and prevent third
        parties from making, selling or importing infringing products within
        China. There has historically been much debate over the value of seeking
        patent registration in China due to the perception that Chinese
        manufacturer&apos;s and entrepreneurs do not value or even recognise the
        intellectual property rights of others. However, due to a concerted
        programme by the Chinese government including the establishment of
        specialised patent courts, there has been a marked shift in the value
        that Chinese business people, and especially the courts, place on the
        intellectual property rights of others within China. This is seen by a
        large increase in intellectual property infringement cases between
        internal Chinese parties and the success rates of foreign owned
        enterprises succeeding against Chinese parties in the Chinese courts,
        with statistical evidence indicating that foreign parties are succeeding
        in the courts, either as a rights holder or infringer, against the
        Chinese party (in popular jurisdiction such as Beijing or Shanghai, the
        foreign party is successful in about 80% of all patent infringement
        lawsuits). Largely due to this increased perception of the value of
        patent rights, China outstripped even the United States in recording the
        largest number of filed patent applications in 2011: i.e. 526,412
        invention patent applications were filed in China compared with 503,582
        patent applications in the United States. Of these applications, nearly
        80% of Chinese patent applications were filed by Chinese applicants,
        whereas in the US, just shy of 50% of US applications were filed by
        domestic parties. Accordingly, China is rapidly becoming an important
        jurisdiction to consider in any sophisticated foreign filing programme
        for applicants seeking patent protection for their ideas
        internationally.
      </p>
      <hr />
      <h3 id="patent-in-usa">Patent in USA</h3>
      <p>
        To patent in the USA can mean either to file a patent application in the
        United States or to achieved a patent issued in the United States (that
        is, an enforceable legal right), nor does this phrase differentiate
        between a utility patent or a design patent. The United States patent
        system is broadly similar to patent systems in other countries in that
        it provides for issuance of patents for ideas that are new, useful and
        non-obvious. The patent system is administered by the USPTO (United
        States Patent and Trademark Office). The most recent patent legislation
        to pass in the United States is the{' '}
        <em>Leahy-Smith America Invents Act</em> which came into effect on 16
        March 2013. The Act switched the US system from a &ldquo;first to
        invent&rdquo; system to a &ldquo;first inventor to file&rdquo; system,
        eliminated interference proceedings (essentially ownership dispute
        proceedings) and introduced post-grant opposition. Some differences in
        terminology under US and Australian patent law are tabulated below:
      </p>
      <ul>
        <li>Registered Design (Australia) vs Design Patent (USA)</li>
        <li>Grant (Australia) vs Issuance (USA)</li>
      </ul>
      <hr />
      <h3 id="patent-internationally">Patent Internationally</h3>
      <p>
        The process by which patent applications are filed in individual
        countries or territories while claiming priority to an earlier priority
        patent application or patent applications. An international or{' '}
        <Link href="/pct-patent">PCT patent application</Link> is often{' '}
        <em>incorrectly</em> referred to as a &ldquo;worldwide patent&rdquo;.
        Initially, a priority establishing patent application is filed in your
        local country. Within a year of this date, the applicant needs to file
        patent applications at the patent offices of the countries that they
        want patent protection in, or a file a PCT patent application (also
        called an international patent application). If the applicant has filed
        a PCT patent application, this extends the deadline for filing patent
        applications in overseas countries by a further 18 or 19 months,
        depending on the country. The set of patents that relate to the subject
        matter that was initially disclosed in the priority applications are
        called &lsquo;equivalent&rsquo; patents or patent
        &lsquo;families&rsquo;. An applicant can file an Australian provisional
        patent application first, which gives them 12 months in which to file
        overseas patent applications or an international patent application. By
        the end of the 12 months, an applicant can file a US patent application
        that claims priority back to their Australian provisional patent
        application. The filing date of the Australian provisional patent
        application is recognised in the US as if a provisional patent
        application had been filed there.
      </p>
      <hr />
      <h3 id="patent-lawyer">Patent Lawyer</h3>
      <p>
        A patent lawyer is a common term used in jurisdictions such as the US to
        describe a patent specialist working in the specialty field of law
        governing intellectual property. A patent lawyer is involved in all
        aspects of law covering patents and intellectual property rights of
        inventors. A patent lawyer also provides legal representation in cases
        of patent infringement, challenges to the license of an invention and
        appeals to the USPTO. Prospective patent lawyers typically earn either a
        4-year degree in a field of science like chemistry, biology or physics
        or a technical degree in{' '}
        <Link href="/specialisations/electrical-engineering-patents">
          electrical
        </Link>
        , <Link href="/specialisations/construction-patents">civil</Link>,{' '}
        <Link href="/specialisations/mechanical-patents">mechanical</Link> or{' '}
        <Link href="/specialisations/pharmaceutical-patents">
          biomedical engineering
        </Link>
        . Patent lawyers are required to complete a law program from an
        accredited law school and pass a state bar exam. If a patent lawyer
        would like to represent inventors in front of the USPTO, then he or she
        must sit for and pass the USPTO licensing exam, which is commonly known
        as the &apos;patent bar&apos;. In cases where a lawyer has attained five
        years of continuous service with USPTO, the licensing exam is waived.
      </p>
      <hr />
      <h3 id="patent-litigation">Patent Litigation</h3>
      <p>
        <Link href="/patent-litigation">Patent litigation</Link> is the process
        of enforcing your rights as a patent owner in the court system. Patent
        Litigation is the process of enforcing your rights as a patent owner in
        the court system against a competitor or other person that may be
        infringing your patent rights by, for example, selling or using your
        patented invention and is commonly known as suing another party for
        patent infringement. In many countries the use must be commercial or
        have a commercial purpose to constitute patent infringement. Patent
        litigation is often an expensive procedure requiring the services of a
        patent attorney and a solicitor, and most often also a barrister for
        each party to the litigation action including the patent owner and the
        respondent (the potential infringer). A particularly notable example of
        recent patent litigation include the much-publicised litigation between
        US company Apple Inc. and South Korea-based Samsung Electronics Co.
        Limited regarding potential copying of Apple iPhones and tablet devices
        by Samsung. Apple commenced litigation against Samsung in early 2011,
        despite already being engaged in existing litigation with Motorola
        Mobility. By August 2011 Apple and Samsung were involved in 19 ongoing
        cases in nine countries, expanding to 10 countries in October that year.
        Apple&apos;s aggressive strategy of multinational litigation of
        technology patents became known as the &ldquo;smartphone patent
        wars&rdquo; which, at its height involved smartphone manufacturers
        including Sony, Google, Apple Inc., Samsung, Microsoft, Nokia, Motorola,
        Xiaomi, and HTC, among others. By July 2012, the litigation actions
        between Apple and Samsung had increased to more the 50 separate actions
        worldwide. The patents asserted by Apple largely related to a series of
        patents filed in 2007 around the release of the first Apple iPhone. In
        response Samsung counter-sued accusing Apple of infringing a number of
        Samsung-held patents relating to mobile-telecommunications technologies.
        Despite small wins by parties in various litigation actions, no clear
        winner emerged and Apple and Samsung finally agreed to settle out of
        court on undisclosed terms in July/August 2014 simultaneously abandoning
        patent litigation actions against each other in 9 countries outside of
        the United States including South Korea, Japan, Australia, the
        Netherlands, Germany, France, Italy, Spain and the U.K. Patent
        litigation continued in the United States and in 2015 Apple prevailed at
        the US district court on trade dress, design patent and utility patent
        claims, with a total award of almost a billion dollars. On appeal, the
        US Federal Circuit court reversed the earlier judgement regarding trade
        dress but affirmed on the design and utility patents. Samsung is still
        fighting in the US to have these decisions overturned, with Samsung
        achieving success in May 2015 in having a damages award of $380 million
        dollars against them overturned and the issues in that judgement to be
        re-tried (for a third time) and also in August 2015 in possibly having a
        key Apple Design Patent invalidated through a re-examination procedure
        with the US Patent Office. At present (August 2015), further appeals by
        Samsung against adverse judgements against them are still ongoing…
      </p>
      <hr />
      <h3 id="patent-of-addition">Patent of Addition</h3>
      <p>
        The filing of an additional patent that is used to protect modifications
        or improvements to intellectual property that is currently patented. A
        patent of addition cannot exist on its own. In order to file a patent of
        addition the applicant must have an existing (parent) patent. This
        implies that an application for a patent of addition can not be made
        unless you already have an existing patent, or the parent patents
        application has already be examined. While patents of addition are rare,
        the underlying principle surrounding their acceptance is that an
        applicant should be able to protect new features that have been
        developed for their current patents. So long as the new features are
        obvious, and do not improperly extend the patentees rights, they are
        accepted. Furthermore, a patent of addition can be used to alleviate
        issues that may arise when two inventions are different, but too similar
        to be individually patented because of issues associated with prior art.
        The rarity of patent of additions may be somewhat accounted to their
        complexity. It is therefore important to consult an experienced patent
        attorney as a guide for prospective applicants.
      </p>
      <hr />
      <h3 id="patent-office">Patent Office</h3>
      <p>
        Each country has their patent law which provide monopoly protection for
        new apparatuses and systems. Most of the times the patent law is
        administered by a government office known as the Patent Office. Also as
        well as patents the Patent Office usually controls Design Registrations
        covering the look of commercial articles and Trademarks covering the
        commercial name used to market the product or system. It also can cover
        Plant Breeder&apos;s Rights and Circuit Layout protection. In the spirit
        of entities relating to innovation and to have a good marketing presence
        as well as show the range of Intellectual Property they administer the
        Patent Office often has another overarching name.
      </p>
      <ul>
        <li>
          In Australia the Patent Office is known as{' '}
          <Link href="http://www.ipaustralia.gov.au/">IP Australia</Link>
        </li>
        <li>
          In the US the Patent Office is the{' '}
          <Link href="http://www.uspto.gov/">
            United States Patent and Trade Mark Office (USPTO)
          </Link>
        </li>
        <li>
          In Europe it is the{' '}
          <Link href="http://www.espacenet.com/">
            European Patent Office (EPO)
          </Link>
        </li>
        <li>
          In China it is the{' '}
          <Link href="https://www.cnipa.gov.cn/">
            China National Intellectual Property Administration (CNIPA)
          </Link>
        </li>
        <li>
          In New Zealand it is the{' '}
          <Link href="https://www.iponz.govt.nz/">
            Intellectual Property Office of New Zealand (IPONZ)
          </Link>
        </li>
      </ul>
      In Australia, the Patents Act 1990 creates the Patent Office in Chapter 21
      including Sections 205 to 207 which state:
      <strong>205 Patent Office and sub-offices</strong>
      (1) For the purposes of this Act, there is to be an office called the
      Patent Office. (2) The Commissioner may establish one or more sub-offices
      of the Patent Office as the Commissioner considers appropriate. (3) The
      Commissioner may abolish any such sub-offices.{' '}
      <strong>206 Patent Office seal</strong>
      There is to be a seal of the Patent Office and impressions of the seal
      must be judicially noticed.
      <strong>207 Commissioner of Patents</strong> (1) There is to be a
      Commissioner of Patents. (2) The Commissioner has such powers and
      functions as are conferred on him or her under this Act or any other Act.
      This title of Patent Office is important and protected under Section 177
      as follows:
      <strong>177 False representations about the Patent Office</strong>
      (1) A person must not use, in connection with his or her business, words
      that would reasonably lead to the belief that his or her office is, or is
      officially connected with, the Patent Office. Penalty: 30 penalty units.
      (2) Without limiting subsection (1), a person who: (a) places, or allows
      to be placed, on the building in which his or her office is situated; or
      (b) uses when advertising his or her office or business; or (c) places on
      a document, as a description of his or her office or business; the words
      &ldquo;Patent Office&rdquo; or &ldquo;Office for obtaining patents&rdquo;,
      or words of similar import, whether alone or together with other words, is
      guilty of an offence against that subsection. The Patent Office has being
      established under this Act to perform three major functions:
      <ol>
        <li>
          To be a filing office to receive applications for patents including
          full specifications of inventions and record and issue filing numbers
          and filing dates of that application so that it is absolutely clear
          and unchallengeable what forms the patent application and when it was
          filed.
        </li>
        <li>
          Under Chapter 9 and 9A of the Patents Act to undertake a review of
          patent applications in examination to determine if the application
          fulfils the requirements of being a granted patent. Three main tests
          are:
          <ol>
            <li>
              whether the new matter is allowable subject matter under the rules
              of &ldquo;manner of manufacture&rdquo;
            </li>
            <li>
              whether the new system or apparatus is novel compared with any
              published disclosure anywhere in the world;
            </li>
            <li>
              whether the difference to known systems or apparatuses is
              inventive or merely an obvious variation.
            </li>
          </ol>
        </li>
        <li>
          To fulfil Section 186 of the Patents Act by maintaining a Register of
          granted patents at the Patent Office. The Register is to contain a
          part dealing with standard patents and a part dealing with innovation
          patents.
        </li>
      </ol>
      The Patent Office in each country fits into their particular legal system
      and administers the patent law and other intellectual property rights
      according to their legislation and according to the treaties that they are
      signatory. For example the Paris Convention has over 190 country
      signatories and allows a 12 month spacing from your initial Australian
      application to filing in any one or more of those 190 signatory countries.
      However Patent Offices also undertake a number of other duties including:
      <ul>
        <li>
          Consultation with users in Australia to improve effectiveness of the
          Patent system
        </li>
        <li>
          Consultation with legal bodies in review of the Courts interpretation
          of the Patent law;
        </li>
        <li>
          Consultation with government bodies and interested parties to assist
          in creating or modifying or effecting the legislation that enacts the
          intellectual property rights.
        </li>
        <li>
          Consultation with international bodies and foreign patent offices and
          other foreign national bodies to consider creating, modifying or
          enacting bilateral, multilateral or international treaties that aim to
          streamline and make effective procedures and rights for users of
          patent systems in other countries.
        </li>
      </ul>
      <hr />
      <h3 id="patent-pending">Patent Pending</h3>
      <p>
        The status of a patent application from the time it is originally filed
        until the time the patent is granted. Upon filing a provisional
        application an invention can be classified as a &lsquo;patent
        pending&rsquo;. This is a crucial point in the patent application
        process. If a provisional patent application has been filed and
        adequately describes the invention, the patent will be classified as a
        &lsquo;patent pending&rsquo;. The holder of a pending patent will gain
        priority in the patent review process. Australia operates on a first to
        file basis in relation to patents. It is therefore important that once
        an invention has been drafted, the provisional specification is lodged
        as soon as practically possible. Once the provisional specification has
        been lodged, the holder is provided 12 months to refine and develop the
        invention before committing to file a patent application. This is
        therefore a crucial point in the application process as once a patent is
        classified as pending; the holder has secured initial protection for
        their invention.
      </p>
      <hr />
      <h3 id="patent-protection">Patent Protection</h3>
      <p>
        Patent protection relates to the rights of exclusivity given to the
        holder of a patent, in exchange for the disclosure of their new and
        inventive technology to the public. Once a patent application has been
        filed, and has met all of the requirements that an invention must meet
        in order to be patentable, then the patent application is granted as a
        patent. Only once a patent is granted does it have patent rights. Patent
        rights are the right of the patent holder or patentee to exclude other
        people from exploiting the invention without their permission. For
        example, the patentee can prevent others from making, using, exercising,
        selling, offering for sale, or importing infringing articles, or
        infringing processes. Baxter IP regularly acts for clients to send a
        cease and desist letters to people that are selling articles in
        Australia that infringe patents held by our clients. Baxter IP also acts
        for clients to file patent applications, and to ensure that ensure that
        their patent applications meet the requirements in order to be granted.
      </p>
      <hr />
      <h3 id="patent-registration">Patent Registration</h3>
      <p>
        Patent Registration is the broad term referring generally to the
        granting (or sealing) of a patent application, and loosely relates to
        the registering of the patent details in the official record of granted
        patents held in the patent office of the jurisdiction where the patent
        has been allowed (accepted) and subsequently granted as an enforceable
        patent right. While &ldquo;Patent Registration&rdquo; typically refers
        to the act of granting a patent right in a particular jurisdiction,
        patent registration can also be used to refer to the entire process of
        obtaining grant of the patent from initial filing of a patent
        application through to finally securing a granted patent. For example,
        an applicant may be seeking patent registration for an invention and
        this process commences with the filing of a patent application (usually
        a provisional patent application). In some countries, for example Hong
        Kong, securing patent rights in that county may simply be a registration
        in the traditional sense where a patent application or granted patent
        has been achieved in one country and the patent applicant is merely
        extending, or &lsquo;registering&rsquo; that granted patent in a related
        Jurisdiction. The patent registration process can combine all elements
        of the application/examination/acceptance/grant procedure in securing
        granted patent rights in a particular jurisdiction, but more typically
        simply refers to the final step of the granting of the application. In
        some countries which do not have the resources for a completely
        independent patent system, for example, Hong Kong, the local patent
        procedure in that jurisdiction simply recognises granted patent rights
        achieved in either the United Kingdom or China, thus the act of securing
        corresponding patent rights in Hong Kong is merely a process of
        registering the applicant&apos;s desire that the patent protection
        granted elsewhere is also to be deemed enforceable in Hong Kong, but
        without requiring a full application/examination/acceptance procedure
        with the Hong Kong patent office (which does not have the resources for
        a completely independent patent system).
      </p>
      <hr />
      <h3 id="patent-search">Patent Search</h3>
      <p>
        Use of a patent search engine to identify whether or not the invention
        is new and subsequently patentable. There are a variety of patent search
        tools that can be used to determine whether or not an invention can be
        protected or if it infringes a patent that is already in existence. A
        commonly used search method in Australia is a &lsquo;novelty
        search&rsquo;, which will provide an indication of whether a patent
        application will be allowed by IP Australia. A patent attorney can
        direct IP Australia to conduct this novelty search by carrying out an
        International Type Search (IPS). The information obtained from this
        search can be used to identity whether or not the invention is new. As
        this is the second step in the patent application process, this
        information can also be used to draft a more focused{' '}
        <Link href="/pct-patent">
          Patent Cooperation Treaty (PCT) International Patent Application
        </Link>
        . The patent search stage is a critical component of the patent
        application process as it may help to determine the validity of the
        patent application.
      </p>
      <hr />
      <h3 id="patent-searcher">Patent Searcher</h3>
      <p>
        A patent searcher is a person that undertakes searches to see if your
        invention is likely to pass the test of being novel compared to any
        prior publication in the world. That is, a patent searcher will look to
        see whether, in their opinion, all or most of the features of your
        invention are disclosed in a prior published document. A patent searcher
        is often a scientist or engineer that has experience in patents. Often
        they are experts in the use of computer based patent database search
        engines. It is valuable for a patent attorney to be involved in patent
        searching as they can make use of their expertise in the relevant
        technology and in patent law as well as their experience in drafting
        patent specifications to be able to interpret the results and advise on
        the likely patentability of your invention. A patent attorney is fully
        qualified to undertake patent searching.
      </p>
      <p>
        The Australian Patents Act 1990 in Section 18 defines four tests to be
        met for a patentable invention to exist. The second test is that:
        subject to subsection (2), an invention is a patentable invention for
        the purposes of a standard patent if the invention, so far as claimed in
        any claim: (b) when compared with the prior art base as it existed
        before the priority date of that claim: (i) is novel; and (ii) involves
        an inventive step; prior art base means: information in a document that
        is publicly available, whether in or out of Australia (i.e. worldwide);
        and information contained in a published specification filed in respect
        of a complete application if: (A) the information is, or were to be, the
        subject of a claim of the specification, the claim has, or would have, a
        priority date earlier than that of the claim under consideration; and
        (B) the specification was published on or after the priority date of the
        claim under consideration; and (C) the information was contained in the
        specification on its filing date.
      </p>
      <p>
        Note: For the meaning of document see section 2B of the Acts
        Interpretation Act 1901.
      </p>
      <p>
        Here is an example of the importance of selecting a high quality patent
        searcher: An inventor has created a new food processor which is able to
        pulverise food to such a fine degree that it produces a liquid with no
        remaining pulp. The patent searcher could use a patent database search
        engine to find reference to all food processors and give you a large
        list of outputs. This is great to see the competition and in effect
        provides the &ldquo;patent landscape&rdquo; or &ldquo;state of the
        art&rdquo;. However it does not answer the question of whether the
        inventor&apos;s invention is a patentable invention and overcomes the
        novelty test. The patent searcher might further proceed to look for all
        food processors that pulverise or provide liquid only outputs. Such a
        search could locate some relevant prior art but again will not give a
        result that can be relied on to provide an indication of the
        patentability of the invention. In contrast, a high quality patent
        searcher might use the following approach:
      </p>
      <ol>
        <li>
          first review your invention to determine the essential features of the
          invention;
        </li>
        <li>
          determine more detailed secondary features that are also important
          elements of the invention;
        </li>
        <li>
          undertake searches of the more precisely defined and patent relevant
          essential features and detailed secondary features;
        </li>
        <li>
          make use of the International Patent Classification (IPC) and the
          Cooperative Patent Classification (CPC) system. The CPC system has
          been in force from 1 January 2013 and is a bilateral system, now used
          by most countries, which has been jointly developed by the European
          Patent Office (EPO) and the US Patent and Trademark Office (USPTO)
          combining the best classification practices of the two offices. It
          allows searchers to retrieve relevant prior art efficiently. While the
          IPC has 70,000 entries, the CPC has more than 250 000, making it much
          more precise tool;
        </li>
        <li>
          in accordance with patent law consider information that is allowed to
          be derived from a combination of documents.
        </li>
      </ol>
      <p>
        Having a new product that is easily marketable is not a definition of a
        patentable invention. Therefore, searching for marketable improvements
        or for resulting benefits of products is not a search that will help
        determine patentability. Instead it is necessary to determine the
        essential features of the invention that provide that result. This could
        be, in this case:
      </p>
      <ol>
        <li>cutting blades shaped to form cyclonic action;</li>
        <li>
          blades and scrapers to ensure heavier material is flung outwards by
          centrifugal forces such that it is redirected back to the blades;
        </li>
        <li>the speed of rotation of blades;</li>
        <li>the shaping of the container; or</li>
        <li>
          the limitations of sizing of the container due to the effects of fluid
          dynamics.
        </li>
      </ol>
      <p>
        A patent search by a patent attorney can be highly focused. It will be
        able to provide a search result which provides an indication of the
        novelty of the invention. The patent attorney must be technology aware,
        legally aware of the requirements, and skilful in drafting the claims
        defining your invention. The definition of the invention must be
        supported by the description of the embodiments of the invention to
        provide clear limits on the scope of monopoly. It is therefore important
        to work with your patent attorney to review and assess different
        versions of your invention, so that you can make a full disclosure and
        achieve as wide a monopoly as possible, with a justifying wide range of
        examples.
      </p>
      <hr />
      <h3 id="patent-valuation">Patent Valuation</h3>
      <p>
        The allocation of a monetary value to a patent, or other form of
        intellectual property. Patents and other forms of intellectual property
        are evaluated using one or more of several different methods, depending
        on what the specific scenario is. The value of intellectual property can
        change depending on who its owner is, and what they intend doing with
        it. Intellectual property that is more readily able to be evaluated is
        intellectual property that already has revenue streams associated with
        it. For example, a patented product may already have revenue from sales
        Patents and other forms of intellectual property can be evaluated for a
        wide variety of reasons. One reason may be for establishing what others
        need to invest to match the value of the patent. For example, parties
        may want to know what the value of a patent is that one party is
        bringing to a joint venture, so that the other parties can bring items
        of similar value to the venture. Another reason may be to establish tax
        liability. Another reason may be to establish what tax benefits may be
        obtained from depreciation of a valued asset, or to establish a base
        value for capital gains tax. The valuation of a patent and other
        intellectual property is typically done using a wide variety of
        methodologies, including:
      </p>
      <ul>
        <li>cost based valuation processes</li>
        <li>market based valuation processes</li>
        <li>income based valuation processes</li>
        <li>supplementing procedures and other complex processes</li>
      </ul>
      In 2014, one of Baxter IP clients wanted a valuation of their business,
      which was centred on their patent, for presentation to angel investors as
      a justification for the investment that they wanted in return for the
      shareholding offered. We valued their business and they got the investment
      that they required from the investors. Their business is now expanding
      internationally.
      <hr />
      <h3 id="patentable">Patentable</h3>
      <p>
        Patentable material is subject matter that satisfies the legal
        requirements for patent protection in a particular jurisdiction. If a
        particular subject matter is deemed to be &lsquo;patentable&rsquo;, it
        may become a form of intellectual property right, which is commonly
        known as a patent. Historically speaking there has always been a divide
        between inventions that are patentable and those that are not. This is
        known as the method of manufacture. Material that is deemed patentable
        includes certain; inventions, substances, methods or processes. Material
        may be identified as being patentable, but will not become a patented
        until IP Australia has assessed the application based on their set
        criteria. Once this criterion is satisfied the patent will be granted,
        and the subject matter will be transformed from patentable material to
        patented intellectual property.
      </p>
      <hr />
      <h3 id="physics-patent">Physics Patent</h3>
      <p>
        <Link href="/specialisations/physics-and-optical-patents">
          Physics patents
        </Link>{' '}
        are patents having claims directed to a physics principle or to a device
        relying on a physics principle. For example, a physics patent may relate
        to a device relying on such principles as nuclear physics (e.g. nuclear
        reactors), optical physics (e.g. lasers), electromagnetism etc. A
        physics patent is the granted form of a physics patent application which
        relates to a technological solution relying on one or more fundamental
        principles underpinned by physics and could apply to devices in an
        extremely large field &ndash; as large as the field of physics itself
        &ndash; and generally requires the realisation of a commercial advantage
        out of a complex or abstract concept. Physics patents may relate to any
        field ranging from nuclear technology, electro-optical systems,
        nanotechnology or quantum mechanics through to mechanical devices
        relying on the motion of bodies under the action of forces or medical
        devices for diagnosis or treatment of patients based on fundamental
        physics principles. Due to the extremely broad nature of physics, and
        that it is practically impossible for any one person to be expert across
        all physics, physics patent applications should be prepared and filed by
        a patent attorney with an explicit technical background in the area of
        physics to which the invention relates due to the level of
        specialisation required to adequately understand such technology.
      </p>
      <hr />
      <h3 id="plant-breeders-rights">Plant Breeders Rights (PBR)</h3>
      <p>
        The provision of exclusive control over the propagating and harvested
        material of a newly developed plant variety, seed or organic material. A
        Plant Breeders Right can be used to protect new varieties of plants that
        are distinct in nature, uniform and stable. This owner of a plant
        breeders right is given exclusive control over the propagating and
        harvested material of the plant, and thus owns commercial rights to its
        production, sale and distribution. The aim of the{' '}
        <em>Plant Breeders Rights Act 1994</em> (Cth) is to encourage innovation
        in the plant breeders industry, and encourage investment in its
        development. By obtaining a plant breeders right, the holder is able to
        gain compensation for their efforts in developing the new plant. The
        application process for obtaining a plant breeders right is simpler than
        obtaining a patent. The first step is to file a part 1 application with
        IP Australia. The results of this application will determine the
        validity of the plant, and if successful will provide provisional plant
        breeders rights to the holder. The next step is to file a Description of
        Variety and have a substantive and physical examination of the plant.
        This will determine the distinctive features of the new variety, and
        determine the validity of the application. There is then a six-month
        opposition period where a photo and description of the plant is posted
        in the Plant Varieties Journal. Once these requirements have been
        satisfied and the opposition period has passed, the Plant Breeders Right
        may be granted. To have a fully registered Plant Breeders Right will
        take on average 2.5 years. The Australian Wheat Growers association uses
        an endpoint royalty system to collect royalties from licensees of Plant
        Breeders Rights that they hold.
      </p>
      <hr />
      <h3 id="prior-art">Prior Art</h3>
      <p>
        Matter that has been exposed to the public domain and as a result is not
        patentable. Prior art does not require a physical existence, or have to
        be commercially available. The mere publication of any previous
        description of an invention is enough to satisfy its requirements. Many
        ideas or inventions are never commercialised, and yet there will be
        evidence of them somewhere in the public domain. This is enough to
        satisfy the notion of prior art. The implication of this is that if
        prior art exists, the inventive step required in a patent application
        will not be satisfied, and as a result a patent will not be granted. The
        potential existence of prior art highlights the importance of the
        nominal search phase of the patent application process. Extensive
        research of existing inventions that may contain similarity to your
        invention is therefore required. This will reduce the risk for potential
        patent holders of wasting time and money on a patent application that
        cannot be granted due to the existence of prior art.
      </p>
      <hr />
      <h3 id="priority-date">Priority Date</h3>
      <p>
        The date that the{' '}
        <Link href="/provisional-patents">provisional patent application</Link>{' '}
        is filed, this is the date from which an invention will be judged as
        being new or in breach of prior art. The priority date for a patent
        application is established in stage one of the patent application
        process after a provisional patent application has been lodged with IP
        Australia. This date is considered to be the effective date of filing
        for the examination of the inventive step and non-obviousness of the
        patent application. The priority date is crucial as it determines the
        time limit for when prior art will be considered. In other words, any
        material that satisfies the criteria of prior art, but is created after
        the priority date of an application, will not be taken into account. The
        result of this is that only information that has been made publicly
        available up until the priority date can be seen as prior art. The
        priority date also sets a time limit for the provisional application
        process, whereby all refinements to this application must be made within
        12 months of the priority date.
      </p>
      <hr />
      <h3 id="product-design">Product Design</h3>
      <p>
        Product design is the process of defining, creating and/or refining a
        product by a business to be offered to its customers. Product design
        broadly covers all stages of development of a product from
        conceptualisation through to realisation of a marketable and saleable
        item. There are various elements of product design focussing on
        different elements to the final product. These elements usually include
        some components of brainstorming of ideas be a group of people focussing
        on solving a particular problem; technical drawing and/or prototyping to
        bring the concepts of the brainstorming session into a tangible form;
        refining the design of the product for say, greater usability or to
        improve the ergonomic features of the product; and bringing the product
        into a final form for sale to consumers. However, this is often not the
        end of the product design process &ndash; the design may be constantly
        varied and improved as a result of feedback from the market or the
        consumers themselves. The product design process has benefited greatly
        in recent years with the improved accessibility to 3D printing
        techniques enabling rapid turnaround of subsequent product iterations.
        Often it is during the early product design stages of brainstorming and
        conceptualisation that patentable products are conceived as a novel
        means for solving a particular problem. There are many great examples of
        good product design that are the result of many years of development and
        refinement. Particularly notable is the iPhone by Apple Inc. which, when
        it was first released in the United States in June 2007, started a
        revolution in the personal mobile device industry and effectively
        starting the smartphone movement. The iPhone concept was originally
        conceived of by Steve Jobs in 2005 as a method of interacting with a
        computer using a multi-touch screen &ndash; effectively making the
        keyboard or individual letter keys (e.g. on Blackberry devices at the
        time) obsolete. The initial designs were carried out in secret within
        Apple Inc. and when the first prototype was shown to Steve, he conceived
        of the idea to integrate it into a mobile phone which was announced in
        his keynote address at the Macworld conference as on January 9 2007 with
        the words: &ldquo;I have been looking forward to this for two and a half
        years …. today, Apple is going to reinvent the phone.&rdquo; The iPhone
        design sparked a massive push by existing mobile phone developers to try
        to &lsquo;catch up&rsquo; to the Apple iPhone resulting in the current
        landscape of a variety of smartphone devices by many manufacturers, most
        of which have - either directly or indirectly - been in some form of
        litigation with Apple, Inc. over copying of the design of the iPhone
        hardware and software enabling the user interactions with the device.
        <Link href="https://en.wikipedia.org/wiki/Time_(magazine)">
          Time
        </Link>{' '}
        magazine named the iPhone the Invention of the Year in 2007.
      </p>
      <hr />
      <h3 id="provisional-patent-application">
        Provisional Patent Application
      </h3>
      <p>
        The initial stage of the patent application process that sets the
        priority date for disclosure of the inventions details. The{' '}
        <Link href="/provisional-patents">provisional patent application</Link>{' '}
        is the first stage in the patent application process. The provisional
        application is an invention specification, which is lodged with IP
        Australia that includes both:
      </p>
      <ol>
        <li>a description of various examples of an invention; and</li>
        <li>
          a claim, which defines the scope of legal protection that is desired
          from the patent.
        </li>
      </ol>
      Upon filing a provisional application an invention can be classified as a
      &lsquo;patent pending&rsquo;. This is a crucial point in the patent
      application process. A provisional patent application that adequately
      describes the invention will give the holder of the application priority
      in the patent review process. Australia operates on a first to file basis
      in relation to patents. It is therefore important that once an invention
      has been drafted the provisional specification is lodged as soon as
      practically possible. Once the provisional specification has been lodged,
      the holder is provided 12 months to refine and develop the invention
      before committing to filing a complete patent application.
      <hr />
      <h3 id="qualified-person">Qualified Person</h3>
      <p>
        An expert in a specific plant group who is accredited by IP Australia to
        certify applications for plant breeders rights. The primary role of a
        qualified person, in relation to plant breeder&apos;s rights, is to
        ensure that the applications for a plant breeder right are technically
        rigorous. Qualified persons oversee the comparative trial for a plant
        breeder right, and help to provide evidence that is clear, concise and
        useful. There are two categories of qualified persons. A
        consultant-qualified person is accredited to act as a consultant for
        plant breeder right applications conducting duties such as; comparative
        varieties, experimental design, statistical analysis, and preparation of
        the description of variety. A non-consultant qualified person is
        accredited to certify applications for which they are the breeder, owner
        or authorised agent of the potential plant breeder&apos;s right.
      </p>
      <hr />
      <h3 id="royalty">Royalty</h3>
      <p>
        A usage based payment made by the licensee to the licensor for the
        ongoing use of intellectual property. A royalty payment is a form of
        compensation that is paid to the owner of an intellectual property
        right, for the use of their intellectual property. There is a variety of
        compensation metrics that can be used in calculating the size of royalty
        payments. A commonly used method is to simply pay a portion of the
        proceeds from sales, which are related to an intellectual property
        right. Through this method of compensation licensees can purchase the
        right to; manufacture with, use, sell or advertise to sell a patented
        invention.
      </p>
      <hr />
      <h3 id="sealing">Sealing</h3>
      <p>
        This is the finalisation of a patent application, which involves the
        Commissioner of Patents authenticating the patent, after which the deed
        is sent to the owner. A patent is deemed to have been granted when the
        Commissioner of Patents marks the patent with the seal of the Australian
        Patent Office. For a standard patent, so long as there is no opposition,
        sealing occurs within six months of the patent being published in the
        Australian Official Journal of Patents.
      </p>
      <hr />
      <h3 id="software-patent">Software Patent</h3>
      <p>
        A <Link href="/specialisations/software-patents">software patent</Link>{' '}
        is a very broad ranging term that is normally used to describe a patent
        application, the intent of which is to protect a software process. In
        practice, however, software patent applications are often directed to
        specific computing devices, networked architectures or systems to
        attempt to avoid patentable subject matter objections. Patenting of
        software or computer programs per se is specifically excluded in some
        countries such as Europe, New Zealand and South Africa. Writing patent
        applications that are acceptable very much requires identification of a
        &lsquo;technical effect&rsquo;. A technical effect or technical
        engineering improvement may be, for example:
      </p>
      <ul>
        <li>Using less memory to store data</li>
        <li>Reducing bandwidth</li>
        <li>Transmitting data more efficiently</li>
        <li>Making less calls on a server</li>
        <li>Accelerating computational time</li>
        <li>
          Improving image processing (Research Corporation Technologies Inc. v.
          Microsoft Corp.)
        </li>
        <li>
          Increasing the range of a GPS device with a mathematical model (SiRF
          Technology v. International Trade Commission)
        </li>
        <li>
          Ideas rooted in a technological environment
          <ul>
            <li>Removing malicious code from an email</li>
            <li>
              A web page providing users with a composite web page containing
              product-related elements of a third party and visually perceptible
              elements of a host page, rather than redirecting the user to a
              third party page (DDR v. Hotels.com). This solves the business
              challenge of retaining website visitors, a problem unique to the
              Internet -e. there is no pen and paper or brick and mortar
              equivalent.
            </li>
          </ul>
        </li>
      </ul>
      Approaches that are advantageous in software patenting include
      differentiating how a solution differs from its closest &ldquo;real
      world&rdquo; equivalent (e.g. does the invention involve multiple devices
      or specialised devices that solve problems in a way for which there is no
      &ldquo;conventional&rdquo; parallel. Software has structures, data has
      structure. How do these structures contribute to an improvement in the
      operation of the computer or another technical field?
      <hr />
      <h3 id="standard-patent">Standard Patent</h3>
      <p>
        A set of exclusive rights that is granted to an inventor or assignee for
        twenty years in return for detailed public disclosure of the invention.
        A patent is a form of intellectual property right that can be granted
        for an invention, such as a device, substance, method or process. Once
        submitted, the invention must undergo examination to establish whether
        or not it is new to the world, inventive and useful. A patent can be
        used to exclude others from commercialising the patented invention
        without permission. This exclusion will last for the duration of the
        patents term. A standard patent differs from an innovation patent due to
        its duration and the significant level of inventiveness required. The
        standard patent terms are twenty years. While the patent application
        process is complex, in a simplified form, there are four steps that need
        to be followed. Stage one involves a{' '}
        <Link href="/provisional-patents">provisional patent application</Link>.
        This is to be followed by a novelty search,{' '}
        <Link href="/pct-patent">
          Patent Cooperation Treaty (PCT) International Patent Application
        </Link>
        , and a{' '}
        <Link href="/national-phase-patent">
          National Phase Patent Application
        </Link>
        . IP Australia will assess the application based on their set criteria,
        and if satisfied, the patent will be granted. Patent protection is a
        crucial component in developing an intangible idea with unknown value,
        into a twenty-year monopoly over the potential market for the invention.
        By protecting an invention, the holder of a patent has the ability to
        stop third parties from copying the idea, and passing off the invention
        as their own. This will enable to patent holder to recover research and
        development costs and gain a competitive edge in the market.
      </p>
      <hr />
      <h3 id="trade-mark">Trade Mark</h3>
      <p>
        A recognisable name, term, symbol or design that identifies a good or
        service, which is legally registered for use of a specific user.
        Obtaining a trade mark is a way of protecting recognisable features of
        name, term, symbol or design that are specific to your good or service.
        A trade mark is therefore a method of distinguishing the goods and
        services of one firm from those goods and services of others. It is
        important to distinguish between a registered and common law
        (unregistered) trade mark. A registered trade mark is one that satisfies
        the criteria of IP Australia, and is legally registered for use by a
        specific user. A common law trade mark is an unregistered trade mark
        that has been used to the extent that it is recognised as having
        distinguished the good or service provided by one entity from those
        provided by other entities. While this form of trade mark is
        unregistered, in certain circumstances the common law may prevent
        another entity from using the trade mark in a way that may be considered
        unfair. A trade mark is protected from other trade marks that are seen
        to be deceptively similar to one that is already in existence.
        Trademarks that are deceptively similar to another may deceive consumers
        into purchasing an unwanted product and damage a brands reputation.
        Trademark protection from deceptively similar trade marks therefore
        prevents competitors from using another entities reputation to further
        their own business operations. The unauthorised use of existing trade
        marks is known as brand piracy and could leave an individual and / or
        entity liable to legal action in regards to trade mark infringement. For
        those concerned with infringing on an existing trade mark, the
        Australian Trademark On-line Search System (ATMOSS) can be used. ATMOSS
        is a free online database provide by IP Australia that allows the user
        to engage in a comprehensive search of existing trade mark rights in
        Australia. ATMOSS can also be used to keep track of the progress of
        trade mark applications, and the status of trade marks that have been
        previously registered. McDonalds ® is a registered trade mark within the
        fast food industry. This protects McDonalds against having competitors
        copy their registered logo.
      </p>
      <hr />
      <h3 id="trade-mark-dilution">Trade Mark Dilution</h3>
      <p>
        Trade mark dilution occurs when a well-known trade mark loses value and
        uniqueness from incorrect use. There are laws in place, like the{' '}
        <em>Trade Marks Act 1995</em>, and the <em>Australian Consumer Law</em>{' '}
        (ACL) to protect the owners&rsquo; trade marks and also protect
        consumers from being misled when purchasing goods or services. The
        existence of customers who are unable to determine the difference
        between the mark of the trade mark owner and a description of the good
        or service, for example, suggests that trade mark dilution may exist.
        Trade mark dilution can be proved a number of ways, including through
        customer surveys. Forms of trade mark dilution include blurring, trade
        mark tarnishment, and freeriding. Blurring is when a third party uses an
        identical or almost identical trade mark to market goods or services
        unrelated to what the trade mark is actually registered for. Trade mark
        tarnishment occurs when a famous trade mark is used in an undesirable
        way. Freeriding, which is also known as parasitic exploitation, is when
        the owner of a mark similar to a famous mark receives the advantage of a
        positive association between the two marks.
        <strong>
          A trade mark dilution case: Victoria&apos;s Secret against
          Victor&apos;s Secret
        </strong>
        In 2002, the United States Supreme Court heard an argument between the
        owner of the Victoria&apos;s Secret trade mark and Victor and Cathy
        Moseley. The Moseleys opened a store in Kentucky and named it
        Victor&apos;s Secret, which sold similar items to that of the
        Victoria&apos;s Secret line. After a cease-and-desist letter was sent
        from the company to the Moseleys, the Moseleys changed their store name
        to Victor&apos;s Little Secret. Victoria&apos;s Secret did not settle on
        this small change and sued the Moseleys. The Court was asked to
        determine if the use of Victor&apos;s Secret or Victor&apos;s Little
        Secret created economic harm or were likely to cause the famous
        Victoria&apos;s Secret trade mark to lose value and uniqueness. It was
        determined that Victor&apos;s Secret and Victor&apos;s Little Secret did
        infringe on Victoria&apos;s Secret&apos;s trade mark on the basis of
        trade mark tarnishment. The Moseleys&rsquo; trade mark was said to
        degrade Victoria&apos;s Secret&apos;s trade mark and reduce the positive
        association of the famous mark.
      </p>
      <hr />
      <h3 id="trademark-enforcement">Trade Mark Enforcement</h3>
      <p>
        <strong>Rights of Trade Mark Owners</strong>A registered trade mark
        gives the registered owner an exclusive monopoly right (Section 20) to:
      </p>
      <ol>
        <li>
          use the trade mark in relation to the goods and/or services in respect
          of which the trade mark is registered,
        </li>
        <li>
          authorise other persons to use the trade mark in relation to the goods
          and/or services in respect of which the trade mark is registered
          &ndash; including licensing, franchising; and
        </li>
        <li>
          the right to obtain relief under this Act if the trade mark has been
          infringed
        </li>
      </ol>
      A registered trade mark provides a relatively straight forward basis for
      licensing, franchising, or even taking action to stop another trader from
      using a similar Trade Mark in relation to related goods/services without
      the registered owner&apos;s authorisation.
      <strong>Trade Mark Infringement and litigation</strong>
      If a third party uses a registered trade mark without authorisation from
      the registered owner, the third party may be infringing exclusive rights
      accorded in a registered trade mark. Section 120(1) of the{' '}
      <em>Trade Marks Act 1995</em> (Cth) states:{' '}
      <em>
        &ldquo;A person infringes a registered trademark if the person uses as a
        trademark a sign that is substantially identical with, or deceptively
        similar to, the trademark in relation to goods or services in respect of
        which the trademark is registered&rdquo;.
      </em>
      <strong>Substantial Identity</strong>
      The test for review of the marks under substantial identity is based on a
      side by side comparison of the respective marks, their similarities and
      differences noted and the importance of these assessed having regard to
      the essential features of the registered mark and the total impression of
      resemblance or dissimilarity that emerges from the comparison; as well as
      comparing if the goods/services are closely related.
      <strong>Deceptive Similarity</strong>
      The test for deceptive similarity does not involve looking at the trade
      marks side by side. The issue is not abstract similarity but deceptive
      similarity. The test is therefore between, on the one hand, the impression
      based on recollection of one mark that a person of ordinary intelligence
      and memory would have; and, on the other hand, the impressions that such a
      person would get from looking at the second mark.
      <hr />
      <h3 id="trade-secret">Trade Secret</h3>
      <p>
        An invented commercial method or compilation of information that is not
        commonly known, but can be protected by a business to retain an economic
        advantage. There are two main forms of trade secrets. One form of trade
        secret is; a commercial method or compilation of information that does
        not meet the patentability criteria, but is sufficiently new and
        innovative to be protected from competition. An example of this would be
        a manufacturing process that is not deemed to be satisfactorily
        inventive to be protected as a patent, but is crucial enough to an
        organisations competitive advantage, that it should be kept as a secret
        from competitors. Another form of trade secret is one that would meet
        the patentability criteria, but the owner makes a conscious decision to
        protect the intellectual property as a trade secret, rather than patent
        the material. This may be done to avoid the 20-year protection limit
        imposed by patent protection. Furthermore, an organisation may choose to
        protect their IP as a trade secret so that they do not have to reveal
        information surrounding their invention to the public. A common form of
        protection of trade secrets is the use of a confidentiality agreement.
        This is useful as an employer can use this contract to prevent employees
        from revealing trade secrets. It is however important to note that a
        confidentiality agreement only protects the intellectual property from
        being exploited by those with whom you have an agreement. The best
        method of widespread protection for intellectual property is to have it
        patented. Coca Cola Ltd uses confidentiality agreements to prevent its
        employees from revealing trade secrets. The benefits of this method of
        protection is that Coca Cola never has to reveal its secret recipe in a
        patent application, and subsequently can keep its claim of holding a
        secret recipe.
      </p>
      <hr />
      <h3 id="united-states-patent-and-trademark-office-uspto">
        United States Patent and Trademark Office (USPTO)
      </h3>
      <p>
        The USPTO stands for the United States Patent and Trademark Office. The
        USPTO is the largest of many patent and trade mark offices around the
        world and is located in the United States of America. The USPTO receives
        applications for patents and trade marks that, once granted at the
        USPTO, will have force in the United States. The USPTO receives just
        over half a million utility patent applications every year, as well as
        35,000 design patent applications and about 1000 plant patent
        applications. From these applications, the USPTO issues about 300,000
        patents, 23,000 design patents, and about 1000 plant patents every year.
        Of the utility patents that are issued, about 167,000 are granted to
        foreign residents. The USPTO has examiners that are qualified in
        different{' '}
        <Link href="/specialisations">technical fields of technology</Link>, and
        that are able to examine patent applications in a wide range of
        technology types.
      </p>
      <hr />
      <h3 id="voluntary-request-for-examination">
        Voluntary Request for Examination
      </h3>
      <p>
        A voluntary request for a patent, trade mark, design or plant breeders
        right to be assessed to meet the requirements of the relevant act. After
        submitting a patent application examination must be requested within 5
        years of the filing date. If you have not done so already, IP Australia
        will direct you to request an examination approximately 1 year before
        this expiry date. Once examination has been requested it will generally
        be completed by IP Australia within 1 year. The results of this
        examination will either come in the form of an Adverse Report or a
        Notice of Acceptance. If an adverse report is received, there will be an
        outline of the contentious issues within your IP claims, and why your
        application does not meet the requirements of the
        <em>Patents Act 1990 (Cth)</em>. You will then have 12 months to address
        or retract all of the issues within the adverse report. IP Australia
        will then further examine the application based on their set criteria,
        and if satisfied, the patent will be granted.
      </p>
      <hr />
      <h3 id="world-intellectual-property-organisation">
        World Intellectual Property Organisation (WIPO)
      </h3>
      <p>
        WIPO stands for the World Intellectual Property Organisation. WIPO is a
        self-funding agency of the United Nations, with over 188 member
        countries. One very important aspect of WIPO is that it administers the
        Patent Cooperation Treaty (PCT), which facilitates filing of a so-called{' '}
        <Link href="/pct-patent">international patent application</Link>. The
        Australian Patents Office (IP Australia) is a receiving Office for WIPO,
        and is an authorised searching and examination Authority. A PCT
        application can therefore be filed with IP Australia. An international
        patent application provides a patent applicant with additional time to
        both establish business partnerships (locally and overseas) and defer
        entry to the national phase in over 148 contracting member states. WIPO
        also administers the Madrid Agreement and Madrid Protocol International
        Trade Mark systems, the latter of which Australia is a member. This
        allows effective filing of overseas Trade Marks in member countries
        stemming from a home-base application in Australia. A great example of
        WIPO is seen in International Patent Application No. PCT/AU2001/000168.
        The PCT system and process is explained in brief at the following link:
        This international patent application was:
      </p>
      <ol>
        <li>
          filed with the Australian Patents Office (IP Australia) within
          12-months of a first Australian provisional patent application,
        </li>
        <li>subject to an International Search,</li>
        <li>
          entered the national phase in countries including Australia, the USA,
          Europe, Canada and China at 30/31 months from the first AU provisional
          application
        </li>
      </ol>
      The PCT application allows the applicant to file in a multitude of PCT
      member countries, and decide up to a maximum of 30 or 31 months after the
      first Australian provisional patent application, which country&apos;s
      patent protection is required. There is a further aid in the PCT system,
      since within three (3) months of filing we obtain an
      <strong>
        <em>international search report</em> <em>(ISR)</em>
      </strong>
      <em>
        <strong>and written opinion</strong>
      </em>
      detailing relevant patent documents found by the Australian Patent Office.
      If we proceed further to enter &lsquo;Chapter II&rsquo; of the PCT, we
      have opportunities to amend claims and submit arguments for further
      consideration. We can therefore strengthen the patent document to overcome
      any cited documents before entering the national phase in one or more PCT
      member countries.
      <hr />
      <h3 id="worldwide-patent">Worldwide Patent</h3>
      <p>
        An international or{' '}
        <Link href="/pct-patent">PCT patent application</Link> is often
        incorrectly referred to as a &ldquo;worldwide patent&rdquo;. The
        description of an international or PCT patent application as a worldwide
        patent is incorrect for a number of reasons:
      </p>
      <ul>
        <li>
          While the international patent application system allows for the
          filing of an international patent application, this never results in a
          granted international patent that is enforceable worldwide.
        </li>
        <li>
          Filing an international patent application merely extends the deadline
          for filing patent applications in individual countries overseas, and
          allows for the application to be examined once before filing in
          overseas countries.
        </li>
      </ul>
      Baxter IP clients regularly file international patent applications in
      order to extend the deadline for filing patent applications overseas. They
      would typically do this for a number of reasons:
      <ul>
        <li>They require more time to develop their invention.</li>
        <li>
          They are still unsure where there remain target markets are and want
          to keep their options open.
        </li>
        <li>
          They want to delay the costs of filing in many countries overseas.
        </li>
        <li>
          They wanted their patent application examined to establish what the
          closest prior art is before they filed overseas patent applications at
          the national patent offices.
        </li>
      </ul>
    </Layout>
  )
}
