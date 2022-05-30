import React, { useCallback } from "react";

import { currency } from "../utils/masks";

const Input = ({ mask, ...props }) => {
  const handleKeyUp = useCallback(
    (event) => (mask === "currency") && currency(event),
    [mask]
  );

  return (
    <div className="input-group prefix">
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
