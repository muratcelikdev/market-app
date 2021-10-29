// @ts-ignore
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './json/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    'api/*': '/$1',
  })
);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running!');
});
