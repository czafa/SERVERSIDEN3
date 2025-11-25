// SERVER-SIDE/N3/backend/api/veiculo/update.js

const { update } = require("../../controllers/veiculoController");

module.exports = async (req, res) => {
  return update(req, res);
};
