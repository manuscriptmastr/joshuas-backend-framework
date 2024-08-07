import { createServer } from "node:http";
import { HomeController } from "./controllers/home.js";
import { UserController } from "./controllers/user.js";

const server = createServer((req, res) => {
  new HomeController().handle(req, res);
  new UserController().handle(req, res);
  res.end();
});

server.listen(3000);
