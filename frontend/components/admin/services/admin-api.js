import { authHeaders, notifyUnauthorized } from "./admin-auth.js";

function normalizeBaseUrl(apiBaseUrl) {
  return String(apiBaseUrl || "").replace(/\/$/, "");
}

function buildQueryString(params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    query.set(key, String(value));
  });

  const search = query.toString();
  return search ? `?${search}` : "";
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { ...authHeaders(), ...(options.headers || {}) }
  });

  if (response.status === 401) {
    notifyUnauthorized();
    throw new Error("Session expired. Please sign in again.");
  }

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.error || "Request failed.");
  }

  return payload;
}

export function buildAdminApiUrl(apiBaseUrl, path, params = {}) {
  const normalizedBase = normalizeBaseUrl(apiBaseUrl);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}${buildQueryString(params)}`;
}

export function fetchAdminOverview(apiBaseUrl, options = {}) {
  return requestJson(buildAdminApiUrl(apiBaseUrl, "/api/admin/overview"), options);
}

export function fetchAdminCollection(apiBaseUrl, collectionKey, params = {}, options = {}) {
  return requestJson(buildAdminApiUrl(apiBaseUrl, `/api/admin/${collectionKey}`, params), options);
}

export function deleteAdminRecord(apiBaseUrl, collectionKey, recordId, options = {}) {
  return requestJson(buildAdminApiUrl(apiBaseUrl, `/api/admin/${collectionKey}/${recordId}`), {
    method: "DELETE",
    ...options
  });
}
