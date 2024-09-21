import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import locationsRouter from './routes/locations';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

mongoose.connect("mongodb+srv://api-user:FFNdCS7lPY8tRYFN@connectfarm.pmcal9p.mongodb.net/ConnectFarm?retryWrites=true&w=majority&appName=ConnectFarm", { appName: "ConnectFarm" });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', locationsRouter);
app.get('/balance', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/weight.html'));
});

export default app;
