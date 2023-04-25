import React from "react";
import Content from "../Content";
import Subtitle from "../Subtitle";
import Title from "../Title";

export default function PCTNationalPhaseAustralia() {
  return (
    <div
      className="flex flex-col justify-center items-start p-9 md:p-[60px] gap-12 bg-white"
      style={{
        boxShadow: "0px 5px 17px rgba(64, 76, 89, 0.06)",
      }}
    >
      <div className="flex flex-col items-start gap-4">
        <Title>PCT National Phase Australia</Title>
        <Content>
          Australia is a member of the Patent Cooperation Treaty (PCT). The
          deadline for entry into the PCT national phase in Australia is 31
          months after the priority date of the PCT application.
        </Content>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Subtitle>
          Minimum filing requirements for national phase patent:
        </Subtitle>
        <Content>
          Australia is a member of the Patent Cooperation Treaty (PCT). The
          deadline for entry into the PCT national phase in Australia is 31
          months after the priority date of the PCT application.
        </Content>
        <ol className="list-disc list-outside flex flex-col items-start gap-4 pl-4">
          <li>
            <Content>PCT patent application publication number</Content>
          </li>
          <li>
            <Content>
              If the PCT patent application is in a language other than English,
              an English copy of the application, certified by its translator as
              a true and complete translationn
            </Content>
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Content>
          IP Australia may also request to complete the Australian national
          phase entry:
        </Content>
        <ol className="list-disc list-outside flex flex-col items-start gap-4 pl-4">
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
              A copy of the International Preliminary Examination Report if not
              published during the international phase
            </Content>
          </li>
        </ol>
      </div>
      <div className="flex flex-col items-start gap-4">
        <Subtitle>
          Not required under Australian patent law for PCT Australian national
          phase entry:
        </Subtitle>
        <ol className="list-disc list-outside flex flex-col items-start gap-4 pl-4">
          <li>
            <Content>Power of Attorney</Content>
          </li>
          <li>
            <Content>Declarations signed by the inventor(s)</Content>
          </li>
          <li>
            <Content>
              Any other form that needs to be executed by the applicant or
              inventor
            </Content>
          </li>
        </ol>
      </div>
    </div>
  );
}
