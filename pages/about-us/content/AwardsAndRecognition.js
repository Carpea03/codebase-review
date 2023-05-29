import Image from 'next/image'
import React from 'react'

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

const Item = ({ img, title, description, content }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-4 w-full">
      <Image src={img} width={232} height={232} alt="" />
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-2">
          <span className="font-manrope font-semibold text-xl leading-[140%] tracking-[-0.03em] text-[#272940]">
            {title}
          </span>
          <span className="font-manrope font-medium text-base leading-[150%] text-[#A4A6BA]">
            {description}
          </span>
        </div>
        <span className="font-manrope font-medium text-base leading-[140%] text-[#404266]">
          {content}
        </span>
      </div>
    </div>
  )
}

export default function AwardsAndRecognition() {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <Title text="Awards & Recognition" />
        <Content text="Baxter IP, Patent & Trade Mark Attorneys has been increasingly awarded in recent years for its expertise in Australian patents and trade marks and particularly for its work in the field of software patents." />
      </div>
      <div className="flex flex-col items-start justify-center gap-6">
        <Item
          img="/aboutus/image-56.png"
          title="Software Patents IP Attorney Firm of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents IP Attorney Firm of the Year (Australia) in the 2021 Global Law Experts Annual Awards."
        />
        <Item
          img="/aboutus/image-57.png"
          title="Best Specialist Patent & Trade Mark Law Firm (Australia)"
          description="2020 AI ACQUISITION INTERNATIONAL - GLOBAL EXCELLENCE AWARDS"
          content="Baxter IP was selected as Best Specialist Patent & Trade Mark Law Firm (Australia) in the 2020 AI Acquisition International – Global Excellence Awards."
        />
        <Item
          img="/aboutus/image-58.png"
          title="Software Patents IP Attorney Firm of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents Attorney Firm of the Year (Australia) in the 2019 Corporate INTL Global Awards."
        />
        <Item
          img="/aboutus/image-59.png"
          title="Finalist - Intellectual Property Team of the Year"
          description="2019 LAWYERSWEEKLY - AUSTRALIAN LAW AWARDS"
          content="Baxter IP was one of the finalists as Intellectual Property Team of the Year (2019) in the 19th LawyersWeekly – Australian Law Awards."
        />
        <Item
          img="/aboutus/image-60.png"
          title="Software Patents IP Attorney Firm of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents Attorney Firm of the Year (Australia) in the 2019 Corporate INTL Global Awards."
        />
        <Item
          img="/aboutus/image-61.png"
          title="Software Patents IP Attorney Firm of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents Attorney Firm of the Year (Australia) in the 2019 Corporate INTL Global Awards."
        />
        <Item
          img="/aboutus/image-62.png"
          title="Software Patents IP Attorney Firm of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents Attorney Firm of the Year (Australia) in the 2019 Corporate INTL Global Awards."
        />
        <Item
          img="/aboutus/image-63.png"
          title="Patent & Trade Mark Attorneys of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents Attorney Firm of the Year (Australia) in the 2019 Corporate INTL Global Awards."
        />
        <Item
          img="/aboutus/image-64.png"
          title="Software Patents IP Attorney Firm of the Year (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as Software Patents Attorney Firm of the Year (Australia) in the 2019 Corporate INTL Global Awards."
        />
        <Item
          img="/aboutus/image-65.png"
          title="Best Full-Service Patent Attorney Firm (Australia) & Recognised Lead in Software & Medical Device Patents (Australia)"
          description="2021 GLOBAL LAW EXPERTS ANNUAL AWARDS"
          content="Baxter IP was selected as winner in the 2016 AI Intellectual Property Awards for Best Full-Service Patent Attorney Firm and Recognised Lead in Software & Medical Device Patents in Australia."
        />
      </div>
    </>
  )
}
