import { useCallback, InputHTMLAttributes, FocusEventHandler } from "react";

import { currency, phone } from "../utils/masks";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  mask?: "currency" | "phone";
  label?: string;
  isDarkMode?: boolean;
  inputId: string;
}

export const Input = ({
  mask,
  label,
  type,
  inputId,
  isDarkMode,
  ...props
}: IInput) => {
  const handleKeyUp: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) =>
      (mask === "currency" && currency(event)) ||
      (mask === "phone" && phone(event)),
    [mask]
  );

  return (
    <div className="form-floating mb-2 max-w-md">
      <input
        {...props}
        onBlur={handleKeyUp}
        id={inputId}
        className={`form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          shadow
          ease-in-out
          m-0
          ${
            isDarkMode
              ? "bg-[#0e0628] focus:bg-[#0e0628] focus:border-white focus:text-gray-200 text-gray-200"
              : "focus:text-gray-700 focus:bg-white focus:border-blue-600"
          }
           focus:outline-none`}
      />
      <label
        htmlFor="floatingInput"
        className={`${isDarkMode ? "text-gray-200" : "text-gray-500"}`}
      >
        {label}
      </label>
    </div>
  );
};
