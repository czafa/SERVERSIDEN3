// SERVER-SIDE/N3/backend/api/proprietario/list.js

const { list } = require("../../controllers/proprietarioController");

module.exports = async (req, res) => {
  return list(req, res);
};
