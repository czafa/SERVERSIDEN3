// SERVER-SIDE/N3/backend/api/auth/login.js

const { login } = require("../../controllers/authController");

module.exports = async (req, res) => {
  return login(req, res);
};
