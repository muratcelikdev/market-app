// @ts-ignore
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './json/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.REACT_APP_PORT || 80, () => {
  console.log('JSON Server is running!');
});
