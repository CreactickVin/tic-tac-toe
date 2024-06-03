const io = require("socket.io")(8080,{
    cors:{
        origin : ["http://localhost:5173"],
    },
})

io.on("connection", socket => {
    console.log("connected with id " + socket.id);

    socket.on("move",(gridArray) => {
        socket.broadcast.emit(gridArray)
    })

    socket.on("result",(result) => {
        socket.broadcast.emit(result)
    })

    socket.on("disconnect",() => {
        console.log("disconnected with id " + socket.id);
    })
})