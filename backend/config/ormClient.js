// ./config/ormClient.js
// ORM para o Supabase

// 1) Carrega as variáveis do .env.local (apenas em dev)
require("dotenv").config({ path: ".env.local" });

const { createClient } = require("@supabase/supabase-js");

// 2) Lê as variáveis do process.env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

// 3) Só dá erro se, depois disso, ainda estiver faltando algo
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL:", supabaseUrl);
  console.error("Supabase key existe?", !!supabaseKey);
  throw new Error("VA do Supabase não configuradas.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
