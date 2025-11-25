// SERVER-SIDE/N3/backend/api/proprietario/create.js

const { create } = require("../../controllers/proprietarioController");
const { requireAdmin } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAdmin(req, res);
  if (!user) return;

  return create(req, res);
};
