import Image from "next/image";
import React from "react";

const Title = ({ text }) => {
  return (
    <span className="font-lora font-medium text-2xl sm:text-5xl md:text-[32px] leading-[140%] tracking-[-0.03em] text-[#272940]">
      {text}
    </span>
  );
};

const Content = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-6 font-manrope font-medium text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
      {children}
    </div>
  );
};

export default function Philosophy() {
  return (
    <>
      <Title text="Our heritage, our legacy, our promise to you" />
      <div className="flex flex-row items-start gap-4">
        <span className="font-manrope font-semibold text-[120px] leading-[100px] tracking-[-0.03em] text-[#FFCE4F]">
          “
        </span>
        <div className="flex flex-col items-start gap-3">
          <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl leading-[150%] text-[#404266]">
            Upholding the highest standard of business ethics and ensuring our
            advice always serves the best interests of our clients. This is our
            guiding principle and our legacy.
          </span>
          <span className="font-lora italic font-semibold text-sm sm:text-2xl md:text-xl text-[#272940]">
            <b>Chris Baxter</b> - Founder and Director, Patent & Trade Mark
            Attorney
          </span>
        </div>
      </div>
      <Image src="/aboutus/image-55.png" width={321} height={233} alt="" />
      <Content>
        <span>
          We are passionate about providing intellectual property and advice
          that genuinely helps clients achieve their commercial goals and as
          such, here is our firm‘s commitment to you:
        </span>
        <ul className="list-decimal list-outside pl-6">
          <li>Your best interests are always at the forefront of our minds.</li>
          <li>
            We operate at the highest standard of professional ethics and
            personal integrity.
          </li>
          <li>
            The confidentiality of the information you provide to us will be
            protected as a matter of course – our IP firm takes pride in our
            spotless record of trust, intact since our inception in 2007.
          </li>
          <li>
            We regularly communicate with clients about intellectual property
            processes, possible outcomes and IP costs in an upfront and honest
            manner.
          </li>
          <li>
            We communicate in plain English to ensure that you understand
            relevant intellectual property law.
          </li>
          <li>
            Your matter will be handled efficiently and conscientiously to
            ensure that our work is not only of the highest quality but is
            completed without delay.
          </li>
          <li>
            We look for opportunities to help clients to profit from their
            intellectual property – often introducing clients to professional
            service providers who can assist them.
          </li>
          <li>
            We provide fixed-cost and capped-fee IP attorney services where
            possible to assist you with budgeting.
          </li>
          <li>
            Our patent firm’s intellectual property work will always be
            undertaken efficiently so as to provide you with the best possible
            value for money.
          </li>
          <li>
            We walk in our client’s shoes – we know what it is like because many
            of our IP attorneys have worked in-house at research & development
            firms.
          </li>
        </ul>
      </Content>
      <div className="flex flex-col md:flex-row items-center p-6 gap-6 bg-[#F6F6F8] rounded-md cursor-pointer">
        <Image src="/aboutus/portrait.png" width={150} height={150} alt="" />
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="font-manrope font-semibold text-lg sm:text-2xl text-[#404266] text-center md:text-left">
            “We promise you commercially astute IP advice“
          </span>
          <span className="font-lora italic text-sm sm:text-2xl md:text-xl text-[#272940] text-center md:text-left">
            <b>Michael Manak</b> - General Manager
          </span>
        </div>
      </div>
    </>
  );
}
