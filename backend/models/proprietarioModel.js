// SERVER-SIDE/N3/backend/models/proprietarioModel.js

const { supabase } = require("../config/ormClient");

async function createProprietario({ nome, cpf, telefone }) {
  // achamos melhor essa ordem dos parâmetros
  return await supabase
    .from("proprietario")
    .insert({ nome, cpf, telefone })
    .select()
    .single();
}

async function listProprietarios() {
  return await supabase.from("proprietario").select("*");
}

module.exports = {
  createProprietario,
  listProprietarios,
};
