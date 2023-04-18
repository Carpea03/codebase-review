import Image from 'next/image'
import Layout from '../components/to-delete/layout'
import Link from 'next/link'
import StaffChris from '../components/to-delete/staff/chris'
import StaffMartin from '../components/to-delete/staff/martin'
import StaffMike from '../components/to-delete/staff/mike'
import StaffWarren from '../components/to-delete/staff/warren'
import StaffNaleesha from '../components/to-delete/staff/naleesha'

const myLoader = ({ src, width, quality }) => {
  return `https://www.baxterip.com.au/wp-content/uploads/2019/06/${src}?w=${width}&q=${
    quality || 75
  }`
}

export default function ConstructionPatents() {
  return (
    <Layout>
      <div>
        <h1>Civil engineering and construction patents</h1>
        <p>
          Innovations in the field of civil engineering and construction are
          brought about by the need to meet or exceed existing building
          standards, shorten lead times, minimise cost and maintain the safety
          of the generally capital-intensive construction projects. In
          Australia, civil engineering ranks among the top 5 industries for
          filing patent applications in 2018.
        </p>
        <h2>What’s patentable?</h2>
        <p>
          So long as your civil engineering or construction industry technology
          is new and inventive, it should be patentable in any country around
          the world. In relation to protection of technologies involved in large
          projects, it is difficult to maintain confidentiality; thus, an early
          patent filing date is particularly important.
        </p>
        <h3>
          Benefits and challenges of filing civil engineering and construction
          patent applications
        </h3>
        <p>
          Civil engineering patent applications are used to protect innovative
          design features of structures, components and infrastructure.
          Companies that have patents granted to them benefit from a 20 year
          monopoly over these design features. Companies that have exclusive use
          of innovative design features may be able to:
        </p>
        <ul>
          <li>More successfully respond to tenders</li>
          <li>Complete works more cost efficiently</li>
          <li>Complete works to a higher design standard</li>
        </ul>
        <h3>
          Benefits and challenges of filing civil engineering and construction
          patent applications
        </h3>
        <table>
          {/* <table className="table-auto border-separate border-spacing-2 border border-slate-500"> */}
          <tbody>
            <tr>
              <th>Building construction systems</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2015331287"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2015331287"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2015331287
                    </Link>
                  </dt>
                  <dd>
                    Construction machine control system, a construction machine,
                    a construction machine management system, and a construction
                    machine control method and program
                  </dd>
                </dl>
                <p>
                  <strong>Komatsu Ltd.</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Prefabricated building systems</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2019100306"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2019100306"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2019100306
                    </Link>
                  </dt>
                  <dd>
                    Prefabricated high-strength and high-efficiency thermal
                    insulation composite external wall panel
                  </dd>
                </dl>
                <p>
                  <strong>
                    Pan, Margarett MRS; Sunrise Smart Built-IT Co. Ltd.
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Methods of construction</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2017203475"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2017203475"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2017203475
                    </Link>
                  </dt>
                  <dd>
                    Composite wall panel, wall system and components thereof,
                    and a method of construction thereof
                  </dd>
                </dl>
                <p>
                  <strong>Neil, Peter Mervyn</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Safety apparatus</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018101553"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018101553"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2018101553
                    </Link>
                  </dt>
                  <dd>
                    A fire safety arrangement for overhead pipe support
                    arrangements and a method of installing said fire safety
                    arrangement
                  </dd>
                </dl>
                <p>
                  <strong>DALF Enterprises Pty Ltd</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Heating &amp; cooling systems</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2016274787"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2016274787"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2016274787
                    </Link>
                  </dt>
                  <dd>
                    Cooling system with direct expansion and pumped refrigerant
                    economization cooling
                  </dd>
                </dl>
                <p>
                  <strong>Vertiv Corporation</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Lifting apparatus</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2017101710"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2017101710"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2017101710
                    </Link>
                  </dt>
                  <dd>
                    Lifting device of hydraulic straightening platform for shaft
                    parts
                  </dd>
                </dl>
                <p>
                  <strong>Yuan, Xianyang MR</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Concrete compositions &amp; building materials</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018204490"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018204490"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2018204490
                    </Link>
                  </dt>
                  <dd>Concrete tile and molding material for same</dd>
                </dl>
                <p>
                  <strong>Kuraray Co., Ltd.</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Structural engineering</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2017204060"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2017204060"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2017204060
                    </Link>
                  </dt>
                  <dd>Method for producing arc-welded structural member</dd>
                </dl>
                <p>
                  <strong>Nisshin Steel Co., Ltd.</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Underground pipe installation</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2010223609"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2010223609"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2010223609
                    </Link>
                  </dt>
                  <dd>
                    Method and system for inserting a pipe into an underground
                    borehole
                  </dd>
                </dl>
                <p>
                  <strong>Tracto-Technik GmbH &amp; Co. KG</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Building components</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018901230"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018901230"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2018901230
                    </Link>
                  </dt>
                  <dd>
                    A building component for use in the construction of concrete
                    poured buildings
                  </dd>
                </dl>
                <p>
                  <strong>Nowland, Denis Alfred</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Rail infrastructure &amp; rolling stock</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2008301671"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2008301671"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2008301671
                    </Link>
                  </dt>
                  <dd>
                    Steering bogie for rolling stock, rolling stock and
                    articulated vehicle
                  </dd>
                </dl>
                <p>
                  <strong>Nippon Steel &amp; Sumitomo Metal Corporation</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Power distribution infrastructure</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018100175"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018100175"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2018100175
                    </Link>
                  </dt>
                  <dd>A power distribution system with override capability</dd>
                </dl>
                <p>
                  <strong>Redarc Technologies Pty Ltd</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Cleantech</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018101793"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018101793"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2018101793
                    </Link>
                  </dt>
                  <dd>
                    Method and system for controlling operation of a renewable
                    energy system
                  </dd>
                </dl>
                <p>
                  <strong>GTL Renewable Pty Ltd</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Recycled bulk materials</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2006242458"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2006242458"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2006242458
                    </Link>
                  </dt>
                  <dd>Pneumatic conveying device for bulk material</dd>
                </dl>
                <p>
                  <strong>Clyde Process Limited</strong>
                </p>
              </td>
            </tr>
            <tr>
              <th>Safety apparatus</th>
              <td>
                <dl>
                  <dt>
                    <Link
                      title="AU Patent # 2018102112"
                      href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018102112"
                      target="_blank"
                      rel="noopener noreferrer">
                      AU Patent # 2018102112
                    </Link>
                  </dt>
                  <dd>A fall arresting overhead safety rail system</dd>
                </dl>
                <p>
                  <strong>Sayfa R&amp;D Pty Ltd</strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>
          The Baxter IP approach to filing civil engineering and construction
          patent applications
        </h2>
        <p>
          Patent strategies that are particularly useful in the civil
          engineering and construction industry include:
        </p>
        <ol>
          <li>
            File in Australia so as to protect your home market and to make use
            of the 12-month period prior to having to make a foreign filing, to
            develop the project commercially.
          </li>
          <li>
            Use confidentiality agreements together with your patent pending to
            approach multinational companies or statutory bodies.
          </li>
          <li>
            Use a PCT patent application at the end of the 12-month period to
            continue to cover your idea in 152 countries (as at 2019) and
            possibly file other patents to ensure you cover all countries in
            which the prospective multinationals commercialise or statutory
            bodies will build or use the new technology.
          </li>
          <li>
            Proceed in the countries that are important to interested parties by
            the 30-month deadline for&nbsp;
            <Link href="https://www.baxterip.com.au/national-phase-patent">
              national phase entry
            </Link>
            .
          </li>
        </ol>
        <p>
          Depending on specific circumstances, however, other strategies may be
          more appropriate. It is important to discuss your particular situation
          with a qualified attorney to determine the best strategy in each case.
        </p>
        <h3>
          Examples of civil engineering and construction patent applications
          filed through Baxter IP
        </h3>
        <ol>
          <li>
            <Link
              title="AU Patent #2018247335"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018247335">
              <i>AU Patent #2018247335</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>
              Lift shaft assembly and construction and installation
              thereof.&nbsp;
            </strong>
            Bowen and Pomeroy Pty Ltd
          </li>
          <li>
            <Link
              title="AU Patent #2019901171"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2019901171">
              <i>AU Patent #2019901171</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>Hole depth measuring, device and system.&nbsp;</strong>
            Jedair Compressors Pty Ltd
          </li>
          <li>
            <Link
              title="AU Patent #2019200184"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2019200184">
              <i>AU Patent #2019200184</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>
              A plumbing attachment to aid in the installation of piping.&nbsp;
            </strong>
            Nilsson, Fredrik
          </li>
          <li>
            <Link
              title="AU Patent #2019200174"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2019200174">
              <i>AU Patent #2019200174</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>A system and a method for power generation.&nbsp;</strong>
            Hiremath, Rajeev MR
          </li>
          <li>
            <Link
              title="AU Patent #2018274977"
              href="http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2018274977">
              <i>AU Patent #2018274977</i>
            </Link>
            &nbsp;–&nbsp;
            <strong>
              A system for providing a continuous stream of foamed cement
              product and a mixing and pump apparatus, system and an associated
              method for providing a stream of foamed cement material.&nbsp;
            </strong>
            Vacrest Pty Ltd
          </li>
        </ol>
      </div>
      {/* <section className="bg-white dark:bg-gray-900 not-format max-w-2xl"> */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 not-format">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our civil engineering and construction industry experts
          </h2>
          {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Tagline
              </p> */}
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <StaffChris />
          <StaffMartin />
          <StaffMike />
          <StaffWarren />
          <StaffNaleesha />
        </div>
      </div>
      {/* </section> */}
      {/* <div className="pt-14 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"> */}
      <div>
        <h2>
          What are the key regions for civil engineering and construction
          patents?
        </h2>
        <p>
          <svg
            id="svg-replaced-2"
            className="bip-svg replaced-svg svg-replaced-2"
            viewBox="0 0 996.83 564.98"
            xmlns="http://www.w3.org/2000/svg">
            <title>
              What are the key regions for civil engineering and construction
              patents?
            </title>
            <rect
              fill="none"
              height="564.98"
              width="996.83"></rect>
            <path
              fill="#d6d6d6"
              d="M591.7,331.31l.39-.12.08.64,1.68-.36,1.77.06,1.29.07,1.47-1.59L600,328.5l1.35-1.46.41.81.29,1.86H601l-.18,1.53.38.32-1,.46v1l-.62,1-.06.93-.43.49-6.45-1.17-.82-2.35Z"
              id="AE"></path>
            <path
              fill="#d6d6d6"
              d="M525.22,286.12l-.26,1,.3,1.22.89.68,0,.75-.69.41-.13.91-1,1.35-.36-.19,0-.62-1.2-.94-.18-1.34.18-1.93.29-.89-.36-.45-.14-.91.93-1.43.13.55.58-.26.46.78.52.29Z"
              id="AL"></path>
            <path
              fill="#d6d6d6"
              d="M574.55,288.29l3-.44.45.75.82.49-.44.7,1.15,1-.61.89.91.76,1,.45,0,1.91-.78.08-.87-1.59v-.42h-.95l-.63-.75-.45.07-.85-.81-1.59-.69.21-1.37Z"
              id="AM"></path>
            <path
              fill="#d6d6d6"
              d="M516.08,397.15l.53,1.6.61,1.28.49.7.82,1.13,1.41-.18.72-.31,1.18.31.32-.54.54-1.25,1.33-.08.11-.38h1.1l-.18.78,2.6,0,0,1.35.43.84-.31,1.3L528,405l.72.8-.12,2.58.53-.2.93.06,1.34-.32,1,.13.23.67-.24,1,.37,1-.32.82.19.76-4.47,0-.1,7,1.44,1.82,1.4,1.4-3.94.91-5.19-.32-1.48-1.07-8.7.1-.33.16-1.27-1-1.4-.07-1.28.39-1,.43-.2-1.4.3-2,.74-2,.11-.95.7-2,.51-.9,1.23-1.43.69-1,.22-1.62-.11-1.23-.64-.77-.58-1.32-.53-1.29.12-.45.66-.86-.65-2.08-.44-1.44-1.07-1.35.21-.41.88-.3.62,0,.75-.26Zm-8.35-.41-.54.23-.57-1.61.86-.93.65-.36.8.74-.78.45-.35.55Z"
              id="AO"></path>
            <path
              fill="#d6d6d6"
              d="M340.54,526.55l-2,.19-1.1-1.32-1.29-.1h-2.3v-8.09l.83,1.65,1.07,2.7,2.79,2.2,3,.92Zm1.15-93.68,1.26,1.67.84-1.86,2.44.09.35.49,3.94,3.78,1.75.36,2.63,1.72,2.21.92.3,1-2.11,3.62,2.17.65,2.41.37,1.69-.38,1.95-1.84.35-2.1,1.06-.45,1.08,1.37,0,1.91-1.81,1.32-1.44,1-2.42,2.36-2.86,3.34-.53,2-.58,2.58,0,2.53-.47.56-.17,1.66-.14,1.35,2.72,2.22-.29,1.82,1.34,1.15-.11,1.3-2.06,3.46L354,474.3l-4.3.58-2.36-.28.46,1.65-.44,2.08.4,1.41-1.29,1-2.19.39-2.07-1-.83.74.3,2.84,1.45.87,1.18-.91.64,1.5-2,.9-1.72,1.82-.31,3-.51,1.62h-2L336.72,494l-.61,2.3,2.11,2.28,2,.63-.73,2.86L337,503.93l-1.4,3.85-1.95,1.31-.88,1.58.69,3.55,1.43,2-.9-.17-2-.55-5.19-.46-.88-2,0-2.54-1.43.21-.75-1.22-.2-3.52,1.65-1.44.68-2-.25-1.62,1.14-2.69.78-4.09-.23-1.79.93-.57-.23-1.13-1-.6.7-1.25-1-1.11-.5-3.37.87-.59-.36-3.47.5-2.87.58-2.47,1.28-1-.65-2.65v-2.46l1.63-1.73-.05-2.2,1.22-2.53v-2.36l-.56-.47-1-4.35,1.32-2.56-.21-2.38.77-2.22,1.41-2.26,1.51-1.49-.64-.94.45-.77-.07-3.93,2.34-1.16.73-2.42-.26-.58,1.79-2.08Z"
              id="AR"></path>
            <path
              fill="#d6d6d6"
              d="M577.6,292.09l.63.74h.95v.43l.87,1.59-1.47-.37-1.08-1.27-.34-1.05Zm5.08-4.16,1,.19.37-.72,1.28-1.16,1.12,1.51,1.1,2,1,.13.66.76-1.77.22L587,293l-.36,1-.79.65.06,1.35-.54.14-1.33-1.43.74-1.36-.64-.82-.8.21-2.53,2-.05-1.92-1-.45-.91-.76.6-.88-1.14-1,.43-.7-.82-.49-.44-.74.52-.47,1.6.82,1.16.17.29-.33L580,286.49l.56-.4.61.1Z"
              id="AZ"></path>
            <path
              fill="#d6d6d6"
              d="M521.83,277.28h.78l-.54,1.32,1,1.15-.31,1.39-.5.13-.41.27-.7.69-.31,1.6-1.9-1.1-.81-1.23-.82-.65-1-1.11-.46-.93-1.06-1.4.45-1.25.78.69.45-.62,1-.07,1.84.5,1.48,0Z"
              id="BA"></path>
            <path
              fill="#d6d6d6"
              d="M679.86,336.42l0,1.65-.75-.35.14,1.84-.61-1.19-.13-1.17-.41-1.11-.89-1.34-2-.09.2.95-.67,1.28-.92-.47-.31.42-.61-.25-.82-.2-.34-1.9-.74-1.75.36-1.4-1.32-.63.47-.86,1.34-.88-1.54-1.25.76-1.61,1.69,1,1,.12.19,1.64,2,.32,2,0,1.23.4-1,2-1,.14-.65,1.32,1.17,1.21.35-1.48h.6Z"
              id="BD"></path>
            <path
              fill="#d6d6d6"
              d="M475,364l-1.46-.56-1,.09-.75.54-1-.46-.37-.71-1-.48-.14-1.25.59-.93-.06-.73,1.71-1.81.31-1.5.59-.53,1,.29.9-.44.29-.57,1.67-1,.4-.69,2-.92L480,352l.54.42h1.37l-.17,1.07.29,1,1.21,1.43.06,1.05,2.48.5-.05,1.49-.47.66-1,.2-.44.95L483,361l-1.88,0-1-.17-.69.35-.94-.16-3.73.1-.05,1.23Z"
              id="BF"></path>
            <path
              fill="#d6d6d6"
              d="M544,394.2l-.14-2.57-.54-1,1.31.17.65-1.22,1.14.14.13.84.46.49,0,.69-.53.45-.84,1.11-.77.78Z"
              id="BI"></path>
            <path
              fill="#d6d6d6"
              d="M486.83,371.24l-1.77.26-.53-1.49.1-4.94-.44-.44-.08-1.07-.75-.76-.65-.63L483,361l.73-.24.44-.95,1-.2.47-.66.71-.63h.78l1.63,1.25-.08.73.48,1.29-.42.87.22.58-1,1.34-.66.66-.4,1.36.05,1.37Z"
              id="BJ"></path>
            <path
              fill="#d6d6d6"
              d="M726.05,375l.85-.8,1.83-1.17-.1,1.06-.12,1.36-1-.07-.45.73Z"
              id="BN"></path>
            <path
              fill="#d6d6d6"
              d="M346.23,432.78l-2.44-.1-.84,1.86-1.26-1.67-2.81-.56-1.78,2.09-1.55.31-.85-3.18L333.56,429l.67-2.2-1.12-.95-.29-1.63-1.05-1.53,1.35-2.4-.93-1.86.5-.75-.39-.82.84-1.1.05-1.86.1-1.55.47-.73-1.86-3.51,1.6.19,1.1-.06.48-.65,1.87-.88,1.13-.81,2.81-.37-.23,1.63.26.83-.17,1.45,2.33,1.95,2.4.36.85.82,1.45.44.89.63,1.34,0,1.25.65.09,1.27.42.64,0,1-.62,0,.82,2.58,4.11.09-.31,1.29.23.88,1.17.62.51,1.4-.38,1.77-.59,1,.21,1.29-.68.47,0-.7-2-1.15-2,0-3.74.66-1,2-.05,1.22-.85,2.75Z"
              id="BO"></path>
            <path
              fill="#d6d6d6"
              d="M357.44,452.25l2.86-3.35,2.42-2.35,1.44-1,1.81-1.33,0-1.9L364.93,441l-1.06.45.42-1.36.29-1.39v-1.29l-.77-.42-.8.37-.8-.1-.25-.9-.2-2.12-.41-.69-1.44-.62-.88.45-2.26-.45.14-3.1-.64-1.27.68-.47-.21-1.29.59-1,.38-1.77-.51-1.4L356,422l-.23-.88.31-1.29-4.11-.09-.82-2.58.62,0,0-1-.42-.64-.09-1.27L350,413.6l-1.34,0-.89-.63-1.45-.44-.85-.82-2.4-.36-2.33-1.95.17-1.45-.26-.83.23-1.63-2.81.37-1.13.81-1.87.88-.48.65-1.1.06-1.6-.19-1.21.38-1-.26.14-3.29-1.76,1.27-1.89-.05-.81-1.15-1.42-.13.45-.92-1.19-1.32-.9-1.93.57-.39v-.92l1.3-.62-.22-1.15.55-.75.16-1,2.45-1.47,1.76-.4.28-.32,1.94.1,1-5.86.05-.92-.33-1.22-.95-.78v-1.54l1.2-.36.43.22.07-.81-1.25-.23,0-1.33,4.18.05.71-.74.6.68.41,1.26.41-.27,1.18,1.13,1.67-.13.42-.66,1.59-.5.88-.34.25-.91,1.54-.61-.13-.44-1.81-.18-.3-1.35.09-1.43-1-.55.4-.2L344,376l1.71.54.62-.51,1.53-.33,2.41-.8.78-.82-.29-.6,1.12-.09.51.49-.29.94.74.32.49,1-.59.75-.35,1.82.55,1.08.16,1,1.32,1,1.06.11.23-.41.68-.09,1-.38.7-.56,1.18.17.52-.07,1.17.17.19-.43-.36-.43.22-.62.86.2,1-.23,1.22.46.95.44.66-.58.48.09.29.6,1-.15.82-.81.66-1.58,1.27-1.95.73-.1.53,1.18,1.2,3.74,1.15.35.06,1.47-1.62,1.75.67.64,3.79.34.08,2.13,1.63-1.4,2.7.77,3.56,1.31,1,1.24-.35,1.18,2.49-.66,4.18,1.14,3.2-.09,3.17,1.77,2.74,2.39,1.65.62,1.84.09.78.67.73,2.73.36,1.3-.86,3.56-1.1,1.41-3,3-1.37,2.46-1.58,1.9-.54,0-.6,1.61.15,4.13-.59,3.43-.23,1.47-.68.88-.38,3-2.17,3-.37,2.36-1.74,1-.5,1.39h-2.33l-3.37.9-1.52,1-2.4.68-2.52,1.87L377,441.75l-.31,1.77.36,1.33-.41,2.43-.48,1.19-1.5,1.34-2.38,4.34-1.89,2L369,457.31l-1,2.42-1.42,1.46-.6-1.45,1-1.2-1.24-1.73L364,455.42l-2.21-1.59-.79.07L358.83,452Z"
              id="BR"></path>
            <path
              fill="#d6d6d6"
              d="M314.73,332.44l-.53.11-.54-1.34-.81-.69.47-1.49.64.09.75,2Zm-.61-6.65-2.35.38-.15-.88,1-.19,1.42.07Zm1.75,0-.36,1.69-.4-.31,0-1.25-1-.94v-.27Z"
              id="BS"></path>
            <path
              fill="#d6d6d6"
              d="M677.77,322.93l.87.77-.15,1.48-1.75.07-1.81-.17-1.35.38-2-.91,0-.48,1.41-1.79,1.16-.62,1.54.56,1.13.06Z"
              id="BT"></path>
            <path
              fill="#d6d6d6"
              d="M536.08,424.82l.43.4.68,1.31,2.43,2.49.91.24v.81l.63,1.45,1.66.35,1.37,1-3,1.7-1.93,1.73-.71,1.55-.64.88-1.17.19-.38,1.13-.22.73-1.37.55-1.74-.11-1-.66-.9-.29-1.05.55-.53,1.13-1,.72-1.08,1.06-1.53.24-.48-.83.2-1.45-1.28-2.25-.57-.35v-6.78l2.11-.08.06-8.09,1.6-.07,3.31-.79.82.93,1.36-.88h.66l1.21-.5.38.17Z"
              id="BW"></path>
            <path
              fill="#d6d6d6"
              d="M531.44,247.41l2.07,0,2.33-1.38.49-2.08,1.76-1.2-.2-1.68,1.3-.64,2.32-1.48,2.25,1,.31.94,1.12-.45,2.1.91.21,1.76-.46,1,1.34,2.41.88.67-.13.66,1.44.63.62,1-.83.78-1.73-.12-.41.33.5,1.18.53,2.24-1.85.21-.65.77-.15,1.72-.85-.32-1.93.16-.57-.8-.8.6-.81-.5-1.69-.07-2.39-.83-2.17-.27-1.66.08-1.18.94-1,.13,0-1.54-.67-1.62,1.29-.72,0-1.42-.6-1.36Z"
              id="BY"></path>
            <path
              fill="#d6d6d6"
              d="M289.82,346v-.33l.26-.11.39.27.76-1.36.41,0v.33h.4l0,.61-.35,1,.19.35-.22.8.13.21-.25,1.12-.42.6-.39.07-.43.76h-.63l.17-2.51Z"
              id="BZ"></path>
            <path
              fill="#d6d6d6"
              d="M269.64,103.69l-.17-4.51,2.78.44,1.25.74,2.56,3.76-.58,3.8L272.3,110l-1.74-2.38Zm10.11,9.68.25-1.14-1.51-1.87-4.32-.15.57,2.82,4,.63Zm27.81,35.92,2.35,3.91.62.43,2.35-1,2.31.15,2.28.22-.19-2-3.7-4.12-4.91-.83-1,.52Zm-50.06-48-2.08,3.21,4.78.39,3.53,3.4,3.5,1.15-.83-4.35L264.76,100,259,95.88l-4.21-1.56.15,4.35Zm19.81-7.83,3.93-.1-1.7,3.07,0,4.05,2.3,4.41,4.45,1.35,3.79-.76,4-8.21L297,93.9l-2.58-3.8L292.68,82l-3.52-2.44-3.61-2.82-2.74-7.31-5,.72.94,3.17-2.2,1-1.48,4.07L273.6,84,275,89.56Zm-48.77,40.84,3,1.49,9.69-1-4.45,3.64.27,2.63,3.26-.18,5.41-3.51,7.27-1.28,1.31-4-.38-4.26-2.25-.38L249.76,129l-.84-3.16-.73-4.36L246,120.36l-2,3.38,3.07,8.45-3.75-.65-3.81-5.19-6-3.06-2,2.54Zm17.26-32.18L243,99.93l-1.15-.51-2.21,3.28,0,1.53h3.56Zm-1.12,9.45.71-3.06-3-1.62L239.24,108l-1.74,3.25,3.19,3.23ZM266.94,137l3.53-.85,1-6.31-.07-4.55-1.63-4.26-.17,1.23-3-.54-3.23,3.13L261,124.6l.14,6.82,3.52-.66,0,5Zm-2.51,34.9-3.87-3L257,165.7l-.66-4.73-1.35-6.83-2.4-2.93L250.4,150l-1.89,1.09,1.53,7.33L249,161.3l-1.75-6.87-2-2.38-2.43,3.68-3-3.64-4.78,2.19,1.08-3.41-2.2-1.43-5.75,4.47-1.49,2.84-1.8,5.18,3.75,1.77,3.32-.09-5,2.65,1.13,2.39,3,.13,4.58-.51,4.15,1.5-2.8,1.1-3-.28-3.32,1.08-1.43.66,2.64,4.86,1.91-.67,2.93,1.64L238,181l3.82-.55,5.43-.89,4-2,2.49-.37,3.69,1.63,3.88.93.72-2.19-1.37-2.33,3.52-.49Zm5.92-.75-1.5,2.7L267,175.79l2.93,2.71,1.75-.65,2.89,1.8,1.33-2.09-1.31-2.31-.64-1.17L272.62,173Zm-13.47-22.54L255.25,147l-2.88.31-.73,1.05,3.35,5.17Zm21.95,10.08,2.3-5.3,2.56-1.42,3.2-6.68-4.1-1.89-4.47-.28-2.12,2.12-1.13,3.24,0,3.68,1.34,6.27ZM292,141.12l4.41-.14,6.15-1.23,2.75,1,3.19-1.73,1.34-2.17-.48-3.46-2.3-3.23-3.48-.62-4.37.75-3.42,1.86-3.12-.72-2.9-.38L288.36,129l-2.46-2,.49-3.39-1.85-3-4.23,0-2.38-3.06-4.42-.61-.81,3.9,2.49,2.86,4.43,1.11,2.15,3.9.26,4.28.75,4.59,5.7,2.61Zm-68.11-14,4-3.86,2-.45,1.65-3.24.29-7.47-2.94,1.46-3.29-.14-4.41,6.27-3.64,6.87,2.91,1.92Zm55.23,12.38,1.17-3.17-.78-2.65-1.88-3L274.5,133l-1.14,3.77,2.6,2.13Zm-6.36,8.75-.56-2.21-3.83,1-2.55-1.62-2.54,3.68,2.36,4.8-4.37-.89-.05,2.3,5.33,5.39,1.49,2.59,2.06.56,3.52-2.61L274,155l-3.24-3.12ZM216.1,265.9l-.89-1.79-2.14-1.36L212,261.18l-.72-1.14-2-.36-1.32-.51-2.25-.73-.18.78.82,1.82,2.22.59.38.95,1.92,1.14.64,1.16,3.52,1.47Zm93.11-59.4-1.53-1.61-1.58.38-.19-2.34-2.45-1.56-2.35-1.74-1.25-1.34-1.09.79-.4-2.27-1.55-.42-.74,4.69-.27,3.91-1.87,2.41,2.91-.46.73,2.79,3.05-2.47,2.13-2.59,1.2,2.19L307.3,208ZM217,166.29l5.65-3.19v-3l2.66-4.91,5.27-5.12,2.69-1.89L231,145l-2.09-2.26-5.47-.43-3.06-1.66-7.26,1.25,2.1,4.77-1.86,4.92-1.48,5.25-.92,3,5,3.58Zm102.71,20.9.25-.77,0-2.43-1.67-1.59-2,.8-.91,3.19.54,2.73,2.4-.28ZM337.93,193l3.37,5,2.64,2.18,3.76-6,.67-3.77L345,190l-3.08-5.13-3.4-1.26-5.05-3.8,3.94-2.78-2-5.76-1.87-2.57-5.18-2.56-2.23-4.25-4,1.53-.27-3-3-3.3-4.75-3.61-2,2.84-4.25,2,.32-4.64-3.68-7.69L299,149.25l-2,5.89-1.69-4.53,1.58-4.87-5.54,2-2.21,3.06-1.64,6.44.68,6.92,3,0-2.24,3,1.79,2.27,3.48,1,4.53,1.86,7.81,1.39,3.88-.8,1.15-1.85,1.69,2.13,1.89.36,2.28,3.79-1.38,1.52,4.34,2,3.29,2.81.82,2,.59,2.47-2.78,5.31-.75,2.63.72,1.85-4.41.66-4,.09-1.42,3.73,1.81,1.7,6.21-.79,0-1.44,3.12,2.41,3.2,2.51-.75,1.35,2.6,2.31,4.61,2.7,5.81,1.83-.35-1.6-2.23-2.8-3-4.11,5.37,3.82,2.71,1.27.74-3.39-1.39-4.83L340,202l-2.91-2.32-2.26-3,.27-3ZM287.56,69.35l1.79,5.58,3.79,4.49,7.51-.83,4.83,1.51-3.35,4.63-1.7-1.37-5.86-.54.91,6.36,3,4.62-.61,4-3.8,2.65-1.74,4.18,3.48,2,2.93,6.54L293,108.82l-1.31.72,1.06,7.18-4,2.16.27,4.48,4.06.48,3.19,1.1,6.3-1.41,5.61,2.5,5.73-5.5-.05-2.31-3.66.37-.3-2.17,3-2.93,1-3.94,3.31-2.93,2-3.65-1.78-5.43,1.48-2-2.95-1.44,6.5-1.25L324,90.41l4.42-2L332,78.12l3.5-3.78,5.06-8.51-4.66.07,1.94-3.29,5.19-3,5.23-6.81.09-4.38-3.92-4.62-4.61-2.24-5.73-1.4L329.49,39l-4.65-1.15-6.2,3-1.14-1.94-6.55.75-3.85,2-2.83,2.79-1.63,9-2.34-4.6L297.63,48l-3.15,6.09-4.21,2.57-2.5.5-3.19,2.94.47,5.09ZM344.48,272.1l-.75-1.51-.81,1,.54,1,2.72,1.31.8-.2,1-1.27-2,.08Zm-43.61-59.57.47,1.25,1.51.1,2.51-2.55.05-.91-3,0Zm47.54,50.83-2.2-1.37-2.82-.84-.74.29,2,1.56,2.78,1,1-.06Zm19,3.67-.27-1.72-1.5.56.66-2.38-2.14-1-1,.8-1.9-.9.75-1.16-1.44-.71-1.4,1.12,1.42-2.92,1.15-2.14.41-.93-1-.16-1.86,1.19L358,258.6l-2.22,5.3-1.8,2,.94.87-1.34,1.12.33.95,4.16.1,2.3-.2,2.06.78L360.92,271l1.28.11,2.49-2.74.6.41-.47,2.58,1.41.58,1-.11.9-2.76Zm-16.21,3.64-2.15,3.49-3.54.44-2.79-1.53-.7-2.35-.68-3.42,2-2.16-1.9-1.6-3.21.33-4.5,2.7-3.44,4.17-1.82.51,2.47-2.91,3.09-4.26,2.73-1.45,1.8-2.38,2.22-.23,3.22,0,4.59.71,3.63-.55,2.7-2.77,3.53-1.21,1.54-1.21,1.56-1.31-.15-4-.86-1.35-1.67-.49-.85-3.1-1.38-1.18-3.42-1-1.93-2.15-2.85-2.17.86-2.45L347,231.08l-2.79-5.27L342.53,222l-1.42,2-2.05,4.63L336,230.9l-1.55-2.42-2-.65-.71-5.35.06-3.67-3.83-.34-.65-1.73-2.64-2.63-2-1.56-1.78,1.2-2.2-.44L315,212.05l-1.49,1.07.72,7,.93,3.92-2.53,4.4,2.61,3.08,1.45,3.39.17,2.62-1.18,2.68-2.43,2.64-3.44,1.75,1.52,1.93,1.11,5.67-1.16,3.58-1.65,1.11-3.19-3.27-1.56-4-.66-3.64.35-3.2-2.33-.36-3.55-.22-2.27-1.59-2.68-1-1.54-1.82-2.14-1.48-4-1.71-3,.78-1-3-1-3.82-3.15-.69.12-4.9.83-3.43,2.33-5.05,2.62-3.75,2.49-.59.15-3.1,1.69-2,3.07-.32,2.49-3.36.62-2.22,2.07-4.38.64-2.68,2.22,1.62,3-.83,4.2-3.79.28-2.71-1.51-3,1.59-3.1-.13-3-2.87-3-3.17-.91-3.05-.47-.11,6.66-1.56,5-2.24,4.06-2.08-3.79.65-4.29-2.57-3.84-2.87,4.66v-6.12l-4-1.25,1.9-3.06-2.91-7.34-2.18-3-2.83-1.1-2.54,4.92-.17,7.14,2.51,2.52,2.29,3.76-1,5.89-1.73-.15-1.36,4.5v-5.36l-3.32-2-1.9,1,.24,3.57-3.13-.14-3.33.9-3.78-2.56-2.4.45-2.15-3.14-1.73-1.41-1.72.59-2.61.27-1.38,2,2.19,2.44-2.34,2.84-2.28-3.38-1.83,1-5.8.66-3.87-1.21,3-2.87-2.89-3-2.11.38-3-1-5-2.21-3.28-2.58-2.6-.36-.81,1.81-2.63,1-.3-4.7-2.85,4.2-3.63-5.6-1.48-.68-.48,3-1.6,1.46-1.48-2.6-3.51,1.57-3.21,2.72-3.19-.75-2.61,1.91-1.88,2.51-2.23-.55-3.38-2.91-4-1.48V222.1l2.11.13,2.09,1.19,1.5,1.87,1.9,2.76,2.09-2.34,2.15-1.37,1.14,2.18,1.45,1.71,2,1.85,1.33,2.9,2.2,4.5,3.65,2.45.06,2.39-1.19,1.79,0,1.9,2.6,2.64.37,2.88,2.75,1.5-.31,2.13,1.2,3,3.88,1.39,1.53,1.45,4.16,3.24H277V263l.72,0,.39,1.8.66.55,1.5.2,2.19.51,2.08,1,1.74-.42,2.64.83.87-1.27,1.22-.5.47-.79.48-.42,2,.66,1.48.07.51.44.72,1.82,2.41.48-.38.9.85.93-.37,1.19.91.39-.45,1.05.57.1.41-.46.42.69,1.6.38,1.63,0,1.74.32,1.92.6.7,1,1.39,2.33-.69,1-1.74-.41-1.09-1.87.27,1.9-1,1.67.11,1.4-.17.82-1.39,1-1,1.6-.47,1,1.18.19,1.59-.92.94-.81.63-.13,1.18.29.58-.45,1.05-.37,1.86-.36h0l-.19-.88-.1,0-.66.15-.85-.27.64-1,.65-.35,1.51-.43,1.82-.41.95.56.59-.65.68-.41.46.22,0,0,2.19-2.08,1-.56,3.26,0h4l.21-.75.69-.15.91-.47.77-1.4.66-2.41,1.63-2.37.71.83,1.44-.54,1,.91v4.23l1.4,1.72,2.39-.37,3.43-.1-3.72,2.5.08,2.51,1.63.22L343.3,279l2.13-1.21,4.75-1.79,2.66-2-1.39-1.12Zm-41.06-54.4.85-2.39-.55-.94-.88-.1-.82,1.38-.1.31.56,1.36ZM201,244.14h0l1.2-1.79Zm-2.6,2.52-2.06.29-1-.47-.13,1.16.4,1.58,1.09,1.12.79,1.63,1.3,1.61h.85l-1.86-2.84Z"
              id="CA"></path>
            <path
              fill="#d6d6d6"
              d="M547.21,377.13l-.13,2.49.85.28-.69.76-.82.57-.82,1.12-.45,1-.13,1.72-.49.81,0,1.6-.62.6-.07,1.27-.3.16-.2,1.17.54,1,.14,2.57.38,2-.21,1.12.43,1.24,1.24,1.2,1.16,2.72-.84-.23-2.89.37-.57.25-.61,1.38.48,1-.38,2.56-.27,2.18.58.39,1.5.84.59-.39.18,2.36-1.64,0-.88-1.21-.79-.93-1.65-.31-.48-1.14-1.31.69-1.72-.3-.72-1-1.36-.2-1,.05-.12-.67-.75,0-1-.13-1.33.32-.93-.05-.54.19.12-2.57L528,405l-.16-1.32.31-1.3-.43-.84,0-1.34h-2.61l.19-.77h-1.09l-.11.37-1.34.09-.54,1.24-.32.55-1.19-.31-.7.31-1.42.17-.82-1.13-.49-.7-.62-1.28-.53-1.6-6.33,0-.75.25-.62,0-.89.29-.3-.66.54-.23.07-.94.35-.55.78-.44.57.21.74-.82,1.16,0,.14.6.8.38,1.26-1.34,1.25-1,.54-.68-.07-1.76.94-2.08,1-1.09,1.41-1,.25-.68.05-.78.35-.74-.11-1.21.26-1.89.43-1.33.64-1.14.12-1.28.19-1.5.84-1.08,1.15-.69,1.77.73,1.36.78,1.57.22,1.6.41.64-1.28.3-.17,1,.21,2.4-1.06.84.45.69-.06.32-.52.8-.19,1.62.23,1.37,0,.71-.22,1.3,1.77,1,.25.57-.36,1,.15,1.19-.46.52.91Z"
              id="CD"></path>
            <path
              fill="#d6d6d6"
              d="M513.83,368.75l1.78-.17L516,368l.36.05.53.48,2.7-.82.91-.84,1.13-.76-.22-.76.61-.2,2.07.14,2-1,1.55-2.36,1.09-.88,1.36-.37.24.93,1.24,1.36v.88l-.34.9.13.66.75.62,1.63.95,1.17.87,0,.7,1.43,1.12.9.92.54,1.29,1.61.85.34.68-.71.22-1.37,0-1.62-.23-.8.19-.32.52-.69.06-.84-.45-2.4,1.06-1-.21-.3.17-.64,1.28-1.6-.41-1.57-.22-1.36-.78-1.77-.73-1.15.69-.84,1.08-.19,1.5-1.38-.13-1.45-.36-1.28,1.14-1.12,2-.23-.61-.09-1-1-.69-.8-1.1-.18-.76-1-1.12.17-.63-.22-.91.17-1.66.51-.39Z"
              id="CF"></path>
            <path
              fill="#d6d6d6"
              d="M508.93,394.81l-.8-.74-.65.36-.86.92-1.76-2.25,1.63-1.18-.81-1.42.74-.53,1.44-.26.17-.95,1.15,1,1.9.09.65-1,.27-1.41-.23-1.67-1-1.25.92-2.48-.53-.42-1.6.17-.6-1.09.16-.94,2.7.09,1.74.56,1.7.5.16-1.15,1.12-2,1.28-1.14,1.45.36,1.38.13-.12,1.28-.64,1.14-.43,1.33-.26,1.89.11,1.21-.35.74-.05.78-.25.68-1.41,1-1,1.09-.94,2.08.07,1.76-.54.68-1.25,1-1.26,1.34-.8-.38-.14-.6-1.16,0-.74.82Z"
              id="CG"></path>
            <path
              fill="#d6d6d6"
              d="M501.64,269l.08.57-.33.77,1,.57,1.1.08-.17,1.28-.94.53-1.59-.39-.47,1.24-1,.1-.37-.49-1.2,1-1,.15-.92-.66-.74-1.35-1,.49,0-1.41,1.57-1.77-.07-.8,1,.3.59-.55,1.82,0,.44-.69Z"
              id="CH"></path>
            <path
              fill="#d6d6d6"
              d="M474.93,374l-1,0-1.5-.43-1.37,0-2.54.37-1.49.62-2.12.78-.42-.05.16-1.76.21-.27-.06-.85-.91-.89-.68-.15-.63-.59.47-1-.22-1,.1-.62h.35l.12-.95-.17-.41.21-.3.79-.26-.53-1.73-.49-.88.17-.75.43-.16.28-.2.59.33,1.66,0,.39-.64.37.05.62-.25.34.93.5-.27.88-.33,1,.48.37.71,1,.46.75-.54,1-.09L475,364l.57,3.07-.9,1.8-.56,2.43.92,1.84Z"
              id="CI"></path>
            <path
              fill="#d6d6d6"
              d="M333.82,517.23v8.09h2.29l1.29.1-.71,1.52-1.83,1.17L333.8,528l-1.27-.3L331,526.55l-2.25-.55-2.7-2.07-2.19-2-2.95-4,1.77.74,3,2.39,2.85,1.3,1.11-1.66.69-2.45,2-1.46Zm.88-85.7.85,3.18,1.54-.31.26.58-.73,2.42-2.34,1.15.07,3.93-.45.77.64.94L333,445.68,331.62,448l-.76,2.21.2,2.38-1.32,2.56,1,4.35.55.47v2.36l-1.23,2.54.05,2.19-1.62,1.73v2.47l.65,2.64-1.28,1-.58,2.46-.5,2.87.36,3.47-.87.59.5,3.37,1,1.12L327,490l1,.6.23,1.13-.93.58.23,1.78-.78,4.09-1.14,2.7.25,1.61-.68,2.05L323.56,506l.19,3.52.76,1.22,1.43-.21,0,2.55.89,2,5.18.47,2,.54-1.9,0-1,.86-1.93,1.28-.35,3.35-.91.08-2.41-1.18L323,517.94h0l-2.67-2-.67-2.2.6-2-1.08-2.25-.27-5.62.91-3.08,2.26-2.44-3.26-.91,2.05-2.74.72-5,2.39,1.05,1.12-6.09-1.44-.77-.68,3.63-1.35-.41.67-4.15.74-5.23,1-1.9-.61-2.67-.18-3.05.9-.08,1.32-4.29,1.48-4.15.91-3.81-.49-3.75.64-2-.26-3,1.25-3,.39-4.62.69-4.87.67-5.16-.16-3.73-.44-3.18,1.1-.57.58-1.15,1,1.52.29,1.63,1.12.95-.67,2.2Z"
              id="CL"></path>
            <path
              fill="#d6d6d6"
              d="M509.11,379.77l-.27-.11-1.27.28-1.31-.3-1,.15-3.49-.05.31-1.69-.84-1.4-1-.37-.44-1-.55-.3,0-.59.56-1.52,1-2.06.62,0,1.28-1.25.82,0,1.2.88,1.48-.73.2-.89.48-.87.33-1.09,1.14-.88.44-1.51.45-.48.31-1.13.56-1.38,1.81-1.69.11-.72.24-.39-.85-.87.07-.69.61-.13.84,1.4.15,1.44-.08,1.45,1.17,2-1.2,0-.6.16-1-.22-.47,1,1.27,1.26.93.37.3.89.68,1.48-.34.59-1.08,2.17-.51.39-.17,1.66.22.91-.17.63,1,1.12.18.76.8,1.1,1,.69.09,1,.23.61-.16,1.15-1.7-.5-1.74-.56Z"
              id="CM"></path>
            <path
              fill="#d6d6d6"
              d="M319.36,384.93l-.91-.5-1.06-.71-.61.34-1.82-.3-.52-.92-.4,0-2.15-1.22-.29-.66.8-.16-.09-1.07.5-.77,1.06-.14.91-1.34.82-1.12-.8-.51.41-1.24-.48-2,.46-.56-.34-1.81-.87-1.15.27-1,.7.15.4-.64-.49-1.26.26-.32,1.1.07,1.61-1.51.88-.23,0-.71.39-1.83,1.24-1,1.34,0,.17-.45,1.68.17,1.7-1.09.83-.49,1-1.05.77.13.56.58-.42.73-1.37.37-.55,1.08-.83.62-.62.82-.27,1.53L323.8,365l1.1.14.28,1,.47.47.17.86-.25.8.08.45.52.18.52.75,2.75-.21,1.25.28,1.51,1.84.87-.23,1.54.12,1.23-.25.75.38-.39,1.14-.47.72-.17,1.54.43,1.42.61.63.07.48-1.09,1.07.78.46.58.75.65,2.12-.41.27-.41-1.26-.6-.68-.71.74-4.18-.05,0,1.33,1.25.23-.07.81-.43-.22-1.2.36V385l.95.78.33,1.22-.05.92-1,5.86L330,392.64l-.64-.05,1.39-2.17-1.65-1-1.28.18-.78-.37-1.18.57-1.6-.27L323,387.3l-1-.56-.68-1-1.42-1Z"
              id="CO"></path>
            <path
              fill="#d6d6d6"
              d="M303.07,367l-1.16-.48-.43-.45.24-.38-.08-.47-.59-.52-.84-.42-.75-.28-.13-.63-.57-.39.14.63-.43.51-.49-.59-.69-.22-.29-.43v-.66l.29-.69-.61-.31.49-.41.32-.28,1.42.57.49-.28.68.18.36.45.63.14.51-.46.55,1.18.83.87,1,.93-.84.19,0,.86.44.33-.32.26.09.39-.18.43Z"
              id="CR"></path>
            <path
              fill="#d6d6d6"
              d="M304.57,333.77l1.86.17,1.68,0,2,.79.86.85,2-.26.76.53,1.82,1.43,1.33,1,.71,0,1.28.46-.16.65,1.58.09,1.63.93-.26.53-1.43.29-1.44.11-1.48-.18-3.07.22,1.44-1.27-.87-.59-1.39-.15-.74-.66-.51-1.3-1.21.09-2-.62-.65-.48-2.79-.36-.75-.45.8-.57-2.1-.12-1.54,1.2-.89,0-.31.56-1.05.25-.92-.22,1.13-.71.46-.83,1-.52,1.09-.45,1.63-.22Z"
              id="CU"></path>
            <path
              fill="#d6d6d6"
              d="M573.48,357.32l.5.67-.06.91-1.23.52.93.59-.8,1.17-.47-.39-.52.16-1.2,0,0-.66-.16-.61.72-1,.76-1,.92.19Z"
              id="DJ"></path>
            <path
              fill="#d6d6d6"
              d="M327.21,341.73l.27-.39,1.68,0,1.27.58.56-.06.39.8,1.17,0-.06.67.95.08,1.06.83-.8.92-1-.49-1,.09-.71-.11-.39.42-.82.13-.32-.55-.72.33-.85,1.53-.55-.35-.12-.64,0-.61-.55-.68.52-.38.16-.86Z"
              id="DO"></path>
            <path
              fill="#d6d6d6"
              d="M506.8,333.11l-7.35,4.4L493.23,342l-3,1-2.38.22,0-1.44-1-.37-1.34-.65L485,339.7l-7.24-5-7.23-5.09-8.08-5.76.05-.47v-.16l0-2.87,3.46-1.8,2.14-.38,1.76-.66.82-1.24,2.51-1,.09-1.85,1.24-.22,1-.93,2.8-.42.39-1-.56-.55-.74-2.7-.13-1.57-.81-1.66,2.06-1.43,2.33-.46,1.35-1.1,2.07-.8,3.63-.48,3.55-.22,1.08.4,2-1.05,2.29,0,.88.62,1.46-.16-.44,1.37.35,2.51-.51,2.16-1.32,1.43.19,1.94,1.75,1.51,0,.62,1.32,1,.92,4.49.69,2.17.12,1.13-.38,2,.16,1.1-.28,1.32.19,1.51-.85,1,1.27,1.73.08,1,.76,1.31,1-.43,1.7,1.09Z"
              id="DZ"></path>
            <path
              fill="#d6d6d6"
              d="M308.79,391.86l1.14-1.59-.47-.93-.82,1-1.28-.94.44-.59-.36-1.94.75-.32.39-1.33.81-1.37-.15-.87,1.18-.46,1.47-.85,2.15,1.22.4,0,.52.92,1.82.3.61-.34,1.06.71.91.5.3,1.62-.66,1.38-2.34,2.24-2.58.84-1.32,1.86-.4,1.43-1.22.88-.9-1.07-.87-.23-.89.16-.05-.78.61-.5Z"
              id="EC"></path>
            <path
              fill="#d6d6d6"
              d="M556,318.73l-.6,1-.46,1.84-.58,1.25-.51.43-.71-.78-1-1.08-1.53-3.5-.21.22.88,2.58,1.32,2.43,1.62,3.74.79,1.28.69,1.33,1.93,2.61-.43.4.07,1.51,2.5,2.07.37.48H534.69V319.37l-.64-2,.55-1.53-.33-1.07.77-1.2,2.85,0,2.07.66,2.13.74,1,.39,1.65-.79.88-.71,1.9-.21L549,314l.59,1.24.5-.82,1.71.59,1.68.15,1.06-.63Z"
              id="EG"></path>
            <path
              fill="#d6d6d6"
              d="M453,323.15h2.77l6.69,0h0l-6.69,0H453l-.08.07,0,0-1.36,2.45-1.43.87L449.3,328l0,1.26-.58,1.37L448,331l-1.19,1.48-.73,1.65.13.78-.7,1.2-.83.63-.1,1.06-.09,1,.47-.76h8.4l-.41-3.33.53-1.18,2-.21-.07-6,7,.13v-3.62l.05-.47v-.16Z"
              id="EH"></path>
            <path
              fill="#d6d6d6"
              d="M571.91,357.66l-.73-.71-.88-1.28-.95-.7-.56-.77-1.87-.87-1.47,0-.52-.46-1.25.52-1.3-1L561.7,354l-2.49-.46-.23-.88.93-3.25.2-1.48.68-.69,1.58-.36,1.09-1.28,1.24,2.58.59,2.05,1.18,1.08,2.92,2.08,1.2,1.25,1.16,1.27.67.75,1.06.66-.65.53Z"
              id="ER"></path>
            <path
              fill="#d6d6d6"
              d="M562.38,352.35l1.3,1,1.25-.52.52.46,1.47,0,1.87.87.56.77.95.7.88,1.28.73.71-.76,1-.72,1,.16.61,0,.66,1.2,0,.52-.16.47.39-.47.77.8,1.19.79,1,.82.77,7,2.56,1.81,0-6.07,6.45-2.79.09-1.91,1.51-1.37,0-.59.68h-1.47l-.87-.72-2,.89-.63.89-1.43-.17-.48-.24-.5.05h-.67l-2.72-1.82h-1.49l-.74-.7v-1.2l-1.11-.36-1.27-2.34-1-.49-.39-.86-1.08-1.05-1.32-.15.73-1.23,1.14-.06.32-.65,0-1.94.63-2.26,1-.62.22-.88.92-1.66,1.29-1.09.88-2.15.34-1.89,2.49.46Z"
              id="ET"></path>
            <path
              fill="#d6d6d6"
              d="M349.77,514.48l2.57-2.06,1.83.86,1.28-1.37,1.72,1.54-.65,1.21-2.89,1-1-1.22-1.82,1.57Z"
              id="FK"></path>
            <path
              fill="#d6d6d6"
              d="M867.65,419.21l-.27,1.07-.18.12-1.36.55-1.37.47-.27-.83,1.07-.46L866,420l1.25-.69Zm-4.47,3.3-1-.28-.83.77.21,1,1.18.28,1.34-.31.35-1.17-.74-.64Z"
              id="FJ"></path>
            <path
              fill="#d6d6d6"
              d="M504.86,393.1l-2.21-2.16-1.42-1.76-1.3-2.21.07-.7.46-.69L501,384l.43-1.59.73-.12,3.11,0v-2.56l1-.15,1.31.3,1.27-.28.27.11-.16.94.6,1.09,1.6-.17.53.42-.92,2.48,1,1.25.23,1.67-.27,1.41-.65,1-1.9-.09-1.15-1-.17.95-1.44.26-.74.53.81,1.42Z"
              id="GA"></path>
            <path
              fill="#d6d6d6"
              d="M570.2,287l.32-1.23-.54-2-1.24-1.08-1.18-.34-.79-.89.26-.35,1.81.5,3.16.47,2.93,1.4.37.55,1.3-.46,2,.61.65,1.19,1.35.66-.56.39,1.06,1.55-.29.33-1.16-.17-1.6-.81-.53.46-3,.44-2.07-1.39Z"
              id="GE"></path>
            <path
              fill="#d6d6d6"
              d="M368.31,379.27l-.82.81-1,.15-.29-.59-.48-.09-.66.58-.94-.44.55-.91.18-1,.37-.92-.84-1.26-.17-1.46,1.12-1.85.73.24,1.57.5,2.28,1.81.35.87L369,377.69Z"
              id="GF"></path>
            <path
              fill="#d6d6d6"
              d="M483.33,372,480,373.2l-1.2.74-1.93.62-1.91-.61.09-.85-.92-1.84.56-2.43.9-1.8L475,364l-.29-1.63.05-1.23,3.73-.1.94.16.69-.35,1,.17-.16.68.89,1.11v1.57l.21,1.7.53.79-.47,1.93.17,1.08.57,1.36Z"
              id="GH"></path>
            <path
              fill="#d6d6d6"
              d="M380.73,48.36,387.94,38l7.53.82,2.73-6.85,7.58-1.85,17.14,2.41L436.34,46.7l-4,6.35-8.21.71-11.55,1.56,1.08,2.78,7.6-1.71,6.46,5.28L431.93,57l1.78,5.47-2.36,8.39,5.47-5.3,10.41-5.77,6.43,2.91,1.2,6.21-8.74,9.69-1.21,3-6.86,2.19,5,.61-2.51,8.8-1.73,7.34.07,11.68,2.58,6.38-3.35.39-3.53,3,4,4.82.5,7.36-2.29.78,2.77,7-4.76.57,2.49,3.17-.7,2.68-3,1.16-3,0,2.69,5,0,3.16L429,154.68l-1.1,1.91,2.89,1.75,2.82,4.19.81,5.32-3.83,1.24-1.65-2.5-2.65-3.81.73,4.49-2.49,3.38,5.65.27,3,.34-5.75,5.38-5.83,4.69-6.28,2-2.36,0-2.22,2.19-3,5.84-4.62,3.74-1.48.22-2.86,1.28-3.08,1.22L393.81,201l0,3.49-1.08,3.18-3.5,3.79.86,3.6-1,3.71L388,223l-3,.26-3.17-3.55-4.29,0-2.08-2.43L374,212.85,370.29,207l-1.09-3.18-.29-4.51-3-4.79.77-4-1.43-1.94L367.4,182l3.23-2.18.85-2.5.45-4.79-2.46,2.19-1.16.91-1.93.87-2.63-2-.15-4.25.84-3.43,2-.09,4.38,1.72-3.69-4.15L365.2,162l-2.13.95-1.79-1.67,2.39-6.51-1.3-2.7-1.71-5.15-2.57-8.35-2.74-3.19,0-3.54-5.76-5.12-4.56-.65-5.73.36-5.23.65-2.49-2.86-3.73-5.87,5.63-3,4.32-.52-9.18-2.57-4.83-4.17.3-4.08,8.11-5.26,7.86-5.48.83-4.31-5.79-4.41L337,79.43,344.43,70l3.12-1.52-.89-6.55,5.08-4,6.59-2.46,6.6-.14,2.34,4.82L373,51.48l5.12,6,3,1.22,4.47,4.91-5.11-8.24Z"
              id="GL"></path>
            <path
              fill="#d6d6d6"
              d="M444.93,356.33l.27-1,2.33-.07.49-.51.69,0,.84.54h.66l.71-.37.43.63-.92.5-.94,0-.91-.47-.8.51-.38,0-.52.31Z"
              id="GM"></path>
            <path
              fill="#d6d6d6"
              d="M463,368.18l-.6-.06-.44.87h-.61l-.41-.46.13-.86-.89-1.32-.56.24-.46.05-.59.12,0-.79-.34-.56.07-.63-.47-.91-.59-.77h-1.72l-.5.4-.59.05L454,364l-.24.6-1.15.95-.94-1.28-.84-.85-.55-.27-.53-.44-.24-1-.31-.47-.63-.36.95-1.06.65,0,.56-.36h.48l.33-.3-.18-.71.24-.23,0-.75,1,0,1.54.53.48-.05.16-.24L456,358l.32-.12.12.8h.34l.56-.29.35.08.6.55.92.18.59-.48.69-.29.52-.31.42.07.48.47.26.6.88.92-.44.55-.09.71.46-.22.27.26-.12.65.66.62-.43.16-.17.75.49.88.53,1.73-.79.26-.21.3.17.41-.12.95Z"
              id="GN"></path>
            <path
              fill="#d6d6d6"
              d="M501.42,382.45l-.4-.32.74-2.39,3.49.05v2.56l-3.11,0Z"
              id="GQ"></path>
            <path
              fill="#d6d6d6"
              d="M287.78,355.05l-1.1-.39-1.34,0-1-.44-1.16-.9.06-.65.24-.52-.3-.41,1-1.8H287l.07-.75-.36-.14-.23-.48-.8-.51-.8-.75h1V346h2l2,0v1.76l-.17,2.51h.63l.71.41.18-.34.63.28-1,.85-1,.62-.15.42.17.43-.45.57-.5.13.11.26-.4.24-.73.56Z"
              id="GT"></path>
            <path
              fill="#d6d6d6"
              d="M448.6,360.93l-1.15-.91-.9-.14-.49-.62v-.33l-.65-.46-.14-.46,1.14-.36.71.07.57-.25,4,.09,0,.75-.24.23.18.71-.33.3h-.48l-.56.36-.65,0Z"
              id="GW"></path>
            <path
              fill="#d6d6d6"
              d="M352.86,366.71l1.41.79,1.33,1.4,0,1.11.81.06,1.15,1,.85.75-.34,1.92-1.3.56.11.5-.4,1.11,1,1.54h.68l.28,1.2,1.31,1.86-.52.07-1.18-.17-.7.56-1,.38-.68.09-.23.41-1.06-.11-1.32-1-.16-1-.55-1.08.35-1.82.59-.75-.49-1-.74-.32.29-.94-.51-.49-1.12.09-1.44-1.62.58-.59,0-1,1.33-.34.52-.4-.73-.8.19-.78Z"
              id="GY"></path>
            <path
              fill="#d6d6d6"
              d="M293.74,356.69l-.37-.68-.66-.19.16-.88-.29-.24-.45-.15-.94.26-.07-.3-.65-.35-.46-.44-.64-.18.45-.57-.17-.43.15-.42,1-.62,1-.85.22.1.48-.39.61,0,.2.17.33-.11,1,.2,1-.06.69-.24.25-.25.68.12.52.15.56-.05.42-.19,1,.3.35.05.65.41.62.5.78.33.56.62-.73,0-.3.3-.74.29h-.54l-.48.28-.43-.1-.36-.33-.23.06-.27.53-.21,0,0,.46-.75.61-.39.26-.22.27-.63-.44-.46.58-.45,0-.51.06.05,1.08h-.32l-.26.51Z"
              id="HN"></path>
            <path
              fill="#d6d6d6"
              d="M324.05,341.27l1.3.1,1.86.36.19,1.24-.16.86-.52.38.55.68,0,.61-1.42-.38-1,.15-1.31-.16-1,.42-1.16-.71.19-.72,2,.31,1.62.19.77-.51-1-1,0-.87-1.36-.35Z"
              id="HT"></path>
            <path
              fill="#d6d6d6"
              d="M740,406.55l-.9,0-2.85-1.51,2-.43,1.12.66.75.66Zm8-.22-1.84.48-.26-.26.2-.74.92-1.31,2.12-.86.21.43,0,.66Zm-14-4.41.78.57,1.32-.18.54.92-2.48.44-1.49.29-1.15,0,.73-1.23,1.18,0Zm10.74,0-.32,1.19-3.22.62-2.85-.27v-.79l1.71-.45,1.34.64,1.44-.16Zm-30.64-2.82,4.11.21.48-.89,4,1,.79,1.39,3.22.39,2.63,1.28-2.45.81-2.36-.86-1.94.06-2.23-.16-2-.39-2.49-.82-1.57-.21-.9.27-3.91-.89-.37-.93-2-.16,1.47-2.05,2.6.13,1.73.84.89.16Zm56-1.21-1.1,1.46-.2-1.62.38-.77.45-.73.49.63ZM754,392l-.81.71-1.48-.39-.42-.92,2.17-.1Zm6.91-.77.78,1.63-1.81-.88-1.79-.18-1.21.14-1.48-.08.51-1.17,2.65-.09Zm7.88-4.15.59,3.45,2.22,1.28,1.79-2.27,2.47-1.28h1.9l1.84.74,1.59.76,2.3.41,0,7,0,7-1.91-1.77-2.18-.43-.53.61-2.72.07.91-1.75,1.36-.6-.56-2.33-1-1.8-4.16-1.82-1.77-.17-3.22-2-.63,1-.83.2-.49-.78v-.93l-1.64-1.05,2.31-.76,1.53,0-.19-.56h-3.13l-.85-1.27-1.91-.39-.91-1.06,2.89-.51,1.1-.69,3.44.87Zm-19.1-5.48L748,383.69l-1.62.42-2.06-.42-3.58.11-1.87.31-.31,1.61,1.92,1.9,1.16-1,4-.72-.17,1-.94-.31-.93,1.25-1.89.82,2,2.73-.39.74,1.92,2.46V396l-1.15.63-.84-.75,1-1.75-2.1.82-.54-.59.28-.82-1.55-1.26.16-2.08-1.43.65.18,2.49.09,3.06-1.36.31-.92-.63.61-2-.33-2.06-.9,0-.67-1.46.89-1.4.31-1.69,1.08-3.21.45-.88,1.82-1.58,1.67.62,2.71.3,2.47-.09,2.11-1.55Zm7.4.61-.12,1.86-1.11-.2-.33,1.29.89,1.12-.6.26-.87-1.35-.63-2.72.43-1.71.71-.77.15,1.16,1.27.18Zm-23.2-1.48,2.4,2-2.54.25-.72,1.46.09,1.93-2.06,1.46-.05,2.12-.82,3.26-.32-.75-2.44,1-.85-1.31-1.53-.12-1.07-.68-2.55.76-.78-1-1.4.12-1.77-.25-.33-2.86-1.07-.59-1-1.82-.3-1.87.25-2,1.28-1.42.36,1.43,1.47,1.2,1.38-.44,1.37.15,1.25-1.07,1-.19,2,.6,1.75-.45,1.1-3,.83-.74.74-2.43h2.47l1.86.36-1.22,1.93,1.57,2ZM708.06,397.1l-2.37,0-1.81-1.79-2.75-1.74-.92-1.3-1.62-1.73-1.06-1.6-1.63-3L694,384.22l-.62-1.83-.79-1.66-1.94-1.34-1.12-1.83-1.62-1.19L685.69,374l-.19-1.08,1.38.08,3.32.41,1.9,2.09,1.66,1.45,1.19.89,2,2.29,2.18,0,1.81,1.46,1.24,1.79,1.63,1-.86,1.74,1.23.74.78.05.36,1.49.75,1.19,1.58.19,1,1.35-.54,2.65Z"
              id="ID"></path>
            <path
              fill="#d6d6d6"
              d="M648,303.55l2.3,3.05-.21,2.1L651,310l-.07,1.3-1.54-.34.6,2.78,2.11,1.57,3,1.74-1.36,1.12-.83,2.29,2.08.91,2,1.19,2.8,1.35,2.94.32,1.24,1.21,1.65.23,2.58.55,1.79,0,.24-.95-.28-1.52.17-1,1.31-.51.18,1.9,0,.48,2,.91,1.35-.38,1.81.17,1.75-.07.15-1.48-.87-.77,1.73-.3,2-1.8,2.47-1.55,1.8.59,1.53-1,1,1.51-.73,1,2.31.36.17.92-.75.44.17,1.48-1.53-.44-2.78,1.65.06,1.37-1.17,2-.12,1.14-.95,1.93-1.68-.53-.08,2.41-.49.78.23,1-1.06.55-1.12-3.67h-.6l-.35,1.48L676.62,333l.65-1.32,1-.14,1-2-1.23-.4-2,0-2-.32-.19-1.64-1-.12-1.69-1-.76,1.61,1.54,1.25-1.34.88-.47.86,1.32.63-.36,1.4.74,1.75.34,1.9-.32.84-1.45,0-2.65.47.12,1.72-1.14,1.35-3.09,1.53-2.4,2.65-1.61,1.41-2.14,1.46v1l-1.07.55-1.94.79-1,.12-.64,1.68.44,2.87.12,1.82-.91,2.07v3.69l-1.11.11-1,1.65.65.71-2,.61-.72,1.47-.86.62-2-2-1-3-.82-2.19-.75-1-1.14-2.09-.53-2.74-.37-1.38-2-3-.88-4.31-.65-2.89v-2.74l-.41-2.14-3.12,1.37-1.52-.27-2.8-2.78,1-.83-.63-.91-2.52-2,1.43-1.56h4.72l-.42-2-1.21-1.2-.24-1.83-1.41-1.07,2.37-2.52,2.49.18,2.24-2.54,1.35-2.49,2.08-2.48,0-1.79,1.83-1.46-1.74-1.24-.74-1.73-.76-2.25,1.05-1.12,3.26.64,2.39-.39Z"
              id="IN"></path>
            <path
              fill="#d6d6d6"
              d="M449.93,192.6l-.49,3.43,2.42,3.52-2.79,3.83-6.19,3.35-1.85.88-2.82-.71-6-1.54,2.12-2.17-4.67-2.45,3.79-1-.09-1.51-4.5-1.2,1.45-3.42,3.25-.79,3.34,3.58,3.26-2.86,2.71,1.49,3.49-2.83Z"
              id="IS"></path>
            <path
              fill="#d6d6d6"
              d="M314.65,344.5l1.45.19,1.14.55.35.61-1.51,0-.65.37-1.2-.36-1.22-.82.25-.51.9-.15Z"
              id="JM"></path>
            <path
              fill="#d6d6d6"
              d="M557.31,311.53l.38-.81,2.38,1,4.2-2.7.87,3.09-.41.37-4.3,1.26,2.15,2.5-.72.41-.35.84-1.63.33-.52.89-.93.75-2.39-.39-.07-.35,1.07-4,0-1,.32-.73Z"
              id="JO"></path>
            <path
              fill="#d6d6d6"
              d="M769.89,307l.28.88L769,309.48l-.88-.82-1.11.59-.56,1.5L765,310v-1.21l1.19-1.53,1.22.3.88-1.09Zm13.6-7.86-.81,2.13.37,1.32-1.12,1.85-2.74,1.22-3.77.17-3.06,2.93-1.44-1-.08-1.93-3.73.57-2.55,1.22-2.5,0,2.17,1.89-1.43,4.29L761.41,315l-1-1,.53-2.27-1.35-.73-.88-1.75,2-.79,1.13-1.61,2.15-1.34,1.58-1.78,4.27-.78,2.29.53,2.25-4.72L775.8,300l3.14-2.69,1.22-1.05,1.34-3.35-.36-3.14L782,288l2.28-.52,1.17,3.91-.06,2.25-2,2.75Zm6.29-19.84,1.51.63,1.52-1.26.47,3.33-3.18.8-1.89,2.88-3.37-2-1.17,3.15-2.39,0-.3-2.86,1.07-2.25,2.29-.16.63-4.11.64-2.37,2.51,3.15Z"
              id="JP"></path>
            <path
              fill="#d6d6d6"
              d="M569,386.44l1.27,1.75-1.5.86-.53.89-.81.15-.3,1.51-.69.85-.42,1.43-.87.7-3.07-2.13-.15-1.24-7.78-4.34-.36-.24,0-2.26.61-.86,1.06-1.41.78-1.55-.94-2.45L555,377l-1-1.49,1.31-1.27,1.46-1.41,1.11.36v1.2l.74.7h1.49l2.72,1.82h.67l.5-.05.48.24,1.43.17.63-.89,2-.89.87.72h1.47L569,378.67Z"
              id="KE"></path>
            <path
              fill="#d6d6d6"
              d="M703.08,361.82l-.87-1.13-1.08-2.25-.51-2.64L702,354l2.77-.43,2,.32,1.76.86,1-1.52,1.9.81.5,1.47-.27,2.62-3.6,1.67.94,1.33-2.25.15-1.86.87Z"
              id="KH"></path>
            <path
              fill="#d6d6d6"
              d="M761.31,284.56l.3.51-.81-.18-.93,1-.65,1,.09,2.05-1.11.62-.38.49-.81.83-1.44.46-.92.75-.07,1.2-.25.31.85.44,1.22,1.21-.31.66-.91.17-1.52.13-.83,1.23-1-.09-.13.24-1-.51-.26.5-.62.23-.08-.51-.56-.24-.57-.44.59-1.2.5-.32-.19-.5.54-1.48-.14-.46-1.25-.3-1-.74,1.75-1.8,2.36-1.52,1.48-2,1,.89,1.86.11-.34-1.51,3.31-1.25.86-1.63Z"
              id="KP"></path>
            <path
              fill="#d6d6d6"
              d="M756.4,295.2l1.85,3.2.53,1.73,0,3.05-.81,1.44-1.94.5-1.71,1.08-1.94.22-.24-1.41.4-2-.95-2.75,1.59-.45-1.47-2.3.13-.24,1,.09.83-1.23,1.52-.13.91-.17Z"
              id="KR"></path>
            <path
              fill="#d6d6d6"
              d="M525.6,285.55l-.1.59-.28,0-.13-1.05-.52-.29-.46-.78.4-.65.51-.22.3-1,.39-.17.3.41.41.19.27.47.35.13.43.54.3,0-.24.71-.26.35.07.21-.48.11Z"
              id="XK"></path>
            <path
              fill="#d6d6d6"
              d="M584,317.56l.44,1.08-.19.56.69,1.85-1.52.06-.53-1.16-1.92-.24,1.58-2.35Z"
              id="KW"></path>
            <path
              fill="#d6d6d6"
              d="M633.29,284.93l-1.23.54-2.83,2-.94,2-.8,0-.58-1.34-2.73-.09-.44-2.34-1,0,.16-2.9-2.56-2.15-3.68.23-2.52.43L612,278.64l-1.75-1.13L607,275.34l-.4-.27-5.52,1.8.08,10.81-1.1.14-1.5-2.25-1.45-.81-2.44.61-.94.95-.13-.7.53-1.2-.4-1-2.49-1-1-2.65-1.18-.75-.08-1,2.09.28.09-2.2,1.82-.49,1.87.45.39-3-.38-1.92-2.15.15-1.82-.76-2.49,1.37-2,.66-1.09-.51.22-1.61-1.37-2.11-1.59.09-1.82-2.17,1.24-2.46-.63-.67,1.71-3.65,2.21,1.94.27-2.44,4.42-3.71,3.35-.1,4.74,2.38,2.53,1.37,2.28-1.43,3.4-.07,2.74,1.76.63-1,3,.15.54-1.62-3.48-2.36,2.06-1.71-.4-.95,2.06-.93-1.55-2.45,1-1.24,8-1.27,1-.91,5.37-1.37,1.92-1.56,3.86.81.67,3.84,2.25-.89,2.75,1.25-.18,2,2.06-.21L646,245.3l-.78,1.15,2.74,2.8,4.79,8.86,1.15-1.79,3,2,3.09-.87,1.17.61,1,2,1.5.65.92,1.41,2.76-.44,1.14,2-1.64,2.17-1.78.3-.1,3.2-1.2,1.42-4.25-1L658,275.22l-1.1.68-4.24,1.2,1.92,5.17-1.46.76.16,1.66-1.32-.42-1.07-1-3.18-.31-3.56-.07-.78.32-3.06-1.23-1.22.61-.33,1.71-3.53-1-1.41.41Z"
              id="KZ"></path>
            <path
              fill="#d6d6d6"
              d="M706.78,353.87l.69-1,.1-1.86-1.73-1.94-.14-2.19-1.63-1.83-1.62-.15-.43.78-1.27.06-.64-.39-2.25,1.33-.06-2,.53-2.38-1.45-.1-.12-1.36-.93-.71.46-.84,1.83-1.48.19.53,1.14.07-.32-2.63,1.1-.34,1.26,1.82,1,2.08,2.64,0,.84,2-1.37.59-.62.82,2.57,1.35,1.78,2.65,1.36,2,1.62,1.55.54,1.56-.39,2.2-1.9-.81-1,1.52Z"
              id="LA"></path>
            <path
              fill="#d6d6d6"
              d="M656.51,368.53l-.32,2.23-.9.61-1.86.49-1-1.7-.37-3.09,1-3.5,1.47,1.2,1,1.52Z"
              id="LK"></path>
            <path
              fill="#d6d6d6"
              d="M464.51,375.3H464l-2.21-1-1.95-1.63L458,371.5l-1.44-1.39.51-.69.11-.62,1-1.17,1-1,.46-.05.56-.24.89,1.32-.13.86.41.46h.61l.44-.87.6.06-.1.62.22,1-.47,1,.63.59.68.15.91.89.06.85-.21.27Z"
              id="LR"></path>
            <path
              fill="#d6d6d6"
              d="M543.22,449.15l.75.74-.66,1.19-.37.81-1.19.38-.4.79-.76.25L539,451.4l1.14-1.55,1.16-1,1-.48Z"
              id="LS"></path>
            <path
              fill="#d6d6d6"
              d="M512.91,334.53l-1.51.85-1.21-1.27-3.39-1-.94-1.46-1.7-1.09-1,.43-.76-1.31-.08-1-1.27-1.73.85-1-.19-1.51.28-1.32-.16-1.1.38-2-.12-1.13-.69-2.17,1.05-.58.18-1.05-.23-1,1.48-1,.66-.8,1-.73.13-1.95,2.51.88.91-.22,1.79.42,2.84,1.13,1,2.23,1.93.49,3,1,2.29,1.23,1-.64,1-1.14-.5-1.92.67-1.22,1.55-1.19,1.47-.34,2.9.52.74,1.13h.79l.69.43,2.13.29.52.83-.77,1.2.33,1.07-.55,1.53.64,2v21.71h-2.47l0,.95-8.55-4.36-8.56-4.41Z"
              id="LY"></path>
            <path
              fill="#d6d6d6"
              d="M462.47,323.21l0-2.87,3.46-1.8,2.14-.38,1.76-.66.82-1.24,2.51-1,.09-1.85,1.24-.22,1-.93,2.8-.42.39-1-.56-.55-.74-2.7-.13-1.57-.81-1.66-.93,0-2.22-.58-2,.19-1.3-1.12-1.57,0-.68,1.62-1.43,2.68-1.6,1.07-2.15,1.17-1.37,1.71-.29,1.33-.82,2.16.53,3.08-1.79,2-1.07.65L456,322l-2,.27-1,.86h2.77l6.69,0h0l-6.69,0H453Z"
              id="MA"></path>
            <path
              fill="#d6d6d6"
              d="M538.16,266.83l.51-.47,1.43-.33,1.58,1,.88.12,1,.86-.15,1.07.78.52.31,1.31.75.8-.15.46.4.32-.57.22-1.27-.08-.2-.44-.46.25.16.55-.59,1-.38,1.05-.53.34-.39-1.4.23-1.32-.07-1.37-1.24-1.87-.68-1.34-.67-.94Z"
              id="MD"></path>
            <path
              fill="#d6d6d6"
              d="M523.53,284.26l-.13-.55-.93,1.43.14.91-.45-.22-.59-.94-.94-.58.24-.49.31-1.6.7-.69.41-.27.56.5.32.42.7.31.82.61-.18.25-.4.65Z"
              id="ME"></path>
            <path
              fill="#d6d6d6"
              d="M587.34,411.4l.57.92.53,1.45.35,2.65.55,1-.21,1.05-.38.66-.73-1.3-.4.66.4,1.64-.19.95-.59.51-.13,1.9-.85,2.61-1,3.13-1.33,4.34-.82,3.22-1,2.72-1.75.56-1.87,1-1.23-.61-1.71-.84-.59-1.24-.14-2.07-.75-1.85-.2-1.66.38-1.66,1-.39V430l1-1.73.19-1.44-.5-1.07-.4-1.41-.17-2.07.75-1.25.28-1.41,1.07-.08,1.2-.46.79-.4.95,0,1.22-1.26,1.76-1.36L584,415l-.29-.94.91.26,1.18-1.52,0-1.31.71-1Z"
              id="MG"></path>
            <path
              fill="#d6d6d6"
              d="M525.22,286.12l.28,0,.1-.59,1.26-.45.48-.11.74-.17,1,0,1.08.92.16,1.89-.42.1-.35.49-1.16-.05-.82.62-1.4.24-.89-.68-.3-1.22Z"
              id="MK"></path>
            <path
              fill="#d6d6d6"
              d="M455,353.11l.72-.4.36-1.3.68-.05,1.5.61,1.21-.44.82.15.33-.49,8.61,0,.47-1.55-.37-.28-1-9.7-1-10,3.29,0,7.23,5.09,7.24,5,.51,1.06,1.34.65,1,.37,0,1.44,2.38-.22v5.16L489,349.64l-.18,1.37-1.91.35-2.92.19-.8.79-1.37.08h-1.37L480,352l-1.18.31-2,.92-.4.69-1.67,1-.29.57-.9.44-1-.29-.59.53-.31,1.5-1.71,1.81.06.73-.59.93.14,1.25-.88.33-.5.27-.34-.93-.62.25-.37-.05-.39.64-1.66,0-.59-.33-.28.2-.66-.62.12-.65-.27-.26-.46.22.09-.71.44-.55-.88-.92-.26-.6-.48-.47-.42-.07-.52.31-.69.29-.59.48-.92-.18-.6-.55-.35-.08-.56.29h-.34l-.12-.8.1-.68-.19-.85-.8-.61-.42-1.26Z"
              id="ML"></path>
            <path
              fill="#d6d6d6"
              d="M694.6,340.66l-1.25,1-1.52.11-1,2.44-.9.41,1,2,1.36,1.63.88,1.47-.78,1.93-.75.4.52,1.11,1.43,1.75.24,1.22,0,1,.85,2-1.18,2-1,2.22-.21-1.6.66-1.67-.72-1.29.17-2.38-.87-1.13-.69-2.63-.39-2.8L689.5,348l-1.42,1.12-2.44,1.58-1.2-.2-1.33-.52.74-2.76-.44-2.09-1.68-2.6.26-.82-1.26-.29-1.52-1.85-.14-1.84.75.35,0-1.65,1.06-.55-.23-1,.49-.78.08-2.41,1.68.53.95-1.93.12-1.14,1.17-2-.06-1.37,2.78-1.65,1.53.44-.17-1.48.75-.44-.17-.92,1.26-.18.72,1.42.93.57.07,1.84-.09,2-2,2-.26,2.78,2.27-.39.51,2.15,1.36.45-.63,1.91,1.59.86.94.43,1.57-.67.07.95-1.83,1.48-.46.84Z"
              id="MM"></path>
            <path
              fill="#d6d6d6"
              d="M669.3,263.33l2.27-.56,4.09-2.86,3.27-1.59,1.86,1,2.24,0,1.43,1.57,2.14.11,3.11.84,2.08-2.32-.87-2,2.22-3.57,2.4,1.44,2,.4,2.52.88.41,2.54,3.05,1.41,2-.62,2.71-.44,2.15.45,2.1,1.6,1.3,1.68,2,0,2.7.53,2-.81,2.82-.55,3.14-2.34,1.29.36,1.12,1.12,2.56-.28-1,2.49-1.52,3.23.55,1.31,1.22-.41,2.11.5,1.66-1.18,1.72,1,1.94,2.21-.24,1.11-1.69-.35-3.11.41-1.52.89-1.57,2-3.27,1.19-2.13,1.6-2.21-.61-1.21-.27-1.12,1.94.68,1.15.35,1-1.51,1-1.53,1.57-2.51,1-3.22.11-3.46,1-2.5,1.54-1-.89h-2.59l-3.17-1.75-2.12-.43-2.86.4-4.43-.65-2.36.07-1.26-1.74-1-2.73-1.32-.33-2.59-1.87-2.9-.42-2.54-.52-.78-1.33.83-3.61-1.48-2.54-3.06-1.2-1.8-1.7Z"
              id="MN"></path>
            <path
              fill="#d6d6d6"
              d="M455,353.11l-1.42-1.51-1.3-1.63-1.42-.59-1-.65-1.2,0-1,.48-1.07-.19-.73.71-.19-1.19.6-1.1.27-2.11-.24-2.22-.26-1.13.21-1.12-.55-1.09-1.13-1,.47-.76h8.4l-.41-3.33.53-1.18,2-.21-.07-6,7,.13v-3.62l8.08,5.76-3.29,0,1,10,1,9.7.37.28-.47,1.55-8.61,0-.33.49-.82-.15-1.21.44-1.5-.61-.68.05-.36,1.3Z"
              id="MR"></path>
            <path
              fill="#d6d6d6"
              d="M555.19,409.32,554.6,411l.59,2.84.75,0,.78.71.89,1.59.18,2.84-.92.47-.66,1.54-1.4-1.37-.15-1.56.45-1-.13-.88-.84-.55-.6.19-1.23-1.05-1.13-.57.65-2,.68-.76-.42-1.81.43-1.76.37-.58-.54-1.84-1-1,2.09.39.44.6.73,1Z"
              id="MW"></path>
            <path
              fill="#d6d6d6"
              d="M272.67,327.48l-.83,2.07-.38,1.69-.16,3.13-.21,1.12.38,1.26.66,1.12.43,1.77,1.43,1.69.49,1.29.84,1.11,2.28.61.89.93,1.88-.63,1.63-.22,1.61-.41,1.35-.39,1.37-.91.51-1.33.17-1.9.38-.67,1.45-.6,2.27-.53,1.9.08,1.3-.2.51.49-.07,1.1-1.16,1.35-.5,1.39.39.39-.32,1-.54,1.75-.54-.58-.45,0-.41,0-.76,1.36-.39-.27-.26.11V346l-2,0h-2v1.27h-1l.8.75.8.51.23.48.36.14-.07.75h-2.74l-1,1.8.3.41-.24.52-.06.65-2.42-2.38-1.11-.72-1.75-.58-1.2.16-1.72.83-1.08.22-1.52-.58-1.61-.43-2-1-1.61-.32-2.43-1L263,346.38l-.54-.6-1.2-.13-2.2-.71-.9-1-2.3-1.27-1.07-1.43-.51-1.11.71-.23-.22-.65.49-.59v-.79l-.72-1-.2-.91-.72-1.17-1.88-2.31-2.16-1.83-1-1.46-1.85-1-.39-.58.33-1.47-1.09-.56-1.27-1.16-.54-1.68-1.15-.2-1.24-1.27-1-1.18-.09-.77-1.16-1.85-.76-1.9,0-.95-1.55-1-.71.11-1.23-.69-.34,1,.35,1.2.21,1.86.74,1,1.59,1.7.35.57.33.17.28.84.38,0,.44,1.56.65.61.45.85,1.35,1.23.71,2.21.64,1,.6,1.1.11,1.24,1,.08.87,1.06.78,1,0,.42-.91.85H245l-.57-1.42-1.4-1.32-1.54-1.13-1.1-.6.07-1.72-.33-1.29-1-.73-1.48-1.06-.28.3-.54-.63-1.32-.57-1.26-1.4.15-.18.88.13.8-.9.08-1.09-1.65-1.74-1.26-.68-.79-1.54-.8-1.62-1-2-.88-2.26,2.45-.19,2.72-.28-.2.49,3.24,1.23,4.89,1.77,4.27,0h1.7v-1h3.72l.78.9,1.1.79,1.27,1.09.71,1.29.54,1.35,1.11.74,1.78.74,1.35-1.94,1.76,0,1.5,1,1.08,1.66.75,1.43,1.26,1.37.47,1.68.61,1.12,1.66.74,1.53.52Z"
              id="MX"></path>
            <path
              fill="#d6d6d6"
              d="M697.89,371.36l.16,1.1,1.42-.25.7-.88.49.2,1.27,1.29.91,1.43.12,1.44-.23,1,.21.74.16,1.26.75.59.85,1.88,0,.72-1.53.14-2-1.57-2.54-1.69-.26-1.09-1.24-1.43-.29-1.77-.78-1.16.24-1.56-.47-.91.37-.38Zm37.63,3.69-1.57.73-1.86-.36h-2.47l-.74,2.43-.83.74-1.1,3-1.75.45-2-.6-1,.19-1.25,1.07-1.37-.15-1.38.44-1.47-1.2-.36-1.43,1.57.74,1.66-.4.42-1.81.92-.4,2.57-.46,1.54-1.69,1.06-1.36,1,1.11.45-.72,1,.07.13-1.37.09-1.05,1.66-1.49,1.08-1.68h.86l1.1,1.09.1.93,1.42.6,1.79.64-.16.84-1.43.11Z"
              id="MY"></path>
            <path
              fill="#d6d6d6"
              d="M555.19,409.32l1.62-.17,2.58.61.56-.28,1.49-.05.77-.65,1.28,0,2.35-.84,1.7-1.26.35,1-.09,2.16.27,1.91.08,3.43.38,1.07-.64,1.59-.83,1.53-1.37,1.38-2,.85-2.42,1.08-2.42,2.41-.83.41-1.5,1.6-.88.53-.18,1.62,1,1.72.42,1.35,0,.69.37-.12-.06,2.27-.34,1.08.5.4-.32,1-.89.83-1.77.8-2.58,1.27-.94.88.18,1,.55.16-.19,1.26-1.62,0-.18-1.05-.32-1.07-.19-.85.38-2.62-.55-1.66-1-3.26,2.26-2.61.56-1.65.33-.2.24-1.33-.34-.68.09-1.68.42-1.56v-2.82l-1.11-.72-1-.16-.46-.55-1-.47-1.79,0-.14-.82-.2-1.57,6.51-1.82,1.23,1.05.6-.19.84.55.13.88-.45,1,.15,1.56,1.4,1.37.66-1.54.92-.47-.18-2.84-.89-1.59-.78-.71-.75,0L554.6,411Z"
              id="MZ"></path>
            <path
              fill="#d6d6d6"
              d="M516.12,448.23l-1.59-1.83-.84-1.76-.48-2.32-.53-1.72L512,437l0-2.78-.28-1.25-.83-.95-1.11-1.89-1.13-2.73-.46-1.42-1.75-2.19-.13-1.73,1-.42,1.28-.38,1.4.07,1.27,1,.33-.16,8.7-.09,1.48,1.07,5.19.31,3.94-.91,1.76-.51,1.4.13.84.5,0,.19-1.21.5H533l-1.36.88-.82-.93-3.31.79-1.6.07-.06,8.09-2.11.08V448l-1.91,1.24-1.15.18-1.35-.46-1-.18-.36-1-.85-.66Z"
              id="NA"></path>
            <path
              fill="#d6d6d6"
              d="M836.7,430.59l1.76,1.42,1.11,1.05-.81.56-1.19-.62L836,432l-1.38-1.21-1.42-1.61-.3-.77.92,0,1.21.77.94.77Z"
              id="NC"></path>
            <path
              fill="#d6d6d6"
              d="M485.68,359l.05-1.49-2.48-.5-.06-1.05L482,354.5l-.29-1,.17-1.07,1.37-.08.8-.79,2.92-.19,1.91-.35.18-1.37,1.18-1.48V343l3-1,6.22-4.48,7.35-4.4,3.39,1,1.21,1.27,1.51-.85.53,3.57.8.6,0,.72.89.78-.47,1-.82,4.58-.11,2.9L511,350.75l-.92,2.91.89.81v1.42l1.38.05-.21,1-.61.13-.07.69-.4,0-1.45-2.4-.5-.09-1.68,1.23-1.66-.64-1.16-.13-.62.31-1.26-.06-1.26.93-1.09.05-2.6-1.13-1,.54-1.09,0-.8-.83-2.16-.82-2.3.26-.56.48-.3,1.26-.62.88-.15,1.94-1.63-1.25h-.78Z"
              id="NE"></path>
            <path
              fill="#d6d6d6"
              d="M499.29,374.43l-2.22.76-.82-.11-.83.48-1.71-.05-1.15-1.34-.7-1.54-1.53-1.41-1.61,0h-1.89l.12-3.46-.05-1.37.4-1.36.66-.66,1-1.34-.22-.58.42-.87-.48-1.29.08-.73.15-1.94.62-.88.3-1.26.56-.48,2.3-.26,2.16.82.8.83,1.09,0,1-.54,2.6,1.13,1.09-.05,1.26-.93,1.26.06.62-.31,1.16.13,1.66.64,1.68-1.23.5.09,1.45,2.4.4,0,.85.87-.24.39-.11.72-1.81,1.69-.56,1.38L509.3,364l-.45.48-.44,1.51-1.14.88-.33,1.09-.48.87-.2.89-1.48.73-1.2-.88-.82,0-1.28,1.25-.62,0-1,2.06Z"
              id="NG"></path>
            <path
              fill="#d6d6d6"
              d="M297.18,360.83l-.74-.69-1-.88-.48-.73-.9-.68-1.08-1,.24-.34.36.33.16-.16.67-.08.26-.51H295l-.05-1.08.51-.06.45,0,.46-.58.63.44.22-.27.39-.26.75-.61,0-.46.21,0,.27-.53.23-.06.36.33.43.1.48-.28h.54l.74-.29.3-.3.73,0-.18.21-.11.49.22.8-.49.75-.23.88-.08,1,.12.55.06,1-.33.22-.2.93.15.57-.45.56.11.58.32.36-.51.46-.63-.14-.36-.45-.68-.18-.49.28-1.42-.57Z"
              id="NI"></path>
            <path
              fill="#d6d6d6"
              d="M541.48,164.43l6.71,4.77-2.76,1.71,2.35,3.91-3.65,2.44-1.73.55.91-4.28-2.75-2.48-3.33,2.12-1.06,4.48-2,2.63-2.3-1.43-2.8.29L526.64,176l-1.29,1.59-1.33.25-.31,3.89-4-.94L519.1,184,517,184l-1.41,4-2.14,6-3.33,7.27.78,1.7-.75,1.95-2.13-.08-1.39,4.52.13,6.15,1.37,2.28-.71,5.15-1.78,2.92-.95,2.41-1.44-2.57-4.24,4.8-2.86.95-3-2.07-.77-4.49-.68-10.14,2-3,5.66-4,4.24-5,3.92-7.11,5.16-10.53,3.6-4.34,5.89-7.56,4.71-2.75,3.53.34,3.26-5.35,3.91.29Z"
              id="NO"></path>
            <path
              fill="#d6d6d6"
              d="M670.1,322.68l-.17,1,.28,1.52-.24.95-1.79,0-2.58-.55-1.65-.23-1.24-1.21-2.94-.32-2.8-1.35-2-1.19-2.08-.91.83-2.29,1.36-1.12.89-.6,1.72.77,2.17,1.6,1.2.35.72,1.17,1.67.48,1.74,1.07,2.43.56Z"
              id="NP"></path>
            <path
              fill="#d6d6d6"
              d="M852.23,480.43l.49,1.17,1.52-1.14.62,1.2v1.2l-.79,1.33-1.4,2.14-1.1,1.18.79,1.42-1.65,0-1.84,1.12-.57,2-1.22,3.09-1.68,1.38-1.07.88-2-.07-1.39-1-2.33-.22-.36-1.13,1.15-2.26,2.7-3,1.39-.56,1.54-1.13,1.83-1.53,1.29-1.52,1-2.15.82-.73.32-1.58,1.5-1.3Zm3.41-13,1.56,2.81,0-1.82,1,.72.33,2,1.72.88,1.45.22,1.22-1,1.09.32-.52,2.41-.65,1.6-1.64-.06-.57.84.2,1.2-.32.52-.81,1.5-1.06,1.94L857,482.62l-.37-.75-.89-.41,1.24-2.33-.71-1.54L854,476.48l.06-1,1.56-1,.36-2.1-.1-1.74-.88-1.8.07-.46-1-1.1L852.3,465l-.9-1.85.8-.2,1.17,1.44,1.67.68Z"
              id="NZ"></path>
            <path
              fill="#d6d6d6"
              d="M314,369.17l-.71-.62-.46-1.16.52-.58-.54-.14-.4-.71-1.07-.6-.94.14-.43.75-.87.53-.47.08-.2.45,1,1.16-.58.28-.31.32-1,.11-.38-1.29-.28.37-.71-.12-.43-.87-.88-.14-.55-.25h-.92l-.07.46-.25-.32.12-.43.18-.43-.09-.39.32-.26-.44-.33,0-.86.84-.19.76.77,0,.46.85.09.21-.17.59.53,1.06-.16.91-.54,1.3-.44.73-.64,1.19.12-.09.22,1.2.07,1,.38.7.64.81.6-.26.32.49,1.26-.4.64-.7-.15Z"
              id="PA"></path>
            <path
              fill="#d6d6d6"
              d="M331.77,422.67l-.58,1.16-1.1.57-2.15-1.29-.19-.92L323.5,420l-3.85-2.43L318,416.17l-.88-1.81.35-.64-1.81-2.87-2.12-4-2-4.3-.88-1L310,400l-1.67-1.41-1.53-.86.7-1-1-2,.67-1.49,1.71-1.36.25.9-.61.5.05.78.89-.16.87.23.9,1.07,1.22-.88.4-1.43,1.32-1.86,2.58-.84,2.34-2.24.66-1.38-.3-1.62.58-.2,1.42,1,.68,1,1,.56,1.26,2.23,1.6.27,1.18-.57.78.37,1.28-.18,1.65,1-1.39,2.17.64.05,1.08,1.14-1.94-.1-.28.32-1.76.4-2.45,1.47-.16,1-.55.75.22,1.15-1.3.62v.92l-.57.39.9,1.93,1.19,1.32-.45.92,1.42.13.81,1.15,1.89.05,1.76-1.27-.14,3.29,1,.26,1.21-.38,1.86,3.51-.47.73-.1,1.55-.05,1.86-.84,1.1.39.82-.5.75.93,1.86Z"
              id="PE"></path>
            <path
              fill="#d6d6d6"
              d="M815.46,399.17l-.6.21-.93-.82L813,397.2l-.46-1.63.3-.21.23.64.65.48,1,1.35,1,.73Zm-8.36-2.87-1.13.18-.33.6-1.17.52-1.11.51h-1.14l-1.76-.62-1.22-.6.18-.67,1.92.32,1.17-.17.32-1,.3,0,.21,1.14,1.22-.16.61-.73,1.2-.77-.24-1.26,1.29,0,.43.35,0,1.19Zm-10.28,4.09,1.91,1.41,1.4,2.29,1.23-.07-.09,1,1.67.36-.65.41,2.28.91-.23.63-1.43.15-.53-.56-1.84-.24-2.16-.33-1.67-1.38-1.22-1.18-1.12-1.89-2.8-.94-1.82.61-1.31.72.28,1.59-1.68.74-1.21-.36-2.21-.09,0-7,0-7,3.73,1.47,4,1.22,1.48,1.09L793.9,395l.33,1.27,3.57,1.32.52,1.14-2,.23Zm12.76-6.19-.68.57-.4-1.26-.5-.83-1-.69-1.23-.91-1.54-.63.6-.51,1.15.59.73.47.9.51.86.9.82.68Z"
              id="PG"></path>
            <path
              fill="#d6d6d6"
              d="M752.16,366.61l.22,1.43.13,1.21-.73,2L751,369l-1,1.08.69,1.58-.62,1-2.52-1.25-.61-1.55.66-1-1.36-1-.67.9-1-.08-1.59,1.2-.36-.63.85-1.81,1.35-.61L746,366l.76,1,1.63-.59.35-1,1.51-.06-.13-1.67,1.74,1,.18,1.08Zm-5.13-4-.77.71-.68,1.37-.67.65-1.32-1.5.44-.58.53-.6.24-1.35,1.19-.13-.35,1.46,1.6-2.09Zm-11.75,2.08-2.86,2,1.06-1.51,1.55-1.33,1.29-1.5,1.12-2.16.38,1.77-1.41,1.19Zm7.25-5.58,1.29.67h1.36l0,.91-1,.92-1.36.65-.07-1,.15-1.11Zm7.76-.59.6,2.43-1.65-.57,0,.73.52,1.33-1,.49-.1-1.53-.64-.11-.34-1.32,1.27.18,0-.83-1.31-1.66,2.06,0Zm-8.53-2-.56,1.89-.92-1.09-1.09-1.67,1.83.08Zm-.44-12,1.32.64.66-.58.19.57-.35.93.74,1.6-.57,1.85-1.26.74-.34,1.78.48,1.75,1.14.25.95-.26L747,355l-.21,1.2.71.53-.22,1-1.67-1.07-.8-1.15-.55.8L742.85,355l-2,.33-1.07-.49.11-.91.67-.55-.64-.52-.28.8-1.05-1.26-.33-1-.07-2.12.86.74.22-3.48.7-2Z"
              id="PH"></path>
            <path
              fill="#d6d6d6"
              d="M338.87,344.44l1.09.2.39.44-.55.57h-1.61l-1.26.07-.12-.95.3-.33Z"
              id="PR"></path>
            <path
              fill="#d6d6d6"
              d="M346.58,433.27l.85-2.75.05-1.22,1-2,3.74-.66,2,0,2,1.15,0,.7.64,1.27-.14,3.1,2.26.45.88-.45,1.44.62.41.69.2,2.12.25.9.8.1.8-.37.77.42v1.29l-.29,1.39-.42,1.36-.35,2.1-1.95,1.84-1.69.38-2.41-.36-2.16-.66,2.11-3.61-.31-1.05-2.21-.92-2.62-1.73-1.75-.35Z"
              id="PY"></path>
            <path
              fill="#d6d6d6"
              d="M525.84,275.59l1.3.72.17,1.25,1.25.87.67-.67.54.37-.5.51.39.52-.53.67.19,1.09,1,1.27-.82.91-.36.92.23.35-.36.41-1,0-.74.17-.07-.21.26-.35.24-.71-.3,0-.43-.54-.35-.13-.27-.47-.41-.19-.3-.41-.39.17-.3,1-.51.22.18-.25-.82-.61-.7-.31-.32-.42-.56-.5.5-.13.31-1.39-1-1.15.54-1.32h-.78l.82-1.14-.68-.87-.52-1.19,1.65-.8,1.34.13,1.16,1.21Z"
              id="RS"></path>
            <path
              fill="#d6d6d6"
              d="M888.87,195.14l-2.12,2.27-3.52.54-.06,4.94-.85,1-2-.14-1.63-1.73-2.86-1.47-.48-2.21-2.18-.84-2.44.66-1.16-1.81.46-1.95-2.57,1.25,1,2.44-1.22,2.17,0,0-2.75,2.21-2.78-.37,1.94,2.63,1.28,4,1,1.28.25,1.94-.55,1.22-4-1-6,3.45-1.9.53-3.28,3.14L847.24,222l-.79,2-3.06-3-5.6,3.38-1-1.59-2.06,1.83-2.87-.58-.69,2.78-2.57,4,.08,1.64,2.44.89-.29,5.71-2,.15-.92,3.17.89,1.61-3.75,1.89-.74,4.13-3.2.87-.64,3.57-3.09,3.19-.79-2.35-.92-5.12L814.5,242l1-5.32,1.81-2.35.11-1.86,3.34-.9,3.83-5.19,3.7-4.39,3.86-3.49,1.72-6.41-2.61.39L830,216.22l-5.44,4.86-1.76-5.46-5.54,1.53-5.37,7.32,1.78,2.58-4.79,1.09-3.32.43.16-3-3.34-.64L799.74,227l-6.56-.72-7,1.24-7,7.9-8.23,9,3.39.47,1,2.3,2.08.8,1.37-1.82,2.36.24,3.1,4,.07,3-1.68,3.45-.18,4-1,5.24-3.23,4.6-.72,2.16-2.92,3.56-2.89,3.47-1.39,1.74-2.86,1.72-1.35,0L764.83,282,762,284.08l-.34,1-.3-.51v-1.47l1.09-.08.31-3.48-.57-2.57,1.84-1.07,2.6.53,1.45-3,.74-3.41.83-1.15,1.12-2.88-3.54.95-1.86,1.26h-3.26l-.86-3-2.54-2.32-3.74-1.05-.79-3.28-.75-2.09-.8-1.48-1.33-3.53-1.88-1.31-3.21-1.06-2.85.1-2.66.64-1.78,1.77,1.18.84,0,1.93-1.19,1.11L737,259.05l0,1.48-3,2.09-2.58-1.25-2.56.28-1.12-1.12-1.29-.36-3.14,2.34-2.83.55-2,.81-2.7-.54-2,0-1.3-1.68-2.11-1.6-2.15-.44-2.71.43-2,.62-3-1.4-.41-2.54-2.52-.88-2-.41-2.4-1.43-2.22,3.56.87,2-2.09,2.32-3.09-.83-2.15-.12L683,259.39l-2.23-.05-1.87-1-3.26,1.58-4.09,2.86-2.27.57-.84.27-1.14-2-2.76.45-.91-1.41-1.5-.65-1-1.95L660,257.4l-3.08.87-3-2-1.14,1.78-4.8-8.86-2.74-2.8.79-1.14-5.38,3.43-2.06.21.18-2L636,245.7l-2.24.89-.67-3.83-3.86-.81-1.93,1.55-5.37,1.37-1.05.91-8,1.27-1,1.24,1.55,2.46-2.06.92.4,1-2.06,1.7,3.48,2.37-.54,1.62-3-.15-.62,1-2.75-1.75-3.4.07-2.28,1.43-2.54-1.37-4.73-2.37-3.35.09L585.54,259l-.27,2.44-2.2-1.93-1.72,3.65.63.66-1.24,2.46,1.82,2.17,1.59-.09,1.37,2.11-.21,1.61,1.08.5-1,1.83-2.08.51L581.2,278l1.95,2.83-.21,2,2.34,3.41L584,287.4l-.37.72-1-.19-1.47-1.74-.61-.1-1.34-.66-.66-1.19-2-.6-1.3.46-.37-.55-2.93-1.4-3.15-.47-1.82-.5-.26.34L564,279l-2.45-1.13-1.85-1.78,1.56-.49,1.78-2.56-1.2-1.23,3.16-1.27,0-.69-1.93.5.07-1.4,1.11-.89,2.07-.23.34-1.07-.48-1.79.88-1.7,0-1-3.16-1.08-1.25,0-1.32-1.56-1.65.53-2.72-1.18,0-.66-.76-1.48-1.72-.17-.17-1.06.53-.7-1.37-2-2.22.33-.65-.17L550,254l-.8-.13-.53-2.25-.5-1.18.41-.34,1.73.12.83-.78-.62-.95-1.44-.64.13-.66-.87-.66L547,244.1l.46-1-.21-1.77-2.09-.9-1.13.45-.31-.95-2.25-1-.69-2.28-.18-1.91-1-.91.92-1.27-.63-3.79,1.53-2.4-.33-.73,2.45-2.35-2.25-2,4.59-5.67,2-2.64.8-2.37-3.18-3.26.88-3.18-1.92-3.71,1.44-4.41-2.49-6.09,2-4.19-3.28-3.82.31-4.13,1.73-.55,3.65-2.44,2.21-2.15,3.53,3.72,5.87,1.44,8.11,6.62,1.64,2.68.15,3.67-2.38,2.83L563.4,195,553.82,191l-1.57.69,3.49,3.9.14,2.41.14,5.16,2.76,1.51,1.68,1.27.27-2.38-1.29-2.14,1.36-1.92,5.19,3.14,1.8-1.22-1.44-3.73,5-5.16,2,.31,2,1.85,1.25-3.68-1.79-3.27,1.05-3.37-1.58-3.59,6,1.86,1.22,3.2-2.71.7v3.09l1.69,1.87,3.32-1.18.52-3.53,4.49-2.69,7.49-5,1.61.29-2.11,3.55,2.66.6,1.54-2,4-.16,3.18-2.44,2.45,3.53,2.44-3.89-2.25-3.51,1.12-2,6.33,1.86,3,1.91,7.77,6.73,1.44-3-2.18-3.14-.06-1.29-2.59-.59.71-2.93-1.15-5-.06-2.09,4-6.12,1.4-6.44,1.59-1.44,5.68,1.92.45,4-2,5.57,1.33,2.12.69,4.55-.49,8.47,2.36,3.62-.91,3.83-4.2,7.8,2.45.78.86-1.92,2.36-1.39.56-2.72,1.86-2.67-1.25-3.25,1-3.89-2.35-.49-.52-3.38,1.72-6.34-2.79-5.38,3.84-4.62-.49-5.06,1.07-.17,1.12,4-.85,6.63,2.3,1.22-1-4.87,3.59-2.74,4.45-.38,4,4-1.9-5.83-.22-7.86,3.74-1.55,5.16.34,4.65-1-1.75-4.12,2.49-5.37,2.46-.23,4.17-4.21,5.66-1.16.72-2.41,5.63-.82,1.76,2,4.81-4.77,3.94.15.59-4,2.05-4.08,5.06-4.06,3.68,3.22-2.92,2.4,4.86,1.47.58,4.61,2-2.25,6.27.12,4.84,4.47,1.72,3.33-.53,4.48L723,135.93l-5.64,4.53-1.61,2.36,2.66,1.09,3.18,2,1.93-1.47,1.09,4.89.94-2,3.43-1.2,6.89,1.27.52,3.5,9,1.09.12-5.71,4.56,1.33,3.43,0,3.46,3.93,1,4.63-1.27,2.93,2.69,5.34,3.38,2.67,2.07-7,3.44,3.06,3.66-1.82,4.15,2.08,1.59-1.89,3.51,1L779.55,156l2.83-3.11,19.38,4.64,1.83,4.09,5.61,5.09,8.66-1.24,4.27,1.08,1.78,2.67-.26,4.61,2.64,1.75,2.87-1.25,3.81-.16,4,1.2,4.07-.68,3.73,5.35,2.65-1.9-1.73-3.88.95-2.77,6.85,1.75,4.46-.37,6.17,2.93,3,2.64,5.25,4.48,5.63,5.62-.19,3.39,1.45,1.33-.5-3.94,5.83.82Zm-97.5,69.24-2.15-5.87-.89-3.46,0-3.44-.74-3.44-.56-2.41-1,.51L787,248l-2,1.66-.19,4.82,1.26,3.38-.09,4.47-.5,2.48.24,3.48-.23,3.06.39,2.6,1.41-2.39,1.63,1.87.06-2.18L786.88,268l1.32-4.68Zm-262.44-21-2.25-.66-3,1.21-.49,1.63,2.64.42,3.94-.06-.16-.94.23-1ZM867.2,166.75l2.8-.39,2.22-1.58.18-.91L869.29,162l-1.82,0-.27.29L864.47,165l.38,2.09ZM783.13,146l-2,3,.37.39,4.4.83,3.25-.05-.26-2-3-2.91Zm18.8-7.29,2.48-3.26-5.38-2.2L795,132l-.51,2.75,4,3.27Zm-19.22-1.3,7.9.23,1.69-6.23-7.75-4.64-5.66-.39-2.83,1.67L774.9,134l4.25,5.36ZM593.63,157.29l-2.19,1.5.31,3.69,3.89,1.8.56,2.92,7,.85,1.27-.57-4.1-5.44-.44-5.75,3.36-7,3.2-7.51,6.67-7.78,6.54-4.09,7.6-4.39,1.44-2.84L627.26,119l-4.18,1.22-3.67,3.44-7.14,1.7L605.19,131l-4.8,4.47.58,3.73-5.13,6.91,2,.93-4.25,6.33Zm112.84-52,.64-4.38-5.44-6.38-1.62-.75-1.76,1.3-3.92,14.23ZM580.82,82.88l2.32,3,2.51-2.06.3-2.08,1.93-1L590.76,79l.82-2-3.18-3-2,2.22-1.23,3.15-.44-3.55-3.26.16-4.18,2.4,4.77.4Zm100.42,10,3.55,4.38,6,3.22,4.68-1.38L696,88.66,691,76.39l-4.17-6.9-4.65,3.14-5.57,9.05,2.93,2.5Z"
              id="RU"></path>
            <path
              fill="#d6d6d6"
              d="M546.31,387l.86,1.2-.13,1.25-.62.27-1.14-.14-.65,1.22-1.31-.17.2-1.17.3-.16.07-1.27.62-.6.52.23Z"
              id="RW"></path>
            <path
              fill="#d6d6d6"
              d="M828.84,407.07l.6.75-1.5,0-.82-1.33,1.28.53Zm-2.71-1.32-.84.05-1.31-.23-.46-.33.14-.86,1.42.34.69.45Zm1.77-.59-.32.4L826,403.68l-.45-1.28h.73l.77,1.72ZM824,402.44l.09.43-1.68-.91-1.18-.77-.8-.72.32-.22,1,.51,1.76,1Zm-5-2.13-.43.12-.94-.49-.88-.88.11-.36,1.27.91Z"
              id="SB"></path>
            <path
              fill="#d6d6d6"
              d="M553.92,364.34l-.3,0,0-1.07-.26-.75-1.11-.85-.26-1.57.26-1.61-1-.14-.15.48-1.29.11.52.64.18,1.31L549.39,362l-1.08,1.56-1.1.22-1.8-1.26-.81.44-.23.64-1.1.4-.07.45h-2.14l-.3-.45-1.54-.07-.78.37-.58-.19-1.11-1.26-.36-.59-1.56.3-.59,1-.55,1.93-.73.4-.66.24-.17-.11-.75-.62-.13-.66.34-.9V363l-1.24-1.36-.24-.93,0-.53-.79-.63,0-1.27-.45-.85-.75.13.21-.8.56-.92-.25-.9.71-.67-.45-.52.57-1.36,1-1.63,1.85.15-.11-8.88,0-.95h2.47v-4.56h25.45l.69,2.25-.46.41.31,2.34.79,2.69.81.56,1.18.83-1.09,1.28-1.58.36-.68.69-.2,1.48-.93,3.25.23.88-.34,1.89-.88,2.15-1.29,1.09-.92,1.66-.22.88-1,.62-.63,2.26Z"
              id="SD"></path>
            <path
              fill="#d6d6d6"
              d="M534.1,110l-4.79,4.1-3.79-2.31,1.49-2.61-1.3-3.32,4.45-2.13.85,4ZM520.21,89.6l7.06,8.64-5.4,4.33-1.19,7.72-1.88,1.9-1,8-2.59.37-4.61-5.84,1.94-3.54-3.21-3-4.18-9-1.67-9,5.85-4.35,1.18,4.25,3-.16.81-4.16,3.15-.43Zm15.43-8.77,4.21,4.44-3.18,6.52-6.22,1.38-6.33-2-.38-3.3-3.08-.22L518.31,82l6.63-3.61,3.11,3.12,2.18-3.89Z"
              id="SJ"></path>
            <path
              fill="#d6d6d6"
              d="M456.52,370.11l-.58-.16-1.54-.86-1.12-1.15-.37-.79-.27-1.59,1.15-.95.24-.6.37-.47.59-.05.5-.4h1.72l.59.77.47.91-.07.63.34.56,0,.79.59-.12-1,1-1,1.17-.11.62Z"
              id="SL"></path>
            <path
              fill="#d6d6d6"
              d="M445.2,355.36l-.89-1.71-1.07-.78.95-.42,1-1.56.51-1.14.73-.71,1.07.19,1-.48,1.2,0,1,.65,1.42.59,1.3,1.63,1.42,1.51.1,1.37.42,1.26.8.61.19.85-.1.68L456,358l-1.16-.17-.16.24-.48.05-1.54-.53-1,0-4-.09-.57.25-.71-.07-1.14.36-.35-1.68,1.95.05.52-.31.38,0,.8-.51.91.47.94,0,.92-.5-.43-.63-.71.37h-.66l-.84-.54-.69,0-.49.51Z"
              id="SN"></path>
            <path
              fill="#d6d6d6"
              d="M590.76,359.39l-.06-.6h-.81l-1,.75-1.14.21-1,.32-.68.05-1.23.07-.76.4-1.07.15-1.89.67-2.33.25-2,.56H575.7l-1-.91-.42-.89-.69-.41-.8,1.17-.47.77.8,1.19.79,1,.82.77,7,2.56,1.81,0-6.07,6.45-2.79.09-1.91,1.51-1.37,0-.59.68L569,378.67l0,7.77,1.27,1.75.48-.5.49-1.12,2.35-2.59,2-1.62,3.21-2.11,2.15-1.73,2.52-2.91,1.83-2.4,1.84-3.14,1.33-2.74,1-2.41.6-2.34.46-.78v-1.15Z"
              id="SO"></path>
            <path
              fill="#d6d6d6"
              d="M358.46,371.86l2.57.42.23-.39,1.74-.15,2.3.58-1.12,1.84.17,1.46.85,1.27-.37.92-.19,1-.56.9-1.22-.46-1,.23-.86-.2-.22.62.36.43-.19.43-1.17-.17-1.31-1.86-.28-1.2h-.68l-1-1.54.4-1.11-.11-.5,1.3-.56Z"
              id="SR"></path>
            <path
              fill="#d6d6d6"
              d="M553.92,364.34l0,1.69-.32.65-1.14.06-.73,1.23,1.32.15,1.08,1.05.39.86,1,.49,1.27,2.34-1.46,1.41L554,375.54l-1.33,1h-1.5l-1.73.5-1.36-.48-.88.59-1.89-1.43-.52-.91-1.19.46-1-.15-.57.36-1-.25-1.3-1.77-.34-.68-1.61-.85-.54-1.29-.9-.92L535,368.58l0-.7-1.17-.87-1.46-.84.66-.24.73-.4.55-1.93.59-1,1.56-.3.36.59,1.11,1.26.58.19.78-.37,1.54.07.3.45h2.14l.07-.45,1.1-.4.23-.64.81-.44,1.8,1.26,1.1-.22,1.08-1.56,1.17-1.19-.18-1.31-.52-.64,1.29-.11.15-.48,1,.14-.26,1.61.26,1.57,1.11.85.26.75,0,1.07Z"
              id="SS"></path>
            <path
              fill="#d6d6d6"
              d="M292.71,355.82l-.23.51-1.24,0-.77-.21-.89-.43-1.2-.14-.6-.47.07-.32.73-.56.4-.24-.11-.26.5-.13.64.18.46.44.65.35.07.3.94-.26.45.15.29.24Z"
              id="SV"></path>
            <path
              fill="#d6d6d6"
              d="M549.86,443.79l-.44,1.06-1.25.26-1.29-1.3V443l.58-.9.21-.69.62-.16,1.08.43.32,1.07Z"
              id="SZ"></path>
            <path
              fill="#d6d6d6"
              d="M512.16,357l.21-1-1.38-.05v-1.42l-.89-.81.92-2.91,2.74-2.09.11-2.9.82-4.58.47-1-.89-.78,0-.72-.8-.6-.53-3.57,2.17-1.27,8.56,4.41,8.55,4.36.11,8.88-1.85-.15-1,1.63-.57,1.36.45.52-.71.67.25.9-.56.92-.21.8.75-.13.45.85,0,1.27.79.63,0,.53-1.36.37-1.09.88-1.55,2.36-2,1-2.07-.14-.61.2.22.76-1.13.76-.91.84-2.7.82-.53-.48L516,368l-.39.55-1.78.17.34-.59-.68-1.48-.3-.89-.93-.37L511,364.16l.47-1,1,.22.6-.16,1.2,0-1.17-2,.08-1.45-.15-1.44Z"
              id="TD"></path>
            <path
              fill="#d6d6d6"
              d="M628.94,503.69l1.38,1,2,.41.07.62-.59,1.5-3.3.22,0-1.76.32-1.34Z"
              id="TF"></path>
            <path
              fill="#d6d6d6"
              d="M485.06,371.5l-1.73.45-.48-.75-.57-1.36-.17-1.08.47-1.93-.53-.79-.21-1.7v-1.57l-.89-1.11.16-.68,1.88,0-.28,1.15.65.63.75.76.08,1.07.44.44-.1,4.94Z"
              id="TG"></path>
            <path
              fill="#d6d6d6"
              d="M701.13,358.44l-1.93-1-1.83.05.31-1.72h-1.89l-.17,2.41-1.15,3.17-.7,1.91.14,1.57,1.4.07.87,2,.39,1.86,1.19,1.23,1.3.25,1.11,1.11-.69.88-1.43.26-.16-1.1-1.75-.94-.37.38-.85-.82-.37-1.06-1.14-1.22-1-1L692,368l-.41-1.2.24-1.34.63-2.08,1-2.22,1.18-2-.85-2,0-1-.24-1.22-1.43-1.75L691.7,352l.75-.4.78-1.93-.88-1.47L691,346.56l-1-2,.9-.41,1-2.44,1.52-.11,1.25-1,1.23-.53.93.71.12,1.36,1.45.1-.53,2.38.06,2,2.25-1.33.64.39,1.27-.06.43-.78,1.62.15,1.63,1.83.14,2.19,1.73,1.94-.1,1.86-.69,1-2-.32L702,354l-1.37,1.82Z"
              id="TH"></path>
            <path
              fill="#d6d6d6"
              d="M749.15,403.63l.25-.5,1.84-.49,1.5-.07.67-.27.81.27-.79.58-2.23.94-1.8.63,0-.66Z"
              id="TL"></path>
            <path
              fill="#d6d6d6"
              d="M501.4,316.75l-.92-4.49-1.32-1,0-.62-1.75-1.51-.19-1.94,1.32-1.43.51-2.16-.35-2.51.44-1.37,2.34-1.08,1.5.32-.06,1.36,1.82-1,.15.51-1.08,1.31v1.22l.74.65-.29,2.27-1.41,1.31.4,1.4,1.11,0,.55,1.22.82.4-.13,1.95-1,.73-.66.8-1.48,1,.23,1-.18,1.05Z"
              id="TN"></path>
            <path
              fill="#d6d6d6"
              d="M348.74,361.54l1.23-.28.45.08-.08,1.61-1.8.24-.39-.19.63-.6Z"
              id="TT"></path>
            <path
              fill="#d6d6d6"
              d="M742.3,331,741,334.69l-.92,1.89L739,334.63l-.25-1.72,1.26-2.29,1.73-1.78,1,.7Z"
              id="TW"></path>
            <path
              fill="#d6d6d6"
              d="M553.79,386.63l.36.24,7.78,4.34.15,1.24,3.07,2.13-1,2.64.12,1.22,1.38.78.06.55-.59,1.31.12.65-.14,1,.75,1.35.89,2.13.78.47-1.7,1.26-2.35.84-1.28,0-.77.65-1.49.05-.56.28-2.58-.61-1.62.17-.59-2.95-.73-1-.44-.6-2.09-.39-1.23-.65-1.36-.36-.86-.37-.89-.54-1.16-2.72-1.24-1.2-.43-1.24.21-1.12-.38-2,.89-.09.77-.78.84-1.11.53-.45,0-.69-.46-.49-.13-.84.62-.27.13-1.25-.86-1.2.76-.26,2.35,0Z"
              id="TZ"></path>
            <path
              fill="#d6d6d6"
              d="M549.25,253.85l.79.15.55-.8.65.18,2.22-.34,1.37,2-.53.7.17,1.07,1.72.16.76,1.47,0,.67,2.72,1.18,1.65-.53,1.32,1.56,1.25,0,3.16,1.07,0,1-.87,1.71.47,1.78-.34,1.06-2.07.24-1.1.89-.07,1.4-1.72.25-1.43,1-2,.16L556.06,273l-1,.78,1.14,1.13,1,.73,2.18-.18-.42,1.09-2.35.52-2.91,1.73-1.19-.6.47-1.42-2.34-.88.38-.59,2.42-1.25-.31-.62-.34.31-.34-.17-3.33-.78-.15-1.15-2,.38-.79,1.71L544.57,276l-1-.52-1,.49-1-.55.53-.34.38-1.05.59-1-.16-.55.46-.24.2.43,1.27.08.57-.22-.4-.32.15-.46-.75-.8-.31-1.31-.78-.52.15-1.07-1-.86-.88-.12-1.58-1-1.43.33-.51.47h-.9l-.54.75-1.59.31-.72.49-1-.78H532l-1.33-.35-.92.68-.16-.86-1.18-.87.42-1.31.59-.84.47.18-.56-1.47,1.95-2.76,1.07-.39.23-.95-1.08-3,1-.13,1.18-.94,1.66-.08,2.17.27,2.39.83,1.69.07.81.5.8-.6.57.8,1.93-.16.85.32.15-1.72.65-.77Z"
              id="UA"></path>
            <path
              fill="#d6d6d6"
              d="M549.42,386.8l-2.35,0-.76.26-1.28.66-.52-.23,0-1.6.49-.81.13-1.72.45-1,.82-1.12.82-.57.69-.76-.85-.28.13-2.49.88-.59,1.36.48,1.73-.5h1.5l1.33-1,1,1.49.26,1.07.94,2.45-.78,1.55-1.06,1.41-.61.86,0,2.26Z"
              id="UG"></path>
            <path
              fill="#d6d6d6"
              d="M357.44,452.25l1.39-.26L361,453.9l.79-.07,2.21,1.59,1.69,1.39,1.24,1.73-1,1.2.6,1.45-.93,1.62-2.43,1.44-1.58-.52-1.16.28-2-1.11L357,463l-1.31-1.43.17-1.65.47-.57,0-2.52.57-2.58Z"
              id="UY"></path>
            <path
              fill="#d6d6d6"
              d="M328,359.33l-.06.51-1.26.26.7,1,0,1.14-.94,1.26.81,1.71.93-.14.48-1.56-.67-.76-.1-1.64,2.67-.89-.3-1,.75-.69.77,1.53,1.51,0,1.39,1.21.09.72h1.92l2.29-.22,1.23,1,1.64.27,1.2-.67,0-.56,2.67-.13,2.57,0-1.82.65.72,1,1.73.16,1.62,1.07.34,1.73,1.12-.06.84.51-1.7,1.27-.19.78.73.8-.52.4-1.33.34,0,1-.58.59,1.44,1.62.29.6-.78.82-2.41.8-1.53.33-.62.51L344,376l-1.59-.27-.4.2,1,.55-.09,1.43.3,1.35,1.81.18.13.44-1.54.61-.25.91-.88.34-1.59.5-.42.66-1.67.13-1.18-1.13-.65-2.12-.58-.75-.78-.46,1.09-1.07-.07-.48-.61-.63-.43-1.42.17-1.54.47-.72.39-1.14-.75-.38-1.23.25-1.54-.12-.87.23-1.51-1.84-1.25-.28-2.75.21-.52-.75-.52-.18-.08-.45.25-.8-.17-.86-.47-.47-.28-1-1.1-.14.59-1.27.27-1.53.62-.82.83-.62.55-1.08Z"
              id="VE"></path>
            <path
              fill="#d6d6d6"
              d="M712.85,337.54l-2.86,2-1.79,2.15-.47,1.57,1.64,2.36,2,2.92,2,1.37,1.31,1.79,1,4.07-.3,3.84L713.53,361l-2.46,1.4-1.75,1.8-2.67,2-.78-1.39.6-1.46-1.59-1.23,1.86-.87,2.25-.15-.94-1.33,3.6-1.67.27-2.62-.5-1.47.39-2.2-.54-1.56-1.62-1.55-1.36-2-1.78-2.65-2.57-1.35.62-.82,1.37-.59-.84-2-2.64,0-1-2.08-1.26-1.82,1.16-.56h1.71l2.08-.26,1.83-1.24,1,.87,2,.42-.34,1.33,1,.93Z"
              id="VN"></path>
            <path
              fill="#d6d6d6"
              d="M841.13,420.2l-.7.29-.72-1,.07-.59Zm-1.58-3.4.35,1.78-.58-.27-.44.12-.31-.61,0-1.69Z"
              id="VU"></path>
            <path
              fill="#d6d6d6"
              d="M548.67,449.89l-.42.35-.91,1.25-.59,1.27-1.22,1.78-2.43,2.59-1.51,1.51L540,459.8l-2.24,1-1.1.13-.27.71-1.3-.38-1.07.49-2.32-.5-1.3.32-.89-.14-2.21,1-1.83.41-1.33,1-1,.06-.91-.92-.72-.05-.93-1.16-.1.36-.28-.69v-1.5l-.69-1.71.69-.46-.06-1.93-1.4-2.34-1.08-2.09h0l-1.54-3.18,1-1.2.85.67.36,1,1,.17,1.34.46,1.16-.17,1.91-1.25v-8.81l.58.35,1.27,2.24-.2,1.45.49.84,1.53-.25,1.08-1.06,1-.71.53-1.13,1.05-.56.9.3,1,.66,1.74.12,1.37-.55.22-.74.37-1.12,1.17-.2.64-.88.72-1.55,1.92-1.73,3-1.7.87,0,1,.39.72-.28,1.14.23,1,3.26.56,1.66-.39,2.63.19.84-1.09-.43-.62.17-.2.69-.59.89,0,.83,1.27,1.3,1.26-.26.44-1.07,1.62,0-.53,1.74-.25,2-.56,1.09Zm-5.45-.74-.93-.74-1,.49-1.16,1L539,451.41l1.61,1.9.76-.25.4-.78,1.2-.39.36-.8.66-1.19Z"
              id="ZA"></path>
            <path
              fill="#d6d6d6"
              d="M551.34,404.37l1,1,.54,1.84-.37.58-.43,1.76.42,1.81-.68.76-.65,2,1.13.57-6.51,1.82.2,1.57-1.63.3-1.21.88-.26.78-.78.17L540.26,422l-1.19,1.45-.72,0-.7-.26-2.4-.24-.38-.17,0-.19-.84-.5-1.4-.13-1.76.51-1.4-1.39L528,419.34l.1-7,4.47,0-.19-.76.32-.82-.37-1,.24-1.06-.23-.67.75,0,.12.67,1-.05,1.36.2.72,1,1.72.3,1.31-.69.48,1.14,1.65.31.79.93.88,1.21,1.64,0-.18-2.36-.59.39-1.5-.84-.58-.39.27-2.18.38-2.56-.48-1,.61-1.38.57-.25,2.89-.37.84.23.89.54.86.37,1.36.36Z"
              id="ZM"></path>
            <path
              fill="#d6d6d6"
              d="M548,433.28l-1.14-.23-.73.27-1-.39-.87,0-1.37-1-1.66-.35-.63-1.45v-.81l-.91-.24-2.43-2.49-.68-1.31-.43-.4-.83-1.79,2.4.24.7.26.72,0,1.19-1.45,1.86-1.83.78-.17.26-.78,1.21-.88,1.63-.3.14.82,1.79,0,1,.47.46.55,1,.16,1.11.72v2.82l-.42,1.56-.09,1.68.34.68-.24,1.33-.33.2-.56,1.65Z"
              id="ZW"></path>
            <path
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M793,480.07l2.08,1,1.17-.39,1.67-.54,1.29.19.15,3.39-.73,1-.22,2.35-.75-.81-1.5,2-.44-.16-1.32-.09-1.32-2.51-.29-1.91-1.24-2.49.05-1.3ZM789,414.23l.78,1.72,1.37-.83.71.94,1,.86-.22,1,.45,1.9.33,1.11.55.26.58,1.92-.21,1.16.7,1.52,2.32,1.18L799,428l1.44,1-.29.55,1.23,1.43.83,2.49L803,433l.87,1,.53-.35.37,2.46,1.52,1.43,1,.89,1.68,1.91.6,1.9.06,1.36-.15,1.48,1,2.05-.13,2.15-.37,1.13-.58,2.2,0,1.42-.42,1.79-.95,2.3-1.59,1.25-.78,2-.72,1.28-.63,2.24-.83,1.31-.54,2-.28,1.84.11.85-1.23.93-2.4.1-2,1.11-1,1.05-1.3,1.18L793.18,474l-1.32-.48.34-1.41-1.17.51-1.88,2-1.85-.74-1.22-.43-1.22-.19-2.08-.79-1.38-1.67-.4-2-.5-1.34-1-1.07-2.07-.32.7-1.27-.52-1.92-1,1.79-1.92.49,1.13-1.44.32-1.49.83-1.27-.17-1.89L775,461.17l-1.34.88-.82,2.06L771.13,463l.07-1.37-1.34-1.86-1.13-.95.4-.59-2.75-1.53-1.51-.07-2.06-1.23-3.85.24-2.77.9-2.44.85-2-.17-2.28,1.3-1.86.59-.41,1.34-.79,1-1.83.06-1.34.23-1.9-.47-1.55.28-1.46.12L737,463.13l-.63-.12-1.08.74-1,.82-1.57-.1h-1.44L729,462.81l-1.16-.49,0-1.47,1.06-.36.37-.58-.08-.92.26-1.76-.23-1.49-1.13-2.51-.36-1.42.1-1.4-.86-1.59-.06-.71-.94-1-.27-1.89-1.23-1.89-.29-1,.94,1-.73-2.2,1.06.69.64.91,0-1.21L725,439.7l-.21-.74-.5-.71.23-1.35.44-.58.29-1.16-.23-1.35.89-1.66.16,1.75.9-1.59,1.74-.76,1-1,1.64-.84,1-.18.59.29,1.69-.85,1.3-.26.32-.49.57-.21,1.19.05,2.25-.66,1.17-1,.55-1.21,1.25-1.14.1-.9.06-1.21,1.49-1.89.91,1.92.91-.45-.77-1.05.68-1.08.94.48.27-1.69,1.17-1.09.52-.87,1.07-.38,0-.61.94.26,0-.55,1-.31,1-.3,1.58,1,1.19,1.31h1.34l1.36.21-.45-1.21,1-1.76,1-.57-.33-.55.93-1.24,1.3-.78,1.09.26,1.81-.41,0-1.11-1.57-.72,1.14-.31,1.43.53,1.14.9,1.8.56.61-.22,1.33.67,1.26-.63.8.19.51-.42,1,1.08-.58,1.17-.81.89-.73.08.25.88-.63,1.09-.76,1.08.15.62,1.7,1.22,1.66.71,1.1.77,1.55,1.32h.61l1.12.57.33.69,2.05.76,1.42-.77.42-1.2.43-1,.27-1.21.65-1.76-.3-1.07.16-.64-.25-1.25.28-1.66.42-.44-.34-.73.52-1.15.41-1.2.05-.62.8-.81.6,1.07.15,1.36.53.26.09.92.78,1.11.16,1.23Z"
              id="AU"></path>
            <path
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M717.76,344.07l-1.85,1.08-1.76-.69-.06-1.94,1.06-1,2.34-.64,1.23.06.48.86-.94,1Zm37.16-82.26,3.73,1.06,2.54,2.31.87,3h3.25l1.86-1.27,3.55-.94-1.13,2.87-.83,1.16-.74,3.41-1.44,3-2.6-.54L762.13,277l.57,2.57-.31,3.48-1.09.08v1.48l-1.38-1.72-.85,1.63-3.31,1.24.33,1.51-1.85-.11-1-.89-1.47,2-2.37,1.51-1.74,1.8-3,.81-1.58,1.29-2.31.75,1.14-1.27-.45-1.08,1.7-1.88L742,288.7l-1.87,1-2.43,1.94-1.32,1.79-2.1.13-1.1,1.29,1.14,1.84,1.75.45.07,1.21,1.69.78,2.41-1.92,1.9,1,1.39.07.35,1.41-3,.74-1,1.43-2.09,1.33-1.1,1.83,2.31,1.42.84,2.53,1.31,2.34,1.45,1.93,0,1.86-1.35.68.51,1.33,1.26.76-.33,2-.54,1.93-1.2.21-1.57,2.61-1.74,3.13-2,2.81-3,2.16-3,1.95-2.42.27-1.31,1-.74-.75L724,336.39l-3,1.15-2.27.35L718,340.3l-1.19.13-.56-1.65.5-.89-2.88-.73-1,.37-2.16-.59-1-.94.34-1.33-2-.42-1-.87-1.83,1.24-2.09.27-1.72,0-1.14.57-1.11.33.32,2.63-1.15-.06-.19-.54-.06-.95-1.58.67-.92-.42-1.59-.87.62-1.92-1.36-.45-.51-2.14-2.27.39.26-2.78,2-2,.08-2-.06-1.84-.93-.57-.72-1.42-1.26.18-2.31-.36.73-1-1-1.52-1.53,1-1.81-.59-2.47,1.55-2,1.81-1.73.29-.94-.65-1.13-.06-1.53-.56-1.16.62-1.41,1.79-.19-1.9-1.31.5-2.5-.23-2.42-.56-1.75-1.06-1.67-.49-.71-1.17-1.21-.35-2.17-1.6-1.72-.76-.89.59-3-1.73L650,313.73l-.6-2.78,1.54.34L651,310l-.86-1.31.21-2.1-2.3-3-3.53-1.06-.63-2-1.58-1.25-.39-.77-.32-1.54.08-1.05-1.3-.62-.71.27-.54-2.54.61-.63-.3-.65,2.05-1.33,1.49-.55,2.27.38.81-1.8,2.76-.34.76-1.13,3.38-1.55.3-.65-.17-1.66,1.47-.77-1.93-5.16,4.25-1.21,1.1-.68,1.55-5.56,4.25,1,1.2-1.43.09-3.2,1.79-.3,1.63-2.17.84-.26.57,2.27,1.8,1.7,3.06,1.21,1.48,2.54-.83,3.61.77,1.33,2.55.52,2.89.42,2.6,1.87,1.32.33,1,2.73,1.26,1.74,2.37-.07,4.43.65,2.85-.4,2.12.43,3.18,1.75h2.59l1,.89,2.49-1.54,3.47-1,3.21-.1,2.51-1,1.54-1.57,1.5-1-.35-1-.68-1.15,1.12-1.94,1.21.27,2.2.61,2.14-1.6,3.27-1.19,1.57-2,1.51-.89,3.11-.41,1.69.35.24-1.11-1.94-2.21-1.72-1-1.66,1.18-2.12-.5-1.21.41-.55-1.31,1.51-3.24,1.05-2.49,2.58,1.25,3-2.1,0-1.47,1.93-3.62,1.2-1.11,0-1.93-1.18-.84,1.77-1.77,2.67-.64,2.84-.1,3.21,1.06,1.89,1.31,1.32,3.53.8,1.48.75,2.09Z"
              id="CN"></path>
            <path
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M201,244.14h0l-1.17-1.4-1.89-1.2-.61-3.33-2.76-3.16-1.16-3.78-2.05-.26-3.42-.1-2.51-1.18L181,225.41l-2-.8-3.75-1.52-3,.37-4.21-2-2.55-1.86-2.38.93.44,3-1.18.27-2.48.89L158,226.13l-2.38.89-.31-2.48,1-4.23,2.28-1.35-.59-1.12-2.73,2.46-1.47,2.89-3.09,3,1.57,2-2,2.94-2.3,1.69-2.15,1.22-.53,1.75-3.35,2-.68,1.81-2.51,1.63-1.47-.29-2,1.06L133,243.33l-1.79,1.25-3.68,1.06-.33-.62,2.35-1.74,2.09-1.16,2.29-2.07,2.66-.43,1.06-1.57,3-2.34.49-.79,1.58-1.4.37-3.06,1.09-2.42-2.47,1.25-.69-.71-1.16,1.49-1.4-2.08-.58,1.48-.81-2.07-2.14,1.66h-1.31l-.19-2.47.39-1.54-1.38-1.52-2.79.82-1.82-2-1.47-1v-2.49l-1.66-1.9.83-2.61,1.75-2.57.77-2.41,1.73-.35,1.47.76,1.73-2.3,1.56.41,1.64-1.5-.4-2.23-1.2-.89,1.59-1.93-1.31.05-2.28,1.1-.65,1.09-1.7-1.09-3,.56-3.15-1.2-.9-2-2.72-3,3-2.19,4.78-2.61H130l-.29,2.66,4.53-.2-1.75-3.33L129.86,189l-1.52-2.78-2.06-2.43L123.34,182l1.2-3.08,3.8-.19,2.71-2.74.51-3,2.19-3,2.09-.73,4.06-2.88,2,.44,3.3-3.53,3.25,1.4,1.55,3,1-1.26,3.62.39-.13,1.49,3.28,1.1,2.19-.64,4.52,2,4.13.6,1.65.82,2.85-1L176.3,173l2.33.86,0,21.16v27.1l2.11.13,2.09,1.2,1.5,1.87,1.9,2.75,2.09-2.33,2.15-1.37,1.14,2.18,1.45,1.7,2,1.86,1.34,2.89,2.2,4.5,3.65,2.45.06,2.39Zm134.61,26.35-1-.91-1.43.53-.72-.82-1.63,2.37-.66,2.41-.77,1.39-.91.47-.69.16-.21.75h-4l-3.26,0-1,.56-2.19,2.09.22.41.13,1.16-1.61,1-1.76-.25-1.68-.1-1,.33.19.88h0l0,.29-1.85,1.73-1.61.84-1.11.39-1.27.78-1.55.39-1.07-.15-1.32-.59.73-1.11.47-1,1-1.6-.1-1.2-.39-1.71-.79-.3L301.6,281l-.43,0-.11-.74,1.18-1.2.2-1.37-.18-1.37-1.59-1.18-1.82-.61-.3,1.16-.47.3-.38,1.5-.2-1-.86.73-.54,1-.55,1.46-.11,1.26.71,1.82-.06,1.92-.87,1.41-.44.4-.58.31-.73,0-.2-.2-.58-1.51v-.75l.06-.72-.27-1.43.41-1.67.48-2.07,1.11-2.32h-.32L292.58,278l-.29-.35.84-1.09,1.28-2,1.46-.28,1.67-.61,1.69.32.07,0,1.89-.28-1.07-1.23-.57-.1-.66-.12-.45-.88-2.11.28-1.9.69-1.51-1.19-1.21-.4.68-1.66-1.89,1.05-1.73,1-1.65.8L285.81,271l-2.15.65v-.45l1.46-1.33,1.52-1.26,2.19-1-2.64-.83-1.74.42-2.08-1-2.19-.51-1.5-.2-.66-.55-.39-1.8-.72,0v1.25H217.52l.73,2.66.34,2.61-.53.83-1.14-3-3.1-1.09-.26.63.63,1.48.68,2.71.39,4.14-.26,2.75-.26,2.71-.84,2.76.69,2.22.08,2.45-.47,2.33,1.14,1.52.3,2.26,1.66,2.29.95.89-.08.63,1.79,3.71,2.08,2.64.26,1.43.55.42,2,.25.77.7,1.2.13.24.74,1,.3,1.39,1.47.36,1.3,2.44-.19,2.73-.28-.2.5,3.23,1.23,4.9,1.76h6v-1h3.72l.78.88,1.09.79,1.28,1.09.71,1.3.53,1.35,1.11.74,1.79.74,1.35-1.94,1.75,0,1.52,1,1.08,1.66.74,1.43,1.26,1.37.48,1.68.6,1.13,1.68.73,1.52.52.83-.07-.4-.81-.11-1.15,0-1.65.5-1.09,1.17-1.15,2.14-1.05,1.95-1.81,1.8-.58,1.33-.17,1.56.56,1.88-.3,1.6,1.29,1.55.08.8-.47.8.36.41-.32-.46-.48,0-1-.38-.66.89-.38,1.64-.17,1.9.28,2.43-.32,1.34.62,1,1.14.39.13,2.16-1.12.84.37,1.67,2.05.61,1.34-.45,1.61.32.94,1,1.84,1.14,2,.82.54.33,1,1.06.29.64-.3.54-1.45.09-.92.07-1.61-1-2.79v-1.05l-1-1.72-.72-2.11-.38-1.72.33-1.77,1-1.48,1.21-1.2,2.35-1.65.31-.86,1.08-.94,1.08-.17,1.4-1.51,2.22-.78,1.36-1.93-.29-2.65-.23-.93-.61-.18-.09-2.56-1.48-.87,1.42.42-.46-1.73.41-1.18.26,2.27,1.09,1-.67,1.84.2.1,1.21-2.15.69-1,0-1-.54-.49-.44-1.49.7.69.48.15.16.7,1.56-2.13.47-2-.64-.13.65-.78-.06.34h1.37l3-.84-.64-.54-3.15.54,1.79-.82,1.25-.14.93-.15,1.58-.49,1,.05,1.44-.47.17-.82-.64-.64.22,1-.89-.07-.71-1.52,0-1.54.37-.66,1.13-1.74,2.27-.88,2.2-1,2.29-1.45-.37-1-1.4-1.72Zm-183.29-38.6-1.15.62-1.95,1.42.33,1.85,1.09,1,2.15-1.49,1.86-1.89-.91-1.25ZM117.44,210l1.56-1,.17-.52-1.73-.51Zm6.5,11.76-2.12.74,1.3,1.16,1.41.8,1.31-.67-.2-1.64Zm74.48,24.86-2.06.29-1-.47-.13,1.16.4,1.58,1.09,1.12.79,1.63,1.3,1.61h.85l-1.86-2.84ZM145.84,339l-.76-.21-.21.2,0,.14.24.19.37.48.72-.16.18-.28Zm-2.28-.41,1.14.07.07-.24-1.05-.1Zm4.5,2.52-.38-.2-.82-.38-.16,0-.12.22.14.44-.37.37-.11.25.35.83-.06.63.54.32.31-.37.69-.36.84-.48.06-.12-.55-.8Zm-6-3.93-.57.31.08.09.28.52.75.09.15,0,.11-.13-.62-.76Zm-3.37-1.2-.33.23-.11.17.72.42.25-.23,0-.53Z"
              id="US"></path>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="506.99 244.15 508.28 241.11 507.6 239.2 504.45 240.47 504.75 242.04 506.99 244.15"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="484.98 284.71 482.56 283.39 481.78 284.02 477.83 282.7 476.98 281.56 473.51 281.47 471.73 281.62 469.45 281.11 466.56 281.14 463.94 280.6 460.91 282.72 461.78 283.99 461.67 286.04 461.77 287.01 462.19 288.03 462.25 289.23 461.8 290.92 461.64 292.05 460.79 293.05 460.62 294.86 461.13 295.89 462.1 296.14 462.29 297.81 461.96 299.9 463.07 299.61 464.21 299.99 465.06 299.29 467.07 299.71 467.68 301.24 468.47 302.13 469.52 302.35 470.34 301.35 471.68 300.42 473.73 300.46 476.45 300.43 477.97 298.37 479.59 297.83 480.05 296.07 481.29 294.85 480.46 293.28 481.28 291.01 482.61 289.46 482.8 288.51 485.55 287.92 487.58 286.01 487.47 284.33 484.98 284.71"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="546.37 204.17 544.44 200.45 545.88 196.04 543.39 189.95 545.37 185.76 542.08 181.94 542.39 177.81 543.3 173.53 540.55 171.04 537.22 173.16 536.16 177.64 534.12 180.27 531.82 178.84 529.02 179.14 526.63 175.97 525.35 177.56 524.01 177.81 523.7 181.7 519.66 180.76 519.09 183.98 517.03 183.97 515.61 187.98 513.46 194 510.14 201.27 510.92 202.97 510.17 204.93 508.05 204.84 506.65 209.36 506.79 215.51 508.15 217.79 507.44 222.94 505.66 225.86 504.71 228.27 506.34 234.01 508.14 238.45 508.82 242.06 511.31 241.88 512.52 238.86 515.12 239.23 516.34 235.59 517.16 228.83 519.39 227.86 521.36 223.1 519.31 220.69 517.78 217.58 519.35 211.15 523.49 207.06 526.9 203.13 526.56 200.06 528.64 196.47 532.33 194.99 535.32 197.45 535.54 199.62 534.11 200.69 529.2 206.06 527.26 209.07 526.23 211.81 527.27 215.95 526.8 220.33 528.87 221.76 530.12 224.11 533.61 223.2 537.38 221.62 541.28 221.28 545.87 215.61 547.86 212.97 548.67 210.59 545.49 207.34 546.37 204.17"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="500.86 287.47 501.57 285.26 501.21 282.77 499.82 283.88 499.39 284.95 499.88 286.89 500.86 287.47"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="469.09 242.22 470.24 240.43 470.95 241.48 470.17 243.16 470.68 244.18 473.28 244.82 473.31 244.88 474.75 247.14 474.44 249.23 471.25 248.91 470.84 251.25 472.02 253.15 469.78 254.23 470.38 255.6 473.73 256.18 473.75 256.18 471.83 256.92 468.68 260.47 469.82 261.14 471.33 259.86 473.31 260.24 474.73 258.67 475.73 259.33 479.38 258.41 482.25 258.44 484.18 256.65 483.32 254.87 484.41 253.85 484.67 251.61 482.07 250.94 481.46 249.53 480.14 245.39 478.67 244.8 476.75 240.37 476.59 239.97 474.37 239.73 476.3 236.26 476.85 233.03 474.5 233.01 472.32 233.56 474.61 229.18 472.04 229.49 470.33 229.17 468.66 232.47 467.88 236.57 468.96 238.55 469.09 242.22"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="536.33 303.91 534.73 303.73 533.07 303.88 531.9 302.99 531.5 304.11 534.11 304.63 534.09 305.05 537.18 304.83 537.45 304.06 536.28 304.37 536.33 303.91"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="462.69 255.35 466.49 253.3 468.12 250.15 467.76 247.58 468.91 245.06 466.62 242.78 464.82 242.93 465.26 244.92 464.82 246.88 464.81 246.88 465.25 244.91 464.81 242.92 463.19 244.66 460.27 247.53 461.39 251.18 459.65 254.83 462.69 255.35"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="512.72 296.45 510.53 296.75 508.02 296.51 507.73 297.9 510.72 299.27 511.81 299.56 513.45 300.56 513.9 299.19 513.58 298.36 514.35 296.23 512.72 296.45"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="499.75 288.84 498.57 288.7 499.06 290.3 499.15 293.65 499.96 294.38 500.83 293.46 501.8 293.64 502.1 289.96 500.82 287.95 499.75 288.84"></polygon>
            <path
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M543.59,275.44l-1,.49-1-.55-.39-1.4.23-1.32-.07-1.37-1.24-1.87-.68-1.34-.67-.94-.65-.31h-.9l-.54.75-1.59.31-.73.49-1-.78H532l-1.33-.35-.92.68-.16-.86-1.18-.87.42-1.31.59-.85.46.19-.55-1.47,1.95-2.76,1.07-.39.23-.95-1.08-3,0-1.54-.67-1.62,1.29-.72,0-1.42-.6-1.36-.09-1.6,2.07,0,2.33-1.38.49-2.08,1.76-1.2-.2-1.68,1.3-.64,2.32-1.48-.7-2.29-.18-1.9-1-.91.92-1.27-.64-3.8,1.53-2.4-.33-.74-2.21.13-2.33-.7-2.7.62-2.72,1.17.19,2.38,1.37,1.45.78-.51-.25,2.39-.41,3.05-1.72.08-1.7-3-2,1.36-1.06,2.48-.07,2.92.46,3.18,2.24.66,1,.59-.23,1,.17.94-4,.06-2.64-.42-2.07,0-.16-.9-2.13-.63-2.71,1.26-3.35,1.69L511.34,248l-1-1.16-2.42-1.44-1.2,1-2.18.69,0-1.3-2.17-.86,0-1.44-.58-1.83,1.54-2.74.64.42.53-1.46-1.17-.58-.26-1.09.64-1.29.07-2.05L502,234l-.75,1.09-1.89.24-.62,1.18-.36,1.06.07,3.92.87,2.08.1,2.1.49,1.37-1.46,1.78-.4-.79-1.79.2-.42.76-1.79-.1-2.93,1.49-1.88,5.16-1.1,1-1.72.67h0l-1.88.69-.64,2.76-5,2.58-2-1.42.68,3.7-3.61-.83-2.78.7.21,2.35,3.29,1.23,1.58,1.6,2.21,3.26-.4,6L477,281.55l.85,1.14,3.95,1.32.78-.62L485,284.7l2.49-.37.24-1.75,3.12-.95,4.24.79,1.94-1.66.24-1.27h0l-.25,1.29.9-.22,1.24-1.37,1-.41,1.74,1,1.07.34.67,2.91,1.46,1.67,2,1.88,1.67,1.28,1.59.19.92,1.14,1.38.51.63,1.21.89.35.66,1.4.83,1.6-.46.59-.44,1.46v.83l.9-.21,1.15-2.34.89-.16.25-1.44-1.55-1,.9-1.81,1.87.46,1.19,1.3.4-1-.22-.52-1.84-1.47-1.57-.86-1.92-1,.6-.57-.52-.63h-1.68l-2.39-2.33-1.08-2.43-2-1.49-.7-1.52.26-.86-.13-1.51,1.75-1.08,1.7.44h0l-.47.28-.08,0,0,1.06.64,1,.65-1.31,1.38.47.05,1,1,1.25-.44.23,1.81,2.18,2,.88,1.25,1.05,2,1.07.24-.49-1.9-1.1-.81-1.23-.82-.65-1-1.11-.46-.93-1.06-1.4.45-1.25.78.69.45-.62,1-.07,1.84.5,1.48,0,1,.67.82-1.14-.68-.87-.52-1.19,1.65-.8,1.34.13,1.16,1.21.24,1,1.3.72.17,1.25,1.25.87.67-.67.54.37-.5.51.39.52-.53.67.19,1.09,1,1.27-.82.91-.36.92.23.35-.36.41,1.08.92.16,1.89,1.58.09,1.72-.79,1.51,1,1.94-.27v0l-1.95.27-1.51-1-1.73.78-1.58-.09-.4.09-.36.5-1.16-.05-.82.62-1.4.25,0,.74-.7.41-.13.91-1,1.35.14.78,1.09.88-.13.49.13.19.84,1.26.93,0,1-.21.43.14.72.06-.3.48-.42-.13-.52-.35-.45.12-.2.31-.42-.07-.28.36-.44.4.37.72.32.07.32.29.27.57-.4.43.29.77.48.42.19-.21-.09-.64h.49l.43.79-.08.57.34.23.2-1h.44l.34,1h.45l-.92-3,.76.53.71-.15-.64-1.38,1-.16,1,.88,0-1.53-1.06-.78-1.2-1.27.82-.6-1.08-1.3-.48-1.67L530,290l1.13,1.44h1.19l1.09-.46-1.48-1.57,2.6-.74,1.11.27,1.31.08.52-.32.66-1.78-1-.71v-.05l2.19-.9,1.84.39-.68-1.65.78-2.09,1.11-1.22.6-3.6.65.28,1-.65,0-.78ZM505,270.91l-.25.59-1.3-.44-.17,1.28-.95.52-1.58-.39-.47,1.25-1,.09-.38-.48-1.2,1-1,.14-.93-.66-.09.87.64,1.15-.74.92.54,2.32h0l-.55-2.32.74-.93-.63-1.15.09-.86-.74-1.36-1,.49,0-1.41,1.57-1.76-.07-.81,1,.3.59-.55.27-2.28-.26,2.28,1.82,0,.44-.69,2.3,1,.08.57-.33.77,1,.57,1.1.08,1.3.44.25-.59,2.12-.55v0Z"></path>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="553.78 304.2 555.23 303.08 553.28 303.86 551.74 303.82 551.43 304.46 551.28 304.47 550.26 304.56 550.75 305.61 551.8 305.95 554.01 304.89 553.94 304.69 553.78 304.2"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="601.75 327.85 602.03 327.42 602.24 326.43 601.97 326.23 601.34 327.04 601.75 327.85"></polygon>
            <polygon
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              points="539.39 289.43 540.31 288.55 542.86 288.4 543.25 287.7 541.38 286.78 541.12 285.68 539.28 285.3 537.09 286.2 538.14 286.96 537.47 288.74 536.96 289.06 536.93 289.64 537.6 290.95 539.39 289.43"></polygon>
            <path
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#011d3b"
              d="M651.91,284.27l-1.07-1-3.18-.31-3.56-.07-.78.32-3.06-1.23-1.22.61-.33,1.71-3.53-1-1.41.41-.48,1.27-1.23.54-2.83,2-.94,2-.8,0-.58-1.34-2.73-.09-.44-2.34-1,0,.16-2.91-2.56-2.14-3.68.23-2.52.43L612,278.64l-1.75-1.13L607,275.34l-.4-.27-5.52,1.8.08,10.81-1.1.14-1.5-2.25-1.45-.81-2.44.61-.94.95.67,1.85.21-2.09,1.73-.73.61,1.63,1.57,1.71-1.89.91-2-.7-.47,2.37,1.42.17-.55,1.89,1.68.94-.32,2.85.4,1.91-.21.62-3.35.71-3-.46-1.49-1.35-2-.56-.68-2-.53.13-1.34-1.43.74-1.36-.63-.82-.8.21-2.54,2-.78.08-1.47-.36-1.08-1.27-.34-1-1.47.79.55,2.6-.56-2.6,1.47-.79-.84-.81-1.59-.7.21-1.36-.37-1-2.07-1.4-2.28.14-2.54,1.48-1.84-.25-2.5.44-3.08-1.1-3.75-2-3.55.06-2.51.81-2.57,1.86-4.09-.38-.9,2.15-3.31.12-2.38,2.66,1.36,1.31-1,2.13,1.57,1.5,1.27,2.66,2.34,0,2.08,1.41,1.48-.31.5-1.1,2.31.09,1.74,1.42,3.26-.3,1.47-1.53,1.8.62,1.31-.23-.81,1,.79,1.2.57-.58.57-.58.12-1.48.7.52,2.37-.75,1.14.51h0l-1.14-.5-2.37.74-.69-.52-.13,1.49-.57.58-.57.57-.52,1.08.19,2,0,.09-1.07,1.82-.76,2.09-.06,0-.31.65-.43,1.91-.57,1.17.15.14-.62.83,1.4,4.25,1.07-4,0-1,.32-.73v-1.54l.38-.81,2.38,1,4.2-2.7.87,3.09-.41.37-4.3,1.26,2.15,2.5-.72.41-.35.84-1.63.33-.52.89-.93.75-2.39-.39-.26,1-.1.85-.33,1.33h1.07l1.09,1.65,1.31,1.93.83,1.78.63.52.6,1.23-.12.53.71,1.34,1.16.49,1,.91,1.23,2.57-.09,1.37.25,1.59,1.42,2.18,1,.37,1.48,1.56.61,1.84,1.14,1.88,1.1.8.17.89.65.68.28,1,.09,1-.26.43.22,1-.43.1.62.92.42,1.62.35.65-.06,1.2.56,1.28,1.48.1.69-.29,1.06.05.33-.56.57-.16.46-.57.55-.13,1.8-.11,1.37-.42,1.25-.92.64.13.94-.11,1.92-1.56,3.43-1L593,351l0-.76.41-1,1.56-.61h0l1-.12,1.44-.75,1.19.21,1-.62v-.9l.84-.57,1.33,0,.49-.48.21-1.09,1.34-.84h1l.19-.27-.26-1.52.35-1.15.44-.54,1,.12.81-1.56.89-.75.35-.65.78-1.37v-.51l-.76-.29-.58-.77-1-1.33-1.27-.42-1.58-.3-1.2-.85-1-1.6h-1.1l-.17,1.53.38.32-1,.46v1l-.63,1,0,.93v0l-.43.48-6.45-1.17-.82-2.35-.09-.54-.4-.9.47-1.38,0-1.39-.65-.74-.58.26-.59,1.24.15,1.71-.32-.57-.29-.77-.62-.67-.27-.8.21-.78-.13-1-1.46-1-.37-.85-1-.55-.84-2.08-1.52.06-.53-1.16-1.92-.24,1.58-2.35,1.45.2,1.27.12.8-1,1.36.82,1.16-.39,1.58,3.26,1.43,2.31,2.07.68,2.16,1.85,2.63.79,2.15-1.16,1.66-.43,1,.43.92,2.92,2.42.31,2.34.54,4,.71,3-.33,3.49,0,4-.44,1.66,1.79.64,1.68,1.57.59,1.43-1.56h4.72l-.42-2-1.21-1.2-.24-1.83-1.41-1.07,2.37-2.52,2.49.18,2.24-2.54,1.35-2.49,2.08-2.48,0-1.79,1.83-1.46-1.74-1.24-.74-1.73-.76-2.25,1.05-1.12,3.26.64,2.39-.39,2.07-2.19-3.53-1.07-.63-2-1.59-1.25-.38-.77-.32-1.54.07-1.06-1.3-.61-.71.27-.54-2.55.61-.63-.3-.65,2.05-1.32,1.48-.55,2.27.38.81-1.8,2.76-.34.76-1.13,3.39-1.55.29-.66Zm-83.6,15,1.16,0,2.44-.41.92-.42,2.49.34.75.69,1-.46-1.17-2.15.42-.84h0l-.41.84,1.17,2.16-1,.45-.76-.68-2.49-.35-.92.42-2.44.41-1.16,0Z"></path>
            <text
              fontWeight="500"
              fontFamily="Avenir-Medium, Avenir"
              fill="#011d3b"
              fontSize="19.31"
              transform="translate(387.31 290.51)">
              Eu
              <tspan
                letterSpacing="-0.02em"
                y="0"
                x="22.53">
                r
              </tspan>
              <tspan
                letterSpacing="0em"
                y="0"
                x="29.33">
                ope
              </tspan>
            </text>
            <text
              fontWeight="500"
              fontFamily="Avenir-Medium, Avenir"
              fill="#011d3b"
              fontSize="19.31"
              transform="translate(451.33 350.73)">
              Middle East
            </text>
            <text
              fontWeight="500"
              fontFamily="Avenir-Medium, Avenir"
              fill="#011d3b"
              fontSize="19.31"
              transform="translate(639.26 458.39)">
              Australia
            </text>
            <text
              fontWeight="500"
              fontFamily="Avenir-Medium, Avenir"
              fill="#011d3b"
              fontSize="19.31"
              transform="translate(753.45 333.96)">
              China
            </text>
            <text
              fontWeight="500"
              fontFamily="Avenir-Medium, Avenir"
              fill="#011d3b"
              fontSize="19.31"
              transform="translate(172.71 308.05)">
              USA
            </text>
            <circle
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="284.31"
              cx="465.82"></circle>
            <circle
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="302.35"
              cx="224.63"></circle>
            <circle
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="345.07"
              cx="570.85"></circle>
            <circle
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="327.85"
              cx="737.82"></circle>
            <circle
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#fff"
              fill="#e42b16"
              r="6.98"
              cy="453.31"
              cx="729.29"></circle>
          </svg>
        </p>
        <p>&nbsp;</p>
        <ul>
          <li>
            <strong>USA</strong>&nbsp;– Largest market in the world that is
            closest to the style of the Australian market, so that improvements
            in building or other infrastructure construction will often
            translate from the Australian market to the US market.
          </li>
          <li>
            <strong>China</strong>&nbsp;– A large economy continually
            undertaking substantial infrastructure projects and quite open to
            innovative construction technology.
          </li>
          <li>
            <strong>Middle East</strong>&nbsp;– As we can protect 6 countries in
            a single Gulf Cooperation Council patent application and these
            countries expend large amounts on infrastructure yet have a
            requirement for high quality and innovative developments.
          </li>
          <li>
            <strong>Europe</strong>&nbsp;– Over 20 countries can be protected by
            a single European patent application and this forms the 3rd largest
            economic region in the world
          </li>
          <li>
            <strong>Australia</strong>&nbsp;– Particularly if this is your pilot
            market and the infrastructure is required in fields that are related
            to commercial projects like mining, education, health, transport and
            telecommunications.
          </li>
        </ul>
      </div>
      {/* </div> */}
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
            <h4 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:mb-8 lg:mb-16 dark:text-white md:text-4xl">
              Some of our civil engineering and construction clients include:
            </h4>
            <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-4 xl:gap-8 sm:space-y-0 md:mb-8 md:mt-12">
              <Link
                href="#"
                className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                <a>
                  <Image
                    loader={myLoader}
                    src="logo-slingshot-haulage.png"
                    alt="Slingshot Haulage Pty Ltd logo."
                    width={255}
                    height={191}
                    className="mx-auto mb-4 rounded-full"
                  />
                </a>
              </Link>
              <Link
                href="#"
                className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                <a>
                  <Image
                    loader={myLoader}
                    src="logo-wombat-timbers.png"
                    alt="Wombat Timbers Pty Ltd logo."
                    width={255}
                    height={191}
                    className="mx-auto mb-4 rounded-full"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
