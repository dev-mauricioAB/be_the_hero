import { BinaryToTextEncoding } from "crypto";

export interface UserData {
  id: BinaryToTextEncoding;
  type: "ong" | "helper";
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  description: string;
}
