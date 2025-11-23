// SERVER-SIDE/N3/backend/utils/classType.js

function classificarPorTipo(preco) {
  if (preco < 45000) return 1; // popular
  if (preco >= 45000 && preco < 90000) return 2; // luxo
  return 3; // super luxo
}

module.exports = { classificarPorTipo };
