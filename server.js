const http = require("http");
const io = require("socket.io");
const sockets = require("./sockets");
const apiServer = require("./api");

const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer);
const PORT = process.env.PORT || 80;

httpServer.listen(PORT);
console.log(`listening on PORT: ${PORT}`);

sockets.listen(socketServer);
