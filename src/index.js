import { createServer } from "node:http";

const createApp = () => {
  const stack = [];

  const app = (req, res) => {
    const [top = (i) => i] = stack;
    const { res: response } = top({ req, res });
    response.end();
  };

  app.use = (fn) => {
    const middleware = (ctx) =>
      fn(ctx, stack[stack.indexOf(middleware) + 1] ?? ((i) => i));
    return stack.push(middleware);
  };

  return app;
};

const app = createApp();

app.use(({ req, res }, next) => {
  console.log("Middleware 1", req.url);
  return next({ req, res });
});

app.use(({ req, res }, next) => {
  console.log("Middleware 2:incoming", req.url);
  res.write("Hello World");
  const context = next({ req, res });
  console.log("Middleware 2:outgoing", req.url);
  return context;
});

const server = createServer(app);

server.listen(3000);
