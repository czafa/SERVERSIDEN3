// backend/services/veiculoService.js
const veiculoModel = require("../models/veiculoModel");
const { classificarPorTipo } = require("../utils/classType");

// CREATE
async function criarVeiculo(dados) {
  const id_tipo = classificarPorTipo(dados.preco_veiculo);

  const { data, error } = await veiculoModel.createVeiculo({
    ...dados,
    id_tipo,
  });

  if (error) {
    console.error("Erro Supabase createVeiculo:", error);
    throw new Error(error.message || "Erro ao criar veículo");
  }

  return data;
}

// READ - todos
async function obterVeiculos() {
  const { data, error } = await veiculoModel.listVeiculos();

  if (error) {
    console.error("Erro Supabase listVeiculos:", error);
    throw new Error(error.message || "Erro ao listar veículos");
  }

  return data;
}

// READ - por proprietário
async function obterVeiculosPorProprietario(id_proprietario) {
  const { data, error } = await veiculoModel.listVeiculosPorProprietario(
    id_proprietario
  );

  if (error) {
    console.error("Erro Supabase listVeiculosPorProprietario:", error);
    throw new Error(
      error.message || "Erro ao listar veículos por proprietário"
    );
  }

  return data;
}

// READ - por tipo (texto)
async function obterVeiculosPorTipo(tipo) {
  const { data, error } = await veiculoModel.listVeiculosPorTipo(tipo);

  if (error) {
    console.error("Erro Supabase listVeiculosPorTipo:", error);
    throw new Error(error.message || "Erro ao listar veículos por tipo");
  }

  return data;
}

// UPDATE
async function atualizarVeiculo(id, dados) {
  const campos = { ...dados };

  // se o preço foi enviado, recalcula id_tipo
  if (dados.preco_veiculo !== undefined) {
    campos.id_tipo = classificarPorTipo(dados.preco_veiculo);
  }

  const { data, error } = await veiculoModel.updateVeiculo(id, campos);

  if (error) {
    console.error("Erro Supabase updateVeiculo:", error);
    throw new Error(error.message || "Erro ao atualizar veículo");
  }

  return data;
}

// DELETE
async function removerVeiculo(id) {
  const { error } = await veiculoModel.deleteVeiculo(id);

  if (error) {
    console.error("Erro Supabase deleteVeiculo:", error);
    throw new Error(error.message || "Erro ao remover veículo");
  }

  return { message: "Veículo removido com sucesso" };
}

module.exports = {
  criarVeiculo,
  obterVeiculos,
  obterVeiculosPorProprietario,
  obterVeiculosPorTipo,
  atualizarVeiculo,
  removerVeiculo,
};
