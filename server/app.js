const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["Get", "Post"],
  },
});

io.on("connection", (socket) => {
  console.log("user disconnected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3001, () => {
  console.log("server is listening on port 3001");
});
