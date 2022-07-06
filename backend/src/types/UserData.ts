export interface UserData {
  id: string;
  type: "ong" | "helper";
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  uf: string;
}
