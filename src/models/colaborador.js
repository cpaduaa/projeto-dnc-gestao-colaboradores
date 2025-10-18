import mongoose from "mongoose";

const colaboradorSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: [true, 'Nome é obrigatório'],
    trim: true,
    minlength: [2, 'Nome deve ter pelo menos 2 caracteres']
  },
  cargo: { 
    type: String, 
    required: [true, 'Cargo é obrigatório'],
    trim: true
  },
  email: { 
    type: String, 
    required: [true, 'Email é obrigatório'], 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido']
  },
  dataContratacao: { type: Date, default: Date.now },
}, {
  timestamps: true 
});

const Colaborador = mongoose.model("Colaborador", colaboradorSchema);
export default Colaborador;
