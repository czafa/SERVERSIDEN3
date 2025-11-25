// SERVER-SIDE/N3/backend/api/veiculo/tipo.js

const { listPorTipo } = require("../../controllers/veiculoController");

module.exports = async (req, res) => {
  return listPorTipo(req, res);
};
