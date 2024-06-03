const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: ["http://localhost:5173"],
    },
});

io.on("connection", socket => {
    console.log("connected with id " + socket.id);
    socket.on("move", (gridArray) => {
        console.log("gridArray", gridArray)
        socket.broadcast.emit("move response",gridArray)
    })

    socket.on("result", (result) => {
        socket.broadcast.emit(result)
    })

    socket.on("disconnect", () => {
        console.log("disconnected with id " + socket.id);
    })
})

httpServer.listen(8080);