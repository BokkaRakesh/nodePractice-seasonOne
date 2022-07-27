const http = require('http');

const routes = require('./routes')

console.log("data from routes", routes.dummyTest);
const server = http.createServer(routes.handler);

server.listen(3000);