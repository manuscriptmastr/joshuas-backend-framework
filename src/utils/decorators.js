export const controller = (clazz, context) =>
  class extends clazz {
    handle(req, res) {
      const handler =
        context.metadata.handlers.find(({ match }) => match(req, res))
          ?.handler || (() => "No route handler found");
      return handler.call(this, req, res);
    }
  };

export const get = (route) => (method, context) => {
  context.metadata.handlers = context.metadata.handlers || [];
  context.metadata.handlers.push({
    match: (req, res) =>
      (route instanceof RegExp ? !!req.url.match(route) : req.url === route) &&
      req.method === "GET",
    handler: function (req, res) {
      req.tokens = req.url.match(route).groups || {};
      return method.call(this, req, res);
    },
  });
};

export const inject =
  (injectable) =>
  (value, { addInitializer, name }) => {
    addInitializer(function () {
      this[name] = new injectable();
    });
  };

export const json = (method, context) =>
  function (req, res) {
    res.setHeader("Content-Type", "application/json");
    return res.write(JSON.stringify(method.call(this, req, res)));
  };
