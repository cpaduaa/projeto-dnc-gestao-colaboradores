import Colaborador from "../models/colaborador.js";

export default {
  // Listar
  async listar(req, res, next) {
    try {
      const usuarioLogado = req.usuario;

      let resultados = [];

      if (usuarioLogado.tipo === "admin") {
        resultados = await Colaborador.find();
      } else {
        const colaborador = await Colaborador.findOne({ email: usuarioLogado.email });
        if (colaborador) resultados.push(colaborador);
      }

      res.json(resultados);
    } catch (error) {
      next(error);
    }
  },

  // Criar
  async criar(req, res, next) {
    try {
      const colaborador = new Colaborador(req.body);
      await colaborador.save();
      res.status(201).json(colaborador);
    } catch (error) {
      next(error);
    }
  },

  // Editar
  async editar(req, res, next) {
    try {
      const { id } = req.params;
      const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, req.body, { new: true });
      if (!colaboradorAtualizado) return res.status(404).json({ error: "Colaborador não encontrado" });
      res.json(colaboradorAtualizado);
    } catch (error) {
      next(error);
    }
  },

  // Deletar
  async deletar(req, res, next) {
    try {
      const { id } = req.params;
      const colaboradorRemovido = await Colaborador.findByIdAndDelete(id);
      if (!colaboradorRemovido) return res.status(404).json({ error: "Colaborador não encontrado" });
      res.json({ message: "Colaborador removido com sucesso" });
    } catch (error) {
      next(error);
    }
  },
};
