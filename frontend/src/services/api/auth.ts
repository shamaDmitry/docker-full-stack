const apiUrl = `${import.meta.env.VITE_API_URL}`;

export interface registerCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
    account_id?: string;
    role?: string;
  };
}

export async function registerUser(
  credentials: registerCredentials
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${apiUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.message || "Register failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
