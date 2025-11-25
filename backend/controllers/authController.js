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

module.exports = {
  login,
  registrar,
};
