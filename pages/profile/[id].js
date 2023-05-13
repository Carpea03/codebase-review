import { Container } from '../../components/templates/Container'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { profiles } from '../../utils/const/profiles'

const peoples = [
  'chris-baxter',
  'naleesha-niranjan',
  'andrew-balis',
  'martin-earley',
]

export const getStaticPaths = async () => {
  const paths = peoples.map((item) => {
    return {
      params: { id: item.toString() },
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
  return (
    <>
      <Header />
      <Container className="flex flex-col">
        <div className="w-full h-full sm:h-[1085px] md:h-[515px] bg-profile-bg !bg-cover flex flex-col md:flex-row justify-end items-center px-4 sm:px-16 md:px-16 xl:px-24 2xl:px-40 pt-[90px] sm:pt-[100px]">
          <div
            className="w-full md:w-3/5 h-full flex flex-col px-8 sm:px-12 pt-8 pb-14 sm:pt-0 sm:pb-0 gap-8 bg-white"
            style={{
              clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)',
            }}>
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
            <Image
              src={profile.potrait}
              width={389}
              height={474}
              alt=""
            />
          </div>
        </div>
        <div className="px-4 sm:px-16 md:px-16 xl:px-24 2xl:px-40 pb-40 sm:pb-60">
          <div
            className="flex flex-col items-center sm:gap-8 px-4 sm:px-8 sm:py-14 md:px-12 py-6"
            style={{
              background:
                'linear-gradient(111.14deg, #60628C 4.56%, #4B4D72 97.76%)',
            }}>
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
          </div>
          <div
            className="flex flex-col items-center justify-center py-[60px] px-4 sm:pt-[100px] sm:px-6 md:p-[60px] gap-[100px] md:gap-[60px] bg-white rounded-lg"
            style={{
              boxShadow: '0px 5px 17px rgba(64, 76, 89, 0.06)',
            }}>
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
                    .slice(0, Math.ceil(profile.publications.items.length / 2))
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
                    className="flex flex-row items-center px-6 gap-8">
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
      </Container>
      <Footer />
    </>
  )
}
