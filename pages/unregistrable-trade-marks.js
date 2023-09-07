import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function UnregistrableTradeMarks() {
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
    { title: 'Signs that cannot be protected as a trade mark', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Signs that cannot be protected or registered as a trade mark | Baxter
          IP
        </title>
        <meta
          name="description"
          content="Know whether your trade mark contains signs that cannot be protected as a trade mark. Consult with one of our trade mark attorneys about your brand today."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/unregistrable-trade-marks"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Signs that cannot be protected as a trade mark</h1>
      <p>
        A <Link href="/trade-mark-search">trade mark search</Link> is a good
        preparation step before launching a{' '}
        <Link href="/trade-mark-application">trade mark application</Link>.
        However, a clear search result does not guarantee a successful
        application; the fact that a trade mark search failed to find any direct
        matches may be due to the proposed trade mark containing common or
        prohibited signs, hence no one has been successful in registering the
        trade mark before and neither would you.
      </p>
      <h2 id="common">Common text or images</h2>
      <p>
        A trade mark application containing a frequently used text or image
        often signals a red flag. If the application contains a text or image
        that others may want to use to describe or represent their own goods or
        services, then the application is more likely to be rejected on these
        grounds. A registered trade mark aims to protect, but not to the
        detriment of others&apos; legitimate needs; it is only fair to keep
        frequently used texts or images for everyone to use.
      </p>
      <h3 id="common-signs">Common signs</h3>
      <p>
        Signs can be any text or image that can represent the applicant&apos;s
        goods or services. Such signs can be considered common if the text or
        image is typically used to describe the goods or services that are being
        protected. Examples of common signs are:
      </p>
      <ul>
        <li>
          Signs indicating the kind of goods or service represented by the trade
          mark
          <ul>
            <li>
              Examples:
              <ul>
                <li>
                  <em>Vita B Complex</em> for vitamin tablets containing vitamin
                  B12, vitamin B6, riboflavin and folic acid
                </li>
                <li>
                  <em>Analytics</em> for data analytical services
                </li>
                <li>An image of a shirt for cotton and wool shirts</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Signs indicating the quality of goods or service represented by the
          trade mark
          <ul>
            <li>
              Examples:
              <ul>
                <li>
                  <em>Waterproof</em> for water-resistant jackets
                </li>
                <li>
                  <em>Trending</em> for news program services
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Signs indicating quantity
          <ul>
            <li>
              Examples:
              <ul>
                <li>24K for jewelry containing gold</li>
                <li>365 Gigapixel for photography services</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Signs indicating the intended purpose of the goods or service
          <ul>
            <li>
              Examples:
              <ul>
                <li>
                  <em>SaveData</em> for thumb drives
                </li>
                <li>
                  <em>AcneClear</em> for dermatological services
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        A generic text or symbol may become distinguishable if it is combined
        with text or a symbol that can make the combination less generic. For
        example, the image of a shirt combined with the text electronica may
        become less generic for cotton and wool shirt goods.
      </p>
      <h3 id="geographical-names">Geographical names</h3>
      <p>
        Geographical names on a trade mark application can become a problem,
        specifically when the geographical name is known to be linked with a
        particular product or service. Examples of such names are Sunraysia for
        grapes and Queensland for mangoes.
      </p>
      <p>
        The applicant may be compelled to defend the use of a geographical name
        to successfully register the trade mark. A geographical name may be
        accepted as a trade mark if the applicant can prove that:
      </p>
      <ul>
        <li>the name has been used; and</li>
        <li>the public recognises the geographical name as a trade mark.</li>
      </ul>
      <h3 id="common-surnames">Common surnames</h3>
      <p>
        Business names with the surnames of the business owner are not rare. It
        is also a recommended practice to apply for a trade mark to protect the
        business name. A common surname in Australia, however, can pose a
        problem for the trade mark application. This is because there will be
        many people who may want to use the surname as part of their business or
        as part of their product or service name. Examples of common Australian
        surnames are Taylor, Smith, or Miller.
      </p>
      <p>
        As in the case of geographical names, the applicant may submit an
        evidence of use report to show that the surname has been used and is
        recognized as a trade mark to defend the use of a common surname in the
        applicant&apos;s trade mark.
      </p>
      <h2 id="prohibited">Prohibited text or images</h2>
      <p>
        A trade mark application, on the other hand, may avoid commonly used
        text or image but still be rejected because it contains prohibited
        content. Of particular concerns are the following:
      </p>
      <h3 id="restricted-words">Class 36 restricted words</h3>
      <p>
        It is not unusual to see trade mark applications denied due to using
        commonly used words, phrases, or images. Banking and financial services
        have their own restricted terms when it comes to applying for trade
        marks.
      </p>
      <p>
        Class 36 services and other numerous words associated with these
        industries are restricted:
      </p>
      <ul>
        <li>Insurance</li>
        <li>Financial affairs</li>
        <li>Monetary affairs</li>
        <li>Real estate affairs</li>
      </ul>
      <p>
        Some examples of terms that are not allowed for use in trade marks,
        other than closely related expressions, are:
      </p>
      <ul>
        <li>ADI / Authorised Deposit-Taking Institution</li>
        <li>Bank / Banker / Banking</li>
        <li>Building Society</li>
        <li>Credit Society</li>
        <li>Credit Union</li>
        <li>Friendly Society</li>
      </ul>
      <p>
        The term is not allowed for use, even if the term is part of another
        word or phrase. Examples of these may be{' '}
        <em>
          <span style={{ textDecoration: 'underline' }}>Bank</span>Book
        </em>{' '}
        or{' '}
        <em>
          <span style={{ textDecoration: 'underline' }}>Friendly Society</span>{' '}
          Lending Agency
        </em>
        . Exceptions are given to the acronym ADI where ADI may be contained in
        words like{' '}
        <em>
          Circ<span style={{ textDecoration: 'underline' }}>adi</span>an
        </em>
        ,{' '}
        <em>
          Dy<span style={{ textDecoration: 'underline' }}>adi</span>cs
        </em>
        , or{' '}
        <em>
          Pall<span style={{ textDecoration: 'underline' }}>adi</span>um
        </em>
        .
      </p>
      <p>
        The Australian Prudential Regulatory Authority (APRA) regulates the use
        of these restricted terms.&nbsp;The act also points to a few exceptions:
        the Reserve Bank does have the rights to use bank, banker and banking,
        whereas an authorised deposit-taking institution may use the term
        banking.{' '}
        <Link
          href="https://www.legislation.gov.au/Details/C2017C00067"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Section 66A of The Banking Act 1959</em>
        </Link>
        &nbsp;sets constraints on individuals, not ADIs, using the expression
        authorised deposit-taking institution or ADI in connection to financial
        businesses. As a rule, APRA only allows authorised financial
        institutions to apply for trade marks using the restricted terms.
      </p>
      <p>
        This act does not prohibit the use of ADI in common words, like
        traditional or steadily for example. Like stated in the{' '}
        <Link
          href="https://www.legislation.gov.au/Details/C2017C00057"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Life Insurance Act 1995</em>
        </Link>
        , the APRA may abolish consent for an organisation to use a term or
        phrase related to financial businesses and determines if a specific word
        or expression is considered restricted.
      </p>
      <p>
        The <em>Life Insurance Act 1995</em>, section 16E, established the
        restriction on the use of the expression &ldquo;friendly society.&rdquo;
        A friendly society is a mutual association providing sickness benefits,
        life insurance and pensions. The phrase is restricted under several
        conditions:
      </p>
      <ul>
        <li>when used in connection with a financial institution;</li>
        <li>if the organisation is not a friendly society; and</li>
        <li>if the APRA did not approve the use of the phrase.</li>
      </ul>
      <p>
        The APRA is an Australian government establishment that regulates and
        supervises banking, insurance, superannuation, and financial services.
        The authority may revoke an association&apos;s right to use the
        expression at any time, even after consent is given.
      </p>
      <p>
        If you, as an applicant, is not part of the list of authorised financial
        institutions, you may contact APRA for permission to use the restricted
        terms. Once an approval is secured, you may include this documentation
        in your trade mark application.
      </p>
      <p>
        AU TM#{' '}
        <Link
          href="https://search.ipaustralia.gov.au/trademarks/search/view/1568304/details"
          target="_blank"
          rel="noopener noreferrer"
        >
          1568304
        </Link>{' '}
        is a good example of a trade mark that was not accepted for registration
        for containing restricted words, like bank and banking. The trade mark
        was filed on 11 July 2013 for the words &ldquo;YOURS &amp; MINE BANK
        BANKING WITH INTEGRITY&rdquo; and was registered for class 36 services.
        AU TM#{' '}
        <Link
          href="https://search.ipaustralia.gov.au/trademarks/search/view/1092343/details"
          target="_blank"
          rel="noopener noreferrer"
        >
          1092343
        </Link>{' '}
        was for the words &ldquo;Your significant other bank&rdquo; and was
        originally accepted for registration in May of 2006. The application was
        removed from the register for not being renewed. This is a good example
        of a trade mark for class 36 services that was accepted and also
        contains the word bank.
      </p>
      <p>
        AU TM#{' '}
        <Link
          href="https://search.ipaustralia.gov.au/trademarks/search/view/499895/details"
          target="_blank"
          rel="noopener noreferrer"
        >
          499895
        </Link>{' '}
        is a registered trade mark for services under class 36. The mark is for
        the words &ldquo;THE OVER 50&apos;S FRIENDLY SOCIETY&rdquo; and an image
        containing the same words on the cover of an open book. The mark is
        still on the register with a renewal date of 18 November 2019. By
        contrast, AU TM#{' '}
        <Link
          href="https://search.ipaustralia.gov.au/trademarks/search/view/442226/details"
          target="_blank"
          rel="noopener noreferrer"
        >
          442226
        </Link>{' '}
        for the phrase &ldquo;STATEGUARD FRIENDLY SOCIETY&rdquo; and a circular
        image containing the same phrase was never registered.
      </p>
      <h3 id="prohibited-signs">Article 6ter prohibited signs</h3>
      <p>
        Article 6ter of the Paris convention was established to protect the
        emblems and armorial signs of its member states. The scope of protection
        outlined in Article 6ter includes:
      </p>
      <ul>
        <li>Armorial bearings;</li>
        <li>Flags;</li>
        <li>State emblems; and</li>
        <li>State official signs and hallmarks.</li>
      </ul>
      <p>Under Article 6ter, a member state must:</p>
      <ul>
        <li>
          refuse to register a trade mark that consists of or contains a
          notified sign as well as any trade mark that has a certain similarity
          to a notified sign;
        </li>
        <li>
          invalidate any registrations for trade marks that consist of or
          contain notified signs;
        </li>
        <li>
          provide effective means to stop unauthorised use of notified signs;
        </li>
        <li>
          extend protection to the flags of the member states regardless of
          whether they have been notified;
        </li>
        <li>
          if they intend not to extend protection to a notified sign,
          communicate such an intention within 12 months of notification;
        </li>
        <li>
          make a list of those signs that have been notified available to the
          public.
        </li>
      </ul>
      <h2 id="scandalous">Scandalous trade marks</h2>
      <p>
        Under Section 42 of the <em>Trade Marks Act 1995</em>, a trade mark
        application must be rejected if (a) the elements of the trade mark
        includes scandalous material. However, what constitutes scandalous
        material is not elaborated in the act. The definition may be too broad
        or too subjective and thus is usually decided on a case-to-case basis.
      </p>
      <p>
        In general, trade marks that are considered scandalous are those that
        include profanity, religious iconography and connotation, overt sexual
        content or innuendo and racial slurs, as well as those that incite
        violence and terrorism and promote criminal activity.
      </p>
      <p>
        However, several previous rulings in the Australian courts (such as in
        the case of POMMIEBASHER, which the examiner deemed to be a
        colloquialism rather than an invective), seem to indicate that
        scandalous trade marks is different from trade marks that are in poor
        taste.
      </p>
    </Layout>
  )
}
