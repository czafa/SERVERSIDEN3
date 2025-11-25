// SERVER-SIDE/N3/backend/api/veiculo/list.js

const { list } = require("../../controllers/veiculoController");

module.exports = async (req, res) => {
  return list(req, res);
};
