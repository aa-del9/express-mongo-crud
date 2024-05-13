import { TodoRouter } from "./todo.route.js";
const _routes = [["/todo", TodoRouter]];

export const routes = (app) => {
  _routes.map((route) => {
    const [url, router] = route;

    return app.use(url, router);
  });
};
