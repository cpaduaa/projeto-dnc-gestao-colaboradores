import usuarioRepository from "../repositories/usuarioRepository.js";
import { gerarToken } from "../config/jwt.js";
import { enviarEmailBoasVindas } from "../config/email.js";

export default {
  async registrar(data) {
    const existente = await usuarioRepository.buscarPorEmail(data.email);
    if (existente) throw new Error("Este e-mail já está sendo usado. Tente outro ou faça login.");

    const usuario = await usuarioRepository.criar(data);
    const token = gerarToken(usuario);
    
    // Tenta enviar email mas não quebra se falhar
    try {
      await enviarEmailBoasVindas(usuario.email, usuario.nome);
    } catch (emailError) {
      console.log('Erro ao enviar email (não crítico):', emailError.message);
    }

    return { usuario, token };
  },

  async login(email, senha) {
    const usuario = await usuarioRepository.buscarPorEmail(email);
    if (!usuario) throw new Error("Não encontramos uma conta com este e-mail. Verifique e tente novamente.");

    const senhaValida = await usuario.compararSenha(senha);
    if (!senhaValida) throw new Error("A senha informada está incorreta. Tente novamente.");

    const token = gerarToken(usuario);
    return { usuario, token };
  },
};
