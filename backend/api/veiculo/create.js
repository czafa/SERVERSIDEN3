// SERVER-SIDE/N3/backend/api/veiculo/create.js

const { create } = require("../../controllers/veiculoController");
const { requireAdmin } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAdmin(req, res);
  if (!user) return;

  return create(req, res);
};
