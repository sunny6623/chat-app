const express = require("express");
const path = require("path");
const http = require("http");
const sockerio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = sockerio(server);

const port = process.env.port || 3000; // Corrected the port variable name
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  console.log("new websocket connection");
});

server.listen(port, () => {
  console.log("Server is up on port " + port);
});
