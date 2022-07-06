import { Knex } from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("incidents", (table: any) => {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("user_id").notNullable();

    table.foreign("user_id").references("id").inTable("users");
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable("incidents");
};
