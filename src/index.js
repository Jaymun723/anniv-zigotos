const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve(__dirname, "../static")))

io.on("connection", (socket) => {
  console.log("a user connected")
  socket.on("sardoche", () => {
    socket.broadcast.emit("sardoche")
  })
  socket.on("continuer", () => {
    socket.broadcast.emit("continuer")
  })
})

server.listen(3000, () => {
  console.log("listening on *:3000")
})
