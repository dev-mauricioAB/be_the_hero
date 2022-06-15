import React, { useState } from "react";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";

interface IToggle {
  handleSetDarkMode: () => void;
}

export const Toggle: React.FC<IToggle> = ({ handleSetDarkMode }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={`
        md:w-[3.3rem]
        md:h-7 
        w-11
        h-6 
        flex 
        items-center b
        bg-gray-300 
        rounded-full 
        p-[3px]
        py-4 
        cursor-pointer
        border-2
        
        ${
          toggle
            ? "bg-gray-400 border-gray-600"
            : "bg-gray-300 border-[#7851fc]"
        }
      `}
      onClick={() => {
        setToggle(!toggle);
        handleSetDarkMode();
      }}
    >
      <div
        className={`
          flex
          justify-center
          items-center
          md:w-6 
          md:h-6 
          h-5 
          w-5
          p-0
          m-0
          rounded-full 
          shadow-md 
          transform
          transition
          ${toggle ? "bg-white" : "translate-x-5 bg-gray-700"}
        `}
      >
        {toggle ? <MdOutlineLightMode /> : <MdNightlightRound color="white" />}
      </div>
    </div>
  );
};
