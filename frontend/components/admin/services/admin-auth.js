// Lightweight client-side auth for the admin panel (/satpuda-superpower).
// The token is issued by the backend (POST /api/admin/login) and stored in
// localStorage with a 24h client-side expiry. Every protected admin request
// sends it via the Authorization header (see authHeaders).

const TOKEN_KEY = "satpuda_admin_auth";
const SESSION_MS = 24 * 60 * 60 * 1000; // 24 hours
const UNAUTHORIZED_EVENT = "satpuda-admin-unauthorized";

function normalizeBaseUrl(apiBaseUrl) {
  return String(apiBaseUrl || "").replace(/\/$/, "");
}

export function getAdminToken() {
  try {
    const raw = localStorage.getItem(TOKEN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.token || !parsed?.exp || Date.now() > parsed.exp) {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }
    return parsed.token;
  } catch {
    return null;
  }
}

export function isAdminAuthenticated() {
  return Boolean(getAdminToken());
}

export function clearAdminToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function authHeaders() {
  const token = getAdminToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Called when a protected request returns 401 — clears the session and lets the
// admin page swap back to the login screen.
export function notifyUnauthorized() {
  clearAdminToken();
  window.dispatchEvent(new CustomEvent(UNAUTHORIZED_EVENT));
}

export function onAdminUnauthorized(handler) {
  window.addEventListener(UNAUTHORIZED_EVENT, handler);
  return () => window.removeEventListener(UNAUTHORIZED_EVENT, handler);
}

export async function loginAdmin(apiBaseUrl, username, password) {
  const response = await fetch(`${normalizeBaseUrl(apiBaseUrl)}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !payload?.token) {
    throw new Error(payload?.error || "Login failed. Please try again.");
  }

  localStorage.setItem(TOKEN_KEY, JSON.stringify({ token: payload.token, exp: Date.now() + SESSION_MS }));
  return payload;
}
