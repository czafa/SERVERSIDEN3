// SERVER-SIDE/N3/backend/api/veiculo/create.js

const { create } = require("../../controllers/veiculoController");

module.exports = async (req, res) => {
  return create(req, res);
};
