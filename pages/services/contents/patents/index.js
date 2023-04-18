import React, { useState } from "react";
import PCTNationalPhaseAustralia from "./PCTNationalPhaseAustralia";

export default function Patents({ menus }) {
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <>
      <div className="w-full flex flex-row items-center bg-[#F3F3FA] overflow-x-auto scrollbar-hide">
        {menus.map((menu, index) => (
          <div
            className={`flex-1 flex-col items-center p-6 cursor-pointer ${
              selectedMenu === index ? "border-b-4 border-[#8C79D9]" : ""
            }`}
            onClick={() => setSelectedMenu(index)}
          >
            <span className="font-manrope font-semibold text-sm sm:text-xl text-[#404266] whitespace-nowrap">
              {menu.title}
            </span>
          </div>
        ))}
      </div>
      {selectedMenu === 0 && <PCTNationalPhaseAustralia />}
    </>
  );
}
