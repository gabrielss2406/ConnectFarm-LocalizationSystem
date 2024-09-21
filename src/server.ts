import app from './app';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Cliente conectado ao sistema de renderização');
});

app.post('/webhook', (req, res) => {
    const { weight, number } = req.body;
    io.emit('updateWeight', { weight, number });
    res.status(200).send('Peso recebido pelo sistema de renderização.');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});