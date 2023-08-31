import { Container } from '../../components/templates/Container'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { profiles } from '../../utils/const/profiles'
import { profiles as peoples, awards } from '../../utils/const/people'
import { InnerContainer } from '../../components/templates/InnerContainer'
import IpNewsBlog from '../../components/homepage/IpNewsBlog'
import { indexQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'

export const getStaticPaths = async () => {
  const paths = peoples[0]?.teamMembers?.slice(0, 8).map((item) => {
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

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const allPosts = overlayDrafts(await getClient(false).fetch(indexQuery))
    setReduceMorePost(allPosts)
  }

  return (
    <>
      <Header active={'Attorneys'} />
      <Container className="flex flex-col">
        <div className="bg-profile-bg !bg-cover">
          <InnerContainer>
            <div className="flex flex-col md:flex-row px-4 sm:px-16 md:px-16 xl:px-24 sm:pt-[100px]">
              <div className="w-full bg-white flex-col md:w-4/5 px-8 sm:px-12 pt-8 pb-14 sm:pt-0 sm:pb-0 gap-8">
                <div className="w-full flex flex-col sm:pt-5 sm:pb-[14px] gap-[17px]">
                  <span className="font-lora font-normal text-[32px] sm:text-5xl xl:text-[64px] xl:leading-[70px]">
                    {profile.name}
                  </span>
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-manrope font-medium text-base sm:text-[32px] sm:leading-[44px] sm:tracking-[-0.03em] md:text-xl xl:text-2xl text-[#272940]">
                      {profile.position}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row items-start h-full w-full gap-6 sm:gap-8 2xl:gap-[60px] xl:py-12">
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
                    <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl xl:text-2xl text-[#272940] whitespace-nowrap sm:pb-10 xl:pb-0">
                      {profile.telephone}
                    </span>
                  </div>
                </div>
              </div>
              <div className="xl: h-full flex flex-col bg-[#FFF]">
                <div>
                  <Image
                    src={profile.potrait}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }}
                    alt=""
                  />
                </div>
                <div
                  className={`xl:hidden flex w-full flex-row justify-center item-center md:flex-col ${
                    profile?.awards?.length > 0 ? 'pb-10' : 'pb-24'
                  }`}
                >
                  {profile?.awards?.length > 0 && (
                    <>
                      {profile.awards?.map((award, index) => (
                        <Image
                          key={index}
                          src={`/professionalProfiles/awards/${
                            awards?.filter((value) => value.id == award)[0]
                              ?.title
                          }.png`}
                          width={
                            awards?.filter((value) => value.id == award)[0]
                              ?.width * 1.5
                          }
                          height={
                            awards?.filter((value) => value.id == award)[0]
                              ?.height * 1.5
                          }
                          className="self-end m-5 sm:m-10 sm:mb-0"
                        />
                      ))}{' '}
                    </>
                  )}
                </div>
              </div>
            </div>
          </InnerContainer>
        </div>
        <InnerContainer>
          <div className="flex flex-col md:flex-row px-4 sm:px-16 md:px-16 xl:px-24 px">
            <div
              style={{
                background:
                  'linear-gradient(111.14deg, #60628C 4.56%, #4B4D72 97.76%)',
              }}
              className={`w-full ${
                profile?.awards?.length > 0 ? 'xl:w-[65.2%]' : ''
              } bg-white flex-col px-8 sm:px-12 pt-8 pb-14 sm:pt-0 sm:pb-0 gap-8 py-5`}
            >
              <p className="p-10 md:flex font-manrope font-semibold sm:text-2xl text-white text-left">
                {profile.objective}
              </p>
            </div>
            <div className="hidden xl:flex h-full flex flex-col bg-[#FFF] z-50">
              {profile?.awards?.length > 0 && (
                <div className="w-96 bg-white">
                  <div className="flex flex-col ">
                    {profile.awards?.map((award, index) => (
                      <Image
                        key={index}
                        src={`/professionalProfiles/awards/${
                          awards?.filter((value) => value.id == award)[0]?.title
                        }.png`}
                        width={
                          awards?.filter((value) => value.id == award)[0]
                            ?.width * 2
                        }
                        height={
                          awards?.filter((value) => value.id == award)[0]
                            ?.height * 1.5
                        }
                        className="self-end m-5 sm:m-10 sm:mb-0"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sm:w-full sm:px-5 md:px-16 xl:px-24">
            {/* <div className="px-11 md:px-0 flex flex-col md:flex-row ">
              <div
                className={`flex items-center px-10 py-10 ${
                  profile?.awards?.length > 0 ? 'xl:w-3/5' : ''
                } `}
                style={{
                  background:
                    'linear-gradient(111.14deg, #60628C 4.56%, #4B4D72 97.76%)',
                }}
              >
                <p className=" md:flex font-manrope font-semibold sm:text-2xl text-white text-center">
                  {profile.objective}
                </p>
              </div>
              <div
                className={`hidden xl:flex bg-white ${
                  profile?.awards?.length > 0 ? '' : ''
                }`}
              >
                {profile?.awards?.length > 0 && (
                  <div className="w-96 bg-white">
                    <div className="flex flex-col ">
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
                          className="self-end m-5 sm:m-10 sm:mb-0"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div> */}
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
              className="flex flex-col items-center justify-center py-[60px] px-4 sm:pt-[100px] sm:px-6 md:p-[60px] gap-[100px] md:gap-[60px] bg-white rounded-lg"
              style={{
                boxShadow: '0px 5px 17px rgba(64, 76, 89, 0.06)',
              }}
            >
              <div className="flex flex-col items-start gap-12 w-full ">
                <span className="font-lora font-medium text-2xl sm:text-5xl md:text-4xl md:leading-[140%] md:tracking-[-0.03em] text-[#272940]">
                  {profile.industry.title}
                </span>
                <p
                  style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
                  className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]"
                >
                  {profile.industry.description}
                </p>
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
        <IpNewsBlog
          news={reduceMorePost?.sort(() => Math.random() - 0.5).slice(0, 3)}
          isblog={true}
        />
      </Container>
      <Footer />
    </>
  )
}
