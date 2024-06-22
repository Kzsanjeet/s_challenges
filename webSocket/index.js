// const http = require("http")
// const express = require("express")
// const path = require("path")
// const {Server} = require("socket.io")


// const app = express()
// const server = http.createServer(app)
// const io = new Server(server)

// //socketio 
// io.on("connection", (socket)=>{   // receive socket on connection
//     socket.on("userMessage",(msg)=>{
//         io.emit("message recieved and sent",msg)
//         })
// })

// app.use(express.static(path.resolve("./public")))

// app.get("/",(req,res)=>{
//     res.sendFile("./public/index.html")
// })

// server.listen(4000,()=>{
//     console.log(`Server is running on port ${4000}`)
// })

const http = require("http")
const express = require("express")
const path = require("path")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

//socketio 
io.on("connection", (socket) => {   // receive socket on connection
    socket.on("userMessage", (msg) => {
        io.emit("messageFromServer", msg)  // Changed the event name to match the client-side
    })
})

app.use(express.static(path.resolve(__dirname, "./public")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"))
})

server.listen(4000, () => {
    console.log(`Server is running on port 4000`)
})
