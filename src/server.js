const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const path = require("path");

const http = require("http");
const socketio = require("socket.io");

const routes = require("./routes");

const app = express();

const server = http.Server(app);
const websocket = socketio(server);

mongoose.connect("mongodb+srv://omnistack:omnistack@omnistack-mqpwg.mongodb.net/week09?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connectedUsers = {};

websocket.on("connection", socket =>
{
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((request, response, next) => 
{
    request.io = websocket;
    request.connectedUsers = connectedUsers;
    
    return next();
});

app.use(cors())
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")))
app.use(routes);

server.listen(3333);
