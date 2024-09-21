import app from './app';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

// Cria um servidor HTTP
const server = http.createServer(app);

// Configura o Socket.io
const io = new Server(server);

// Quando um cliente se conecta via Socket.io
io.on('connection', (socket) => {
    console.log('Cliente conectado ao sistema de renderização');
});

// Rota do Webhook para receber dados da balança
app.post('/webhook', (req, res) => {
    const { weight } = req.body;
    console.log(`Webhook recebeu o peso: ${weight}`);

    // Envia o peso para o cliente via Socket.io
    io.emit('updateWeight', { weight });

    res.status(200).send('Peso recebido pelo sistema de renderização.');
});

// Inicia o servidor
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});