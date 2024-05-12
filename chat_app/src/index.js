const express=require('express');
const app = express();
const http=require('http');
const path =require('path');
const server=http.createServer(app);
const {Server}=require("socket.io");
app.use(express.static(path.join(__dirname,"../public")));

const io=new Server(server);

io.on('connection',(socket)=>{
   socket.on("user-message",(message)=>{
    console.log("A new user message: ",message);
    io.emit('message',message);
   });
})

app.get('/',(req, res) => {
    res.status(200);
    res.send("hello world!");
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
