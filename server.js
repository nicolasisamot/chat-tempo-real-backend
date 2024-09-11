require("dotenv").config();
const app = require("./src/app.js");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.URL_FRONTEND,
  },
});

const PORT = process.env.PORT;

io.on("connection", (socket) => {
  const token = socket.handshake.auth.token;
  console.log(`User connected: ${socket.id}`);
});
io.on("disconnect", (socket) => {
  console.log(`User disconnected: ${socket.id}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
