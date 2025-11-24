// backend/models/veiculoModel.js

//CRUD

const { supabase } = require("../config/ormClient");

// CREATE
async function createVeiculo({
  placa_veiculo,
  modelo_veiculo,
  preco_veiculo,
  id_proprietario,
  id_tipo,
}) {
  return await supabase
    .from("veiculo")
    .insert({
      placa_veiculo,
      modelo_veiculo,
      preco_veiculo,
      id_proprietario,
      id_tipo,
    })
    .select()
    .single();
}

// READ - listar usando join
async function listVeiculos() {
  return await supabase
    .from("veiculo")
    .select("*, proprietario(nome, cpf, telefone), tipo_veiculo(tipo)");
}

// READ - por proprietário
async function listVeiculosPorProprietario(id_proprietario) {
  return await supabase
    .from("veiculo")
    .select("*, proprietario(nome, cpf, telefone), tipo_veiculo(tipo)")
    .eq("id_proprietario", id_proprietario);
}

// READ - por tipo
async function listVeiculosPorTipo(tipo) {
  return await supabase
    .from("veiculo")
    .select("*, proprietario(nome, cpf, telefone), tipo_veiculo(tipo)")
    .eq("tipo_veiculo.tipo", tipo);
}

// UPDATE
async function updateVeiculo(id, campos) {
  return await supabase
    .from("veiculo")
    .update(campos)
    .eq("id", id)
    .select()
    .single();
}

// DELETE
async function deleteVeiculo(id) {
  return await supabase.from("veiculo").delete().eq("id", id);
}

module.exports = {
  createVeiculo,
  listVeiculos,
  listVeiculosPorProprietario,
  listVeiculosPorTipo,
  updateVeiculo,
  deleteVeiculo,
};
