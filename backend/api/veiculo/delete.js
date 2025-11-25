// SERVER-SIDE/N3/backend/api/veiculo/delete.js

const { remove } = require("../../controllers/veiculoController");
const { requireAdmin } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAdmin(req, res);
  if (!user) return;

  return remove(req, res);
};
