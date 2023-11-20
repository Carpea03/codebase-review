import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import IpNewsBlog from '../../components/homepage/IpNewsBlog'
import { Container } from '../../components/templates/Container'
import Footer from '../../components/templates/Footer'
import Header from '../../components/templates/Header'
import { InnerContainer } from '../../components/templates/InnerContainer'
import { indexQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import { awards, profiles as peoples } from '../../utils/const/people'
import { profiles } from '../../utils/const/profiles'
import { filterByPerson } from '../../utils/utility.helper'

export const getStaticPaths = async () => {
  const paths = peoples[0]?.teamMembers
    ?.filter((people) => people.isShow === true)
    ?.map((item) => {
      return {
        params: { id: item?.linkId?.toString() },
      }
    })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = profiles[id]
  return {
    props: { profile: data },
  }
}

export default function Profile({ profile }) {
  const [reduceMorePost, setReduceMorePost] = useState()
  const [noArticles, setNoArticles] = useState(false)
  const [people, setPeople] = useState({})
  const parse = require('html-react-parser')

  useEffect(() => {
    setPeople(
      peoples[0]?.teamMembers.filter((value) => value.name == profile.name)[0]
    )
    console.log(people)
    init()
  }, [])

  const init = async () => {
    const allPosts = overlayDrafts(await getClient(false).fetch(indexQuery))
    const data = filterByPerson(allPosts, profile.name)
    if (data.length > 0) {
      setReduceMorePost(data)
      setNoArticles(false)
      return
    }
    setNoArticles(true)
    setReduceMorePost(allPosts)
  }

  return (
    <>
      <Head>
        <title>{`${
          people.name && people.positions
            ? people.name + ' - ' + people.positions + ','
            : ''
        } Patent & Trade Mark Attorney | Baxter IP ${people.place}`}</title>
        <meta name="description" content={profile?.bio} />
        <link
          rel="canonical"
          href={`https://www.baxterip.com.au/attorneys/${people.linkId}`}
        />
        <link
          rel="alternate"
          href={`https://www.baxterip.com.au/attorneys/${people.linkId}`}
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href={`https://www.baxterip.com.au/attorneys/${people.linkId}`}
          hreflang="en-au"
        />
        <link
          rel="alternate"
          href={`https://www.baxterip.com.au/global/${people.linkId}`}
          hreflang="en-us"
        />
        {people.zh && <link rel="alternate" href={people.zh} hreflang="zh" />}
      </Head>
      <Header active={'Attorneys'} />
      <Container className="flex flex-col">
        <div className="bg-profile-bg !bg-cover">
          <InnerContainer>
            <div className="px-[16px] sm:px-[48px] md:px-[63px] xl:px-[160px] mt-10">
              <div className="sm:pt-[100px]">
                <div className="flex flex-col sm:flex-row justify-center w-full bg-white">
                  <div
                    className={`w-full ${
                      profile.awards ? 'sm:w-[500px]' : 'sm:w-full'
                    } md:w-[788.185px] md:h-[333px] bg-white h-full p-[16px] md:p-14`}
                  >
                    <div className="w-full">
                      <span className="font-lora font-normal text-[32px] sm:text-[40px] md:text-[64px] xl:leading-[70px]">
                        <h1>
                          {profile.name}
                          <span className="screen-reader-text"> - </span>
                          <span className=" flex flex-col justify-center items-start mb-5 md:mb-20 font-manrope font-medium text-base sm:text-[24px] sm:leading-[44px] sm:tracking-[-0.03em] md:text-xl xl:text-2xl text-[#272940]">
                            {profile.position}
                          </span>
                        </h1>
                      </span>

                      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 2xl:gap-[60px]">
                        <div className="flex flex-col items-start sm:gap-[10px]">
                          <span className="font-manrope font-medium text-sm sm:text-[24px] md:text-base xl:text-xl text-[#7A7B94] uppercase">
                            Email
                          </span>
                          <a href={`mailto:${profile.email}`}>
                            <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl xl:text-2xl text-[#272940]">
                              {profile.email}
                            </span>
                          </a>
                        </div>
                        <div className="flex flex-col items-start gap-[10px] click-to-call-event">
                          <span className="font-manrope font-medium text-sm sm:text-2xl md:text-base xl:text-xl text-[#7A7B94] uppercase">
                            Telephone
                          </span>
                          <a href={`tel:${profile.telephone}`}>
                            <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl xl:text-2xl text-[#272940] whitespace-nowrap sm:pb-10 xl:pb-0">
                              {profile.telephone}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      profile.awards ? 'md:w-[250px]' : 'md:w-[332px]'
                    } xl:w-[332px] xl:h-[333px] bg-white`}
                  >
                    <div className="flex-col">
                      <div
                        className={`${profile.awards ? 'flex' : 'sm:hidden'}`}
                      >
                        <Image
                          src={profile.potrait}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                          }}
                          alt=""
                        />
                      </div>

                      <div
                        className={`${
                          profile.awards ? 'hidden' : 'hidden sm:flex'
                        }`}
                      >
                        <Image
                          src={profile.potrait}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{
                            height: 400,
                            width: 400,
                            objectFit: 'cover',
                          }}
                          alt=""
                        />
                      </div>
                      <div
                        className={`flex xl:hidden ${
                          profile.awards
                            ? 'md:w-[250px]'
                            : 'hidden md:w-[332px]'
                        } md:h-full bg-white`}
                      >
                        <div className="w-full flex flex-row justify-center p-10">
                          <div className="flex sm:hidden flex-row gap-5">
                            {profile.awards?.map((award, index) => (
                              <Image
                                key={index}
                                src={`/professionalProfiles/awards/${
                                  awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.title
                                }.png`}
                                width={
                                  awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.width
                                }
                                height={
                                  awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.height
                                }
                              />
                            ))}
                          </div>
                          <div className="hidden sm:flex flex-col ">
                            {profile.awards?.map((award, index) => (
                              <Image
                                key={index}
                                src={`/professionalProfiles/awards/${
                                  awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.title
                                }.png`}
                                width={
                                  awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.width * 2
                                }
                                height={
                                  awards?.filter(
                                    (value) => value.id == award
                                  )[0]?.height * 1.5
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InnerContainer>
        </div>
        <InnerContainer>
          <div className="px-[16px] sm:px-[48px] md:px-16 xl:px-[160px]">
            <div className="flex flex-col md:flex-row sm:justify-center w-full">
              <div
                className={`w-full ${
                  profile.awards ? 'xl:w-[788.185px]' : ''
                } h-full md:h-100 bg-white`}
              >
                <div className="w-full">
                  <div
                    className={`flex sm:items-center px-[16px] py-[16px] sm:px-10 sm:py-10`}
                    style={{
                      background:
                        'linear-gradient(111.14deg, #60628C 4.56%, #4B4D72 97.76%)',
                    }}
                  >
                    <p className=" md:flex font-manrope font-semibold sm:text-2xl text-white md:text-center">
                      {profile.objective}
                    </p>
                  </div>
                </div>
              </div>
              {profile.awards && (
                <div className="hidden xl:flex md:w-[332px] md:h-100 bg-white">
                  <div className="w-full flex flex-row justify-end">
                    <div className="flex sm:flex-col pt-10 pr-10 gap-5">
                      {profile.awards?.map((award, index) => (
                        <Image
                          key={index}
                          src={`/professionalProfiles/awards/${
                            awards?.filter((value) => value.id == award)[0]
                              ?.title
                          }.png`}
                          width={
                            awards?.filter((value) => value.id == award)[0]
                              ?.width * 2
                          }
                          height={
                            awards?.filter((value) => value.id == award)[0]
                              ?.height * 1.5
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:hidden flex flex-col items-center justify-center gap-[10px]">
              <div className="flex flex-row gap-4 items-center">
                <hr className="w-[50px] border-[1px] border-white" />
                <div className="flex flex-col">
                  <span className="font-lora italic font-normal text-sm sm:text-xl text-white text-center whitespace-nowrap">
                    {profile.name}
                  </span>
                  <span className="font-lora italic font-normal text-sm sm:text-xl text-white text-center">
                    {profile.position}
                  </span>
                </div>

                <hr className="w-[50px] border-[1px] border-white" />
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center py-5 sm:py-[20px] md:py-[60px] px-4 sm:pt-[20px] md:pt-[100px] sm:px-6 md:p-[60px] gap-10 sm:gap-[100px] md:gap-[60px] bg-white rounded-lg"
              style={{
                boxShadow: '0px 5px 17px rgba(64, 76, 89, 0.06)',
              }}
            >
              <div className="flex flex-col items-start gap-5 sm:gap-12 w-full ">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl md:leading-[140%] md:tracking-[-0.03em] text-[#272940]">
                  <h2>{profile.industry.title}</h2>
                </span>
                <p
                  style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
                  className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]"
                >
                  {parse(profile.industry.description)}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:gap-8 w-full">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl md:leading-[140%] md:tracking-[-0.03em] text-[#272940]">
                  <h2>Attorney Snapshot</h2>
                </span>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
                  <ul className="w-full md:w-1/2 flex flex-col gap-6 list-disc list-outside pl-4">
                    {profile.snapshots.items
                      .slice(0, Math.ceil(profile.snapshots.items.length / 2))
                      .map((item, index) => (
                        <li key={index}>
                          <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
                            {parse(item.title)}
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
                            {parse(item.title)}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {/* <div className="flex flex-col items-start gap-4 sm:gap-8 w-full">
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
              </div> */}
              <div className="flex flex-col items-start gap-4 sm:gap-8 w-full">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl leading-[140%] tracking-[-0.03em] text-[#272940]">
                  <h2>Patent Technical Areas</h2>
                </span>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-8 w-full">
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
                </div> */}
                <div className="w-full">
                  <div className="w-full flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {profile.industries.map((industry, index) => {
                      if (industry.technicalAreas.length > 0) {
                        return (
                          <div
                            key={`industry-${index}`}
                            className="flex flex-col w-full h-full md:h-[385px] border-2 p-[24px] "
                          >
                            <div className="w-full flex mb-5">
                              <span className="font-manrope text-[#272940] text-xl font-medium">
                                {industry.title}
                              </span>
                            </div>
                            <div>
                              {industry.technicalAreas.map((item) => {
                                return (
                                  <div
                                    key={`${item.title}`}
                                    className="flex flex-col"
                                  >
                                    <span className="text-base text-[#7A7B94]">{`• ${item.title}`}</span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InnerContainer>
        <IpNewsBlog
          news={reduceMorePost?.sort(() => Math.random() - 0.5).slice(0, 3)}
          isblog={true}
          title={noArticles ? 'hide' : `Articles by ${profile.name}`}
        />
      </Container>
      <Footer />
    </>
  )
}
