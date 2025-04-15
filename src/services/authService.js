const BASE_URL = 'https://ears-backend.onrender.com';

// 🧾 Sign Up: POST /auth/signup
export async function signupUser({ username, email, password }) {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Signup failed");
    }
  
    return res.json(); // Should return user data
  }
  
  // 🔐 Login: POST /auth/login
  export async function loginUser({ email, password }) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Login failed");
    }
  
    return res.json(); // Should return token and expiration
  }
  
  // 🧑‍💼 Get Authenticated User: GET /users/me
  export async function getAuthenticatedUser() {
    const token = localStorage.getItem("token");
  
    const res = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      throw new Error("Not authenticated");
    }
  
    return res.json();
  }

  // POST /auth/verify
export async function verifyUser({ email, code }) {
  const res = await fetch(`${BASE_URL}/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Verification failed");
  }

  return res.json();
}

// POST /auth/resend?email=...
export async function resendVerification(email) {
  const res = await fetch(`${BASE_URL}/auth/resend?email=${encodeURIComponent(email)}`, {
    method: "POST",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to resend code");
  }

  return res.json();
}