const { verificarToken } = require("../config/auth");

function extrairToken(req) {
  const authHeader = req.headers.authorization || "";
  const [tipo, token] = authHeader.split(" ");

  if (tipo !== "Bearer" || !token) {
    return null;
  }

  return token;
}

// Qualquer usuário autenticado (admin ou user)
async function requireAuth(req, res) {
  try {
    const token = extrairToken(req);

    if (!token) {
      res.status(401).json({ error: "Token não fornecido" });
      return null;
    }

    const payload = verificarToken(token);
    req.user = payload;
    return payload;
  } catch (error) {
    console.error("Erro requireAuth:", error);
    res.status(401).json({ error: "Token inválido ou expirado" });
    return null;
  }
}

// Apenas admin pode continuar
async function requireAdmin(req, res) {
  const user = await requireAuth(req, res);
  if (!user) return null;

  if (user.role !== "admin") {
    res.status(403).json({ error: "Apenas ADM" });
    return null;
  }

  return user;
}

module.exports = {
  requireAuth,
  requireAdmin,
};
