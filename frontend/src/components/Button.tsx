import React, { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: "blue" | "purple" | "green" | "red" | "yellow" | "";
  isDarkMode?: boolean;
}

export const Button: React.FC<IButton> = ({
  label,
  color,
  isDarkMode,
  onClick,
}) => {
  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={onClick}
        className={`
          w-full
          h-[3.1rem] 
          inline-block
          px-6 
          py-2.5
          bg-${color}-500
          text-white
          font-medium
          text-lg
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-${color}-700 hover:shadow-lg
          focus:bg-${color}-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-${color}-800 active:shadow-lg 
          transition duration-150 ease-in-out
          ${isDarkMode ? "text-white" : "text-[#333333]"}
        `}
      >
        {label}
      </button>
    </div>
  );
};
