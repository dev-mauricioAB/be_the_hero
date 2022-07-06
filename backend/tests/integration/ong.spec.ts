import request from "supertest";

import { app } from "@/app";
import { connection } from "@/database/connection";
import { UserData } from "@/types/UserData";

const mokeUser = {
  name: "APAD8",
  email: "teste88@test.com",
  phoneNumber: "9999999999",
  city: "Rio do Sul",
  password: "123",
  uf: "SC",
};

describe("users", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new USER", async () => {
    const response = await request(app).post("/user").send(mokeUser);

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should be able error because of invalid post data", async () => {
    const response = await request(app).post("/user").send({
      name: "APAD8",
      email: "teste88@test.com",
      whatsapp: "9999999999",
      city: "Rio do Sul",
      uf: "SC",
    });

    expect(response.body);
  });
});
