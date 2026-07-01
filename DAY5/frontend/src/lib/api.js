const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

const buildUrl = (path) => `${API_BASE_URL}${path}`;

const readErrorMessage = async (response) => {
  try {
    const payload = await response.json();
    return payload?.message || "Request failed";
  } catch {
    return "Request failed";
  }
};

const request = async (path, options = {}) => {
  const response = await fetch(buildUrl(path), {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response));
  }

  return response.json();
};

export const getUsers = async () => {
  const payload = await request("/api/users");
  return Array.isArray(payload?.data) ? payload.data : [];
};

export const createUser = async (data) =>
  request("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateUser = async (id, data) =>
  request(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteUser = async (id) =>
  request(`/api/users/${id}`, {
    method: "DELETE",
  });
