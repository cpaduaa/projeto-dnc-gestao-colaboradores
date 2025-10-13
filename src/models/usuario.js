import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  tipo: { type: String, enum: ["admin", "user"], default: "user" },
});

usuarioSchema.pre("save", async function (next) {
  if (!this.isModified("senha")) return next();
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

usuarioSchema.methods.compararSenha = async function (senhaDigitada) {
  return bcrypt.compare(senhaDigitada, this.senha);
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
