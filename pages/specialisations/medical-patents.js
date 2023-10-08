import Image from 'next/image'
import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
import AttorneysCard from '../../components/attorneysCard'
import { profiles, awards } from '../../utils/const/people'
import ClientsBox from '../../components/clientsBox'

const myLoader = ({ src, width, quality, host = 'http://localhost:3000' }) => {
  return `${host}/images/${src}?w=${width}&q=${quality || 75}`
}

export default function MedicalPatents() {
  const data = [
    { title: 'Industry Expertise', link: '/expertise' },
    { title: 'Medical Device Patents', link: '' },
  ]
  return (
    <Layout navData={data} active={'Services'}>
      <Head>
        <title>Medical Device Patents | Baxter IP patent attorneys</title>
        <meta
          name="description"
          content="File a patent to protect your medical device patents, as well as new methods of medical treatment. Talk to one of our medical device subject matter experts."
        />
         <link
          rel="canonical"
          href="https://www.baxterip.com.au/specialisations/medical-patents"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/specialisations/medical-patents"
          hrefLang="en-au"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E6%8A%80%E6%9C%AF%E9%A2%86%E5%9F%9F/%E5%8C%BB%E7%96%97%E5%99%A8%E6%A2%B0%E4%B8%93%E5%88%A9"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/specialisations/medical-patents"
        />
      </Head>
      <div className='mt-10'>
        <h1>Medical Device Patents</h1>
        <p>
          One of the most game-changing patents ever awarded in the field of
          medical devices, was for the revolutionary cardiac pacemaker (US Pat
          No. 3,057,356). This patent was issued in October 1962 to Wilson
          Greatbatch. Medical devices are defined as any instrument or material
          that is intended for use in the diagnosis, prevention, monitoring,
          treatment, and alleviation of disease or injury in humans, or in
          investigating, replacing and modifying the human body or a certain
          bodily process.
        </p>
        <p>
          In 2018, medical technology is the largest patent source in Australia
          for Australian patents. According to a{' '}
          <Link
            href="https://www.ipaustralia.gov.au/sites/g/files/net856/f/advanced_manufacturing_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            report
          </Link>{' '}
          released in 2017, Australia&rsquo;s medical patent landscape has been
          dominated by diagnostic instruments, and comprised approximately 22%
          of{' '}
          <Link href="https://www.baxterip.com.au/pct-patent">
            Australian PCT applications
          </Link>{' '}
          in the medical devices field, followed by syringes, catheters and
          other probes (13%), prostheses (12%) and respiratory care (12%). Other
          hotspot areas for medical device patents included: diagnostic imaging
          and therapy; surgical instruments, biocompatible materials and
          sterilisation; patient transport and care apparatus; physical therapy
          apparatus; eye and ear care; dental apparatus; dressings and first
          aid; life-saving equipment; laboratory equipment; veterinary
          procedures and apparatus and anaesthetics.
        </p>
        <p>
          The top filers, ResMed and Cochlear, own about 20% of the total filed
          inventions in the medical devices field. Most applications have been
          filed by single parties; among collaborators, the most prolific filers
          in the field are CSIRO and universities such as University of
          Technology, Sydney, University of Sydney, University of Queensland,
          Monash University and University of Melbourne.
        </p>
        <h2>What medical devices are patentable?</h2>
        <p>
          Medical devices, methods of medical treatment and medical software are
          all patentable in Australia.
        </p>
        <h3>Benefits and challenges of filing medical device patents</h3>
        <p>
          For any type of medical device, IP protection is essential to protect
          profit margins and to justify the investment in medical technology
          development. In the medical devices industry as in other industries,
          patent literature can be used as indicators of R&D performance and can
          reflect the current state of science and technology. In addition,
          medical device patents serve as insurance for investors aiming to
          commercialise ideas for devices that can potentially revolutionise the
          medical field.
        </p>
        <p>
          Having patent protection means that the first person to file a patent
          application claiming the rights to a certain innovative medical device
          can sell or license the technology to another party to be able to
          immediately regain a portion of the funding that went into the
          development of the product. This is a possible route for parties
          lacking the means or interest in progressing the innovation to
          commercialisation.
        </p>
        <p>
          Invasive medical devices typically need to undergo significant testing
          to gain regulatory approval before they can be brought to market due
          to the inherent risk associated with such devices. In the most recent
          amendment to the patent act, the{' '}
          <i>Intellectual Property Laws Amendment (Raising the Bar) Act 2012</i>
          , provisions for an exemption to infringement of non-pharmaceutical
          patents for gaining regulatory approval and conducting research were
          established. This allows researchers to conduct genuine scientific
          inquiry without the risk of infringing patents.
        </p>
        <h3>Examples of granted medical device patent applications</h3>
        <table>
          <tbody>
            <tr>
              <th>Tissue engineering</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2015220781"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2015220781"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2015220781
                    </Link>
                  </dt>
                  <dd>
                    FGF-18 in graft transplantation and tissue engineering
                    procedures
                  </dd>
                </dl>
                <p>
                  <small>Merck Patent GmBH</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Prosthetics</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018204135"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018204135"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2018204135
                    </Link>
                  </dt>
                  <dd>Prosthetic capsular devices, systems, and methods</dd>
                </dl>
                <p>
                  <small>Omega Ophthalmics LLC</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Diagnostics</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2017200853"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2017200853"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2017200853
                    </Link>
                  </dt>
                  <dd>
                    MiRNA and its diagnostic therapeutic uses in diseases or
                    conditions associated with melanoma, or in diseases or
                    conditions associated with activated BRAF pathway
                  </dd>
                </dl>
                <p>
                  <small>
                    InteRNA Technologies BV; Koninklijke Nederlandse Akademie
                    van Wetenschappen
                  </small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Monitoring</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018200163"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018200163"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2018200163
                    </Link>
                  </dt>
                  <dd>
                    Methods of therapeutic monitoring of phenylacetic acid
                    prodrugs
                  </dd>
                </dl>
                <p>
                  <small>Horizon Therapeutics LLC</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Laboratory</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2013402428"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2013402428"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2013402428
                    </Link>
                  </dt>
                  <dd>
                    A device for washing, disinfecting and/or sterilizing
                    medical, dental, laboratory and/or pharmaceutical goods and
                    methods and program products for use therein
                  </dd>
                </dl>
                <p>
                  <small>Getinge Sterilization AB</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Therapeutic device</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2016202644"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2016202644"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2016202644
                    </Link>
                  </dt>
                  <dd>Device for use in endoluminal vacuum therapy</dd>
                </dl>
                <p>
                  <small>Kleiner, Daniel Eduard</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Implants</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2016252274"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2016252274"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2016252274
                    </Link>
                  </dt>
                  <dd>Absorbable implants for plastic surgery</dd>
                </dl>
                <p>
                  <small>Tepha, Inc.</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>Surgery</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2015401598"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2015401598"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2015401598
                    </Link>
                  </dt>
                  <dd>
                    Argon beam coagulation flex probe for laparoscopic surgery
                  </dd>
                </dl>
                <p>
                  <small>Conmed Corporation</small>
                </p>
              </td>
            </tr>
            <tr>
              <th>General healthcare systems</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2016216665"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2016216665"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AU Patent # 2016216665
                    </Link>
                  </dt>
                  <dd>
                    Home medical device systems and methods for therapy
                    prescription and tracking, servicing and inventory
                  </dd>
                </dl>
                <p>
                  <small>Baxter Healthcare SA; Baxter International Inc</small>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>The Baxter IP approach to filing medical device patents</h2>
        <p>
          The medical devices experts at Baxter IP are more than just&nbsp;
          <Link href="https://www.baxterip.com.au/patent-attorney">
            patent attorneys
          </Link>
          . They are focused on marketable medical product features – clients
          need more than just proficiency in drafting and preparing patent
          applications.
        </p>
        <p>
          A patent attorney with an extensive knowhow of the subject matter can
          see beyond these requirements and go the extra mile to derive the
          maximum gain for the client by designing a carefully considered patent
          strategy that can take the client from filing to commercialisation of
          the product. In addition, our patent attorneys have backgrounds in
          engineering and the medical sciences, enabling them to understand the
          most complex of medical devices and processes and present these
          concepts in a way that is coherent and easily understandable. In
          addition, our attorneys are experienced in prosecuting patents and
          knowledgeable about court proceedings, which may help in forecasting
          the possible enforcement requirements involving the medical device.
        </p>
        <p>
          Depending on specific circumstances, however, other strategies may be
          more appropriate. It is important to discuss your particular situation
          with a qualified attorney to determine the best strategy in each case.
        </p>
        <h3>
          Examples of medical device patent applications filed through Baxter IP
        </h3>
        <ol>
          <li>
            <Link
              title="AU Patent #2019900690"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2019900690"
            >
              <i>AU Patent #2019900690</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>
              An attachment means for attaching medical device to tissue, a
              system for attaching a medical device to tissue, a medical device
              having an attachment means, a method of attached a medical device
              to tissue, and a method of manufacturing an attachment
              means.&nbsp;
            </strong>
            Global Surgical Innovations Holdings Pty Ltd
          </li>
          <li>
            <Link
              title="AU Patent #2018204882"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018204882"
            >
              <i>AU Patent #2018204882</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>
              Devices for maintaining an oropharyngeal airway, methods of
              creating an oropharyngeal airway and systems for maintaining
              oropharyngeal airway.&nbsp;
            </strong>
            Medical Advances Through Engineered-Design (MATE) Pty Ltd
          </li>
          <li>
            <Link
              title="AU Patent #2018204355"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018204355"
            >
              <i>AU Patent #2018204355</i>
            </Link>
            &nbsp;–&nbsp;
            <b>Communication apparatus for radiation therapy device.&nbsp;</b>
            Elekta Limited
          </li>
          <li>
            <Link
              title="AU Patent #2018200589"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018200589"
            >
              <i>AU Patent #2018200589</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>Devices and methods for stimulating nerves.&nbsp;</strong>
            Fempulse, LLC; Haessler, Alexandra
          </li>
        </ol>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl text-center mt-20 lg:px-6 not-format">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our medical device industry experts
          </h2>
        </div>
      </div>
      <AttorneysCard
        peoples={profiles[0]?.teamMembers?.filter(
          (people) =>
            people.isShow === true &&
            people.linkId !== 'dr-sean-klinkradt' &&
            people.linkId !== 'andrew-balis' &&
            people.linkId !== 'dr-richard-grant'
            
        )}
        awards={awards}
      />
      <div>
        <h2>What are the key regions for medical device patents?</h2>
        <p>
          <svg
            id="svg-replaced-7"
            class="bip-svg replaced-svg svg-replaced-7"
            viewBox="0 0 996.83 564.98"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>What are the key regions for medical device patents?</title>
            <rect fill="none" height="564.98" width="996.83"></rect>
            <polygon
              fill="#d6d6d6"
              points="335.72 521.58 334.65 518.88 333.82 517.23 333.82 525.32 333.82 525.32 333.82 517.23 332.29 516.81 330.31 518.27 329.62 520.72 328.51 522.38 325.66 521.08 322.65 518.69 320.88 517.95 323.83 521.96 326.02 523.93 328.72 526 330.97 526.55 332.53 527.68 333.8 527.98 334.86 528.11 336.69 526.94 337.4 525.42 336.11 525.32 336.12 525.32 337.41 525.42 338.51 526.75 340.54 526.55 341.52 524.7 338.51 523.78 335.72 521.58"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="797.89 480.12 796.22 480.66 795.05 481.05 792.97 480.07 791.57 479.81 791.52 481.11 792.76 483.6 793.05 485.51 794.37 488.02 795.69 488.11 796.13 488.27 797.63 486.23 798.38 487.04 798.6 484.69 799.33 483.7 799.18 480.31 797.89 480.12"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="809.64 443.58 809.58 442.22 808.98 440.32 807.3 438.41 806.31 437.52 804.79 436.09 804.42 433.63 803.89 433.98 803.02 432.98 802.16 433.49 801.33 431 800.1 429.57 800.39 429.02 798.95 428.03 797.43 426.95 795.11 425.77 794.41 424.25 794.62 423.09 794.04 421.18 793.49 420.91 793.16 419.8 792.71 417.9 792.93 416.92 791.89 416.06 791.18 415.12 789.81 415.95 789.03 414.23 789.09 413.45 788.93 412.21 788.15 411.11 788.06 410.19 787.53 409.93 787.38 408.57 786.78 407.5 785.98 408.31 785.93 408.93 785.52 410.13 785 411.28 785.34 412.01 784.92 412.45 784.64 414.11 784.89 415.36 784.73 416 785.03 417.07 784.38 418.83 784.11 420.04 783.68 421.03 783.26 422.23 781.84 423 779.79 422.24 779.46 421.55 778.34 420.98 777.73 420.98 776.18 419.66 775.08 418.89 773.42 418.18 771.72 416.96 771.57 416.34 772.33 415.26 772.96 414.17 772.71 413.29 773.44 413.21 774.25 412.32 774.83 411.15 773.84 410.07 773.33 410.49 772.53 410.3 771.27 410.93 769.94 410.26 769.33 410.48 767.53 409.92 766.39 409.02 764.96 408.49 763.82 408.8 765.39 409.52 765.43 410.63 763.62 411.05 762.53 410.79 761.23 411.56 760.3 412.8 760.63 413.35 759.67 413.92 758.64 415.68 759.09 416.89 757.73 416.68 756.39 416.67 755.2 415.36 753.62 414.35 752.58 414.65 751.63 414.96 751.6 415.51 750.65 415.25 750.63 415.87 749.55 416.24 749.03 417.11 747.86 418.2 747.6 419.89 746.65 419.41 745.97 420.49 746.74 421.54 745.83 421.99 744.92 420.06 743.42 421.95 743.37 423.17 743.27 424.07 742.02 425.21 741.47 426.42 740.3 427.42 738.05 428.08 736.86 428.03 736.29 428.24 735.97 428.73 734.67 428.99 732.98 429.84 732.39 429.55 731.42 429.73 729.78 430.57 728.74 431.55 726.99 432.31 726.09 433.9 725.93 432.15 725.04 433.81 725.27 435.16 724.98 436.32 724.54 436.9 724.31 438.25 724.81 438.96 725.02 439.7 726.08 441.56 726.12 442.77 725.48 441.86 724.42 441.17 725.15 443.37 724.21 442.34 724.5 443.36 725.73 445.25 726 447.14 726.95 448.11 727 448.82 727.86 450.41 727.76 451.81 728.12 453.23 729.25 455.74 729.49 457.23 729.23 458.99 729.3 459.91 728.93 460.49 727.87 460.85 727.82 462.32 728.98 462.81 731.25 464.47 732.69 464.47 734.26 464.57 735.29 463.75 736.37 463.01 737 463.13 738.28 461.75 739.75 461.63 741.29 461.35 743.19 461.82 744.53 461.59 746.36 461.53 747.15 460.49 747.56 459.15 749.42 458.56 751.7 457.26 753.75 457.43 756.19 456.58 758.96 455.68 762.8 455.44 764.87 456.67 766.38 456.74 769.13 458.27 768.73 458.86 769.86 459.81 771.2 461.67 771.13 463.04 772.8 464.11 773.62 462.06 774.96 461.18 776.71 458.99 776.88 460.88 776.05 462.15 775.73 463.64 774.6 465.08 776.52 464.6 777.56 462.8 778.08 464.73 777.38 466 779.45 466.31 780.5 467.38 781 468.72 781.4 470.75 782.78 472.42 784.86 473.21 786.08 473.4 787.3 473.83 789.15 474.57 791.03 472.6 792.2 472.08 791.86 473.5 793.18 473.98 794.96 475.19 796.25 474.01 797.24 472.96 799.22 471.85 801.62 471.75 802.85 470.81 802.74 469.97 803.02 468.13 803.56 466.16 804.39 464.85 805.02 462.61 805.74 461.33 806.52 459.35 808.12 458.1 809.06 455.8 809.48 454.01 809.44 452.59 810.02 450.39 810.39 449.26 810.52 447.11 809.49 445.06 809.64 443.58"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="520.86 276.61 519.37 276.65 517.53 276.15 516.52 276.22 516.07 276.85 515.29 276.15 514.84 277.4 515.9 278.8 516.36 279.73 517.34 280.84 518.16 281.49 518.97 282.72 520.87 283.82 520.63 284.31 521.57 284.89 522.16 285.83 522.62 286.05 522.97 286.5 522.68 287.39 522.5 289.32 522.68 290.66 523.88 291.6 523.91 292.22 524.28 292.41 525.28 291.06 525.41 290.15 526.1 289.74 526.15 289 527.55 288.75 528.37 288.13 529.53 288.18 529.88 287.69 530.3 287.6 530.14 285.7 529.07 284.78 529.42 284.37 529.19 284.02 529.55 283.1 530.37 282.19 529.33 280.92 529.13 279.83 529.66 279.15 529.27 278.63 529.77 278.13 529.23 277.75 528.56 278.43 527.31 277.56 527.14 276.31 525.84 275.59 525.6 274.62 524.44 273.41 523.1 273.28 521.45 274.08 521.97 275.27 522.65 276.14 521.83 277.28 520.86 276.61"
            ></polygon>
            <path
              fill="#d6d6d6"
              d="M405.47,396.27l-.78-.67-1.84-.09-1.65-.62-2.74-2.39-3.17-1.77-3.2.09-4.18-1.14-2.49.66.35-1.18-1-1.24-3.56-1.31-2.7-.77-1.63,1.4-.08-2.13-3.79-.34-.67-.64,1.62-1.75-.06-1.47-1.15-.35-1.2-3.74-.53-1.18-.73.1L369,377.69l-.66,1.58.65-1.58,1.27-1.95-.35-.87-2.28-1.81-1.57-.5-.73-.24-1.12,1.85h0l1.12-1.84-2.3-.58-1.74.15-.23.39-2.57-.42-.85-.75-1.15-1-.81-.06,0-1.11-1.33-1.4-1.41-.79-.84-.51-1.12.06-.34-1.73-1.62-1.07-1.73-.16-.72-1,1.82-.65-2.57,0-2.67.13,0,.56-1.2.67-1.64-.27-1.23-1-2.29.22h-1.92l-.09-.72-1.39-1.21-1.51,0-.77-1.53-.75.69.3,1-2.67.89.1,1.64.67.76-.48,1.56-.93.14-.81-1.71.94-1.26,0-1.14-.7-1,1.26-.26.06-.51.42-.73-.56-.58-.77-.13-1,1.05-.83.49-1.7,1.09-1.68-.17-.17.45-1.34,0-1.24,1-.39,1.83,0,.71-.88.23-1.61,1.51-1.1-.07-.81-.6-.7-.64-1-.38-1.2-.07.09-.22-1.19-.12-.73.64-1.3.44-.91.54-1.06.16-.59-.53-.21.17-.85-.09,0-.46-.76-.77-1-.93-.83-.87-.55-1.18-.32-.36-.11-.58.45-.56-.15-.57.2-.93.33-.22-.06-1-.12-.55.08-1,.23-.88.49-.75-.22-.8.11-.49.18-.21-.56-.62-.78-.33-.62-.5-.65-.41-.35-.05-1-.3-.42.19-.56.05-.52-.15-.68-.12-.25.25-.69.24-1,.06-1-.2-.33.11-.2-.17-.61,0-.48.39-.22-.1-.63-.28-.18.34-.71-.41.43-.76.39-.07.42-.6.25-1.12-.13-.21.22-.8-.19-.35.35-1,0-.61h-.4v-.33l.45,0,.54.58.54-1.75.32-1-.39-.39.5-1.39,1.16-1.35.07-1.1-.51-.49-1.3.2-1.9-.08-2.27.53-1.45.6-.38.67-.17,1.9-.51,1.33-1.37.91-1.35.39-1.61.41-1.63.22-1.88.63-.89-.94-2.28-.6-.84-1.11-.49-1.29-1.43-1.69-.43-1.77-.66-1.12-.38-1.26.21-1.12.16-3.13.38-1.69.83-2.07-.84.07L270.3,327l-1.66-.74-.61-1.12-.47-1.68-1.26-1.37-.75-1.43L264.47,319l-1.5-1-1.76,0L259.86,320l-1.78-.74-1.11-.74-.54-1.35-.71-1.29-1.27-1.09-1.1-.79-.78-.9h-3.72v1h-1.7l-4.27,0L238,312.42l-3.24-1.23.2-.49-2.72.28-2.45.19.88,2.26,1,2,.8,1.62.79,1.54,1.26.68,1.65,1.74-.08,1.09-.8.9-.88-.13-.15.18,1.26,1.4,1.32.57.54.63.28-.3,1.48,1.06,1,.73.33,1.29-.07,1.72,1.1.6,1.54,1.13,1.4,1.32.57,1.42h.38l.91-.85,0-.42-.78-1-.87-1.06-1-.08-.11-1.24-.6-1.1-.64-1-.71-2.21-1.35-1.23-.45-.85-.65-.61-.44-1.56-.38,0-.28-.84-.33-.17-.35-.57-1.59-1.7-.74-1-.21-1.86-.35-1.2.34-1,1.23.69.71-.11,1.55,1,0,.95.76,1.9,1.16,1.85.09.77,1,1.18,1.24,1.27,1.15.2.54,1.68,1.27,1.16,1.09.56-.33,1.47.39.58,1.85,1,1,1.46,2.16,1.83,1.88,2.31.72,1.17.2.91.72,1v.79l-.49.59.22.65-.71.23.51,1.11,1.07,1.43,2.3,1.27.9,1,2.2.71,1.2.13.54.6,1.79,1.07,2.43,1,1.61.32,2,1,1.61.43,1.52.58,1.08-.22,1.72-.83,1.2-.16,1.75.58,1.11.72,2.42,2.38,1.16.9,1,.44,1.34,0,1.1.39.6.47,1.2.14.89.43.77.21,1.24,0,.23-.51.66.19.37.68-.16.16-.36-.33-.24.34,1.08,1,.9.68.48.73,1,.88.74.69-.49.41.61.31-.29.69v.66l.29.43.69.22.49.59.43-.51-.14-.63.57.39.13.63.75.28.84.42.59.52.08.47-.24.38.43.45,1.16.48.25.32.07-.46h.92l.55.25.88.14.43.87.71.12.28-.37.38,1.29,1-.11.31-.32.58-.28-1-1.16.2-.45.47-.08.87-.53.43-.75.94-.14,1.07.6.4.71.54.14-.52.58.46,1.16.71.62.87,1.15.34,1.81-.46.56.48,2-.41,1.24.8.51-.82,1.12-.91,1.34-1.06.14-.5.77.09,1.07-.8.16.29.66-1.47.85-1.18.46.15.87-.81,1.37-.39,1.33-.75.32.36,1.94-.44.59,1.28.94.82-1,.47.93-1.14,1.59-1.71,1.36-.67,1.49,1,2-.7,1,1.53.86L310,400l.68,1.58.88,1,2,4.3,2.12,4,1.81,2.87-.35.64.88,1.81,1.66,1.36L323.5,420l4.25,2.23.19.92,2.15,1.29,1.1-.57.58-1.16,1.05,1.53.28,1.63,1.13.95-.67,2.2,1.14,2.55L333.55,429l.67-2.2-1.12-.95-.29-1.63-1-1.52-.58,1.15-1.1.57.44,3.18.16,3.73-.67,5.16-.69,4.87-.39,4.62-1.25,3,.26,3-.64,2,.49,3.75-.91,3.81-1.48,4.15L324.09,470l-.9.08.18,3.05.61,2.67-1,1.9-.74,5.23-.67,4.15,1.35.41.68-3.63,1.44.77-1.12,6.09-2.39-1.05-.73,5-2,2.74,3.26.91-2.26,2.44-.91,3.08.27,5.62,1.08,2.25-.6,2,.67,2.2,2.67,2,2.46,2.48,2.41,1.18.91-.08.35-3.35,1.93-1.28,1-.86,1.9,0-2-.54h0l2,.55.9.17-1.43-2-.69-3.55.88-1.58,1.95-1.31,1.4-3.85,2.53-1.82.73-2.86-2-.63-2.11-2.28.61-2.3,1.69-1.56h2l.51-1.62.31-3L343,486l2-.9-.64-1.5-1.18.91-1.45-.87-.3-2.84.83-.74,2.07,1,2.19-.39,1.29-1-.4-1.41.44-2.08-.46-1.65,2.36.28,4.3-.58,3.18-1.46,2.06-3.46.11-1.3L358,466.93l.29-1.82-2.72-2.22.14-1.33L357,463l1.46-.08,2,1.11,1.16-.28,1.58.52,2.43-1.44.93-1.62,1.42-1.46,1-2.42,1.46-1.18,1.89-2,2.38-4.34,1.5-1.34.48-1.19.41-2.43-.36-1.33.31-1.77,1.82-2.34,2.52-1.87,2.4-.68,1.52-1,3.37-.9H391l.5-1.39,1.74-1,.37-2.36,2.17-3,.38-3,.68-.88.23-1.47.59-3.43-.15-4.13.6-1.61.54,0,1.58-1.9,1.37-2.46,3-3,1.1-1.41.86-3.56-.36-1.3Zm-39-16-.29-.59h0Zm-9,72,2.86-3.34,2.42-2.36,1.44-1,1.81-1.32,0-1.89h0l0,1.9-1.81,1.33-1.44,1-2.42,2.35-2.86,3.34Zm7.2-73.45-.54.9h0ZM325.9,513l0-2.54h0l0,2.54.88,2h0Zm11.49-78-.73,2.41-2.34,1.16.07,3.93-.45.77.64.94-1.51,1.49L331.66,448l-.77,2.22.21,2.38-1.32,2.56,1,4.35.56.47v2.36l-1.22,2.53.05,2.2-1.63,1.73v2.46l.65,2.65-1.28,1-.58,2.47-.5,2.87.36,3.47-.87.59.5,3.37,1,1.11-.7,1.25,1,.6.23,1.13-.93.57.23,1.79-.78,4.09-1.14,2.69.25,1.62-.68,2L323.59,506l.2,3.52.75,1.21h0l-.76-1.22-.19-3.52,1.64-1.44.68-2.05-.25-1.61,1.14-2.7.78-4.09-.23-1.78.93-.58-.23-1.13-1-.6.7-1.24-1-1.12-.5-3.37.87-.59-.36-3.47.5-2.87.58-2.46,1.28-1-.65-2.64v-2.47L330.1,467l-.05-2.19,1.23-2.54v-2.36l-.55-.47-1-4.35,1.32-2.56-.2-2.38.76-2.21,1.41-2.27,1.51-1.49-.64-.94.45-.77-.07-3.93,2.34-1.15.73-2.42-.26-.58h0l1.78-2.09h0l-1.79,2.08Zm20,6.09,0-.15.05.18-2.1,3.6h0Zm-1.52,18.81h0l.46-.56h0Z"
            ></path>
            <polygon
              fill="#d6d6d6"
              points="313.32 329.03 312.85 330.52 313.66 331.21 314.2 332.55 314.73 332.44 314.71 331.08 313.96 329.13 313.32 329.03"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="315.15 325.9 315.11 327.15 315.51 327.46 315.88 325.77 314.18 324.69 314.18 324.96 315.15 325.9"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="314.12 325.79 314.05 325.17 312.63 325.1 311.62 325.29 311.77 326.17 314.12 325.79"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="493.98 272.97 495 272.48 495.74 273.83 496.66 274.49 497.69 274.34 498.9 273.3 499.27 273.79 500.29 273.69 500.76 272.44 502.35 272.84 503.29 272.31 503.46 271.03 502.36 270.95 501.39 270.38 501.72 269.61 501.64 269.04 499.34 268.08 498.9 268.76 497.07 268.74 496.49 269.29 495.51 268.99 495.58 269.79 494.01 271.56 493.98 272.97"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="300.74 336.72 301.05 336.16 301.94 336.13 303.48 334.93 305.58 335.05 304.78 335.62 305.53 336.07 308.32 336.43 308.97 336.91 310.97 337.53 312.18 337.44 312.69 338.74 313.43 339.4 314.82 339.55 315.69 340.14 314.25 341.41 317.32 341.19 318.8 341.37 320.24 341.26 321.67 340.97 321.93 340.44 320.31 339.51 318.72 339.42 318.88 338.77 317.6 338.31 316.89 338.34 315.56 337.3 313.74 335.87 312.98 335.34 310.98 335.6 310.12 334.75 308.11 333.96 306.43 333.94 304.57 333.77 304.05 334.02 302.42 334.24 301.33 334.69 300.36 335.21 299.9 336.04 298.77 336.75 299.69 336.98 300.74 336.72"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="354.17 513.28 352.34 512.42 349.77 514.48 350.84 516.05 352.66 514.48 353.63 515.7 356.52 514.66 357.17 513.45 355.45 511.91 354.17 513.28"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="865.95 420 865.27 420.13 864.2 420.59 864.47 421.42 865.84 420.95 867.2 420.4 867.38 420.28 867.65 419.21 867.2 419.31 865.95 420"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="863.18 422.51 862.21 422.23 861.38 423 861.59 423.98 862.77 424.26 864.11 423.95 864.46 422.78 863.72 422.14 863.18 422.51"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="430.15 170.92 424.5 170.65 426.99 167.27 426.26 162.78 428.91 166.59 430.56 169.09 434.39 167.85 433.58 162.53 430.76 158.34 427.87 156.59 428.97 154.68 433.22 157.61 433.19 154.45 430.5 149.49 433.5 149.47 436.52 148.31 437.22 145.63 434.73 142.46 439.49 141.89 436.72 134.89 439.01 134.11 438.51 126.75 434.55 121.93 438.08 118.96 441.43 118.57 438.85 112.19 438.78 100.51 440.51 93.17 443.02 84.37 438.06 83.76 444.91 81.57 446.12 78.59 454.86 68.9 453.66 62.69 447.23 59.78 436.81 65.55 431.35 70.86 433.71 62.46 431.93 56.99 427.76 61.67 421.3 56.39 413.7 58.1 412.62 55.31 424.17 53.76 432.38 53.05 436.34 46.7 422.92 32.48 405.78 30.07 398.2 31.92 395.47 38.77 387.94 37.95 380.73 48.36 380.44 55.31 385.55 63.56 381.08 58.65 378.08 57.44 372.96 51.48 367.27 60.14 364.93 55.32 358.33 55.46 351.74 57.92 346.65 61.93 347.55 68.48 344.43 70 337 79.43 335.13 84.51 340.92 88.92 340.09 93.23 332.23 98.71 324.12 103.97 323.82 108.05 328.65 112.22 337.83 114.79 333.51 115.31 327.88 118.34 331.61 124.21 334.1 127.08 339.33 126.42 345.06 126.06 349.62 126.71 355.38 131.83 355.35 135.37 358.09 138.56 360.66 146.91 362.37 152.06 363.67 154.76 361.28 161.27 363.07 162.94 365.2 161.99 367.12 164.3 370.81 168.45 366.43 166.73 364.44 166.82 363.6 170.25 363.75 174.5 366.38 176.49 368.31 175.62 369.47 174.71 371.93 172.52 371.48 177.31 370.63 179.81 367.4 181.99 365.28 188.6 366.71 190.54 365.94 194.5 368.91 199.29 369.2 203.8 370.29 206.97 374.01 212.85 375.44 217.29 377.52 219.72 381.81 219.75 384.98 223.29 388 223.03 389.1 218.77 390.06 215.06 389.19 211.46 392.7 207.67 393.78 204.49 393.81 201 395.65 197.85 398.73 196.63 401.59 195.35 403.07 195.13 407.69 191.39 410.67 185.55 412.89 183.36 415.25 183.33 421.53 181.33 427.36 176.64 433.11 171.26 430.15 170.92"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="323.49 344.41 321.51 344.1 321.32 344.82 322.48 345.53 323.48 345.11 324.79 345.27 325.8 345.12 327.22 345.5 327.34 346.14 327.89 346.49 328.74 344.96 329.45 344.63 329.78 345.18 330.6 345.05 330.99 344.63 331.7 344.74 332.68 344.65 333.7 345.14 334.5 344.22 333.44 343.39 332.49 343.31 332.55 342.64 331.38 342.68 330.99 341.88 330.43 341.94 329.16 341.36 327.48 341.34 327.21 341.73 325.36 341.37 324.05 341.27 323.56 341.9 324.92 342.25 324.9 343.12 325.88 344.09 325.11 344.6 323.49 344.41"
            ></polygon>
            <path
              fill="#d6d6d6"
              d="M716.68,381.76l-.36-1.43L715,381.75l-.25,2,.3,1.87,1,1.82,1.07.59.33,2.86,1.77.25,1.4-.12.78,1,2.55-.76,1.07.68,1.53.12.85,1.31,2.44-1,.32.75.82-3.26.05-2.12,2.06-1.46-.09-1.93.72-1.46,2.54-.25-2.4-2,.37-1-1.57-2,1.22-1.93h0l1.57-.73-.37-1,1.43-.11.16-.84-1.79-.64-1.42-.6-.1-.93-1.1-1.09h-.86l-1.08,1.68L728.73,373l-.09,1.05-.13,1.37-1-.07-.45.72h0l.45-.73,1,.07.12-1.36.1-1.06-1.83,1.17-.85.8h0l-1,1.35L723.46,378l-2.57.46-.92.4-.42,1.81-1.66.4-1.57-.74.36,1.43,1.47,1.2h0Zm15.41-6.34.72.14-.72-.14ZM725.2,382h0l-2-.6h0Zm-4.3.66h0l-.41,0Z"
            ></path>
            <polygon
              fill="#d6d6d6"
              points="758.6 390.58 755.95 390.67 755.44 391.84 756.92 391.92 758.13 391.78 759.92 391.95 761.73 392.83 760.95 391.2 758.6 390.58"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="749.14 403.64 747.02 404.5 746.1 405.81 745.9 406.55 746.16 406.81 748 406.33 749.39 404.73 749.36 404.07 749.14 403.64"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="751.33 391.38 751.75 392.3 753.23 392.69 754.04 391.98 753.5 391.28 751.33 391.38"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="708.18 393.79 708.72 391.14 707.68 389.79 706.1 389.6 705.35 388.4 704.99 386.92 704.21 386.87 702.98 386.13 703.84 384.39 702.21 383.42 700.97 381.63 699.16 380.17 696.98 380.14 694.95 377.85 693.76 376.96 692.1 375.51 690.2 373.42 686.88 373.01 685.5 372.93 685.69 374.01 687.92 376.37 689.54 377.56 690.66 379.39 692.6 380.73 693.39 382.39 694.01 384.22 695.9 386 697.53 388.98 698.59 390.58 700.21 392.31 701.13 393.61 703.88 395.35 705.69 397.14 708.06 397.1 708.18 393.79"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="726.83 403.32 729.28 402.51 726.65 401.23 723.42 400.84 722.64 399.45 718.67 398.41 718.19 399.3 714.08 399.09 713.78 398.31 712.89 398.14 711.16 397.31 708.56 397.18 707.09 399.23 709.06 399.39 709.43 400.32 713.34 401.2 714.24 400.94 715.81 401.15 718.3 401.97 720.3 402.36 722.53 402.52 724.47 402.46 726.83 403.32"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="755.65 381.13 755.5 379.97 754.79 380.74 754.36 382.44 754.99 385.17 755.86 386.51 756.46 386.26 755.58 385.14 755.9 383.85 757.01 384.05 757.13 382.19 756.92 381.31 755.65 381.13"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="740.02 406.55 740.14 405.96 739.39 405.3 738.27 404.64 736.27 405.07 739.12 406.58 740.02 406.55"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="768.76 397.72 768.97 399.34 770.07 397.88 770.09 396.85 769.6 396.23 769.15 396.95 768.76 397.72"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="744.4 403.1 744.72 401.91 742.8 402.69 741.38 402.85 740.03 402.21 738.32 402.66 738.33 403.45 741.18 403.71 744.4 403.1"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="781.23 389.74 779.64 388.98 777.8 388.24 775.9 388.24 773.43 389.52 771.64 391.79 769.42 390.51 768.83 387.06 768.48 386.28 765.04 385.41 763.94 386.1 761.04 386.62 761.96 387.67 763.87 388.06 764.72 389.33 767.86 389.34 768.04 389.9 766.51 389.87 764.2 390.63 765.84 391.68 765.84 392.61 766.33 393.39 767.16 393.19 767.79 392.15 771.01 394.13 772.78 394.3 776.94 396.12 777.98 397.92 778.54 400.25 777.18 400.85 776.27 402.6 778.99 402.53 779.51 401.92 781.7 402.35 783.61 404.12 783.57 397.11 783.53 390.15 781.23 389.74"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="734.76 402.49 733.98 401.92 733.41 402.69 732.23 402.7 731.5 403.94 732.65 403.96 734.14 403.67 736.62 403.23 736.08 402.31 734.76 402.49"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="737.04 387.5 736.73 389.19 735.84 390.59 736.51 392.06 737.41 392.07 737.74 394.13 737.13 396.1 738.05 396.72 739.41 396.41 739.32 393.35 739.14 390.86 740.57 390.21 740.41 392.29 741.96 393.55 741.68 394.37 742.22 394.96 744.32 394.14 743.28 395.89 744.12 396.64 745.27 396.01 745.28 394.6 743.36 392.14 743.75 391.4 741.72 388.67 743.61 387.85 744.54 386.6 745.48 386.91 745.65 385.93 741.65 386.65 740.5 387.62 738.57 385.72 738.88 384.11 740.75 383.8 744.33 383.69 746.39 384.11 748.01 383.69 749.73 381.58 749.36 381.11 747.24 382.66 744.77 382.75 742.06 382.45 740.39 381.82 738.57 383.41 738.12 384.29 737.04 387.5"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="451.86 199.55 449.44 196.03 449.93 192.6 446.37 192.22 442.88 195.06 440.17 193.56 436.92 196.42 433.57 192.84 430.32 193.63 428.87 197.05 433.37 198.25 433.46 199.76 429.67 200.74 434.34 203.19 432.23 205.36 438.21 206.9 441.03 207.61 442.88 206.73 449.07 203.38 451.86 199.55"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="316.1 344.69 314.65 344.5 314.16 344.42 313.26 344.57 313.01 345.08 314.23 345.9 315.43 346.26 316.08 345.89 317.59 345.85 317.24 345.24 316.1 344.69"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="654.47 364.77 653 363.57 652.02 367.07 652.4 370.16 653.42 371.86 655.29 371.37 656.19 370.76 656.51 368.53 655.48 366.29 654.47 364.77"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="588.44 413.77 587.91 412.32 587.34 411.4 586.59 410.46 585.88 411.44 585.84 412.75 584.66 414.27 583.75 414.01 584.04 414.95 583.39 416.05 581.63 417.41 580.41 418.67 579.46 418.7 578.67 419.1 577.47 419.56 576.4 419.64 576.12 421.05 575.37 422.3 575.54 424.37 575.94 425.78 576.44 426.85 576.25 428.29 575.22 430.02 575.22 430.78 574.23 431.18 573.85 432.83 574.04 434.49 574.79 436.34 574.94 438.41 575.53 439.65 577.24 440.49 578.47 441.1 580.34 440.1 582.09 439.54 583.06 436.82 583.88 433.6 585.21 429.26 586.26 426.13 587.11 423.52 587.24 421.62 587.83 421.11 588.02 420.16 587.62 418.52 588.02 417.86 588.75 419.16 589.13 418.5 589.34 417.45 588.79 416.42 588.44 413.77"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="839.57 433.06 838.46 432.01 836.7 430.59 836.01 429.95 835.07 429.18 833.86 428.4 832.94 428.37 833.24 429.14 834.66 430.75 836.04 431.96 837.57 433 838.76 433.62 839.57 433.06"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="861.71 472.25 860.26 472.03 858.54 471.15 858.21 469.12 857.24 468.4 857.2 470.22 855.64 467.41 855.04 465.08 853.37 464.4 852.2 462.96 851.4 463.16 852.3 465.01 853.99 467.33 855.02 468.43 854.96 468.89 855.83 470.69 855.93 472.43 855.57 474.53 854.01 475.48 853.95 476.49 856.26 477.59 856.97 479.13 855.73 481.46 856.62 481.87 856.99 482.62 858.65 481.48 859.71 479.55 860.52 478.04 860.84 477.52 860.64 476.32 861.21 475.48 862.85 475.54 863.5 473.94 864.02 471.53 862.93 471.21 861.71 472.25"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="852.72 481.6 852.23 480.43 851.76 479.24 850.26 480.54 849.94 482.12 849.13 482.85 848.17 485 846.88 486.51 845.05 488.05 843.51 489.18 842.12 489.74 839.42 492.7 838.27 494.96 838.63 496.09 840.96 496.31 842.35 497.33 844.33 497.4 845.4 496.51 847.08 495.14 848.3 492.05 848.87 490.09 850.71 488.97 852.36 488.93 851.57 487.51 852.67 486.33 854.07 484.19 854.86 482.86 854.86 481.66 854.24 480.45 852.72 481.6"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="602.24 326.43 601.97 326.23 601.34 327.04 601.75 327.85 602.03 327.42 602.24 326.43"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="803.13 395.29 802.83 395.35 802.51 396.37 801.34 396.54 799.42 396.23 799.24 396.89 800.46 397.49 802.22 398.11 803.36 398.11 804.47 397.6 805.64 397.08 805.97 396.48 807.1 396.3 807.81 395.01 807.86 393.82 807.42 393.47 806.13 393.51 806.37 394.77 805.17 395.54 804.57 396.27 803.34 396.43 803.13 395.29"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="783.58 397.12 783.62 404.13 785.84 404.22 787.04 404.58 788.72 403.84 788.44 402.25 789.75 401.54 791.57 400.92 794.37 401.86 795.49 403.75 796.71 404.93 798.38 406.31 800.54 406.64 802.38 406.88 802.91 407.44 804.34 407.29 804.57 406.66 802.29 405.75 802.93 405.35 801.27 404.98 801.36 404.02 800.13 404.09 798.74 401.8 796.82 400.39 796.35 398.98 798.32 398.75 797.8 397.61 794.23 396.29 793.9 395.02 792.71 393.94 791.23 392.85 787.27 391.63 783.54 390.16 783.58 397.12"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="807.03 391.99 808 392.68 808.5 393.51 808.9 394.77 809.58 394.2 809.32 393.09 808.5 392.41 807.64 391.51 806.74 391 806.01 390.53 804.86 389.94 804.26 390.45 805.8 391.07 807.03 391.99"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="813.71 396.48 813.06 396 812.83 395.36 812.53 395.57 812.99 397.2 813.93 398.56 814.86 399.38 815.46 399.17 815.76 398.56 814.75 397.83 813.71 396.48"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="736.32 362.37 735.03 363.87 733.48 365.2 732.42 366.71 735.28 364.66 736.41 363.17 737.82 361.98 737.44 360.21 736.32 362.37"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="744.8 361.28 744.57 362.63 744.03 363.23 743.59 363.81 744.91 365.31 745.58 364.66 746.26 363.29 747.03 362.58 747.24 360.52 745.64 362.61 745.99 361.15 744.8 361.28"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="740.28 357.31 741.2 358.4 741.76 356.51 741.02 355.72 739.19 355.64 740.28 357.31"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="742.53 359.08 742.86 360.11 742.71 361.22 742.78 362.23 744.14 361.58 745.14 360.66 745.18 359.75 743.82 359.75 742.53 359.08"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="738.31 351.38 738.63 352.35 739.69 353.61 739.97 352.81 740.61 353.32 739.94 353.88 739.83 354.79 740.9 355.28 742.85 354.95 744.22 356.27 744.77 355.47 745.57 356.62 747.24 357.69 747.46 356.68 746.75 356.15 746.96 354.95 744.28 353.74 743.33 354 742.19 353.75 741.71 352 742.05 350.22 743.31 349.48 743.88 347.63 743.14 346.03 743.49 345.1 743.3 344.53 742.64 345.11 741.32 344.46 740.02 344.48 739.32 346.52 739.1 350 738.24 349.26 738.31 351.38"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="750.29 358.49 749.71 357.67 747.65 357.63 748.96 359.29 748.99 360.12 747.73 359.94 748.06 361.26 748.7 361.37 748.8 362.9 749.81 362.41 749.29 361.08 749.24 360.35 750.89 360.92 750.29 358.49"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="745.98 366.01 744.81 366.82 743.46 367.43 742.61 369.24 742.97 369.87 744.56 368.67 745.57 368.75 746.24 367.85 747.6 368.87 746.94 369.89 747.55 371.44 750.07 372.69 750.69 371.69 750 370.11 751 369.02 751.78 371.21 752.51 369.25 752.38 368.04 752.16 366.61 752.02 365.81 751.84 364.73 750.1 363.7 750.23 365.37 748.72 365.43 748.37 366.39 746.74 366.98 745.98 366.01"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="339.8 345.65 340.35 345.08 339.96 344.64 338.87 344.44 337.11 344.43 336.81 344.76 336.93 345.71 338.19 345.64 339.8 345.65"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="784.8 254.44 786.06 257.82 785.97 262.29 785.47 264.77 785.71 268.25 785.48 271.31 785.87 273.91 787.28 271.52 788.91 273.39 788.97 271.21 786.88 267.98 788.2 263.3 791.37 264.38 789.22 258.5 788.33 255.06 788.38 251.61 787.64 248.17 787.08 245.76 786.13 246.27 786.98 247.96 784.99 249.62 784.8 254.44"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="593.63 157.29 591.44 158.79 591.75 162.48 595.64 164.28 596.2 167.21 603.21 168.05 604.48 167.48 600.38 162.04 599.94 156.29 603.3 149.29 606.5 141.78 613.16 134 619.72 129.91 627.31 125.52 628.75 122.68 627.26 118.99 623.08 120.21 619.41 123.65 612.27 125.35 605.18 131.01 600.39 135.49 600.97 139.22 595.84 146.13 597.81 147.06 593.55 153.39 593.63 157.29"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="580.82 82.88 583.14 85.85 585.65 83.79 585.95 81.71 587.88 80.74 590.75 79.03 591.58 77.03 588.4 74.08 586.38 76.3 585.15 79.45 584.71 75.9 581.45 76.06 577.27 78.46 582.04 78.86 580.82 82.88"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="528.93 243.36 526.68 242.7 523.72 243.91 523.23 245.54 525.87 245.96 529.81 245.9 529.65 244.96 529.88 243.94 528.93 243.36"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="681.24 92.86 684.79 97.24 690.77 100.46 695.45 99.08 695.98 88.66 691.04 76.39 686.87 69.48 682.22 72.63 676.65 81.68 679.58 84.18 681.24 92.86"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="782.71 137.44 790.61 137.67 792.3 131.44 784.55 126.8 778.89 126.41 776.06 128.08 774.9 134.01 779.15 139.37 782.71 137.44"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="801.93 138.74 804.41 135.48 799.02 133.28 795.02 132 794.51 134.74 798.5 138.01 801.93 138.74"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="867.2 166.75 870 166.36 872.22 164.78 872.4 163.87 869.29 161.95 867.47 161.93 867.2 162.22 864.47 165 864.85 167.09 867.2 166.75"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="706.47 105.31 707.11 100.93 701.66 94.55 700.05 93.8 698.29 95.1 694.37 109.33 706.47 105.31"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="783.13 146.03 781.1 149.03 781.47 149.42 785.87 150.25 789.13 150.2 788.87 148.23 785.82 145.31 783.13 146.03"
            ></polygon>
            <path
              fill="#d6d6d6"
              d="M884.63,190.14l-5.83-.82.5,3.94-1.45-1.33.19-3.39-5.63-5.62-5.25-4.48-3-2.64L858,172.87l-4.46.37-6.85-1.75-.95,2.77,1.73,3.88-2.65,1.9-3.73-5.35-4.07.68-4-1.2-3.81.16-2.87,1.25-2.64-1.75.26-4.61-1.78-2.67-4.27-1.08-8.66,1.24-5.61-5.09-1.83-4.09-19.38-4.64L779.55,156l1.55,6.43-3.51-1L776,163.37l-4.15-2.08-3.66,1.82-3.44-3.06-2.07,7-3.38-2.67-2.69-5.34,1.27-2.93-1-4.63-3.46-3.93-3.43,0-4.56-1.33-.12,5.71-9-1.09-.52-3.5L729,146.13l-3.43,1.2-.94,2-1.09-4.89-1.93,1.47-3.18-2-2.66-1.09,1.61-2.36,5.64-4.53,2.38-2.47.53-4.48-1.72-3.33-4.84-4.47-6.27-.12-2,2.25-.58-4.61-4.86-1.47,2.92-2.4-3.68-3.22-5.06,4.06-2.05,4.08-.59,4-3.94-.15-4.81,4.77-1.76-2-5.63.82-.72,2.41-5.66,1.16L670.5,135l-2.46.23-2.49,5.37,1.75,4.12-4.65,1-5.16-.34-3.74,1.55.22,7.86,1.9,5.83-4-4-4.45.38-3.59,2.74,1,4.87-2.3-1.22.85-6.63-1.12-4-1.07.17.49,5.06-3.84,4.62,2.79,5.38-1.72,6.34.52,3.38,2.35.49-1,3.88,1.25,3.26-1.86,2.67-.56,2.72-2.36,1.39-.86,1.92-2.45-.78,4.2-7.8.91-3.83-2.36-3.62.49-8.47-.69-4.55-1.33-2.12,2-5.57-.45-4-5.68-1.92-1.59,1.44-1.41,6.44-4,6.12.06,2.09,1.15,5-.71,2.93,2.59.59.06,1.29,2.18,3.14-1.44,3-7.77-6.73-3-1.91L611,173l-1.12,2,2.25,3.51-2.44,3.89-2.45-3.53L604,181.37l-4,.16-1.54,2-2.66-.6,2.11-3.55-1.61-.29-7.49,5-4.49,2.69-.52,3.53-3.32,1.18-1.69-1.87v-3.09l2.71-.7-1.22-3.2-6-1.86,1.58,3.59-1.05,3.37,1.79,3.27-1.25,3.68-2-1.85-2-.31-5,5.16,1.44,3.73-1.8,1.22-5.19-3.14-1.36,1.92,1.29,2.14-.27,2.38-1.68-1.27L556,203.13l-.14-5.16-.14-2.41-3.49-3.9,1.57-.69L563.4,195l3.51-1.41,2.38-2.83-.15-3.67-1.64-2.68-8.11-6.62-5.87-1.44L550,172.66l-2.21,2.15h0l-2.35-3.9,2.76-1.71-6.71-4.77-3.85,1.33-3.91-.29-3.26,5.35-3.53-.34-4.71,2.75-5.89,7.56-3.6,4.34-5.16,10.53-3.92,7.11-4.24,5-5.66,4-2,3,.68,10.14.77,4.49,3,2.07,2.86-.95,4.24-4.8,1.44,2.57.95-2.41,1.78-2.92.71-5.15-1.37-2.28-.13-6.15,1.39-4.52,2.13.08.75-1.95-.78-1.7,3.33-7.27,2.14-6,1.41-4,2.06,0,.57-3.23,4,.94.31-3.89,1.33-.25,1.29-1.59,2.39,3.17,2.8-.29,2.3,1.43,2-2.63,1.06-4.48,3.33-2.12,2.75,2.48-.91,4.27h0l-.31,4.13,3.28,3.82-2,4.19,2.49,6.09-1.44,4.41,1.92,3.71-.88,3.18,3.18,3.26-.8,2.37-2,2.64-4.59,5.67,2.25,2-2.45,2.35.33.73-1.53,2.4.63,3.79-.92,1.27,1,.91.18,1.91.69,2.28,2.25,1h0l-2.25-1-2.32,1.48-1.3.64.2,1.68-1.76,1.2-.49,2.08-2.33,1.38-2.07,0,.09,1.6.6,1.36,0,1.42-1.29.72.67,1.62,0,1.54,1.08,3-.23.95-1.07.39-1.95,2.76.56,1.47-.47-.18-.59.84-.42,1.31,1.18.87.16.86.92-.68,1.33.35h1.37l1,.78.72-.49,1.59-.31.54-.75h.9l.65.31.67.94.68,1.34,1.24,1.87.07,1.37-.23,1.32.39,1.4,1,.55,1-.49,1,.53,1.66-2.26L547,272l2-.38.15,1.15,3.33.78.34.17.34-.31.31.62-2.42,1.25-.38.59,2.34.88-.47,1.42,1.19.6,2.91-1.73,2.35-.52.42-1.09-2.18.18-1-.73-1.14-1.13,1-.78,1.85-1.17,2-.16,1.43-1,1.72-.25h0l1.92-.5,0,.69-3.16,1.27,1.2,1.23-1.78,2.56-1.56.49,1.85,1.78L564,279l2.73,2.5.26-.34h0l-.26.35.79.89,1.18.34,1.24,1.08.54,2L570.2,287h0l-2.54,1.48-1.84-.25-2.5.44-3.08-1.1-3.75-2-3.55.06-2.51.81-2.57,1.86-4.09-.38-.9,2.15-3.31.12-2.38,2.66,1.36,1.31-1,2.13,1.57,1.5,1.27,2.66,2.34,0,2.08,1.41,1.48-.31.5-1.1,2.31.09,1.74,1.42,3.26-.3,1.47-1.53,1.8.62,1.31-.23-.81,1,.79,1.2.57-.58.57-.58.12-1.48.7.52,2.37-.75,1.14.51h0l-1.14-.5-2.37.74-.69-.52-.13,1.49-.57.58-.57.57-.52,1.08.19,2,0,.09-1.07,1.82-.76,2.09-.06,0-.31.65-.43,1.91-.57,1.17.15.14-.62.83-1.06.63-1.68-.15-1.71-.59-.5.82L549,314l-1.52-.31-1.9.21-.88.71-1.65.79-1-.39-2.13-.74-2.07-.66-2.85,0-.52-.83-2.13-.29-.69-.43h-.79l-.74-1.13-2.9-.52-1.47.34-1.55,1.19-.67,1.22.5,1.92-1,1.14-1,.64-2.29-1.23-3-1-1.93-.49-1-2.23-2.84-1.13-1.79-.42-.91.22-2.51-.88-.82-.4-.55-1.22-1.11,0-.4-1.4,1.41-1.31.29-2.27-.74-.65v-1.22l1.08-1.31-.15-.51-1.82,1,.06-1.36-1.5-.32-2.34,1.08-1.46.16-.88-.62-2.29,0-2,1.05-1.08-.4-3.55.22-3.63.48-2.07.8-1.35,1.1-2.33.46-2.06,1.43-.93,0-2.22-.58-2,.19-1.3-1.12-1.57,0-.68,1.62-1.43,2.68-1.6,1.07-2.15,1.17-1.37,1.71-.29,1.33-.82,2.16.53,3.08-1.79,2-1.07.65L456,322l-2,.27-1,.86-.08.07,0,0-1.36,2.45-1.43.87L449.3,328l0,1.26-.58,1.37L448,331l-1.19,1.48-.73,1.65.13.78-.7,1.2-.83.63-.1,1.06-.09,1,1.13,1,.55,1.09-.21,1.12.26,1.13.24,2.22-.27,2.11-.6,1.1.19,1.19-.51,1.14-1,1.56-.95.42,1.07.78.89,1.71-.27,1,.35,1.68.14.46.65.46v.33l.49.62.9.14,1.15.91.63.36.31.47.24,1,.53.44.55.27.84.85.94,1.28.27,1.59.37.79,1.12,1.15,1.54.86.58.16L458,371.5l1.83,1.17,1.95,1.63,2.21,1h.56l.42.05,2.12-.78,1.49-.62,2.54-.37,1.37,0,1.5.43,1,0,1.91.61,1.93-.62,1.2-.74,3.36-1.25,1.73-.45,1.77-.26h1.89l1.61,0,1.53,1.41.7,1.54,1.15,1.34,1.71.05.83-.48.82.11,2.22-.76,0,.59.55.3.44,1,1,.37.84,1.4-.31,1.69-.74,2.39.4.32L501,384l-.53,1.54-.46.69-.07.7,1.3,2.21,1.42,1.76,2.21,2.16,1.76,2.25.86-.92-.86.93.57,1.61.54-.23-.54.23.3.66.89-.29.62,0,.75-.25,6.33,0h-6.33l-.75.26-.62,0-.88.3-.21.41,1.07,1.35.44,1.44.65,2.08-.66.86-.12.45.53,1.29.58,1.32.64.77.11,1.23-.22,1.62-.69,1-1.23,1.43-.51.9-.7,2-.11.95-.74,2-.3,2,.2,1.4h0l.13,1.7,1.75,2.19.46,1.42,1.13,2.73,1.11,1.89.83.95.28,1.25,0,2.78.72,3.61.53,1.72.48,2.32.84,1.76,1.59,1.83h0l1.54,3.17h0l1.08,2.09,1.4,2.34.06,1.93-.69.46.69,1.71v1.5l.28.69.1-.36.93,1.16.72.05.92.92,1-.06,1.33-1,1.83-.41,2.21-1,.89.14,1.3-.32,2.32.5,1.07-.49,1.3.38.27-.71,1.1-.13,2.24-1,1.62-1.16,1.51-1.51,2.43-2.59,1.22-1.78.59-1.27.91-1.25.42-.35,1.46-1.24.56-1.09.25-2,.53-1.74h0l.19-1.26-.55-.16-.18-1,.94-.88,2.58-1.27,1.77-.8.89-.83.32-1-.5-.4.34-1.08.06-2.27L557,433l0-.69-.42-1.35-1-1.72.18-1.62.88-.53,1.5-1.6.83-.41,2.42-2.41,2.42-1.08,2-.85,1.37-1.38.83-1.53.64-1.59-.38-1.07-.08-3.43-.27-1.91.09-2.16-.35-1-.78-.47-.89-2.13-.75-1.35.14-1-.12-.65.59-1.31-.06-.55-1.38-.78-.12-1.22,1-2.64.87-.7.42-1.43.69-.85.3-1.51.81-.15.53-.89,1.5-.86.48-.5.5-1.12,2.34-2.59,2-1.62,3.21-2.11,2.15-1.73,2.52-2.92,1.83-2.39,1.84-3.14,1.33-2.74,1-2.41.6-2.34.46-.78v-1.15l.2-1.26-.06-.6h-.81l-1,.75-1.14.21-1,.32-.68.05-1.23.07-.76.4-1.07.15-1.89.67-2.33.25-2,.56H575.7l-1-.91-.42-.89-.69-.41-.93-.59,1.23-.52L574,358l-.5-.67-1.06-.66-.67-.75-1.16-1.27-1.2-1.25-2.92-2.08-1.18-1.08-.59-2.05-1.24-2.58-1.18-.83-.81-.56-.79-2.69-.31-2.34.46-.41-.69-2.25-.37-.48-2.5-2.07-.07-1.51.43-.4-1.93-2.61-.69-1.33-.79-1.28-1.62-3.74-1.32-2.43-.88-2.58.21-.22,1.53,3.5,1,1.08.71.78.51-.43.58-1.25.46-1.84.6-1,.07.35-.26,1-.1.85-.33,1.33h1.07l1.09,1.65,1.31,1.93.83,1.78.63.52.6,1.23-.12.53.71,1.34,1.16.49,1,.91,1.23,2.57-.09,1.37.25,1.59,1.42,2.18,1,.37,1.48,1.56.61,1.84,1.14,1.88,1.1.8.17.89.65.68.28,1,.09,1-.26.43.22,1-.43.1.62.92.42,1.62.35.65-.06,1.2.56,1.28,1.48.1.69-.29,1.06.05.33-.56.57-.16.46-.57.55-.13,1.8-.11,1.37-.42,1.25-.92.64.13.94-.11,1.92-1.56,3.43-1L593,351l0-.76.41-1,1.56-.61h0l1-.12,1.44-.75,1.19.21,1-.62v-.9l.84-.57,1.33,0,.49-.48.21-1.09,1.34-.84h1l.19-.27-.26-1.52.35-1.15.44-.54,1,.12.81-1.56.89-.75.35-.65.78-1.37v-.51l-.76-.29-.58-.77-1-1.33-1.27-.42-1.58-.3-1.2-.85-1-1.59h0l-.29-1.86-.41-.81L600,328.5,598.38,330l-1.47,1.59-1.29-.07-1.77-.06-1.68.36-.08-.64-.39.12-.4-.9.47-1.38,0-1.39-.65-.74-.58.26-.59,1.24.15,1.71-.32-.57-.29-.77-.62-.67-.27-.8.21-.78-.13-1-1.46-1-.37-.85-1-.55-.84-2.08-.69-1.85.19-.56-.44-1.08,1.27.12.8-1,1.36.82,1.16-.39,1.58,3.26,1.43,2.31,2.07.68,2.16,1.85,2.63.79,2.15-1.16,1.66-.43,1,.43.92,2.92,2.42.31,2.34.54,4,.71,3-.33,3.49,0,4-.44,1.66,1.79.64,1.68,1.57.59,2.52,2,.63.91-1,.83,2.8,2.78,1.52.27,3.12-1.37.41,2.14v2.74l.65,2.89.88,4.31,2,3,.37,1.38.53,2.74,1.14,2.09.75,1,.82,2.19,1,3,2,2,.86-.62.72-1.47,2-.61-.65-.71,1-1.65,1.11-.11v-3.69l.91-2.07-.12-1.82-.44-2.87.64-1.68,1-.12,1.94-.79,1.07-.55v-1l2.14-1.46,1.61-1.41,2.4-2.65,3.09-1.53,1.14-1.35-.12-1.72,2.65-.47,1.45,0,.32-.84.82.2.61.25.31-.42.92.47.67-1.28-.2-.95,2,.09.89,1.34.41,1.11.13,1.17.61,1.19,1.52,1.85,1.26.29-.26.82,1.68,2.6.44,2.09-.74,2.76,1.33.52,1.2.2,2.44-1.58L689.5,348l.93,1.84.39,2.8.69,2.63.87,1.13-.17,2.38.72,1.29-.66,1.67.21,1.6-.63,2.08-.24,1.34L692,368l.35-1.27,1,1,1.14,1.22.37,1.06.85.82.37-.38,1.75.94-1.75-.93-.37.38.47.91-.24,1.56.78,1.16.29,1.77,1.24,1.43.26,1.09,2.54,1.69,2,1.57,1.53-.14,0-.72-.85-1.88-.75-.59-.16-1.26-.21-.74.23-1-.12-1.44-.91-1.43-1.27-1.29-.49-.2-.55.69.55-.7-1.11-1.11-1.3-.25-1.19-1.23-.39-1.86-.87-2-1.4-.07-.14-1.57.7-1.91,1.15-3.17.17-2.41h1.89l-.31,1.72,1.83-.05,1.93,1,1.08,2.25.87,1.13,1.8.31,1.59,1.23-.6,1.46.78,1.39,2.67-2,1.75-1.8,2.46-1.4,1.78-1.43.3-3.84-1-4.07-1.31-1.79-2-1.37-2-2.92-1.65-2.36.48-1.57L710,339.5l2.86-2-2.16-.6-1-.93.34-1.33-2-.42-1-.87-1.83,1.24-2.08.26h-1.71l-1.16.56-1.1.34.32,2.63-1.14-.07-.19-.53-.07-.95-1.57.67-.94-.43-1.59-.86.63-1.91-1.36-.45-.51-2.15-2.27.39.26-2.78,2-2,.09-2-.07-1.84-.93-.57-.72-1.42-1.26.18-2.31-.36.73-1-1-1.51-1.53,1-1.8-.59-2.47,1.55-2,1.8-1.73.3-.94-.65-1.13-.06-1.54-.56-1.16.62-1.41,1.79-.18-1.9-1.31.51-2.51-.23-2.42-.56-1.74-1.07-1.67-.48-.72-1.17-1.2-.35-2.17-1.6-1.72-.77-.89.6-3-1.74L650,313.74l-.6-2.78,1.54.34L651,310l-.85-1.3.21-2.1-2.3-3.05-3.53-1.07-.63-2-1.59-1.25-.38-.77-.32-1.54.07-1.06-1.3-.61-.71.27-.54-2.55.61-.63-.3-.65,2.05-1.32,1.48-.55,2.27.38.81-1.8,2.76-.34.76-1.13,3.39-1.55.29-.66-.16-1.66,1.46-.76-1.92-5.17,4.24-1.2,1.1-.68,1.55-5.56,4.25,1,1.2-1.42.1-3.2,1.78-.3,1.64-2.17-1.14-2-2.76.44-.92-1.41-1.5-.65-1-2-1.17-.61-3.09.87-3-2,0,0,3,2,3.08-.87,1.19.61,1,1.95,1.5.65.91,1.41,2.76-.45,1.14,2,.84-.27,2.27-.57,0,0-2.27.56.57,2.28,1.8,1.7,3.06,1.2,1.48,2.54-.83,3.61.78,1.33,2.54.52,2.9.42,2.59,1.87,1.32.33,1,2.73,1.26,1.74,2.36-.07,4.43.65,2.86-.4,2.12.43,3.17,1.75h2.59l1,.89,2.5-1.54,3.46-1,3.22-.11,2.51-1,1.53-1.57,1.51-1-.35-1-.68-1.15,1.12-1.94,1.21.27,2.21.61,2.13-1.6,3.27-1.19,1.57-2,1.52-.89,3.11-.41,1.69.35.24-1.11-1.94-2.21-1.72-1-1.66,1.18-2.11-.5-1.22.41-.55-1.31,1.52-3.23,1-2.49-2.56.28-1.12-1.12-1.29-.36-3.14,2.34-2.82.55-2,.81-2.7-.53-2,0-1.3-1.68-2.1-1.6-2.15-.45-2.71.44-2,.62-3.05-1.41-.41-2.54-2.52-.88-2-.4-2.4-1.44-.53.86.54-.87,2.4,1.43,2,.41,2.52.88.41,2.54,3,1.4,2-.62,2.71-.43,2.15.44,2.11,1.6,1.3,1.68,2,0,2.7.54,2-.81,2.83-.55,3.14-2.34,1.29.36,1.12,1.12,2.56-.28,2.58,1.25,3-2.09,0-1.48,1.94-3.61,1.19-1.11,0-1.93-1.18-.84,1.78-1.77,2.66-.64,2.85-.1,3.21,1.06,1.88,1.31,1.33,3.53.8,1.48.75,2.09.79,3.28,3.74,1.05,2.54,2.32.86,3h3.26l1.86-1.26,3.54-.95-1.12,2.88-.83,1.15-.74,3.41-1.45,3-2.6-.53-1.84,1.07.57,2.57L762.4,283l-1.09.08v1.47l.3.51.34-1,2.87-2.13,1.35,1.42,1.35,0,2.87-1.72,1.38-1.74,2.89-3.47,2.92-3.56.72-2.16,3.23-4.6,1-5.24.18-4,1.68-3.45-.07-3-3.1-4-2.36-.24L777.47,248l-2.08-.8-1-2.3L771,244.4l8.23-9,7-7.9,7-1.24,6.56.72,2.65-2.07,3.34.64-.16,3,3.32-.43,4.79-1.09-1.78-2.58,5.37-7.32,5.54-1.53,1.76,5.46,5.44-4.86,1.29-3.77,2.61-.39-1.72,6.41L828.33,222l-3.7,4.39-3.83,5.19-3.34.9-.11,1.86-1.81,2.35-1,5.32,1.2,8.15.92,5.12.79,2.35,3.09-3.19.64-3.57,3.2-.87.74-4.13,3.75-1.89-.89-1.61.92-3.17,2-.15.29-5.71-2.44-.89-.08-1.64,2.57-4,.69-2.78,2.87.58,2.06-1.83,1,1.59,5.6-3.38,3.06,3,.79-2,3.12-2.67,3.28-3.14,1.9-.53,6-3.45,4,1,.55-1.22-.25-1.94-1-1.28-1.28-4-1.94-2.63,2.78.37,2.75-2.21,0,0,1.22-2.17-1-2.44,2.57-1.25-.46,1.95,1.16,1.81,2.44-.66,2.18.84.48,2.21,2.86,1.47,1.63,1.73,2,.14.85-1,.06-4.94,3.52-.54,2.12-2.27Zm-352,222.22h0l-.18-.74h0Zm-4.76-8.69.31-1.3-.43-.84,0-1.34h0l0,1.34.43.84-.31,1.3L528,405l.71.81h0L528,405Zm-2.58-4.24h0l-.19.77h0Zm7.47,11.36-.37-1h0l.37,1Zm-.13-2.08h0l-.23-.67-1-.13-1.34.32-.93-.06-.53.2h0l.54-.19.93.05,1.33-.32,1,.13Zm-1.74,13.84-1.39-1.38L528,419.35h0l1.44,1.82,1.4,1.39Zm-13.12-21.82.82,1.13h0l-.82-1.13-.49-.7-.61-1.27.62,1.27ZM553.94,366l0-1.69v-.25Zm-28.36,75.68v0l-.2,1.44h0Zm13.39,9.7.31-.41-.3.4,1.61,1.91h0Zm2.78.87h0l1.19-.38h0Zm5.1-9.3.59-.89.2-.69.62-.17,1.09.43-.19-.84.39-2.63-.56-1.66-1-3.25h0l1,3.26.55,1.66-.38,2.62.19.85-1.08-.43-.62.16-.21.69-.58.9v.82h0Zm0,.84,1.28,1.28h0ZM699.48,372.2h0l-1.42.25ZM612.87,247.05l8-1.27,1.05-.91,5.37-1.37,1.93-1.55,3.86.81.67,3.83,2.24-.89,2.76,1.24-.18,2,2.06-.21,5.38-3.43-.76,1.1.73-1.08-5.37,3.43-2.06.21.18-2L636,245.72l-2.25.89-.67-3.84-3.86-.81-1.92,1.56-5.37,1.37-1,.91-8,1.27-1,1.23h0Zm.54,3.7h0l-2,.92h0Zm-1.66,1.89h0l-2,1.69h0Zm.9,5.67v0l-3-.15-.52.84.53-.86Zm-27.38,3.1.27-2.44,4.43-3.71,3.35-.09,4.73,2.37,2.54,1.37,2.28-1.43,3.4-.07,2.75,1.75,0,0-2.74-1.76-3.4.07-2.28,1.43-2.53-1.37-4.74-2.38-3.35.1L585.54,259l-.27,2.44-2.21-1.94h0Zm.25,9-.08.62.08-.62Zm-2.59-10.69-1.57,3.36h0Zm-1,4h0l-1.23,2.45h0Zm-1.37,22.29.61.1,1.47,1.74,1,.19h0l-1-.19-1.47-1.74-.61-.1h0l-1.34-.66-.38-.68.38.67Zm-4.37,9.46-.56-2.6,1.47-.79-.84-.81.85.81h0l.34,1,1.08,1.27,1.47.37-1.47-.36-1.08-1.27-.34-1-1.47.79Zm3.27-4.8-1.14-1h0l1.14,1Zm-.71-1.67-.81-.48h0l.81.49Zm.38,4.17v-.42h0v.42Zm-.27-1.61h0l.91.75,1,.45h0l-1-.45Zm1.91-3.27h0l-1.16-.17-.82-.42.83.42Zm2.55,4.36-2.54,2h0l2.53-2,.8-.21h0Zm.88-.1.55.7h0Zm-5.64-8.38-1.4-.43,1.4.42Zm-2-.61h0l-1.3.46h0Zm-26-35.17.62.95h0l-.61-.94-1.44-.63h0Zm-2.18-2,.87.66h0l-.87-.66L547,244.11h0Zm-1.1-5.18h0l-2.09-.9-1.12.45h0l1.12-.45Zm-3.85,30.88-.46.24.46-.25.2.44Zm10-19.17-2.22.34-.65-.18-.55.8-.79-.15h0l.79.13.55-.79.65.17,2.22-.33,1.37,2h0Zm1,3.74-.17-1.07h0l.17,1,1.72.17.76,1.48h0l-.76-1.47Zm6.81,3-1.65.53-2.72-1.18h0l2.72,1.18,1.65-.53,1.32,1.56,1.25,0,3.16,1.08,0,1h0l0-1-3.16-1.07-1.25,0Zm5.36,7-.26-1,.26,1Zm1.67,32.53,1.16,0,2.44-.41.92-.42,2.49.34.75.69,1-.46-1.17-2.15.42-.84h0l-.41.84,1.17,2.16-1,.45-.76-.68-2.49-.35-.92.42-2.44.41-1.16,0Zm32.46,31.94h0l.37.31h0ZM584.05,294.7h0l1.22,1.31Zm12.47,4.95-3.35.71-3-.46-1.49-1.35-2-.56-.68-2-.53.13h0l.54-.14-.06-1.35.79-.65.36-1,.38-2.16,1.77-.22-.66-.76-1-.13-1.1-2-1.12-1.51h0l-2.34-3.41.21-2L581.2,278l2.13-3.13,2.08-.51,1-1.81h0l2-.66,2.49-1.37,1.82.76,2.15-.15.38,1.92-.39,3-1.87-.45-1.82.49-.09,2.2L589,278l.08,1,1.18.75,1,2.65,2.49,1,.4,1-.53,1.2.13.7.67,1.85.21-2.09,1.73-.73.61,1.63,1.57,1.71-1.89.91-2-.7-.47,2.37,1.42.17-.55,1.89,1.68.94-.32,2.85.4,1.91ZM648,249.25l-2.74-2.8,0,0,2.74,2.8,4.79,8.86,0,0Zm41.75,12.67-3.11-.84-2.14-.11L683,259.4l-2.24,0-1.86-1-3.27,1.58h0l3.26-1.58,1.87,1,2.23.05,1.43,1.56,2.15.12,3.09.83,1.66-1.84Z"
            ></path>
            <polygon
              fill="#d6d6d6"
              points="827.58 405.56 827.9 405.16 827.04 404.12 826.27 402.4 825.54 402.4 825.99 403.68 827.58 405.56"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="828.4 407 827.12 406.47 827.94 407.8 829.44 407.82 828.84 407.07 828.4 407"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="824.03 402.44 823.52 401.75 821.76 400.76 820.78 400.25 820.46 400.47 821.26 401.19 822.44 401.96 824.12 402.87 824.03 402.44"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="825.08 404.72 823.66 404.38 823.52 405.24 823.98 405.57 825.29 405.8 826.13 405.75 825.77 405.17 825.08 404.72"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="816.88 398.7 816.77 399.06 817.65 399.94 818.59 400.43 819.02 400.31 818.15 399.61 816.88 398.7"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="509.31 108.27 512.52 111.22 510.58 114.76 515.19 120.6 517.78 120.23 518.8 112.19 520.68 110.29 521.87 102.57 527.27 98.24 520.21 89.6 517.5 85.35 514.35 85.78 513.54 89.94 510.49 90.11 509.31 85.85 503.46 90.2 505.13 99.22 509.31 108.27"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="523.74 87.91 524.12 91.21 530.45 93.17 536.67 91.79 539.85 85.27 535.64 80.83 530.23 77.59 528.05 81.48 524.94 78.36 518.32 81.97 520.66 87.69 523.74 87.91"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="529.31 114.11 534.1 110.01 531.01 107.7 530.16 103.74 525.71 105.87 527.01 109.19 525.52 111.8 529.31 114.11"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="630.32 504.71 628.94 503.69 628.8 504.36 628.48 505.7 628.53 507.46 631.83 507.24 632.42 505.74 632.35 505.12 630.32 504.71"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="751.2 404.09 753.43 403.15 754.22 402.57 753.41 402.3 752.74 402.57 751.24 402.64 749.4 403.13 749.15 403.63 749.36 404.06 749.4 404.72 751.2 404.09"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="536.96 289.06 536.93 289.64 537.6 290.95 539.39 289.43 540.31 288.55 542.86 288.4 543.25 287.7 541.38 286.78 541.12 285.68 539.28 285.3 537.09 286.2 538.14 286.96 537.47 288.74 536.96 289.06"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="348.55 363.19 350.33 362.95 350.42 361.34 349.97 361.26 348.74 361.54 348.78 362.4 348.15 363 348.55 363.19"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="741.01 334.69 742.3 330.96 742.67 329.54 741.7 328.84 739.97 330.62 738.71 332.91 738.96 334.63 740.09 336.58 741.01 334.69"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="838.53 416.13 838.57 417.82 838.88 418.43 839.32 418.31 839.9 418.58 839.54 416.8 838.53 416.13"
            ></polygon>
            <polygon
              fill="#d6d6d6"
              points="840.42 420.49 841.13 420.19 839.78 418.92 839.71 419.51 840.42 420.49"
            ></polygon>
            <path
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M793,480.07l2.08,1,1.17-.39,1.67-.54,1.29.19.15,3.39-.73,1-.22,2.35-.75-.81-1.5,2-.44-.16-1.32-.09-1.32-2.51-.29-1.91-1.24-2.49.05-1.3ZM789,414.23l.78,1.72,1.37-.83.71.94,1,.86-.22,1,.45,1.9.33,1.11.55.26.58,1.92-.21,1.16.7,1.52,2.32,1.18L799,428l1.44,1-.29.55,1.23,1.43.83,2.49L803,433l.87,1,.53-.35.37,2.46,1.52,1.43,1,.89,1.68,1.91.6,1.9.06,1.36-.15,1.48,1,2.05-.13,2.15-.37,1.13-.58,2.2,0,1.42-.42,1.79-.95,2.3-1.59,1.25-.78,2-.72,1.28-.63,2.24-.83,1.31-.54,2-.28,1.84.11.85-1.23.93-2.4.1-2,1.11-1,1.05-1.3,1.18L793.18,474l-1.32-.48.34-1.41-1.17.51-1.88,2-1.85-.74-1.22-.43-1.22-.19-2.08-.79-1.38-1.67-.4-2-.5-1.34-1-1.07-2.07-.32.7-1.27-.52-1.92-1,1.79-1.92.49,1.13-1.44.32-1.49.83-1.27-.17-1.89L775,461.17l-1.34.88-.82,2.06L771.13,463l.07-1.37-1.34-1.86-1.13-.95.4-.59-2.75-1.53-1.51-.07-2.06-1.23-3.85.24-2.77.9-2.44.85-2-.17-2.28,1.3-1.86.59-.41,1.34-.79,1-1.83.06-1.34.23-1.9-.47-1.55.28-1.46.12L737,463.13l-.63-.12-1.08.74-1,.82-1.57-.1h-1.44L729,462.81l-1.16-.49,0-1.47,1.06-.36.37-.58-.08-.92.26-1.76-.23-1.49-1.13-2.51-.36-1.42.1-1.4-.86-1.59-.06-.71-.94-1-.27-1.89-1.23-1.89-.29-1,.94,1-.73-2.2,1.06.69.64.91,0-1.21L725,439.7l-.21-.74-.5-.71.23-1.35.44-.58.29-1.16-.23-1.35.89-1.66.16,1.75.9-1.59,1.74-.76,1-1,1.64-.84,1-.18.59.29,1.69-.85,1.3-.26.32-.49.57-.21,1.19.05,2.25-.66,1.17-1,.55-1.21,1.25-1.14.1-.9.06-1.21,1.49-1.89.91,1.92.91-.45-.77-1.05.68-1.08.94.48.27-1.69,1.17-1.09.52-.87,1.07-.38,0-.61.94.26,0-.55,1-.31,1-.3,1.58,1,1.19,1.31h1.34l1.36.21-.45-1.21,1-1.76,1-.57-.33-.55.93-1.24,1.3-.78,1.09.26,1.81-.41,0-1.11-1.57-.72,1.14-.31,1.43.53,1.14.9,1.8.56.61-.22,1.33.67,1.26-.63.8.19.51-.42,1,1.08-.58,1.17-.81.89-.73.08.25.88-.63,1.09-.76,1.08.15.62,1.7,1.22,1.66.71,1.1.77,1.55,1.32h.61l1.12.57.33.69,2.05.76,1.42-.77.42-1.2.43-1,.27-1.21.65-1.76-.3-1.07.16-.64-.25-1.25.28-1.66.42-.44-.34-.73.52-1.15.41-1.2.05-.62.8-.81.6,1.07.15,1.36.53.26.09.92.78,1.11.16,1.23Z"
              id="AU"
            ></path>
            <path
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M717.76,344.07l-1.85,1.08-1.76-.69-.06-1.94,1.06-1,2.34-.64,1.23.06.48.86-.94,1Zm37.16-82.26,3.73,1.06,2.54,2.31.87,3h3.25l1.86-1.27,3.55-.94-1.13,2.87-.83,1.16-.74,3.41-1.44,3-2.6-.54L762.13,277l.57,2.57-.31,3.48-1.09.08v1.48l-1.38-1.72-.85,1.63-3.31,1.24.33,1.51-1.85-.11-1-.89-1.47,2-2.37,1.51-1.74,1.8-3,.81-1.58,1.29-2.31.75,1.14-1.27-.45-1.08,1.7-1.88L742,288.7l-1.87,1-2.43,1.94-1.32,1.79-2.1.13-1.1,1.29,1.14,1.84,1.75.45.07,1.21,1.69.78,2.41-1.92,1.9,1,1.39.07.35,1.41-3,.74-1,1.43-2.09,1.33-1.1,1.83,2.31,1.42.84,2.53,1.31,2.34,1.45,1.93,0,1.86-1.35.68.51,1.33,1.26.76-.33,2-.54,1.93-1.2.21-1.57,2.61-1.74,3.13-2,2.81-3,2.16-3,1.95-2.42.27-1.31,1-.74-.75L724,336.39l-3,1.15-2.27.35L718,340.3l-1.19.13-.56-1.65.5-.89-2.88-.73-1,.37-2.16-.59-1-.94.34-1.33-2-.42-1-.87-1.83,1.24-2.09.27-1.72,0-1.14.57-1.11.33.32,2.63-1.15-.06-.19-.54-.06-.95-1.58.67-.92-.42-1.59-.87.62-1.92-1.36-.45-.51-2.14-2.27.39.26-2.78,2-2,.08-2-.06-1.84-.93-.57-.72-1.42-1.26.18-2.31-.36.73-1-1-1.52-1.53,1-1.81-.59-2.47,1.55-2,1.81-1.73.29-.94-.65-1.13-.06-1.53-.56-1.16.62-1.41,1.79-.19-1.9-1.31.5-2.5-.23-2.42-.56-1.75-1.06-1.67-.49-.71-1.17-1.21-.35-2.17-1.6-1.72-.76-.89.59-3-1.73L650,313.73l-.6-2.78,1.54.34L651,310l-.86-1.31.21-2.1-2.3-3-3.53-1.06-.63-2-1.58-1.25-.39-.77-.32-1.54.08-1.05-1.3-.62-.71.27-.54-2.54.61-.63-.3-.65,2.05-1.33,1.49-.55,2.27.38.81-1.8,2.76-.34.76-1.13,3.38-1.55.3-.65-.17-1.66,1.47-.77-1.93-5.16,4.25-1.21,1.1-.68,1.55-5.56,4.25,1,1.2-1.43.09-3.2,1.79-.3,1.63-2.17.84-.26.57,2.27,1.8,1.7,3.06,1.21,1.48,2.54-.83,3.61.77,1.33,2.55.52,2.89.42,2.6,1.87,1.32.33,1,2.73,1.26,1.74,2.37-.07,4.43.65,2.85-.4,2.12.43,3.18,1.75h2.59l1,.89,2.49-1.54,3.47-1,3.21-.1,2.51-1,1.54-1.57,1.5-1-.35-1-.68-1.15,1.12-1.94,1.21.27,2.2.61,2.14-1.6,3.27-1.19,1.57-2,1.51-.89,3.11-.41,1.69.35.24-1.11-1.94-2.21-1.72-1-1.66,1.18-2.12-.5-1.21.41-.55-1.31,1.51-3.24,1.05-2.49,2.58,1.25,3-2.1,0-1.47,1.93-3.62,1.2-1.11,0-1.93-1.18-.84,1.77-1.77,2.67-.64,2.84-.1,3.21,1.06,1.89,1.31,1.32,3.53.8,1.48.75,2.09Z"
              id="CN"
            ></path>
            <path
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M201,244.14h0l-1.17-1.4-1.89-1.2-.61-3.33-2.76-3.16-1.16-3.78-2.05-.26-3.42-.1-2.51-1.18L181,225.41l-2-.8-3.75-1.52-3,.37-4.21-2-2.55-1.86-2.38.93.44,3-1.18.27-2.48.89L158,226.13l-2.38.89-.31-2.48,1-4.23,2.28-1.35-.59-1.12-2.73,2.46-1.47,2.89-3.09,3,1.57,2-2,2.94-2.3,1.69-2.15,1.22-.53,1.75-3.35,2-.68,1.81-2.51,1.63-1.47-.29-2,1.06L133,243.33l-1.79,1.25-3.68,1.06-.33-.62,2.35-1.74,2.09-1.16,2.29-2.07,2.66-.43,1.06-1.57,3-2.34.49-.79,1.58-1.4.37-3.06,1.09-2.42-2.47,1.25-.69-.71-1.16,1.49-1.4-2.08-.58,1.48-.81-2.07-2.14,1.66h-1.31l-.19-2.47.39-1.54-1.38-1.52-2.79.82-1.82-2-1.47-1v-2.49l-1.66-1.9.83-2.61,1.75-2.57.77-2.41,1.73-.35,1.47.76,1.73-2.3,1.56.41,1.64-1.5-.4-2.23-1.2-.89,1.59-1.93-1.31.05-2.28,1.1-.65,1.09-1.7-1.09-3,.56-3.15-1.2-.9-2-2.72-3,3-2.19,4.78-2.61H130l-.29,2.66,4.53-.2-1.75-3.33L129.86,189l-1.52-2.78-2.06-2.43L123.34,182l1.2-3.08,3.8-.19,2.71-2.74.51-3,2.19-3,2.09-.73,4.06-2.88,2,.44,3.3-3.53,3.25,1.4,1.55,3,1-1.26,3.62.39-.13,1.49,3.28,1.1,2.19-.64,4.52,2,4.13.6,1.65.82,2.85-1L176.3,173l2.33.86,0,21.16v27.1l2.11.13,2.09,1.2,1.5,1.87,1.9,2.75,2.09-2.33,2.15-1.37,1.14,2.18,1.45,1.7,2,1.86,1.34,2.89,2.2,4.5,3.65,2.45.06,2.39Zm134.61,26.35-1-.91-1.43.53-.72-.82-1.63,2.37-.66,2.41-.77,1.39-.91.47-.69.16-.21.75h-4l-3.26,0-1,.56-2.19,2.09.22.41.13,1.16-1.61,1-1.76-.25-1.68-.1-1,.33.19.88h0l0,.29-1.85,1.73-1.61.84-1.11.39-1.27.78-1.55.39-1.07-.15-1.32-.59.73-1.11.47-1,1-1.6-.1-1.2-.39-1.71-.79-.3L301.6,281l-.43,0-.11-.74,1.18-1.2.2-1.37-.18-1.37-1.59-1.18-1.82-.61-.3,1.16-.47.3-.38,1.5-.2-1-.86.73-.54,1-.55,1.46-.11,1.26.71,1.82-.06,1.92-.87,1.41-.44.4-.58.31-.73,0-.2-.2-.58-1.51v-.75l.06-.72-.27-1.43.41-1.67.48-2.07,1.11-2.32h-.32L292.58,278l-.29-.35.84-1.09,1.28-2,1.46-.28,1.67-.61,1.69.32.07,0,1.89-.28-1.07-1.23-.57-.1-.66-.12-.45-.88-2.11.28-1.9.69-1.51-1.19-1.21-.4.68-1.66-1.89,1.05-1.73,1-1.65.8L285.81,271l-2.15.65v-.45l1.46-1.33,1.52-1.26,2.19-1-2.64-.83-1.74.42-2.08-1-2.19-.51-1.5-.2-.66-.55-.39-1.8-.72,0v1.25H217.52l.73,2.66.34,2.61-.53.83-1.14-3-3.1-1.09-.26.63.63,1.48.68,2.71.39,4.14-.26,2.75-.26,2.71-.84,2.76.69,2.22.08,2.45-.47,2.33,1.14,1.52.3,2.26,1.66,2.29.95.89-.08.63,1.79,3.71,2.08,2.64.26,1.43.55.42,2,.25.77.7,1.2.13.24.74,1,.3,1.39,1.47.36,1.3,2.44-.19,2.73-.28-.2.5,3.23,1.23,4.9,1.76h6v-1h3.72l.78.88,1.09.79,1.28,1.09.71,1.3.53,1.35,1.11.74,1.79.74,1.35-1.94,1.75,0,1.52,1,1.08,1.66.74,1.43,1.26,1.37.48,1.68.6,1.13,1.68.73,1.52.52.83-.07-.4-.81-.11-1.15,0-1.65.5-1.09,1.17-1.15,2.14-1.05,1.95-1.81,1.8-.58,1.33-.17,1.56.56,1.88-.3,1.6,1.29,1.55.08.8-.47.8.36.41-.32-.46-.48,0-1-.38-.66.89-.38,1.64-.17,1.9.28,2.43-.32,1.34.62,1,1.14.39.13,2.16-1.12.84.37,1.67,2.05.61,1.34-.45,1.61.32.94,1,1.84,1.14,2,.82.54.33,1,1.06.29.64-.3.54-1.45.09-.92.07-1.61-1-2.79v-1.05l-1-1.72-.72-2.11-.38-1.72.33-1.77,1-1.48,1.21-1.2,2.35-1.65.31-.86,1.08-.94,1.08-.17,1.4-1.51,2.22-.78,1.36-1.93-.29-2.65-.23-.93-.61-.18-.09-2.56-1.48-.87,1.42.42-.46-1.73.41-1.18.26,2.27,1.09,1-.67,1.84.2.1,1.21-2.15.69-1,0-1-.54-.49-.44-1.49.7.69.48.15.16.7,1.56-2.13.47-2-.64-.13.65-.78-.06.34h1.37l3-.84-.64-.54-3.15.54,1.79-.82,1.25-.14.93-.15,1.58-.49,1,.05,1.44-.47.17-.82-.64-.64.22,1-.89-.07-.71-1.52,0-1.54.37-.66,1.13-1.74,2.27-.88,2.2-1,2.29-1.45-.37-1-1.4-1.72Zm-183.29-38.6-1.15.62-1.95,1.42.33,1.85,1.09,1,2.15-1.49,1.86-1.89-.91-1.25ZM117.44,210l1.56-1,.17-.52-1.73-.51Zm6.5,11.76-2.12.74,1.3,1.16,1.41.8,1.31-.67-.2-1.64Zm74.48,24.86-2.06.29-1-.47-.13,1.16.4,1.58,1.09,1.12.79,1.63,1.3,1.61h.85l-1.86-2.84ZM145.84,339l-.76-.21-.21.2,0,.14.24.19.37.48.72-.16.18-.28Zm-2.28-.41,1.14.07.07-.24-1.05-.1Zm4.5,2.52-.38-.2-.82-.38-.16,0-.12.22.14.44-.37.37-.11.25.35.83-.06.63.54.32.31-.37.69-.36.84-.48.06-.12-.55-.8Zm-6-3.93-.57.31.08.09.28.52.75.09.15,0,.11-.13-.62-.76Zm-3.37-1.2-.33.23-.11.17.72.42.25-.23,0-.53Z"
              id="US"
            ></path>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="506.99 244.15 508.28 241.11 507.6 239.2 504.45 240.47 504.75 242.04 506.99 244.15"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="484.98 284.71 482.56 283.39 481.78 284.02 477.83 282.7 476.98 281.56 473.51 281.47 471.73 281.62 469.45 281.11 466.56 281.14 463.94 280.6 460.91 282.72 461.78 283.99 461.67 286.04 461.77 287.01 462.19 288.03 462.25 289.23 461.8 290.92 461.64 292.05 460.79 293.05 460.62 294.86 461.13 295.89 462.1 296.14 462.29 297.81 461.96 299.9 463.07 299.61 464.21 299.99 465.06 299.29 467.07 299.71 467.68 301.24 468.47 302.13 469.52 302.35 470.34 301.35 471.68 300.42 473.73 300.46 476.45 300.43 477.97 298.37 479.59 297.83 480.05 296.07 481.29 294.85 480.46 293.28 481.28 291.01 482.61 289.46 482.8 288.51 485.55 287.92 487.58 286.01 487.47 284.33 484.98 284.71"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="546.37 204.17 544.44 200.45 545.88 196.04 543.39 189.95 545.37 185.76 542.08 181.94 542.39 177.81 543.3 173.53 540.55 171.04 537.22 173.16 536.16 177.64 534.12 180.27 531.82 178.84 529.02 179.14 526.63 175.97 525.35 177.56 524.01 177.81 523.7 181.7 519.66 180.76 519.09 183.98 517.03 183.97 515.61 187.98 513.46 194 510.14 201.27 510.92 202.97 510.17 204.93 508.05 204.84 506.65 209.36 506.79 215.51 508.15 217.79 507.44 222.94 505.66 225.86 504.71 228.27 506.34 234.01 508.14 238.45 508.82 242.06 511.31 241.88 512.52 238.86 515.12 239.23 516.34 235.59 517.16 228.83 519.39 227.86 521.36 223.1 519.31 220.69 517.78 217.58 519.35 211.15 523.49 207.06 526.9 203.13 526.56 200.06 528.64 196.47 532.33 194.99 535.32 197.45 535.54 199.62 534.11 200.69 529.2 206.06 527.26 209.07 526.23 211.81 527.27 215.95 526.8 220.33 528.87 221.76 530.12 224.11 533.61 223.2 537.38 221.62 541.28 221.28 545.87 215.61 547.86 212.97 548.67 210.59 545.49 207.34 546.37 204.17"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="500.86 287.47 501.57 285.26 501.21 282.77 499.82 283.88 499.39 284.95 499.88 286.89 500.86 287.47"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="469.09 242.22 470.24 240.43 470.95 241.48 470.17 243.16 470.68 244.18 473.28 244.82 473.31 244.88 474.75 247.14 474.44 249.23 471.25 248.91 470.84 251.25 472.02 253.15 469.78 254.23 470.38 255.6 473.73 256.18 473.75 256.18 471.83 256.92 468.68 260.47 469.82 261.14 471.33 259.86 473.31 260.24 474.73 258.67 475.73 259.33 479.38 258.41 482.25 258.44 484.18 256.65 483.32 254.87 484.41 253.85 484.67 251.61 482.07 250.94 481.46 249.53 480.14 245.39 478.67 244.8 476.75 240.37 476.59 239.97 474.37 239.73 476.3 236.26 476.85 233.03 474.5 233.01 472.32 233.56 474.61 229.18 472.04 229.49 470.33 229.17 468.66 232.47 467.88 236.57 468.96 238.55 469.09 242.22"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="536.33 303.91 534.73 303.73 533.07 303.88 531.9 302.99 531.5 304.11 534.11 304.63 534.09 305.05 537.18 304.83 537.45 304.06 536.28 304.37 536.33 303.91"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="462.69 255.35 466.49 253.3 468.12 250.15 467.76 247.58 468.91 245.06 466.62 242.78 464.82 242.93 465.26 244.92 464.82 246.88 464.81 246.88 465.25 244.91 464.81 242.92 463.19 244.66 460.27 247.53 461.39 251.18 459.65 254.83 462.69 255.35"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="512.72 296.45 510.53 296.75 508.02 296.51 507.73 297.9 510.72 299.27 511.81 299.56 513.45 300.56 513.9 299.19 513.58 298.36 514.35 296.23 512.72 296.45"
            ></polygon>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="499.75 288.84 498.57 288.7 499.06 290.3 499.15 293.65 499.96 294.38 500.83 293.46 501.8 293.64 502.1 289.96 500.82 287.95 499.75 288.84"
            ></polygon>
            <path
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M543.59,275.44l-1,.49-1-.55-.39-1.4.23-1.32-.07-1.37-1.24-1.87-.68-1.34-.67-.94-.65-.31h-.9l-.54.75-1.59.31-.73.49-1-.78H532l-1.33-.35-.92.68-.16-.86-1.18-.87.42-1.31.59-.85.46.19-.55-1.47,1.95-2.76,1.07-.39.23-.95-1.08-3,0-1.54-.67-1.62,1.29-.72,0-1.42-.6-1.36-.09-1.6,2.07,0,2.33-1.38.49-2.08,1.76-1.2-.2-1.68,1.3-.64,2.32-1.48-.7-2.29-.18-1.9-1-.91.92-1.27-.64-3.8,1.53-2.4-.33-.74-2.21.13-2.33-.7-2.7.62-2.72,1.17.19,2.38,1.37,1.45.78-.51-.25,2.39-.41,3.05-1.72.08-1.7-3-2,1.36-1.06,2.48-.07,2.92.46,3.18,2.24.66,1,.59-.23,1,.17.94-4,.06-2.64-.42-2.07,0-.16-.9-2.13-.63-2.71,1.26-3.35,1.69L511.34,248l-1-1.16-2.42-1.44-1.2,1-2.18.69,0-1.3-2.17-.86,0-1.44-.58-1.83,1.54-2.74.64.42.53-1.46-1.17-.58-.26-1.09.64-1.29.07-2.05L502,234l-.75,1.09-1.89.24-.62,1.18-.36,1.06.07,3.92.87,2.08.1,2.1.49,1.37-1.46,1.78-.4-.79-1.79.2-.42.76-1.79-.1-2.93,1.49-1.88,5.16-1.1,1-1.72.67h0l-1.88.69-.64,2.76-5,2.58-2-1.42.68,3.7-3.61-.83-2.78.7.21,2.35,3.29,1.23,1.58,1.6,2.21,3.26-.4,6L477,281.55l.85,1.14,3.95,1.32.78-.62L485,284.7l2.49-.37.24-1.75,3.12-.95,4.24.79,1.94-1.66.24-1.27h0l-.25,1.29.9-.22,1.24-1.37,1-.41,1.74,1,1.07.34.67,2.91,1.46,1.67,2,1.88,1.67,1.28,1.59.19.92,1.14,1.38.51.63,1.21.89.35.66,1.4.83,1.6-.46.59-.44,1.46v.83l.9-.21,1.15-2.34.89-.16.25-1.44-1.55-1,.9-1.81,1.87.46,1.19,1.3.4-1-.22-.52-1.84-1.47-1.57-.86-1.92-1,.6-.57-.52-.63h-1.68l-2.39-2.33-1.08-2.43-2-1.49-.7-1.52.26-.86-.13-1.51,1.75-1.08,1.7.44h0l-.47.28-.08,0,0,1.06.64,1,.65-1.31,1.38.47.05,1,1,1.25-.44.23,1.81,2.18,2,.88,1.25,1.05,2,1.07.24-.49-1.9-1.1-.81-1.23-.82-.65-1-1.11-.46-.93-1.06-1.4.45-1.25.78.69.45-.62,1-.07,1.84.5,1.48,0,1,.67.82-1.14-.68-.87-.52-1.19,1.65-.8,1.34.13,1.16,1.21.24,1,1.3.72.17,1.25,1.25.87.67-.67.54.37-.5.51.39.52-.53.67.19,1.09,1,1.27-.82.91-.36.92.23.35-.36.41,1.08.92.16,1.89,1.58.09,1.72-.79,1.51,1,1.94-.27v0l-1.95.27-1.51-1-1.73.78-1.58-.09-.4.09-.36.5-1.16-.05-.82.62-1.4.25,0,.74-.7.41-.13.91-1,1.35.14.78,1.09.88-.13.49.13.19.84,1.26.93,0,1-.21.43.14.72.06-.3.48-.42-.13-.52-.35-.45.12-.2.31-.42-.07-.28.36-.44.4.37.72.32.07.32.29.27.57-.4.43.29.77.48.42.19-.21-.09-.64h.49l.43.79-.08.57.34.23.2-1h.44l.34,1h.45l-.92-3,.76.53.71-.15-.64-1.38,1-.16,1,.88,0-1.53-1.06-.78-1.2-1.27.82-.6-1.08-1.3-.48-1.67L530,290l1.13,1.44h1.19l1.09-.46-1.48-1.57,2.6-.74,1.11.27,1.31.08.52-.32.66-1.78-1-.71v-.05l2.19-.9,1.84.39-.68-1.65.78-2.09,1.11-1.22.6-3.6.65.28,1-.65,0-.78ZM505,270.91l-.25.59-1.3-.44-.17,1.28-.95.52-1.58-.39-.47,1.25-1,.09-.38-.48-1.2,1-1,.14-.93-.66-.09.87.64,1.15-.74.92.54,2.32h0l-.55-2.32.74-.93-.63-1.15.09-.86-.74-1.36-1,.49,0-1.41,1.57-1.76-.07-.81,1,.3.59-.55.27-2.28-.26,2.28,1.82,0,.44-.69,2.3,1,.08.57-.33.77,1,.57,1.1.08,1.3.44.25-.59,2.12-.55v0Z"
            ></path>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="553.78 304.2 555.23 303.08 553.28 303.86 551.74 303.82 551.43 304.46 551.28 304.47 550.26 304.56 550.75 305.61 551.8 305.95 554.01 304.89 553.94 304.69 553.78 304.2"
            ></polygon>
            <path
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M269.64,103.69l-.17-4.51,2.78.44,1.25.74,2.56,3.76-.58,3.8L272.3,110l-1.74-2.38Zm10.11,9.68.25-1.14-1.51-1.87-4.32-.15.57,2.82,4,.63Zm27.81,35.92,2.35,3.91.62.43,2.35-1,2.31.15,2.28.22-.19-2-3.7-4.12-4.91-.83-1,.52Zm-50.06-48-2.08,3.21,4.78.39,3.53,3.4,3.5,1.15-.83-4.35L264.76,100,259,95.88l-4.21-1.56.15,4.35Zm19.81-7.83,3.93-.1-1.7,3.07,0,4.05,2.3,4.41,4.45,1.35,3.79-.76,4-8.21L297,93.9l-2.58-3.8L292.68,82l-3.52-2.44-3.61-2.82-2.74-7.31-5,.72.94,3.17-2.2,1-1.48,4.07L273.6,84,275,89.56Zm-48.77,40.84,3,1.49,9.69-1-4.45,3.64.27,2.63,3.26-.18,5.41-3.51,7.27-1.28,1.31-4-.38-4.26-2.25-.38L249.76,129l-.84-3.16-.73-4.36L246,120.36l-2,3.38,3.07,8.45-3.75-.65-3.81-5.19-6-3.06-2,2.54Zm17.26-32.18L243,99.93l-1.15-.51-2.21,3.28,0,1.53h3.56Zm-1.12,9.45.71-3.06-3-1.62L239.24,108l-1.74,3.25,3.19,3.23ZM266.94,137l3.53-.85,1-6.31-.07-4.55-1.63-4.26-.17,1.23-3-.54-3.23,3.13L261,124.6l.14,6.82,3.52-.66,0,5Zm-2.51,34.9-3.87-3L257,165.7l-.66-4.73-1.35-6.83-2.4-2.93L250.4,150l-1.89,1.09,1.53,7.33L249,161.3l-1.75-6.87-2-2.38-2.43,3.68-3-3.64-4.78,2.19,1.08-3.41-2.2-1.43-5.75,4.47-1.49,2.84-1.8,5.18,3.75,1.77,3.32-.09-5,2.65,1.13,2.39,3,.13,4.58-.51,4.15,1.5-2.8,1.1-3-.28-3.32,1.08-1.43.66,2.64,4.86,1.91-.67,2.93,1.64L238,181l3.82-.55,5.43-.89,4-2,2.49-.37,3.69,1.63,3.88.93.72-2.19-1.37-2.33,3.52-.49Zm5.92-.75-1.5,2.7L267,175.79l2.93,2.71,1.75-.65,2.89,1.8,1.33-2.09-1.31-2.31-.64-1.17L272.62,173Zm-13.47-22.54L255.25,147l-2.88.31-.73,1.05,3.35,5.17Zm21.95,10.08,2.3-5.3,2.56-1.42,3.2-6.68-4.1-1.89-4.47-.28-2.12,2.12-1.13,3.24,0,3.68,1.34,6.27ZM292,141.12l4.41-.14,6.15-1.23,2.75,1,3.19-1.73,1.34-2.17-.48-3.46-2.3-3.23-3.48-.62-4.37.75-3.42,1.86-3.12-.72-2.9-.38L288.36,129l-2.46-2,.49-3.39-1.85-3-4.23,0-2.38-3.06-4.42-.61-.81,3.9,2.49,2.86,4.43,1.11,2.15,3.9.26,4.28.75,4.59,5.7,2.61Zm-68.11-14,4-3.86,2-.45,1.65-3.24.29-7.47-2.94,1.46-3.29-.14-4.41,6.27-3.64,6.87,2.91,1.92Zm55.23,12.38,1.17-3.17-.78-2.65-1.88-3L274.5,133l-1.14,3.77,2.6,2.13Zm-6.36,8.75-.56-2.21-3.83,1-2.55-1.62-2.54,3.68,2.36,4.8-4.37-.89-.05,2.3,5.33,5.39,1.49,2.59,2.06.56,3.52-2.61L274,155l-3.24-3.12ZM216.1,265.9l-.89-1.79-2.14-1.36L212,261.18l-.72-1.14-2-.36-1.32-.51-2.25-.73-.18.78.82,1.82,2.22.59.38.95,1.92,1.14.64,1.16,3.52,1.47Zm93.11-59.4-1.53-1.61-1.58.38-.19-2.34-2.45-1.56-2.35-1.74-1.25-1.34-1.09.79-.4-2.27-1.55-.42-.74,4.69-.27,3.91-1.87,2.41,2.91-.46.73,2.79,3.05-2.47,2.13-2.59,1.2,2.19L307.3,208ZM217,166.29l5.65-3.19v-3l2.66-4.91,5.27-5.12,2.69-1.89L231,145l-2.09-2.26-5.47-.43-3.06-1.66-7.26,1.25,2.1,4.77-1.86,4.92-1.48,5.25-.92,3,5,3.58Zm102.71,20.9.25-.77,0-2.43-1.67-1.59-2,.8-.91,3.19.54,2.73,2.4-.28ZM337.93,193l3.37,5,2.64,2.18,3.76-6,.67-3.77L345,190l-3.08-5.13-3.4-1.26-5.05-3.8,3.94-2.78-2-5.76-1.87-2.57-5.18-2.56-2.23-4.25-4,1.53-.27-3-3-3.3-4.75-3.61-2,2.84-4.25,2,.32-4.64-3.68-7.69L299,149.25l-2,5.89-1.69-4.53,1.58-4.87-5.54,2-2.21,3.06-1.64,6.44.68,6.92,3,0-2.24,3,1.79,2.27,3.48,1,4.53,1.86,7.81,1.39,3.88-.8,1.15-1.85,1.69,2.13,1.89.36,2.28,3.79-1.38,1.52,4.34,2,3.29,2.81.82,2,.59,2.47-2.78,5.31-.75,2.63.72,1.85-4.41.66-4,.09-1.42,3.73,1.81,1.7,6.21-.79,0-1.44,3.12,2.41,3.2,2.51-.75,1.35,2.6,2.31,4.61,2.7,5.81,1.83-.35-1.6-2.23-2.8-3-4.11,5.37,3.82,2.71,1.27.74-3.39-1.39-4.83L340,202l-2.91-2.32-2.26-3,.27-3ZM287.56,69.35l1.79,5.58,3.79,4.49,7.51-.83,4.83,1.51-3.35,4.63-1.7-1.37-5.86-.54.91,6.36,3,4.62-.61,4-3.8,2.65-1.74,4.18,3.48,2,2.93,6.54L293,108.82l-1.31.72,1.06,7.18-4,2.16.27,4.48,4.06.48,3.19,1.1,6.3-1.41,5.61,2.5,5.73-5.5-.05-2.31-3.66.37-.3-2.17,3-2.93,1-3.94,3.31-2.93,2-3.65-1.78-5.43,1.48-2-2.95-1.44,6.5-1.25L324,90.41l4.42-2L332,78.12l3.5-3.78,5.06-8.51-4.66.07,1.94-3.29,5.19-3,5.23-6.81.09-4.38-3.92-4.62-4.61-2.24-5.73-1.4L329.49,39l-4.65-1.15-6.2,3-1.14-1.94-6.55.75-3.85,2-2.83,2.79-1.63,9-2.34-4.6L297.63,48l-3.15,6.09-4.21,2.57-2.5.5-3.19,2.94.47,5.09ZM344.48,272.1l-.75-1.51-.81,1,.54,1,2.72,1.31.8-.2,1-1.27-2,.08Zm-43.61-59.57.47,1.25,1.51.1,2.51-2.55.05-.91-3,0Zm47.54,50.83-2.2-1.37-2.82-.84-.74.29,2,1.56,2.78,1,1-.06Zm19,3.67-.27-1.72-1.5.56.66-2.38-2.14-1-1,.8-1.9-.9.75-1.16-1.44-.71-1.4,1.12,1.42-2.92,1.15-2.14.41-.93-1-.16-1.86,1.19L358,258.6l-2.22,5.3-1.8,2,.94.87-1.34,1.12.33.95,4.16.1,2.3-.2,2.06.78L360.92,271l1.28.11,2.49-2.74.6.41-.47,2.58,1.41.58,1-.11.9-2.76Zm-16.21,3.64-2.15,3.49-3.54.44-2.79-1.53-.7-2.35-.68-3.42,2-2.16-1.9-1.6-3.21.33-4.5,2.7-3.44,4.17-1.82.51,2.47-2.91,3.09-4.26,2.73-1.45,1.8-2.38,2.22-.23,3.22,0,4.59.71,3.63-.55,2.7-2.77,3.53-1.21,1.54-1.21,1.56-1.31-.15-4-.86-1.35-1.67-.49-.85-3.1-1.38-1.18-3.42-1-1.93-2.15-2.85-2.17.86-2.45L347,231.08l-2.79-5.27L342.53,222l-1.42,2-2.05,4.63L336,230.9l-1.55-2.42-2-.65-.71-5.35.06-3.67-3.83-.34-.65-1.73-2.64-2.63-2-1.56-1.78,1.2-2.2-.44L315,212.05l-1.49,1.07.72,7,.93,3.92-2.53,4.4,2.61,3.08,1.45,3.39.17,2.62-1.18,2.68-2.43,2.64-3.44,1.75,1.52,1.93,1.11,5.67-1.16,3.58-1.65,1.11-3.19-3.27-1.56-4-.66-3.64.35-3.2-2.33-.36-3.55-.22-2.27-1.59-2.68-1-1.54-1.82-2.14-1.48-4-1.71-3,.78-1-3-1-3.82-3.15-.69.12-4.9.83-3.43,2.33-5.05,2.62-3.75,2.49-.59.15-3.1,1.69-2,3.07-.32,2.49-3.36.62-2.22,2.07-4.38.64-2.68,2.22,1.62,3-.83,4.2-3.79.28-2.71-1.51-3,1.59-3.1-.13-3-2.87-3-3.17-.91-3.05-.47-.11,6.66-1.56,5-2.24,4.06-2.08-3.79.65-4.29-2.57-3.84-2.87,4.66v-6.12l-4-1.25,1.9-3.06-2.91-7.34-2.18-3-2.83-1.1-2.54,4.92-.17,7.14,2.51,2.52,2.29,3.76-1,5.89-1.73-.15-1.36,4.5v-5.36l-3.32-2-1.9,1,.24,3.57-3.13-.14-3.33.9-3.78-2.56-2.4.45-2.15-3.14-1.73-1.41-1.72.59-2.61.27-1.38,2,2.19,2.44-2.34,2.84-2.28-3.38-1.83,1-5.8.66-3.87-1.21,3-2.87-2.89-3-2.11.38-3-1-5-2.21-3.28-2.58-2.6-.36-.81,1.81-2.63,1-.3-4.7-2.85,4.2-3.63-5.6-1.48-.68-.48,3-1.6,1.46-1.48-2.6-3.51,1.57-3.21,2.72-3.19-.75-2.61,1.91-1.88,2.51-2.23-.55-3.38-2.91-4-1.48V222.1l2.11.13,2.09,1.19,1.5,1.87,1.9,2.76,2.09-2.34,2.15-1.37,1.14,2.18,1.45,1.71,2,1.85,1.33,2.9,2.2,4.5,3.65,2.45.06,2.39-1.19,1.79,0,1.9,2.6,2.64.37,2.88,2.75,1.5-.31,2.13,1.2,3,3.88,1.39,1.53,1.45,4.16,3.24H277V263l.72,0,.39,1.8.66.55,1.5.2,2.19.51,2.08,1,1.74-.42,2.64.83.87-1.27,1.22-.5.47-.79.48-.42,2,.66,1.48.07.51.44.72,1.82,2.41.48-.38.9.85.93-.37,1.19.91.39-.45,1.05.57.1.41-.46.42.69,1.6.38,1.63,0,1.74.32,1.92.6.7,1,1.39,2.33-.69,1-1.74-.41-1.09-1.87.27,1.9-1,1.67.11,1.4-.17.82-1.39,1-1,1.6-.47,1,1.18.19,1.59-.92.94-.81.63-.13,1.18.29.58-.45,1.05-.37,1.86-.36h0l-.19-.88-.1,0-.66.15-.85-.27.64-1,.65-.35,1.51-.43,1.82-.41.95.56.59-.65.68-.41.46.22,0,0,2.19-2.08,1-.56,3.26,0h4l.21-.75.69-.15.91-.47.77-1.4.66-2.41,1.63-2.37.71.83,1.44-.54,1,.91v4.23l1.4,1.72,2.39-.37,3.43-.1-3.72,2.5.08,2.51,1.63.22L343.3,279l2.13-1.21,4.75-1.79,2.66-2-1.39-1.12Zm-41.06-54.4.85-2.39-.55-.94-.88-.1-.82,1.38-.1.31.56,1.36ZM201,244.14h0l1.2-1.79Zm-2.6,2.52-2.06.29-1-.47-.13,1.16.4,1.58,1.09,1.12.79,1.63,1.3,1.61h.85l-1.86-2.84Z"
              id="CA"
            ></path>
            <path
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M769.89,307l.28.88L769,309.48l-.88-.82-1.11.59-.56,1.5L765,310v-1.21l1.19-1.53,1.22.3.88-1.09Zm13.6-7.86-.81,2.13.37,1.32-1.12,1.85-2.74,1.22-3.77.17-3.06,2.93-1.44-1-.08-1.93-3.73.57-2.55,1.22-2.5,0,2.17,1.89-1.43,4.29L761.41,315l-1-1,.53-2.27-1.35-.73-.88-1.75,2-.79,1.13-1.61,2.15-1.34,1.58-1.78,4.27-.78,2.29.53,2.25-4.72L775.8,300l3.14-2.69,1.22-1.05,1.34-3.35-.36-3.14L782,288l2.28-.52,1.17,3.91-.06,2.25-2,2.75Zm6.29-19.84,1.51.63,1.52-1.26.47,3.33-3.18.8-1.89,2.88-3.37-2-1.17,3.15-2.39,0-.3-2.86,1.07-2.25,2.29-.16.63-4.11.64-2.37,2.51,3.15Z"
              id="JP"
            ></path>
            <polygon
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="761.31 284.56 759.93 282.84 759.07 284.47 755.76 285.72 756.1 287.23 754.24 287.12 753.23 286.23 751.75 288.25 749.38 289.77 747.64 291.56 748.65 292.31 749.9 292.61 750.04 293.06 749.5 294.55 749.69 295.05 749.19 295.37 748.6 296.57 749.17 297 749.73 297.25 749.81 297.75 750.43 297.53 750.69 297.03 751.73 297.54 753.2 299.84 751.61 300.29 752.56 303.04 752.16 305.01 752.4 306.42 754.34 306.2 756.05 305.12 757.99 304.62 758.8 303.18 758.78 300.13 758.25 298.4 756.4 295.2 755.18 293.99 754.33 293.55 754.58 293.24 754.65 292.04 755.58 291.29 757.01 290.83 757.82 290 758.2 289.51 759.31 288.89 759.22 286.85 759.87 285.87 760.8 284.89 761.61 285.07 761.31 284.56"
            ></polygon>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(639.26 458.39)"
            >
              Australia
            </text>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(600.63 277.33)"
            >
              China
            </text>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(794.51 296.76)"
            >
              Japan
            </text>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(747.46 328.84)"
            >
              Ko
              <tspan letter-spacing="-0.02em" y="0" x="23.98">
                r
              </tspan>
              <tspan y="0" x="30.78">
                ea
              </tspan>
            </text>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(124.07 255.53)"
            >
              Canada
            </text>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(389.71 289.05)"
            >
              Eu
              <tspan letter-spacing="-0.02em" y="0" x="22.53">
                r
              </tspan>
              <tspan letter-spacing="0em" y="0" x="29.33">
                ope
              </tspan>
            </text>
            <text
              font-weight="500"
              font-family="Avenir-Medium, Avenir"
              fill="#011d3b"
              font-size="19.31"
              transform="translate(172.71 308.4)"
            >
              USA
            </text>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="284.31"
              cx="465.82"
            ></circle>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="302.35"
              cx="224.63"
            ></circle>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="251.31"
              cx="205.51"
            ></circle>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="272.42"
              cx="661.25"
            ></circle>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="289.79"
              cx="784.8"
            ></circle>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="304.51"
              cx="754.36"
            ></circle>
            <circle
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="453.31"
              cx="729.29"
            ></circle>
          </svg>
        </p>
      </div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
            <h4 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:mb-8 lg:mb-16 dark:text-white md:text-4xl">
              Some of our medical device clients include:
            </h4>
            <ClientsBox state={10} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
