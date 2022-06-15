import React from "react";

import herosImg from "../assets/heroes.png";

interface IAnimation {
  isDarkMode: boolean;
}

export const Animation: React.FC<IAnimation> = ({ isDarkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div
          className={`
            absolute
            top-0
            -left-4
            w-72
            h-72
            bg-purple-300
            rounded-full
            opacity-70
            filter
            blur-xl           
            animate-blob
            ${!isDarkMode && "mix-blend-multiply"} 
          `}
        ></div>
        <div
          className={`
            absolute
            top-0
            -right-4
            w-72
            h-72
            bg-yellow-300
            rounded-full
            filter
            blur-xl
            opacity-70
            animate-blob
            animation-delay-2000
            ${!isDarkMode && "mix-blend-multiply"} 
          `}
        ></div>
        <div
          className={`
            absolute
            -bottom-8
            left-20
            w-72
            h-72
            bg-pink-300
            rounded-full
            filter
            blur-xl
            opacity-70
            animate-blob
            animation-delay-4000
            ${!isDarkMode && "mix-blend-multiply"} 
          `}
        ></div>
        <div className="m-8 relative space-y-4">
          <img src={herosImg} alt="Heroes" />
        </div>
      </div>
    </section>
  );
};
