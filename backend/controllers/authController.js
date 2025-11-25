// SERVER-SIDE/N3/backend/controllers/authController.js

const authService = require("../services/authService");

// POST /api/auth/login
async function login(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    const resultado = await authService.login({ email, senha });

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Erro login authController:", error);
    return res.status(401).json({ error: error.message });
  }
}

// POST do registro de users
async function registrar(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { nome, email, senha, role } = req.body;

    if (!nome || !email || !senha || !role) {
      return res
        .status(400)
        .json({ error: "nome, email, senha e role são obrigatórios" });
    }

    const usuario = await authService.registrarUsuario({
      nome,
      email,
      senha,
      role,
    });

    return res.status(201).json(usuario);
  } catch (error) {
    console.error("Erro registrar authController:", error);
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  login,
  registrar,
};
