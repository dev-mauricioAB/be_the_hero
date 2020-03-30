const connection = require('../database/connection')
const generateUniquiId = require('../utils/generateUniqueId');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    const { password, name, email, whatsapp, city, uf } = request.body;

    const id = generateUniquiId();

    await connection('ongs').insert({
      id,
      password,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  }
};