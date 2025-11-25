const { login } = require("../../controllers/authController");

module.exports = async (req, res) => {
  return login(req, res);
};
