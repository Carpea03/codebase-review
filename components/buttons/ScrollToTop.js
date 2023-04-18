import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  return (
    <button className="fixed w-24 h-24 bg-[#FFCE4F]">
      <FaArrowCircleUp style={{ display: visible ? "inline" : "none" }} />
    </button>
  );
}
