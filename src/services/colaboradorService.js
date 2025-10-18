import colaboradorRepository from "../repositories/colaboradorRepository.js";

export default {
  async criarColaborador(data) {
    return colaboradorRepository.create(data);
  },

  async listarFiltrandoPorUsuario(tipo, userId) {
    if (tipo === "admin") {
      return colaboradorRepository.findAll();
    } else {
      return colaboradorRepository.findByUserId(userId);
    }
  },

  async buscarColaboradorPorId(id) {
    const colaborador = await colaboradorRepository.findById(id);
    if (!colaborador) throw new Error("Colaborador não encontrado. Verifique o ID e tente novamente.");
    return colaborador;
  },

  async atualizarColaborador(id, data) {
    const colaborador = await colaboradorRepository.update(id, data);
    if (!colaborador) throw new Error("Ocorreu um problema ao atualizar os dados do colaborador. Tente novamente.");
    return colaborador;
  },

  async deletarColaborador(id) {
    const colaborador = await colaboradorRepository.delete(id);
    if (!colaborador) throw new Error("Não foi possível excluir o colaborador. Verifique o ID e tente novamente.");
    return colaborador;
  },
};
