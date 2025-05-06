const apiUrl = `${import.meta.env.VITE_API_URL}`;

export interface registerCredentials {
  email: string;
  password: string;
  userName: string;
}

export interface loginCredentials {
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user?: {
    id: string;
    email: string;
  };
}

export interface loginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
  };
}

export async function registerUser(
  credentials: registerCredentials
): Promise<RegisterResponse> {
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

export async function loginUser(
  credentials: loginCredentials
): Promise<loginResponse> {
  try {
    const response = await fetch(`${apiUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.message || "Login failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
