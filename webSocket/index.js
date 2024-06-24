// //for normal chat app

// const http = require("http");
// const express = require("express");
// const path = require("path");
// const { Server } = require("socket.io");

// const app = express();
// const PORT = 4000;
// const server = http.createServer(app);
// const io = new Server(server);

// // Handle socket connection
// io.on("connection", (socket) => {
//     console.log('A user connected');

//     // Listen for 'userMessage' event from client
//     socket.on("userMessage", (msg) => {
//         console.log('Message from user:', msg);
//         // Broadcast the message to all clients
//         io.emit("msgFromServer", msg);
//     });

//     // Handle socket disconnection
//     socket.on("disconnect", () => {
//         console.log('User disconnected');
//     });
// });

// // Serve static files from the 'client' directory
// app.use(express.static(path.resolve(__dirname, "./client")));

// // Serve the main HTML file
// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./client/index.html"));
// });

// // Start the server
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


//for specific chatapp
const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const PORT = 4000;
const server = http.createServer(app);
const io = new Server(server);

// Handle socket connection
io.on("connection", (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for 'userMessage' event from client
    socket.on("userMessage", (msg) => {
        console.log(`Message from user: ${socket.id}`, msg);
        // Include the sender's ID in the broadcasted message
        io.emit("msgFromServer", { id: socket.id, text: msg });
    });

    // Handle socket disconnection
    socket.on("disconnect", () => {
        console.log('User disconnected:', socket.id);
    });
});

// Serve static files from the 'client' directory
app.use(express.static(path.resolve(__dirname, "./client")));

// Serve the main HTML file
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/index.html"));
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
