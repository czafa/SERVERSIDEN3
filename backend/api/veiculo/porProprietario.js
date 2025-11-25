// SERVER-SIDE/N3/backend/api/veiculo/proprietario.js

const { listPorDono } = require("../../controllers/veiculoController");
const { requireAuth } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAuth(req, res);
  if (!user) return;

  return listPorDono(req, res);
};
