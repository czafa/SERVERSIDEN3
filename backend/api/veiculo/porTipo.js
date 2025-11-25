// SERVER-SIDE/N3/backend/api/veiculo/tipo.js

const { listPorTipo } = require("../../controllers/veiculoController");
const { requireAuth } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAuth(req, res);
  if (!user) return;

  return listPorTipo(req, res);
};
