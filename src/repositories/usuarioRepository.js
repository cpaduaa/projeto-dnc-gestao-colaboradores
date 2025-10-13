import Usuario from "../models/usuario.js";

export default {
  async criar(data) {
    const usuario = new Usuario(data);
    return usuario.save();
  },

  async buscarPorEmail(email) {
    return Usuario.findOne({ email });
  },

  async buscarPorId(id) {
    return Usuario.findById(id);
  },

  async listarTodos() {
    return Usuario.find().select("-senha");
  },
};
