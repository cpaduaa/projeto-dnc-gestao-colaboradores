import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const gerarToken = (usuario) => {
  return jwt.sign(
    { id: usuario._id, tipo: usuario.tipo },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};
