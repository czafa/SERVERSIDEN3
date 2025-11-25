const { supabase } = require("../config/ormClient");

async function buscarUsuarioPorEmail(email) {
  return await supabase
    .from("usuarios")
    .select("*")
    .eq("email", email)
    .single();
}

async function criarUsuario({ nome, email, senha_hash, role }) {
  return await supabase
    .from("usuarios")
    .insert({ nome, email, senha_hash, role })
    .select()
    .single();
}

module.exports = {
  buscarUsuarioPorEmail,
  criarUsuario,
};
