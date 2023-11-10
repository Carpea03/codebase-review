import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkLitigation() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade Mark Oppositions & Disputes',
      link: '/trade-mark-oppositions-disputes',
    },
    { title: 'Trade Mark Litigation', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Trade Mark Litigation | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Enforce your intellectual property rights and your trade mark against trade mark infringers with Baxter IP's trade mark litigation and IP enforcement team."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-litigation"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/global/trade-mark-litigation"
          hreflang="en-US"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%95%86%E6%A0%87%E8%AF%89%E8%AE%BC"
          hreflang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade Mark Litigation</h1>
      <p>
        The owner of a registered trade mark has the exclusive rights to use the
        trade mark and authorise others to use the trade mark in relation to the{' '}
        <Link href="/classes-of-goods-and-services">goods and/or services</Link>{' '}
        in respect of which the trade mark is registered.
      </p>

      <p>
        The registered owner of a trade mark also has the right to obtain relief
        under the<em> Trade Marks Act 1995 (Cth)</em> if the trade mark has been
        infringed.
      </p>

      <h2>Trade mark infringement</h2>

      <p>
        If a third party uses a registered trade mark without authorisation from
        the registered owner, the third party may be{' '}
        <Link href="/trade-mark-infringement">infringing</Link> the exclusive
        rights of the registered owner.
      </p>

      <p>
        Section 120(1) of the <em>Trade Marks Act 1995 (Cth)</em> states:
      </p>

      <blockquote>
        A person infringes a registered trade mark if the person uses as a trade
        mark a sign that is substantially identical with, or{' '}
        <Link href="/ip-glossary#deceptively-similar">deceptively similar</Link>{' '}
        to, the trade mark in relation to goods or services in respect of which
        the trade mark is registered.
      </blockquote>

      <h3>Pre-commencement of infringement</h3>

      <p>
        Once we become aware of instances of unauthorized use of a registered
        trade mark, it is usual practice to send a &lsquo;letter of
        demand&rsquo; to the infringing party. The letter of demand can be
        prepared in a number of ways depending on the objective of the trade
        mark owner. This is a pre-condition to commencing litigation in the
        Federal Court.
      </p>

      <h3>Commencement of litigation</h3>

      <p>
        In some cases where it is essential to prevent or stop alleged
        infringing use immediately, we can file an Interlocutory Injunction with
        the Federal Court. These type of actions generally require the applicant
        to show:
      </p>

      <ol type="i">
        <li>there is a serious issue to be tried,</li>
        <li>
          without an injunction, the plaintiff will suffer injury for which
          damages will not be an adequate compensation, and
        </li>
        <li>the balance of convenience favours such relief.</li>
      </ol>

      <p>
        Most if not all litigation is commenced in the Federal Court or Federal
        Circuit Court, although it is possible to use the Supreme Court of a
        State. In part, the reason for this is that most trade mark litigation
        also involves complimentary actions brought under misleading and
        deceptive conduct provisions of the{' '}
        <em>Competition and Consumer Act 2010 (Cth)</em> (Schedule 2 Section
        18), and the common law tort of &lsquo;passing off&rsquo;.
      </p>

      <h3>Powers of an authorised user of the trade mark</h3>

      <p>
        Subject to any agreement between a registered owner of a registered
        trade mark and an authorised user of the trade mark, the authorised user
        may bring an action for infringement of the trade mark:
      </p>

      <ol>
        <li>at any time, with the consent of the registered owner; or</li>
        <li>
          during the prescribed period, if the registered owner refuses to bring
          such an action on a particular occasion during the prescribed period;
          or
        </li>
        <li>
          after the end of the prescribed period, if the registered owner has
          failed to bring such an action during the prescribed period.
        </li>
      </ol>

      <p>
        If the authorised user brings an action for infringement of the trade
        mark, the authorised user must make the registered owner of the trade
        mark a defendant in the action. However, the registered owner is not
        liable for costs if he or she does not take part in the proceedings.
      </p>

      <h2>Trade Marks Act</h2>

      <p>
        The Trade Marks Act provides protection for registered trade Marks.
        Establishing registration is straight forward because a registered trade
        mark will be entered on the Register of Trade Marks.
      </p>

      <p>
        If a trade mark is not registered (unregistered Trade Mark at Common
        Law), an individual will have to rely on the passing off tort under
        common law, the elements of which are more difficult to establish,
        generally requiring:
      </p>

      <ul>
        <li>establishment of a reputation or goodwill,</li>
        <li>
          there has been a misrepresentation that good/services of one trader
          are connected with the goods/services of another trader, and
        </li>
        <li>there has been damage to (the Plaintiff&apos;s) goodwill.</li>
      </ul>

      <h2>Relief granted by the court</h2>

      <p>
        The relief that a court may grant in an action for infringement of a
        registered trade mark includes an injunction, which may be granted
        subject to any condition that the court thinks fit, and at the option of
        the plaintiff but subject to section 127 (where the defendant has
        applied to the court for an order directing the Registrar to remove the
        trade mark from the register for those goods/services), damages or an
        account of profits.
      </p>

      <p>
        A court may include an additional amount in an assessment of damages for
        an infringement of a registered trade mark, if the court considers it
        appropriate to do so having regard to a number of factors including:
      </p>

      <ol>
        <li>the flagrancy of the infringement; and</li>
        <li>
          the need to deter similar infringements of registered trade marks; and
        </li>
        <li>
          the conduct of the party that infringed the registered trade mark that
          occurred:
          <ol type="a">
            <li>after the act constituting the infringement; or</li>
            <li>
              after that party was informed that it had allegedly infringed the
              registered trade mark;
            </li>
            <li>
              any benefit shown to have accrued to that party because of the
              infringement; and
            </li>
            <li>all other relevant matters.</li>
          </ol>
        </li>
      </ol>
    </Layout>
  )
}
