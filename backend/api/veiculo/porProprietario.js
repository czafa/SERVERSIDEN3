// SERVER-SIDE/N3/backend/api/veiculo/proprietario.js

const { listPorDono } = require("../../controllers/veiculoController");

module.exports = async (req, res) => {
  return listPorDono(req, res);
};
