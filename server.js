import 'dotenv/config';
import express from 'express';
import petsRoutes from './src/routes/petsRoutes.js';
import tiposRoutes from './src/routes/tiposRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Bem-vindo à API AdoteAqui! 🐾',
        endpoints: {
            pets: '/pets'
        }
    })
})