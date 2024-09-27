import { useState } from "react";

function useCustomFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [returnData, setReturnData] = useState(null);

  const customFetcher = async function (
    method = "GET",
    URL,
    body = null,
    headers = {},
  ) {
    setIsLoading(true);
    setError(null);
    setReturnData(null);
    try {
      const res = await fetch(URL, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        credentials: "include",
        body: body ? JSON.stringify(body) : null,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${res.status}`,
        );
      }

      const data = await res.json();
      setReturnData(data);
      return { data };
    } catch (err) {
      setError(err.message || "Something went wrong");
      return { error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { customFetcher, isLoading, error, returnData, setError };
}

export default useCustomFetcher;
