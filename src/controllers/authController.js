import authService from "../services/authService.js";

export default {
  async registrar(req, res, next) {
    try {
      const { usuario, token } = await authService.registrar(req.body);
      res.status(201).json({
        message: "Usuário registrado com sucesso!",
        usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo },
        token,
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const { email, senha } = req.body;
      const { usuario, token } = await authService.login(email, senha);
      res.json({
        message: "Login bem-sucedido!",
        usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo },
        token,
      });
    } catch (error) {
      next(error);
    }
  },
};
