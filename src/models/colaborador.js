import mongoose from "mongoose";

const colaboradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cargo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dataContratacao: { type: Date, default: Date.now },
});

const Colaborador = mongoose.model("Colaborador", colaboradorSchema);
export default Colaborador;
