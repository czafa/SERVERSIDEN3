// SERVER-SIDE/N3/backend/config/auth.js

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = "1h";

if (!JWT_SECRET) {
  throw new Error("chave de acesso não configurada no .env");
}

function gerarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verificarToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  gerarToken,
  verificarToken,
};
