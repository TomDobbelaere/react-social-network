import Knex from "knex";
import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};

const instance: Knex = Knex(config as Knex.Config);
instance
  .raw("select 1")
  .then(() => {
    console.log(`Connected to database - OK`);
  })
  .catch(err => {
    console.error(`Failed to connect to database: ${err}`);
    process.exit(1);
  });

export const db = instance;
