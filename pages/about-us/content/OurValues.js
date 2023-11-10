import React from 'react'
import Image from 'next/image'

const Title = ({ text }) => {
  return (
    <span className="font-lora font-medium text-2xl sm:text-5xl md:text-[32px] leading-[140%] tracking-[-0.03em] text-[#272940]">
      {text}
    </span>
  )
}

const Content = ({ text }) => {
  return (
    <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
      {text}
    </span>
  )
}

export default function OurValues() {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Title text="Care, transparency and commerciality" />
        <Content
          text="Our core values are care, transparency and commerciality. At the heart
          of Baxter IP is a group of attorneys who really care about innovators,
          their projects and the change that they seek to create. Whether you
          are a member of in-house counsel for a multinational or a mum-and-dad
          entrepreneur, you can rest assured that our culture of care is for
          everyone."
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <Title text="We give back" />
        <div className="flex flex-row justify-center items-center w-full">
          <Image src="/aboutus/image-51.png" width={200} height={117} alt="" />
          <Image src="/aboutus/image-52.png" width={200} height={117} alt="" />
        </div>
        <Content text="Baxter IP is a benefactor of the UNSW Founder’s Program and provides pro-bono IP advice to their 10X and Health 10X cohorts each year. The Founder’s Program supports university students in establishing startups with a focus on social impact. For us, this is a modest but important start to giving back to the community and more generally to STEM education in Australia." />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <Title text="We support Australian Indigenous Causes" />
        <div className="flex flex-col items-center py-8 px-3 w-full">
          <Image src="/aboutus/image-53.png" width={366} height={55} alt="" />
        </div>
        <Content text="We continue the Baxter family tradition of supporting Australian Indigenous causes. Recently, we supported the Nunyara Centre at Officer, Victoria in using trade mark law to stop the indigenous word “Nunyara” from being adopted by a large cannabis company for one of its products." />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <Title text="We continue a philanthropic legacy" />
        <div className="flex flex-col items-center py-8 px-3 w-full">
          <Image src="/aboutus/image-54.png" width={210} height={124} alt="" />
        </div>
        <Content text="64 years ago, John Percy Hamilton Baxter, Chris’ great-grandfather, showed how one can use their innovative skills in business enterprise to develop wealth and, in turn, help people in need. The Percy Baxter Charitable Trust which he established is now one of the largest Philanthropic Charitable Trusts in Australia. Chris is closely involved in advising the Trust on a voluntary basis." />
      </div>
      <div className="flex flex-col items-start gap-4">
        <Title text="We step forwards" />
        <Content text="Historically, many family foundations give to causes that resonate with them, that have some intersection with the life experience of the trustees or where the family knows people involved in the charitable organisation. This was certainly true for the Baxter Charitable Trusts, and these are all good reasons to give. However, since 2017 and under Chris’ and his brother Richard’s initiative, the Baxter family started taking what might be described as a more innovative, data-driven approach. This now provides the family with a second layer of information to help the family assess the social impact of distribution decisions." />
      </div>
    </>
  )
}
