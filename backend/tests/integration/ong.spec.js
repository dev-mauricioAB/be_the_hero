const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await
      request(app)
        .post('/ongs')
        .send({
          name: "APAD8",
          email: "teste88@test.com",
          whatsapp: "9999999999",
          city: "Rio do Sul",
          uf: "SC"
        });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});