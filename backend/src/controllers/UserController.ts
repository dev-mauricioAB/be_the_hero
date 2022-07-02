import { connection } from "../database/connection";
import { generatorUniqueId } from "../utils/generateUniqueId";

import { User } from "../entities/user";

export default {
  async index(request: any, response: any) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request: any, response: any) {
    const { password, name, email, whatsapp, city, uf } = request.body;

    const id = generatorUniqueId();

    const type = "ong";

    const user = User.create({
      id,
      type,
      name,
      email,
      password,
      phoneNumber: whatsapp,
      city,
      uf,
    });

    if (user.isRight()) {
      await connection("ongs").insert({
        id,
        password,
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      return response.json({ id });
    } else if (user.isLeft()) {
      return console.log(user.value);
    }
  },
};
