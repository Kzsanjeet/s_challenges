const http = require("http")
const express = require("express")
const path = require("path")
const {Server} = require("socket.io")
const { Socket } = require("engine.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

//socketio 

io.on("connection", (socket)=>{
    console.log("new connection established",socket.id)
})

app.use(express.static(path.resolve("./public")))

app.get("/",(req,res)=>{
    res.sendFile("./public/index.html")
})

server.listen(4000,()=>{
    console.log(`Server is running on port ${4000}`)
})