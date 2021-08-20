let readyPlayerCount = 0;
console.log(`readyPlayerCount0 :${readyPlayerCount}`);
function listen(io) {
  console.log(`readyPlayerCount1 :${readyPlayerCount}`);
  io.on("connection", (socket) => {
    console.log(`a user is connected ${socket.id}`);
    socket.on("ready", () => {
      console.log(`Player ${socket.id} Ready`);
      readyPlayerCount++;
      console.log(`readyPlayerCount2 :${readyPlayerCount}`);
      if (readyPlayerCount % 2 === 0) {
        console.log(`readyPlayerCount3 :${readyPlayerCount}`);
        console.log("why start ");
        io.emit("startGame", socket.id);
      }
    });
    socket.on("paddleMove", (paddleData) => {
      socket.broadcast.emit("paddleMove", paddleData);
    });
    socket.on("ballMove", (ballData) => {
      socket.broadcast.emit("ballMove", ballData);
    });
    socket.on("disconnect", (reason) => {
      console.log(`Client ID: ${socket.id} is dc. cause: ${reason}`);
    });
  });
}

module.exports = {
  listen,
};
