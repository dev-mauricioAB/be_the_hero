import { randomBytes } from "crypto";

module.exports = function generatorUniqueId() {
  return randomBytes(4).toString("hex");
};
