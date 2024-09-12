require("dotenv").config();
const MessageServices = require("./src/services/MessageServices.js");

const jwtDecode = require("./src/utils/jwtDecode.js");

const app = require("./src/app.js");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.URL_FRONTEND,
  },
});

const messageServices = new MessageServices();

const PORT = process.env.PORT;

io.on("connection", (socket) => {
  const [, token] = socket.handshake.auth.token.split(" ");
  const decoded = jwtDecode(token);
  console.log(`User connected: ${decoded.user.id}`);

  socket.on("joinRoom", (data) => {
    socket.join(data.room);
    console.log(`User id: ${decoded.user.id} joined room: ${data.room}`);
  });

  socket.on("leaveRoom", (data) => {
    socket.leave(data.room);
    console.log(`User id: ${decoded.user.id} left room: ${data.room}`);
  });

  socket.on("sendMessage", async ({ data, room }) => {
    try {
      data.sender_id = decoded.user.id;
      const novaMsg = await messageServices.criarRegistro(data);
      io.to(`${room}`).emit("receiveMessage", novaMsg);

      console.log("deu certo salvar");
    } catch (error) {
      console.log("deu errado salvar");
    }
  });

  ///desc
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${decoded.user.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
