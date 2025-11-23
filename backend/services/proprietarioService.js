// SERVER-SIDE/N3/backend/services/proprietarioService.js

const proprietarioModel = require("../models/proprietarioModel");

async function criarProprietario(dados) {
  const { data, error } = await proprietarioModel.createProprietario(dados);
  if (error) {
    throw new Error(error.message || "Erro ao criar proprietário");
  }
  return data;
}

async function obterProprietarios() {
  const { data, error } = await proprietarioModel.listProprietarios();
  if (error) {
    throw new Error(error.message || "Erro ao listar proprietários");
  }
  return data;
}

module.exports = {
  criarProprietario,
  obterProprietarios,
};
