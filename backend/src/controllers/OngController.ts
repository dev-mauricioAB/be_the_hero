import { connection } from "../database/connection";
const generateUniquiId = require("../utils/generateUniqueId");

export default {
  async index(request: any, response: any) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request: any, response: any) {
    const { password, name, email, whatsapp, city, uf } = request.body;

    const id = generateUniquiId();

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
