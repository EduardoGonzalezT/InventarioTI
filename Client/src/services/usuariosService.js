import api from "./api";

export const getUsuarios = () => api.get("/usuarios/all");
export const getUsuarioById = (id) => api.get(`/usuarios/${id}`);
export const createUsuario = (usuario) => api.post("/usuarios/create", usuario);
export const updateUsuario = (id, usuario) => api.put(`/usuarios/${id}`, usuario);
export const deleteUsuario = (id) => api.delete(`/usuarios/${id}`);
export const loginUsuario = (usuario, contrasena) => api.post("/usuarios/login", { usuario, contrasena });
export const logoutUsuario = () => api.post("/usuarios/logout");