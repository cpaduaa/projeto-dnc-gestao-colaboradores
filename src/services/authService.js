import usuarioRepository from "../repositories/usuarioRepository.js";
import { gerarToken } from "../config/jwt.js";

export default {
  async registrar(data) {
    const existente = await usuarioRepository.buscarPorEmail(data.email);
    if (existente) throw new Error("E-mail já cadastrado");

    const usuario = await usuarioRepository.criar(data);
    const token = gerarToken(usuario);

    return { usuario, token };
  },

  async login(email, senha) {
    const usuario = await usuarioRepository.buscarPorEmail(email);
    if (!usuario) throw new Error("Usuário não encontrado");

    const senhaValida = await usuario.compararSenha(senha);
    if (!senhaValida) throw new Error("Senha incorreta");

    const token = gerarToken(usuario);
    return { usuario, token };
  },
};
