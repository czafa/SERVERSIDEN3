//ORM para o supabase

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("VA do Supabase não configuradas.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
