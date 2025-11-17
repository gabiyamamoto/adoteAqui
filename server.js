import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import petsRoutes from "./src/routes/petsRoutes.js";
import tiposRoutes from './src/routes/tiposRoutes.js';
import { seed } from "./prisma/seed.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.post("/run-seed", async (req, res) => {
  try {
    await seed();
    res.send("Seed executado com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao executar seed");
  }
});

app.use("/pets", petsRoutes);
app.use('/tipos', tiposRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});