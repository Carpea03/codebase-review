import React from "react";

export const TitleContainer = ({
  title,
  description,
  subDescription,
  background = {},
}) => {
  return (
    <div
      style={{
        background: background,
      }}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-8">
        <span className="uppercase font-manrope font-semibold sm:font-bold text-xs sm:text-[26px] sm:leading-9 md:text-xl text-[#40320F]/50">
          {title}
        </span>
        <div className="flex flex-col items-center gap-1 md:gap-8">
          <div className="flex items-center justify-center">
            <span className="font-lora font-medium text-xl sm:text-[44px] leading-none md:text-5xl text-[#272940] text-center">
              {description}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-lora font-medium text-xl sm:text-[44px] leading-none md:text-5xl text-[#8370D5] md:text-[#5F618C] text-center">
              {subDescription}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
