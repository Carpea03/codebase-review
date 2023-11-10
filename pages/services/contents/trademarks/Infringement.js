import Image from 'next/image'
import React from 'react'
import Content from '../Content'
import Subtitle from '../Subtitle'
import Title from '../Title'

export default function Infringement() {
  return (
    <div
      className="flex flex-col justify-center items-start p-[60px] gap-12 bg-white"
      style={{
        boxShadow: '0px 5px 17px rgba(64, 76, 89, 0.06)',
      }}
    >
      <div className="flex flex-col items-start gap-4">
        <Title>Trade mark infringement</Title>
        <Content>
          Trade mark registration grants the owner exclusive rights for using
          that trade mark in respect of the goods and services it is registered
          for. Nowadays, many business owners understand the need and benefits
          of trade mark registration, but business owners must also be aware
          that registration is not the last step to protecting your brand. It is
          up to business owners to be watchful of potential trade mark
          infringement and to ensure timely action is taken to enforce their
          rights.
        </Content>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Subtitle>What is trade mark infringement?</Subtitle>
        <Content>
          Trade mark infringement is the unauthorised use of a registered trade
          mark. A conduct will amount to trade mark infringement when a sign is
          used as a trade mark and is substantially identical or deceptively
          similar to a registered trade mark. As a trade mark owner, it is
          important to monitor the market and ensure that no third party is
          taking advantage of your IP rights or to take action quickly if you
          believe that they are.
        </Content>
        <Content>
          The registered owner of the trade mark may start legal proceedings
          against a party that violates its trade mark rights, and such conducts
          are heard in the Federal Court, Federal Circuit court, or the supreme
          court of an Australian state and territory.
        </Content>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Subtitle>How to identify trade mark infringement cases</Subtitle>
        <Content>
          Under Section 120 of the Trade Marks Act 1995 (Cth) a person infringes
          a registered trade mark by:
        </Content>
        <ol className="list-decimal list-inside font-manrope font-medium text-xl text-[#404266]">
          <li>
            <Content>
              Using a sign which is substantially identical or deceptively
              similar to a registered mark in relation to:
            </Content>
            <ol className="w-full list-disc list-outside flex flex-col items-start gap-4 pl-8 py-4">
              <li>
                <Content>
                  Verified English translation of the basic patent application
                </Content>
              </li>
              <li>
                <Content>
                  Notice of Entitlement (this can be prepared and signed by an
                  Australian Patent Attorney)
                </Content>
              </li>
              <li>
                <Content>
                  A copy of PCT Article 19 and PCT Article 34 amendments if not
                  published during the international phase
                </Content>
              </li>
              <li>
                <Content>
                  A copy of the International Preliminary Examination Report if
                  not published during the international phase
                </Content>
              </li>
            </ol>
          </li>
          <li>
            <Content>
              Using a “well-known” mark for unrelated goods and services to
              those of which the trade mark is registered for (trade mark
              dilution).
            </Content>
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <p class="truncate ... font-manrope font-medium text-3xl text-[#404266]">
          . . .
        </p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Subtitle>How to avoid trade mark infringement</Subtitle>
        <Content>
          Guaranteeing that your trade mark is unique from the onset can save
          your business from needlessly allocating budget and time. You should
          perform your due diligence and contact a trade mark attorney to help
          you perform a preliminary search of previously registered trade marks
          and pending applications before investing in developing a logo or a
          name.
        </Content>
        <Content>
          In other cases, the use of another person’s registered trade mark is
          not considered as trade mark infringement when the use is categorised
          as fair use.
        </Content>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Subtitle>Example of trade mark infringement</Subtitle>
        <Content>A Cautionary Tale</Content>
        <div className="flex flex-col items-center justify-center py-4 gap-4 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src="/services/product-1.png"
              width={800}
              height={250}
              alt=""
            />
          </div>
          <Content>
            Société Des Produits Nestlé SA & Anor v Christian & Anor (No.4)
            [2014] FCCA 2025 [46]
          </Content>
        </div>
        <Content>
          In Société Des Produits Nestlé SA & Anor v Christian & Anor (No.4)
          [2014] FCCA 2025 [46] James Christian, the proprietor of an online
          vitamin business called A-sashi Vitamins (a spin from the Japanese
          beer Asahi), incorporated and registered a business name, two domain
          names and a Facebook page bearing the word “A-sashi”.
        </Content>
        <Content>
          Nestlé, who owned a range of trade marks which contained the word
          MUSASHI in relation to performance vitamins and nutrition products,
          sued Christian and sought to cease the production of the A-sashi
          supplements. The court ruled that the ‘Sashi’ in both trade marks was
          similar enough for consumers to be confused into thinking that the
          products of both lines were connected. After an unsuccessful appeal,
          the court ordered Christian to pay Nestlé for damages. As of 2016,
          Christian was revealed to be still under debt to Nestlé.
        </Content>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <p class="truncate ... font-manrope font-medium text-3xl text-[#404266]">
          . . .
        </p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Content>
          This trade mark infringement case underlines the importance of having
          an original mark and performing a trade mark search that covers both
          similar and identical trade marks. A trade mark attorney specialises
          in this type of searches and will be able to assess the strength of
          your mark.
        </Content>
      </div>
    </div>
  )
}
