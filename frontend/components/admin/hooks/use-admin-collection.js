import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchAdminCollection } from "../services/admin-api.js";

export function useAdminCollection(apiBaseUrl, collectionKey, query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const serializedQuery = useMemo(() => JSON.stringify(query || {}), [query]);

  const refresh = useCallback(() => {
    setRefreshIndex((current) => current + 1);
  }, []);

  useEffect(() => {
    if (!collectionKey) {
      return undefined;
    }

    const controller = new AbortController();
    let isMounted = true;

    async function loadCollection() {
      setLoading(true);
      setError(null);

      try {
        const payload = await fetchAdminCollection(apiBaseUrl, collectionKey, query, {
          signal: controller.signal
        });

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

    loadCollection();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [apiBaseUrl, collectionKey, refreshIndex, serializedQuery]);

  return {
    data,
    loading,
    error,
    refresh
  };
}
