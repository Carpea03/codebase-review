import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function AustralianPatentProcess() {
  const data = [
    { title: 'Services', link: '/services' },
    { title: 'How to Patent', link: '/how-to-patent' },
    { title: 'Australian Patent Process', link: '' },
  ]
  return (
    <Layout navData={data} active={"Services"}>
      <Head>
        <title>Australian Patent Process | Baxter IP Sydney & Melbourne</title>
        <meta
          name="description"
          content="The Australian patent process commences at filing and includes examination which, when successful, results in grant of the patent."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/australian-patent-process"
        />
      </Head>
      <div className="mt-10">
        <h1>Australian Patent Process</h1>
        <p>
          Developing new technologies allows businesses to generate significant
          new revenue streams and charge higher margins. However, at the start
          of the process the value of a new invention is difficult to measure.
          Only once you have built the product and started selling it will you
          develop the associated revenue stream.
        </p>
        <p>
          Having spent time and money developing a great idea, you will want to
          stop others from copying it and competing with you. As it&apos;s
          cheaper and easier to simply copy a product rather than have to design
          and invent it, copycats are, typically, able to undercut the price at
          which you can sell your product. This is because the inventor of a new
          innovation will need to recoup the investment and research and
          development costs of the innovation through sales of the commercial
          product.
        </p>
        <p>
          The good news is that there is a way to stop this from happening if
          you are able to obtain patent protection and the start of the
          Australian patent process is to file a patent application for your
          invention. Obtaining a patent on your invention is a way of obtaining
          a legal monopoly for your invention and will allow you to take action
          against those people who copy your invention.
        </p>
        <p>
          If you do not want to sell the product yourself, once your patent has
          been filed you can licence your invention if you choose to allow
          others to use your invention. This means you could still be paid for
          your idea even if you don&apos;t want to commercialise it yourself.
          This payment may take the form of a lump sum payment, royalty fees, a
          combination of both or another scheme altogether.
        </p>
        <p>
          Importantly, it is crucial that you file a patent application before
          you sell or publicly disclose your invention. This is because once the
          information is in the public domain it is deemed to be public
          information and you cannot patent public information even if you came
          up with the idea. Therefore you need to speak to a patent attorney and
          file your patent application before disclosing your invention to any
          third party.
        </p>
        <p>
          The Australian patent process can be lengthy depending on the options
          you choose and therefore obtaining a patent on your invention is a
          long term investment in your idea. Depending on your invention you
          could get a granted patent within 6 months but the process typically
          takes between 1 &ndash; 3 years before a patent office can undertake a
          full review of your application and the various processes completed.
          Your patent attorney can also match the application timelines with
          your commercial timelines to ensure you are taking the most
          appropriate commercial pathway. The best thing you can do is obtain
          expert advice as soon as possible.
        </p>
        <p>
          Click through below to learn more about the different stages of the
          Australian patent process:
        </p>
        <ul>
          <li>
            <Link href="https://www.baxterip.com.au/patent-application">
              Filing an Australian standard patent application
            </Link>
          </li>
          <li>
            <Link href="https://www.baxterip.com.au/patent-examination">
              Examination of an Australian patent application
            </Link>
          </li>
          <li>
            <Link href="https://www.baxterip.com.au/patent-opposition-process-and-acceptance">
              Patent opposition process and acceptance
            </Link>
          </li>
          <li>
            <Link href="https://www.baxterip.com.au/patent-grant-and-renewal">
              Grant and renewal of an Australian patent
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
