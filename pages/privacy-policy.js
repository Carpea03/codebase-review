import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function LivingOurValues() {

  const data = [
    { title: 'Privacy Policy', link: '' },
  ]

  return (
    <Layout navData={data} bannerData={true} layout={2} title={"Privacy Policy"}>
      <Head>
        <title>
          Privacy Policy | Baxter IP Sydney & Melbourne
        </title>
        <meta
          name="description"
          content="Learn how we protect your Personal Information. Committed to privacy compliance. GDPR included."
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/privacy-policy"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/privacy-policy"
          hreflang="x-default"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/privacy-policy"
          hreflang="en-AU"
        />
      </Head>
      <div className="mt-10"></div>
      <p>Baxter Patent Attorneys Pty Ltd (ABN #26163635283), henceforth “Baxter IP” or “our” or “we” is in the business of providing patent & trade mark and associated services (<b>Services</b>).</p>

      <p>This Policy governs how BAXTER IP will deal with your Personal Information collected in connection with the Services.</p>

      <p>This Policy also applies to Personal Information collected by BAXTER IP in connection with its website, social media accounts, applications, software and other technological means (<b>Online Platforms</b>), as well as in connection with any direct communication between you and BAXTER IP.</p>

      <p>BAXTER IP uses third parties located both locally and overseas in addition to its own resources to provide these Services.</p>

      <h2 className="pl-10">1. <b>SCOPE OF THIS PRIVACY POLICY</b></h2>
      <ol className="pl-20">
        <li>
          We understand that when accessing our Services, the privacy and confidentiality of Personal Information (as defined under the Privacy Act) is important to you and your customers. That’s why we fully respect your rights to privacy and are committed to protecting the personal and financial details you provide us in line with this Privacy Policy. This Privacy Policy applies to our Services and all individuals who use our Services or whose Personal Information is processed by BAXTER IP.
        </li>
          <li>
          We are committed to protecting the privacy of everyone who uses our Online Platforms and/or our Services, for them to understand what Personal Information we collect and store, and why we do so, how we receive and/or obtain that information, the rights an individual has with respect to their Personal Information in our possession, and with complying with the Australian Privacy Principles set out in the Privacy Act 1988 (Cth) (Privacy Act) and the General Data Protection Regulation (EU) 2016.679 (<b>GDPR</b>).
        </li>
      </ol>

      <h2 className="pl-10">2. <b>THE INFORMATION WE COLLECT</b></h2>
      <p className="pl-20">We may collect Personal Information that allows us to identify who an individual is and share Personal Information.The type of information we may collect includes:
        <ul>
          <li>
            Personal Information – We may collect personal details such as an individual’s name, location, date of birth and nationality allowing us to identify who the individual is;
          </li>
          <li>
            Contact Information – We collect information such as an individual’s email address, telephone & fax number, third-party user names, residential, business and postal address and other information that allows us to contact the individual;
          </li>
          <li>
            Financial Information – We collect financial information such as any bank or credit card details used to transact with us and other information that allows us to transact with the individual and/or provide them with our Services;
          </li>
          <li>
            Statistical Information – We collect behavioral and statistical information about an individual and businesses in connection with the Services and/or the Online Platforms.
          </li>
        </ul>
      </p>

      <h2 className="pl-10">3. <b>WHY WE COLLECT PERSONAL INFORMATION</b></h2>
      <ol className="pl-20">
        <li>
          We collect your personal information so that we can carry out the following actions:
          <ul>
            <li>
              to provide our Services;
            </li>
            <li>
              to enable you to use our Online Platforms;
            </li>
            <li>
              to communicate with you, including about our Services and offers which might interest you;
            </li>
            <li>
              to provide you with information or advice;
            </li>
            <li>
              to process payments by or to you in connection with our Services;
            </li>
            <li>
              to create accounts, tax invoices or receipts;
            </li>
            <li>
              to provide your personal information to third parties in order for them to supply the Services to you;
            </li>
            <li>
              to consider and respond to complaints made by you.
            </li>
          </ul>
         </li>
         <li>
          We may disclose additional purposes for collection of your personal information in collection statements at the point of collection.
         </li>
      </ol>
      
      <h2 className="pl-10">4. <b>HOW INFORMATION IS COLLECTED</b></h2>
      <p className="pl-20">Information is collected in association with your use of the Services, an enquiry about BAXTER IP or generally dealing with us directly or via our Online Platforms.</p>

      <h2 className="pl-10">5. <b>WHEN PERSONAL INFORMATION IS USED & DISCLOSED</b></h2>
      <ol className="pl-20">
        <li>
          We will not use any Personal Information other than for the purpose for which it was collected other than with the individual’s permission.
        </li>
        <li>
          We will retain Personal Information for the period necessary to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
        </li>
        <li>
          Subject to clauses 8, we will not sell an individual’s Personal Information to unrelated third parties.
        </li>
        <li>
          There are some circumstances in which we must disclose an individual’s information:
            <ul>
              <li>
                where we reasonably believe that an individual may be engaged in fraudulent, deceptive or unlawful activity that a governmental authority should be made aware of;
              </li>
              <li>
                as required by any law (including the Privacy Act and GDPR); and/or
              </li>
              <li>
                in order to sell our business (in that we may need to transfer Personal Information to a new owner).
              </li>
            </ul>
        </li>
      </ol>

      <h2 className="pl-10">6. <b>SENSITIVE INFORMATION</b></h2>
      <p className="pl-20">Sensitive information is information about you that reveals your racial or ethnic origin, political opinions, religious or philosophical beliefs or affiliations, membership of a professional or trade association, membership of a trade union, details of health, disability, sexual orientation or criminal record.It is our policy to only collect your sensitive information where it is reasonably necessary for our functions or activities and either you have consented or we are required or authorised under law to do so.</p>

      <h2 className="pl-10">7. <b>OPTING “IN” OR “OUT”</b></h2>
      <ol className="pl-20">
        <li>
          By clicking “I Agree” or any other button indicating your acceptance of this privacy policy, you expressly consent to the collection and use of your Personal Information in accordance with this privacy policy.
        </li>
        <li>
          An individual may opt to not have us collect their Personal Information (for example by unsubscribing to any marketing emails received). This may prevent us from offering them some or all of our services and may terminate their access to some or all of the services they access with or through us.
        </li>
        <li>
          If an individual believes that they have received information from us that they opted out of receiving, they should contact us on the contact details set out in clause 15.
        </li>
      </ol>

      <h2 className="pl-10">8. <b>DE-IDENTIFIED INFORMATION</b></h2>
      <ol className="pl-20">
        <li>
          We may use your Personal Information in de-identified form (de-identification being a process by which a collection of data or information is altered to remove or obscure personal identifiers and personal information) to assist us in running our business. We may also provide, including by way of sale, de-identified information in aggregated form, to third parties.
        </li>
        <li>
          When your Personal Information is included in de-identified, aggregated data, it is not possible to identify you or anything about you from that data.
        </li>
      </ol>

      <h2 className="pl-10">9. <b>COOKIES</b></h2>
      <p className="pl-20">We may use temporary (session) cookies or permanent cookies when you access our Online Platforms and/or Services. This allows us to recognise your browser and track the web pages you have visited. You can switch off cookies by adjusting the settings on your web browser.</p>

      <h2 className="pl-10">10. <b>THE SAFETY & SECURITY OF PERSONAL INFORMATION</b></h2>
      <ol className="pl-20">
        <li>
          We may hold your personal information in either electronic or hard copy form.
        </li>
        <li>
          If you provide information to us electronically we retain this information in our computer systems and databases. If you provide information to us in hard copy (paper) this information is normally retained in our files and a copy is made to our electronic files.
        </li>
        <li>
          We use industry standard security measures to safeguard and protect your information.
        </li>
        <li>
          We may disclose your personal information to third parties and service providers located overseas in connection with any purpose, including to overseas cloud computing hosts. We take reasonable steps to ensure that the overseas recipients of your personal information do not breach the privacy obligations relating to your personal information.
        </li>
        <li>
          We are not responsible for the privacy or security practices of any third party (including third parties that we are permitted to disclose an individual’s Personal Information to in accordance with this policy or any applicable laws). The collection and use of an individual’s information by such third parties may be subject to separate privacy and security policies.
        </li>
        <li>
          If an individual suspects any misuse or loss of, or unauthorised access to, their Personal Information, they should let us know immediately.
        </li>
        <li>
          Where we become aware of any breach to our security systems that breaches or is likely to result in a breach of your rights or freedoms with respect to your Personal Information, we will notify you and any supervisory authority as required.
        </li>
        <li>
          We are not liable for any loss, damage or claim arising out of another person’s use of the Personal Information where we were authorised to provide that person with the Personal Information
        </li>
      </ol>

      <h2 className="pl-10">11. <b>HOW TO ACCESS AND/OR UPDATE INFORMATION</b></h2>
      <ol className="pl-20">
        <li>
          If you would like us to update or amend your personal information, please contact us on the contact details set out in clause 15 and we will make the requested amendments.
        </li>
        <li>
          We may ask you to verify your identity to ensure that personal information we hold is not improperly accessed.
        </li>
      </ol>

      <h2 className="pl-10">12. <b>RIGHT TO BE FORGOTTEN</b></h2>
      <p className="pl-20">In the event that you decide that you no longer want us to hold your Personal Information, you may notify us in writing on the contact details set out in clause 15 of your desire for us to delete your Personal Information on record. We will use our best endeavours and comply with all legal requirements within a reasonable timeframe to delete your Personal Information, unless we are required by law to retain such information.</p>
      
      <h2 className="pl-10">13. <b>LINKS</b></h2>
      <p className="pl-20">Links from our Online Platforms or via our Services to third party services that we do not operate or control are provided for your convenience. We are not responsible for the privacy or security practices of services that are not covered by this Privacy Policy. Third party services should have their own privacy and security policies which we encourage you to read before supplying any personal information to them.</p>

      <h2 className="pl-10">14. <b>COMPLAINTS AND DISPUTES</b></h2>
      <ol className="pl-20">
        <li>
          If an individual needs to contact us or has a complaint about our handling of their Personal Information, they should address their communication in writing to the details below:
          <br/><span><b>Privacy Officer:</b> Laura Hamilton</span>
          <br/><span><b>Address:</b> 3A02, 1 Bligh St, Sydney, NSW 2000</span>
          <br/><span><b>Email:</b> <a href="mailto:laura.hamilton@baxterip.com.au" className="text-red-500">laura.hamilton@baxterip.com.au</a></span>
        </li>
        <li>
          If we have a dispute regarding an individual’s Personal Information, we both must first attempt to resolve the issue directly between us.
        </li>
        <li>
          If we become aware of any unauthorised access to an individual’s Personal Information we will inform them and any supervisory authority as required, at the earliest practical opportunity once we have established what was accessed and how it was accessed.
        </li>
      </ol>

      <h2 className="pl-10">15. <b>GDPR</b></h2>
      <ol className="pl-20">
        <li>
          If you are:
          <ul>
            <li>
              A resident of the European Union accessing our Online Platforms or receiving our Services in Australia; or
            </li>
            <li>
              accessing our Online Platforms or receiving our Services from within the European Union,
            </li>
          </ul>
          then in addition to our obligations under the Privacy Act, BAXTER IP is required to comply with the GDPR with respect to your Personal Information.
        </li>
        <li>
          Any reference to Personal Information in this Privacy Policy is also a reference to Personal Data (as defined under the GDPR).
        </li>
        <li>
          BAXTER IP takes the security and privacy of your Personal Information seriously and has prepared this privacy policy and taken measures to collect, process and hold all Personal Information in compliance with both the Privacy Act and GDPR regardless of the user. Therefore, no additional terms for GDPR users are required.
        </li>
      </ol>

      <h2 className="pl-10">16. <b>ADDITIONS TO THIS POLICY</b></h2>
      <p className="pl-20">If we decide to change this Privacy Policy, we will post the changes on our website. Please refer back to this Privacy Policy to review any amendments.</p>

      <p><b><i>Version Date: 2 Nov 2020</i></b></p>
    </Layout>
  )
}
