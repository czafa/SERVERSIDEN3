// backend/controllers/veiculoController.js
//POST, GET list / GET por id / GET por tipo, PUT e DELETE

const veiculoService = require("../services/veiculoService");

// POST /api/veiculo/create
async function create(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "não permitido" });
  }

  try {
    const { placa_veiculo, modelo_veiculo, preco_veiculo, id_proprietario } =
      req.body;

    const novo = await veiculoService.criarVeiculo({
      placa_veiculo,
      modelo_veiculo,
      preco_veiculo,
      id_proprietario,
    });

    return res.status(201).json(novo);
  } catch (error) {
    console.error("Erro create veiculoController:", error);
    return res.status(400).json({ error: error.message });
  }
}

// GET /api/veiculo/list
async function list(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "não permitido" });
  }

  try {
    const lista = await veiculoService.obterVeiculos();
    return res.status(200).json(lista);
  } catch (error) {
    console.error("Erro list veiculoController:", error);
    return res.status(400).json({ error: error.message });
  }
}

// GET /api/veiculo/porProprietario?id_proprietario=...
async function listPordono(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "não permitido" });
  }

  try {
    const { id_proprietario } = req.query;

    const lista = await veiculoService.obterVeiculosPorProprietario(
      id_proprietario
    );
    return res.status(200).json(lista);
  } catch (error) {
    console.error("Erro listPor dono veiculoController:", error);
    return res.status(400).json({ error: error.message });
  }
}

// GET /api/veiculo/porTipo?tipo=luxo
async function listByType(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { tipo } = req.query; // popular | luxo | super_luxo

    const lista = await veiculoService.obterVeiculosPorTipo(tipo);
    return res.status(200).json(lista);
  } catch (error) {
    console.error("Erro listByType veiculoController:", error);
    return res.status(400).json({ error: error.message });
  }
}

// PUT /api/veiculo/update?id=...
async function update(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { id } = req.query;
    const dados = req.body;

    const atualizado = await veiculoService.atualizarVeiculo(id, dados);
    return res.status(200).json(atualizado);
  } catch (error) {
    console.error("Erro update veiculoController:", error);
    return res.status(400).json({ error: error.message });
  }
}

// DELETE /api/veiculo/delete?id=...
async function remove(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { id } = req.query;

    const resultado = await veiculoService.removerVeiculo(id);
    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Erro remove veiculoController:", error);
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  create,
  list,
  listPordono,
  listByType,
  update,
  remove,
};
