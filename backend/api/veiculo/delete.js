// SERVER-SIDE/N3/backend/api/veiculo/delete.js

const { remove } = require("../../controllers/veiculoController");

module.exports = async (req, res) => {
  return remove(req, res);
};
