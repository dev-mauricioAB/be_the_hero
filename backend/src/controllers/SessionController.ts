import { connection } from "../database/connection";

export default {
  async create(request: any, response: any) {
    const { id } = request.body;

    const user = await connection("users")
      .where("id", id)
      .select("name")
      .first();

    if (!user) {
      return response
        .status(400)
        .json({ error: "No USER found with this ID." });
    }

    return response.json(user);
  },
};
