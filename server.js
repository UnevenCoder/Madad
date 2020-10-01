const express = require('express');

const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})

exports.keepAlive=()=>{
    server.listen(3000, ()=>{console.log("Server is ready")})
}