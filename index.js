const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let activeAlerts = {};

io.on('connection', (socket) => {
    console.log('Dispositivo conectado:', socket.id);

    socket.on('send_sos_location', (data) => {
        activeAlerts[data.userId] = data;
        io.emit('admin_receive_alert', data);
    });

    socket.on('cancel_sos', (data) => {
        if (activeAlerts[data.userId]) {
            activeAlerts[data.userId].status = "cancelled";
            io.emit('admin_alert_cancelled', data);
            delete activeAlerts[data.userId];
        }
    });

    socket.on('disconnect', () => {
        console.log('Dispositivo desconectado');
    });
});

server.listen(3000, () => console.log('Servidor SOS corriendo'));
