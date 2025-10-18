export default function errorHandler(err, req, res, next) {
  console.error("🚨 Erro capturado:", err.message);
  
  // Erro de validação do Mongoose
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      error: "Dados inválidos",
      details: errors
    });
  }
  
  // Erro de email duplicado
  if (err.code === 11000) {
    return res.status(409).json({
      error: "Email já está sendo usado por outro colaborador"
    });
  }
  
  // Erro de ID inválido do MongoDB
  if (err.name === 'CastError') {
    return res.status(400).json({
      error: "ID inválido fornecido"
    });
  }
  
  // Erro genérico
  res.status(500).json({
    error: err.message || "Erro interno no servidor",
  });
}
