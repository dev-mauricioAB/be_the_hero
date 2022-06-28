import React, { useContext } from "react";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import { ThemeContex } from "../contexts/ThemeContext";

export const Toggle: React.FC = () => {
  const { isDarkMode, handleTheme } = useContext(ThemeContex);

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
          !isDarkMode
            ? "bg-gray-400 border-gray-600"
            : "bg-gray-300 border-[#7851fc]"
        }
      `}
      onClick={() => handleTheme(isDarkMode)}
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
          ${!isDarkMode ? "bg-white" : "translate-x-5 bg-gray-700"}
        `}
      >
        {!isDarkMode ? (
          <MdOutlineLightMode />
        ) : (
          <MdNightlightRound color="white" />
        )}
      </div>
    </div>
  );
};
