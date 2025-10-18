import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import colaboradorRoutes from "./routes/colaboradorRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

// Rota de status da API
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API de Gestão de Colaboradores',
    status: 'online',
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: ['/cadastrar', '/login'],
      colaboradores: ['/colaboradores']
    }
  });
});

connectDB();

app.use("/", authRoutes);
app.use("/", colaboradorRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
