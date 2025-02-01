import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const ButtonCta = () => {
  return (
    <div>
      <button className="bg-[#eebf50] px-8 py-5 text-[#4f1590] font-work-sans font-bold rounded-[80px] flex justify-center items-center gap-3 text-[17px]">
        Mulai Belajar Sekarang
        <FaTelegramPlane />
      </button>
    </div>
  );
};

export default ButtonCta;
