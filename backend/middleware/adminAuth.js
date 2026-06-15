// Simple shared-secret bearer auth for the admin panel (/satpuda-superpower).
// Clients obtain the token from POST /api/admin/login and send it as
// `Authorization: Bearer <token>` on every protected admin request.
function adminAuth(req, res, next) {
  const expected = process.env.ADMIN_AUTH_TOKEN;

  if (!expected) {
    return res.status(500).json({ error: "Admin auth is not configured on the server." });
  }

  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length).trim() : "";

  if (!token || token !== expected) {
    return res.status(401).json({ error: "Unauthorized. Please sign in to the admin panel." });
  }

  return next();
}

module.exports = { adminAuth };
