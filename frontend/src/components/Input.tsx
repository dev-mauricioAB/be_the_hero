import React, { KeyboardEventHandler, useCallback } from "react";

import { currency } from "../utils/masks";

interface IInput {
  mask: string;
}

const Input = ({ mask, ...props }: IInput) => {
  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => mask === "currency" && currency(event),
    [mask]
  );

  return (
    <div className="input-group prefix">
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
