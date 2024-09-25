require("dotenv").config();
const MessageServices = require("./src/services/MessageServices.js");
const FriendRequestServices = require("./src/services/FriendRequestServices.js");

const jwtDecode = require("./src/utils/jwtDecode.js");

const app = require("./src/app.js");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.URL_FRONTEND,
  },
});

const messageServices = new MessageServices();
const friendRequestServices = new FriendRequestServices();
const userSockets = new Map();
const PORT = process.env.PORT;

io.on("connection", (socket) => {
  const [, token] = socket.handshake.auth.token.split(" ");
  const decoded = jwtDecode(token);
  userSockets.set(decoded.user.id, socket.id);

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

  socket.on("sendFriendRequest", async (data) => {
    try {
      data.sender_id = decoded.user.id;
      const novaSolicitacao = await friendRequestServices.criarSolicitacao(
        data
      );
      console.log(novaSolicitacao.dataValues.SenderUser.dataValues);
      const sender = userSockets.get(decoded.user.id);
      const recipient = userSockets.get(data.recipient_id);

      // io.to(sender).emit("sendFriendRequest", {
      //   message: "Friend request sent",
      // });
      io.to(recipient).emit("receiveFriendRequest", {
        request_id: novaSolicitacao.id,
        sender_id: decoded.user.id, // substituir
        status: "pending",
        recipient_id: data.recipient_id,
        sender: novaSolicitacao.dataValues.SenderUser.dataValues,
      });
    } catch (error) {}
  });

  ///desc
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${decoded.user.id}`);
    userSockets.delete(decoded.user.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
