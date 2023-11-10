import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import ReactPlayer from 'react-player'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

const contentPerRow = 6

export default function Videos() {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
  const router = useRouter()
  const [next, setNext] = useState(contentPerRow)
  const [showModal, setShowModal] = useState(false)
  const [playing, setPlaying] = useState('')

  const data = [
    { title: 'About Us', link: '/about' },
    { title: 'In The Media', link: '' },
  ]

  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=op8jN7gG8b4&t=18s',
      title: 'Chemical & Pharmaceutical Claims',
      image: '1.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=S_xtEfrTsgk&t=2s',
      title: 'What Makes a Good Trade Mark?',
      image: '2.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=IMPKGrpZEIg',
      title: 'What happens during the patent process?',
      image: '3.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=-ZeNXpNZiUM&t=1s',
      title: 'Software Inventions',
      image: '4.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=r2Dtk9AvmE8&t=6s',
      title: 'Who Owns the IP?',
      image: '5.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=8uirnfVwecU&t=291s',
      title: 'Sydney Startup | IP and your Startup - Chris Baxter',
      image: '6.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=r8qDYXaVzN4&t=1s',
      title: 'Baxter IP Client - Snaploader',
      image: '7.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=NU_eh8zb6Uk&t=2s',
      title: 'Term Sheet in Patent Licensing (extended) Part 3- John Baxter',
      image: '8.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=ToNhICvbAIE',
      title:
        'Term Sheets part 2, Provisional Patents, What is a patent attorney? - Patent News 15/10/12',
      image: '9.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=SnkupFN_oic&t=1s',
      title: 'Term Sheet in Patent Licensing (extended) Part 2- John Baxter',
      image: '10.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=3__jZeD0my4',
      title: 'What is a Patent Attorney? - Chris Baxter',
      image: '11.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=Q4ukemsRbO4&t=1s',
      title: 'Provisional Patent Process - Chris Baxter',
      image: '12.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=QBYEPVWLWhU',
      title: 'Government Grants and commercialisation with Stuart Smith',
      image: '13.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=yl8L7tuwNuI',
      title: 'Term Sheet in Patent Licensing (extended) Part 1- John Baxter',
      image: '14.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=HSrERalxbrc',
      title:
        'International Patents, Exercise Innovation, Licensing Strategies - Patent News 13/08/12',
      image: '15.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=a6XIWnx9oxs',
      title: 'Baxter IP Client Interview - Glen Titmuss, GT Express',
      image: '16.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=NfqBKEBdrCA&t=1s',
      title:
        'Apple Samsung Jury Verdict, Subsoil Drainage Installation Technology, HouseNet - Patent News 3/09/12',
      image: '17.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=deMc-sT8R-A',
      title: 'Term Sheet in Patent Licensing - John Baxter',
      image: '18.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=PXenlUVaSNo',
      title: 'Baxter IP Client Interview - Mark Wilson from DITJET',
      image: '19.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=cGOUEq6C3eA',
      title: 'Apple Samsung UPDATE - Chris Baxter - 28/8/12',
      image: '20.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=ZCmFrgKiq8Y&t=1s',
      title:
        'Commercialisation Avenues, Patent Licensing, How To Draft Patent Claims - Patent News 27/08/12',
      image: '21.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=GQ3g189OVw4',
      title: 'How to Patent - Onion Rings - Chris Baxter',
      image: '22.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=PBkNAuqwdkA&t=1s',
      title: 'Patent Commercialisation Avenues - Greg Gering',
      image: '23.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=nVi0emRy2fw',
      title: 'Innovation Patents - Chris Baxter',
      image: '24.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=d2ut0-14OZk',
      title: 'Client Interview - Guy Dixon (NINA)',
      image: '25.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=50bu_GBOgKc',
      title: 'Patent Licensing Strategy - John Baxter',
      image: '26.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=TZ8ExdKE6_o&t=1s',
      title:
        'Australian R&D Tax Credit System, Upcoming Changes in Australian Patent Law - Patent News 07/08/12',
      image: '27.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=CCJ9p7AaRi8&t=1s',
      title:
        'New Patent Legislation in Australia - Baxter IP Patent & Trade Mark Attorneys',
      image: '28.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=CCJ9p7AaRi8&t=1s',
      title:
        'Business Method Patents - Baxter IP Patent & Trade Mark Attorneys',
      image: '29.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=FTCrOm4gtEQ',
      title:
        'New Research and Development Tax Credit-Baxter IP Patent & Trade Mark Attorneys',
      image: '30.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=twWAVgBRaIg',
      title: 'Baxter IP Client Interview - Allen Liao',
      image: '31.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=t0Y1dprBPGQ',
      title: 'Baxter IP Client Interview - Karsten Jarke',
      image: '32.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=2a4DSgzB7aQ&t=1s',
      title:
        'Business Methods, New Sailing Technology, Environmental Patents - Patent News 30/07/12',
      image: '33.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=8XbeHFpNTHg',
      title:
        'Baxter IP Presentation on Patent Eligibility of Business Methods at LegalWise Seminar',
      image: '34.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=pU_v7W0G-xo',
      title: 'Ditjet Laying Subdrains',
      image: '35.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=5zZ5rf0QZ8Y&t=1s',
      title: 'Railway Sled Commercialisation Success - 7:30 Report',
      image: '36.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=wui-xYwC85M',
      title: 'Misting Machine Commercialisation Success - Channel 9',
      image: '37.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=_NkDVa-usVM',
      title: 'Railway Sled Commercialisation Success - 7:30 Report',
      image: '38.jpg',
    },
  ]

  const onLoadMore = () => {
    if (next >= videos.length) {
      router.push('/')
      return
    }

    setNext(next + contentPerRow)
    if (next >= videos.length) {
    }
  }

  return (
    <>
      <Layout navData={data} active={'Values'}>
        <Head>
          <title>
            Videos | Baxter IP, Patent & Trade Mark Attorneys in the Media
          </title>
          <meta
            name="description"
            content="Baxter IP and client videos, news and Baxter IP Patent and Trade Mark Attorneys in the Media."
          />
          <link rel="canonical" href="https://www.baxterip.com.au/videos" />
          <link
            rel="alternate"
            href="https://www.baxterip.com.au/videos"
            hreflang="en-AU"
          />
          <link
            rel="alternate"
            href="https://www.baxterip.com.au/zh/%E8%A7%86%E9%A2%91"
            hreflang="zh"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://www.baxterip.com.au/videos"
          />
        </Head>
        <div className="mt-10"></div>
        <div className="md:p-5">
          <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.slice(0, next).map((item, index) => {
              return (
                <div key={`video-${index}`}>
                  <div
                    style={{ width: '100%', height: 190 }}
                    className="bg-[#D9D9D9] flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      setShowModal(true), setPlaying(item.url)
                    }}
                  >
                    <div className="absolute">
                      <FaPlay color="white" size={30}/>
                    </div>
                    <Image
                      src={`/videos/${item.image}`}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="pt-3 ">
                    <span className="text-[#272940] font-manrope text-[16px] sm:text-[20px] md:text-xl font-semibold">
                      {item.title}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col items-center pt-[60px]">
            <div
              onClick={() => onLoadMore()}
              className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
              style={{
                boxShadow:
                  '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
              }}
            >
              <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                {next >= videos.length ? 'Go To Homepage' : 'Load More'}
              </span>
            </div>
          </div>
        </div>
      </Layout>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className=" relative bg-[#9B9B9B] border-solid border-2 border-white w-[315px] h-[169px] sm:w-[676px] sm:h-[364px] md:w-[676px] md:h-[364px] lg:w-[1124px] lg:h-[605px]">
                <div
                  style={{ position: 'absolute', right: -30, top: -28 }}
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <Image src={'close.svg'} alt="" width={56} height={56} />
                </div>
                <ReactPlayer
                  url={playing}
                  width={'100%'}
                  height={'100%'}
                  playing
                  controls
                />
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  )
}
