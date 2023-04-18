import Link from "next/link";
import React from "react";

export default function SubMenuBlock({ contents }) {
  return (
    <div className="flex-1 md:flex flex-row pl-12 pt-8 md:pr-12 xl:pr-40 gap-8 bg-[#FFFEF8] font-manrope font-semibold text-sm">
      {contents.length > 0 &&
        contents.map((content, i) => {
          return (
            <div
              key={i}
              className="flex-1 justify-start items-start gap-8 h-full"
            >
              <div className="flex flex-col justify-start item-start gap-[10px]">
                {content.length > 0 &&
                  content.map((c, k) => {
                    return (
                      <div key={k}>
                        {c.division && <p key={k} className="h-8" />}
                        {!c.division && (
                          <span
                            key={k}
                            className={`cursor-pointer ${
                              c.bold
                                ? "text-[#272940]"
                                : "text-[#272940]/60 py-[5px]"
                            }`}
                          >
                            <Link
                              href={{
                                pathname: "/profile",
                                query: { data: c.title },
                              }}
                            >
                              {c.title}
                            </Link>
                          </span>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}