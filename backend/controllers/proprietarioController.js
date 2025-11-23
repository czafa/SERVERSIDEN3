// SERVER-SIDE/N3/backend/controllers/proprietarioController.js

const proprietarioService = require("../services/proprietarioService");

async function create(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método CREATE não permitido" });
  }

  try {
    const { nome, cpf, telefone } = req.body;
    const novo = await proprietarioService.criarProprietario({
      nome,
      cpf,
      telefone,
    });
    return res.status(201).json(novo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function list(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método GET não permitido" });
  }

  try {
    const lista = await proprietarioService.obterProprietarios();
    return res.status(200).json(lista);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  create,
  list,
};
