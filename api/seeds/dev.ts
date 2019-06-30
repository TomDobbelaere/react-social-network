import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex("Person").del();
  await knex("Person").insert([
    { id: 1, firstName: "Donald", lastName: "Trump", avatarUrl: "trump.jpg" },
    {
      id: 2,
      firstName: "Woody",
      lastName: "Fromtoystory",
      avatarUrl: "woody.jpg"
    }
  ]);

  await knex("StatusUpdate").del();
  await knex("StatusUpdate").insert([
    {
      id: 1,
      authorId: 1,
      content:
        "This trade deal is the greatest trade deal in the history of trade deals, ever!"
    },
    { id: 2, authorId: 2, content: "I kinda miss Andy, tbh.." }
  ]);

  await knex("Like").del();
  await knex("Like").insert([{ id: 1, personId: 2, StatusUpdateId: 1 }]);

  await knex("Comment").del();
  await knex("Comment").insert([
    {
      id: 1,
      authorId: 1,
      StatusUpdateId: 2,
      content: "Why miss Andy when you can have a billion dollars?"
    },
    { id: 2, authorId: 2, StatusUpdateId: 2, content: "Ugh.." }
  ]);
}
