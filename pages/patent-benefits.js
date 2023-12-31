import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Nav from '../components/Nav'

export default function PatentBenefits() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Patent', link: '/how-to-patent' },
    { title: 'Patent Benefits', link: '' },
  ]
  return (
    <>
      <Layout navData={data} active={"Services"}>
        <Head>
          <title>Benefits of a Patent | Baxter IP Sydney & Melbourne</title>
          <meta
            name="description"
            content="Thinking about filing a patent application? Learn about the benefits of filing a patent application."
          />
          <link
            rel="canonical"
            href="https://www.baxterip.com.au/patent-application"
          />
        </Head>
        <div className='mt-10'>
        <h1 className='test'>Benefits of a Patent</h1>
        <p>
          The patent system is designed to stimulate invention by providing
          inventors with a monopoly to develop and commercialise their
          invention. Applying for a patent can be a fairly lengthy process but
          there are many benefits associated with filing a patent. In order for
          a patent to be granted, the invention has to be novel and involve an
          inventive step.
        </p>
        <p>There are several benefits in patenting an invention, including:</p>
        <ul>
          <li>
            gaining a monopoly to commercialise and develop an invention. Patent
            protection can last up to 20 years (25 years for pharmaceuticals);
          </li>
          <li>lawfully restricting competition;</li>
          <li>
            potential tax benefits (e.g. for health care inventions in
            Australia);
          </li>
          <li>
            creating/obtaining an intangible asset that can be used to increase
            credibility, attract investors and funding; and
          </li>
          <li>
            the ability to generate income through licensing the invention
            (including internationally).
          </li>
        </ul>
        <h2>Patent assets generate income and protect profit</h2>
        <p>
          A patent is an asset which adds value to a company. It can be sold,
          transferred, licensed and used as collateral to obtain finance. A
          patent in and of itself does not generate income, revenue is generated
          via commercialisation of the product and/or licensing fees.
        </p>
        <p>
          A well drafted patent can provide the inventor with a head start to
          commercialise the invention and restrict competition, allowing the
          inventor to charge and control its market driven process rather than
          being subject to competitor driven prices. If a new product is
          introduced to the market and becomes highly commercialised, it is
          often reverse engineered or copied by competitors. This often allows
          the competitors to sell the same or similar product at a lower price
          as they did not have to bear the original costs associated with
          research and development. If the invention is not protected, the
          originator will have to rely on its brand name or reduce its prices to
          remain competitive. If patent protection has been obtained, the
          originator will be able to issue a cease and desist letter to the
          competitors. Legal proceedings can also be commenced, if necessary, to
          enforce the patent, restrict competition and obtain damages where
          applicable (these include reputational damage and loss of profits).
        </p>
        <p>
          The ability to restrict competition and have protection for up to 20
          years allows inventors to patent inventions that may not yet be fully
          developed. It also allows concepts that may not yet be commercially
          viable to be protected for future commercialisation. Concepts that may
          currently appear to be futuristic or have no current commercial value
          may become very valuable in the course of the 20 years of protection
          provided by a patent.
        </p>
        <h2>Patent tax breaks</h2>

        <p>
          Certain inventions in the healthcare domain may also attract tax
          benefits. The Australian Government is introducing a “patent box”
          system where IP derived income will be taxed at a much lower rate of
          17% for inventions in the medical device and biotechnology spaces.
        </p>
        <h2>Patents are better than confidentiality agreements</h2>
        <p>
          Once a patent application has been filed, the invention can be
          disclosed to potential investors, collaborators and granting bodies
          without having to rely on the use of confidentiality agreements. There
          are many pitfalls in relying on confidentiality agreements to protect
          an invention, these include difficulties in enforcing the agreement,
          difficulties in quantifying and calculating remedies for breach and
          the irreversible damage of losing the ability to obtain patent
          protection due to prior disclosure.
        </p>
        <h2>Getting started with patenting</h2>
        <p>
          There have been cases where inventors have disclosed their invention
          more than 12 months before filing (in conference proceedings, in
          tender applications and the like) and were therefore not able to apply
          for a patent. It is important to note that Australia (like most
          jurisdictions) is a “first to file”, and not a “first to invent”
          jurisdiction. If two inventors are working on a similar invention in
          parallel, the first to file will be granted the patent (assuming all
          other requirements are met) and the other inventor will then have no
          rights to commercialise the invention. It is therefore extremely
          important that inventors seek advice on the protection of their
          invention at a very early stage.
        </p>
        <p>
          In Australia, it is also possible to file for a provisional patent
          which gives inventors 12 months to decide whether to file a full
          patent application. The filing of a provisional patent establishes an
          internationally recognised priority date and gives an inventor time to
          decide whether the invention is worth patenting. It also allows
          disclosure of the invention for commercialisation and investment
          purposes without needing to rely on a confidentiality agreement.
        </p>
        <p>
          The key takeaway message is to contact a qualified patent attorney to
          get advice on how to protect your invention from the early stages. A
          successful patenting strategy involves deciding in which jurisdiction
          to file, drafting the claims in the patent appropriately so it has
          less chance of being contested and managing any identified competitor
          infringements. The ability to enforce a patent and restrict
          competition depends on the drafting of the claims in the patent
          application and the scope of the invention. It is, thus, vitally
          important to consult a professional patent attorney who can ensure
          that the claims are drafted to provide maximum protection and are yet
          not so broad that the requirements of examination cannot be met.
          Baxter IP has the skill and expertise required to advise you on every
          step of your patenting journey.
        </p>
        </div>
      </Layout>
    </>
  )
}
