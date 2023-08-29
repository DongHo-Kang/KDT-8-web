const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

//////////////소켓
io.on('connection', (socket) => {
    // socket.on('new_message', (arg, cb) => {
    //     console.log(arg);
    //     cb(arg);
    // });
    socket.on('hello', (data) => {
        console.log(`${data.name} : ${data.message}`);
        socket.emit('cbHello', { name: 'server', message: '안녕하세요' });
    });
    socket.on('study', (data) => {
        console.log(`${data.name} : ${data.message}`);
        socket.emit('cbStudy', { name: 'server', message: '공부합시다' });
    });
    socket.on('bye', (data) => {
        console.log(`${data.name} : ${data.message}`);
        socket.emit('cbBye', { name: 'server', message: '잘가`~' });
    });
});

//서버오픈
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
