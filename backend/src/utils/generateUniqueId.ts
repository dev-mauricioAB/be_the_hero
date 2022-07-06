import { randomBytes } from "crypto";

export const generatorUniqueId = () => {
  return randomBytes(4).toString("hex");
};
