const { registrar } = require("../../controllers/authController");

module.exports = async (req, res) => {
  return registrar(req, res);
};
