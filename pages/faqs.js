import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/to-delete/layout'

export default function Faqs() {
  return (
    <Layout>
      <Head>
        <title>
          Intellectual Property FAQs | Answered by Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Baxter IP offers different IP services. Learn about the answers to the most frequently asked questions regarding these intelletual property concepts."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/faqs" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E9%97%AE%E9%A2%98"
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
                Frequently Asked Questions
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>Frequently Asked Questions</h1>
      <section>
        <h2>General</h2>
        <h3>Where is your office located? (either for Sydney or Melbourne)</h3>
        <p>Our offices are located at 1 Bligh St and 530 Collins St.</p>
        <h3>Do you have a Chinese or a Mandarin speaker?</h3>
        <p>
          Yes, we have two Mandarin speakers, one specialises in patents, the
          other in trade marks.
        </p>
        <h3>How much does it cost for a trade mark or a patent?</h3>
        <p>
          Your attorney will be able to provide a quote once they have an
          understanding of what you wish to protect.
        </p>
        <h3>Do you accept clients outside of Australia?</h3>
        <p>Yes, we have many foreign clients.</p>
        <h3>Do all matters shared with you remain confidential?</h3>
        <p>
          Your patent or trade mark attorney has obligations of confidentiality
          under Federal Law that are very similar to those of a lawyer. You can
          talk with confidence about your idea with your attorney as this will
          enable them to give you the best possible advice.
        </p>
        <h3>Do you offer IP litigation services?</h3>
        <p>
          IP specialist lawyers and barristers we work with offer IP litigation
          services.
        </p>
      </section>
      <section>
        <h2>Patent related</h2>
        <h3>What is a patent?</h3>
        <p>
          A patent is an exclusive right or monopoly granted by the Commonwealth
          for an invention, which is a product or a process that provides, in
          general, a new way of doing something or offers a new technical
          solution to a problem. A patent provides an enforceable legal right to
          prevent others from exploiting an invention.
        </p>
        <h3>What kind of protection does a patent offer?</h3>
        <p>
          Patent protection means that the invention cannot be commercially
          made, used, distributed or sold without the patent owner&apos;s
          consent. To stop infringement of a patent, the patent must normally be
          enforced in a court. Conversely, a court can also declare a patent
          invalid upon a successful challenge by a third party.
        </p>
        <h3>What is patentable?</h3>
        <p>
          For an invention to be patentable, it must satisfy certain criteria.
          For example, it must
        </p>
        <ul>
          <li>
            be new (novel) when compared with public disclosures anywhere in the
            world, and
          </li>
          <li>
            contain an inventive or innovative step when compared with what is
            known by a skilled person in the field.
          </li>
        </ul>
        <p>
          The only present statutory exclusion from patentability in Australia
          is the patenting of human beings and the biological processes for
          their generation. Accordingly, a vast range of products and processes
          can be protected by patents, including pharmaceutical products, new
          materials,{' '}
          <Link href="/specialisations/pharmaceutical-patents">
            chemical processes
          </Link>{' '}
          and all manner of{' '}
          <Link href="/specialisations/mechanical-patents">mechanical</Link>,{' '}
          <Link href="/specialisations/electrical-engineering-patents">
            electrical and electronic devices
          </Link>
          .
        </p>
        <h3>What rights does a patent owner have?</h3>
        <p>
          A patent owner has the right to decide who may &ndash; or may not
          &ndash; use the patented invention for the period in which the
          invention is protected. The patent owner may give permission, or
          license, to other parties to use the invention on mutually agreed
          terms. The owner may also sell the right to the invention to someone
          else, who will then become the new owner of the patent. Once a patent
          expires, the protection ends, and an invention enters the public
          domain, that is, the owner no longer holds exclusive rights to the
          invention, which becomes available to commercial exploitation by
          others.
        </p>
        <h3>Who is entitled to apply for a patent?</h3>
        <p>
          Only the inventor or the person who has acquired the rights to the
          invention from the inventor can be granted a patent for that
          invention. If the invention was conceived and developed by the
          inventor as an employee, the rights to the invention may pass to the
          employer. If intellectual property is likely to be developed by
          employees, contractors or consultants in the course of their normal
          duties, it would be prudent to put a written agreement in place before
          relevant work is done.
        </p>
        <h3>When should I file a patent application?</h3>
        <p>
          It is critically important to file a patent application before either
          publicly disclosing the details of the invention or conducting any
          commercial activities in respect of the invention. Any such actions
          will normally invalidate your right to pursue patent protection,
          although you should immediately consult your patent attorney if such a
          situation arises.
        </p>
        <h3>
          How long will it take for a patent application to issue as a patent?
        </h3>
        <p>
          A <Link href="/provisional-patents">standard patent</Link> usually
          issues within a period of between two (2) to five (5) years from the
          date of filing of the complete application. However, the period can be
          shortened considerably if required. An{' '}
          <Link href="/innovation-patent-application">innovation patent</Link>{' '}
          typically issues within a period of one (1) to three (3) months. Note,
          however, that an innovation patent must be certified before legal
          action can be taken against a potential infringer. Certification
          requires substantive examination of the innovation patent which may
          take up to six (6) months. Importantly, if the innovation patent is
          found to be invalid during examination, it will be removed from the
          register.
        </p>
        <h3>What is a provisional application?</h3>
        <p>
          A provisional application is used to establish a{' '}
          <Link href="/ip-glossary#priority-date">priority date</Link> for your
          invention (for the purposes of establishing that your invention is
          new). A provisional application is only temporary and an Australian or
          International patent application must be filed within 12 months of
          lodging the provisional application for your application to retain its
          priority date.
        </p>
        <h3>How long does a patent last?</h3>
        <p>
          In general, an Australian standard patent has a maximum term of 20
          years, from the date of filing of the complete application, provided
          that renewal fees are paid. On the other hand, an Australian
          innovation patent has a maximum term of 8 years from the date of
          filing of the complete application.
        </p>
        <h3>
          When can I begin selling a product and/or begin seeking interest from
          others?
        </h3>
        <p>
          If a{' '}
          <Link href="/provisional-patents">
            provisional patent application
          </Link>{' '}
          has been filed for an invention, it is possible to use the term
          &ldquo;patent application filed&rdquo;. Once a complete application
          has been filed for the same invention, it is possible to use the term
          &ldquo;
          <Link href="/ip-glossary#patent-pending">patent pending</Link>&ldquo;.
          Only when a patent has actually been granted can a product be marked
          with &ldquo;Australian Patent Number xxxxxx&rdquo;. These terms are
          used to provide notice to third parties that a patent application has
          been filed in respect of an invention. Use of these symbols where no
          application has been made is prohibited and subject to fines.
        </p>
        <h3>When should patent protection be sought?</h3>
        <p>
          It is important to investigate the possibility of{' '}
          <Link href="/ip-glossary#patent-protection">patent protection</Link>{' '}
          as soon as a new product, composition or process has been created, or
          when modifications have been made to a product or a process that will
          provide the manufacturer of that product or the user of that process
          with a marketing advantage over its competitors.
        </p>
        <h3>How can a patent be obtained worldwide?</h3>
        <p>
          In general, an application for a patent must be filed, and a patent
          shall be granted and enforced, in each country in which you seek
          patent protection for your invention and in accordance with the law of
          that country. An Australian patent provides protection only within
          Australia. If you want to apply for a patent in other countries, you
          generally have two choices:
        </p>
        <ol type="i">
          <li>file separate patent applications in each country; or</li>
          <li>
            file a single{' '}
            <Link href="/pct-patent">international application</Link> via what
            is referred to as the{' '}
            <Link href="/ip-glossary#pct-patent-cooperation-treaty">
              Patent Cooperation Treaty (PCT)
            </Link>{' '}
            of which around 140 countries, including Australia, are members.
          </li>
        </ol>
        <p>
          In a PCT application, a single international patent application has
          the same effect as national applications filed in the countries of the
          PCT, and you can then choose to proceed in a selection of the 140
          countries at a later date. You will still need to meet the national
          requirements and pay the costs in each country, but these can be
          deferred by the PCT procedure by up to 18 months.
        </p>
        <h3>What is a grace period?</h3>
        <p>
          A grace period allows public disclosure of an invention in
          circumstances where the inventor has disclosed their invention before
          applying for a patent— for example, when they have discussed it with a
          contractor without a confidentiality agreement— without affecting the
          validity of a subsequent patent application. In Australia, the grace
          period covers a period of no more than 12 months before the filing
          date of the complete application. Importantly, however, the lack of a
          uniform grace period or grace period requirements around the world
          means that patent applications that rely on grace period will be
          invalid in some other countries.
        </p>
        <h3>What is a patent registration?</h3>
        <p>
          In a legal sense, there is no such thing as a patent registration. A
          &ldquo;
          <Link href="/ip-glossary#patent-application">patent application</Link>
          &rdquo; is the first document filed to start the protection process
          for a new idea. If the patent application passes through{' '}
          <Link href="/ip-glossary#examination">examination</Link> successfully,
          then we say that &ldquo;the patent is granted.&rdquo;
        </p>
        <p>
          In the United States, the equivalent terminology used is that
          &lsquo;the patent has issued&rsquo;. Colloquially, people talk about
          patent registration because the word registration validly applies to
          the granting of{' '}
          <Link href="/trade-mark-application">trade mark applications</Link>{' '}
          and{' '}
          <Link href="/registered-designs">registered design applications</Link>
          , but the word should not be used in respect of patents. The phrase
          &ldquo;patent registration&rdquo; does cause confusion because it
          suggests that applying for a patent is merely a matter of filling in a
          form. Of course, much more is involved.
        </p>
        <h3>What is the difference between copyright and patents?</h3>
        <p>
          Copyright covers all two-dimensional artistic works and some
          three-dimensional artistic works. However, when three-dimensional
          artistic works are used commercially (e.g. mass produced), they
          automatically lose copyright protection. In order to effectively
          prosecute a party who is using your commercial design, you need a
          registered design. Neither copyright nor registered designs can be
          used to protect functional concepts (directly) &ndash; this is where
          patents come in. A patent is a type of intellectual property right
          that encapsulates an idea in words and stops third parties from
          copying the idea. Copyright is not normally an effective form of
          protection for new developments in{' '}
          <Link href="/specialisations/software-patents">
            computer software
          </Link>{' '}
          or website applications &ndash; these are best protected by patents.
          In summary, copyright is used to protect artistic &amp; literary
          works, <Link href="/ip-glossary#design">registered designs</Link> are
          used to protect the look of designs that are being used commercially
          and patents protect function concepts or, put simply, the way things
          work.
        </p>
        <h3>What is a patent attorney?</h3>
        <p>
          A patent attorney provides representation and advice regarding
          patenting and related intellectual property matters, such as preparing
          and filing patent applications for inventions, representation in
          matters before the Patent Office, patent oppositions and advising in
          relation to infringement. A patent attorney has a degree or other
          qualification in a field of patentable technology (traditionally in
          science or engineering) coupled with further qualifications in the law
          and practice of intellectual property.{' '}
          <em>Section 200 of the Patents Act 1990</em> (Cth) provides that a
          communication between a registered patent attorney and the
          attorney&apos;s client in intellectual property matters, and any
          record or document made for the purposes of such a communication, are
          privileged to the same extent as a communication between a solicitor
          and his or her client.
        </p>
        <h3>
          What is the difference between patent attorneys and patent lawyers?
        </h3>
        <p>
          In Australia, there is often confusion in delineating whether one
          should consult a patent lawyer or a patent attorney about a patent
          matter.
        </p>
        <p>
          A patent lawyer in NSW is a solicitor specialising in intellectual
          property rights. Patent lawyers are professionals who has successfully
          completed either the Board&apos;s examinations (Diploma in Law) or a
          NSW accredited law degree, as well as completed an accredited program
          of practical legal training. Patent lawyers typically work with
          barristers in the litigation of patent rights.
        </p>
        <p>
          On the other hand, a <Link href="/ip-attorney">patent attorney</Link>{' '}
          is a professional who has:
        </p>
        <ol>
          <li>an engineering or science degree;</li>
          <li>
            completed a group of topics prescribed by the Professional Standards
            Board relating to intellectual property rights; and
          </li>
          <li>
            worked under the supervision of a patent attorney for the prescribed
            period.
          </li>
        </ol>
        <p>
          Patent attorneys are often described as part-engineer, part-lawyer,
          and are typically involved in writing{' '}
          <Link href="/provisional-patents">patent applications</Link> and in
          managing patent applications through to patent grant. Patent attorneys
          can also handle{' '}
          <Link href="/patent-opposition">patent oppositions</Link> (a
          tribunal-type process for patent conflicts) before{' '}
          <Link href="https://www.ipaustralia.gov.au/">IP Australia</Link>.
        </p>
        <h3>
          Is a confidentiality agreement necessary between a patent attorney and
          a client?
        </h3>
        <p>
          The Australian Patents Act provides that a communication between a
          registered patent attorney and the attorney&apos;s client in
          intellectual property matters, and any record or document made for the
          purposes of such a communication, are privileged to the same extent as
          a communication between a solicitor and his or her client. That is,
          registered patent attorneys are under a strict obligation of
          confidentiality and a strict fiduciary requirement to use your
          information only to your benefit.
        </p>
        <h3>What is the process for obtaining a patent?</h3>
        <p>
          For more information see our{' '}
          <Link href="/patent-process-flowcharts">
            patent process flowcharts
          </Link>
          .
        </p>
        <h3>Why should I go to Baxter IP for patent services?</h3>
        <p>
          Patents are extremely difficult documents to write correctly and
          attorneys train for many years on how to write them in a manner that
          is as watertight as possible. If your patent application is not
          written incorrectly it will not offer any legal protection, worse
          still, it may disclose your idea so anyone can copy it.
        </p>
      </section>
      <section>
        <h2>Trade mark related</h2>
        <h3>What is a trade mark?</h3>
        <p>
          A trade mark is used to distinguish goods or services from those
          provided by any other person and allows customers to easily identify
          your goods or services. Trade marks are an effective marketing tool to
          advertise your product and provide a unique and recognisable
          identifier in the marketplace.
        </p>
        <p>
          Trade marks can be formed by using or combining signs such as words,
          numbers, names, brands, colour, shape, images, smells or sounds. A
          trade mark is the only way to formally own a unique name or sign that
          distinguishes your products in the market and upon registration you
          will receive a formal Certificate of Registration of Trade Mark to
          prove ownership. This gives you the sole right to use and enjoy the
          trade mark in the country of registration.
        </p>
        <h3>What is a trade mark attorney?</h3>
        <p>
          A <Link href="/trade-mark-attorney">trade mark attorney</Link>{' '}
          provides representation and advice regarding trade marks and related
          intellectual property matters, such as{' '}
          <Link href="/trade-mark-search">trade mark searching</Link> and
          opinions,{' '}
          <Link href="/trade-mark-pre-filing-considerations">preparing</Link>{' '}
          and{' '}
          <Link href="/trade-mark-application">
            filing trade mark applications
          </Link>
          , representation in matters before the Trade Marks Office,{' '}
          <Link href="/trade-mark-opposition">trade mark oppositions</Link> and
          advising in relation to{' '}
          <Link href="/trade-mark-infringement">infringement</Link>.{' '}
          <em>Section 229(1) of the Trade Marks Act 1995 (Cth)</em>
          provides that a communication between a registered trade marks
          attorney and the attorney&apos;s client in intellectual property
          matters, and any record or document made for the purposes of such a
          communication are privileged to the same extent as a communication
          between a solicitor and his or her client. Both patent and trade marks
          attorneys can provide representation and advice regarding designs and
          related intellectual property matters, such as design searching and
          opinions, preparing and filing design applications, representation in
          matters before the Designs Office, design oppositions and advising in
          relation to infringement.
        </p>
        <h3>Where do I start if I want to file a trade mark application?</h3>
        <p>
          Commonly, the name of a company or product is chosen at the last
          minute when an accountant asks what you intend to call your company or
          the name you need for printing packaging or the like. It&apos;s easy
          to fall into the trap of picking a descriptive name thinking this will
          tell clients what you do and make you easier to find. The downside to
          this is that you fall into the bucket with hundreds of other
          descriptive names chosen by your competitors. This means your name is
          ultimately not unique but generic and you risk trying to differentiate
          yourself based on price only.
        </p>
        <p>
          The starting point to{' '}
          <Link href="/choosing-a-brand-name">choose a good trade mark</Link>, a
          name that you can actually own, is to choose a name or sign that is
          not generic or descriptive for your goods or services. Made up words
          make great trade marks precisely because they do not directly describe
          the{' '}
          <Link href="/classes-of-goods-and-services">goods and services</Link>{' '}
          you sell.
        </p>
        <p>
          Think about the Telstra™ trade mark. We know they provide telephone
          services, but we know that because their marketing and branding has
          embedded that into us. Looking at the name Telstra™ without your
          existing knowledge does not provide much insight into the services
          they provide. An international tourist for example who is not aware of
          the brand is unlikely to know what they do without being told. This
          may seem counter intuitive, but who do you think will make the more
          profitable customer?Someone who values your brand as a premium
          provider and is willing to pay a higher price for a better service
          long term service or a traveller looking for a budget solution for a
          one week stay in Australia and will never use your service again.
        </p>
        <p>
          I know which client I want and the way to build that brand premium is
          by choosing a good trade mark. To do that don&apos;t pick a name that
          is descriptive or generic.
        </p>
        <p>
          If you aren&apos;t sure whether your name is descriptive or generic,
          speak to us and we can perform registrability search and report to
          advise you whether the name is likely to be accepted for registration.
        </p>
        <h3>My trade mark is distinctive and unique, what is the next step?</h3>
        <p>
          If your trade mark is distinctive and unique, the next step is to file
          a <Link href="/trade-mark-application">trade mark application</Link>.
          Filing a trade mark application secures the date from which a trade
          mark is enforceable once registered. Your trade mark attorney will
          work with you to correctly identify the goods and services that should
          be included your trade mark application. The trade mark application
          process takes about 7 months in straightforward cases so it is
          important to file the application as soon as possible to ensure the
          earliest possible grant date. Once your trade mark has granted, it can
          be <Link href="/trade-mark-enforcement-options">enforced</Link>.
        </p>
        <h3>Does my trade mark protect me outside Australia?</h3>
        <p>
          Trade mark registrations in Australia only protect you in Australia.
          If you want protection for your trade mark overseas you will need to{' '}
          <Link href="/international-trade-mark-application">
            file an application in each country
          </Link>{' '}
          of commercial interest. It&apos;s important to have a filing strategy
          in place for commercial expansion as having someone register your
          trade mark overseas before you get there can be problematic. Our
          attorneys can help by preparing a filing strategy to support your
          international business.
        </p>
        <h3>What if I decide not to register my trade mark?</h3>
        <p>
          If you choose not to register your trade mark you are leaving your
          name open to be used by others as you have a very limited ability to
          stop them. Only registering your trade mark provides proof of
          ownership and the ability to more easily stop others from using the
          name.
        </p>
        <h3>What is the process for obtaining a trade mark?</h3>
        <p>
          For more information see our{' '}
          <Link href="/trade-mark-process-flowcharts">
            trade mark process flowcharts
          </Link>
          .
        </p>
        <h3>Why should I go to Baxter IP for trade mark services?</h3>
        <p>
          Ultimately, only a small number of &ldquo;do-it-yourself&rdquo;
          applications are successful. Most are abandoned due to insufficient
          knowledge of the application process or requirements. Inexperience in
          preparing trade mark applications can incur unnecessary time and cost
          on compliance requirements and professional advice is essential for a
          positive outcome.
        </p>
        <p>
          Should someone{' '}
          <Link href="/trade-mark-opposition">
            oppose to your trade mark application
          </Link>
          , this may be difficult to defend as it can involve complex legal
          issues and points of law.
        </p>
        <p>
          Even if the trade mark is successfully registered there may be
          significant flaws in the application that would prevent you from
          successfully using the registration to enforce your brand. These often
          only come to light when you seek professional advice when you wish to
          take action against an{' '}
          <Link href="/trade-mark-infringement">infringer</Link>. The following
          are examples of the types of deficiencies from incorrectly filed
          applications:
        </p>
        <ul>
          <li>
            the scope of registration may be too narrow meaning the registration
            does not provide adequate protection for your core goods and/or
            services;
          </li>
          <li>
            the scope of registration may be too broad leaving your trade mark
            open to a non-use removal action or open to be removed as a bad
            faith application;
          </li>
          <li>
            or the goods and/or services chosen may not be correctly identified;
          </li>
          <li>the incorrect trade mark may have been registered; and</li>
          <li>
            you may have failed to separately register important components of
            the trade mark.
          </li>
        </ul>
        <p>
          Without professional advice from the outset you may find you do not
          have the appropriate statutory rights required and your ability to
          enforce your trade mark can be severely limited or non-existent.
        </p>
        <p>
          Baxter IP has extensive expertise and experience in the area of trade
          mark law and our trade mark attorneys have successfully registered
          hundreds of trade marks for our clients. Please{' '}
          <Link href="/sydney">contact us</Link> for a free and confidential no
          obligation consultation to discuss your trade mark needs.
        </p>
      </section>
    </Layout>
  )
}
