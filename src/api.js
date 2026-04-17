import axios from "axios";

/*
========================================================
 BACKEND BASE URL
========================================================
- Local Development:
    http://localhost:5000/api

- Render Production:
    https://nursing-backend-rr85.onrender.com/api
========================================================
*/

// 🔁 AUTO SWITCH (BEST PRACTICE)
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://api.jadhavarfoundations.org/api";

// ================= AXIOS INSTANCE =================
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // JWT in headers (correct)
});

// ================= TOKEN INTERCEPTOR =================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ================= AUTH API =================
export const authAPI = {
  login: (credentials) => api.post("/auth/login", credentials),
  checkAuth: () => api.get("/auth/check-auth"),
};

// ================= GALLERY API =================
export const galleryAPI = {
  getAll: () => api.get("/gallery"),
  getById: (id) => api.get(`/gallery/${id}`),

  create: (formData) =>
    api.post("/gallery", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  update: (id, formData) =>
    api.put(`/gallery/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  delete: (id) => api.delete(`/gallery/${id}`),
};

// ================= ANNOUNCEMENT API =================
export const announcementAPI = {
  getAll: () => api.get("/announcements"),
  getById: (id) => api.get(`/announcements/${id}`),

  getAllAdmin: () => api.get("/announcements/all"),
  create: (data) => api.post("/announcements", data),
  update: (id, data) => api.put(`/announcements/${id}`, data),
  delete: (id) => api.delete(`/announcements/${id}`),
};

// ================= CAREER API =================
export const careerAPI = {
  getAll: () => api.get("/careers"),
  getById: (id) => api.get(`/careers/${id}`),

  getAllAdmin: () => api.get("/careers/all"),
  create: (data) => api.post("/careers", data),
  update: (id, data) => api.put(`/careers/${id}`, data),
  delete: (id) => api.delete(`/careers/${id}`),
};

// ... existing imports and code ...
export const blogAPI = {
  getAll: () => api.get("/blogs"),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  
  create: (formData) =>
    api.post("/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  
  update: (id, formData) =>
    api.put(`/blogs/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  
  delete: (id) => api.delete(`/blogs/${id}`),
};

export default api;

