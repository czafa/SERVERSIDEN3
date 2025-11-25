// SERVER-SIDE/N3/backend/api/veiculo/update.js

const { update } = require("../../controllers/veiculoController");
const { requireAdmin } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAdmin(req, res);
  if (!user) return;

  return update(req, res);
};
