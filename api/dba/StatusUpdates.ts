import { db } from "../db";

class StatusUpdates {
  public async getAll() {
    return db("StatusUpdate")
      .leftJoin("Person", {
        "StatusUpdate.authorId": "Person.id"
      })
      .leftJoin("Like", { "Like.statusUpdateId": "StatusUpdate.id" })
      .select(
        "Person.id as authorId",
        "Person.firstName",
        "Person.lastName",
        "Person.avatarUrl",
        "StatusUpdate.content",
        "StatusUpdate.id as statusUpdateId"
      )
      .count("Like.id as likes");
  }

  public async getComments(statusUpdateId: number) {
    return db("Comment")
      .leftJoin("Person", {
        "Comment.authorId": "Person.id"
      })
      .select(
        "Person.id as authorId",
        "Person.firstName",
        "Person.lastName",
        "Person.avatarUrl",
        "Comment.content",
        "Comment.id as commentId"
      )
      .where("statusUpdateId", statusUpdateId);
  }
}

const inst = new StatusUpdates();

export default inst;
