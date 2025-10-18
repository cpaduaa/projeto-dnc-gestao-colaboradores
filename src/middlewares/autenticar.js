import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const autenticar = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Acesso negado. É necessário estar logado para acessar este recurso." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Sua sessão expirou ou o token é inválido. Faça login novamente." });
  }
};

export const autorizarAdmin = (req, res, next) => {
  if (req.usuario.tipo !== "admin") {
    return res.status(403).json({ error: "Ação restrita. Apenas administradores podem realizar esta operação." });
  }
  next();
};
