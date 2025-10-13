import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import colaboradorRoutes from "./routes/colaboradorRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/", authRoutes);
app.use("/", colaboradorRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
