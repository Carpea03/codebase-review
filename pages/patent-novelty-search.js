import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentNoveltySearch() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Patent', link: '/how-to-patent' },
    { title: 'Stage 2: Patent Novelty Searches', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"} stepper={2}>
      <Head>
        <title>
          International Patent Search | Patent novelty search | Baxter IP
        </title>
        <meta
          name="description"
          content="An international patent search is normally a form of novelty search conducted to ensure that your IP is novel in light of the international prior art."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-novelty-search"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Stage 2: Patent Novelty Searches</h1>
      <h2>Novelty Search</h2>

      <p>
        Conducting a novelty search of prior art patents is valuable since it
        provides you with an indication of whether a patent application for your
        invention will be allowed by IPA.
      </p>

      <p>
        We can direct IPA to carry out what is known as an International Type
        Search (ITS) on your invention after the filing of a provisional patent
        application. An ITS should provide an indication of whether your
        invention is new, although the search should not be considered to be
        exhaustive. We are also able to use the results of the ITS to draft a
        more focused PCT International Patent Application.
      </p>

      <p>
        Prior art searching can also be performed prior to filing a patent
        application, albeit not as cost effectively as an ITS. Whilst it is
        likely that both of these searches will identify relevant results,
        neither of these searches is thorough or exhaustive.
      </p>
    </Layout>
  )
}
