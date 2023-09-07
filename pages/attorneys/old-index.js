import { Container } from '../../components/templates/Container'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { InnerContainer } from '../../components/templates/InnerContainer'

const snapshots = [
  { id: 1, title: 'Qualified trade mark and patent attorney' },
  { id: 2, title: 'Founded Baxter IP in 2007' },
  {
    id: 3,
    title:
      'Fellow of The Institute of Patent & Trade Mark Attorneys of Australia',
  },
  { id: 4, title: 'Former in-house patent attorney at ResMed' },
  {
    id: 5,
    title:
      'Award for 1st place in Trade Mark Law in Master of Intellectual Property Law at the University of Technology Sydney',
  },
  {
    id: 6,
    title:
      'Thesis Prize and 1st Class Honours in Aeronautical Engineering from the University of Sydney',
  },
  { id: 7, title: 'Adviser to Baxter Charitable Trusts' },
]

const publications = [
  { id: 1, title: 'IP 101 Workshop - UNSW New Wave Group - 20 Jun 22' },
  { id: 2, title: 'Baxter vs Bixter Case Review - 1 Feb 22' },
]

const technicalAreas = [
  { id: 1, title: 'Mechanical', icon: '/industrySpeciality/wrench-normal.svg' },
  { id: 2, title: 'Medical', icon: '/industrySpeciality/wrench-normal.svg' },
  { id: 3, title: 'Software', icon: '/industrySpeciality/wrench-normal.svg' },
]

const profiles = {
  'chris baxter': {
    name: 'Chris Baxter',
    position: 'Managing Director, Patent & Trade Mark Attorney',
    email: 'chris.baxter@baxterip.com.au',
    telephone: '+61 2 9264 6716',
    potrait: '/professionalProfiles/peoples/chris-preview.png',
    objective:
      '“There is no surer way to create jobs and societal wealth than through the commercialisation of new ideas anchored on a strong intellectual property foundation. Through a combination of my in-house, private practice and extensive tech investment experience, I work with clients to channel their IP towards maximum impact on business value.”',
    industry: {
      title: 'Biography',
      description:
        'Chris began his intellectual property career working at a large Australian IP firm, then joined the in-house team at one of Australia’s largest medical devices companies, before leaving in 2007 to establish Baxter IP.' +
        'Under Chris’ leadership, the firm has grown to a team of 27 patent & trade mark attorneys and administrative staff, with offices in Sydney and Melbourne. Chris advises a client base comprised of multinational corporations, universities and SMEs, as well as venture capital firms, tech start-ups and entrepreneurs.\n\n' +
        'Chris has broad technological experience spanning, in particular: medtech, defence, software and aerospace inventions. He specialises in providing strategic, cross-jurisdictional intellectual property advice on complex patent portfolios and dispute matters. He understands the nexus of IP and its significance in the commercial licensing and capital raising process. Clients benefit from Chris’ holistic approach, which focuses on their commercial interests, as well as the legal processes involved.',
    },
    snapshots: {
      title: 'Attorney Snapshot',
      items: [
        { id: 1, title: 'Qualified trade mark and patent attorney' },
        { id: 2, title: 'Founded Baxter IP in 2007' },
        {
          id: 3,
          title:
            'Fellow of The Institute of Patent & Trade Mark Attorneys of Australia',
        },
        { id: 4, title: 'Former in-house patent attorney at ResMed' },
        {
          id: 5,
          title:
            'Award for 1st place in Trade Mark Law in Master of Intellectual Property Law at the University of Technology Sydney',
        },
        {
          id: 6,
          title:
            'Thesis Prize and 1st Class Honours in Aeronautical Engineering from the University of Sydney',
        },
        { id: 7, title: 'Adviser to Baxter Charitable Trusts' },
      ],
    },
    publications: {
      title: 'Publications',
      items: [
        { id: 1, title: 'IP 101 Workshop - UNSW New Wave Group - 20 Jun 22' },
        { id: 2, title: 'Baxter vs Bixter Case Review - 1 Feb 22' },
      ],
    },
    technicalAreas: [
      {
        id: 1,
        title: 'Mechanical',
        icon: '/industrySpeciality/wrench-normal.svg',
      },
      {
        id: 2,
        title: 'Mining / Civil',
        icon: '/industrySpeciality/wrench-normal.svg',
      },
      {
        id: 3,
        title: 'Medical',
        icon: '/industrySpeciality/medical-normal.svg',
      },
      {
        id: 4,
        title: 'Physics',
        icon: '/industrySpeciality/grid-normal.svg',
      },
      {
        id: 5,
        title: 'Software',
        icon: '/industrySpeciality/grid-normal.svg',
      },
      {
        id: 6,
        title: 'Electrical / Electronics',
        icon: '/industrySpeciality/medical-normal.svg',
      },
      {
        id: 7,
        title: 'Chemistry',
        icon: '/industrySpeciality/chemistry-normal.svg',
      },
      {
        id: 1,
        title: 'Pharmaceuticals / Biochemistry / Vet Science',
        icon: '/industrySpeciality/wrench-normal.svg',
      },
      {
        id: 2,
        title: 'Biotechnology',
        icon: '/industrySpeciality/energy-normal.svg',
      },
      {
        id: 3,
        title: 'Consumer products',
        icon: '/industrySpeciality/grid-normal.svg',
      },
    ],
  },
}

export default function Profile() {
  const router = useRouter()
  const query = router.query
  const [profile, setProfile] = useState(profiles['chris baxter'])

  useEffect(() => {
    // console.log(query)
    if (query.data != null) {
      const profile = profiles[query.data.toLowerCase()]
      setProfile(profile)
    }
  }, [])

  return (
    <>
      <Header active={'Attorneys'} />
      <Container className="flex flex-col">
        <div className="bg-profile-bg !bg-cover">
          <InnerContainer>
            <div className="w-full h-full sm:h-[1085px] md:h-[515px] flex flex-col md:flex-row justify-end items-center px-4 sm:px-16 md:px-16 xl:px-24 2xl:px-40 pt-[90px] sm:pt-[100px]">
              <div
                className="w-full md:w-3/5 h-full flex flex-col px-8 sm:px-12 pt-8 pb-14 sm:pt-0 sm:pb-0 gap-8 bg-white"
                style={{
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)',
                }}
              >
                <div className="w-full flex flex-col sm:pt-12 sm:pb-[14px] gap-[17px]">
                  <span className="font-lora font-normal text-[32px] sm:text-5xl xl:text-[64px] xl:leading-[70px]">
                    {profile.name}
                  </span>
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-manrope font-medium text-base sm:text-[32px] sm:leading-[44px] sm:tracking-[-0.03em] md:text-xl xl:text-2xl text-[#7A7B94]">
                      {profile.position}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row items-start xl:items-end h-full w-full gap-6 sm:gap-8 2xl:gap-[60px] xl:py-12">
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="font-manrope font-medium text-sm sm:text-2xl md:text-base xl:text-xl text-[#7A7B94] uppercase">
                      Email
                    </span>
                    <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl xl:text-2xl text-[#272940]">
                      {profile.email}
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-[10px]">
                    <span className="font-manrope font-medium text-sm sm:text-2xl md:text-base xl:text-xl text-[#7A7B94] uppercase">
                      Telephone
                    </span>
                    <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl xl:text-2xl text-[#272940] whitespace-nowrap">
                      {profile.telephone}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 h-full flex flex-col justify-end items-center bg-[#FAF4E4]">
                <Image src={profile.potrait} width={389} height={474} alt="" />
              </div>
            </div>
          </InnerContainer>
        </div>
        <InnerContainer>
          <div className="px-4 sm:px-16 md:px-16 xl:px-24 2xl:px-40 pb-40 sm:pb-60">
            <div
              className="flex flex-col items-center sm:gap-8 px-4 sm:px-8 sm:py-14 md:px-12 py-6"
              style={{
                background:
                  'linear-gradient(111.14deg, #60628C 4.56%, #4B4D72 97.76%)',
              }}
            >
              <span className="hidden md:flex font-manrope font-semibold sm:text-2xl text-white tracking-[-0.03em] text-center">
                {profile.objective}
              </span>
              <span className="md:hidden font-manrope font-bold text-base sm:text-[32px] leading-[150%] tracking-[-0.03em] text-white text-center py-8">
                {profile.objective}
              </span>
              <div className="hidden md:flex flex-row items-center justify-center gap-[10px]">
                <hr className="w-[50px] border-[1px] border-white" />
                <span className="font-lora italic font-semibold text-xl text-white text-center whitespace-nowrap">
                  {profile.name}
                </span>
                <span className="font-lora italic font-normal text-xl text-white text-center">
                  {profile.position}
                </span>
                <hr className="w-[50px] border-[1px] border-white" />
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center py-[60px] px-4 sm:pt-[100px] sm:px-6 md:p-[60px] gap-[100px] md:gap-[60px] bg-white rounded-lg"
              style={{
                boxShadow: '0px 5px 17px rgba(64, 76, 89, 0.06)',
              }}
            >
              <div className="flex flex-col items-start gap-12 md:pr-32 w-full">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl md:leading-[140%] md:tracking-[-0.03em] text-[#272940]">
                  {profile.industry.title}
                </span>
                <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
                  {profile.industry.description}
                </span>
              </div>
              <div className="flex flex-col items-start gap-4 sm:gap-8 w-full">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl md:leading-[140%] md:tracking-[-0.03em] text-[#272940]">
                  Attorney Snapshot
                </span>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
                  <ul className="w-full md:w-1/2 flex flex-col gap-6 list-disc list-outside pl-4">
                    {profile.snapshots.items
                      .slice(0, Math.ceil(profile.snapshots.items.length / 2))
                      .map((item, index) => (
                        <li key={index}>
                          <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
                            {item.title}
                          </span>
                        </li>
                      ))}
                  </ul>
                  <ul className="w-full md:w-1/2 flex flex-col gap-6 list-disc list-outside pl-4">
                    {profile.snapshots.items
                      .slice(Math.ceil(profile.snapshots.items.length / 2))
                      .map((item, index) => (
                        <li key={index}>
                          <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
                            {item.title}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 sm:gap-8 w-full">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl leading-[140%] tracking-[-0.03em] text-[#272940]">
                  Publications
                </span>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
                  <ul className="w-full md:w-1/2 flex flex-col gap-6 list-disc list-outside pl-4">
                    {profile.publications.items
                      .slice(
                        0,
                        Math.ceil(profile.publications.items.length / 2)
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
                            {item.title}
                          </span>
                        </li>
                      ))}
                  </ul>
                  <ul className="w-full md:w-1/2 flex flex-col gap-6 list-disc list-outside pl-4">
                    {profile.publications.items
                      .slice(Math.ceil(profile.publications.items.length / 2))
                      .map((item, index) => (
                        <li key={index}>
                          <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
                            {item.title}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 sm:gap-8 w-full">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl leading-[140%] tracking-[-0.03em] text-[#272940]">
                  Patent Technical Areas
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-8 w-full">
                  {profile.technicalAreas.map((technicalArea, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center px-6 gap-8"
                    >
                      <div className="w-8 h-8 min-w-[32px] sm:w-20 sm:h-20 sm:min-w-[80px] rounded-full bg-[#F3F3FA] flex flex-col items-center justify-center">
                        <Image
                          src={technicalArea.icon}
                          width={32}
                          height={32}
                          className="w-4 h-4 sm:w-8 sm:h-8"
                          alt=""
                        />
                      </div>
                      <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl text-[#272940]">
                        {technicalArea.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </InnerContainer>
      </Container>
      <Footer />
    </>
  )
}
