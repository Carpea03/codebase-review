import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function ClassesOfGoodsAndServices() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Trade Mark', link: '/how-to-trade-mark' },
    { title: 'Classes of Goods and/or Services', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>
          Classes of Goods and/or Services | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Identify all the relevant classes of goods and services of your trade mark to optimise the protection of your trade mark."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/classes-of-goods-and-services"
        />
      </Head>
      <div className="mt-10">
        <h1>Classes of Goods and/or Services</h1>
        <p>
          An application for trade mark registration contains a number of
          mandatory elements, including, the trade mark owner, the trade mark,
          and the goods and services. A trade mark can be categorised into 45
          international trade mark classes, known as the &quot;Nice
          Classification&quot;. Classes 1-34 cover goods, whilst Classes 35-45
          cover services.
        </p>
        <p>
          The full list of classes and a non-exhaustive list of inclusions can
          be found on this{' '}
          <Link
            href="https://www.wipo.int/classifications/nice/nclpub/en/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            page
          </Link>
          .
        </p>
        <h2 className="h5">Examples of classes of goods and services</h2>
        <table>
          <tbody>
            <tr>
              <th scope="row" width="15%">
                Class 1
              </th>
              <td width="85%">
                Class 1 is a class of goods which mainly includes chemical
                products for use in industry, science and agriculture, including
                those which go to the making of products belonging to other
                classes.
                <p>&nbsp;</p>
                <p>
                  <strong>Inclusions (not limited to):</strong> sensitized
                  paper; tyre repairing compositions; salt for preserving, other
                  than for foodstuffs; certain additives for use in the food
                  industry, for example, pectin, lecithin, enzymes and chemical
                  preservatives; certain ingredients for use in the manufacture
                  of cosmetics and pharmaceuticals, for example, vitamins,
                  preservatives and antioxidants; certain filtering materials,
                  for example, mineral substances, vegetable substances and
                  ceramic materials in particulate form.
                </p>
                <p>
                  <strong>Exclusions include:</strong> chemical preparations for
                  medical or veterinary purposes (Cl. 5); -fungicides,
                  herbicides and preparations for destroying vermin (Cl. 5);
                  adhesives for stationery or household purposes (Cl. 16).
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">Class 35</th>
              <td>
                Class 35 is a services class that predominantly includes
                services rendered by parties principally with the object of help
                in the working or management of a commercial undertaking (retail
                services for example), or help in the management of the business
                affairs or commercial functions of an industrial or commercial
                enterprise, as well as services rendered by advertising
                establishments.
                <p>&nbsp;</p>
                <p>
                  <strong>Exclusions include:</strong> for example, services
                  such as evaluations and reports of engineers which do not
                  directly refer to the working or management of affairs in a
                  commercial or industrial enterprise.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Broad vs specific trade mark classes</h2>
        <p>
          When selecting trade mark classes, all classes that are currently
          relevant to the business and also future interests should be
          considered. However, there are{' '}
          <Link href="/trade-mark-pre-filing-considerations">
            considerations
          </Link>{' '}
          such as the cost, as fees for applications are dependent on the number
          of classes. Further, how broad the claim is will depend on the nature
          of the trade mark, the nature of the business and your plans and
          challenges for business expansion. This is something that needs to be
          considered on a case-by-case basis. Our experienced attorneys can
          guide you through this process.
        </p>
        <h2>Do it right the first time</h2>
        <p>
          The correct classes need to be identified when first lodging an
          application because the scope of the application cannot be broadened
          after filing.
        </p>
        <p>
          Certain misconceptions lead to the inclusion of incorrect or
          unnecessary classes in the trade mark application. For example, a
          trade mark does not need to incorporate all aspects of its internal
          business operations, such as advertising, accounting and web hosting.
          The classes in the trade mark application should be for goods and/or
          services that the business offers to others.
        </p>
        <p>
          Incorrect classes may result in delays and unnecessary fees. In the
          future, incorrect identification of goods/services may result in
          partial or total removal of the trade mark due to non-use. Worst case
          scenario, you will not have the scope of protection that your business
          needs. The advice of a{' '}
          <Link href="/trade-mark-attorney">trade mark attorney</Link> with
          extensive experience in identifying the appropriate classes and
          descriptions of goods/services is invaluable in this step in
          identifying and securing the correct scope of trade mark registration.
        </p>
      </div>
    </Layout>
  )
}
