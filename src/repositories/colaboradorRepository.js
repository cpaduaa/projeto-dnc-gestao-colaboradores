import Colaborador from "../models/colaborador.js";

export default {
  async create(data) {
    const colaborador = new Colaborador(data);
    return colaborador.save();
  },

  async findAll() {
    return Colaborador.find();
  },

  async findById(id) {
    return Colaborador.findById(id);
  },

  async findByUserId(userId) {
    return Colaborador.find({ _id: userId });
  },

  async update(id, data) {
    return Colaborador.findByIdAndUpdate(id, data, { new: true });
  },

  async delete(id) {
    return Colaborador.findByIdAndDelete(id);
  },
};
