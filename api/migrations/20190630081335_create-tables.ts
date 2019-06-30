import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable("Person", t => {
      t.increments("id")
        .unsigned()
        .primary();
      t.string("firstName");
      t.string("lastName");
      t.string("avatarUrl");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("updated_at").defaultTo(
        knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      );
    }),
    knex.schema.createTable("Comment", t => {
      t.increments("id")
        .unsigned()
        .primary();
      t.integer("authorId")
        .unsigned()
        .references("id")
        .inTable("Person");
      t.integer("statusUpdateId")
        .unsigned()
        .references("id")
        .inTable("StatusUpdate");
      t.string("content");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("updated_at").defaultTo(
        knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      );
    }),
    knex.schema.createTable("StatusUpdate", t => {
      t.increments("id")
        .unsigned()
        .primary();
      t.integer("authorId")
        .unsigned()
        .references("id")
        .inTable("Person");
      t.string("content");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("updated_at").defaultTo(
        knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      );
    }),
    knex.schema.createTable("Like", t => {
      t.increments("id")
        .unsigned()
        .primary();
      t.integer("personId")
        .unsigned()
        .references("id")
        .inTable("Person");
      t.integer("statusUpdateId")
        .unsigned()
        .references("id")
        .inTable("StatusUpdate");
      t.timestamp("created_at").defaultTo(knex.fn.now());
      t.timestamp("updated_at").defaultTo(
        knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
      );
    })
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.dropTableIfExists("Person"),
    knex.schema.dropTableIfExists("StatusUpdate"),
    knex.schema.dropTableIfExists("Comment"),
    knex.schema.dropTableIfExists("Like")
  ]);
}
