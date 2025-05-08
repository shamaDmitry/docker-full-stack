import { logOutUser } from "./auth";

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const baseUrl = `${import.meta.env.VITE_API_URL}`;
  const url = `${baseUrl}${endpoint}`;

  const requestHeaders = new Headers(options.headers);
  requestHeaders.set("Content-Type", "application/json");

  try {
    const token = localStorage.getItem("token");

    if (token) {
      requestHeaders.set("Authorization", `Bearer ${token}`);
    }

    // Make the API request
    const response = await fetch(url, {
      ...options,
      headers: requestHeaders,
    });

    if (response.status === 401) {
      await logOutUser();

      window.location.href = "/";

      throw new Error("Unauthorized: Please log in again");
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      console.error("API Error Response:", {
        endpoint,
        status: response.status,
        errorData,
      });

      throw new Error(
        errorData.message ||
          errorData.error ||
          `API request failed with status ${response.status}`
      );
    }

    // For 204 No Content responses, return null instead of trying to parse JSON
    if (response.status === 204) {
      return null as unknown as T;
    }

    return await response.json();
  } catch (error) {
    console.error(`API request error for ${endpoint}:`, error);
    throw error;
  }
}
