import { Knex } from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("incidents", (table: any) => {
    console.log("table: ", table);
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id").notNullable();

    table.foreign("ong_id").references("id").inTable("ongs");
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable("incidents");
};
