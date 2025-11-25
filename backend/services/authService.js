const bcrypt = require("bcryptjs");
const usuarioModel = require("../models/usuarioModel");
const { gerarToken } = require("../config/auth");

async function registrarUsuario({ nome, email, senha, role }) {
  const senha_hash = await bcrypt.hash(senha, 10);

  const { data, error } = await usuarioModel.criarUsuario({
    nome,
    email,
    senha_hash,
    role,
  });

  if (error) {
    console.error("Erro Supabase criarUsuario:", error);
    throw new Error(error.message || "Erro ao criar usuário");
  }

  return data;
}

async function login({ email, senha }) {
  const { data: usuario, error } = await usuarioModel.buscarUsuarioPorEmail(
    email
  );

  if (error || !usuario) {
    throw new Error("Usuário ou senha inválidos");
  }

  const senhaConfere = await bcrypt.compare(senha, usuario.senha_hash);

  if (!senhaConfere) {
    throw new Error("Usuário ou senha inválidos");
  }

  // payload do token
  const payload = {
    sub: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    role: usuario.role,
  };

  const token = gerarToken(payload);

  return { token, usuario: payload };
}

module.exports = {
  registrarUsuario,
  login,
};
