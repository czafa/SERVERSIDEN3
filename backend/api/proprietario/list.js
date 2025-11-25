// SERVER-SIDE/N3/backend/api/proprietario/list.js

const { list } = require("../../controllers/proprietarioController");
const { requireAuth } = require("../../middlewares/authMiddleware");

module.exports = async (req, res) => {
  const user = await requireAuth(req, res);
  if (!user) return;

  return list(req, res);
};
