import { connection } from "../database/connection";
import { generatorUniqueId } from "../utils/generateUniqueId";

import { User } from "../entities/user";

import { UserData } from "./../types/UserData";

export default {
  async index(request: any, response: any) {
    const ongs = await connection("users").select("*");

    return response.json(ongs);
  },

  async create(request: any, response: any) {
    const { password, name, email, phoneNumber, city, uf } = request.body;

    const id = generatorUniqueId();

    const userData: UserData = {
      id,
      password,
      name,
      email,
      phoneNumber,
      city,
      uf,
      type: "ong",
    };

    const { value, isLeft, isRight } = User.create(userData);

    if (isLeft()) {
      return response.status(400).json({ value });
    } else if (isRight()) {
      await connection("users").insert(userData);
      return response.json({ id });
    }
  },
};
