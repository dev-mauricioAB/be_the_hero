import { connection } from "../database/connection";
import { generatorUniqueId } from "../utils/generateUniqueId";

export default {
  async index(request: any, response: any) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request: any, response: any) {
    const { password, name, email, whatsapp, city, uf } = request.body;

    const id = generatorUniqueId();

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
  },
};
