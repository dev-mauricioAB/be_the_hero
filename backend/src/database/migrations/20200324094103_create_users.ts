import { Knex } from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("users", (table: any) => {
    table.string("id").primary();
    table.string("type").notNullable();
    table.string("password").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phoneNumber").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable("users");
};
