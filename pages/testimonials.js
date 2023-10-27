import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Testimonial from '../components/testimonial'

export default function Testimonials() {
  const data = [
    { title: 'About us', link: '/about' },
    { title: 'Client Testimonials', link: '' },
  ]
  return (
    <Layout
      navData={data}
      bannerData={true}
      layout={2}
      title={
        'Clients share their thoughts on our patent & trade mark attorneys'
      }
      active={'Values'}
    >
      <Head>
        <title>
          Client testimonials on Baxter IP&apos;s intellectual property services
        </title>
        <meta
          name="description"
          content="Clients reflect and share their thoughts on how the intellectual property services of Baxter IP has helped protect their innovations and brands."
        />
        <link rel="canonical" href="https://www.baxterip.com.au/testimonials" />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E5%8F%8D%E9%A6%88"
          hrefLang="zh"
        />
      </Head>
      <div className="mt-10"></div>
      <Testimonial
        content="It was a pleasant time to see Dr. Qi Zhang, the attorney at Baxter IP,
          Patent &amp; Trade Mark Attorneys in his office a few years ago. I
          should say he is a kind and very professional attorney in dealing with
          cases in IP: Patent &amp; Trade Mark field. He and his team are helpful
          and reliable. Thank Qi Zhang and his team"
        name={'Michael Chu'}
      />

      <hr />

      <Testimonial
        content="Not only did they do a great job. The price was reasonable and the staff
          actually cared and followed up. As a customer, every call was answered.
          Mike Biago was professional and effective. Highly recommended to anyone
          needing this type of service."
        name={'Lychee Chen'}
      />

      <hr />

      <Testimonial
        content="Great guys! The price may be a bit high, but always willing to offer
          FREE Discussion Events."
        name={'Bill Dekon'}
      />

      <hr />

      <Testimonial
        content="I consulted with Mike Biagio: he guided me through the whole process
          really well and the next steps I need to get my invention and idea
          patentable. Thanks! I highly recommend Mike to anyone looking to fully
          understand the patent process &amp; the bottlenecks that need changing
          to get their product or invention to the market with a patent."
        name={'Anthony Atanasov'}
      />

      <hr />

      <Testimonial
        content="Seán was extremely diligent, responsive and enthusiastic. We worked
          together very well in terms of attempting to navigate a fairly complex
          and abstract scientific provisional. He was more than happy to put in
          the extra hard work to understand complicated topics, as well as refine
          the provisional such that it met an excellent scientific standard."
        name={'Peter Nguyen'}
      />

      <hr />
      <Testimonial
        content="Seán Klinkradt is an incredible patent lawyer. The professionalism, the
          speed of service, the detail, along with the exceptional drafting of the
          patent requested was just above and beyond! I would highly highly
          recommend BaxterIP to anyone seeking incredible work! Thank you for
          working with myself and the NewWaveAg Team, (we) will always return here
          to have any IP work completed."
        name={'Lewis Thomo'}
        body={
          'Founder of <a href="https://www.nwaa.com.au/" style="color:#7D67D8;"  className="links" target="_blank" >NewWave Agriculture Australia</a>'
        }
        href="https://www.nwaa.com.au/"
      />

      <hr />

      <Testimonial
        content="Jarrod was an absolute pleasure to deal with. Would highly recommend
          Jarrod for any IP/trademarking needs!!"
        name={'Ethan Singer'}
      />

      <hr />

      <Testimonial
        content="Seán Klinkradt is an incredible patent lawyer. The professionalism, the
          speed of service, the detail, along with the exceptional drafting of the
          patent requested was just above and beyond! I would highly highly
          recommend BaxterIP to anyone seeking incredible work! Thank you for
          working with myself and the NewWaveAg Team, (we) will always return here
          to have any IP work completed."
        name={'Marg Egan'}
        body={
          'of <a href="https://www.icusmallanimalrugs.com.au/" style="color:#7D67D8;"  className="links" target="_blank" >ICU Small Animal Rugs</a>'
        }
        href="https://www.icusmallanimalrugs.com.au/"
      />

      <hr />

      <Testimonial
        content="I must say that the experience that we had with Baxter IP has been
        outstanding. We found in particular Mr. Sean Klinkradt very
        professional, available to talk to and very generous with his time to
        explain the process very thoroughly. I strongly recommend this team and
        wish them all the best."
      />

      <hr />

      <Testimonial
        content="Love their service, very professional and responsive. Strongly
        recommended if you are looking for any IP service in Australia."
        name={'Leann Fang'}
      />

      <hr />

      <Testimonial
        content="Joanne is very professional and helpful. Highly recommended."
        name={'Emily Li'}
      />

      <hr />

      <Testimonial
        content="Exceptional expertise in trademark and fantastic result received! Have
        been working with Baxter IP for quite a few months (due to the length
        trademark dispute process) and it has been a pleasant journey even under
        the high stress of the dispute. Always on time, responsive, patient,
        professional, knowledgeable and truly work for the clients. The final
        outcome is terrific and the team has helped my company won the dispute.
        Best wishes to the company which is like a rare gem!"
        name={'Chris T'}
      />

      <hr />

      <Testimonial
        content="After dealing with few useless law firms and lawyers I almost lost the
        trust with these so called law firms until I found Samantha Waldon at
        Baxter IP. Professional, reliable and most importantly knowledgeable.
        Highly recommended Sam and her team for anyone dealing with complicated
        IP matters."
        name={'Dan De Silva'}
      />

      <hr />

      <Testimonial
        content="I was impressed by the level of service and am grateful for the advice
        received. IP matters."
        name={'Scott'}
      />

      <hr />

      <Testimonial
        content="Very professional service! We were suitably impressed with Mike's
        knowledge and ability to interpret our questions relating to the patent
        we enquired about. Great work, team! Fast response!"
        name={'Nathan Noakes'}
      />

      <hr />

      <Testimonial
        content="Really professional and efficient service, Joanne helped me through
        every aspect of my business' trademarking needs!!"
        name={'Harry Mavrolefteros'}
        body={
          'of <a href="https://firsteducation.com.au/" style="color:#7D67D8;"  className="links" target="_blank" >First Education</a>'
        }
        href="https://firsteducation.com.au/"
      />

      <hr />

      <Testimonial
        content="Joanne and her team members; Martin, Warren and Nikki are amazing people
        to work with. I and my company are highly impressed with their
        professional service. I recommend people to consult them if you are
        seeking IP/Trademark related services. You will be pleased."
        name={'Hira Kandel'}
        body={
          'of <a href="http://www.eplanet.com.au/" style="color:#7D67D8;"  className="links" target="_blank" >E-planet</a>'
        }
        href="http://www.eplanet.com.au/"
      />

      <hr />

      <Testimonial
        content="Very responsive and experienced. Excellent service."
        name={'Eric Lowenstein'}
        body={
          'of <a href="https://tego.com.au/" style="color:#7D67D8;"  className="links" target="_blank" >Tego Insurance</a>'
        }
        href="https://tego.com.au/"
      />

      <hr />

      <Testimonial
        content="Very responsive and experienced. Excellent service."
        name={'ThreeBestRated'}
        body={
          'of <a href="https://threebestrated.com/" style="color:#7D67D8;" className="links" target="_blank" >ThreeBestRated</a>'
        }
      />

      <hr />

      <Testimonial
        content="Martin Earley was responsive, lovely to deal with and smart. Highly
        recommended. (Edit) Another year on and the service is still excellent.
        Smart passionate people make the patenting process much more engaging
        and enjoyable. Thanks so much for the support so far!"
        name={'Jay Dimitri'}
      />

      <hr />

      <Testimonial
        content="I am very grateful for all the work Naleesha has done on my provisional
        patent application and PCT draft. Chris has also provided valuable
        advice throughout this process. Thanks Baxter IP!"
        name={'Sam van Bohemen'}
      />

      <hr />

      <Testimonial
        content=" Dear Warren,
        <br />
        When the first time I called you up and had a chat over the phone, I
        knew that I was dealing with the right person to file my patent
        application. You have proven me correct.
        <br />
        You have always been cooperative and attended to all the relevant issues
        professionally to provide me with an excellent draft; thank you!
        <br />I look forward to working with you, and hopefully, file more
        patents in the field of skincare."
        name={'Manoj Jain'}
      />

      <hr />

      <Testimonial
        content="Very pleased with the patent that Mike Biagio put together - especially
        given all the chaos going on right now! Thanks Baxter!"
        name={'Mark Calleija'}
      />

      <hr />
      <Testimonial
        content="Isabelle was my contact and she was very professional and efficient."
        name={'Tee'}
      />

      <hr />

      <Testimonial
        content="Great advise, very professional!"
        name={'Mohammed Issak'}
      />

      <hr />

      <Testimonial
        content="I consulted with Joanne Li for trade mark matters. She is professional
        and a good listener. I told her my ideas about my trade mark. She
        understood my needs quickly and provided me with a few options to
        consider. Unlike other agents who are always pushing me to make a
        payment, she explained each option to me in detail. Another thing which
        I really appreciate is that Joanne always replies to messages or calls
        promptly, on the same day! I highly recommend Joanne Li and Baxter IP."
        name={'Lan Liu'}
      />

      <hr />
      <Testimonial
        content="Baxter IP (Mr. Martin Earley &amp; Mr. Warren Chandler) helped us (we
          are located in the US) with the reverse domain name hijacking, we have
          been fully successful in overcoming the domain name dispute on our AU
          Domain. They were able to prove deligently and the WIPO Member panelist
          agrees that the Complaint amounts to a case of reverse domain name
          hijacking in that they are trying to take our domain without a right to.
          Highly recommend any one this situation, even if you are located outside
          AU."
        name={'Prakash Kumar'}
      />

      <hr />
      <Testimonial
        content=" It's been a great experience working with Dr Qi Zhang on our patent
        application. His strategic thinking on patent and business strategies
        make it possible for us to maximize the value from our IP investment. Dr
        Qi Zhang is not a traditional patent attorney, but a trusted advisor!"
        name={'Zemin Dong'}
      />

      <hr />

      <Testimonial
        content=" Mike Biagio won our business upon our very first meeting - extending to
        us the courtesy of a free 2 hour &quot;crash course&quot; on how the
        complex world of patents works, breaking everything down in
        layman's terms. Since then, we've had no regrets: Mike is
        always helpful, always professional, and an absolute pleasure to work
        with. I would happily recommend his services."
        name={'George Roditis'}
      />
      <Testimonial
        content=" Mike Biagio won our business upon our very first meeting - extending to
        us the courtesy of a free 2 hour &quot;crash course&quot; on how the
        complex world of patents works, breaking everything down in
        layman's terms. Since then, we've had no regrets: Mike is
        always helpful, always professional, and an absolute pleasure to work
        with. I would happily recommend his services."
        name={'George Roditis'}
      />

      <hr />

      <Testimonial
        content="I had the pleasure of speaking with Mike Biagio, he was amazing, really
        helpful and accomodating. He took the time to explain everything in
        detail with me, the process, and what it would involve. I would highly
        recommend, even if you have questions or unsure of what assistance you
        require."
        name={'YVEARAY PTY LTD'}
        body={
          'of <a href="https://www.yvearay.com/" style="color:#7D67D8;" className="links" target="_blank" >YVEARAY PTY LTD</a>'
        }
      />

      <hr />
      <Testimonial
        content="It has been a pleasure to interact with staff from Baxter IP. There was
        fantastic service provided and we very much appreciate the time spent on
        our questions."
        name={'Cole Hendrigan'}
      />

      <hr />

      <Testimonial
        content="When I first spoke with Paul Goodall regarding my idea, I knew I was in
        good hands. He explains the process quite well and he is very patient in
        answering all of my queries. He replies to my emails or calls promptly.
        He is not someone who charges you every time you talk to him or send you
        an email. He provides legitimate services and he is very professional in
        every angle. His sound advice is not to earn money but to further
        protect your idea. He will let you know if the process is not worth
        spending your money on to keep your costs down. He is not there to take
        your money but to see you succeed.
        <br />
        Thank you so much, Paul, for your all help and support and for being
        very patient with me. Always remember that Baxter IP and especially you
        are a big part of Koala Grippers&rsquo; journey. Thank you!"
        name={'Koala Grippers'}
      />

      <hr />

      <Testimonial
        content="I am direct and sometimes accused of being blunt, so here it is. Apart
        from having a father and other friends and family who have been and are
        in the legal profession, my personal experience dealing with solicitors
        has been limited in my life to dealing with matters of family law. I
        have been completely disappointed and underwhelmed by the way in which
        they have not been open with me as a client. Unfortunately, the family
        law experience has been much like dealing with real estate agents. You
        just never know if they are actually on your side.
        <br />
        In sharp contrast, dealing with Baxter IP has been nothing but a
        pleasure. They have been only too willing with their time and advice and
        have been completely transparent and honest about potential outcomes and
        scenarios, positive and negative, whilst ensuring we had the full
        picture. An absolutely great experience for us as we register our first
        patent and trade mark. I would highly recommend Baxter IP to anybody who
        is seeking the utmost professional advice and support in this area of
        the law."
        name={'Damien Pound'}
      />

      <hr />

      <Testimonial
        content="A prompt and professional experience, thanks again Martin, Warren and
        the team at Baxter IP!"
        name={'Elie Zoghaib'}
      />

      <hr />

      <Testimonial
        content="In my career as an industrial designer, entrepreneur and engineer, I
        have had the opportunity to work with many experts in the field of
        intellectual property. Many attorneys are trained to write and file
        patents and/or trade marks, however you eventually realise that the real
        value in a patent or a trade mark lies in what you can do with it; which
        requires strategic thoughts borne out of a comprehensive understanding
        of you and your invention, along with clear communication when
        disseminating known and unknown information. This is where I have found
        Baxter IP, in particular Naleesha Niranjan, an exception. Rather than
        simply treating a patent in isolation, Naleesha worked with me to
        understand what I hope to achieve with it, and provided insights on how
        to realise its fullest potential. In a crowded world of IP attorneys who
        simply execute, Naleesha stood out as someone who not only demonstrated
        exceptional legal ability and technical understanding, but was able to
        clearly communicate creative insights which will serve as inspiration
        for future product development."
        name={'Patrick B'}
      />

      <hr />

      <Testimonial
        content="Thank you Naleesha for all of your help with my patent and trade mark.
        You have been absolutely wonderful and went above and beyond. I would
        absolutely recommend your services to anyone that needs to protect their
        design both in Australia and overseas. Thank you again."
        name={'Casey Holdsworth'}
      />

      <hr />

      <Testimonial
        content="Naleesha from Baxter IP clearly outlined the patent process and the
        options available to me. Her attention to detail throughout the
        consultation process gave me confidence that my IP would be expertly
        protected."
        name={'Aaron Pipkorn'}
      />

      <hr />

      <Testimonial
        content=" It was awesome working with you guys. thanks for all the help!!"
        name={'Dilpreet Bhatia'}
      />

      <hr />

      <Testimonial
        content="High quality service! Isabelle helped me to have the trade mark
        registered and provided follow up services as well. Well done, thank you
        guys! Highly recommend!"
        name={'iCake Le Reve Cafe'}
        body={
          'of <a href="https://www.icakemelbourne.com.au/" style="color:#7D67D8;" className="links" target="_blank" >iCake Le Reve Cafe</a>'
        }
      />

      <hr />
      <Testimonial
        content=" Great to deal with from start to finish of Patent application.Very
        thorough in ensuring all aspects covered. Thanks, Trevor."
        name={'Trevor Jones'}
      />

      <hr />

      <Testimonial
        content="Today I had my first meeting with a lawyer who specialised in trade mark
        registration. A very beautiful girl arrived and I didn't think she
        was the lawyer. She was very kind and very professional, very well
        explaining all the various scenarios and costs involved for the
        registration of an international brand. In addition, she put me on a
        conference call with a colleague of hers who specialized in copywriting,
        who was also very, very helpful. Without any doubt I suggest working
        with Baxter IP and in detail with the lawyer, Joanne Li."
        name={'lessandro Masini'}
      />
      <hr />

      <Testimonial
        content="I had a wonderful experience with Baxter IP. I would recommend them to
        anyone looking to protect their business/idea. Paul Goodall was so
        helpful."
        name={'Sarah Hetherington'}
      />

      <hr />
      <Testimonial
        content="I feel it is important to pass on a very positive message to any
        prospective client that may be considering your specialised services.
        After talking on the phone with Martin Earley, I could easily see how
        professional he is. I called at closing time and 5 minutes into our
        conversation regarding my unique intellectual property inquiry I
        mentioned I had no money. At no time did he make feel as though I was
        wasting his time and we spent 46 minutes after hours on the phone
        dealing with various aspects about numerous projects I am currently
        working on. During the entire conversation his only concern was how it
        is he can help me and he did just that at no cost to my self and it
        showed me how passionate he is about intellectual property and it showed
        me how much he cares."
        name={'James Sheffield'}
      />

      <hr />
      <Testimonial
        content="Joanne was very patient and professional, highly recommended."
        name={'Rotus Zhang'}
      />

      <hr />
      <Testimonial
        content="It was a pleasure working with Mike Biagio. My business partner and I
        are very grateful for the care he took with us. We are very appreciative
        of his expert advice, professionalism and openness to explain things in
        detail. He is truly passionate about IP protection and very
        knowledgeable. And also wonderfully approachable and friendly. Would not
        hesitate to recommend his exceptional services to associates, friends
        and family. Many thanks Mike!"
        name={'Kel H'}
      />

      <hr />

      <Testimonial
        content="Very happy to recommend Baxter IP, Especially very grateful to Barry who
        has been amazing with our TM journey always helpful in person and phone
        call conversations. Keeps us updated informing us on all progress and
        development. With Pleasure happy to say we will be continuing to work
        with Barry at Baxter IP."
        name={'Kanun Onsel'}
      />

      <hr />

      <Testimonial
        content="I did interact with a few patent attorneys and this one kept in contact
        while also made contact available through a mutual facebook startup
        group! As a designer, Chris (Baxter) also refereed me to some
        appropriate clients and I really value that sort of networking."
        name={'Vanessa Stefanova'}
      />

      <hr />

      <Testimonial
        content="I have recently consulted with Joanne Li and I am very pleased with her
        service. Her genuine interest in others and enthusiasm for building
        relationships make her a pleasure to work with. Beyond her commendable
        social prowess, Joanne is a phenomenal resource with an intuitive grasp
        of Patent &amp; Trade Mark Attorney procedural knowledge. She is
        definitely an asset to any organisation and her knowledge base in Patent
        &amp; Trade Mark is a credit to her clients. I would highly recommend
        Joanne."
        name={'Bo Pang'}
      />

      <hr />
      <Testimonial
        content="Our company's &quot;mission impossible&quot; IP Grant hundred
        percent benefits from Dr. Qi Zhang's expertised knowledge of
        information technology and hands on experience of IP application. Really
        appreciate the service delivered by BaxterIP and would definitely
        introduce fellow businesses to seek IP solution from BaxterIP."
        name={'Arthur Li'}
      />

      <hr />
      <Testimonial
        content="I wanted to compliment and thank Dr. Qi Zhang for supporting our company
        through a very difficult and extensive IP application process. Without
        his knowledge, experience and guidance I am certain we couldn't
        have obtained our IP. As this IP is in the information communication
        industry it is essential for us to defend our business, hence Dr.
        Qi's advice is a key pillar in our success. Highly recommend him
        and his team!"
        name={'Endre Kollo'}
      />

      <hr />

      <Testimonial
        content="Strong willingness to help and give professional advice without feeling
        rushed was how I felt when dealing with Paul Goodall. No stone was left
        unturned in listening attentively and providing me with the most
        suitable advice to my questions about trade marks. I have been fortunate
        to meet a Trade Mark expert whom I would wholeheartedly recommend. In a
        layman's language, Baxter IP, you rock! Not forgetting Mike Biagio!
        Thank you!"
        name={'Virginia Chung'}
      />
      <hr />

      <Testimonial
        content="I have had a wonderful experience with the team at Baxter IP. They were
        very professional in their approach to handling and filing my
        provisional patent. I highly recommend Baxter IP to anyone seeking a
        high level of professionalism and outstanding results. A special thank
        you to Michael P. and his team, Great work!"
        name={'Virginia Chung'}
      />

      <hr />
      <Testimonial
        content="Had a complicated name to trade mark, Chris and Barry were insane in
        terms of advice and paths to take. Have since used them for product
        patents and same experience, just awesome. Would definitely recommend."
        name={'Pedro Lara'}
      />

      <hr />
      <Testimonial
        content="As an Entrepreneur from Melbourne, I couldn't thank these guys
        enough even if I wanted to! Fantastic Work!"
        name={'Sam Karagiozis'}
      />

      <hr />

      <Testimonial
        content="High quality service! Isabelle helped me to have the trade mark
        registered and provided follow up services as well. Well done, thank you
        guys! Highly recommend!"
        name={'Sales'}
        body={
          'of <a href="https://www.icakemelbourne.com.au/" style="color:#7D67D8;" className="links" target="_blank" >TyTags</a>'
        }
      />

      <hr />

      <Testimonial
        content="To whom it may concern, I recently met with Mike Biagio to discuss
        developing my idea into reality. My experience was extremely pleasant.
        Mike took the time to explain every step of the process very diligently
        and very patiently. I was very impressed with all the services on offer
        as well, I look forward to exploring them as we progress. I look for to
        concluding the rest of this Journey with your support."
        name={'Afram Hanna'}
      />

      <hr />

      <Testimonial
        content="If this is your first stop while looking for trademark or patent
        services, I am sure it will be your last stop too. Joanne and Chris are
        excellent with helping their customers and providing the needed guidance
        and explanations, and answers to customer's questions."
        name={'Ashish Kumar'}
      />

      <hr />

      <Testimonial
        content="I am fortunate to have come across Baxter IP upon which I was referred
        to Warren Chandler. Integrity. Transparency. Committed and moreover the
        passion he possess for his work reflects the efficient workflow of IP
        application with ease and precision. Aside from his professionalism and
        expertise, Warren acts in his client's best interest and has fair
        perspectives on cost management. I look forward to working with him on
        other patents I have in the future. Highly recommended."
        name={'Jenny Lee'}
      />

      <hr />

      <Testimonial
        content="Hi would highly recommend. Excellent advice that gave me full confidence
        I was in safe hands. Great value."
        name={'Wesley Blundy'}
      />

      <hr />

      <Testimonial
        content="Being a small company, it's hard to trust your business to anyone,
        especially when working abroad. Baxter IP has been handling our patent
        prosecution for several years, and we couldn't be happier. Their
        team is well organized, efficient, and always professional. My attorney,
        Mike Biagio is one amazing person! It's hard to find someone with
        the knowledge and experience to help you make the best decisions; Mike
        Biagio is this individual. He is passionate about his work, has great
        integrity, and is a true pleasure to work with; he is someone I trust
        and look forward to many years of business with. Whether you reside in
        Australia or are located abroad and need a great patent firm, let Baxter
        IP earn your business."
        name={'George Partsch'}
      />

      <hr />

      <Testimonial
        content="Baxter IP were fantastic in outlining the various patenting options for
        a pre-revenue start-up. Chris was particularly knowledgeable in the
        fields of electronics and manufacturing, in addition to his expertise in
        IP law. Raven IoT highly recommends their service."
        name={'Henry Blumentals'}
        body={
          'of <a href="https://www.raveniot.com.au/" style="color:#7D67D8;" className="links" target="_blank" >Raven IoT</a>'
        }
      />

      <hr />

      <Testimonial
        content="I had the pleasure of speaking with Quyen (the receptionist) today over
        the phone upon my first contact with Baxter IP on behalf of my company.
        Quyen was extremely professional and showed an in depth understanding of
        the business processes, a definite stand out in her field. I look
        forward to speaking with Quyen again. Well done Quyen!"
        name={'Alexandra Clark'}
      />
      <hr />

      <Testimonial
        content="Super helpful with my initial consult! Thank you"
        name={'Alison Fowler'}
      />

      <hr />

      <Testimonial
        content="I enjoyed dealing with the team at Baxter IP, everything was handled
        swiftly and would have no hesitation in returning to them for additional
        services in what they specialise in."
        name={'Natalie Wen'}
      />

      <hr />

      <Testimonial
        content="I've worked with Baxter IP on both a trademark for my company and
        the patent process on behalf of a client. In both cases, the service and
        advice has been outstanding. Baxter IP take the time to discuss the
        process and has made me feel completely at ease. I knew where I stood at
        each stage, the follow up was swift and comprehensive and I would highly
        recommend their services."
        name={'Fleur Filmer'}
      />

      <hr />
      <Testimonial
        content="Baxter IP helps us to get the innovation patent granted in two weeks
        time! A great attitude of providing professional service in Commit Less
        Deliver More manner with intensive client needs analysis, extensive
        patent strategy consultation and proactive result deliveries. It is a
        five star recommendation to use Baxter! Thank you!"
        name={'Arthur Li'}
      />

      <hr />

      <Testimonial
        content="The service at Baxter's is excellent. Friendly and relaxed yet
        professional and thorough."
        name={'Emmy &amp; Frank McNeilly'}
      />

      <hr />

      <Testimonial
        content="Baxter IP were fantastic in outlining the various patenting options for
        a pre-revenue start-up. Chris was particularly knowledgeable in the
        fields of electronics and manufacturing, in addition to his expertise in
        IP law. Raven IoT highly recommends their service."
        name={'Afea Care Services'}
        body={
          'of <a href="https://afea.com.au/" style="color:#7D67D8;" className="links" target="_blank" >Afea Care Services/a>'
        }
      />

      <hr />

      <Testimonial
        content="Baxter IP has a solid reputation in the market for delivering excellent
        trade mark and patent advice and representation. I have no hesitation in
        recommending their services."
        name={'Michael Bacina'}
      />

      <hr />
      <Testimonial
        content=" We where short of time and needed to see an Attorney prior to departure
        the following day, the secretary Quyen Javier was very attentive and she
        arranged for one of the Attorney to meet with us in their office in
        matter of minutes. We are satisfied with the service received."
        name={'Peter Pitino'}
      />
      <hr />

      <Testimonial
        content="Highly professional outfit, with subject matter expertise across a
        number of different industries. Clear timelines and pricing model as
        well which is rare for an IP firm! Would work with again."
        name={'Sameer Kassam'}
      />

      <hr />

      <Testimonial
        content="Baxter IP is the most professional and helpful attorney I've dealt
        with. Exceptional service from start to finish all-the-while ensuring I
        understood the entire process in easy to understand terms. Would
        strongly recommend."
        name={'Amanda Edwards'}
      />

      <hr />
      <Testimonial
        content="As you would expect, they provide professional IP and trade mark
        services, however, from my experience, the value multiplier is their
        ability to connect ideas with commercialisation through a carefully
        curated network of supporting services and professionals that come
        together to realise the true potential of the underlying concepts and
        create tangible value. Unsurprisingly, I never hesitate in recommending
        Baxter IP and, in particular, Chris Baxter."
        name={'Neil Alexander'}
      />

      <hr />
      <Testimonial
        content="Very helpful and knowledgeable."
        name={'Kenneth Wong'}
      />

      <hr />

      <Testimonial
        content="Attention to detail, thoroughness and holistic approach towards securing
        your IP is what you can easily expect from BaxterIP team. Had a
        wonderful journey so far!!"
        name={'Anjul Agarwal'}
      />

      <hr />

      <Testimonial
        content="Team at Baxter IP understands business besides developing an in-depth
        understanding of concept. Their advice is always around business
        benefits and this assist clients in preparing a strong strategy."
        name={'Vivek Dahiya'}
      />

      <hr />

      <Testimonial
        content="Very fast, helpful, friendly service. Very experienced."
        name={'Peter Heery'}
      />

      <hr />

      <Testimonial
        content="It was my first time entering into the complex world of inventing. I
        made a phone call to Martin Earley at Baxter IP Patent Attorneys in
        Melbourne. Martin understood my complex invention very quickly. I was
        very impressed by how he could understand my invention in just one short
        phone call. He explained the step-by-step processes and actions I needed
        to take. Then after a few face-to-face meetings with Martin, I was armed
        with detailed drawings and a broad detailed description of my invention
        . Martin has been able to put it all together into a strong and robust
        provisional patent application. He has not left a rock unturned in his
        attention to detail. Baxter IP really has only the best patent attorneys
        working for them . I&rsquo;d highly recommend that anyone thinking of
        inventing, call Baxter IP and speak to one of their patent attorneys. I
        sincerely believe if you want quality, well you pay for what you get."
        name={'Robert Frost'}
      />

      <hr />

      <Testimonial
        content="I would like to thank Baxter IP for their outstanding work in preparing
        my patent application. They delivered high quality service and explained
        the patenting process and what was required in a very easy, simple and
        thorough manner. I highly recommend Baxter IP to anyone who wants an
        excellent, professional and quality patent application, Thank you Baxter
        IP."
        name={'Kevin Hiltunen'}
      />

      <hr />

      <Testimonial
        content="Very happy with the service and the positive feedback and support
        provided by Martin especially the fact that Martin is able to be
        contacted outside of office hours. The detail in the specifications is
        amazing and without Martins efforts I could never adequately describe
        the device. I was extremely happy with the interpretation Martin was
        able to grasp with a few photos and a description over the phone he has
        described the function exactly as I would."
        name={'Graham Stephens'}
      />

      <hr />

      <Testimonial
        content="Thanks to Dr Phillip Burns for handling my patent application
        efficiently. I&rsquo;m impressed by the entire reliable process,
        specifically the turn around times. I look forward to continue to work
        with you."
        name={'Javeeth M S'}
      />

      <hr />

      <Testimonial
        content="I had an idea and called Baxter IP and they put me onto Warren Chandler,
        I could not have asked for a better introduction to patenting a product.
        I found Warren to be very helpful, understanding, and precise. He made
        the information he gave me easy to understand considering how
        complicated these processes are. I had no idea what to do or how to do
        it but Warren walked me through every process and made the decisions so
        easy. We have now filed for a provisional patent and will look forward
        to taking our idea internationally with the help of Baxter IP."
        name={'Val Carniato'}
      />

      <hr />

      <Testimonial
        content="Although patenting your invention gives you the sole rights to your
        design, preventing others from making, using, or selling the invention,
        the process is often very lengthy and requires attention to even the
        minute details in order to get rid of any &lsquo;loop-holes&rsquo;.
        However Baxter IP made this process much, much easier providing a safe
        and friendly working environment. Nicholas and John ensured that patent
        fit every specification of the invention and thought through every
        little detail. The Baxter IP team provided a flexible and safe working
        environment where you are their first priority and unlike other firms,
        work very closely with their client. The service is efficient and
        reliable and they search through masses of international and national
        patents to make sure your invention cannot and will not be copied by
        others. I give my highest recommendation to Baxter IP for the diligent
        service ultimately providing me with a secure patent and putting my mind
        at ease."
        name={'K-HART international Pty. Ltd.'}
        body={
          'of <a href="https://www.khartinternational.com/" style="color:#7D67D8;" className="links" target="_blank" >K-HART international Pty. Ltd.</a>'
        }
      />

      <hr />

      <Testimonial
        content="Having tried to register my patent I took advantage of Baxter IP&rsquo;s
        fee consultation where it immediately became apparent I had filed the
        wrong patent application, which Baxter IP immediately remedied. I highly
        recommend that anyone looking for patent protection should similarly
        contact Baxter IP; I&rsquo;m happy I did."
        name={'Nassir Fakhouri'}
      />

      <hr />

      <Testimonial
        content="We are really happy with your services and thank you again. I will
        highly recommend you in the future."
        name={'Card &amp; Vase'}
      />

      <hr />

      <Testimonial
        content="I was very impressed with my dealings with Baxter IP Patent Attorneys.
        From the first phone conversation I felt assured that Baxter understood
        where my technology developments were at and they clearly outlined what
        the next steps would be. I found the company very personable and was
        highly impressed with their affinity to grasp the intent of my venture
        and match it with the most suitable licensing models. A lot of practical
        &ldquo;do and don&rsquo;ts&rdquo; were covered along with tried and
        tested models so that my own knowledge and confidence increased in the
        proposals suggested. A comprehensive document was prepared as agreed,
        which was a solid basis for the next stage of negotiations. Plus John
        Baxter was only too willing to provide follow-up and advice drawing upon
        his expertise gained in licensing around the world. I gained a lot of
        confidence in my business going forward knowing that I was getting
        expert advice."
        name={'Glenn Titmuss'}
      />

      <hr />

      <Testimonial
        content="Baxter IP Patent Attorneys are an amazing company to work with. They
        have been nothing but helpful from the get go. They have worked and
        guided us with each step of the process and have made this journey a lot
        more easier. They are efficient and prompt and always go that extra mile
        without asking twice to do so. We look forward to working with the team
        at Baxter IP Patent Attorneys as we continue our project."
        name={'Natasha Buttigieg'}
      />

      <hr />

      <Testimonial
        content=" For a small company like ours, to be able to access the combination of
        high intellect, extensive engineering knowledge and hard commercial
        experience in the one office is extremely valuable. The patents and
        licences are stronger as a result enabling us to negotiate with large
        companies from a position of strength. I have no hesitation in
        recommending Baxter IP Patent Attorneys."
        name={'Bruce Gillespie, MD of Homelift Pty Ltd'}
      />

      <hr />

      <Testimonial
        content="Finding my company in need of IP advice was daunting. Baxter IP Patent
        Attorneys took the time to explain the needs of my business to me. The
        result was trade marking and and patenting unique designs for my
        jewellery brand Uberkate. I now feel confident that my Intellectual
        Property is protected. I would highly recommend Baxter IP Patent
        Attorneys to help anyone looking to trade mark or patent their precious
        ideas."
        name={'Kate Sutton, Director of Uberkate'}
      />

      <hr />

      <Testimonial
        content="Baxter IP Patent Attorneys have been so professional throughout this
        whole process. It&rsquo;s been great to be able to bounce back ideas and
        have all our questions and concerns answered so promptly. Great company!
        It&rsquo;s been a good experience."
        name={'Jasmin Colley'}
      />

      <hr />
      <blockquote>
        Both my wife and I have used Baxter IP Patent Attorneys for two separate
        projects (Wheely Clean Golf and Shnooki Design) we have been working on
        over the last 12 months. We have found them to be extremely
        professional, reliable and helpful. Not only have they successfully
        helped us in filing a patent, they have also assisted us with designing,
        engineering, and manufacturing our products. We have always found Baxter
        IP Patent Attorneys to be very easy to deal with, and nothing is ever a
        problem for them. It has been a pleasure dealing with Baxter IP Patent
        Attorneys and I would have no hesitation in recommending them.
      </blockquote>
      <cite>
        &ndash; Luke Miles, Director of{' '}
        <Link
          href="https://www.lmeelectrical.com.au/"
          title="LME Electrical Contractors Pty Ltd"
          rel="noopener nofollow"
          target="_blank"
        >
          LME Electrical Contractors Pty Ltd
        </Link>
      </cite>

      <hr />
      <blockquote>
        I recently filed a patent application with the help of Chris Baxter and
        his team at Baxter IP Patent Attorneys. Having had no knowledge or
        experience of how to go about this, I was surprised and relieved by the
        professional and caring advice and guidance I was given by Chris and
        Jon, with their help I have been able to take each step to market my
        product with a lot more confidence. I highly recommend a consultation
        with Chris and his team as a first step to getting a product patent.
      </blockquote>
      <cite>&ndash; Mary Ayoub</cite>

      <hr />
      <blockquote>
        Baxter IP was recommended to me and I can understand why. Securing a
        trade mark and patent for my intellectual property was both exciting and
        bewildering and Chris clearly explained the necessary steps to obtain
        both. He was helpful and patient answering many questions through this
        long process.
      </blockquote>
      <cite>&ndash; Diane Abello</cite>

      <hr />
      <blockquote>
        If you believe in your idea you need to trust someone. I too that leap
        of faith and laid my idea on the line to Chris Baxter who appointed me
        his associate Jon Wright. It was a relaxed atmosphere and the best thing
        I have done. These guys are champions. We expect my now robust
        specification is fast progressing up to the PCT application status. Six
        months ago this seemed but a fantasy.
      </blockquote>
      <cite>&ndash; Milton Facaris</cite>

      <hr />
      <blockquote>
        Thank you for being so proactive in your support of this project and for
        your considerable effort in preparing a very thorough application.
      </blockquote>
      <cite>
        &ndash; Research &amp; Technology Manager of a global medical devices
        company
      </cite>

      <hr />
      <blockquote>
        Chris helped us in a very professional and a very personal way I feel
        part of the family.
      </blockquote>
      <cite>&ndash; Ean Herniman</cite>

      <hr />
      <blockquote>
        I found Baxter IP Patent Attorneys to be very honest regarding my patent
        idea and the direction I should take. Their availability to answer
        questions I had throughout the process was also most helpful.
      </blockquote>
      <cite>&ndash; Con Staveris</cite>

      <hr />
      <blockquote>
        Thanks for the huge effort you put into this... this was critical to the
        timing of the project.
      </blockquote>
      <cite>&ndash; Project Engineer of a global medical devices company</cite>

      <hr />
      <blockquote>
        I really appreciate all the intelligent and practical advice you gave me
        concerning the process involved in protecting trade marks and
        intellectual property… I found you extremely honest and professional and
        I would have no hesitation in recommending you to any of my associates.
      </blockquote>
      <cite>&ndash; Andrew Vines</cite>

      <hr />
      <blockquote>
        Thank you very much for all your help with the provisional patent
        application. From my point of view this process could not have worked
        out better. Your approach to draft a comprehensive specification, even
        if it is &ldquo;only&rdquo; a provisional application, makes sense to
        me. Also because of your aeronautical engineering background you
        understood the sail-by-wire system immediately. I&rsquo;m sure this
        saved a lot of time and might even lead to better protection of the
        idea.
      </blockquote>
      <cite>&ndash; Karsten Jarke</cite>

      <hr />
      <blockquote>
        It is our pleasure to be testament to the absolute Professionalism,
        Integrity and Expertise, that we have experienced working with Baxter IP
        Patent Attorneys. Chris has continually gone &lsquo;Above and
        Beyond&rsquo; in his response to our needs. For us being new to the
        Patent process, it was very reassuring having Chris give us advice, and
        keeping us informed and up-to-date every step of the way. We have no
        doubt that his involvement has considerably improved our chances of
        success. We look forward to working with him on future projects.
      </blockquote>
      <cite>&ndash; Monique &amp; Kristy Pastor of Twinnovations</cite>

      <hr />
      <blockquote>
        I am very pleased with the result of Chris Baxter&rsquo;s work and would
        highly recommend him to anyone seeking to own intellectual property. My
        product was quite basic and the chance of getting a certified innovation
        patent certificate was slim. My first attempt was unsuccessful however
        with Chris&rsquo;s expert knowledge, he was able to remove the grounds
        of objection and the claim got accepted. I received the news from him on
        New Year&rsquo;s Eve which made a great start to this year. Great work
        Chris!
      </blockquote>
      <cite>
        &ndash; Tony Gouverneur of{' '}
        <Link
          href="https://tidytradie.com/"
          title="Tidy Tradie"
          rel="noopener nofollow"
          target="_blank"
        >
          Tidy Tradie
        </Link>
      </cite>

      <hr />
      <blockquote>
        Thank you for your professionalism and service with providing Focus
        Driving School with its first trade mark. We received the Certificate of
        Registration yesterday and we are all very excited about it. We look
        forward to implementing the R symbol on our stationary and have
        displayed the Certificate in our office.
      </blockquote>
      <cite>
        &ndash; Helen Jancev, Operations Manage of Focus Driving School
      </cite>

      <hr />
      <blockquote>
        Just wanted to pass on my thanks to you and your team for the work done
        in putting together the provisional patent application. The level of
        work and detail has exceeded my expectations.
      </blockquote>
      <cite>&ndash; Kristian Hedge</cite>

      <hr />
      <blockquote>
        We decided to invest in a patent for our LC888 window lock. Baxter IP
        Patent Attorneys assisted us with the process which can be very
        involved, their advice was helpful and we would recommend their
        services.
      </blockquote>
      <cite>&ndash; Craig Levey, Manager of LEVCOL</cite>

      <hr />
      <blockquote>
        I cannot recommend Chris Baxter&rsquo;s skills as a patent attorney
        highly enough. Chris&rsquo; strength lies with his ability to work
        closely with the inventor. Too many patents are open to unlicensed use
        because a clever copier can avoid infringement by exploiting weaknesses
        in an invention&rsquo;s specification and claims. Avoiding these
        weaknesses requires the ability to foresee alternative ways in which the
        invention could be used without infringing the patent.
      </blockquote>
      <cite>&ndash; Dr Ian Doig of Pumping Solutions</cite>

      <hr />
      <blockquote>
        We approached Baxter IP Patent Attorneys to work with us on the
        registration of a patent. During Chris&rsquo; preliminary searches he
        found a similar product already in the marketplace that our searches
        failed to find. Although we were unable to patent our product,
        Chris&rsquo;s honesty and professionalism saved us thousands of dollars
        in unnecessary searches and registration fees. If you are looking for a
        Patent Attorney, I would highly recommend Baxter IP Patent Attorneys.
      </blockquote>
      <cite>&ndash; Stuart Thomson of travelgoods.com</cite>

      <hr />
      <blockquote>
        Thank you for your excellent and efficient service. Your response time
        was extremely fast and the information presented was clear. We will use
        your services again.
      </blockquote>
      <cite>
        &ndash; Eddy Feligueira of{' '}
        <Link
          href="http://smartechdesigns.co.za/"
          title="Smartech Designs Pty Ltd"
          rel="noopener nofollow"
          target="_blank"
        >
          Smartech Designs Pty Ltd
        </Link>
      </cite>

      <hr />
      <blockquote>
        I would like to thank you and your team on the professional way you have
        helped me in developing a patent. I would also like to say that you gave
        me all the correct information on how patents work and the costing and
        left it up to me if I wanted to proceed or not with the patent. I would
        also highly recommend you and your company to anyone who is thinking
        about doing a patent.
      </blockquote>
      <cite>&ndash; Ben Halliday of Austa Pty Ltd</cite>

      <hr />
      <blockquote>
        From the initial meeting through to the lodging of a patent I have been
        very impressed with Baxter IP Patent Attorneys&rsquo;s punctuality of
        program, utmost professional attention to detail and above all their
        width of thinking.
      </blockquote>
      <cite>
        &ndash; Bruce Hanlee of{' '}
        <Link
          href="https://xsquareddesign.com/"
          title="X2 Design Pty Ltd"
          rel="noopener nofollow"
          target="_blank"
        >
          X2 Design Pty Ltd
        </Link>
      </cite>

      <hr />
      <blockquote>
        We recently engaged Baxter IP Patent Attorneys to manage and direct our
        Intellectual Property needs. We found Chris to be very responsive,
        committed and diligent in his approach to providing us with direction to
        matters that became urgent. Chris demonstrated that he could offer
        creative solutions to solve problems and meet some very tight deadlines.
        To achieve this it is evident that Chris has valuable skills and
        knowledge that can only be gained through extensive experience. Chris is
        currently preparing a global strategic direction for the Popcake suite
        of products. Chris comprehended future issues, and there are numerous
        conflicting factors, and reported these to Board of Directors without
        ambiguity and clear future corporate direction.
      </blockquote>
      <cite>
        &ndash; Marek Szymanski, Managing Director of{' '}
        <Link
          href="https://popcake.com.au/"
          title="Popcake Int Pty Ltd"
          rel="noopener nofollow"
          target="_blank"
        >
          Popcake Int Pty Ltd
        </Link>
      </cite>

      <hr />
      <blockquote>
        As a technology company reliant on IP for our success, it is paramount
        to retain competent and experienced IP advisors and services. Baxter IP
        Patent Attorneys were able to guide us through our technically demanding
        patent space quickly and efficiently, while maintaining excellent
        feedback and communication throughout. We are happy with both the advice
        and services provided by Baxter IP Patent Attorneys, and will continue
        to engage Chris and his team for our future IP needs.
      </blockquote>
      <cite>
        &ndash; Leo McHugh, PhD of Highlight Ventures Pty Ltd / Adventure
        Aerospace Pty Ltd
      </cite>

      <hr />
      <blockquote>
        After receiving an introduction to Chris from a highly respected and
        successful VC, I found Chris to be a very professional and gifted
        operator who sincerely desires to deliver a first class job. Upon
        seeking his opinion on a very detailed and complex matter, I found him
        to be thoughtful, thorough and able to grasp the vision behind what I
        asked him to advise me on.
      </blockquote>
      <cite>
        &ndash; Anthony Harrison, Managing Director of Brandwave Pty Ltd
      </cite>

      <hr />
      <blockquote>
        Networked Infrastructure National Architecture (NINA) Pty Ltd engaged
        Baxter IP Patent Attorneys to draft and lodge its patent application for
        its modular integrated curb and ducting systems for electrical, data,
        gas and water infrastructure. Baxter IP Patent Attorneys was able to
        appreciate both the novelty of the invention and the broad scope of its
        application. This was successfully incorporated in the initial filing to
        give us the broadest scope to defend and develop our invention. We would
        readily recommend their IP and patent services.
      </blockquote>
      <cite>
        &ndash; Guy Dixon, Inventor of Networked Infrastructure National
        Architecture Pty Ltd
      </cite>

      <hr />
      <blockquote>
        The online social networking space that we operate in is highly
        competitive and is evolving rapidly. Great ideas can lead to enormous
        competitive advantages but they can also be copied very easily. We
        wanted a way to protect our inventions from being copied by the
        competition and patents seemed the most obvious mechanism. As a small
        business every dollar matters so we thought rather than look for a
        patent attorney we&rsquo;d research how to submit a patent application
        ourselves. The world of patents proved to be a midfield and highly
        technical. We soon realised it would be a total false economy going it
        alone and hence we sought out Baxter IP. After engaging Baxter IP and
        working with Chris and Jon on our patent we felt totally reassured that
        we were doing the right thing. Because different jurisdictions have
        different laws regarding the patentability of software our patent was
        written in such a way that different parts of it would target the
        different jurisdictions to accommodate local laws. This is something we
        felt we have gained enormously by using Baxter IP. I&rsquo;d highly
        recommend using Baxter IP to any software company that&rsquo;s looking
        to protect their software inventions.
      </blockquote>
      <cite>&ndash; Francesco Fiorenza, Director of Flame Pty Ltd</cite>

      <hr />
      <blockquote>
        I contacted Baxter IP Patent Attorneys following a previous fruitless,
        lengthy and expensive experience with one of the large specialist IP
        firms in a previous business. I have now engaged Baxter IP Patent
        Attorneys for two projects, one simple, and one complex. In both cases
        Chris has demonstrated his talent for rapidly gaining a depth of subject
        understanding and a grasp of the important issues prior to producing and
        lodging highly regarded patent documents. I have no hesitation in
        recommending Baxter IP Patent Attorneys.
      </blockquote>
      <cite>&ndash; Bruce Johansson of CleanPoint Holdings Pty Ltd</cite>

      <hr />
      <blockquote>
        A big thanks for you help with the trade mark. A lot easier and quicker
        than I thought... and a lot more affordable than I thought too. Again
        truly appreciate the help. Thanks!
      </blockquote>
      <cite>&ndash; Greg Betty</cite>

      <hr />
      <blockquote>
        We have now worked with Barry Meskin on 3 matters. 2 involved quite
        complex Aussie trade mark applications, and the latest was an urgent UK
        legal dispute on trademarks/copyrights in 10 countries in Europe and
        Asia. Barry did a professional and thorough job on all occasions, and we
        got the TMs and information we needed in a timely manner at very
        reasonable cost. Plus - Barry is just a really good guy to work with.
        Highly recommended!!
      </blockquote>
      <cite>&ndash; Mickey Perret</cite>

      <hr />
      <blockquote>
        Service, contact and support to date has been excellent.&nbsp; Attention
        to detail and advice from our patent attorney at Baxter IP has been
        nothing short of First Class.&nbsp; Thank you all.
      </blockquote>
      <cite>&ndash; David Dicesare</cite>

      <hr />
      <blockquote>
        I was a first time patent seeker. Baxter&apos;s service and
        communication was first class. I found the staff helpful and patient as
        being a rookie in the patent application process I had many questions.
        Baxter IP also involved me in some of the text production for rebuttals
        and descriptions. I found this great as no one knows your idea better
        than you. I am now the owner of a US patent and I would recommend Baxter
        IP to any prospective Patent seeker. Todd Archer Director Archer
        Innovations.
        <br />
        Found your staff helpful and efficient. Would recommend you to my
        friends.
      </blockquote>
      <cite>&ndash; Todd Archer, Director of Archer Innovations</cite>

      <hr />
      <blockquote>
        Being a first time patenter, my initial reservations relating to the
        unknown process soon disappeared and was replaced with confidence. Chris
        Baxter lost no time in establishing a trust worthy and safe working
        relationship. Having access to such a highly skilled professional team
        was exactly what my innovation needed. I would strongly recommend IP
        Baxter to anyone wishing to put their innovation or inventions on the
        best path right from the word go.
      </blockquote>
      <cite>&ndash; Pen Williams</cite>

      <hr />
      <blockquote>
        Highly professional firm providing concise and easy to understand
        advice. My understanding of the importance of trade marking my company
        name and logo was negligible. Chris and Barry stepped me through the
        process to protect my asset from a domestic (Australia) and
        international perspective. Highly recommended.
      </blockquote>
      <cite>&ndash; Michelle Fiegehen</cite>

      <hr />
      <blockquote>
        Well organised and prepared. Presented and explained concepts behind
        patent law concisely and effectively, providing myself with the upmost
        information to understand the eligibility and process that are involved.
        A very help full team, whom provide a positive and welcoming experience.
        I would highly recommend Baxter IP.
      </blockquote>
      <cite>&ndash; Christapher Karaberis</cite>

      <hr />
      <blockquote>
        Baxter IP gave me a quick &amp; precise understanding of the Patenting
        System &amp; Protocols. They had high quality answers to all my
        enquiries and even gave me a better alternatives to resolve my current
        problems. Additionally, the customer service, friendliness, attention to
        detail and attentiveness of the staff made the whole process very well
        handled. Highly Reliable and Highly Recommend!
      </blockquote>
      <cite>&ndash; Thaison Tran</cite>

      <hr />
      <blockquote>
        Applying for a provisional patent is new for me. I&apos;m very pleased
        with the guidance I&apos;ve received, every step has been explained
        thoroughly. I have received prompt responses by staff when I&apos;ve had
        questions, my queries have been resolved quickly all staff have been
        very helpful. Highly recommended.
      </blockquote>
      <cite>&ndash; Corinda Lavington</cite>

      <hr />
      <blockquote>
        Baxter IP team - Chris, Phil, Kristine, Warren and Julie in particular
        have done a wonderful job in securing a provisional application and
        trade marks for my company. I have dealt with many IP firms in the past
        - in fact most of the larger major ones in Australia - and I would have
        to say that Baxter IP were the friendliest and best value for money firm
        that I have utilised. Baxter IP fills a gap by providing large corporate
        top tier value service, yet are very startup/SME/Tech friendly at the
        same time. Phil did an amazing job on the provisional and pulled a
        couple of near all nighters in order to get my IP filed by the due date.
        If you are looking for a personalised service and working with a firm
        who actually cares about your success, then Baxter IP is definitely the
        place to go. I will definitely use Baxter IP again.
      </blockquote>
      <cite>&ndash; Robert Huber</cite>
    </Layout>
  )
}
