import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import locationsRouter from './routes/locations';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI as string, { appName: "ConnectFarm" });

// Configuração de middleware
app.use(cors()); // Cors aberto para todas as requisições
app.use(express.json());

// Servir a página HTML
app.use(express.static(path.join(__dirname, '../public')));

// Usar as rotas de localização
app.use('/api', locationsRouter);

export default app
