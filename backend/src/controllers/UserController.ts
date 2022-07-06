import { connection } from "../database/connection";
import { generatorUniqueId } from "../utils/generateUniqueId";

import { User } from "../entities/user";

import { UserData } from "./../types/UserData";

export default {
  async index(request: any, response: any) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request: any, response: any) {
    const { password, name, email, whatsapp, city, uf } = request.body;

    const id = generatorUniqueId();

    const userData: UserData = {
      id,
      password,
      name,
      email,
      phoneNumber: whatsapp,
      city,
      uf,
      type: "ong",
    };

    const { value, isLeft, isRight } = User.create(userData);

    if (isLeft()) {
      response.statusCode = 400;
      return response.json({ value });
    } else if (isRight()) {
      await connection("ongs").insert(userData);
      return response.json({ id });
    }
  },
};
