import fastify from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import StatusUpdates from "./dba/StatusUpdates";

const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({});

server.register(require("fastify-cors"), { origin: "*" });

server.get("/api/statusUpdate", async (req, res) => {
  const statusUpdates = await StatusUpdates.getAll();
  res.code(200).send(statusUpdates);
});

server.get("/api/statusUpdate/:id/comments", async (req, res) => {
  const comments = await StatusUpdates.getComments(req.params.id);
  res.code(200).send(comments);
});

server.listen(3001, (err, address) => {
  if (err) throw err;
  console.log(`server listening on ${address}`);
});
