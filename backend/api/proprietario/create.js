// SERVER-SIDE/N3/backend/api/proprietario/create.js

const { create } = require("../../controllers/proprietarioController");

module.exports = async (req, res) => {
  // chama essa funcaoo na vercel para /api/proprietario/create
  return create(req, res);
};
