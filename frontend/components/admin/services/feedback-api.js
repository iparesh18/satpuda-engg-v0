import { authHeaders, notifyUnauthorized } from "./admin-auth.js";

function normalizeBaseUrl(apiBaseUrl) {
  return String(apiBaseUrl || "").replace(/\/$/, "");
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

export function fetchAdminFeedback(apiBaseUrl, options = {}) {
  return requestJson(`${normalizeBaseUrl(apiBaseUrl)}/api/feedbacks/admin`, options);
}

export function approveFeedback(apiBaseUrl, id, options = {}) {
  return requestJson(`${normalizeBaseUrl(apiBaseUrl)}/api/feedbacks/${id}/approve`, {
    method: "PATCH",
    ...options
  });
}

export function deleteFeedback(apiBaseUrl, id, options = {}) {
  return requestJson(`${normalizeBaseUrl(apiBaseUrl)}/api/feedbacks/${id}`, {
    method: "DELETE",
    ...options
  });
}
