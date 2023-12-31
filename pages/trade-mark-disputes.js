import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function TradeMarkDisputes() {
  const data = [
    { title: 'Services', link: '/services' },
    {
      title: 'Trade Mark Oppositions & Disputes',
      link: '/trade-mark-oppositions-disputes',
    },
    { title: 'Trade Mark Disputes & Alternative Dispute Resolutions', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Trade Mark Disputes | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="Trade mark disputes typically arise from a party enforcing their right as a trade mark owner against trade mark infringement."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/trade-mark-disputes"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Trade Mark Disputes and Alternative Dispute Resolutions</h1>
      <p>
        Trade mark disputes typically arise from trade mark infringement. Trade
        mark infringement is the use of a trade mark that is substantially
        identical or confusingly similar to a previously registered mark. To
        address trade mark disputes a party can apply to have a trade mark
        invalidated on several{' '}
        <Link href="/trade-mark-infringement">grounds</Link>, and the outcome is
        the removal of the offending trade mark from the register, in addition
        to the possible award of damages to the aggrieved party. In cases where
        the copied trade mark is unregistered, the common-law tort of passing
        off and Australian Consumer Law may provide relief to the owner of the
        earlier used trade mark.
      </p>
      <p>
        <Link href="/trade-mark-registration-benefits">
          Trade mark registration
        </Link>{' '}
        awards the owner the right to enforce the mark and this includes taking
        action against an infringement. Different approaches can be used to
        resolve trade mark disputes. If a third party is infringing on a
        registered trade mark, a carefully worded Cease and Desist letter may be
        sufficient to deter infringement. If this action is insufficient and the
        other party persists in the use of offending trade mark, the owner of
        the registered trade mark may proceed to other dispute resolution
        options.
      </p>
      <p>
        Parties on the receiving end of such a letter can provide arguments
        submitted in rebuttal, amend the class specifications indicated in the
        application, solicit a letter of consent from the original trade mark
        owner, initiate non-use proceedings against the trade mark owner or
        provide evidence of honest concurrent use. A{' '}
        <Link href="/trade-mark-attorney">trade mark attorney</Link> may provide
        advice on the most applicable and beneficial or, at the very least, the
        least damaging course of action in each particular case.
      </p>
      <h2>Alternative dispute resolution</h2>
      <p>
        Alternative dispute resolution offers advantages such as a shorter
        timeline and lower price than traditional{' '}
        <Link href="/trade-mark-litigation">trade mark litigation</Link>. In
        addition, positive lucrative outcomes may be obtained by both parties,
        such as coexistence, concurrent use, and licensing agreements. The
        Australian Federal Court demands that alternative dispute resolution
        must be sought first before pursuing trade mark litigation.
      </p>
      <h3>Negotiation/Mediation</h3>
      <p>
        Negotiation is the most informal mode of alternative dispute resolution.
        In a negotiation, both parties can meet and discuss their issues. The
        parties jointly decide on an outcome that benefits both, and potentially
        damaging issues, such as{' '}
        <Link href="/trade-mark-infringement">infringement</Link>, can sometimes
        be converted into a strong business outcome, such as a brand licence.
        The results of negotiations are private and confidential. Mediation is
        similar to a negotiation, only a neutral third party is involved. The
        conflicting parties decide on the outcome.
      </p>
      <h3>Expert determination</h3>
      <p>
        In this mode of alternative dispute resolution, the parties consensually
        submit the matter to a panel of experts who will decide on the outcome
        of the dispute.
      </p>
      <h3>Arbitration</h3>
      <p>
        An arbitration involves an impartial third party making a decision on
        the dispute. Both parties accede to the decision regardless of their
        opinion of it. In this type of resolution, there is a winning party and
        a losing party. The proceedings are similar to that in litigation, with
        the arbitrator/s making the decision instead of the court. Arbitration
        is more expensive than mediation/negotiation but is less expensive than
        traditional trade mark litigation. Arbitration proceedings are private,
        but decisions are made available to the public.
      </p>
      <h2>Trade mark litigation</h2>
      <p>
        In other cases, a more aggressive route may be unavoidable. Trade mark
        litigation is the motion of taking disputes for ruling by the Federal
        Circuit Court, Federal Court or High Court of Australia. Before
        litigation, the following should be established:
      </p>
      <ol>
        <li>
          Check the validity of the infringement claim, which includes checking
          details of ownership of the original trade mark, relevant dates, such
          as priority and registration dates, renewal status, as well as the
          dates and details of the infringing mark.
        </li>
        <li>
          Determine the amount of available resources. Litigation can extend
          from months to years. Within this period, the corresponding attorney
          fees, as well as lost man-hours, also increase, and traditional trade
          mark litigation costs do add up. In addition, these hearings are
          available to the public, so the impact of the publicity on operations
          must be carefully considered.
        </li>
        <li>
          Decide on the goal for the court proceedings, whether in the form of
          monetary compensation, restriction from further infringement, or both.
        </li>
        <li>
          Identify each party involved in the infringement. Identify every
          person involved to prevent these parties from further committing
          infringement under a different entity.
        </li>
      </ol>
      <p>
        Litigation can be a very complex process, and it can take years to
        receive a final decision.
      </p>
      <p>
        A business almost inevitably encounters trade mark disputes regardless
        of whether it owns a registered trade mark or not. The question of which
        trade mark dispute resolution approach to take depends on the outcome
        acceptable to the party enforcing their rights. Not all disputes need to
        be taken to court, and a trade mark attorney with experience in
        different approaches to trade mark dispute resolution and in trade mark
        litigation can give careful advice on the pros and cons of each type of
        resolution and help identify the avenues of resolution that are most
        suitable.
      </p>
    </Layout>
  )
}
