import { useCallback, useEffect, useState } from "react";
import { fetchAdminOverview } from "../services/admin-api.js";

export function useAdminOverview(apiBaseUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = useCallback(() => {
    setRefreshIndex((current) => current + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function loadOverview() {
      setLoading(true);
      setError(null);

      try {
        const payload = await fetchAdminOverview(apiBaseUrl, { signal: controller.signal });
        if (isMounted) {
          setData(payload);
        }
      } catch (requestError) {
        if (requestError.name !== "AbortError" && isMounted) {
          setError(requestError.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadOverview();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [apiBaseUrl, refreshIndex]);

  return {
    data,
    loading,
    error,
    refresh
  };
}
