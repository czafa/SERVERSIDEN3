// SERVER-SIDE/N3/backend/api/veiculo/list.js

const { list } = require("../../controllers/veiculoController");
const { requireAuth } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAuth(req, res);
  if (!user) return;

  return list(req, res);
};
