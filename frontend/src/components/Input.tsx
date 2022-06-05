import React, {
  CSSProperties,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  useCallback,
} from "react";

import { currency } from "../utils/masks";

interface IInput {
  mask: string;
  label: string;
  inputId: string;
  type: HTMLInputTypeAttribute;
}

export const Input = ({ mask, label, type, inputId, ...props }: IInput) => {
  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => mask === "currency" && currency(event),
    [mask]
  );

  return (
    <div className="form-floating mb-2 max-w-md">
      <input
        {...props}
        onKeyUp={handleKeyUp}
        type={type}
        id={inputId}
        className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      />
      <label htmlFor="floatingInput" className="text-gray-700">
        {label}
      </label>
    </div>
  );
};
