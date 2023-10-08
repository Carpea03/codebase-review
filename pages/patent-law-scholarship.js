import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function PatentLawScholarship() {
  const data = [
    { title: 'Values', link: '/about' },
    { title: 'Baxter IP Scholarship', link: '' },
  ]
  return (
    <Layout navData={data} active={"Values"}>
      <Head>
        <title>Baxter IP Scholarship US$ 1,000 Cash Award | Baxter IP</title>
        <meta
          name="description"
          content="Baxter IP, Patent & Trade Mark Attorneys aim to help a deserving student with a passion for innovation through a $1000 Cash Award."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/patent-law-scholarship"
        />
      </Head>
      <div className="mt-10"></div>
      <h1>Baxter IP Scholarship $1000 Cash Award</h1>
      <p>Ideas shape the future. Help us protect the future with good ideas.</p>

      <h2>What is the Baxter IP Scholarship?</h2>

      <p>
        We&apos;re passionate about protecting ideas and turning them into
        reality. We believe that young people hold new insights for growth, with
        their fresh ideas driving paradigm shifts in business and social impact.
      </p>

      <p>
        We want to find people who embody this same passion for building the
        future.
      </p>

      <h2>Who are we looking for?</h2>

      <p>
        <Link href="/about">Baxter IP Patent &amp; Trade Mark Attorneys</Link>{' '}
        is looking for a student who has insights around new areas of
        innovation.
      </p>

      <p>
        The scholarship is open to any college or graduate student in the{' '}
        <strong>sciences or engineering worldwide</strong>. The student should
        be at least 18 years old.
      </p>

      <p>
        If successful, the student will be awarded with a USD $1000 scholarship
        grant toward any university or tertiary institution of their choosing.
      </p>

      <h2>Who are we?</h2>

      <p>
        Since 2007, Baxter IP Patent &amp; Trade Mark Attorneys has been
        actively helping startups and innovators see their ideas come to
        fruition. By devising sound intellectual property strategies to protect
        great ideas and matching this with careful commercialisation advice,
        startups can maximise their opportunity for success.
      </p>

      <h2>How can you apply?</h2>

      <ul>
        <li>
          Applicants must publish an essay on their personal blog post to enter.
          On your blog:
          <ol>
            <li>
              Post your answer to the question:{' '}
              <strong>
                &ldquo;Which industries are most ripe for disruption and how
                would IP protection play a role?&rdquo;
              </strong>
            </li>
            <li>
              Cite an Intellectual Property method from the Baxter IP website (
              <Link href="/">www.baxterip.com.au</Link>) within the text of your
              essay.
            </li>
            <li>Essay length must be between 1,000-1,500 words.</li>
          </ol>
        </li>
        <li>
          Send your application to{' '}
          <Link href="mailto:mail@baxterip.com.au">mail@baxterip.com.au</Link>{' '}
          with the subject line &ldquo;
          <strong>Baxter IP Scholarship $1,000 Cash Award</strong>&rdquo; with
          the following information:
          <ul>
            <li>Current education institution and course</li>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Email address</li>
            <li>URL of your essay blog post</li>
          </ul>
        </li>
      </ul>

      <h2>Terms and conditions</h2>

      <ol>
        <li>
          Baxter IP Patent &amp; Trade Mark Attorneys will award one or more
          scholarships per calendar year commencing in April 2020, depending on
          the quality of the applications and at the discretion of the donors.
        </li>
        <li>
          The scholarship is open to full-time or part-time students&nbsp;
          <strong>worldwide</strong> who are currently enrolled in a tertiary
          institution or higher at the time of application.
        </li>
        <li>The application deadline is March 31, 2020, 6:00 PM PST.</li>
        <li>
          The funds will be forwarded to the financial aid section of the
          winner(s)&apos;s appointed university.
        </li>
        <li>The fund cash award currency is USD.</li>
      </ol>

      <h2>Privacy</h2>

      <p>
        By submitting an application, the applicant authorises Baxter IP Patent
        &amp; Trade Mark Attorneys to use their contact information for the
        purposes of verification and contacting in the event of winning the
        scholarship. This information may also be used for tax reasons and other
        legal documentation.
      </p>
    </Layout>
  )
}
