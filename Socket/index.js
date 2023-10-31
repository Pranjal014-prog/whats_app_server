import { Server } from "socket.io";
const io = new Server(8000, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
let users = [];

const addUser = (userData, socketId) => {
    console.log(userData);
    
    // Use the 'users' array to check for duplicates
    if (!users.some(user => user.Name === userData.name)) {
        users.push({ ...userData, socketId });
    }
}
const getUser=(userName)=>{
    return users.find(user=>user.Name===userName);
}
io.on('connection', (socket) => {
    console.log("user Connected");
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    socket.on('sendMessage',data=>{
        const user=getUser(data.receiverName);
        io.to(user.socketId).emit('getMessage',data);
    })
})
